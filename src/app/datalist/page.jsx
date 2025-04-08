"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import fetchReflections from "./fetchReflections";

export default function DatalistPage() {
  const router = useRouter();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetReflections = async () => {
      try {
        const data = await fetchReflections();
        setRecords(data);
      } catch (error) {
        console.error("Failed to fetch reflections:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAndSetReflections();
  }, []);

  // ★生成ヘルパー
  const renderStars = (score) => (
    [...Array(5)].map((_, i) => (
      <span key={i} className={`text-sm ${i < score ? "text-[#F5E755]" : "text-[#DFDFDF]"}`}>
        ★
      </span>
    ))
  );

  return (
    <div className="max-w-[420px] mx-auto px-4 py-6 bg-white min-h-screen">
      {/* 振り返り追加ボタン */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => router.push("/reflection")}
          className="flex items-center gap-2 bg-[#198593] text-white px-4 py-2 rounded-lg shadow text-sm"
        >
          <span>📝</span> 今日の振り返りを追加する
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">読み込み中...</p>
      ) : records.length === 0 ? (
        <p className="text-center text-gray-500">振り返りデータはまだありません。</p>
      ) : (
        <div className="space-y-4">
          {[...records]
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white"
              >
                {/* ① 日付 */}
                <div className="text-xs text-gray-500 mb-2">{item.date}</div>

                {/* ② なりたい姿評価 */}
                <div className="text-sm font-semibold text-[#198593] mb-1">なりたい姿</div>
                <div className="flex gap-1 mb-2 flex-wrap">
                  {item.ratings.goals.map((goal, i) => (
                    <div key={i}>{renderStars(goal.score)}</div>
                  ))}
                </div>

                {/* ③ 習慣評価 */}
                <div className="text-sm font-semibold text-[#198593] mb-1">習慣</div>
                <div className="flex gap-1 mb-2 flex-wrap">
                  {item.ratings.habits.map((habit, i) => (
                    <div key={i}>{renderStars(habit.score)}</div>
                  ))}
                </div>

                {/* ④ 自由記述（2行） */}
                <div className="text-sm text-gray-700 overflow-hidden text-ellipsis line-clamp-2">
                  {item.comment}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
