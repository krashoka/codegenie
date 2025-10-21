"use client";

import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  toolCategory?: string;
  keywords?: string[]; // ✅ added
}

export default function SeoHead({
  title,
  description,
  canonicalPath,
  toolCategory = "DeveloperApplication",
  keywords = [],
}: SeoHeadProps) {
  useEffect(() => {
    const canonicalUrl = `https://codinggenie.vercel.app${canonicalPath}`;
    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalUrl);

    // ✅ Updated structured data type to SoftwareApplication
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: title,
      url: canonicalUrl,
      description,
      applicationCategory: toolCategory,
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      creator: {
        "@type": "Organization",
        name: "CodingGenie",
        url: "https://codinggenie.vercel.app",
      },
      keywords: keywords.join(", "),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [title, description, canonicalPath, toolCategory, keywords]);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`https://codinggenie.vercel.app${canonicalPath}`}
      />
      <meta property="og:site_name" content="CodingGenie" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}