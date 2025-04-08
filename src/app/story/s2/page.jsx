"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function StoryPage2() {
  const router = useRouter();

  const totalPages = 6;
  const currentPage = 1;

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
        脳は注意が向かない情報は<br />記憶しないそうです
      </div>

      {/* 画像 */}
      <div className="flex justify-center mt-6">
        <Image
          src="/story/temp2.png"
          alt="ストーリー2の画像"
          width={300}
          height={200}
          className="object-contain"
        />
      </div>

      {/* 下部テキスト */}
      <div className="text-center text-lg font-semibold leading-relaxed mt-4 mb-6 whitespace-pre-line">
        一番身近で当たり前のはずの<br />
        自分という情報も<br />
        注意を向けない限り<br />
        脳は学習できないのです
      </div>

      {/* 戻る・次へボタン */}
      <div className="flex justify-between items-center mb-4 px-1">
        <button
          onClick={() => router.push("/story/s1")}
          className="border border-white text-white px-5 py-1.5 rounded-full text-sm font-medium"
        >
          戻る
        </button>

        <button
          onClick={() => router.push("/story/s3")}
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
