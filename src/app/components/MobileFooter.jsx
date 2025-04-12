"use client";

import Link from "next/link";
import { Pencil, MoveRight } from "lucide-react";

export default function MobileFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-14 bg-[#D1F8FF] border-t shadow-md z-50 flex justify-around items-center">
      {/* 振り返る */}
     <Link href="/reflection" className="relative flex flex-col items-center">
        {/* 飛び出しアイコン */}
        <div className="absolute -top-5 w-10 h-10 rounded-full bg-white border-2 border-[#198593] flex items-center justify-center shadow">
          <Pencil className="w-5 h-5 text-[#198593]" />
        </div>
        <span className="text-xs font-bold text-[#198593] mt-6">振り返る</span>
      </Link>

      {/* 目標・習慣確認 */}
      <Link href="/chat/result" className="relative flex flex-col items-center">
        <div className="absolute -top-5 w-10 h-10 rounded-full bg-white border-2 border-[#198593] flex items-center justify-center shadow">
          <MoveRight className="w-5 h-5 text-[#198593]" />
        </div>
        <span className="text-xs font-bold text-[#198593] mt-6">目標・習慣確認</span>
      </Link>
    </footer>
  );
}
