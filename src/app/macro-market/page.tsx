/**
 * @fileoverview 通用減碳永續網站 — 第三章：企業漂綠防範與永續職涯發展
 * @project 通用減碳永續網站
 * @description 剖析企業不實減碳聲明的定義與公眾認知影響，並對齊國際碳管理準則探討專業核心職能。
 */

import { ChapterCompleteButton } from "@/components/chapter-complete-button";
import type { ReactNode } from "react";
import { Briefcase, CheckCircle2, ChevronDown, TrendingUp } from "lucide-react";

type CardPoint = { id: string; node: ReactNode };

function Term({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-zinc-900">{children}</strong>;
}

type GreenwashingRow = {
  id: string;
  level: string;
  tactics: string;
  impact: ReactNode;
  countermeasure: ReactNode;
};

const GREENWASHING_MATRIX_ROWS: readonly GreenwashingRow[] = [
  {
    id: "b2c",
    level: "傳統行銷漂綠 (B2C)",
    tactics: "隱藏權衡、語意模糊、選擇性揭露微小減碳成效等行銷手段。",
    impact: (
      <>
        觸發公眾<Term>綠色懷疑論</Term>與<Term>企業偽善認知</Term>，嚴重損害品牌形象。
      </>
    ),
    countermeasure: "廣告不實裁罰、強制標準化資訊揭露。",
  },
  {
    id: "b2b",
    level: "深度供應鏈漂綠 2.0 (B2B)",
    tactics: "誇大綠能預期產能、節能設備效能造假、碳憑證欺詐等。",
    impact: "切斷公眾與企業長期關係意願，引發系統性合規風險與抽單危機。",
    countermeasure: (
      <>
        引入<Term>獨立第三方確信審查</Term>（如會計師或跨國驗證機構）、遵循
        <Term>IFRS S1/S2</Term>準則。
      </>
    ),
  },
];

const COMPLIANCE_JOBS_POINTS: readonly CardPoint[] = [
  {
    id: "job-manager",
    node: (
      <>
        <Term>企業減碳管理師：</Term>需精通<Term>SASB 與 GRI</Term>
        等國際準則，負責統籌上市櫃企業之溫室氣體減量策略。
      </>
    ),
  },
  {
    id: "job-audit",
    node: (
      <>
        <Term>永續管理與內部稽核：</Term>
        專注於非財務與碳排放數據的審計，維護公司治理合規標準，防範漂綠風險。
      </>
    ),
  },
  {
    id: "job-risk",
    node: (
      <>
        <Term>氣候風險管理人員：</Term>具備編製<Term>TCFD 報告</Term>
        與氣候情境財務壓力測試之能力，為企業之核心風控防線。
      </>
    ),
  },
];

const CARBON_FINANCE_JOBS_POINTS: readonly CardPoint[] = [
  {
    id: "fin-trading",
    node: (
      <>
        <Term>碳權交易與碳資產管理師：</Term>熟稔自願性碳減量市場規則與
        <Term>歐盟 CBAM 機制</Term>，具備碳金融商品交易與避險能力。
      </>
    ),
  },
  {
    id: "fin-assurance",
    node: (
      <>
        <Term>碳資訊確信審查員：</Term>掌握
        <Term>IFRS S1/S2</Term>
        氣候相關揭露準則與碳足跡量化數據，確保企業減碳報告之公信力。
      </>
    ),
  },
  {
    id: "fin-verification",
    node: (
      <>
        <Term>第三方驗證機制：</Term>比照財務報表審計，碳盤查數據須經由
        <Term>獨立會計師或跨國驗證機構</Term>進行實質確信。
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

export default function MacroMarketPage() {
  return (
    <section className="space-y-10 rounded-2xl border border-zinc-200 bg-white p-8 shadow-md">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-emerald-700">
          企業漂綠防範與永續職涯發展
        </h1>
        <p className="mt-3 text-zinc-600">
          剖析企業不實減碳聲明之定義與公眾認知影響，並對齊國際碳管理準則，探索淨零趨勢下之專業核心職能。
        </p>
      </header>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">不實減碳聲明之辨識與影響</h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-sm mt-6 mb-8">
          <table className="w-full text-left text-sm md:text-base text-zinc-700">
            <thead className="bg-emerald-50 font-bold text-emerald-900 border-b border-zinc-200">
              <tr>
                <th className="p-4">漂綠層級 (Level)</th>
                <th className="p-4">常見手法與特徵 (Tactics)</th>
                <th className="p-4">信任危機與認知衝擊 (Impact)</th>
                <th className="p-4">國際監管與確信對策 (Countermeasure)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {GREENWASHING_MATRIX_ROWS.map((row) => (
                <tr key={row.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="p-4 leading-relaxed">
                    <strong className="font-semibold text-zinc-900">{row.level}</strong>
                  </td>
                  <td className="p-4 leading-relaxed">{row.tactics}</td>
                  <td className="p-4 leading-relaxed">{row.impact}</td>
                  <td className="p-4 leading-relaxed">{row.countermeasure}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

      <section className="mt-12 mb-8 rounded-r-xl border-l-4 border-slate-400 bg-slate-50 p-6 md:p-8">
        <h2 className="text-lg font-bold text-slate-800">本章精要</h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base list-disc list-outside ml-5 marker:text-slate-400">
          <li>
            不實減碳聲明（漂綠）會引發公眾的
            <strong className="font-semibold text-slate-900">企業偽善認知</strong>
            ，嚴重損害品牌的
            <strong className="font-semibold text-slate-900">市場信任與長期關係</strong>。
          </li>
          <li>
            國際監管正走向強制標準化，企業碳排放數據必須經過
            <strong className="font-semibold text-slate-900">獨立的第三方確信審查</strong>
            以防範造假疑慮。
          </li>
          <li>
            掌握
            <strong className="font-semibold text-slate-900">GRI、SASB、TCFD 等國際準則</strong>
            與碳盤查實務，為晉升永續管理與綠色金融專業職缺的
            <strong className="font-semibold text-slate-900">關鍵核心能力</strong>。
          </li>
        </ul>
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
