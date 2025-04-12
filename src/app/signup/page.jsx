"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // バリデーションなどは不要（user_id=1に固定）
    router.push("/chat/1");
  };

  return (
    <div className="min-h-screen bg-[#93DBE7] text-white px-6 py-10 max-w-[420px] mx-auto">
      <h2 className="text-xl font-bold mb-8 text-center">アカウント作成</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm mb-1">メールアドレス</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md px-4 py-2 text-black"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">パスワード</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md px-4 py-2 text-black"
            placeholder="********"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">パスワード（確認）</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-md px-4 py-2 text-black"
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#198593] text-white py-3 rounded-full font-semibold shadow"
        >
          登録
        </button>
      </form>
    </div>
  );
}
