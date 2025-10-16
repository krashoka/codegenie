"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { CheckCheck, Copy, Download, RotateCcw } from "lucide-react";
import SeoHead from "@/lib/seoHead";

export default function CaseConverter() {
  const [text, setText] = useState("");
  const [converted, setConverted] = useState("");
  const [copy, setCopy] = useState("Copy");

  const toUpperCase = () => setConverted(text.toUpperCase());
  const toLowerCase = () => setConverted(text.toLowerCase());

  const toTitleCase = () =>
    setConverted(
      text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );

  const toSentenceCase = () =>
    setConverted(
      text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())
    );

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(converted);
      setCopy("Copied");
      setTimeout(() => {
        setCopy("Copy");
      }, 2000);
    } catch {
      alert("Failed to copy!");
    }
  }

  function handleDownload() {
    const blob = new Blob([converted], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "converted-text.txt";
    link.click();
  }

  function handleReset() {
    setText("");
    setConverted("");
  }

  return (
    <>
      {/* ✅ SEO Component */}
      <SeoHead
        title="Case Converter — Uppercase, Lowercase, Capitalize Text"
        description="Convert your text to uppercase, lowercase, or title case instantly online."
        canonicalPath="/case-converter"
      />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10 bg-gray-900 mt-6">
        <div className="flex items-center justify-between gap-1 mb-6">
          <h1 className="text-3xl font-bold text-white">Case Converter</h1>

          <button onClick={() => handleReset()} className="ml-4 cursor-pointer">
            <div className="flex items-center gap-1">
              <RotateCcw size={16} /> Reset
            </div>
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-4 mb-6 w-full">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-65 max-h-70 p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
            placeholder="Type or paste your text here..."
          ></textarea>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={toUpperCase}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
          >
            UPPERCASE
          </button>
          <button
            onClick={toLowerCase}
            className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white"
          >
            lowercase
          </button>
          <button
            onClick={toTitleCase}
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white"
          >
            Title Case
          </button>
          <button
            onClick={toSentenceCase}
            className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white"
          >
            Sentence case
          </button>
        </div>

        <div>
          <textarea
            value={converted}
            readOnly
            className="w-full h-65 max-h-70 p-3 rounded-lg bg-gray-700 text-white"
            placeholder="Converted text will appear here..."
          ></textarea>
          {converted && (
            <>
              <button
                onClick={() => handleCopy()}
                className="ml-4 cursor-pointer"
              >
                {copy === "Copy" ? (
                  <div className="flex items-center gap-1">
                    <Copy size={16} /> {copy}
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <CheckCheck size={16} /> {copy}
                  </div>
                )}
              </button>
              <button
                onClick={() => handleDownload()}
                className="ml-4 cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  <Download size={16} /> Download
                </div>
              </button>
            </>
          )}
        </div>
      </main>
    </>
  );
}
