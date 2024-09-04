import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import { SpeedInsights } from "@vercel/speed-insights/next";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flow",
  description: "Sustainable energy for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
