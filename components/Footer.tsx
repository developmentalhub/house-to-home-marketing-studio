"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
  SITE_NAME,
} from "@/lib/site";

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@rpimages",
    icon: Youtube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/real_estate_media_house/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/realestatemediahouse",
    icon: Facebook,
  },
];

function isClientProjectPage(
  pathname: string,
) {
  return /^\/[a-z]{2}\d{3}\/?$/.test(
    pathname.toLowerCase(),
  );
}

export default function Footer() {
  const pathname = usePathname();

  if (isClientProjectPage(pathname)) {
    return null;
  }

  return (
    <footer className="bg-ink text-white">
      {/* CTA */}
      <section className="border-b border-white/10">
        <div className="container-shell py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brassBright">
                Your backstage presentation partner
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Send us the sketch.
                <span className="block text-rust">
                  You present the vision.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
                We help cabinet makers turn
                sketches and design concepts into
                interactive 360° client
                presentations, visualisations and
                presentation sheets.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-rust hover:text-white"
              >
                Send us your sketch
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <section>
        <div className="container-shell py-14 md:py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
            {/* BRAND */}
            <div className="max-w-md">
              <Link
                href="/"
                className="inline-block"
              >
                <p className="font-display text-3xl font-semibold leading-none">
                  Real Estate
                </p>

                <p className="mt-2 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  Media House
                </p>
              </Link>

              <p className="mt-6 text-sm leading-7 text-white/45">
                Behind-the-scenes visualisation
                and presentation support for
                cabinet makers and joinery
                businesses.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/45">
                From hand-drawn sketches to
                professional interactive
                presentations your customers can
                explore on phone, tablet or
                computer.
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

              <div className="mt-7">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-white/30">
                  Follow
                </p>

                <div className="mt-3 flex items-center gap-4">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="text-white/50 transition hover:text-brassBright"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* EXPLORE */}
            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-brassBright">
                Explore
              </p>

              <div className="mt-5 grid gap-3">
                <Link
                  href="/"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  Home
                </Link>

                <Link
                  href="/#interactive-presentation"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  Interactive 360° presentations
                </Link>

                <Link
                  href="/#how-it-works"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  How it works
                </Link>

                <Link
                  href="/blog"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  Resources
                </Link>
              </div>
            </div>

            {/* WORK WITH US */}
            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-brassBright">
                Work with us
              </p>

              <div className="mt-5 grid gap-3">
                <Link
                  href="/enquire"
                  className="text-sm font-semibold text-brassBright transition hover:text-white"
                >
                  Request a quote
                </Link>

                <p className="text-sm leading-6 text-white/45">
                  Kitchens
                </p>

                <p className="text-sm leading-6 text-white/45">
                  Bathrooms
                </p>

                <p className="text-sm leading-6 text-white/45">
                  Laundries
                </p>

                <p className="text-sm leading-6 text-white/45">
                  Walk-in robes
                </p>

                <p className="text-sm leading-6 text-white/45">
                  Custom joinery
                </p>

                <p className="text-sm leading-6 text-white/45">
                  Whole-house cabinetry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL */}
      <section className="border-t border-white/10">
        <div className="container-shell py-8">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <p className="max-w-4xl text-xs leading-6 text-white/30">
              Interactive cabinetry visualisation
              and client presentation support for
              cabinet makers and joinery
              businesses.
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
              © {new Date().getFullYear()}{" "}
              {SITE_NAME}
            </p>

            <p>
              From sketch to interactive
              presentation.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}