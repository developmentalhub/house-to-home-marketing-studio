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
  {
    label: "Packages",
    href: "/packages",
  },
];

const specialistPages = [
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
    href: "/commercial-property-animation",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [specialistOpen, setSpecialistOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  const specialistActive = specialistPages.some((item) =>
    pathname.startsWith(item.href),
  );

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5f1]/95 backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex h-[76px] items-center justify-between gap-6">
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => {
              setMobileOpen(false);
              setSpecialistOpen(false);
            }}
            className="group shrink-0"
          >
            <div className="font-display text-xl font-semibold leading-none tracking-tight text-ink">
              Real Estate
              <span className="block text-rust">
                Media House
              </span>
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
                  className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-ink text-white"
                      : "text-black/55 hover:bg-black/5 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* SPECIALIST DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setSpecialistOpen(true)}
              onMouseLeave={() => setSpecialistOpen(false)}
            >
              <button
                type="button"
                onClick={() =>
                  setSpecialistOpen((current) => !current)
                }
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  specialistActive
                    ? "bg-ink text-white"
                    : "text-black/55 hover:bg-black/5 hover:text-ink"
                }`}
              >
                Property Types
              </button>

              {specialistOpen && (
                <div className="absolute right-0 top-full pt-3">
                  <div className="w-[280px] overflow-hidden rounded-[1.4rem] border border-black/10 bg-white p-2 shadow-xl">
                    {specialistPages.map((item) => {
                      const active = isActive(item.href);

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setSpecialistOpen(false)}
                          className={`block rounded-[1rem] px-5 py-4 transition ${
                            active
                              ? "bg-ink text-white"
                              : "hover:bg-[#f7f5f1]"
                          }`}
                        >
                          <p className="font-display text-lg font-semibold">
                            {item.label}
                          </p>

                          <p
                            className={`mt-1 text-xs ${
                              active
                                ? "text-white/50"
                                : "text-black/40"
                            }`}
                          >
                            Property animation
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex">
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
            {mobileOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {mobileOpen && (
          <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-black/10 pb-6 pt-4 lg:hidden">
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

              <div className="border-b border-black/5 py-5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-black/30">
                  Property Types
                </p>

                <div className="mt-3 flex flex-col">
                  {specialistPages.map((item) => {
                    const active = isActive(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`py-3 font-display text-xl font-semibold ${
                          active ? "text-rust" : "text-ink"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

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