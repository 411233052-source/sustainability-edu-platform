/**
 * @fileoverview 通用減碳永續網站 — 學習進度條
 * @project 通用減碳永續網站
 * @description 固定於 Navbar 下方，以可視化進度條顯示已完成章節數量與百分比。
 */

"use client";

import { useMemo, useSyncExternalStore } from "react";
import { useProgress } from "@/components/progress-provider";
import { TOTAL_CHAPTERS } from "@/lib/chapters";

export function ProgressBar() {
  const { completedCount } = useProgress();
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const progress = useMemo(() => {
    return (completedCount / TOTAL_CHAPTERS) * 100;
  }, [completedCount]);

  const displayCount = isMounted ? completedCount : 0;
  const displayProgress = isMounted ? progress : 0;

  return (
    <div className="fixed inset-x-0 top-14 z-40 border-b border-emerald-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-10 w-full max-w-5xl items-center gap-4 px-4">
        <span className="text-xs font-semibold text-emerald-700">
          學習進度 {displayCount}/{TOTAL_CHAPTERS}
        </span>
        <div
          className="h-2 flex-1 overflow-hidden rounded-full bg-emerald-100"
          role="progressbar"
          aria-label="章節完成進度"
          aria-valuenow={displayCount}
          aria-valuemin={0}
          aria-valuemax={TOTAL_CHAPTERS}
        >
          <div
            className="h-full rounded-full bg-emerald-600 transition-all duration-300"
            style={{ width: `${displayProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
