import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property Media Packages | Real Estate Media House",
  description:
    "Compare five property media campaign packages for enhanced images, property animation and finished Reels using the property media you already have.",
  alternates: {
    canonical: `${SITE_URL}/packages`,
  },
  openGraph: {
    title: "Property Media Packages | Real Estate Media House",
    description:
      "Choose the amount of enhanced imagery, animation and finished property video your campaign needs.",
    url: `${SITE_URL}/packages`,
    type: "website",
  },
};

const packages = [
  {
    number: "01",
    name: "Property Refresh",
    price: "$495",
    suffix: "+ GST",
    intro: "A quick visual refresh when the campaign needs something new.",
    bestFor:
      "Agents who already have the listing photography and want a small amount of fresh content.",
    features: [
      "5 enhanced property images",
      "1 short property animation",
      "Up to 5 seconds of animation",
      "Created from your existing property media",
    ],
    href: "/packages/property-refresh",
  },
  {
    number: "02",
    name: "Property Campaign",
    price: "$895",
    suffix: "+ GST",
    intro:
      "More stills and motion for a property campaign that needs several fresh moments.",
    bestFor:
      "Listings that need more campaign variety without moving into a full Reel.",
    features: [
      "8 enhanced property images",
      "2 property animations",
      "Up to 10 seconds total animation",
      "Created from your existing property media",
    ],
    href: "/packages/property-campaign",
  },
  {
    number: "03",
    name: "Premium Campaign",
    price: "$1,295",
    suffix: "+ GST",
    intro:
      "A larger image and animation campaign for properties that need more visual depth.",
    bestFor:
      "Higher value campaigns that need a broader collection of transformed stills and animated scenes.",
    features: [
      "12 enhanced property images",
      "3 animated scenes",
      "Around 15 seconds total animation",
      "No finished Reel included",
    ],
    href: "/packages/premium-campaign",
  },
  {
    number: "04",
    name: "Property Reel Campaign",
    price: "$1,590",
    suffix: "+ GST",
    intro:
      "The full campaign option when you want transformed images, animation and a finished vertical Reel.",
    bestFor:
      "Agents who want a larger bank of visual content plus a finished short form property video.",
    features: [
      "12 enhanced property images",
      "3 to 4 animated scenes",
      "Finished vertical property Reel",
      "Approximately 20 to 30 seconds",
    ],
    href: "/packages/property-reel-campaign",
    featured: true,
  },
  {
    number: "05",
    name: "Development Campaign",
    price: "Custom",
    suffix: "",
    intro:
      "A tailored campaign for developments that need more than a standard property package.",
    bestFor:
      "Childcare, commercial and property development projects with multiple stages, spaces or visual requirements.",
    features: [
      "Custom image requirements",
      "Custom animation requirements",
      "Development transformation options",
      "Scope built around the project",
    ],
    href: "/packages/development-campaign",
  },
];

const comparisonRows = [
  {
    label: "Enhanced images",
    values: ["5", "8", "12", "12", "Custom"],
  },
  {
    label: "Animated scenes",
    values: ["1", "2", "3", "3 to 4", "Custom"],
  },
  {
    label: "Animation length",
    values: [
      "Up to 5 sec",
      "Up to 10 sec",
      "Around 15 sec",
      "20 to 30 sec Reel",
      "Custom",
    ],
  },
  {
    label: "Finished Reel",
    values: ["No", "No", "No", "Yes", "Optional"],
  },
];

export default function PackagesPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* COMPACT HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-14 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Property Media Packages
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Choose how much
                <span className="block text-rust">
                  campaign content you need.
                </span>
              </h1>
            </div>

            <div className="max-w-2xl lg:pb-2">
              <p className="text-lg leading-8 text-white/60 md:text-xl">
                Start with the property photography, renders or footage you
                already have. Then choose how far you want to extend the
                campaign.
              </p>

              <p className="mt-4 leading-7 text-white/40">
                Five options. From a quick visual refresh to a finished property
                Reel or custom development campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAST PACKAGE SELECTOR */}
      <section className="border-b border-black/10 bg-white">
        <div className="container-shell py-6">
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-max gap-3">
              {packages.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  className={`w-[230px] shrink-0 rounded-[1.4rem] border p-5 transition ${
                    item.featured
                      ? "border-rust bg-rust text-white"
                      : "border-black/10 bg-[#f7f5f1] hover:border-rust hover:bg-white"
                  }`}
                >
                  <p
                    className={`font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${
                      item.featured ? "text-white/60" : "text-rust"
                    }`}
                  >
                    {item.number}
                  </p>

                  <h2 className="mt-3 font-display text-xl font-semibold">
                    {item.name}
                  </h2>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-semibold">
                      {item.price}
                    </span>

                    {item.suffix && (
                      <span
                        className={`text-xs ${
                          item.featured ? "text-white/50" : "text-black/40"
                        }`}
                      >
                        {item.suffix}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DECISION INTRO */}
      <section className="py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Start Here
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                What does the campaign need next?
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-black/10 bg-white p-6">
                <p className="font-display text-2xl font-semibold">
                  Just needs fresh content?
                </p>

                <p className="mt-3 leading-7 text-black/50">
                  Start with Property Refresh or Property Campaign.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/10 bg-white p-6">
                <p className="font-display text-2xl font-semibold">
                  Needs more visual variety?
                </p>

                <p className="mt-3 leading-7 text-black/50">
                  Premium Campaign gives you more transformed stills and motion.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/10 bg-white p-6">
                <p className="font-display text-2xl font-semibold">
                  Needs a finished Reel?
                </p>

                <p className="mt-3 leading-7 text-black/50">
                  Go straight to the Property Reel Campaign.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/10 bg-white p-6">
                <p className="font-display text-2xl font-semibold">
                  Marketing a development?
                </p>

                <p className="mt-3 leading-7 text-black/50">
                  Use the custom Development Campaign.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PACKAGE DETAILS */}
      <section className="border-y border-black/10 bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="mb-8 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Compare The Five Packages
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Open the package that matches the amount of content you need.
            </h2>
          </div>

          <div className="space-y-3">
            {packages.map((item) => {
              const id = item.name
                .toLowerCase()
                .replaceAll(" ", "-");

              return (
                <details
                  key={item.name}
                  id={id}
                  open={item.featured}
                  className={`group scroll-mt-28 overflow-hidden rounded-[1.75rem] border ${
                    item.featured
                      ? "border-rust"
                      : "border-black/10"
                  }`}
                >
                  <summary className="cursor-pointer list-none bg-[#f7f5f1] p-6 marker:hidden md:p-7">
                    <div className="grid gap-5 sm:grid-cols-[60px_1fr_auto] sm:items-center">
                      <p className="font-mono text-xs font-semibold text-rust">
                        {item.number}
                      </p>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-display text-2xl font-semibold md:text-3xl">
                            {item.name}
                          </h3>

                          {item.featured && (
                            <span className="rounded-full bg-rust px-3 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-white">
                              Includes Finished Reel
                            </span>
                          )}
                        </div>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-black/45">
                          {item.intro}
                        </p>
                      </div>

                      <div className="flex items-baseline gap-1 sm:text-right">
                        <span className="font-display text-3xl font-semibold">
                          {item.price}
                        </span>

                        {item.suffix && (
                          <span className="text-xs text-black/40">
                            {item.suffix}
                          </span>
                        )}
                      </div>
                    </div>
                  </summary>

                  <div className="border-t border-black/10 bg-white p-6 md:p-8">
                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                      <div>
                        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                          Best For
                        </p>

                        <p className="mt-4 text-lg leading-8 text-black/60">
                          {item.bestFor}
                        </p>

                        <Link
                          href={item.href}
                          className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
                        >
                          View {item.name}
                          <ArrowRight size={17} />
                        </Link>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {item.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex gap-3 rounded-[1.25rem] bg-[#f7f5f1] p-5"
                          >
                            <Check
                              size={17}
                              className="mt-1 shrink-0 text-rust"
                            />

                            <p className="text-sm leading-6 text-black/60">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-9">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Quick Comparison
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              See the differences without opening five pages.
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-black/10 bg-white shadow-soft">
            <table className="min-w-[1000px] w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="p-5 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                    Package
                  </th>

                  {packages.map((item) => (
                    <th key={item.name} className="p-5 align-top">
                      <p className="font-display text-xl font-semibold">
                        {item.name}
                      </p>

                      <p className="mt-2 font-display text-2xl font-semibold text-rust">
                        {item.price}
                      </p>

                      {item.suffix && (
                        <p className="mt-1 text-xs font-normal text-black/35">
                          {item.suffix}
                        </p>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-black/10 last:border-b-0"
                  >
                    <th className="p-5 text-sm font-semibold">
                      {row.label}
                    </th>

                    {row.values.map((value, index) => (
                      <td
                        key={`${row.label}-${packages[index].name}`}
                        className={`p-5 text-sm ${
                          packages[index].featured
                            ? "font-semibold text-rust"
                            : "text-black/55"
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PACKAGE CARDS */}
      <section className="border-y border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Five Ways To Build The Campaign
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-display text-4xl font-semibold leading-tight md:text-5xl">
                You do not need the biggest package.
                <span className="block text-rust">
                  You need the one that solves the next campaign problem.
                </span>
              </h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {packages.map((item) => (
              <Link
                key={`card-${item.name}`}
                href={item.href}
                className={`group flex min-h-[320px] flex-col rounded-[2rem] border p-8 transition ${
                  item.featured
                    ? "border-rust bg-ink text-white"
                    : "border-black/10 bg-[#f7f5f1] hover:border-rust hover:bg-white hover:shadow-soft"
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <p
                    className={`font-mono text-xs font-semibold ${
                      item.featured ? "text-brassBright" : "text-rust"
                    }`}
                  >
                    {item.number}
                  </p>

                  <div className="text-right">
                    <p className="font-display text-3xl font-semibold">
                      {item.price}
                    </p>

                    {item.suffix && (
                      <p
                        className={`mt-1 text-xs ${
                          item.featured ? "text-white/40" : "text-black/35"
                        }`}
                      >
                        {item.suffix}
                      </p>
                    )}
                  </div>
                </div>

                <h3 className="mt-10 font-display text-3xl font-semibold">
                  {item.name}
                </h3>

                <p
                  className={`mt-5 flex-1 leading-7 ${
                    item.featured ? "text-white/50" : "text-black/50"
                  }`}
                >
                  {item.intro}
                </p>

                <div
                  className={`mt-7 inline-flex items-center gap-2 font-semibold ${
                    item.featured ? "text-brassBright" : "text-rust"
                  }`}
                >
                  View package
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                  Payment
                </p>

                <p className="mt-5 font-display text-5xl font-semibold">
                  50 / 50
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
                  50% to begin. 50% before the finished content is used.
                </h2>

                <p className="mt-5 leading-8 text-black/50">
                  A 50% deposit is required to begin. The remaining 50% is due
                  before the client may publish, post, distribute, advertise or
                  otherwise use the finished content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOT SURE */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Not Sure Which One?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with what the listing needs, not the package name.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-white/55">
                Send us the property media you already have and tell us what is
                happening with the campaign. We can work out whether you need a
                small refresh, several animated moments or a finished Reel.
              </p>

              <Link
                href="/enquire"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-rust hover:text-white"
              >
                Show us the campaign
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            One Shoot. More Campaign Content.
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Already paid for the photography?
            <br />
            Get more from it.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Choose a package or send us the property media and tell us what the
            campaign needs next.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss your campaign
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}