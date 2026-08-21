"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Maximize2 } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MediaLightbox, {
  type MediaLightboxItem,
} from "@/components/MediaLightbox";

type Transformation = {
  id: string;
  title: string;
  category:
    | "Childcare"
    | "Residential"
    | "Lifestyle"
    | "Styling";
  before: string;
  after: string;
  description: string;
};

const transformations: Transformation[] = [
  {
    id: "childcare-new-build",
    title: "Childcare Centre New Build",
    category: "Childcare",
    before:
      "/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg",
    after:
      "/images/childcare/before-after-childcare/childcare-centre-new-build-after.png",
    description:
      "See an existing property transformed into a clearer vision of the future childcare centre.",
  },
  {
    id: "childcare-corner-site",
    title: "Corner Site Childcare Centre",
    category: "Childcare",
    before:
      "/images/childcare/before-after-childcare/corner-site-childcare-before.png",
    after:
      "/images/childcare/before-after-childcare/corner-site-childcare-after.png",
    description:
      "Help developers and stakeholders understand what the finished corner site could become.",
  },
  {
    id: "childcare-yard",
    title: "Childcare Outdoor Yard",
    category: "Childcare",
    before:
      "/images/childcare/before-after-childcare/Rearyard1-Before.png",
    after:
      "/images/childcare/before-after-childcare/Rearyard1-After.png",
    description:
      "Bring an outdoor childcare environment to life with a more complete finished scene.",
  },
  {
    id: "childcare-room-one",
    title: "Childcare Interior 01",
    category: "Childcare",
    before:
      "/images/childcare/before-after-childcare/room1-before.png",
    after:
      "/images/childcare/before-after-childcare/room1-after.png",
    description:
      "Transform a static childcare room into a clearer picture of the finished environment.",
  },
  {
    id: "childcare-room-two",
    title: "Childcare Interior 02",
    category: "Childcare",
    before:
      "/images/childcare/before-after-childcare/room2-before.png",
    after:
      "/images/childcare/before-after-childcare/room2-after.png",
    description:
      "Show the atmosphere and future use of the room before the centre opens.",
  },
  {
    id: "childcare-room-three",
    title: "Childcare Interior 03",
    category: "Childcare",
    before:
      "/images/childcare/before-after-childcare/room3-before.png",
    after:
      "/images/childcare/before-after-childcare/room3-after.png",
    description:
      "Give operators, developers and families a better sense of the completed space.",
  },
  {
    id: "residential-home",
    title: "Residential Exterior",
    category: "Residential",
    before:
      "/images/residential/residential-before-after/residential-home-before.png",
    after:
      "/images/residential/residential-before-after/residential-home-after.png",
    description:
      "Turn an existing residential image into a stronger piece of campaign content.",
  },
  {
    id: "residential-kitchen",
    title: "Residential Kitchen",
    category: "Residential",
    before:
      "/images/residential/residential-before-after/kitchen-before.png",
    after:
      "/images/residential/residential-before-after/kitchen-after.png",
    description:
      "Use the photography already supplied to create another visual moment for the listing.",
  },
  {
    id: "kitchen-lifestyle",
    title: "Kitchen Lifestyle",
    category: "Lifestyle",
    before:
      "/property-images/website/staging/kitchen-before.jpeg",
    after:
      "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
    description:
      "Introduce believable people, activity and atmosphere to an existing kitchen photograph.",
  },
  {
    id: "bedroom-lifestyle",
    title: "Bedroom Lifestyle",
    category: "Lifestyle",
    before:
      "/property-images/website/lifestyle/bedroom-before.jpeg",
    after:
      "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
    description:
      "Create a warmer and more aspirational scene from the original bedroom photography.",
  },
  {
    id: "bathroom-lifestyle",
    title: "Bathroom Lifestyle",
    category: "Lifestyle",
    before:
      "/property-images/website/lifestyle/bathroom-before.jpeg",
    after:
      "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
    description:
      "Bring existing bathroom photography to life with human presence and atmosphere.",
  },
  {
    id: "foyer-lifestyle",
    title: "Foyer Lifestyle",
    category: "Lifestyle",
    before:
      "/property-images/website/lifestyle/foyer-before.jpeg",
    after:
      "/property-images/website/lifestyle/foyer-after.jpeg",
    description:
      "Turn a static entrance into a more welcoming property moment.",
  },
  {
    id: "kitchen-styling",
    title: "Kitchen Styling",
    category: "Styling",
    before:
      "/property-images/website/staging/kitchen-before.jpeg",
    after:
      "/property-images/website/staging/kitchen-after.jpeg",
    description:
      "Refine an existing kitchen photograph with styling and finishing touches.",
  },
  {
    id: "living-styling",
    title: "Living Room Styling",
    category: "Styling",
    before:
      "/property-images/website/staging/living-room-before.jpeg",
    after:
      "/property-images/website/staging/living-room-after.jpeg",
    description:
      "Turn an empty living space into a more complete and marketable property image.",
  },
  {
    id: "ensuite-styling",
    title: "Ensuite Styling",
    category: "Styling",
    before:
      "/property-images/website/staging/ensuite-before.jpeg",
    after:
      "/property-images/website/staging/ensuite-after.jpeg",
    description:
      "Give an existing ensuite photograph a more polished presentation.",
  },
];

const filters = [
  "All",
  "Childcare",
  "Residential",
  "Lifestyle",
  "Styling",
] as const;

export default function BeforeAfterPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const [lightboxIndex, setLightboxIndex] =
    useState<number | null>(null);

  const filteredTransformations = useMemo(() => {
    if (activeFilter === "All") {
      return transformations;
    }

    return transformations.filter(
      (item) => item.category === activeFilter,
    );
  }, [activeFilter]);

  const lightboxItems = useMemo<MediaLightboxItem[]>(
    () =>
      filteredTransformations.map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category,
        description: item.description,
        before: item.before,
        after: item.after,
      })),
    [filteredTransformations],
  );

  const featured =
    filteredTransformations[0] ?? transformations[0];

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Before & After
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Drag between
                <span className="block text-rust">
                  what was there and what could be there.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/60">
                Use your finger on mobile or your mouse on desktop.
                Open any example full screen and swipe through the
                rest of the transformations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-[76px] z-30 border-b border-black/10 bg-[#f7f5f1]/95 backdrop-blur-xl">
        <div className="container-shell py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter);
                    setLightboxIndex(null);
                  }}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "bg-ink text-white"
                      : "border border-black/10 bg-white text-black/55 hover:border-rust hover:text-rust"
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
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Featured Transformation
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Take control of the image.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-black/55">
              Slide directly across the image, then open it full
              screen to keep moving through the gallery.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
            <BeforeAfterSlider
              before={featured.before}
              after={featured.after}
              beforeAlt={`Original ${featured.title}`}
              afterAlt={`Enhanced ${featured.title}`}
            />

            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              aria-label={`Open ${featured.title} full screen`}
              className="absolute right-4 top-[72px] z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-rust"
            >
              <Maximize2 size={17} />
            </button>
          </div>

          <div className="mt-6">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
              {featured.category}
            </p>

            <h3 className="mt-2 font-display text-3xl font-semibold">
              {featured.title}
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-black/50">
              {featured.description}
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Interactive Gallery
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">
                Keep dragging.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-black/45">
              {filteredTransformations.length} transformations
            </p>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-16 lg:grid-cols-2">
            {filteredTransformations.map((item, index) => (
              <article key={item.id}>
                <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-soft">
                  <BeforeAfterSlider
                    before={item.before}
                    after={item.after}
                    beforeAlt={`Original ${item.title}`}
                    afterAlt={`Enhanced ${item.title}`}
                  />

                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`Open ${item.title} full screen`}
                    className="absolute right-4 top-[72px] z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-rust"
                  >
                    <Maximize2 size={17} />
                  </button>
                </div>

                <div className="mt-5 grid grid-cols-[42px_1fr] gap-3">
                  <p className="pt-1 font-mono text-[10px] font-semibold text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div>
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-black/35">
                      {item.category}
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-black/50">
                      {item.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rust"
                    >
                      Open full screen
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT STEP */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                See More Possibilities
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                One transformation is only the beginning.
              </h2>
            </div>

            <div className="max-w-2xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/55">
                Explore childcare development stories, commercial
                use cases and residential transformations across
                the full image library.
              </p>

              <Link
                href="/image-library"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Open Image Library
                <ArrowRight size={17} />
              </Link>
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
            Already have the image?
            <br />
            Let&apos;s get more from it.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the photography, renders or project imagery
            you already have and we&apos;ll help identify what can
            be transformed.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start a project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <MediaLightbox
        items={lightboxItems}
        openIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </main>
  );
}