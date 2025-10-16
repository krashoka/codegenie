"use client";

import Header from "@/components/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-12 text-gray-300">
        <h1 className="text-4xl font-bold mb-6 text-white">Contact Us</h1>
        <p className="text-lg mb-8 leading-relaxed">
          We’d love to hear from you! Whether you have feedback, bug reports,
          collaboration ideas, or feature suggestions, feel free to reach out.
        </p>

        <section className="bg-gray-800/60 rounded-2xl p-6 shadow-lg border border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Get in Touch
          </h2>
          <p className="mb-4">
            The best way to reach us is via email. We usually respond within{" "}
            <span className="text-blue-400 font-medium">1–2 business days</span>.
          </p>
          <p className="text-lg mt-2">
            📧{" "}
            <a
              href="mailto:ashokkumar.devpals@gmail.com"
              className="text-blue-400 hover:underline"
            >
              ashokkumar.devpals@gmail.com
            </a>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Follow & Share
          </h2>
          <p>
            Share CodingGenie with your friends and colleagues — the more
            developers it helps, the better!
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>
              🌐 Website:{" "}
              <a
                href="https://codinggenie.vercel.app"
                className="text-blue-400 hover:underline"
              >
                codinggenie.vercel.app
              </a>
            </li>
            {/* <li>
              💼 LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/ashokkumar"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/ashokkumar
              </a>
            </li>
            <li>
              🐦 Twitter (X):{" "}
              <a
                href="https://x.com/ashokkumar"
                className="text-blue-400 hover:underline"
              >
                @ashokkumar
              </a>
            </li> */}
          </ul>
        </section>

        <p className="mt-12 text-gray-400 text-sm">
          Thank you for using{" "}
          <span className="font-semibold text-blue-400">CodingGenie</span>. Every
          suggestion helps make our tools better for developers worldwide.
        </p>
      </main>
    </>
  );
}