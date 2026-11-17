import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Precious Afolayan (PRIME) — Web3 Community & Growth",
  description: "Precious Afolayan, known as PRIME, helps Web3 projects build stronger communities through thoughtful communication, useful content and consistent engagement.",
  openGraph: {
    title: "Precious Afolayan (PRIME) — Web3 Community & Growth",
    description: "Web3 community building, content strategy and growth support by Precious Afolayan.",
    type: "website",
    images: [{
      url: "https://raw.githubusercontent.com/Rolexcode/preciousprimeportfolio/main/public/og.png",
      width: 1200,
      height: 630,
      alt: "PRIME — Web3 Community & Growth",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precious Afolayan (PRIME) — Web3 Community & Growth",
    description: "Web3 community building, content strategy and growth support by Precious Afolayan.",
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
