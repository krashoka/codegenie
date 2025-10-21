"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { LoremIpsum } from "lorem-ipsum";
import SeoHead from "@/lib/seoHead";
import FaqSection from "@/components/FaqSection";

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {/* ✅ SEO Component */}
      <SeoHead
        title="Lorem Ipsum Generator — Free Placeholder Text Tool"
        description="Generate realistic Lorem Ipsum text for designs and web layouts instantly."
        canonicalPath="/tools/lorem-ipsum-generator"
        keywords={[
          "lorem ipsum generator",
          "dummy text generator",
          "placeholder text",
          "generate lorem ipsum online",
          "sample text generator",
        ]}
      />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10 mt-6">
        <h1 className="text-3xl font-bold text-[#fbfaf9] mb-6">
          Lorem Ipsum Generator
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-6">
          <div>
            <input
              type="number"
              value={count}
              min={1}
              onChange={(e) => setCount(Number(e.target.value))}
              className="border px-3 py-2 rounded-md w-20 mr-3"
            />
            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value as "paragraphs" | "sentences" | "words")
              }
              className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
          </div>

          <button
            onClick={generate}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full md:w-auto"
          >
            Generate
          </button>
        </div>

        {output && (
          <>
            <div className="max-h-[55vh] overflow-y-auto bg-[#1e2a3a] p-4 rounded mb-4 whitespace-pre-line text-[#fbfaf9]">
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

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleCopy}
                className="border border-white rounded-md bg-gray-800 text-white px-4 py-2 hover:bg-gray-900 whitespace-nowrap"
              >
                {copyToClipboard}
              </button>

              <button
                onClick={handleDownload}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 whitespace-nowrap"
              >
                Download .txt
              </button>
            </div>
          </>
        )}

        <FaqSection
          faqs={[
            {
              question: "What is Lorem Ipsum text?",
              answer:
                "Lorem Ipsum is dummy text used by designers and developers to fill space during design or development.",
            },
            {
              question: "Can I choose the number of paragraphs or words?",
              answer:
                "Yes, you can select how many paragraphs or words you want to generate.",
            },
            {
              question: "Is the generated text random each time?",
              answer:
                "Yes, CodingGenie's generator creates varied Lorem Ipsum text every time for more realistic placeholders.",
            },
          ]}
        />
      </main>
    </>
  );
}
