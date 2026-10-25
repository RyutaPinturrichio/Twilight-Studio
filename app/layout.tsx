import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Twilight Studio — Architectural Digital Craftsmanship",
  description:
    "Twilight Studio builds strict industrial web solutions — minimalist interfaces, high-performance platforms, and precision-engineered digital products.",
  keywords: ["web design", "Next.js", "digital studio", "UI architecture", "performance"],
  authors: [{ name: "Twilight Studio" }],
  openGraph: {
    title: "Twilight Studio — Architectural Digital Craftsmanship",
    description:
      "Minimalist interfaces and high-performance digital platforms built with precision.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
