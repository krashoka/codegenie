"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { ArrowLeftRight, CheckCheck, Copy } from "lucide-react";
import SeoHead from "@/lib/seoHead";
import FaqSection from "@/components/FaqSection";

export default function UnitConverter() {
  const [leftValue, setLeftValue] = useState("10");
  const [rightValue, setRightValue] = useState("");
  const [leftUnit, setLeftUnit] = useState("px");
  const [rightUnit, setRightUnit] = useState("rem");
  const [baseFontSize, setBaseFontSize] = useState(16);
  const [activeSide, setActiveSide] = useState<"left" | "right">("left");
  const [copyL, setCopyL] = useState(false);
  const [copyR, setCopyR] = useState(false);

  const units = ["px", "rem", "em", "%", "vw", "vh"];

  // --- Conversion Logic ---
  const convert = (value: number, from: string, to: string): number => {
    if (isNaN(value)) return 0;
    if (from === to) return value;

    let pxValue = value;

    // Convert to px
    switch (from) {
      case "rem":
      case "em":
        pxValue = value * baseFontSize;
        break;
      case "%":
        pxValue = (value / 100) * baseFontSize;
        break;
      case "vw":
        pxValue = (value / 100) * 1920;
        break;
      case "vh":
        pxValue = (value / 100) * 1080;
        break;
    }

    // Convert px to target unit
    switch (to) {
      case "rem":
      case "em":
        return pxValue / baseFontSize;
      case "%":
        return (pxValue / baseFontSize) * 100;
      case "vw":
        return (pxValue / 1920) * 100;
      case "vh":
        return (pxValue / 1080) * 100;
      default:
        return pxValue;
    }
  };

  // --- Format output (remove unnecessary zeros) ---
  const formatValue = (num: number): string => {
    if (Number.isNaN(num)) return "";
    const rounded = parseFloat(num.toFixed(6));
    return rounded % 1 === 0
      ? String(rounded)
      : String(parseFloat(rounded.toString()));
  };

  // --- Convert only the opposite field ---
  useEffect(() => {
    if (activeSide === "left") {
      const val = parseFloat(leftValue);
      if (!isNaN(val)) {
        const result = convert(val, leftUnit, rightUnit);
        setRightValue(formatValue(result));
      } else setRightValue("");
    }
  }, [leftValue, leftUnit, rightUnit, baseFontSize]);

  useEffect(() => {
    if (activeSide === "right") {
      const val = parseFloat(rightValue);
      if (!isNaN(val)) {
        const result = convert(val, rightUnit, leftUnit);
        setLeftValue(formatValue(result));
      } else setLeftValue("");
    }
  }, [rightValue, rightUnit, leftUnit, baseFontSize]);

  // --- Copy to clipboard ---
  async function handleCopy(value: string, side: string) {
    try {
      await navigator.clipboard.writeText(value);
      if (side === "left") {
        setCopyL(true);
        setTimeout(() => {
          setCopyL(false);
        }, 2000);
      } else {
        setCopyR(true);
        setTimeout(() => {
          setCopyR(false);
        }, 2000);
      }
    } catch {
      alert("Failed to copy!");
    }
  }

  // --- Swap units and values ---
  const handleSwap = () => {
    setLeftUnit(rightUnit);
    setRightUnit(leftUnit);
    setLeftValue(rightValue);
    setRightValue(leftValue);
  };

  return (
    <>
      {/* ✅ SEO Component */}
      <SeoHead
        title="Universal Unit Converter — PX to REM, EM, %, VW, VH"
        description="Convert between PX, REM, EM, %, VW, and VH with real-time updates. Simple and accurate."
        canonicalPath="/tools/timestamp-converter"
        keywords={[
          "px to rem converter",
          "css unit converter",
          "px to em converter",
          "vw vh converter",
          "responsive design tools",
          "convert px to rem online",
        ]}
      />
      <Header />
      <main
        className="text-white flex flex-col items-center justify-center px-4 max-w-4xl mx-auto"
        style={{ minHeight: "calc(100vh - 90px)" }}
      >
        <h1 className="text-2xl font-semibold mb-8 text-gray-200">
          Universal Unit Converter
        </h1>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-6 bg-[#1a1a1a] p-6 rounded-2xl shadow-lg w-full max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Input */}
          <div className="flex flex-col items-center w-full relative">
            <button
              className="absolute left-3 top-1/3 -translate-y-1/2 text-gray-400 hover:text-white"
              onClick={() => handleCopy(leftValue, "left")}
            >
              {copyL ? <CheckCheck size={16} /> : <Copy size={16} />}
            </button>

            <input
              type="number"
              value={leftValue}
              onChange={(e) => {
                setLeftValue(e.target.value);
                setActiveSide("left");
              }}
              className={`w-full text-center text-3xl font-semibold bg-transparent border-b ${
                activeSide === "right"
                  ? "text-blue-400 border-blue-500 shadow-[0_0_8px_#3b82f6]"
                  : "text-white border-gray-600"
              } focus:outline-none py-2 transition-all`}
            />

            <select
              value={leftUnit}
              onChange={(e) => setLeftUnit(e.target.value)}
              className="bg-transparent text-gray-300 focus:outline-none border border-gray-700 rounded-md px-2 py-1 mt-2"
            >
              {units.map((u) => (
                <option key={u} value={u} className="bg-[#1a1a1a]">
                  {u}
                </option>
              ))}
            </select>
          </div>

          {/* Swap Icon */}
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-500 hover:text-blue-400 transition-colors"
          >
            <ArrowLeftRight
              size={28}
              className="cursor-pointer"
              onClick={handleSwap}
            />
          </motion.div>

          {/* Right Input */}
          <div className="flex flex-col items-center w-full relative">
            <button
              className="absolute left-3 top-1/3 -translate-y-1/2 text-gray-400 hover:text-white"
              onClick={() => handleCopy(rightValue, "right")}
            >
              {copyR ? <CheckCheck size={16} /> : <Copy size={16} />}
            </button>

            <input
              type="number"
              value={rightValue}
              onChange={(e) => {
                setRightValue(e.target.value);
                setActiveSide("right");
              }}
              className={`w-full text-center text-3xl font-semibold bg-transparent border-b ${
                activeSide === "left"
                  ? "text-blue-400 border-blue-500 shadow-[0_0_8px_#3b82f6]"
                  : "text-white border-gray-600"
              } focus:outline-none py-2 transition-all`}
            />

            <select
              value={rightUnit}
              onChange={(e) => setRightUnit(e.target.value)}
              className="bg-transparent text-gray-300 focus:outline-none border border-gray-700 rounded-md px-2 py-1 mt-2"
            >
              {units.map((u) => (
                <option key={u} value={u} className="bg-[#1a1a1a]">
                  {u}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        <p className="text-gray-400 text-sm mt-6 text-center">
          Base font size:&nbsp;
          <input
            type="number"
            value={baseFontSize}
            onChange={(e) => setBaseFontSize(Number(e.target.value))}
            className="bg-transparent border-b border-gray-600 text-gray-200 w-14 text-center focus:outline-none focus:border-blue-500 transition-all"
          />{" "}
          px
        </p>

        <FaqSection
          faqs={[
            {
              question: "What does this Unit Converter do?",
              answer:
                "It converts CSS units like PX, REM, EM, %, VW, and VH for responsive design.",
            },
            {
              question: "Who can use this tool?",
              answer:
                "Web developers and designers can use it to create consistent, scalable layouts.",
            },
            {
              question: "Is it accurate for all screen sizes?",
              answer:
                "Yes. The conversion uses standard CSS base values for accurate results across devices.",
            },
          ]}
        />
      </main>
    </>
  );
}
