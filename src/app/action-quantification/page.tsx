/**
 * @fileoverview 通用減碳永續網站 — 第二章：企業減碳實戰班
 * @project 通用減碳永續網站
 * @description 呈現溫室氣體盤查三大範疇、綠色供應鏈挑戰與科學化減碳決策的互動式卡片內容。
 */

import { ChapterCompleteButton } from "@/components/chapter-complete-button";
import {
  Boxes,
  CheckCircle2,
  ChevronDown,
  Factory,
  Target,
  Truck,
} from "lucide-react";

const SCOPE_1_2_POINTS = [
  "ISO 14064 規範：針對組織層級的溫室氣體排放與削減，提供定量、監督及報告的國際標準。",
  "範疇一 (直接排放)：來自企業完全擁有或具備直接控制權的設施所產生的排放，如固定燃燒源或製程排放。",
  "範疇二 (間接排放)：企業為維持營運，向外部購買能源而在發電階段所產生的間接排放。",
] as const;

const SCOPE_3_POINTS = [
  "範疇三定義：不在範疇一、二之內，但因企業營運而在整個供應鏈上下游發生的間接排放。",
  "排放占比：範疇三通常佔企業整體碳足跡的 70% 至 90% 以上，是綠色供應鏈管理的關鍵。",
  "盤查難度：數據多掌握在外部供應商或消費者手中，極度依賴跨企業之協作與資訊透明度。",
] as const;

const GSCM_CHALLENGE_POINTS = [
  "法規壓力：歐盟碳邊境調整機制 (CBAM) 等強制性法規推行，碳排放數據直接影響國際市場競爭力。",
  "數據獲取瓶頸：供應鏈碳盤查面臨缺乏一手資料、品質參差不齊以及上下游重複計算的挑戰。",
  "資訊科技應用：透過人工智慧 (AI) 結合區塊鏈技術，確保跨國供應鏈碳資訊的真實性與互通性。",
] as const;

const PRECISION_DECISION_POINTS = [
  "環保產品宣告 (EPD)：企業可要求供應商提供標準化的產品碳足跡數據，降低對產業平均值的依賴。",
  "決策分析模型：導入如優劣解距離法 (TOPSIS) 等工具，客觀評估各項減碳策略的技術成熟度與預期成效。",
  "供應商激勵機制：將碳績效納入篩選指標，透過優先採購權等機制提升整體供應鏈的氣候風險抗性。",
] as const;

function CardPointList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 list-none space-y-3 p-0">
      {items.map((text) => (
        <li key={text} className="flex items-start gap-2">
          <CheckCircle2
            className="mt-0.5 size-4 shrink-0 text-emerald-600"
            aria-hidden
          />
          <span className="text-sm leading-relaxed text-zinc-700">{text}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ActionQuantificationPage() {
  return (
    <section className="space-y-10 rounded-2xl border border-zinc-200 bg-white p-8 shadow-md">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-emerald-700">
          溫室氣體盤查與綠色供應鏈管理
        </h1>
        <p className="mt-3 text-zinc-600">
          解析 ISO 14064 溫室氣體盤查標準的三大範疇，探討跨國綠色供應鏈管理的實務挑戰與科學決策。
        </p>
      </header>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">溫室氣體盤查的三大範疇</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-1 items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Factory className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-zinc-900">溫室氣體盤查標準與直接排放</h3>
                <CardPointList items={SCOPE_1_2_POINTS} />
              </div>
            </div>
          </article>
          <article className="flex h-full flex-col rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-1 items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Truck className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-zinc-900">價值鏈與其他間接排放</h3>
                <CardPointList items={SCOPE_3_POINTS} />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">綠色供應鏈的挑戰與決策</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-1 items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Boxes className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-zinc-900">綠色供應鏈 (GSCM) 的挑戰</h3>
                <CardPointList items={GSCM_CHALLENGE_POINTS} />
              </div>
            </div>
          </article>
          <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-1 items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Target className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-zinc-900">減碳策略的科學決策評估</h3>
                <CardPointList items={PRECISION_DECISION_POINTS} />
              </div>
            </div>
          </article>
        </div>
        <details className="group rounded-xl border border-zinc-300 bg-white p-4 shadow-sm focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-50">
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-md font-semibold text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
            aria-label="展開或收合盤查實施方法與決策指標的說明"
          >
            <span>進階探討：盤查實施方法與決策指標</span>
            <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
          </summary>
          <div className="mt-4 border-t border-zinc-200 pt-4">
            <p className="text-sm leading-relaxed text-zinc-700">
              組織碳盤查通常遵循「由下而上 (Bottom-up)」原則，涵蓋邊界設定、排放源鑑別、活動數據蒐集與轉換。企業在評估設備更新或建置綠電等方案時，需綜合考量可行性 (Feasibility)、減碳效果 (Reduction Effectiveness) 與實施成本 (Implementation Cost)，以決定最適切的減碳路徑。
            </p>
          </div>
        </details>
      </section>

      <section className="space-y-4">
        <p className="text-sm font-medium text-zinc-700">
          本章節學習結束。請點擊「完成此章節」進入下一單元。
        </p>
        <ChapterCompleteButton
          chapterId="action-quantification"
          nextRoute={{ name: "企業漂綠防範與減碳職涯發展", path: "/macro-market" }}
        />
      </section>
    </section>
  );
}
