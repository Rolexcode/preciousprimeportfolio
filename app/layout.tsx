import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRIME — Web3 Growth & Community Strategist",
  description: "Growth strategy, community systems, content and launch support for early-stage Web3 projects.",
  openGraph: {
    title: "PRIME — Web3 Growth & Community Strategist",
    description: "Growth strategy, community systems, content and launch support for early-stage Web3 projects.",
    type: "website",
    images: [{
      url: "https://raw.githubusercontent.com/Rolexcode/preciousprimeportfolio/main/public/og.png",
      width: 1200,
      height: 630,
      alt: "PRIME — Web3 Growth & Community Strategist",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRIME — Web3 Growth & Community Strategist",
    description: "Growth strategy, community systems, content and launch support for early-stage Web3 projects.",
    images: ["https://raw.githubusercontent.com/Rolexcode/preciousprimeportfolio/main/public/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
