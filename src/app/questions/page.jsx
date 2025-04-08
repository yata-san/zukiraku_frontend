"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// 仮の30問データ（3択/4択混在）
const questions = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  text: `質問 ${i + 1}：これはサンプルの質問文です。`,
  options: i % 2 === 0
    ? ["選択肢 A", "選択肢 B", "選択肢 C"] // 3択
    : ["選択肢 A", "選択肢 B", "選択肢 C", "選択肢 D"] // 4択
}));

export default function QuestionsPage() {
  const [answers, setAnswers] = useState(Array(30).fill(null));
  const router = useRouter();

  const handleSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const allAnswered = answers.every((a) => a !== null);

  const handleSubmit = () => {
    if (allAnswered) {
      router.push("/result");
    }
  };

  return (
    <div className="min-h-screen bg-[#93DBE7] text-white max-w-[420px] mx-auto px-4 py-8">
      <div className="space-y-10">
        {questions.map((q, index) => (
          <div key={q.id}>
            {/* 質問文 */}
            <div className="text-sm font-semibold mb-4">
              {q.text}
            </div>

            {/* 選択肢 */}
            <div
              className={`grid ${
                q.options.length === 3
                  ? "grid-cols-3"
                  : q.options.length === 4
                  ? "grid-cols-4"
                  : ""
              } gap-0 rounded-lg overflow-hidden`}
            >
              {q.options.map((opt, optIndex) => {
                const isSelected = answers[index] === optIndex;

                const isFirst = optIndex === 0;
                const isLast = optIndex === q.options.length - 1;
                const roundedClass = `${isFirst ? "rounded-l-lg" : ""} ${isLast ? "rounded-r-lg" : ""}`;

                return (
                  <button
                    key={optIndex}
                    onClick={() => handleSelect(index, optIndex)}
                    className={`text-xs py-3 font-semibold text-center transition-all
                      ${roundedClass}
                      ${!isLast ? "border-r border-[#E0E0E0]" : ""}
                      ${
                        isSelected
                          ? "bg-[#198593] text-white"
                          : "bg-white text-[#198593]"
                      }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 回答する固定ボタン */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%]">
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className={`w-full py-3 rounded-full text-sm font-semibold shadow-lg transition-colors ${
            allAnswered
              ? "bg-[#198593] text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          回答する
        </button>
      </div>
    </div>
  );
}
