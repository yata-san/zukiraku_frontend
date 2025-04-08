"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function StoryPage1() {
  const router = useRouter();

  const totalPages = 6;
  const currentPage = 0;

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

      {/* メインテキスト */}
      <div className="mt-16 text-center text-lg font-semibold leading-relaxed">
        あなたがいつも歩いている道
      </div>

      {/* 画像 */}
      <div className="flex justify-center mt-6">
        <Image
          src="/story/road.png"
          alt="いつも歩いている道"
          width={300}
          height={200}
          className="object-contain"
        />
      </div>

      {/* サブテキスト（スタイルを上に合わせて統一） */}
      <div className="text-center text-lg font-semibold leading-relaxed mt-4 mb-6 whitespace-pre-line">
        そこにある電柱の本数を<br />あなたは答えられますか？
      </div>

      {/* 次へボタン */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => router.push("/story/s2")}
          className="bg-white text-[#198593] px-6 py-2 rounded-full text-sm font-semibold shadow-md"
        >
          次へ
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
