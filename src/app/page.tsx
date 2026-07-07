/**
 * @fileoverview 通用減碳永續網站 — 首頁
 * @project 通用減碳永續網站
 * @description 展示平台簡介、三個學習章節入口卡片，並依 localStorage 進度動態顯示「開始／繼續／重新複習」CTA。
 */

"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useProgress } from "@/components/progress-provider";
import { CHAPTERS, TOTAL_CHAPTERS } from "@/lib/chapters";

const chapterDescriptions: Record<(typeof CHAPTERS)[number]["id"], string> = {
  "concept-building": "探討企業社會責任之演進，並釐清淨零排放與碳中和之科學定義。",
  "action-quantification": "解析溫室氣體盤查三大範疇，探討跨國綠色供應鏈之實務挑戰與決策。",
  "macro-market": "剖析不實減碳聲明之公眾認知影響，並對齊國際準則探索核心專業職能。",
};

export default function Home() {
  const { completedCount, isCompleted } = useProgress();
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const displayCompletedCount = isMounted ? completedCount : 0;

  const { ctaLabel, ctaHref } = useMemo(() => {
    const firstChapterHref = CHAPTERS[0]?.href ?? "/";
    if (displayCompletedCount === 0) {
      return { ctaLabel: "開始學習", ctaHref: firstChapterHref };
    }

    if (displayCompletedCount < TOTAL_CHAPTERS) {
      const firstUncompletedChapter = CHAPTERS.find((chapter) => !isCompleted(chapter.id));
      return {
        ctaLabel: "繼續學習",
        ctaHref: firstUncompletedChapter?.href ?? firstChapterHref,
      };
    }

    return { ctaLabel: "重新複習", ctaHref: firstChapterHref };
  }, [displayCompletedCount, isCompleted]);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-8 shadow-md">
        <p className="text-sm font-semibold tracking-wide text-emerald-700">SUSTAINABILITY LEARNING</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-emerald-700 md:text-5xl">
          永續發展互動教育平台
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-700 md:text-lg">
          以循序漸進的互動章節，建立從觀念到行動的永續學習路徑，並透過可視化進度持續強化學習動機。
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-700 md:text-lg">
          隨著全球極端氣候加劇與國際經貿法規收緊，「減碳」已從道德呼籲變成全球供應鏈的生存法則。然而，多數人對永續發展的認知仍停留在表面。我們精心打造這個平台，正是為了解決「學術理論」與「業界實務」的落差。在這裡，你將透過循序漸進的互動引導，不僅看懂國際趨勢，更能掌握企業真正需要的減碳硬實力。
        </p>
        <Link
          href={ctaHref}
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-7 py-3 text-base font-semibold text-white shadow-md transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-50"
          aria-label={ctaLabel}
        >
          {ctaLabel}
        </Link>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {CHAPTERS.map((chapter) => {
          const completed = isMounted ? isCompleted(chapter.id) : false;

          return (
            <Link
              key={chapter.id}
              href={chapter.href}
              className={`group flex min-h-44 flex-col rounded-2xl border p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                completed ? "border-emerald-200 bg-emerald-50/50" : "border-zinc-200 bg-white"
              }`}
              aria-label={`前往${chapter.label}`}
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-bold text-emerald-700">{chapter.label}</h2>
                {completed ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="size-4 text-emerald-600" aria-hidden />
                    已完成
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-zinc-600">{chapterDescriptions[chapter.id]}</p>
              <span className="mt-auto inline-flex items-center justify-end text-emerald-700">
                <ArrowRight
                  className="size-5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
