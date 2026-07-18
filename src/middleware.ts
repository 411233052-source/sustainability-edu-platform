import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 簡易記憶體型速率限制（Rate Limiting）配置
// 注意：在多實例部署環境中此為單機極限，但對基本惡意刷流量已有阻絕效果
const ipCache = new Map<string, { count: number; expires: number }>();
const RATE_LIMIT_WINDOW = 60000; // 時間視窗：1 分鐘
const MAX_REQUESTS = 100;        // 每個 IP 每分鐘限制請求次數

export function middleware(request: NextRequest) {
  // Next.js 16 已移除 NextRequest.ip，改由轉發標頭取得用戶端 IP
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';
  const now = Date.now();

  // 1. 速率限制檢查 (防範應用程式層 DoS / HTTP Flood)
  if (ip !== 'unknown') {
    const clientData = ipCache.get(ip);

    if (!clientData || now > clientData.expires) {
      // 首次存取或過期則重設
      ipCache.set(ip, { count: 1, expires: now + RATE_LIMIT_WINDOW });
    } else {
      // 視窗內累加次數
      clientData.count += 1;
      if (clientData.count > MAX_REQUESTS) {
        return new NextResponse('Too Many Requests - Rate limit exceeded.', {
          status: 429,
          statusText: 'Too Many Requests',
          headers: { 'Content-Type': 'text/plain' },
        });
      }
    }
  }

  // 2. 配置資安回應標頭 (防範網頁劫持與木馬腳本注入)
  const response = NextResponse.next();
  const headers = response.headers;

  // 防止遭受點擊劫持 (Clickjacking)
  headers.set('X-Frame-Options', 'DENY');

  // 啟用瀏覽器內建的 XSS 保護機制
  headers.set('X-XSS-Protection', '1; mode=block');

  // 防止瀏覽器進行 MIME 類型嗅探
  headers.set('X-Content-Type-Options', 'nosniff');

  // 限制引薦來源資料（Referrer）的曝露程度
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}

// 設定中間件的觸發路徑，排除靜態檔案與 Next.js 內部路由
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
