/**
 * @fileoverview 通用減碳永續網站 — 章節設定
 * @project 通用減碳永續網站
 * @description 集中定義學習章節 id、標籤、路由與 ChapterId 型別，供導覽、進度追蹤與各章節頁面共用。
 */

export const CHAPTERS = [
  { id: "concept-building", label: "企業永續發展與氣候治理基礎", href: "/concept-building" },
  { id: "action-quantification", label: "溫室氣體盤查與綠色供應鏈管理", href: "/action-quantification" },
  { id: "macro-market", label: "企業漂綠防範與減碳職涯發展", href: "/macro-market" },
] as const;

export const TOTAL_CHAPTERS = CHAPTERS.length;

export type ChapterId = (typeof CHAPTERS)[number]["id"];
