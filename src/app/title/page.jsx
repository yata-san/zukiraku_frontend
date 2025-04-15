import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TitlePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#93DBE7] text-center text-white relative flex flex-col justify-between max-w-[420px] mx-auto">

      {/* 上部タイトル・キャッチコピー */}
      <div className="pt-12 px-6">
        <p className="text-xs mb-1 tracking-wide">あなたの頭痛と本気で向き合うアプリよ</p>
        <h1 className="text-4xl font-bold tracking-wider">ズキラク</h1>
      </div>

      {/* 中央のメッセージ */}
      <div className="px-6 text-lg font-medium mt-12 whitespace-pre-line leading-relaxed">
        頭痛を気にする生活から<br />解放されませんか？
      </div>

      {/* 画像＋ボタン（img使用版） */}
      <div className="relative w-full h-[50vh] mt-8">
        <img
          src="/title/cover.jpg"
          alt="メイン画像"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
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

