import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upwork JobPilot – Supercharge your job search on Upwork 🚀",
  description:
    "Finding the right projects on Upwork can be overwhelming – endless scrolling, repetitive searches, and wasted time on irrelevant jobs. Upwork JobPilot is designed to solve that by giving you powerful tools to simplify and speed up your freelancing journey.",
  keywords: [
    "Upwork",
    "freelancing",
    "job search",
    "Chrome extension",
    "productivity",
    "custom filters",
    "real-time jobs",
    "freelancer tools",
    "Upwork jobs",
    "job discovery",
  ],
  authors: [{ name: "JobPilot Team" }],
  creator: "JobPilot Team",
  publisher: "JobPilot",
  robots: "index, follow",
  openGraph: {
    title: "Upwork JobPilot – Supercharge your job search on Upwork 🚀",
    description:
      "Stop wasting hours on repetitive searches. Get highly relevant Upwork jobs instantly with custom filters, real-time discovery, and secure local storage.",
    url: "https://upwork-jobpilot.vercel.app",
    siteName: "Upwork JobPilot",
    images: [
      {
        url: "/assets/common/logo.png",
        width: 1200,
        height: 630,
        alt: "Upwork JobPilot Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upwork JobPilot – Supercharge your job search on Upwork 🚀",
    description:
      "Stop wasting hours on repetitive searches. Get highly relevant Upwork jobs instantly with custom filters and real-time discovery.",
    images: ["/assets/common/logo.png"],
  },
  icons: {
    icon: "/assets/common/favicon.ico",
    shortcut: "/assets/common/favicon.ico",
    apple: "/assets/common/logo.png",
  },
  verification: {
    google: "0U3Gt4Ivo_EED11zL8wjf-4O6oMSmQo1jdsv7_IVflM",
  },
  category: "productivity",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://upwork-jobpilot.vercel.app"),
  alternates: {
    canonical: "/",
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
        <meta
          name="google-site-verification"
          content="0U3Gt4Ivo_EED11zL8wjf-4O6oMSmQo1jdsv7_IVflM"
        />
        <link rel="canonical" href="https://upwork-jobpilot.vercel.app" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Upwork JobPilot" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta
          name="msapplication-TileImage"
          content="/assets/common/favicon.ico"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
