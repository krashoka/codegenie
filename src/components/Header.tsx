"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu as MenuIcon } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black shadow-sm p-5 border-b border-b-[#3f434c]">
      <nav className="max-w-4xl mx-auto flex justify-between items-center relative">
        <Link href="/" className="font-bold text-2xl text-[#fbfaf9]">
          CodingGenie
        </Link>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#fbfaf9] p-2 hover:text-gray-300 cursor-pointer"
          >
            <MenuIcon className="w-6 h-6" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-black border border-gray-700 rounded shadow-lg z-10">
              <Link
                href="/about"
                className="block px-4 py-2 text-[#fbfaf9] hover:bg-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-[#fbfaf9] hover:bg-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/privacy-policy"
                className="block px-4 py-2 text-[#fbfaf9] hover:bg-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                Privacy Policy
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}