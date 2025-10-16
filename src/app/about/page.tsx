"use client";

import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12 text-gray-300">
        <h1 className="text-4xl font-bold mb-6 text-white">About CodingGenie</h1>
        <p className="text-lg mb-8 leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-blue-400">CodingGenie</span> — a
          collection of free, powerful, and easy-to-use developer tools, all in
          one place. Our mission is simple: to make developers’ everyday
          workflows faster, cleaner, and more efficient.
        </p>

        <section className="space-y-8 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              What We Offer
            </h2>
            <p>
              Whether you need to format JSON, generate UUIDs, or convert design
              units, CodingGenie provides instant tools with a clean and
              distraction-free interface.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>JSON Formatter & Beautifier</li>
              <li>Base64 Encoder / Decoder</li>
              <li>Universal Unit Converter (PX ↔ REM ↔ EM ↔ % ↔ VW ↔ VH)</li>
              <li>Timestamp Converter</li>
              <li>UUID Generator</li>
              <li>Case Converter</li>
              <li>Lorem Ipsum Generator</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Our Mission
            </h2>
            <p>
              CodingGenie is built with one goal in mind —{" "}
              <span className="text-blue-400 font-medium">
                simplifying developer productivity
              </span>
              . We believe that every developer should have access to high-quality,
              no-cost tools that enhance coding speed, accuracy, and creativity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Why Choose CodingGenie?
            </h2>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Completely free and browser-based</li>
              <li>No sign-ups, ads (until monetization approval), or clutter</li>
              <li>Responsive, fast, and privacy-conscious</li>
              <li>Optimized for developers and designers alike</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Creator</h2>
            <p>
              CodingGenie was created by{" "}
              <span className="font-semibold text-blue-400">Ashok Kumar</span>,
              a passionate web developer who loves building tools that empower
              others to code smarter, not harder.
            </p>
          </div>
        </section>

        <p className="mt-12 text-gray-400">
          💡 Have ideas for new tools? We’d love to hear them! Visit our{" "}
          <a href="/contact" className="text-blue-400 hover:underline">
            Contact page
          </a>{" "}
          to share your suggestions.
        </p>
      </main>
    </>
  );
}