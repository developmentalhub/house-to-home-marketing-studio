"use client";

import Link from "next/link";
import { useState } from "react";

import {
  ArrowRight,
  Car,
  ImageIcon,
  PawPrint,
  Sparkles,
  SunMedium,
  Trees,
  Utensils,
  Waves,
  WandSparkles,
} from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const transformations = [
  {
    id: 1,
    title: "Kitchen Lifestyle",
    category: "Lifestyle",
    before: "/property-images/website/staging/kitchen-before.jpeg",
    after:
      "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
    description:
      "A standard kitchen photograph transformed with believable people, activity and atmosphere.",
  },
  {
    id: 2,
    title: "Bedroom Lifestyle",
    category: "Lifestyle",
    before:
      "/property-images/website/lifestyle/bedroom-before.jpeg",
    after:
      "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
    description:
      "A standard bedroom photograph transformed into a warmer, more aspirational lifestyle scene.",
  },
  {
    id: 3,
    title: "Bathroom Lifestyle",
    category: "Lifestyle",
    before:
      "/property-images/website/lifestyle/bathroom-before.jpeg",
    after:
      "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
    description:
      "Existing bathroom photography brought to life with lifestyle and human presence.",
  },
  {
    id: 4,
    title: "Foyer Lifestyle",
    category: "Lifestyle",
    before:
      "/property-images/website/lifestyle/foyer-before.jpeg",
    after:
      "/property-images/website/lifestyle/foyer-after.jpeg",
    description:
      "A static entrance transformed into a more welcoming and engaging property scene.",
  },
  {
    id: 5,
    title: "Kitchen Styling",
    category: "Furniture & Styling",
    before:
      "/property-images/website/staging/kitchen-before.jpeg",
    after:
      "/property-images/website/staging/kitchen-after.jpeg",
    description:
      "A standard property photograph transformed with styling and visual finishing.",
  },
  {
    id: 6,
    title: "Living Room Styling",
    category: "Furniture & Styling",
    before:
      "/property-images/website/staging/living-room-before.jpeg",
    after:
      "/property-images/website/staging/living-room-after.jpeg",
    description:
      "An empty living space transformed with furniture, styling and finishing touches.",
  },
  {
    id: 7,
    title: "Ensuite Styling",
    category: "Furniture & Styling",
    before:
      "/property-images/website/staging/ensuite-before.jpeg",
    after:
      "/property-images/website/staging/ensuite-after.jpeg",
    description:
      "A standard ensuite photograph refined into a more polished property marketing image.",
  },
];

const filters = [
  "All",
  "Lifestyle",
  "Furniture & Styling",
];

const futureCategories = [
  {
    title: "People & Pets",
    description:
      "Families, couples, children, pets and believable activity.",
    icon: PawPrint,
  },
  {
    title: "Food & Entertaining",
    description:
      "Food, drinks, flowers, styled tables and entertaining moments.",
    icon: Utensils,
  },
  {
    title: "Lighting",
    description:
      "Golden hour, warmer interiors and evening atmosphere.",
    icon: SunMedium,
  },
  {
    title: "Landscape",
    description:
      "Lusher planting, established gardens and improved lawns.",
    icon: Trees,
  },
  {
    title: "Pool",
    description:
      "Better water, reflections, furniture and poolside lifestyle.",
    icon: Waves,
  },
  {
    title: "Cars & Activity",
    description:
      "Vehicles, arrivals and activity around the property.",
    icon: Car,
  },
];

export default function ImageLibraryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTransformations =
    activeFilter === "All"
      ? transformations
      : transformations.filter(
          (item) => item.category === activeFilter,
        );

  const featured =
    filteredTransformations[0] ?? transformations[0];

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="overflow-hidden bg-ink text-white">
        <div className="container-shell py-24 md:py-32 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <ImageIcon
                  size={18}
                  className="text-brassBright"
                />

                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                  Image Library
                </p>
              </div>

              <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.96] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
                Same property.
                <span className="block text-white/35">
                  More life inside it.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/60">
                Drag across the images to see how supplied
                property photography can be transformed with
                people, furniture, lifestyle, lighting,
                landscaping and atmosphere.
              </p>

              <Link
                href="/explore"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Explore what&apos;s possible
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div className="flex items-center gap-3">
              <Sparkles
                size={20}
                className="text-rust"
              />

              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                Enhanced Property Images
              </p>
            </div>

            <p className="max-w-4xl font-display text-2xl leading-relaxed text-black/65 md:text-3xl">
              Start with the photography you already have.
              Then decide what could make the property feel
              warmer, fuller, more established or more lived
              in.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="border-b border-black/10 bg-[#f7f5f1]">
        <div className="container-shell py-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() =>
                    setActiveFilter(filter)
                  }
                  className={`rounded-full px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
                    active
                      ? "bg-ink text-white"
                      : "border border-black/10 bg-white text-black/50 hover:border-rust hover:text-rust"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Featured Transformation
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Drag across.
                <br />
                See the difference.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-black/50">
              The property itself stays the same. We change
              the life, styling and atmosphere around it.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <BeforeAfterSlider
              before={featured.before}
              after={featured.after}
              beforeAlt={`Original ${featured.title}`}
              afterAlt={`Enhanced ${featured.title}`}
            />
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                {featured.category}
              </p>

              <h3 className="mt-2 font-display text-3xl font-semibold">
                {featured.title}
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-black/50">
                {featured.description}
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-black/45">
              <WandSparkles size={14} />
              Drag to compare
            </div>
          </div>
        </div>
      </section>

      {/* LIBRARY */}
      <section className="border-t border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-14">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Transformation Library
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              More before and afters.
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-16 lg:grid-cols-2">
            {filteredTransformations.map(
              (item, index) => (
                <article key={item.id}>
                  <div className="overflow-hidden rounded-[1.75rem] bg-neutral-100 shadow-sm">
                    <BeforeAfterSlider
                      before={item.before}
                      after={item.after}
                      beforeAlt={`Original ${item.title} property photograph`}
                      afterAlt={`Enhanced ${item.title} property photograph`}
                    />
                  </div>

                  <div className="mt-6 flex items-start gap-5">
                    <p className="pt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </p>

                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/35">
                        {item.category}
                      </p>

                      <h3 className="mt-2 font-display text-2xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-lg leading-7 text-black/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* FUTURE CATEGORIES */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More ways to enhance
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Every property needs something different.
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-black/55">
                Our library will continue growing as we
                create more examples across different
                property types and enhancement styles.
              </p>

              <Link
                href="/explore"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore all ideas
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {futureCategories.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.6rem] border border-black/10 bg-white p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f5f1] text-rust">
                      <Icon size={17} />
                    </div>

                    <h3 className="mt-7 font-display text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-black/50">
                      {item.description}
                    </p>

                    <p className="mt-5 font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-black/25">
                      More examples coming
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE LINK */}
      <section className="border-t border-black/10 bg-white py-20 md:py-24">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Included in every package
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Enhanced stills are where every campaign
                starts.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
                Higher packages then add more animations,
                longer motion and a finished Property Reel.
              </p>
            </div>

            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
            >
              Compare packages
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
            Real Estate Media House
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Send us the boring one.
            <br />
            We&apos;ll bring it to life.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Start with the property photography you already
            have.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start a transformation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}