import Link from "next/link";

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
    label: "Videos",
    href: "/video-library",
  },
  {
    label: "Images",
    href: "/image-library",
  },
  {
    label: "Services",
    href: "/services",
  },
];

const packageLinks = [
  {
    label: "Compare Packages",
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
    label: "Premium Campaign",
    href: "/packages/premium-campaign",
  },
  {
    label: "Property Reel Campaign",
    href: "/packages/property-reel-campaign",
  },
  {
    label: "Development Campaign",
    href: "/packages/development-campaign",
  },
];

const companyLinks = [
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Start a Project",
    href: "/enquire",
  },
  {
    label: "Privacy",
    href: "/privacy",
  },
  {
    label: "Terms",
    href: "/terms",
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-shell">
        <div className="grid gap-14 py-16 md:py-20 lg:grid-cols-[1.2fr_0.7fr_0.9fr_0.7fr]">
          {/* BRAND */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-block font-display text-3xl font-semibold leading-none tracking-tight"
            >
              Real Estate
              <span className="block text-rust">
                Media House
              </span>
            </Link>

            <p className="mt-6 text-lg leading-8 text-white/55">
              Property media made to move.
            </p>

            <p className="mt-3 max-w-xs leading-7 text-white/40">
              First, we bring the image to life. Then, we make it move.
            </p>

            <a
              href={CONTACT_EMAIL_LINK}
              className="mt-7 inline-block font-semibold text-brassBright transition hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* EXPLORE */}
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brassBright">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {exploreLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* PACKAGES */}
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brassBright">
              Packages
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {packageLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* COMPANY */}
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brassBright">
              Work with us
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {companyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>

          <p>
            Property imagery transformed for digital marketing.
          </p>
        </div>
      </div>
    </footer>
  );
}