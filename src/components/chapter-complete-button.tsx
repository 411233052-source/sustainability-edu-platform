/**
 * @fileoverview 通用減碳永續網站 — 章節完成按鈕
 * @project 通用減碳永續網站
 * @description 供各章節頁面使用，記錄章節完成進度並在完成後顯示前往下一章的連結。
 */

"use client";

import Link from "next/link";
import { useProgress } from "@/components/progress-provider";
import type { ChapterId } from "@/lib/chapters";

type ChapterCompleteButtonProps = {
  chapterId: ChapterId;
  nextRoute?: {
    name: string;
    path: string;
  };
};

export function ChapterCompleteButton({ chapterId, nextRoute }: ChapterCompleteButtonProps) {
  const { isCompleted, markChapterCompleted } = useProgress();
  const completed = isCompleted(chapterId);

  return (
    <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center">
      <button
        type="button"
        onClick={() => markChapterCompleted(chapterId)}
        disabled={completed}
        className="w-full rounded-lg px-6 py-3 text-base font-semibold text-white shadow-sm transition disabled:cursor-not-allowed disabled:bg-zinc-400 disabled:opacity-80 enabled:bg-emerald-600 enabled:hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 md:w-auto"
        aria-label={completed ? "本章節已完成" : "完成此章節並記錄進度"}
      >
        {completed ? "已完成" : "完成此章節"}
      </button>
      {completed && nextRoute ? (
        <Link
          href={nextRoute.path}
          className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
          aria-label={`前往${nextRoute.name}`}
        >
          前往 {nextRoute.name} ➔
        </Link>
      ) : null}
    </div>
  );
}
