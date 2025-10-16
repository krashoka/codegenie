"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { CheckCheck, Copy } from "lucide-react";
import SeoHead from "@/lib/seoHead";

export default function Base64EncoderDecoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copy, setCopy] = useState("Copy");
  const [isError, setIsError] = useState(false);

  const handleEncode = () => {
    try {
      const encoded = btoa(unescape(encodeURIComponent(input)));
      setOutput(encoded);
      setIsError(false);
    } catch (e) {
      setOutput("⚠️ Error encoding text");
      setIsError(true);
    }
  };

  const handleDecode = () => {
    try {
      const decoded = decodeURIComponent(escape(atob(input)));
      setOutput(decoded);
      setIsError(false);
    } catch (e) {
      setOutput("⚠️ Invalid Base64 string");
      setIsError(true);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setIsError(false);
  };

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(output);
      setCopy("Copied");
      setTimeout(() => {
        setCopy("Copy");
      }, 2000);
    } catch {
      alert("Failed to copy!");
    }
  }

  return (
    <>
      {/* ✅ SEO Component */}
      <SeoHead
        title="Base64 Encoder & Decoder Online"
        description="Encode or decode Base64 strings instantly. Free online Base64 converter by CodingGenie."
        canonicalPath="/base64-encoder-decoder"
      />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10 bg-gray-900 text-white mt-6">
        <h1 className="text-3xl font-bold mb-6">Base64 Encoder/Decoder</h1>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Input Section */}
          <div className="flex-1">
            <label className="block mb-2 font-semibold">
              Enter Text / Base64
            </label>
            <textarea
              className="w-full h-40 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type text to encode or paste Base64 to decode..."
            />
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleEncode}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
              >
                Encode
              </button>
              <button
                onClick={handleDecode}
                className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700"
              >
                Decode
              </button>
              <button
                onClick={handleClear}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="flex-1">
            <div className="flex items-center justify-between gap-1 mb-2">
              <label className="block font-semibold">Result</label>
              {output && !isError && (
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
                </>
              )}
            </div>
            <textarea
              className="w-full h-40 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
              value={output}
              readOnly
              placeholder="Result will appear here..."
            />
          </div>
        </div>
      </main>
    </>
  );
}
