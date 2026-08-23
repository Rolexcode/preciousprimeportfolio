import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRIME — Web3 Community Manager & Moderator",
  description: "Community management, moderation and content support for Web3 teams ready to build an active, lasting community.",
  openGraph: {
    title: "PRIME — Web3 Community Manager & Moderator",
    description: "Community management, moderation and content support for Web3 teams ready to build an active, lasting community.",
    type: "website",
    images: [{
      url: "https://raw.githubusercontent.com/Rolexcode/preciousprimeportfolio/main/public/og.png",
      width: 1200,
      height: 630,
      alt: "PRIME — Web3 Community Manager & Moderator",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRIME — Web3 Community Manager & Moderator",
    description: "Community management, moderation and content support for Web3 teams ready to build an active, lasting community.",
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
