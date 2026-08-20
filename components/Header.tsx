"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    label: "Home",
    href: "/",
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
  {
    label: "Packages",
    href: "/packages",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5f1]/95 backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex h-[76px] items-center justify-between gap-8">
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="group shrink-0"
          >
            <div className="font-display text-xl font-semibold leading-none tracking-tight text-ink">
              Real Estate
              <span className="block text-rust">Media House</span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-ink text-white"
                      : "text-black/55 hover:bg-black/5 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Link
              href="/enquire"
              className="inline-flex items-center justify-center rounded-full bg-rust px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink"
            >
              Start a project
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-ink lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {mobileOpen && (
          <div className="border-t border-black/10 pb-6 pt-4 lg:hidden">
            <nav className="flex flex-col">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`border-b border-black/5 py-4 font-display text-2xl font-semibold transition ${
                      active ? "text-rust" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/enquire"
                onClick={() => setMobileOpen(false)}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-rust px-6 py-4 font-semibold text-white"
              >
                Start a project
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}