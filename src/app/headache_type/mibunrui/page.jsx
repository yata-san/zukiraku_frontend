"use client";

import { useRouter } from "next/navigation";

export default function ZukizukiPage() {
  const router = useRouter();

  const Card = ({ children }) => (
    <div className="bg-white text-sm text-gray-700 rounded-2xl p-4 leading-relaxed whitespace-pre-line">
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#93DBE7] px-4 py-8 max-w-[420px] mx-auto">
      <h1 className="text-white text-3xl font-bold text-center mb-2">タイプ未分類</h1>
      <p className="text-white text-sm text-center mb-6">（不定型の頭痛）</p>

      <div className="text-white font-semibold text-sm mb-2">主な症状</div>
      <Card>
        ズキズキギューズドンのいずれにも当てはまらない痛みの部位や質が毎回違う生活状況によって症状が大きく変動する
      </Card>

      <div className="text-white font-semibold text-sm mt-6 mb-2">主なトリガー</div>
      <Card>
        明確なトリガーが特定しづらい複数の要因が重なっている可能性あり
      </Card>

      <div className="text-white font-semibold text-sm mt-6 mb-2">あなたへのアドバイス</div>
      <Card>
        頭痛が起きた時の『時間きっかけ痛みの質』を記録してみましょう変化のパターンが見えてきたら、再度タイプ判定するのもおすすめです
      </Card>

      <div className="flex justify-center mt-8">
        <button
          className="bg-white text-[#198593] font-semibold px-6 py-2 rounded-full shadow"
          onClick={() => router.push("/results")}
        >
          戻る
        </button>
      </div>
    </div>
  );
}
