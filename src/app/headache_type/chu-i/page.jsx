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
      <h1 className="text-white text-3xl font-bold text-center mb-2">ギュータイプ</h1>
      <p className="text-white text-sm text-center mb-6">（薬物乱用頭痛の傾向があります）</p>

      <div className="text-white font-semibold text-sm mb-2">主な症状</div>
      <Card>
        頭全体がギューっと締めつけられるように痛む肩や首のこりを伴うことがある体を動かしても悪化しない痛みは比較的軽度で、日常生活は可能なことが多い
      </Card>

      <div className="text-white font-semibold text-sm mt-6 mb-2">主なトリガー</div>
      <Card>
        長時間のデスクワークやスマホ操作ストレスや緊張状態目の疲れや身体の冷え睡眠の質が悪いとき
      </Card>

      <div className="text-white font-semibold text-sm mt-6 mb-2">あなたへのアドバイス</div>
      <Card>
        こまめに姿勢を変え、ストレッチを取り入れる湯船につかって筋肉をほぐす自分なりのリラックス方法を見つける目を酷使しないよう休憩を取る
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
