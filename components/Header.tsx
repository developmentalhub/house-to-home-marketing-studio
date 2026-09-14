"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ChevronDown, Menu, X } from "lucide-react";

const mainNavigation = [
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

const propertyTypes = [
  {
    label: "Childcare",
    description: "Development visualisation and property animation",
    href: "/childcare-property-animation",
  },
  {
    label: "Residential",
    description: "Lifestyle transformation and property animation",
    href: "/residential-property-animation",
  },
  {
    label: "Commercial",
    description: "Industry specific visualisation and animation",
    href: "/commercial-property-visualisation",
  },
];

const resources = [
  {
    label: "Free Animation Prompt",
    description:
      "Download one property animation prompt and see how we structure movement.",
    href: "/free-property-animation-prompt",
    detail: "Free",
  },
  {
    label: "10 Property Animation Prompts",
    description:
      "Ready-to-adapt prompts for residential, commercial, hospitality and development Reels.",
    href: "/property-animation-prompt-pack",
    detail: "$7",
  },
  {
    label: "Property Marketing Guides",
    description:
      "Practical ideas for listings, vacant property, development marketing and campaign content.",
    href: "/blog",
    detail: "Guides",
  },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [propertyTypesOpen, setPropertyTypesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  function closeMobileMenu() {
    setMobileOpen(false);
    setPropertyTypesOpen(false);
    setResourcesOpen(false);
  }

  const propertyTypeActive =
    pathname.startsWith("/childcare") ||
    pathname.startsWith("/residential") ||
    pathname.startsWith("/commercial") ||
    pathname.startsWith("/projects/warehouse") ||
    pathname.startsWith("/projects/childcare") ||
    pathname.startsWith("/projects/residential");

  const resourcesActive =
    pathname.startsWith("/free-property-animation-prompt") ||
    pathname.startsWith("/property-animation-prompt-pack") ||
    pathname.startsWith("/blog");

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
          <nav className="hidden items-center gap-1 xl:flex">
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

            {mainNavigation.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "bg-ink text-white"
                      : "text-black/60 hover:bg-black/5 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* RESOURCES DROPDOWN */}
            <div className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  resourcesActive
                    ? "bg-ink text-white"
                    : "text-black/60 hover:bg-black/5 hover:text-ink"
                }`}
              >
                Resources

                <ChevronDown
                  size={15}
                  className="transition duration-200 group-hover:rotate-180"
                />
              </button>

              <div className="invisible absolute right-0 top-full pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100">
                <div className="w-[390px] overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-2 shadow-soft">
                  {resources.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item block rounded-[1.1rem] px-5 py-4 transition hover:bg-[#f7f5f1]"
                    >
                      <div className="grid grid-cols-[1fr_auto] gap-5">
                        <div>
                          <p className="font-display text-xl font-semibold text-ink">
                            {item.label}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-black/45">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex flex-col items-end justify-between">
                          <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-rust">
                            {item.detail}
                          </span>

                          <span className="text-lg text-rust transition group-hover/item:translate-x-1">
                            →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* PROPERTY TYPES DROPDOWN */}
            <div className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  propertyTypeActive
                    ? "bg-ink text-white"
                    : "text-black/60 hover:bg-black/5 hover:text-ink"
                }`}
              >
                Property Types

                <ChevronDown
                  size={15}
                  className="transition duration-200 group-hover:rotate-180"
                />
              </button>

              <div className="invisible absolute right-0 top-full pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100">
                <div className="w-[340px] overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-2 shadow-soft">
                  {propertyTypes.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item block rounded-[1.1rem] px-5 py-4 transition hover:bg-[#f7f5f1]"
                    >
                      <div className="flex items-center justify-between gap-5">
                        <div>
                          <p className="font-display text-xl font-semibold text-ink">
                            {item.label}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-black/45">
                            {item.description}
                          </p>
                        </div>

                        <span className="text-lg text-rust transition group-hover/item:translate-x-1">
                          →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden xl:block">
            <Link
              href="/enquire"
              className="inline-flex rounded-full bg-rust px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
            >
              Enquire
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-ink xl:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-black/10 bg-[#f7f5f1] xl:hidden">
          <div className="container-shell py-6">
            <nav>
              <div className="grid gap-1">
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

                {mainNavigation.map((item) => {
                  const active = isActive(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`rounded-2xl px-5 py-4 font-display text-2xl font-semibold transition ${
                        active
                          ? "bg-ink text-white"
                          : "hover:bg-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                {/* MOBILE RESOURCES */}
                <button
                  type="button"
                  onClick={() =>
                    setResourcesOpen((current) => !current)
                  }
                  className={`flex items-center justify-between rounded-2xl px-5 py-4 text-left font-display text-2xl font-semibold transition ${
                    resourcesActive
                      ? "bg-ink text-white"
                      : "hover:bg-white"
                  }`}
                >
                  Resources

                  <ChevronDown
                    size={20}
                    className={`transition ${
                      resourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {resourcesOpen && (
                  <div className="mt-2 grid gap-2 border-l border-black/10 pl-4">
                    {resources.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="rounded-2xl bg-white p-5 transition hover:border-rust"
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <p className="font-display text-xl font-semibold">
                              {item.label}
                            </p>

                            <p className="mt-2 text-sm leading-6 text-black/45">
                              {item.description}
                            </p>
                          </div>

                          <p className="shrink-0 font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-rust">
                            {item.detail}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* MOBILE PROPERTY TYPES */}
                <button
                  type="button"
                  onClick={() =>
                    setPropertyTypesOpen((current) => !current)
                  }
                  className={`flex items-center justify-between rounded-2xl px-5 py-4 text-left font-display text-2xl font-semibold transition ${
                    propertyTypeActive
                      ? "bg-ink text-white"
                      : "hover:bg-white"
                  }`}
                >
                  Property Types

                  <ChevronDown
                    size={20}
                    className={`transition ${
                      propertyTypesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {propertyTypesOpen && (
                <div className="mt-2 grid gap-2 border-l border-black/10 pl-4">
                  {propertyTypes.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="rounded-2xl bg-white p-5 transition hover:border-rust"
                    >
                      <p className="font-display text-xl font-semibold">
                        {item.label}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-black/45">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              )}

              <div className="mt-6 border-t border-black/10 pt-6">
                <Link
                  href="/enquire"
                  onClick={closeMobileMenu}
                  className="flex w-full items-center justify-center rounded-full bg-rust px-6 py-4 font-semibold text-white transition hover:bg-ink"
                >
                  Enquire
                </Link>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <Link
                  href="/how-it-works"
                  onClick={closeMobileMenu}
                  className="rounded-2xl border border-black/10 bg-white p-4 text-sm font-semibold"
                >
                  How it works
                </Link>

                <Link
                  href="/before-after"
                  onClick={closeMobileMenu}
                  className="rounded-2xl border border-black/10 bg-white p-4 text-sm font-semibold"
                >
                  Before & After
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}