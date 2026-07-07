/**
 * @fileoverview 通用減碳永續網站 — 頂部導覽列
 * @project 通用減碳永續網站
 * @description 提供首頁與各章節連結、目前路由高亮，以及重設學習進度的確認操作。
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgress } from "@/components/progress-provider";
import { CHAPTERS } from "@/lib/chapters";

const links = [{ label: "首頁", href: "/" }, ...CHAPTERS];

export function Navbar() {
  const { resetProgress } = useProgress();
  const pathname = usePathname();

  const handleResetProgress = () => {
    const shouldReset = window.confirm("確定要重設所有學習進度嗎？此操作無法復原。");
    if (!shouldReset) return;
    resetProgress();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center gap-6 px-4">
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "rounded-sm border-b-2 border-emerald-600 pb-0.5 text-sm font-bold text-emerald-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                  : "rounded-sm border-b-2 border-transparent pb-0.5 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
              }
              aria-label={`前往${link.label}頁面`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          onClick={handleResetProgress}
          className="ml-auto rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-600 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
          aria-label="重設學習進度"
        >
          重設進度
        </button>
      </nav>
    </header>
  );
}
