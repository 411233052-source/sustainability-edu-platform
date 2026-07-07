/**
 * @fileoverview 通用減碳永續網站 — 第一章：觀念建立
 * @project 通用減碳永續網站
 * @description 呈現永續發展基礎觀念與 ESG 核心指標的互動式卡片內容，包含 CSR 到 ESG 的演進與淨零／碳中和比較。
 */

import { ChapterCompleteButton } from "@/components/chapter-complete-button";
import {
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Leaf,
  Scale,
  Target,
} from "lucide-react";

const ESG_LETTERS_POINTS = [
  "E (環境保護)：聚焦氣候變遷與溫室氣體減量等實質環境行動。",
  "S (社會責任)：關注勞工權益、職業安全與社會公平正義。",
  "G (公司治理)：強調董事會透明度、風險管理與企業商業道德。",
] as const;

const CSR_TO_ESG_POINTS = [
  "傳統 CSR：偏向企業自願性的道德呼籲與社會公益投入。",
  "現代 ESG：由聯合國責任投資原則 (PRI) 推動，成為評估企業風險與價值的核心框架。",
  "減碳法制化：各國規範從自願揭露走向強制法規化，大幅提升企業遵循的急迫性。",
] as const;

const CARBON_NEUTRALITY_POINTS = [
  "核心概念：企業將自身直接產生的碳排放量，透過購買等額的碳權進行抵換歸零。",
  "實作機制：允許透過空間上的抵銷（如跨國界資助造林），在帳面上維持總量平衡。",
  "應用層面：通常聚焦單一產品或特定服務，為企業邁向氣候目標的中短期過渡策略。",
] as const;

const NET_ZERO_POINTS = [
  "科學定義：在特定期間內，全球人為溫室氣體排放量與人為移除量達到絕對平衡。",
  "盤查邊界：涵蓋所有溫室氣體，並將整條價值鏈的間接排放全數納入評估範圍。",
  "抵銷限制：化石燃料排放必須透過永久性碳封存技術抵銷，禁止僅依賴短期自然吸收。",
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

export default function ConceptBuildingPage() {
  return (
    <section className="space-y-10 rounded-2xl border border-zinc-200 bg-white p-8 shadow-md">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-emerald-700">
          企業永續發展與氣候治理基礎
        </h1>
        <p className="mt-3 text-zinc-600">
          從企業社會責任的歷史演進，到淨零排放與碳中和的科學定義，建立氣候治理的高階商業常識。
        </p>
      </header>

      <aside className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/50 p-5 md:p-6">
        <h2 className="text-base font-bold text-emerald-800 md:text-lg">
          氣候治理與企業轉型背景
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-700 md:text-base">
          過去，企業遵循「股東資本主義」，以追求利潤最大化為單一目標。隨著極端氣候加劇與社會意識轉變，企業營運的非財務風險逐漸浮現，促使重視所有利害關係人福祉的「利害關係人資本主義」興起。
        </p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-700 md:text-base">
          2004 年，聯合國透過《Who Cares Wins》報告首次將環境、社會與公司治理整合為評估企業長期價值的量化框架。時至今日，氣候治理已成為全球經貿與供應鏈管理的法規基準。
        </p>
      </aside>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">什麼是 ESG？</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-1 items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Leaf className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-zinc-900">企業永續之核心構面</h3>
                <CardPointList items={ESG_LETTERS_POINTS} />
              </div>
            </div>
          </article>
          <article className="flex h-full flex-col rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-1 items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <BrainCircuit className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-zinc-900">從 CSR 到 ESG 的演進</h3>
                <CardPointList items={CSR_TO_ESG_POINTS} />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">淨零碳排 vs. 碳中和</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-1 items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Scale className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-zinc-900">碳中和 (Carbon Neutrality)</h3>
                <CardPointList items={CARBON_NEUTRALITY_POINTS} />
              </div>
            </div>
          </article>
          <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-1 items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Target className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-zinc-900">淨零排放 (Net Zero)</h3>
                <CardPointList items={NET_ZERO_POINTS} />
              </div>
            </div>
          </article>
        </div>
        <details className="group rounded-xl border border-zinc-300 bg-white p-4 shadow-sm focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-50">
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-md font-semibold text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
            aria-label="展開或收合持久淨零與同類對同類原則的說明"
          >
            <span>進階探討：持久淨零與同類對同類原則</span>
            <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
          </summary>
          <div className="mt-4 border-t border-zinc-200 pt-4">
            <p className="text-sm leading-relaxed text-zinc-700">
              氣候科學界強調，真正具公信力的淨零必須遵循「同類對同類 (like-for-like)」原則。源自岩石圈的長期碳排放必須透過地質碳封存實質抵銷，若過度依賴易受自然災害影響的生物圈碳匯，將引發漂綠 (Greenwashing) 疑慮。
            </p>
          </div>
        </details>
      </section>

      <section className="space-y-4">
        <p className="text-sm font-medium text-zinc-700">
          本章節學習結束。請點擊「完成此章節」進入下一單元。
        </p>
        <ChapterCompleteButton
          chapterId="concept-building"
          nextRoute={{ name: "溫室氣體盤查與綠色供應鏈管理", path: "/action-quantification" }}
        />
      </section>
    </section>
  );
}
