/**
 * @fileoverview 通用減碳永續網站 — 第三章：企業漂綠防範與永續職涯發展
 * @project 通用減碳永續網站
 * @description 剖析企業不實減碳聲明的定義與公眾認知影響，並對齊國際碳管理準則探討專業核心職能。
 */

import CareerAssessment from "@/components/CareerAssessment";
import { ChapterCompleteButton } from "@/components/chapter-complete-button";
import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

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
          <h2 className="text-2xl font-semibold text-zinc-900">永續職涯發展</h2>
        </div>
        <CareerAssessment />
        <details className="group rounded-xl border border-zinc-300 bg-white p-4 shadow-sm focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-50">
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-md font-semibold text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
            aria-label="展開或收合防範減碳造假之監管趨勢與治理對策的說明"
          >
            <span>進階探討：防範減碳造假之監管趨勢與治理對策</span>
            <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
          </summary>
          <div className="mt-4 border-t border-zinc-200 pt-4">
            <div className="space-y-4 text-zinc-700 leading-relaxed text-sm md:text-base">
              <p>
                隨著全球永續發展走向法制化，準確診斷企業的漂綠行為並建立專業的綠領人才防線，已成為資本市場風險評估的核心。
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="font-semibold text-zinc-900">漂綠的嚴格診斷屬性與策略性手段：</strong>
                  一項行為必須同時具備發起者為私營企業、行銷導向、無法證實性、欺騙意圖及追求競爭優勢等六項必要屬性，方構成嚴格意義上的漂綠。企業在 ESG 永續報告中，常透過「選擇性揭露」與「語意模糊」等修辭，誇大微小的綠色倡議，卻缺乏獨立第三方會計師事務所的審計與驗證。
                </li>
                <li>
                  <strong className="font-semibold text-zinc-900">綠領核心專業職能與第三方確信：</strong>
                  研究實證指出，通過第三方確信的永續報告能顯著降低企業的債務資金成本。面對嚴格的監管趨勢，企業極需具備大數據統計分析能力的氣候風險管理人員來編製 TCFD 報告並執行財務壓力測試，以及永續管理師精通 GRI 與 SASB 等國際準則，藉此維護公司治理的最高合規標準。
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
          本模組所有永續學習章節已告一段落。為客觀評估學習成效與知識吸收度，請點擊下方按鈕進入「後測問卷」系統。各項測驗數據將作為後續優化本教育平台之重要學術參考。
        </p>
        <ChapterCompleteButton
          chapterId="macro-market"
          nextRoute={{
            name: "後測問卷",
            path: "https://docs.google.com/forms/d/e/1FAIpQLSdTzm8j7UlDDUngYjnFGVm832i6Qh9tJ9X4-WTp0SZmoZsFnQ/viewform",
            label: "前往後測問卷 ➔",
            newTab: true,
          }}
        />
      </section>
    </section>
  );
}
