/**
 * @fileoverview 通用減碳永續網站 — 第二章：企業減碳實戰班
 * @project 通用減碳永續網站
 * @description 呈現溫室氣體盤查三大範疇、綠色供應鏈挑戰與科學化減碳決策的互動式卡片內容。
 */

import { ChapterCompleteButton } from "@/components/chapter-complete-button";
import type { ReactNode } from "react";
import { Boxes, CheckCircle2, ChevronDown, Target } from "lucide-react";

type CardPoint = { id: string; node: ReactNode };

function Term({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-zinc-900">{children}</strong>;
}

type ScopeRow = {
  id: string;
  scope: ReactNode;
  definition: string;
  dataControl: ReactNode;
  footprint: ReactNode;
};

const SCOPE_TABLE_ROWS: readonly ScopeRow[] = [
  {
    id: "scope-1",
    scope: (
      <div>
        <span className="font-semibold text-zinc-900">範疇一</span>
        <div className="text-sm text-zinc-500 mt-1">(直接排放)</div>
      </div>
    ),
    definition: "企業完全擁有或具備直接控制權之設施產生的排放（如自有工廠鍋爐、公務車）。",
    dataControl: (
      <div>
        <span className="font-semibold text-zinc-900">極高</span>
        <div className="text-sm text-zinc-500 mt-1">(具備內部一手數據)</div>
      </div>
    ),
    footprint: "占比通常較低，為優先減量目標。",
  },
  {
    id: "scope-2",
    scope: (
      <div>
        <span className="font-semibold text-zinc-900">範疇二</span>
        <div className="text-sm text-zinc-500 mt-1">(間接排放)</div>
      </div>
    ),
    definition: "企業為維持營運，向外部購買能源（如外購電力）而在發電階段產生的排放。",
    dataControl: (
      <div>
        <span className="font-semibold text-zinc-900">高</span>
        <div className="text-sm text-zinc-500 mt-1">(依賴外部電費單據)</div>
      </div>
    ),
    footprint: "占比視產業而定，依賴綠電採購。",
  },
  {
    id: "scope-3",
    scope: (
      <div>
        <span className="font-semibold text-zinc-900">範疇三</span>
        <div className="text-sm text-zinc-500 mt-1">(價值鏈排放)</div>
      </div>
    ),
    definition:
      "非屬範疇一二，但在企業營運之上下游價值鏈發生的所有間接排放（如員工通勤、原料採購）。",
    dataControl: (
      <div>
        <span className="font-semibold text-zinc-900">極低</span>
        <div className="text-sm text-zinc-500 mt-1">(依賴跨企業協作與資訊透明度)</div>
      </div>
    ),
    footprint: (
      <>
        占比高達<Term>70% 至 90% 以上</Term>，為國際供應鏈管理之絕對核心。
      </>
    ),
  },
];

const GSCM_CHALLENGE_POINTS: readonly CardPoint[] = [
  {
    id: "gscm-regulation",
    node: (
      <>
        <Term>法規壓力：</Term>
        <Term>歐盟碳邊境調整機制 (CBAM)</Term>
        等強制性法規推行，碳排放數據直接影響國際市場競爭力。
      </>
    ),
  },
  {
    id: "gscm-data",
    node: (
      <>
        <Term>數據獲取瓶頸：</Term>
        供應鏈碳盤查面臨缺乏一手資料、品質參差不齊以及上下游重複計算的挑戰。
      </>
    ),
  },
  {
    id: "gscm-it",
    node: (
      <>
        <Term>資訊科技應用：</Term>
        透過人工智慧 (AI) 結合區塊鏈技術，確保跨國供應鏈碳資訊的真實性與互通性。
      </>
    ),
  },
];

const PRECISION_DECISION_POINTS: readonly CardPoint[] = [
  {
    id: "decision-epd",
    node: (
      <>
        <Term>環保產品宣告 (EPD)：</Term>
        企業可要求供應商提供標準化的產品碳足跡數據，降低對產業平均值的依賴。
      </>
    ),
  },
  {
    id: "decision-model",
    node: (
      <>
        <Term>決策分析模型：</Term>導入如<Term>優劣解距離法 (TOPSIS)</Term>
        等工具，客觀評估各項減碳策略的技術成熟度與預期成效。
      </>
    ),
  },
  {
    id: "decision-incentive",
    node: (
      <>
        <Term>供應商激勵機制：</Term>
        將碳績效納入篩選指標，透過優先採購權等機制提升整體供應鏈的氣候風險抗性。
      </>
    ),
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
        <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-sm mt-6 mb-8">
          <table className="w-full text-left text-sm md:text-base text-zinc-700">
            <thead className="bg-emerald-50 font-bold text-emerald-900 border-b border-zinc-200">
              <tr>
                <th className="p-4">盤查範疇</th>
                <th className="p-4">定義與排放來源</th>
                <th className="p-4">數據掌握度</th>
                <th className="p-4">碳足跡占比與管理特徵</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {SCOPE_TABLE_ROWS.map((row) => (
                <tr key={row.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="p-4 leading-relaxed">{row.scope}</td>
                  <td className="p-4 leading-relaxed">{row.definition}</td>
                  <td className="p-4 leading-relaxed">{row.dataControl}</td>
                  <td className="p-4 leading-relaxed">{row.footprint}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

      <section className="mt-12 mb-8 rounded-r-xl border-l-4 border-slate-400 bg-slate-50 p-6 md:p-8">
        <h2 className="text-lg font-bold text-slate-800">本章精要</h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base list-disc list-outside ml-5 marker:text-slate-400">
          <li>
            溫室氣體盤查分為三大範疇，其中
            <strong className="font-semibold text-slate-900">範疇三（價值鏈間接排放）</strong>
            佔比最高、盤查難度最大，為
            <strong className="font-semibold text-slate-900">供應鏈管理之核心</strong>。
          </li>
          <li>
            面對<strong className="font-semibold text-slate-900">歐盟 CBAM</strong>
            等國際經貿法規，缺乏精確的碳數據將直接削弱企業在國際市場中的
            <strong className="font-semibold text-slate-900">競爭力</strong>。
          </li>
          <li>
            企業須結合
            <strong className="font-semibold text-slate-900">環保產品宣告 (EPD)</strong>
            數據與<strong className="font-semibold text-slate-900">多準則決策模型</strong>
            ，在減碳效果、技術可行性與成本間找出最佳實務路徑。
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <p className="text-sm font-medium text-zinc-700">
          本章節學習結束。請點擊「完成此章節」進入下一單元。
        </p>
        <ChapterCompleteButton
          chapterId="action-quantification"
          nextRoute={{ name: "企業漂綠防範與永續職涯發展", path: "/macro-market" }}
        />
      </section>
    </section>
  );
}
