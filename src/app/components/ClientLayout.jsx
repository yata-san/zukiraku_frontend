"use client";

import { usePathname } from "next/navigation";
import MobileFooter from "./MobileFooter";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  /*以下のディレクトリは白背景＆フッター付になる！ */
  const isBlueBackground =
    !pathname.startsWith("/chat") &&
    !pathname.startsWith("/summary") &&
    !pathname.startsWith("/datalist") &&
    !pathname.startsWith("/reflection") &&
    !pathname.startsWith("/result-check");

  return (
    <div className={`${isBlueBackground ? "bg-[#93DBE7]" : "bg-white"} min-h-screen`}>
      <div className="pb-20">{children}</div>
      {!isBlueBackground && <MobileFooter />}
    </div>
  );
}
