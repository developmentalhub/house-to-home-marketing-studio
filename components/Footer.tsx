import Link from "next/link";

import { ArrowRight } from "lucide-react";

import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
  SITE_NAME,
} from "@/lib/site";

const exploreLinks = [
  {
    label: "Explore",
    href: "/explore",
  },
  {
    label: "Before & After",
    href: "/before-after",
  },
  {
    label: "Image Library",
    href: "/image-library",
  },
  {
    label: "Video Library",
    href: "/video-library",
  },
  {
    label: "Property Marketing Guides",
    href: "/blog",
  },
];

const propertyLinks = [
  {
    label: "Childcare",
    href: "/childcare-property-animation",
  },
  {
    label: "Residential",
    href: "/residential-property-animation",
  },
  {
    label: "Commercial",
    href: "/commercial-property-visualisation",
  },
  {
    label: "Commercial Animation",
    href: "/commercial-property-animation",
  },
];

const serviceLinks = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Packages",
    href: "/packages",
  },
  {
    label: "Property Refresh",
    href: "/packages/property-refresh",
  },
  {
    label: "Property Campaign",
    href: "/packages/property-campaign",
  },
  {
    label: "Property Reel Campaign",
    href: "/packages/property-reel-campaign",
  },
];

const projectLinks = [
  {
    label: "Warehouse to Gym",
    href: "/projects/warehouse-to-gym-visualisation",
  },
  {
    label: "Warehouse to Mechanic Workshop",
    href: "/projects/warehouse-to-mechanic-workshop-visualisation",
  },
  {
    label: "Warehouse to Logistics",
    href: "/projects/warehouse-to-logistics-visualisation",
  },
  {
    label: "Warehouse to Photography Studio",
    href: "/projects/warehouse-to-photography-studio-visualisation",
  },
  {
    label: "Childcare Development",
    href: "/projects/childcare-centre-development-transformation",
  },
  {
    label: "Residential Transformation",
    href: "/projects/residential-property-transformation",
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* PRIMARY CTA */}
      <section className="border-b border-white/10">
        <div className="container-shell py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brassBright">
                Real Estate Media House
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Already have the property media?
                <span className="block text-rust">
                  Turn it into more campaign content.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
                We transform existing property photography, renders and footage
                into enhanced visuals, animation and finished property content.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-rust hover:text-white"
              >
                Discuss your property media
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LINK DIRECTORY */}
      <section>
        <div className="container-shell py-14 md:py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_0.9fr_1.2fr]">
            {/* BRAND */}
            <div className="max-w-sm">
              <Link href="/" className="inline-block">
                <p className="font-display text-3xl font-semibold leading-none">
                  Real Estate
                </p>

                <p className="mt-2 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  Media House
                </p>
              </Link>

              <p className="mt-6 text-sm leading-7 text-white/45">
                Property media made to do more. Enhanced stills, visual
                transformation, animation and finished campaign content created
                from media that already exists.
              </p>

              <div className="mt-7">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-white/30">
                  Email
                </p>

                <a
                  href={CONTACT_EMAIL_LINK}
                  className="mt-2 inline-block text-sm font-semibold text-white transition hover:text-brassBright"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            {/* EXPLORE */}
            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-brassBright">
                Explore
              </p>

              <div className="mt-5 grid gap-3">
                {exploreLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* PROPERTY TYPES */}
            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-brassBright">
                Property Types
              </p>

              <div className="mt-5 grid gap-3">
                {propertyLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-brassBright">
                Work With Us
              </p>

              <div className="mt-5 grid gap-3">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/enquire"
                  className="mt-2 text-sm font-semibold text-brassBright transition hover:text-white"
                >
                  Enquire
                </Link>
              </div>
            </div>

            {/* CASE STUDIES */}
            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-brassBright">
                Visual Case Studies
              </p>

              <div className="mt-5 grid gap-3">
                {projectLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm leading-5 text-white/50 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO / POSITIONING STRIP */}
      <section className="border-t border-white/10">
        <div className="container-shell py-8">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <p className="max-w-4xl text-xs leading-6 text-white/30">
              Real Estate Media House creates visual property marketing content
              for real estate agents, developers and commercial property
              professionals using supplied photography, renders and footage.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/35 md:justify-end">
              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COPYRIGHT */}
      <section className="border-t border-white/10">
        <div className="container-shell py-6">
          <div className="flex flex-col gap-3 text-[11px] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {SITE_NAME}
            </p>

            <p>Property media made to move.</p>
          </div>
        </div>
      </section>
    </footer>
  );
}