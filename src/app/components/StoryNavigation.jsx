"use client";

import { useRouter } from "next/navigation";

export default function StoryNavigation({ showBack = true, backHref = "", nextHref = "", nextLabel = "次へ" }) {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center w-full px-4 mt-6">
      {/* 戻るボタン（控えめな白枠ボタン） */}
      {showBack ? (
        <button
          onClick={() => router.push(backHref)}
          className="border border-white text-white text-sm px-4 py-2 rounded-full"
        >
          戻る
        </button>
      ) : (
        <div />
      )}

      {/* 次へ or はじめるボタン */}
      <button
        onClick={() => router.push(nextHref)}
        className="bg-white text-[#198593] text-sm px-6 py-2 rounded-full font-semibold shadow"
      >
       {nextLabel}
      </button>
    </div>
  );
}
