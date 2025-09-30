import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beepex",
  description: "A modern fintech platform built to simplify digital transactions. It empowers users to seamlessly manage bill payments, airtime top-ups, and gift card purchases—all in one place. Designed with a smooth UI and engaging animations, it delivers a fast, secure, and intuitive experience for everyday digital services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
