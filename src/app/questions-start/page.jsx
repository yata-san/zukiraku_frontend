"use client";

import { useRouter } from "next/navigation";

export default function QuestionsStartPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#93DBE7] text-white flex flex-col justify-between max-w-[420px] mx-auto px-6 py-16">

      {/* 中央のメッセージ */}
      <div className="flex-grow flex items-center justify-center text-center text-lg font-semibold leading-relaxed whitespace-pre-line">
        まずはじめに<br />
        あなたの頭痛について<br />
        教えてください
      </div>

      {/* 「質問回答へ」ボタン */}
      <div className="mb-4">
        <button
          onClick={() => router.push("/questions")}
          className="bg-[#198593] text-white w-full py-3 rounded-full text-sm font-semibold shadow-md"
        >
          質問回答へ
        </button>
      </div>
    </div>
  );
}
