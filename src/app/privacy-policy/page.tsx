"use client";

import Header from "@/components/Header";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12 text-gray-300">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 text-center mb-10">
          <strong>Last updated:</strong> October 16, 2025
        </p>

        <section className="space-y-6 leading-relaxed">
          <p>
            At <strong>CodeGenie</strong> (accessible from{" "}
            <a
              href="https://codegenie-sandy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://codegenie-sandy.vercel.app
            </a>
            ), your privacy is our top priority. This Privacy Policy explains
            how we collect, use, and protect your information when you use our
            website.
          </p>

          <hr className="border-gray-700 my-6" />

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Information We Collect
            </h2>
            <p>
              We do <strong>not</strong> collect any personally identifiable
              information unless you voluntarily contact us. However, we may
              collect:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Anonymous usage data (via Google Analytics)</li>
              <li>
                Technical details such as browser type, device, and general
                location (non-identifiable)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              How We Use Information
            </h2>
            <p>Collected data helps us to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Improve website performance and usability</li>
              <li>Understand which tools and features are most useful</li>
              <li>Enhance your browsing experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Cookies</h2>
            <p>
              We may use cookies for:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Google Analytics</li>
              <li>Google AdSense (after activation)</li>
            </ul>
            <p className="mt-2">
              Cookies help personalize content and measure ad performance. You
              can disable cookies through your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Third-Party Services
            </h2>
            <p>
              We rely on trusted third-party providers to enhance our services:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Google Analytics</strong> – for visitor insights
              </li>
              <li>
                <strong>Google AdSense</strong> – for advertising (once approved)
              </li>
            </ul>
            <p className="mt-2">
              These third parties may use cookies to collect anonymous usage
              data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your information against unauthorized access, alteration,
              or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, feel free to
              contact us at:
            </p>
            <p className="mt-2">
              📧{" "}
              <a
                href="mailto:ashokkumar.devpals@gmail.com"
                className="text-blue-400 hover:underline"
              >
                ashokkumar.devpals@gmail.com
              </a>
            </p>
          </div>

          <hr className="border-gray-700 my-6" />

          <p className="text-gray-400 text-sm text-center">
            By using our website, you agree to the terms of this Privacy Policy.
          </p>
        </section>
      </main>
    </>
  );
}
