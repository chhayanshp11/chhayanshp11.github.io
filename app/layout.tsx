import type { Metadata } from "next";
import "./style/globals.css";
import { fontInter, fontHeading } from "@/lib/font";
import { cn } from "@/lib/utils";
import metadataInfos from "@/lib/metadata";
import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar";

export const metadata: Metadata = metadataInfos;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontInter.variable,
          fontHeading.variable,
          "font-body antialiased",
        )}
      >
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
