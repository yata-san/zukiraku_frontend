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
      <h1 className="text-white text-3xl font-bold text-center mb-2">今回は頭痛の傾向は見られませんでした</h1>
      <p className="text-white text-sm text-center mb-6"></p>

      <div className="text-white font-semibold text-sm mb-2">主な症状</div>
      <Card>
        頭痛の頻度が非常に少ない痛みも軽く、日常生活に支障はない随伴症状やトリガーもはっきりしない
      </Card>

      <div className="text-white font-semibold text-sm mt-6 mb-2">主なトリガー</div>
      <Card>
        ―
      </Card>

      <div className="text-white font-semibold text-sm mt-6 mb-2">あなたへのアドバイス</div>
      <Card>
        体調の変化に気づけたこと自体が大切ですこれから頭痛が気になるようであれば記録をつけてみましょう
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
