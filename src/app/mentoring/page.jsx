"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MentoringPage() {
  const [botMessage, setBotMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchMentoringMessage = async () => {
      const session_id = localStorage.getItem("session_id");

      try {
        const res = await fetch("http://localhost:8000/api/mentoring", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ session_id })
        });

        const data = await res.json();
        if (data && data.reply) {
          setBotMessage(data.reply);
        } else {
          setBotMessage("アドバイスを取得できませんでした。");
        }
      } catch (err) {
        console.error(err);
        setBotMessage("通信エラーが発生しました。");
      } finally {
        setLoading(false);
      }
    };

    fetchMentoringMessage();
  }, []);

  const handleOK = () => {
    router.push("/datalist");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4 py-8 max-w-[420px] mx-auto">
      {loading ? (
        <p className="text-sm text-gray-500 italic">考え中...</p>
      ) : (
        <div className="w-full space-y-6">
          {/* Bot吹き出し */}
          <div className="flex items-start gap-2">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/chat/bot.png"
                alt="Bot"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="bg-[#D1F8FF] text-black px-4 py-2 rounded-xl shadow text-sm whitespace-pre-line">
              {botMessage}
            </div>
          </div>

          {/* OKボタン */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleOK}
              className="bg-[#198593] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
