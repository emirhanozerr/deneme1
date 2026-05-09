import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Seyyah Travel",
  description: "The Seyyah Travel Roadmap - Prestige Collection",
  icons: {
    icon: "https://imagedelivery.net/EDcvEUy2F2CJpIzjIkCF7Q/767458e5-267e-4998-890c-1de5a6a75c00/public",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-brand-petrol text-white antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
