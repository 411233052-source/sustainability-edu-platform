/**
 * @fileoverview 通用減碳永續網站 — 學習進度 Context
 * @project 通用減碳永續網站
 * @description 以 React Context 管理章節完成狀態，並透過 localStorage 持久化與還原進度。
 */

"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { CHAPTERS, type ChapterId } from "@/lib/chapters";

const STORAGE_KEY = "completedChapters";
const validIds = new Set<ChapterId>(CHAPTERS.map((chapter) => chapter.id));

type ProgressContextValue = {
  completedCount: number;
  isCompleted: (chapterId: ChapterId) => boolean;
  markChapterCompleted: (chapterId: ChapterId) => void;
  resetProgress: () => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

function getInitialCompletedSet() {
  if (typeof window === "undefined") return new Set<ChapterId>();

  const rawValue = localStorage.getItem(STORAGE_KEY);
  if (!rawValue) return new Set<ChapterId>();

  try {
    const parsed = JSON.parse(rawValue);
    if (!Array.isArray(parsed)) return new Set<ChapterId>();

    const filteredIds = parsed.filter(
      (chapterId): chapterId is ChapterId =>
        typeof chapterId === "string" && validIds.has(chapterId as ChapterId),
    );

    return new Set<ChapterId>(filteredIds);
  } catch {
    return new Set<ChapterId>();
  }
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedSet, setCompletedSet] = useState(getInitialCompletedSet);

  const value = useMemo<ProgressContextValue>(
    () => ({
      completedCount: completedSet.size,
      isCompleted: (chapterId) => completedSet.has(chapterId),
      markChapterCompleted: (chapterId) => {
        setCompletedSet((current) => {
          if (current.has(chapterId)) return current;

          const next = new Set(current);
          next.add(chapterId);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)));
          return next;
        });
      },
      resetProgress: () => {
        setCompletedSet(new Set<ChapterId>());
        localStorage.removeItem(STORAGE_KEY);
      },
    }),
    [completedSet],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within ProgressProvider");
  }

  return context;
}
