"use client";

import Link from "next/link";
import { useState } from "react";

import { ArrowRight } from "lucide-react";

const packages = [
  {
    id: "refresh",
    name: "Property Refresh",
    price: "$495",
    href: "/packages/property-refresh",
    eyebrow: "Entry Package",
    description:
      "A focused visual refresh using enhanced still imagery and one short animated scene.",
    images: "5 enhanced images",
    motion: "1 short animation",
    duration: "Up to 5 sec",
    bestFor:
      "Residential listings that need more life without a larger campaign.",
    included: [
      "5 enhanced property images",
      "1 short animation",
      "Up to 5 seconds of animation",
      "Lifestyle, furniture, lighting, plants, landscaping, food or pool styling where appropriate",
      "Finished files ready for digital marketing",
    ],
  },
  {
    id: "campaign",
    name: "Property Campaign",
    price: "$895",
    href: "/packages/property-campaign",
    eyebrow: "Most Popular",
    description:
      "More enhanced imagery and multiple animated moments across the property.",
    images: "8 enhanced images",
    motion: "2 animations",
    duration: "Up to 10 sec total",
    bestFor:
      "Listings that need a broader visual campaign across multiple scenes.",
    included: [
      "8 enhanced property images",
      "2 animations",
      "Up to 10 seconds of total animation",
      "Can include day-to-night",
      "Can include furniture appearing",
      "Can include car arrival",
      "Can include cinematic camera movement",
    ],
  },
  {
    id: "premium",
    name: "Premium Campaign",
    price: "$1,295",
    href: "/packages/premium-campaign",
    eyebrow: "Premium Property",
    description:
      "A larger visual campaign with more enhanced stills and more advanced animation.",
    images: "12 enhanced images",
    motion: "3 animated scenes",
    duration: "Around 15 sec total",
    bestFor:
      "Premium and luxury properties where presentation is a major part of the campaign.",
    included: [
      "12 enhanced property images",
      "3 animated scenes",
      "Around 15 seconds of total motion",
      "More advanced multi-scene animation",
      "Lifestyle, golden hour, arrivals, pool activation and cinematic movement where appropriate",
      "Individual animated scenes",
      "Finished Property Reel not included",
    ],
  },
  {
    id: "reel",
    name: "Property Reel Campaign",
    price: "$1,590",
    href: "/packages/property-reel-campaign",
    eyebrow: "Complete Property Story",
    description:
      "Enhanced imagery, multiple animated scenes and one finished vertical Property Reel.",
    images: "12 enhanced images",
    motion: "3–4 animated scenes",
    duration: "20–30 sec finished Reel",
    bestFor:
      "Premium listings that need a finished vertical property film rather than individual animations alone.",
    included: [
      "12 enhanced property images",
      "3–4 animated scenes",
      "1 finished vertical Property Reel",
      "Approx. 20–30 seconds finished duration",
      "Transitions between scenes",
      "Walkthrough-style movement where appropriate",
      "Cinematic transitions and reveals",
      "More complex property transformations",
    ],
  },
];

const comparisonRows = [
  {
    label: "Enhanced images",
    refresh: "5",
    campaign: "8",
    premium: "12",
    reel: "12",
  },
  {
    label: "Animated scenes",
    refresh: "1",
    campaign: "2",
    premium: "3",
    reel: "3–4",
  },
  {
    label: "Total motion",
    refresh: "Up to 5 sec",
    campaign: "Up to 10 sec",
    premium: "Around 15 sec",
    reel: "20–30 sec Reel",
  },
  {
    label: "Lifestyle enhancement",
    refresh: "Included",
    campaign: "Included",
    premium: "Included",
    reel: "Included",
  },
  {
    label: "Furniture & styling",
    refresh: "Available",
    campaign: "Available",
    premium: "Available",
    reel: "Available",
  },
  {
    label: "Day → Night",
    refresh: "—",
    campaign: "Available",
    premium: "Available",
    reel: "Available",
  },
  {
    label: "Advanced motion",
    refresh: "—",
    campaign: "Selected",
    premium: "Included",
    reel: "Included",
  },
  {
    label: "Finished Property Reel",
    refresh: "—",
    campaign: "—",
    premium: "—",
    reel: "Included",
  },
];

export default function PackagesPage() {
  const [activePackage, setActivePackage] = useState("campaign");

  const selectedPackage =
    packages.find((item) => item.id === activePackage) ?? packages[1];

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Property Packages
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Start with the photos.
              <span className="block text-white/35">
                Choose how far we take them.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              Every residential package starts with the property photography
              you already have. We enhance selected images, then make the
              strongest scenes move.
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGE CARDS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActivePackage(item.id)}
                className={`relative min-h-[410px] rounded-[2rem] border p-7 text-left transition ${
                  activePackage === item.id
                    ? "border-rust bg-ink text-white shadow-soft"
                    : "border-black/10 bg-[#f7f5f1] hover:border-rust"
                }`}
              >
                <p
                  className={`font-mono text-[9px] font-semibold uppercase tracking-[0.17em] ${
                    activePackage === item.id
                      ? "text-brassBright"
                      : "text-rust"
                  }`}
                >
                  {item.eyebrow}
                </p>

                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight">
                  {item.name}
                </h2>

                <div className="mt-5">
                  <span className="font-display text-4xl font-semibold">
                    {item.price}
                  </span>

                  <span
                    className={`ml-2 text-xs ${
                      activePackage === item.id
                        ? "text-white/35"
                        : "text-black/35"
                    }`}
                  >
                    + GST
                  </span>
                </div>

                <p
                  className={`mt-6 leading-7 ${
                    activePackage === item.id
                      ? "text-white/55"
                      : "text-black/50"
                  }`}
                >
                  {item.description}
                </p>

                <div
                  className={`mt-8 border-t pt-6 ${
                    activePackage === item.id
                      ? "border-white/10"
                      : "border-black/10"
                  }`}
                >
                  <p className="text-sm">{item.images}</p>
                  <p className="mt-2 text-sm">{item.motion}</p>
                  <p
                    className={`mt-2 text-sm ${
                      activePackage === item.id
                        ? "text-white/40"
                        : "text-black/40"
                    }`}
                  >
                    {item.duration}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* SELECTED PACKAGE */}
          <div className="mt-8 rounded-[2rem] bg-[#f7f5f1] p-8 md:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                  Selected package
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold">
                  {selectedPackage.name}
                </h2>

                <p className="mt-5 leading-8 text-black/55">
                  {selectedPackage.bestFor}
                </p>

                <Link
                  href={selectedPackage.href}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
                >
                  View full package
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="border-t border-black/10">
                {selectedPackage.included.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[55px_1fr] border-b border-black/10 py-5"
                  >
                    <p className="font-mono text-xs text-rust">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Compare packages
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              More images. More movement. Bigger story.
            </h2>
          </div>

          <div className="mt-12 overflow-x-auto">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-[1.3fr_repeat(4,1fr)] border-l border-t border-black/10">
                <div className="border-b border-r border-black/10 p-5" />

                {packages.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-r border-black/10 p-5"
                  >
                    <p className="font-display text-xl font-semibold">
                      {item.name}
                    </p>

                    <p className="mt-2 font-mono text-xs text-rust">
                      {item.price} + GST
                    </p>
                  </div>
                ))}

                {comparisonRows.map((row) => (
                  <div
                    key={row.label}
                    className="contents"
                  >
                    <div className="border-b border-r border-black/10 p-5 font-semibold">
                      {row.label}
                    </div>

                    <div className="border-b border-r border-black/10 p-5 text-sm text-black/55">
                      {row.refresh}
                    </div>

                    <div className="border-b border-r border-black/10 p-5 text-sm text-black/55">
                      {row.campaign}
                    </div>

                    <div className="border-b border-r border-black/10 p-5 text-sm text-black/55">
                      {row.premium}
                    </div>

                    <div className="border-b border-r border-black/10 p-5 text-sm text-black/55">
                      {row.reel}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REEL DISTINCTION */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Animation vs Property Reel
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                An animation is one moving scene.
                <br />
                A Reel is the finished story.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-white/55">
                Property Refresh, Property Campaign and Premium Campaign give
                you individual moving scenes. Property Reel Campaign takes
                multiple animated scenes and edits them together with
                transitions into one finished vertical property film.
              </p>

              <div className="mt-9 grid border-l border-t border-white/10 sm:grid-cols-2">
                <div className="border-b border-r border-white/10 p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brassBright">
                    Animation
                  </p>

                  <h3 className="mt-6 font-display text-2xl font-semibold">
                    One scene moves.
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    Camera movement, furniture appearing, arrivals, lighting
                    changes, pool activation and other single-scene motion.
                  </p>
                </div>

                <div className="border-b border-r border-white/10 p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brassBright">
                    Property Reel
                  </p>

                  <h3 className="mt-6 font-display text-2xl font-semibold">
                    The scenes become a film.
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    Multiple animated moments are sequenced and edited into one
                    finished 20–30 second vertical property story.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-sand p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                  Development Campaign
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
                  Some projects need a custom story.
                </h2>

                <p className="mt-5 max-w-3xl leading-8 text-black/55">
                  Childcare centres, commercial developments, construction
                  projects and larger transformations can include demolition,
                  build stages, landscaping, car parks, people, cars and
                  render-to-reality sequences.
                </p>
              </div>

              <div>
                <p className="font-display text-3xl font-semibold">
                  Custom quote
                </p>

                <Link
                  href="/packages/development-campaign"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-rust"
                >
                  View Development Campaign
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Payment
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                50% to begin.
                <br />
                50% before publishing.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="leading-8 text-black/55">
                A 50% deposit is required before production begins. The
                remaining 50% must be paid before finished content can be
                published, posted, advertised or distributed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Real Estate Media House
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Already have the photos?
            <br />
            Choose what happens next.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us your existing property photography or renders and we&apos;ll
            help you choose the campaign that best suits the property.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              Start a project
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/explore"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Explore transformations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}