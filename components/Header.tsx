"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Menu,
  X,
} from "lucide-react";

function isProjectPresentationRoute(
  pathname: string,
) {
  return /^\/[a-z]{2}\d{3}\/?$/.test(
    pathname.toLowerCase(),
  );
}

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  if (
    isProjectPresentationRoute(pathname)
  ) {
    return null;
  }

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5f1]/95 backdrop-blur">
      <div className="container-shell">
        <div className="flex min-h-[76px] items-center justify-between gap-6">
          {/* BRAND */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex max-w-[230px] flex-col leading-none"
          >
            <span className="font-display text-xl font-semibold tracking-tight text-ink transition group-hover:text-rust md:text-2xl">
              Real Estate
            </span>

            <span className="mt-0.5 font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-black/45">
              Media House
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                pathname === "/"
                  ? "bg-ink text-white"
                  : "text-black/60 hover:bg-black/5 hover:text-ink"
              }`}
            >
              Home
            </Link>

            <Link
              href="/#interactive-presentation"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-black/60 transition hover:bg-black/5 hover:text-ink"
            >
              Interactive 360°
            </Link>

            <Link
              href="/#how-it-works"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-black/60 transition hover:bg-black/5 hover:text-ink"
            >
              How it works
            </Link>

            <Link
              href="/blog"
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                pathname.startsWith("/blog")
                  ? "bg-ink text-white"
                  : "text-black/60 hover:bg-black/5 hover:text-ink"
              }`}
            >
              Resources
            </Link>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Link
              href="/enquire"
              className="inline-flex rounded-full bg-rust px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
            >
              Send us a sketch
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() =>
              setMobileOpen(
                (current) => !current,
              )
            }
            aria-expanded={mobileOpen}
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-ink lg:hidden"
          >
            {mobileOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-black/10 bg-[#f7f5f1] lg:hidden">
          <div className="container-shell py-6">
            <nav className="grid gap-2">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`rounded-2xl px-5 py-4 font-display text-2xl font-semibold transition ${
                  pathname === "/"
                    ? "bg-ink text-white"
                    : "hover:bg-white"
                }`}
              >
                Home
              </Link>

              <Link
                href="/#interactive-presentation"
                onClick={closeMobileMenu}
                className="rounded-2xl px-5 py-4 font-display text-2xl font-semibold transition hover:bg-white"
              >
                Interactive 360°
              </Link>

              <Link
                href="/#how-it-works"
                onClick={closeMobileMenu}
                className="rounded-2xl px-5 py-4 font-display text-2xl font-semibold transition hover:bg-white"
              >
                How it works
              </Link>

              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className={`rounded-2xl px-5 py-4 font-display text-2xl font-semibold transition ${
                  pathname.startsWith("/blog")
                    ? "bg-ink text-white"
                    : "hover:bg-white"
                }`}
              >
                Resources
              </Link>

              <div className="mt-5 border-t border-black/10 pt-6">
                <Link
                  href="/enquire"
                  onClick={closeMobileMenu}
                  className="flex w-full items-center justify-center rounded-full bg-rust px-6 py-4 font-semibold text-white transition hover:bg-ink"
                >
                  Send us a sketch
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}