"use client";

import { useRouter } from "next/navigation";

export default function CautionaryPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#93DBE7] text-white flex flex-col justify-center items-center max-w-[420px] mx-auto px-6 py-16">

      {/* 上部注意文（段落分け + 適切な余白） */}
      <div className="text-[20px] text-center leading-relaxed mb-10 space-y-2">
        <p>このアプリは頭痛の治療を行うものではありません。</p>
        <p>慢性頭痛に苦しむ人に寄り添いながら</p>
        <p>セルフマネジメントを促進する</p>
        <p>サービスです。</p>
        <p>次のような方は医療機関を受診される</p>
        <p>ことをおすすめします。</p>
      </div>

      {/* 注意ボックス */}
      <div className="bg-white rounded-xl p-4 shadow-md text-[#198593] text-sm space-y-2 mb-10 w-full">
        <ul className="list-disc pl-5">
          <li>突然の強烈な痛みや徐々に増強する痛み</li>
          <li>手足の麻痺や言葉のもつれ</li>
          <li>発熱</li>
          <li>意識がなくなる</li>
          <li>強い頭痛を訴えたのち、急に意識がなくなってしまった</li>
          <li>意識があるが、手足が動かない</li>
          <li>頭痛に伴って吐き気や嘔吐が生じている</li>
        </ul>
      </div>

      {/* 理解したボタン */}
      <div className="w-full flex justify-center">
        <button
          onClick={() => router.push("/story/s1")}
          className="bg-[#198593] text-white px-8 py-2 rounded-full text-sm shadow-md"
        >
          理解した
        </button>
      </div>
    </div>
  );
}
