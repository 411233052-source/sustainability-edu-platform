/**
 * @fileoverview 通用減碳永續網站 — 根版面
 * @project 通用減碳永續網站
 * @description 定義全站 HTML 結構、字型、SEO metadata，並包裹 Navbar、ProgressBar 與 ProgressProvider。
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { ProgressBar } from "@/components/progress-bar";
import { ProgressProvider } from "@/components/progress-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "永續發展互動教育平台",
  description: "永續發展互動教育平台基礎網站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-50 text-zinc-900">
        <ProgressProvider>
          <Navbar />
          <ProgressBar />
          <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-12 pt-32">
            {children}
          </main>
          <footer className="border-t border-zinc-100 bg-zinc-50 py-6">
            <p className="px-4 text-center text-xs text-zinc-400">
              © 2026 永續發展互動教育平台 SUSTAINABILITY LEARNING. All rights reserved. | 本平台內容僅供教育與學術專題使用。
            </p>
          </footer>
        </ProgressProvider>
      </body>
    </html>
  );
}
