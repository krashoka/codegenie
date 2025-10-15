// src/components/Header.tsx

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-black shadow-sm p-5 border-b border-b-[#3f434c]">
      <nav className="max-w-4xl mx-auto flex justify-between">
        <Link href="/" className="font-bold text-2xl text-[#fbfaf9]">
          CodeGenie
        </Link>

        <div className="space-x-4">
          <Link href="/blog" className="text-[#fbfaf9]">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
