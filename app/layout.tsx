import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const siteUrl = new URL("https://rohit-portfolio-puzt.vercel.app");

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Rohit Kag - AI Automation Developer & Full-Stack Product Builder",
  description: "AI automation developer and full-stack product builder working with React, Next.js, TypeScript, Supabase, Prisma, Express, FastAPI, and AI workflow systems.",
  keywords: [
    "Rohit Kag",
    "AI Automation Developer",
    "Full-Stack Product Builder",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Supabase",
    "Prisma",
    "Express",
    "FastAPI",
    "Agentic AI",
    "RAG",
    "Business Automation",
    "Xero Seven"
  ],
  authors: [{ name: "Rohit Kag" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rohit Kag - AI Automation Developer & Full-Stack Product Builder",
    description: "Building React/Next.js products, Supabase-backed dashboards, and AI automation workflows for business operations.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Rohit Kag",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Kag - AI Automation Developer & Full-Stack Product Builder",
    description: "Building React/Next.js products, Supabase-backed dashboards, and AI automation workflows for business operations.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;var dark=(t==='dark')||(t===null&&d);var c=document.documentElement.classList;c[dark?'add':'remove']('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <a href="#content" className="skipLink">
          Skip to content
        </a>
        <ScrollProgress />
        <div id="content">{children}</div>
      </body>
    </html>
  );
}
