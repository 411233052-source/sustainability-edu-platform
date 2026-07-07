/**
 * @fileoverview 通用減碳永續網站 — 第三章：企業漂綠防範與減碳職涯發展
 * @project 通用減碳永續網站
 * @description 剖析企業不實減碳聲明的定義與公眾認知影響，並對齊國際碳管理準則探討專業核心職能。
 */

import { ChapterCompleteButton } from "@/components/chapter-complete-button";
import {
  AlertTriangle,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const GREENWASHING_POINTS = [
  "核心屬性：企業無法證實其減碳或環保聲明，且具備欺騙意圖以獲取市場不當之競爭優勢。",
  "傳統表現形式：包含隱藏權衡、語意模糊以及選擇性揭露微小減碳成效等行銷手段。",
  "漂綠 2.0 (B2B)：蔓延至綠能產業與供應鏈，如誇大再生能源產能、節能設備效能造假與碳憑證欺詐等。",
] as const;

const PUBLIC_PERCEPTION_POINTS = [
  "綠色懷疑論：頻繁的漂綠事件觸發公眾防禦機制，對企業的減碳宣稱產生普遍的懷疑感知。",
  "企業偽善認知：當企業減碳廣告與實際高碳排之負面新聞產生不一致時，將嚴重損害企業公民形象。",
  "關係建立斷裂：偽善認知不僅降低消費者的品牌態度，更會直接切斷公眾與企業維持長期關係的意願。",
] as const;

const COMPLIANCE_JOBS_POINTS = [
  "企業減碳管理師：需精通 SASB 與 GRI 等國際準則，負責統籌上市櫃企業之溫室氣體減量策略。",
  "永續管理與內部稽核：專注於非財務與碳排放數據的審計，維護公司治理合規標準，防範漂綠風險。",
  "氣候風險管理人員：具備編製 TCFD 報告與氣候情境財務壓力測試之能力，為企業之核心風控防線。",
] as const;

const CARBON_FINANCE_JOBS_POINTS = [
  "碳權交易與碳資產管理師：熟稔自願性碳減量市場規則與歐盟 CBAM 機制，具備碳金融商品交易與避險能力。",
  "碳資訊確信審查員：掌握 IFRS S1/S2 氣候相關揭露準則與碳足跡量化數據，確保企業減碳報告之公信力。",
  "第三方驗證機制：比照財務報表審計，碳盤查數據須經由獨立會計師或跨國驗證機構進行實質確信。",
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

export default function MacroMarketPage() {
  return (
    <section className="space-y-10 rounded-2xl border border-zinc-200 bg-white p-8 shadow-md">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-emerald-700">
          企業漂綠防範與減碳職涯發展
        </h1>
        <p className="mt-3 text-zinc-600">
          剖析企業不實減碳聲明之定義與公眾認知影響，並對齊國際碳管理準則，探索淨零趨勢下之專業核心職能。
        </p>
      </header>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">不實減碳聲明之辨識與影響</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-1 items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-zinc-900">什麼是漂綠 (Greenwashing)？</h3>
                <CardPointList items={GREENWASHING_POINTS} />
              </div>
            </div>
          </article>
          <article className="flex h-full flex-col rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-1 items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-zinc-900">不實減碳聲明之公眾認知影響</h3>
                <CardPointList items={PUBLIC_PERCEPTION_POINTS} />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">淨零趨勢下之核心專業職能</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-1 items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Briefcase className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-zinc-900">碳管理與合規專業職能</h3>
                <CardPointList items={COMPLIANCE_JOBS_POINTS} />
              </div>
            </div>
          </article>
          <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-1 items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <TrendingUp className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-zinc-900">碳資產與綠色金融專業職能</h3>
                <CardPointList items={CARBON_FINANCE_JOBS_POINTS} />
              </div>
            </div>
          </article>
        </div>
        <details className="group rounded-xl border border-zinc-300 bg-white p-4 shadow-sm focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-50">
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-md font-semibold text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
            aria-label="展開或收合防範減碳造假之監管趨勢與治理對策的說明"
          >
            <span>進階探討：防範減碳造假之監管趨勢與治理對策</span>
            <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
          </summary>
          <div className="mt-4 border-t border-zinc-200 pt-4">
            <p className="text-sm leading-relaxed text-zinc-700">
              國際法規正從「自願性揭露」全面轉向「強制化與標準化」。為根除減碳造假與漂綠現象，監管機構除要求引入強制性獨立第三方驗證機制外，亦鼓勵提升供應鏈動態碳數據的透明度與可追溯性，並結合公眾監督，建立嚴格的市場究責機制。
            </p>
          </div>
        </details>
      </section>

      <section className="space-y-4">
        <p className="text-sm font-medium text-zinc-700">
          本章節學習結束。請點擊「完成此章節」記錄成就，並返回首頁。
        </p>
        <ChapterCompleteButton chapterId="macro-market" nextRoute={{ name: "首頁", path: "/" }} />
      </section>
    </section>
  );
}
