"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TitlePage() {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen text-center text-white">
      {/* 画面全体を覆う背景画像 */}
      <Image
        src="/title/cover.jpg"
        alt="メイン画像"
        fill
        className="object-cover object-center"
      />

      {/* テキストやボタンなどのコンテンツを重ねる */}
      <div className="relative flex flex-col justify-between items-center w-full h-full">
        {/* 上部タイトル・コンセプト */}
        <div className="pt-12 px-6 max-w-[420px] w-full mx-auto">
          <p className="text-xs mb-1 tracking-wide">
            あなたの頭痛と本気で向き合うアプリ
          </p>
          <h1 className="text-4xl font-bold tracking-wider">ズキラク</h1>
        </div>

        {/* 中央の問いかけ */}
        <div className="px-6 text-lg font-medium mt-12 whitespace-pre-line leading-relaxed max-w-[420px] w-full mx-auto">
          頭痛を気にする生活から
          <br />
          解放されませんか？
        </div>

        {/* 下部ボタン */}
        <div className="pb-8 max-w-[420px] w-full mx-auto">
          <button
            onClick={() => router.push("/cautionary")}
            className="bg-white text-[#198593] font-semibold px-6 py-2 rounded-full shadow-md text-sm"
          >
            はじめる
          </button>
        </div>
      </div>
    </div>
  );
}
