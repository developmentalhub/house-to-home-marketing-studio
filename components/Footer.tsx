import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";

import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
  SITE_NAME,
} from "@/lib/site";

const navigation = [
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
  {
    label: "Packages",
    href: "/packages",
  },
  {
    label: "Enquire",
    href: "/enquire",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="container-shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              {SITE_NAME}
            </p>

            <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Property media
              <span className="block text-white/35">made to move.</span>
            </h2>

            <a
              href={CONTACT_EMAIL_LINK}
              className="mt-8 inline-flex items-center gap-3 text-lg text-white/65 transition hover:text-brassBright"
            >
              <Mail size={19} />
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:justify-self-end">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Explore
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {navigation.slice(0, 3).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Work with us
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {navigation.slice(3).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Legal
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                <Link
                  href="/privacy"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  Privacy
                </Link>

                <Link
                  href="/terms"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  Terms
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-wider text-white/30">
            © {new Date().getFullYear()} Real Estate Media House
          </p>

          <a
            href={CONTACT_EMAIL_LINK}
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-white/35 transition hover:text-white"
          >
            Get in touch
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}