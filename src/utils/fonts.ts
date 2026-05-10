import { Geist, Geist_Mono } from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-geist-sans",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-geist-mono",
});
