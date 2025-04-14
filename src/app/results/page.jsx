"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// 仮の診断結果（本来はAPIから取得）
const mockResultIds = ["type_001", "type_002"];

// タイプ情報（slugは説明ページのリンクに使用）
const headacheTypes = {
  type_001: {
    name: "ズキズキタイプ（片頭痛の傾向があります）",
    description: "頭の片側にズキズキとした痛みが出ることが多い\n光や音、においに敏感になることがある\n吐き気や気分の悪さを伴うことがある",
    slug: "zukizuki"
  },
  type_002: {
    name: "ギュータイプ（緊張型頭痛の傾向があります）",
    description: "頭全体がギューっと締めつけられるように痛む\n肩や首のこりを伴うことがある\n体を動かしても悪化しないことが多い",
    slug: "gyu"
  },
  type_003: {
    name: "ズドンタイプ（群発頭痛の傾向があります）",
    description: "目の奥がえぐられるように強く痛む\n涙や鼻水が一緒に出ることがある\n毎日同じ時間帯に起こりやすい発作が数週間続く",
    slug: "zudon"
  },
  type_004: {
    name: "注意タイプ（薬物乱用頭痛の可能性があります）",
    description: "薬を飲む回数が多い（月に10日以上）\n薬が効きにくくなってきたと感じる\n薬を飲まないと不安になる",
    slug: "chu-i"
  },
  type_005: {
    name: "医療機関への受診をおすすめします",
    description: "突然始まった激しい頭痛\n言葉が出にくい、手足のしびれ\n発熱やうなじのこわばりを伴う",
    slug: "2zisei"
  },
  type_006: {
    name: "不定型タイプ（特定のパターンに該当しません）",
    description: "いくつかの頭痛パターンに当てはまる要素はありますが、明確なタイプには分類されません。\n自分に合った生活改善や受診を検討しましょう。",
    slug: "mibunrui"
  },
  type_007: {
    name: "非該当タイプ（頭痛の可能性は低そうです）",
    description: "現在の状態では明確な頭痛のタイプは見られません。\n今後の変化に注意しながら、予防や生活習慣の見直しをおすすめします。",
    slug: "none"
  }
};

export default function ResultPage() {
  const [results, setResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetched = mockResultIds.map((id) => ({
      id,
      ...headacheTypes[id]
    }));
    setResults(fetched);
  }, []);

  return (
    <div className="min-h-screen bg-[#93DBE7] text-white px-6 py-10 max-w-[420px] mx-auto flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold mb-6 text-center">
          あなたの頭痛タイプは以下でした
        </h2>

        <div className="space-y-6">
          {results.map((result) => (
            <div key={result.id} className="bg-white rounded-xl p-4 shadow text-[#198593]">
              <h3 className="text-base font-bold mb-2">{result.name}</h3>
              <p className="text-sm mb-3 whitespace-pre-line">{result.description}</p>
              <button
                onClick={() =>
                  router.push(`/headache_type/${encodeURIComponent(result.slug)}`)
                }
                className="text-sm bg-[#198593] text-white px-4 py-2 rounded-full shadow"
              >
                詳しい説明はこちら
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => router.push("/signup")}
          className="bg-white text-[#198593] px-6 py-3 rounded-full font-semibold shadow"
        >
          アプリを始める
        </button>
      </div>
    </div>
  );
}
