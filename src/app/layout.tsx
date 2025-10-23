import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CodingGenie — Free Developer Tools Online",
    template: "%s | CodingGenie",
  },
  description:
    "CodingGenie offers free, powerful, and easy-to-use developer tools like JSON Formatter, Case Converter, UUID Generator, and more — all in one place.",
  metadataBase: new URL("https://codinggenie.vercel.app"),
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "CodingGenie — Free Developer Tools Online",
    description:
      "Free online utilities for developers — JSON formatter, case converter, UUID generator, timestamp converter, and more.",
    url: "https://codinggenie.vercel.app",
    siteName: "CodingGenie",
    images: [
      {
        url: "/og-image.png", // place your OG image inside /public
        width: 1200,
        height: 630,
        alt: "CodingGenie — Free Developer Tools Online",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodingGenie — Free Developer Tools",
    description:
      "Free online utilities for developers — JSON formatter, case converter, UUID generator, timestamp converter, and more.",
    images: ["/og-image.png"],
    creator: "@codinggenie",
  },
  other: {
    "google-site-verification": "NWWW10BgTQ1B_nW35rSxr-avQjwuYGSZt9ntAV6kg44",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <meta name="application-name" content="CodingGenie" />
        <meta name="apple-mobile-web-app-title" content="CodingGenie" />
        <meta name="theme-color" content="#0d1017" />

        {/* ✅ Structured Data for Google (Website + Organization Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "CodingGenie",
                url: "https://codinggenie.vercel.app",
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "CodingGenie",
                url: "https://codinggenie.vercel.app",
                logo: "https://codinggenie.vercel.app/icon.png",
              },
            ]),
          }}
        />

        {/* ✅ Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z3ZQ8QL71E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z3ZQ8QL71E');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
