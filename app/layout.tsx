import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Rohit Kag - Tech Entrepreneur & Digital Innovator",
  description: "Tech Entrepreneur passionate about building businesses and solving real-world problems through innovation. Leveraging AI and modern technology to create impactful solutions.",
  keywords: ["Rohit Kag", "Tech Entrepreneur", "Startup Founder", "Digital Innovator", "Business Strategy", "AI Tools", "Innovation"],
  authors: [{ name: "Rohit Kag" }],
  openGraph: {
    title: "Rohit Kag - Tech Entrepreneur & Digital Innovator",
    description: "Tech Entrepreneur passionate about building businesses and driving innovation",
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
