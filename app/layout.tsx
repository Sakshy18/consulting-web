import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteNavbar from "@/components/layout/SiteNavbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Execora",
  description: "Business consulting website UI implementation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#f3f3f4] text-[#070a0f]">
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
