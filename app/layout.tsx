import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Rohit Kag - AI Solutions Architect & Multi-Agent Systems Engineer",
  description: "AI Solutions Architect specialising in Enterprise Multi-Agent Systems using Google ADK, Agent-to-Agent (A2A) Protocol, and Model Context Protocol (MCP). Deploying autonomous AI workforces on Google Cloud Run with stateful memory and enterprise guardrails.",
  keywords: [
    "Rohit Kag",
    "AI Solutions Architect",
    "Multi-Agent Systems Engineer",
    "Google Agent Development Kit",
    "ADK",
    "Agent-to-Agent Protocol",
    "A2A",
    "Model Context Protocol",
    "MCP",
    "Google Cloud Run",
    "Agentic AI",
    "LLM Orchestration",
    "Vertex AI",
    "Tech Entrepreneur",
    "Digital Innovator",
    "AI Automation"
  ],
  authors: [{ name: "Rohit Kag" }],
  openGraph: {
    title: "Rohit Kag - AI Solutions Architect & Multi-Agent Systems Engineer",
    description: "Building enterprise-grade autonomous AI agent networks with Google ADK, A2A & MCP on Google Cloud.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
