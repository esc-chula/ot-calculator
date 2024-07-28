import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/merge";
import Image from "next/image";

export const metadata: Metadata = {
  title: "OT Calculator",
  description: "Caclculate the overtime price of your building uses easily.",
};

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-ibm-plex-sans-thai",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative bg-esc-carmine text-esc-cloud",
          inter.variable,
          ibmPlexSansThai.variable
        )}
      >
        {children}
        <div className="absolute inset-0 z-[-1]">
          <Image src="bg.svg" alt="bg" layout="fill" objectFit="cover" />
        </div>
      </body>
    </html>
  );
}
