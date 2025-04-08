"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const botMessages = [
  "ありがとうございます！",
  "次に、そのような自分になるために定着させたい行動を3つ選んでください！",
  "先ほどの「目指したい自分」から私がいくつか候補を示してみます！"
];

const choices = [
  "10分散歩してみる",
  "ヨガをする",
  "頭が痛くないときに鎮痛剤を飲まない",
  "腹八分目で食事を終える",
  "コーヒーは1日1杯までにする",
  "朝活をする"
];
 
export default function ChatPage() {
  const router = useRouter();
  const [selected, setSelected] = useState([]);
  const [customInputs, setCustomInputs] = useState([]);
  const [customTexts, setCustomTexts] = useState(["", "", ""]);

  // 合計選択数（選択肢 + 入力済みの自由記述）
  const totalSelectedCount =
    selected.length + customTexts.filter((text) => text.trim() !== "").length;

  const toggleChoice = (choice) => {
    if (selected.includes(choice)) {
      setSelected(selected.filter((c) => c !== choice));
    } else if (totalSelectedCount < 3) {
      setSelected([...selected, choice]);
    }
  };

  const handleAddInput = () => {
    if (customInputs.length < 3) {
      setCustomInputs([...customInputs, customInputs.length]);
    }
  };

  const handleCustomTextChange = (index, value) => {
    const updated = [...customTexts];
    updated[index] = value;
    setCustomTexts(updated);
  };

  return (
    <div className="max-w-[420px] mx-auto px-4 py-6">
      {botMessages.map((msg, index) => (
        <div key={index} className="flex mb-3 items-start">
          <div className="relative w-8 h-8 mr-2 flex-shrink-0">
            <Image
              src="/chat/bot.png"
              alt="Bot Icon"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="bg-[#D1F8FF] px-4 py-2 rounded-xl shadow text-sm whitespace-pre-line">
            {msg}
          </div>
        </div>
      ))}

      <div className="mt-6">
        <p className="text-sm mb-2 text-gray-600">3つまで選んでください</p>
        <div className="grid grid-cols-2 gap-3">
          {choices.map((choice) => {
            const isSelected = selected.includes(choice);
            const isDisabled = !isSelected && totalSelectedCount >= 3;

            return (
              <button
                key={choice}
                onClick={() => toggleChoice(choice)}
                disabled={isDisabled}
                className={`
                  text-sm text-left w-full px-4 py-2 rounded-xl shadow whitespace-pre-line
                  ${isSelected
                    ? "bg-[#198593] text-white"
                    : isDisabled
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-[#F0F0F0] text-black"}
                `}
              >
                {choice}
              </button>
            );
          })}

          {/* 自由記述追加ボタン（選択肢風・2列分） */}
          {customInputs.length < 3 && (
            <button
              onClick={handleAddInput}
              className="col-span-2 text-sm text-left w-full px-4 py-2 rounded-xl shadow bg-[#F0F0F0] text-black"
            >
              自分で入力する（選択肢と合わせて最大3つ）
            </button>
          )}
        </div>
      </div>

      {/* 自由記述欄 */}
      <div className="mt-4">
        {customInputs.map((_, index) => (
          <textarea
            key={index}
            placeholder={`自由記述 ${index + 1}`}
            value={customTexts[index]}
            onChange={(e) => handleCustomTextChange(index, e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-2 text-sm"
            rows={2}
            disabled={
              totalSelectedCount >= 3 &&
              customTexts[index].trim() === ""
            }
          />
        ))}
      </div>

      {/* OKボタン（3つ選ばれたときのみ表示） */}
      {totalSelectedCount === 3 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => router.push("/chat/result")}
            className="bg-[#198593] text-white px-6 py-2 rounded-lg text-sm shadow"
          >
            OK！
          </button>
        </div>
      )}
    </div>
  );
}
