"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function StoryPage6() {
  const router = useRouter();

  const totalPages = 6;
  const currentPage = 5;

  return (
    <div className="min-h-screen bg-[#93DBE7] text-white flex flex-col justify-between max-w-[420px] mx-auto px-4 py-6 relative">

      {/* スキップボタン */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => router.push("/questions-start")}
          className="text-xs underline"
        >
          スキップ
        </button>
      </div>

      {/* 上部テキスト */}
      <div className="mt-16 text-center text-lg font-semibold leading-relaxed whitespace-pre-line">
        単なる頭痛改善の<br />
        お手伝いだけではなく<br />
        その先の実現したい未来へ向けて<br />
        伴走させてください
      </div>

      {/* 画像（仮） */}
      <div className="flex justify-center mt-6">
        <Image
          src="/story/temp6.png" // 仮画像（/public/story/temp6.png）を配置してください
          alt="ストーリー6の画像"
          width={300}
          height={200}
          className="object-contain"
        />
      </div>

      {/* 下部テキストなし */}

      {/* 戻る・はじめるボタン */}
      <div className="flex justify-between items-center mb-4 px-1">
        <button
          onClick={() => router.push("/story/s5")}
          className="border border-white text-white px-5 py-1.5 rounded-full text-sm font-medium"
        >
          戻る
        </button>

        <button
          onClick={() => router.push("/questions-start")}
          className="bg-white text-[#198593] px-6 py-2 rounded-full text-sm font-semibold shadow-md"
        >
          はじめる
        </button>
      </div>

      {/* インジケーター */}
      <div className="flex justify-center items-center gap-2 pb-2">
        {[...Array(totalPages)].map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === currentPage ? "bg-[#198593]" : "bg-[#EEEEEE]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
