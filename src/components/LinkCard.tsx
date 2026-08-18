"use client";

import { useState } from "react";
import type { LinkItem } from "@/lib/data";

export default function LinkCard({ link }: { link: LinkItem }) {
  const [count, setCount] = useState<number | null>(null);

  async function handleClick() {
    try {
      const res = await fetch(`/api/click/${link.id}`, { method: "POST" });
      const data = await res.json();
      setCount(data.count);
    } catch {
      // 클릭 수 저장 실패해도 링크는 이동
    }
    window.open(link.url, "_blank", "noopener,noreferrer");
  }

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-left"
    >
      <span className="flex items-center gap-3">
        {link.icon && <span className="text-xl">{link.icon}</span>}
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          {link.title}
        </span>
      </span>
      {count !== null && (
        <span className="text-xs text-gray-400 dark:text-gray-500">
          {count}회
        </span>
      )}
    </button>
  );
}
