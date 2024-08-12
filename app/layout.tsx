import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import 'lenis/dist/lenis.css'

const space_g = Space_Grotesk({subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urlyss KAMTO",
  description: "portfolio website of Urlyss KAMTO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_g.className}>
      <SmoothScrolling>{children}</SmoothScrolling>
        </body>
    </html>
  );
}
