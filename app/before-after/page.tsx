"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MoveHorizontal } from "lucide-react";
import { useState } from "react";

type BeforeAfterPair = {
  title: string;
  category: string;
  description: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

const comparisons: BeforeAfterPair[] = [
  {
    title: "Kitchen lifestyle transformation",
    category: "Lifestyle enhancement",
    description:
      "A polished kitchen becomes part of an everyday story, helping potential buyers imagine gathering, cooking and living in the space.",
    before: "/property-images/website/staging/kitchen-before.jpeg",
    after:
      "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
    beforeAlt:
      "Original modern kitchen property photograph before lifestyle enhancement",
    afterAlt:
      "Modern kitchen transformed with warm lifestyle-focused real estate marketing",
  },
  {
    title: "Bedroom lifestyle transformation",
    category: "Lifestyle enhancement",
    description:
      "A beautiful bedroom image becomes a more personal visual story that helps buyers imagine quiet mornings and everyday life in the home.",
    before:
      "/property-images/website/lifestyle/bedroom-before.jpeg",
    after:
      "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
    beforeAlt:
      "Original bedroom property photograph before lifestyle enhancement",
    afterAlt:
      "Bedroom transformed with warm lifestyle-focused real estate marketing",
  },
  {
    title: "Bathroom lifestyle transformation",
    category: "Lifestyle enhancement",
    description:
      "The room’s finishes, lighting and calm atmosphere are brought forward through a warmer, more life-centred image.",
    before:
      "/property-images/website/lifestyle/bathroom-before.jpeg",
    after:
      "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
    beforeAlt:
      "Original bathroom property photograph before lifestyle enhancement",
    afterAlt:
      "Bathroom transformed with warm lifestyle-focused real estate marketing",
  },
  {
    title: "Foyer lifestyle transformation",
    category: "Lifestyle enhancement",
    description:
      "A standard entry photograph becomes a welcoming arrival moment with warmth, movement and a stronger sense of home.",
    before:
      "/property-images/website/lifestyle/foyer-before.jpeg",
    after:
      "/property-images/website/lifestyle/foyer-after.jpeg",
    beforeAlt:
      "Original foyer property photograph before lifestyle enhancement",
    afterAlt:
      "Foyer transformed with warm lifestyle-focused real estate marketing",
  },
  {
    title: "Kitchen virtual staging",
    category: "Virtual staging",
    description:
      "Compare the original kitchen photograph with a professionally staged version designed to communicate warmth, scale and function.",
    before: "/property-images/website/staging/kitchen-before.jpeg",
    after: "/property-images/website/staging/kitchen-after.jpeg",
    beforeAlt:
      "Original kitchen property photograph before virtual staging",
    afterAlt:
      "Kitchen after professional virtual staging for real estate marketing",
  },
  {
    title: "Living room virtual staging",
    category: "Virtual staging",
    description:
      "Furniture and styling help buyers understand how the living room could function without altering the property’s structure.",
    before:
      "/property-images/website/staging/living-room-before.jpeg",
    after:
      "/property-images/website/staging/living-room-after.jpeg",
    beforeAlt:
      "Original living room property photograph before virtual staging",
    afterAlt:
      "Living room after professional virtual staging for real estate marketing",
  },
];

function ComparisonSlider({
  comparison,
}: {
  comparison: BeforeAfterPair;
}) {
  const [position, setPosition] = useState(50);

  return (
    <article>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-sand shadow-soft">
        <Image
          src={comparison.after}
          alt={comparison.afterAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 1180px"
          className="object-cover"
          priority={comparison.title === "Kitchen lifestyle transformation"}
        />

        <div
          className="absolute inset-0 z-10"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <Image
            src={comparison.before}
            alt={comparison.beforeAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1180px"
            className="object-cover"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-20 w-[3px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.35)]"
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white text-ink shadow-lg">
            <MoveHorizontal size={21} />
          </div>
        </div>

        <div className="pointer-events-none absolute left-4 top-4 z-30 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink shadow-sm">
          Original
        </div>

        <div className="pointer-events-none absolute right-4 top-4 z-30 rounded-full bg-ink/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
          House to Home
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Compare the original and transformed images for ${comparison.title}`}
          className="absolute inset-0 z-40 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="px-2 pb-3 pt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">
          {comparison.category}
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          {comparison.title}
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-black/60">
          {comparison.description}
        </p>
      </div>
    </article>
  );
}

export default function BeforeAfterPage() {
  return (
    <main>
      <section className="section-space bg-cream">
        <div className="container-shell">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
            Before and after
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            See how a standard property image becomes part of a story.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/60">
            Drag the centre handle across each image to compare the original
            property photograph with the warmer House to Home transformation.
          </p>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell grid gap-16">
          {comparisons.map((comparison) => (
            <ComparisonSlider
              key={comparison.title}
              comparison={comparison}
            />
          ))}
        </div>
      </section>

      <section className="section-space bg-ink text-white">
        <div className="container-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
              Your listing could be next
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Send us the property photographs you already have.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              We will help you choose the right combination of staging,
              lifestyle scenes, feature highlights and social media content.
            </p>
          </div>

          <Link
            href="/enquire"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink"
          >
            Request a quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}