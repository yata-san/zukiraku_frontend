"use client";

import { useState } from "react";
import Image from "next/image";

// ✅ API接続先を環境変数から取得するように変更しました！
//    - 開発環境（npm run dev）では .env.local の URL（例: http://localhost:8000）
//    - 本番環境（VercelやAzure）では .env.production の URL（例: https://app-002-step3-2-py-oshima1.azurewebsites.net）
//    に自動で切り替わります
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const USER_ID = "user_1234"; // 【連携時要入力】ログイン情報と連携

const reflectionItems = {
  goals: [
    { id: "goal1", icon: "/icons/goal1.png", label: "朝すっきり起きられる" },
    { id: "goal2", icon: "/icons/goal2.png", label: "集中できる" },
    { id: "goal3", icon: "/icons/goal3.png", label: "心の余裕をもって過ごす" }
  ],
  habits: [
    { id: "habit1", icon: "/icons/habit1.png", label: "夜更かしをやめる" },
    { id: "habit2", icon: "/icons/habit2.png", label: "瞑想を5分する" },
    { id: "habit3", icon: "/icons/habit3.png", label: "水をたくさん飲む" }
  ]
};

export default function ReflectionPage() {
  const [ratings, setRatings] = useState({});
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleRating = (id, score) => {
    setRatings((prev) => ({ ...prev, [id]: score }));
  };

  const renderStars = (id) => (
    <div className="flex gap-1 mt-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <button key={i} onClick={() => handleRating(id, i + 1)}>
          <span
            className={`text-xl ${
              (ratings[id] || 0) > i ? "text-[#F5E755]" : "text-[#DFDFDF]"
            }`}
          >
            ★
          </span>
        </button>
      ))}
    </div>
  );

  const handleSubmit = async () => {
    setSubmitting(true);

    const payload = {
      user_id: 1, // 固定値でOK
      to_be_scores: reflectionItems.goals
        .filter((item) => item.id)
        .map((item) => ({
          to_be_id: parseInt(item.id.replace("goal", "")),
          to_be_score: ratings[item.id] ?? 0
        })),
      to_do_scores: reflectionItems.habits
        .filter((item) => item.id)
        .map((item) => ({
          to_do_id: parseInt(item.id.replace("habit", "")),
          to_do_score: ratings[item.id] ?? 0
        })),
      feedback_text: comment,
      execution_date: new Date().toISOString().split("T")[0]
    };

    try {
      const res = await fetch(`${API_BASE_URL}/api/submit_review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("session_id", data.session_id); // ← mentoring用
        localStorage.setItem("ai_feedback", data.ai_feedback);
        window.location.href = "/mentoring";
      } else {
        alert("送信に失敗しました");
      }
    } catch (err) {
      console.error(err);
      alert("通信エラーが発生しました");
    } finally {
      setSubmitting(false);
    }
  };

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

      {reflectionItems.goals.map((item) => (
        <div key={item.id} className="mb-2">
          <div className="flex items-center gap-3">
            <Image src={item.icon} alt={item.label} width={40} height={40} />
            <span className="text-sm">{item.label}</span>
          </div>
          {renderStars(item.id)}
        </div>
      ))}

      {/* 習慣 見出し */}
      <div className="bg-[#73D8E9] text-white text-center py-2 rounded mb-4 text-sm font-semibold mt-6">
        習慣
      </div>

      {reflectionItems.habits.map((item) => (
        <div key={item.id} className="mb-2">
          <div className="flex items-center gap-3">
            <Image src={item.icon} alt={item.label} width={40} height={40} />
            <span className="text-sm">{item.label}</span>
          </div>
          {renderStars(item.id)}
        </div>
      ))}

      {/* 一言入力 */}
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
        <button
          className="bg-[#198593] text-white px-6 py-2 rounded-lg text-sm shadow"
          onClick={handleSubmit}
          disabled={submitting}
        >
          記録をつける
        </button>
      </div>
    </div>
  );
}
