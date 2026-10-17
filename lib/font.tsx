import { Inter, Space_Grotesk } from "next/font/google";

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});
