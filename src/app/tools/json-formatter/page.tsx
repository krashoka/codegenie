"use client";

import Header from "@/components/Header";
import { useState, useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [copyToClipboard, setCopyToClipboard] = useState("Copy to Clipboard");

  useEffect(() => {
    try {
      if (input.trim() === "") {
        setError("");
        setOutput("");
        return;
      }
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError("");
    } catch {
      setError("Invalid JSON syntax.");
      setOutput("");
    }
  }, [input]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopyToClipboard("Copied");
      setTimeout(() => {
        setCopyToClipboard("Copy to Clipboard");
      }, 2000);
    } catch {
      alert("Failed to copy!");
    }
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "formatted.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      try {
        JSON.parse(text); // Validate before accepting
        setInput(text);
        setError("");
      } catch {
        setError("Uploaded file contains invalid JSON.");
        setInput("");
        setOutput("");
      }
    };
    reader.readAsText(file);
  };

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10 bg-gray-900 text-white mt-6">
        <h1 className="text-3xl font-bold mb-4">JSON Formatter</h1>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 space-y-3 sm:space-y-0">
          <p className="text-gray-400">
            Paste your JSON below. It formats automatically as you type.
          </p>

          <h2 className="text-gray-300 text-center sm:text-left">- OR -</h2>

          <div className="flex justify-center sm:justify-end">
            <button
              onClick={triggerFileInput}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Upload JSON File
            </button>
            <input
              type="file"
              accept=".json,application/json"
              onChange={handleUpload}
              ref={fileInputRef}
              className="hidden"
            />
          </div>
        </div>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your JSON here..."
          rows={10}
          className="w-full p-4 border border-gray-700 bg-gray-800 rounded-lg mb-4 font-mono text-sm text-white placeholder-gray-500"
        ></textarea>

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        {output && (
          <>
            <div className="flex justify-end gap-4 mb-4">
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
                Download JSON
              </button>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-sm overflow-auto">
              <SyntaxHighlighter language="json" style={oneDark} wrapLongLines>
                {output}
              </SyntaxHighlighter>
            </div>
          </>
        )}
      </main>
    </>
  );
}
