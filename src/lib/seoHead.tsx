"use client";

import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  toolCategory?: string; // optional
}

export default function SeoHead({
  title,
  description,
  canonicalPath,
  toolCategory = "DeveloperApplication",
}: SeoHeadProps) {
  useEffect(() => {
    // Canonical Link
    const canonicalUrl = `https://codegenie-sandy.vercel.app${canonicalPath}`;
    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalUrl);

    // JSON-LD Structured Data
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
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
        name: "CodeGenie",
        url: "https://codegenie-sandy.vercel.app",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [title, description, canonicalPath, toolCategory]);

  return (
    <>
      {/* These help with dynamic SEO when rendered on client side */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`https://codegenie-sandy.vercel.app${canonicalPath}`}
      />
      <meta property="og:site_name" content="CodeGenie" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}