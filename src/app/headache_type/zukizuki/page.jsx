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
      <h1 className="text-white text-3xl font-bold text-center mb-2">ズキズキタイプ</h1>
      <p className="text-white text-sm text-center mb-6">（片頭痛の傾向があります）</p>

      <div className="text-white font-semibold text-sm mb-2">主な症状</div>
      <Card>
        頭の片側にズキズキとした痛みが出ることが多い光や音、においに敏感になることがある吐き気や気分の悪さを伴うことがある痛みの間、じっとしていたくなる
      </Card>

      <div className="text-white font-semibold text-sm mt-6 mb-2">主なトリガー</div>
      <Card>
        睡眠不足や寝すぎた日月経の前後（女性の場合）緊張から解放されたタイミング（週末など）天気や気圧の変化明るすぎる光、にぎやかな音
      </Card>

      <div className="text-white font-semibold text-sm mt-6 mb-2">あなたへのアドバイス</div>
      <Card>
        就寝起床時間を一定に保ち、睡眠リズムを整える強い光や音を避け、静かな場所で休む食事や運動のリズムもなるべく安定させる頭痛の状況を記録して、パターンを見つける
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
