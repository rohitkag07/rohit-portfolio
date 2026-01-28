import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohit Kag - Software Engineer & Developer",
  description: "Computer Science Engineer with entrepreneurial mindset. Passionate about building impactful web applications and solving real-world problems.",
  keywords: ["Rohit Kag", "Software Engineer", "Web Developer", "Computer Science", "Full Stack Developer", "React", "Next.js"],
  authors: [{ name: "Rohit Kag" }],
  openGraph: {
    title: "Rohit Kag - Software Engineer & Developer",
    description: "Computer Science Engineer passionate about building impactful web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
