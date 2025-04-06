"use client";

import { useState } from "react";
import Image from "next/image";

const reflectionItems = {
  goals: [
    { icon: "/icons/goal1.png", label: "朝すっきり起きられる" },
    { icon: "/icons/goal2.png", label: "集中できる" },
    { icon: "/icons/goal3.png", label: "心の余裕をもって過ごす" }
  ],
  habits: [
    { icon: "/icons/habit1.png", label: "夜更かしをやめる" },
    { icon: "/icons/habit2.png", label: "瞑想を5分する" },
    { icon: "/icons/habit3.png", label: "水をたくさん飲む" }
  ]
};

export default function ReflectionPage() {
  const [ratings, setRatings] = useState(Array(6).fill(0));
  const [comment, setComment] = useState("");

  const handleRating = (sectionIndex, starIndex) => {
    const updated = [...ratings];
    updated[sectionIndex] = starIndex + 1;
    setRatings(updated);
  };

  const renderStars = (sectionIndex) => (
    <div className="flex gap-1 mt-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => handleRating(sectionIndex, i)}
        >
          <span
            className={`text-xl ${
              ratings[sectionIndex] > i ? "text-[#F5E755]" : "text-[#DFDFDF]"
            }`}
          >
            ★
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="max-w-[420px] mx-auto px-4 py-6">
      {/* 🤖 Bot メッセージ */}
      <div className="flex mb-4 items-start">
        <div className="relative w-8 h-8 mr-2 flex-shrink-0">
          <Image src="/chat/bot.png" alt="Bot" fill className="rounded-full object-cover" />
        </div>
        <div className="bg-[#D1F8FF] px-4 py-2 rounded-xl shadow text-sm whitespace-pre-line">
          今日もお疲れさまでした！今日という1日をボクと一緒に振り返ってみよう！
        </div>
      </div>

      {/* なりたい姿 見出し */}
      <div className="bg-[#73D8E9] text-white text-center py-2 rounded mb-4 text-sm font-semibold">
        なりたい姿
      </div>

      {/* なりたい姿 各項目 + 星 */}
      {reflectionItems.goals.map((item, i) => (
        <div key={i} className="mb-2">
          <div className="flex items-center gap-3">
            <Image src={item.icon} alt={item.label} width={40} height={40} />
            <span className="text-sm">{item.label}</span>
          </div>
          {renderStars(i)}
        </div>
      ))}

      {/* 習慣 見出し */}
      <div className="bg-[#73D8E9] text-white text-center py-2 rounded mb-4 text-sm font-semibold mt-6">
        習慣
      </div>

      {/* 習慣 各項目 + 星 */}
      {reflectionItems.habits.map((item, i) => (
        <div key={i + 3} className="mb-2">
          <div className="flex items-center gap-3">
            <Image src={item.icon} alt={item.label} width={40} height={40} />
            <span className="text-sm">{item.label}</span>
          </div>
          {renderStars(i + 3)}
        </div>
      ))}

      {/* 今日を振り返って一言 */}
      <div className="bg-[#73D8E9] text-white text-center py-2 rounded mb-2 text-sm font-semibold mt-6">
        今日を振り返って一言
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="今日の気づきや感想などを自由に書いてください"
        className="w-full border border-gray-300 rounded-md p-2 text-sm"
        rows={6}
      />

      <div className="mt-6 flex justify-center">
        <button className="bg-[#198593] text-white px-6 py-2 rounded-lg text-sm shadow">
          記録をつける
        </button>
      </div>
    </div>
  );
}
