import type { Metadata } from "next";
import { Exo_2, Orbitron } from "next/font/google";
import "./globals.css";
import { LockScreen } from "@/components/LockScreen";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bitexen × Broadbrand — South Africa Launch Proposal",
  description:
    "Strategic proposal to launch Bitexen in South Africa. Owning the RWA tokenisation narrative through sports fan engagement, fan tokens, and cultural community building.",
  openGraph: {
    title: "Bitexen × Broadbrand — South Africa Launch Proposal",
    description:
      "A borderless financial platform democratising access to real-world asset tokenisation in South Africa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LockScreen>{children}</LockScreen>
      </body>
    </html>
  );
}
