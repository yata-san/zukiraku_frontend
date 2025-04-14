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
      <h1 className="text-white text-3xl font-bold text-center mb-2">2次性頭痛の可能性</h1>
      <p className="text-white text-sm text-center mb-6">（医療機関への受診をおすすめします）</p>

      <div className="text-white font-semibold text-sm mb-2">主な症状</div>
      <Card>
        突然始まった激しい頭痛言葉が出にくい、手足のしびれ発熱やうなじのこわばりを伴う
      </Card>

      <div className="text-white font-semibold text-sm mt-6 mb-2">主なトリガー</div>
      <Card>
        ―
      </Card>

      <div className="text-white font-semibold text-sm mt-6 mb-2">あなたへのアドバイス</div>
      <Card>
        ためらわずに、できるだけ早く医療機関を受診してください頭痛の特徴や経過をメモしておくと医師に伝えやすくなります
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
