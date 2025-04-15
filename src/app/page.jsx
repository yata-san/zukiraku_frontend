"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TitlePage() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen text-white">
      {/* 背景画像を全体に広げる */}
      <Image
        src="/title/cover.jpg" // ← 差し替え画像のパスに合わせてね
        alt="背景画像"
        fill
        className="object-cover z-0"
        priority
      />

      {/* オーバーレイの中身 */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <p className="text-xs tracking-wide mb-2">あなたの頭痛と本気で向き合うアプリ</p>
        <h1 className="text-4xl font-bold tracking-wider mb-6">ズキラク</h1>
        <p className="text-lg font-medium mb-8">
          頭痛を気にする生活から<br />解放されませんか？
        </p>
        <button
          onClick={() => router.push("/cautionary")}
          className="bg-white text-[#198593] font-semibold px-6 py-2 rounded-full shadow-md text-sm"
        >
          はじめる
        </button>
      </div>
    </div>
  );
}
