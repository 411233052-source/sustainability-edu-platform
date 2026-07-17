"use client";

import { useState } from "react";

const careerData = [
  {
    id: "planning",
    trait: "具備文字傳播與企劃專長",
    roles: "企業永續 (ESG) 管理師、永續公關與企劃專員",
    description: "負責統籌企業內部 ESG 相關數據，並編製符合國際標準之永續報告書。主導社會參與專案之規劃，並管控企業綠色品牌形象，以降低漂綠（Greenwashing）疑慮帶來之公關風險。",
    requirements: "GRI 準則、SASB 準則、永續資訊規劃師"
  },
  {
    id: "data",
    trait: "具備數據分析與邏輯稽核專長",
    roles: "碳盤查工程師／管理師、ESG 供應鏈管理師",
    description: "專注於將組織營運及價值鏈（上下游供應鏈）之活動數據，依據科學方法量化為溫室氣體排放量。確保排放數據之正確性與可追溯性，並協同外部機構完成實質確信作業。",
    requirements: "iPAS 淨零碳規劃管理師、ISO 14064 (溫室氣體盤查)、ISO 14067 (產品碳足跡)"
  },
  {
    id: "finance",
    trait: "具備財務策略與風險評估專長",
    roles: "綠色金融分析師、ESG 投資研究員",
    description: "評估企業面對氣候變遷與社會責任所衍生之轉型風險與實體風險。分析上市櫃公司之 ESG 績效與碳定價影響，藉此制定授信放款標準或篩選具備永續發展潛力之投資標的。",
    requirements: "永續發展基礎能力測驗、SCR (氣候風險分析)、ESG Investing 證照"
  },
  {
    id: "engineering",
    trait: "具備製程設計與工程優化專長",
    roles: "綠色產品工程師、廠務節能工程師",
    description: "於產品研發階段導入循環經濟原則與低碳材料，並執行產品生命週期評估（LCA）。針對企業廠房之能源系統進行硬體技術改良，以達成組織設定之年度節能指標。",
    requirements: "ISO 50001 能源管理系統、能源管理人員合格證書"
  }
];

export default function CareerAssessment() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedData = careerData.find((data) => data.id === selectedId);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {careerData.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedId(item.id === selectedId ? null : item.id)}
            className={`p-4 text-left border rounded-lg transition-all duration-200 ${
              selectedId === item.id
                ? "border-emerald-600 bg-emerald-50 text-emerald-900 shadow-sm"
                : "border-zinc-200 bg-white text-zinc-700 hover:border-emerald-300 hover:bg-zinc-50"
            }`}
          >
            <span className="font-semibold">{item.trait}</span>
          </button>
        ))}
      </div>

      {selectedData && (
        <div className="p-6 bg-white border border-emerald-100 rounded-lg shadow-sm animate-in fade-in slide-in-from-top-4 duration-300 space-y-4">
          <div>
            <h4 className="text-sm font-bold text-emerald-700 mb-1">核心職缺</h4>
            <p className="text-zinc-900 font-medium">{selectedData.roles}</p>
          </div>
          <div className="h-px w-full bg-zinc-100"></div>
          <div>
            <h4 className="text-sm font-bold text-emerald-700 mb-1">實務職責描述</h4>
            <p className="text-zinc-700 text-sm md:text-base leading-relaxed">{selectedData.description}</p>
          </div>
          <div className="h-px w-full bg-zinc-100"></div>
          <div>
            <h4 className="text-sm font-bold text-emerald-700 mb-1">專業準則與資格要求</h4>
            <p className="text-zinc-700 text-sm md:text-base font-medium">{selectedData.requirements}</p>
          </div>
        </div>
      )}
    </div>
  );
}
