import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import OrganizationSchema from "@/components/OrganizationSchema";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.realestatemediahouse.net",
  ),

  title: {
    default:
      "Interactive Cabinetry Presentations for Cabinet Makers | Real Estate Media House",
    template:
      "%s | Real Estate Media House",
  },

  description:
    "Turn cabinetry sketches into professional 3D visualisations, interactive 360 degree presentations and private client project pages. Presentation support for cabinet makers and joinery businesses across Australia.",

  keywords: [
    "cabinet maker visualisation",
    "cabinetry visualisation",
    "joinery visualisation",
    "kitchen visualisation",
    "cabinet maker 3D rendering",
    "3D rendering for cabinet makers",
    "interactive kitchen design",
    "360 kitchen visualisation",
    "cabinetry presentation",
    "joinery presentation",
    "bathroom cabinetry visualisation",
    "custom joinery rendering",
    "cabinet maker SketchUp alternative",
  ],

  openGraph: {
    title:
      "Interactive Cabinetry Presentations for Cabinet Makers",

    description:
      "From hand-drawn cabinetry concepts to professional 3D visualisations, 360 degree panoramas and private client presentations.",

    url:
      "https://www.realestatemediahouse.net",

    siteName:
      "Real Estate Media House",

    type: "website",

    locale: "en_AU",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Interactive Cabinetry Presentations for Cabinet Makers",

    description:
      "Turn cabinetry sketches into professional visualisations, interactive 360 degree presentations and private client project pages.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>
        <OrganizationSchema />

        <Header />

        {children}

        <Footer />

        <LanguageSwitcher />

        <Analytics />
      </body>
    </html>
  );
}