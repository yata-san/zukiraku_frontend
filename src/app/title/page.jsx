"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TitlePage() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 背景画像（cover.jpgを全画面に） */}
      <Image
        src="/title/cover.jpg"
        alt="Cover"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* 上部テキスト（上1/3に配置） */}
      <div className="absolute top-[10%] left-0 w-full flex flex-col items-center text-white text-center px-6 z-10">
        <div className="mb-4">
          <p className="text-xs mb-1 tracking-wide">あなたの頭痛と本気で向き合うアプリ</p>
          <h1 className="text-4xl font-bold tracking-wider">ズキラク</h1>
        </div>
        <div className="text-lg font-medium whitespace-pre-line leading-relaxed">
          頭痛を気にする生活から<br />解放されませんか？
        </div>
      </div>

      {/* はじめるボタン（画面下部に固定） */}
      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <button
          onClick={() => router.push("/story/s1")}
          className="bg-white text-[#198593] font-bold py-2 px-8 rounded-full shadow-md text-lg"
        >
          はじめる
        </button>
      </div>
    </div>
  );
}
