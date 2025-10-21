"use client";

import { useEffect } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FAQ[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [faqs]);

  return (
    <section className="mt-10 w-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-200">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <details key={index} className="bg-gray-800 p-3 rounded-lg border border-gray-700">
            <summary className="font-medium cursor-pointer text-gray-100">
              {faq.question}
            </summary>
            <p className="mt-2 text-gray-400">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}