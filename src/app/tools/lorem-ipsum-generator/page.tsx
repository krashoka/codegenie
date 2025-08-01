"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { LoremIpsum } from "lorem-ipsum";

export default function LoremIpsumPage() {
  const [count, setCount] = useState(5);
  const [type, setType] = useState<"paragraphs" | "sentences" | "words">(
    "paragraphs"
  );
  const [output, setOutput] = useState("");
  const [copyToClipboard, setCopyToClipboard] = useState("Copy to Clipboard");

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 10,
      min: 6,
    },
    wordsPerSentence: {
      max: 16,
      min: 8,
    },
  });

  const generate = () => {
    let result = "";
    if (type === "paragraphs") result = lorem.generateParagraphs(count);
    else if (type === "sentences") result = lorem.generateSentences(count);
    else result = lorem.generateWords(count);

    setOutput(result);
  };

  useEffect(() => {
    generate(); // Generate content on mount
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(output);
      setCopyToClipboard("Copied");
      setTimeout(() => {
        setCopyToClipboard("Copy to Clipboard");
      }, 2000);
    } catch {
      alert("Failed to copy!");
    }
  }

  function handleDownload() {
    const blob = new Blob([output], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "lorem-ipsum.txt";
    link.click();
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10 bg-gray-900">
        <h1 className="text-3xl font-bold text-white mb-6">
          Lorem Ipsum Generator
        </h1>
        <div className="flex items-center gap-3 mb-6">
          <input
            type="number"
            value={count}
            min={1}
            onChange={(e) => setCount(Number(e.target.value))}
            className="border px-3 py-2 rounded-md w-20"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="paragraphs" className="text-[#0f1628]">
              Paragraphs
            </option>
            <option value="sentences" className="text-[#0f1628]">
              Sentences
            </option>
            <option value="words" className="text-[#0f1628]">
              Words
            </option>
          </select>
          <button
            onClick={generate}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Generate
          </button>
        </div>

        {output && (
          <>
            <div className="max-h-[55vh] overflow-y-auto bg-gray-100 p-4 rounded mb-4 whitespace-pre-line text-gray-800">
              {type === "paragraphs" ? (
                output.split("\n").map((p, idx) => (
                  <p key={idx} className="mb-2">
                    {p}
                  </p>
                ))
              ) : (
                <p>{output}</p>
              )}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleCopy}
                className="border border-white rounded-md bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                {copyToClipboard}
              </button>
              <button
                onClick={handleDownload}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Download .txt
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
