"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ChatResultPage() {
  const router = useRouter();

  // 仮データ（backend完了後に実装）
  const result1 = [
    { icon: "/icons/goal1.png", label: "朝すっきり起きられる" },
    { icon: "/icons/goal2.png", label: "集中できる" },
    { icon: "/icons/goal3.png", label: "心の余裕をもって過ごす" }
  ];

  const result2 = [
    { icon: "/icons/habit1.png", label: "夜更かしをやめる" },
    { icon: "/icons/habit2.png", label: "瞑想を5分する" },
    { icon: "/icons/habit3.png", label: "水をたくさん飲む" }
  ];

  return (
    <div className="max-w-[420px] mx-auto px-4 py-6">

      {/* 見出し：なりたい姿 */}
      <div className="bg-[#73D8E9] text-white text-center py-2 rounded mb-4 text-sm font-semibold">
        なりたい姿
      </div>

      {/* 選択肢（チャット1） */}
      <div className="flex justify-between mb-6">
        {result1.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-[30%]">
            <Image
              src={item.icon}
              alt={item.label}
              width={48}
              height={48}
              className="mb-1"
            />
            <span className="text-xs text-center">{item.label}</span>
          </div>
        ))}
      </div>

      {/* 見出し：習慣 */}
      <div className="bg-[#73D8E9] text-white text-center py-2 rounded mb-4 text-sm font-semibold">
        習慣
      </div>

      {/* 選択肢（チャット2） */}
      <div className="flex justify-between mb-6">
        {result2.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-[30%]">
            <Image
              src={item.icon}
              alt={item.label}
              width={48}
              height={48}
              className="mb-1"
            />
            <span className="text-xs text-center">{item.label}</span>
          </div>
        ))}
      </div>

      {/* OK! ボタン */}
      <div className="flex justify-center mb-3">
        <button
          onClick={() => router.push("/datalist")} // 次に進むページに変更可
          className="bg-[#198593] text-white px-6 py-2 rounded-lg text-sm shadow"
        >
          OK！
        </button>
      </div>

      {/* やりなおす ボタン */}
      <div className="flex justify-center">
        <button
          onClick={() => router.push("/chat/1")}
          className="bg-[#AAAAAA] text-white px-6 py-2 rounded-lg text-sm shadow"
        >
          やりなおす
        </button>
      </div>
    </div>
  );
}
