"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "./questionsData";
import { v4 as uuidv4 } from "uuid";

export default function QuestionsPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState([]);
  const answer_id = uuidv4();

  const handleSelect = (questionIndex, choice_id, question_id) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = { question_id, choice_id };
    setAnswers(newAnswers);
  };

  const allAnswered = answers.length === questions.length && answers.every((a) => a);

  const handleSubmit = async () => {
    if (allAnswered) {
      const payload = {
        answer_id: answer_id,
        screening_type_id: 1, // 今は仮固定（将来は切り替え可能）
        answers: answers,
      };

      console.log("送信データ:", payload);

      // 🔽 FastAPI に送信（現在はコメントアウト）
      /*
      try {
        const res = await fetch("http://localhost:8000/api/answers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          router.push("/result");
        } else {
          alert("送信に失敗しました");
        }
      } catch (err) {
        console.error("通信エラー:", err);
      }
      */

      // 暫定的に result ページへ遷移
      router.push("/result");
    }
  };

  return (
    <div className="min-h-screen bg-[#93DBE7] text-white max-w-[420px] mx-auto px-4 py-8">
      <div className="space-y-10 pb-24">
        {questions.map((q, index) => (
          <div key={q.question_id}>
            <div className="text-sm font-semibold mb-4">{q.text}</div>

            <div
              className={`grid ${
                q.choices.length === 3
                  ? "grid-cols-3"
                  : q.choices.length === 4
                  ? "grid-cols-4"
                  : ""
              } gap-0 rounded-lg overflow-hidden`}
            >
              {q.choices.map((choice, choiceIndex) => {
                const selected = answers[index]?.choice_id === choice.choice_id;
                const isFirst = choiceIndex === 0;
                const isLast = choiceIndex === q.choices.length - 1;
                const roundedClass = `${isFirst ? "rounded-l-lg" : ""} ${isLast ? "rounded-r-lg" : ""}`;

                return (
                  <button
                    key={choice.choice_id}
                    onClick={() => handleSelect(index, choice.choice_id, q.question_id)}
                    className={`text-xs py-3 font-semibold text-center transition-all
                      ${roundedClass}
                      ${!isLast ? "border-r border-[#E0E0E0]" : ""}
                      ${
                        selected
                          ? "bg-[#198593] text-white"
                          : "bg-white text-[#198593]"
                      }`}
                  >
                    {choice.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 回答ボタン */}
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
