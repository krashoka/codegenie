"use client";

import { useState } from "react";
import { v1 as uuidv1, v4 as uuidv4 } from "uuid";
import { QRCodeCanvas } from "qrcode.react";
import { saveAs } from "file-saver";
import Header from "@/components/Header";

export default function UUIDGenerator() {
  const [version, setVersion] = useState<"v1" | "v4">("v4");
  const [count, setCount] = useState(1);
  const [uuids, setUUIDs] = useState<string[]>([]);

  const generateUUIDs = () => {
    const newUUIDs = Array.from({ length: count }, () =>
      version === "v1" ? uuidv1() : uuidv4()
    );
    setUUIDs(newUUIDs);
  };

  const copyToClipboard = async (uuid: string) => {
    await navigator.clipboard.writeText(uuid);
    alert(`Copied: ${uuid}`);
  };

  const downloadAsFile = (type: "txt") => {
    const content = uuids.join("\n");
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `uuids.${type}`);
  };

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10 bg-gray-900">
          <h1 className="text-3xl font-bold text-white mb-6">
            UUID Generator
          </h1>

          <div className="flex flex-col md:flex-row items-end gap-4 mb-6">
            <div>
              <label className="block font-medium mb-1">Select Version</label>
              <select
                value={version}
                onChange={(e) => setVersion(e.target.value as "v1" | "v4")}
                className="border p-2 rounded w-32"
              >
                <option value="v1">UUID v1</option>
                <option value="v4">UUID v4</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Quantity</label>
              <input
                type="number"
                min={1}
                max={50}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="border p-2 rounded w-24"
              />
            </div>

            <button
              onClick={generateUUIDs}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
              Generate
            </button>
          </div>

          {uuids.length > 0 && (
            <>
              <div className="flex gap-4 mb-4">
                <button
                  onClick={() => downloadAsFile("txt")}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Download .txt
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 overflow-y-auto max-h-[60vh] pr-2">
                {uuids.map((uuid, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 p-4 rounded shadow text-gray-800 flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <p className="break-all text-sm">{uuid}</p>
                      <button
                        onClick={() => copyToClipboard(uuid)}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Copy
                      </button>
                    </div>
                    <QRCodeCanvas
                      value={uuid}
                      size={120}
                      className="mx-auto mt-4"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
      </main>
    </>
  );
}
