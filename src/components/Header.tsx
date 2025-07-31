// src/components/Header.tsx

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm p-5 mb-6">
      <nav className="max-w-4xl mx-auto flex justify-between">
        <Link href="/" className="font-bold text-2xl text-[#0f1628]">
          CodeGenie
        </Link>

        <div className="space-x-4">
          <Link href="/blog" className="text-[#0f1628]">Blog</Link>
        </div>
      </nav>
    </header>
  );
}
