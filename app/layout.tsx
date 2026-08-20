import type { Metadata } from "next";
import {
  Fraunces,
  Inter,
  IBM_Plex_Mono,
} from "next/font/google";

import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Real Estate Media House",
    template: "%s | Real Estate Media House",
  },
  description:
    "Property imagery transformed into enhanced stills, cinematic animations, build reveals and finished Property Reels using the photography and renders you already have.",
  metadataBase: new URL(
    "https://realestatemediahouse.net",
  ),
  openGraph: {
    title: "Real Estate Media House",
    description:
      "Enhanced property imagery, cinematic animation and finished Property Reels created from your existing photography and renders.",
    url: "https://realestatemediahouse.net",
    siteName: "Real Estate Media House",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}