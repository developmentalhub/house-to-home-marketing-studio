"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ChildcareDevelopmentStory from "@/components/ChildcareDevelopmentStory";
import CommercialOutcomeGallery from "@/components/CommercialOutcomeGallery";
import MediaLightbox, {
  type MediaLightboxItem,
} from "@/components/MediaLightbox";
import SwipeGallery, {
  type SwipeGalleryItem,
} from "@/components/SwipeGallery";

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
      "Bring the outdoor environment to life with a more complete and engaging finished scene.",
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
      "Transform a static room into a clearer picture of how the finished environment could feel.",
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
      "Show the future use and atmosphere of the room before the centre opens.",
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
      "Turn an existing residential image into a stronger visual moment for the property campaign.",
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
      "Use the photography already supplied to create another piece of campaign content.",
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
      "Bring an existing bathroom photograph to life with human presence and atmosphere.",
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
      "Refine the presentation of an existing kitchen photograph with styling and finishing touches.",
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

const childcareGallery: SwipeGalleryItem[] = [
  {
    id: "childcare-facade-1",
    title: "Future Childcare Centre",
    category: "Development",
    image:
      "/images/childcare/childcare-facade/build centre.png",
    description:
      "A future centre visual created to help people understand the development before completion.",
  },
  {
    id: "childcare-facade-2",
    title: "Childcare Development View",
    category: "Development",
    image:
      "/images/childcare/childcare-facade/build centre3.png",
    description:
      "Another perspective of the proposed childcare development.",
  },
  {
    id: "childcare-facade-3",
    title: "Corner Site ELC",
    category: "Development",
    image:
      "/images/childcare/childcare-facade/corner site ELC.png",
    description:
      "A finished visual showing how the corner site could become an early learning centre.",
  },
];

export default function ImageLibraryPage() {
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

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Interactive Image Library
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                The original image
                <span className="block text-rust">
                  is only the starting point.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/60">
                Drag between before and after, swipe through project
                possibilities and open the work full screen.
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

      {/* BEFORE AFTER LIBRARY */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Before & After
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Drag the image yourself.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-black/55">
              Use your finger on mobile or your mouse on desktop. Tap any
              transformation to open it full screen and move through the rest
              of the gallery.
            </p>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-14 lg:grid-cols-2">
            {filteredTransformations.map((item, index) => (
              <article key={item.id}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="block w-full overflow-hidden rounded-[1.75rem] bg-[#f7f5f1] text-left shadow-soft"
                >
                  <BeforeAfterSlider
                    before={item.before}
                    after={item.after}
                    beforeAlt={`Original ${item.title}`}
                    afterAlt={`Enhanced ${item.title}`}
                  />
                </button>

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

      {/* CHILDCARE STORY */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Childcare Development
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Move through the project instead of looking at one image.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              Explore the site, future centre, interiors and outdoor
              environment as a visual development story.
            </p>
          </div>

          <ChildcareDevelopmentStory />
        </div>
      </section>

      {/* CHILDCARE FACADES */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <SwipeGallery
            items={childcareGallery}
            eyebrow="Childcare Development Views"
            heading="Swipe through more future centre visuals."
            description="These project images help developers, operators and stakeholders see the proposed centre from more than one perspective."
          />
        </div>
      </section>

      {/* COMMERCIAL OUTCOMES */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Commercial Property
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              One warehouse.
              <br />
              Seven different possibilities.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              Swipe through multiple ways the same commercial property can be
              presented to different buyers or tenants.
            </p>
          </div>

          <CommercialOutcomeGallery />
        </div>
      </section>

      {/* NEXT STEP */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                From Still To Motion
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Once the image works harder, make it move.
              </h2>
            </div>

            <div className="max-w-2xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/55">
                See how residential, childcare and commercial property imagery
                can become animated campaign content.
              </p>

              <Link
                href="/video-library"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Explore property animation
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
            You already have the media.
            <br />
            Get more campaign value from it.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the photography, renders or project imagery you already
            have and we&apos;ll help identify what can be transformed.
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
              href="/packages"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Compare packages
            </Link>
          </div>
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