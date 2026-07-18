/**
 * @fileoverview 通用減碳永續網站 — 第一章：觀念建立
 * @project 通用減碳永續網站
 * @description 呈現永續發展基礎觀念與 ESG 核心指標的互動式卡片內容，包含 CSR 到 ESG 的演進與淨零／碳中和比較。
 */

import { ChapterCompleteButton } from "@/components/chapter-complete-button";
import type { ReactNode } from "react";
import { BrainCircuit, CheckCircle2, ChevronDown, Leaf } from "lucide-react";

type CardPoint = { id: string; node: ReactNode };

function Term({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-zinc-900">{children}</strong>;
}

const ESG_LETTERS_POINTS: readonly CardPoint[] = [
  {
    id: "esg-e",
    node: (
      <>
        <Term>E (Environment, 環境保護)：</Term>聚焦氣候變遷與溫室氣體減量等實質環境行動。
      </>
    ),
  },
  {
    id: "esg-s",
    node: (
      <>
        <Term>S (Social, 社會責任)：</Term>關注勞工權益、職業安全與社會公平正義。
      </>
    ),
  },
  {
    id: "esg-g",
    node: (
      <>
        <Term>G (Governance, 公司治理)：</Term>強調董事會透明度、風險管理與企業商業道德。
      </>
    ),
  },
];

const CSR_TO_ESG_POINTS: readonly CardPoint[] = [
  {
    id: "csr-legacy",
    node: (
      <>
        <Term>傳統 CSR：</Term>偏向企業自願性的道德呼籲與社會公益投入。
      </>
    ),
  },
  {
    id: "csr-modern",
    node: (
      <>
        <Term>現代 ESG：</Term>由<Term>聯合國責任投資原則 (PRI)</Term>
        推動，成為評估企業風險與價值的核心框架。
      </>
    ),
  },
  {
    id: "csr-legislation",
    node: (
      <>
        <Term>減碳法制化：</Term>各國規範從自願揭露走向
        <Term>強制法規化</Term>，大幅提升企業遵循的急迫性。
      </>
    ),
  },
];

type ClimateIndicatorRow = {
  id: string;
  name: string;
  scope: string;
  requirement: string;
  application: string;
};

const CLIMATE_INDICATOR_ROWS: readonly ClimateIndicatorRow[] = [
  {
    id: "zero-carbon",
    name: "絕對零碳 (Zero Carbon)",
    scope: "僅限二氧化碳",
    requirement: "運作過程完全不產生任何碳排放，不可抵銷。",
    application: "製程技術的最嚴格物理極限",
  },
  {
    id: "carbon-neutrality",
    name: "碳中和 (Carbon Neutrality)",
    scope: "僅限二氧化碳",
    requirement: "允許透過購買碳權或綠電，將排放量予以加減平衡。",
    application: "單一產品、服務或特定營運邊界",
  },
  {
    id: "net-zero",
    name: "淨零排放 (Net Zero)",
    scope: "全溫室氣體",
    requirement: "排放極小化後，透過人為碳匯進行最終實質抵銷。",
    application: "目前全球法規與國家政策之基石",
  },
  {
    id: "climate-neutral",
    name: "氣候中和 (Climate Neutral)",
    scope: "溫室氣體 + 物理效應",
    requirement: "消除溫室氣體，並涵蓋飛機凝結尾等非氣體衝擊。",
    application: "組織發展零環境衝擊的終極理想",
  },
];

function CardPointList({ items }: { items: readonly CardPoint[] }) {
  return (
    <ul className="mt-6 list-none space-y-5 p-0">
      {items.map((item) => (
        <li key={item.id} className="flex items-start gap-2">
          <CheckCircle2
            className="mt-0.5 size-4 shrink-0 text-emerald-600"
            aria-hidden
          />
          <span className="text-sm leading-relaxed text-zinc-600">
            {item.node}
          </span>
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
          ESG歷史與淨零碳排
        </h1>
        <p className="mt-3 text-zinc-600">
          從企業社會責任之歷史演進，探討淨零排放與碳中和之科學定義，藉此建構氣候治理之核心知識體系。
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
          <h2 className="text-2xl font-semibold text-zinc-900">絕對零碳 vs. 碳中和 vs. 淨零排放 vs. 氣候中和</h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-sm mt-6 mb-8">
          <table className="w-full text-left text-sm md:text-base text-zinc-700">
            <thead className="bg-emerald-50 font-bold text-emerald-900 border-b border-zinc-200">
              <tr>
                <th className="p-4">指標名稱</th>
                <th className="p-4">管制氣體範圍</th>
                <th className="p-4">核心要求與抵銷機制</th>
                <th className="p-4">實務應用層次</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {CLIMATE_INDICATOR_ROWS.map((row) => (
                <tr key={row.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="p-4 leading-relaxed">
                    <strong className="font-semibold text-zinc-900">{row.name}</strong>
                  </td>
                  <td className="p-4 leading-relaxed">
                    <span className="font-medium text-zinc-800">
                      {row.scope}
                    </span>
                  </td>
                  <td className="p-4 leading-relaxed">{row.requirement}</td>
                  <td className="p-4 leading-relaxed">{row.application}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <details className="group rounded-xl border border-zinc-300 bg-white p-4 shadow-sm focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-50">
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-md font-semibold text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
            aria-label="展開或收合四大氣候指標之核心差異比較的說明"
          >
            <span>進階探討：四大氣候指標之核心差異比較</span>
            <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
          </summary>
          <div className="mt-4 border-t border-zinc-200 pt-4">
            <div className="space-y-4 text-zinc-700 leading-relaxed text-sm md:text-base">
              <p>
                淨零排放的推動必須建立在嚴謹的氣候科學與變革性的政策框架之上，以確保減碳的真實性與持久性。
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="font-semibold text-zinc-900">持久淨零與同類對同類原則：</strong>
                  科學證據確立了升溫幅度與累積二氧化碳排放量成正比（TCRE）的線性關係。為防範漂綠，真正具公信力的淨零必須進行「同類對同類（like-for-like）」的平衡，意即企業燃燒化石燃料所產生源自岩石圈的長期碳排放，必須透過地質碳封存（CCS）等永久性技術進行實質抵銷，而非僅依賴短期內易受破壞的生物圈自然吸收。
                </li>
                <li>
                  <strong className="font-semibold text-zinc-900">變革型產業政策與公正轉型：</strong>
                  針對鋼鐵與石化等高耗能重工業，初期的能源效率提升無法促成深層脫碳，必須導入製程電氣化與綠氫等根本性技術革新。同時，政府需推行過渡期援助政策（TAP），透過補償、技能再培訓與全面調適支持，確保高碳排產業勞工在轉型過程中不被遺落，達成公正轉型。
                </li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      <section className="mt-12 mb-8 rounded-r-xl border-l-4 border-slate-400 bg-slate-50 p-6 md:p-8">
        <h2 className="text-lg font-bold text-slate-800">本章精要</h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base list-disc list-outside ml-5 marker:text-slate-400">
          <li>
            從 <strong className="font-semibold text-slate-900">CSR 到 ESG</strong>
            ，減碳已從自願性的道德公益，轉變為攸關企業生存的
            <strong className="font-semibold text-slate-900">資本市場法規</strong>。
          </li>
          <li>
            <strong className="font-semibold text-slate-900">碳中和</strong>
            僅針對二氧化碳進行帳面抵銷；
            <strong className="font-semibold text-slate-900">淨零排放</strong>
            則涵蓋所有溫室氣體且要求實質抵銷，為目前全球法規之基石。
          </li>
          <li>
            氣候指標的嚴格程度，取決於
            <strong className="font-semibold text-slate-900">管制氣體範圍的大小</strong>與
            <strong className="font-semibold text-slate-900">抵銷機制的公信力</strong>。
          </li>
        </ul>
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
