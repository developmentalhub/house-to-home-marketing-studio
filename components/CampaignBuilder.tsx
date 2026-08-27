"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ArrowRight, Check } from "lucide-react";

type CampaignOption = {
  id: string;
  title: string;
  description: string;
  weight: number;
  reel?: boolean;
  custom?: boolean;
};

type Recommendation = {
  name: string;
  href: string;
  price: string;
  summary: string;
  images: string;
  animation: string;
  story: string;
};

const options: CampaignOption[] = [
  {
    id: "people",
    title: "People & Lifestyle",
    description:
      "Add believable people and everyday moments that help someone imagine life inside the property.",
    weight: 1,
  },
  {
    id: "furniture",
    title: "Furniture & Styling",
    description:
      "Add or refine furniture, appliances and décor while keeping the architecture and layout accurate.",
    weight: 1,
  },
  {
    id: "cars",
    title: "Cars & Activity",
    description:
      "Add appropriate vehicles, people and movement to exterior scenes where they strengthen the story.",
    weight: 1,
  },
  {
    id: "landscape",
    title: "Landscape",
    description:
      "Enhance lawns, planting and surrounding atmosphere while keeping the built property true.",
    weight: 1,
  },
  {
    id: "lighting",
    title: "Lighting & Atmosphere",
    description:
      "Create warmer interiors, changing daylight, dusk or evening atmosphere around the existing property.",
    weight: 1,
  },
  {
    id: "animation",
    title: "Property Animation",
    description:
      "Turn selected property images into moving scenes of up to 10 seconds each.",
    weight: 2,
  },
  {
    id: "day-night",
    title: "Day To Night",
    description:
      "Transform a property image through daylight, sunset and evening atmosphere.",
    weight: 2,
  },
  {
    id: "reel",
    title: "Finished Property Reel",
    description:
      "Bring selected enhanced and animated moments together into a finished vertical property story.",
    weight: 4,
    reel: true,
  },
  {
    id: "development",
    title: "Development Story",
    description:
      "Create a custom story around supplied project imagery, progress, future use and completed lifestyle.",
    weight: 4,
    custom: true,
  },
];

export default function CampaignBuilder() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggleOption(id: string) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  const recommendation = useMemo<Recommendation>(() => {
    const selectedOptions = options.filter((option) =>
      selected.includes(option.id),
    );

    const score = selectedOptions.reduce(
      (total, option) => total + option.weight,
      0,
    );

    const needsCustom = selectedOptions.some((option) => option.custom);
    const needsReel = selectedOptions.some((option) => option.reel);

    if (needsCustom) {
      return {
        name: "Story Custom",
        href: "/packages/story-custom",
        price: "Custom scope",
        summary:
          "For projects that need a visual and narrative scope built around the property rather than a standard package.",
        images: "Custom number of enhanced property images",
        animation:
          "Custom number of animated scenes, typically up to 10 seconds each",
        story: "Custom narrative, hooks, captions and sequencing",
      };
    }

    if (needsReel || score >= 9) {
      return {
        name: "The Full Story",
        href: "/packages/the-full-story",
        price: "$1,990 + GST",
        summary:
          "For a complete listing campaign that needs visual depth, multiple moving moments and one connected story.",
        images: "12 enhanced property images",
        animation:
          "3 to 4 animations up to 10 seconds each, up to 40 seconds total, plus a finished 20 to 30 second vertical Reel",
        story:
          "Complete lifecycle narrative from Coming Soon through to Sold",
      };
    }

    if (score >= 6) {
      return {
        name: "Story Deep Dive",
        href: "/packages/story-deep-dive",
        price: "$1,595 + GST",
        summary:
          "For a property with several strong rooms, features and lifestyle moments that deserve their own place in the campaign.",
        images: "12 enhanced property images",
        animation:
          "3 animations up to 10 seconds each, up to 30 seconds total",
        story:
          "5 post narrative arc from arrival through to emotional close",
      };
    }

    if (score >= 3) {
      return {
        name: "Story Builder",
        href: "/packages/story-builder",
        price: "$995 + GST",
        summary:
          "For a campaign that needs several connected moments rather than unrelated posts.",
        images: "8 enhanced property images",
        animation:
          "2 animations up to 10 seconds each, up to 20 seconds total",
        story: "3 post sequence from hook to property to lifestyle",
      };
    }

    return {
      name: "Story Starter",
      href: "/packages/story-starter",
      price: "$595 + GST",
      summary:
        "For beautiful property photography that needs a stronger reason for someone to stop and feel something.",
      images: "5 enhanced property images",
      animation: "1 animation up to 10 seconds",
      story: "5 individual story hooks or caption angles",
    };
  }, [selected]);

  return (
    <section className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
      <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
        <div className="p-6 md:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
              Build Your Story
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              What do you want people
              <span className="block text-rust">to imagine?</span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-black/50">
              Choose the ideas that suit the property and we’ll show you which
              story package is the closest fit.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {options.map((option) => {
              const active = selected.includes(option.id);

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => toggleOption(option.id)}
                  className={`group rounded-[1.5rem] border p-5 text-left transition ${
                    active
                      ? "border-rust bg-rust text-white"
                      : "border-black/10 bg-[#f7f5f1] hover:border-rust hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className={`font-display text-xl font-semibold ${
                        active ? "text-white" : "text-ink"
                      }`}
                    >
                      {option.title}
                    </h3>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${
                        active
                          ? "border-white bg-white text-rust"
                          : "border-black/10 bg-white text-black/20 group-hover:border-rust group-hover:text-rust"
                      }`}
                    >
                      {active && <Check size={15} />}
                    </div>
                  </div>

                  <p
                    className={`mt-3 text-sm leading-6 ${
                      active ? "text-white/75" : "text-black/50"
                    }`}
                  >
                    {option.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-between bg-ink p-6 text-white md:p-8 lg:p-10">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brassBright">
              Your Closest Story
            </p>

            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">
              {selected.length} idea{selected.length === 1 ? "" : "s"} selected
            </p>

            <h3 className="mt-8 font-display text-4xl font-semibold leading-tight md:text-5xl">
              {recommendation.name}
            </h3>

            <p className="mt-4 font-display text-3xl font-semibold text-brassBright">
              {recommendation.price}
            </p>

            <p className="mt-6 max-w-xl leading-8 text-white/55">
              {recommendation.summary}
            </p>

            <div className="mt-8 space-y-3 border-t border-white/10 pt-7">
              <div className="flex items-start gap-3">
                <Check
                  size={16}
                  className="mt-1 shrink-0 text-brassBright"
                />
                <p className="leading-7 text-white/60">
                  {recommendation.images}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Check
                  size={16}
                  className="mt-1 shrink-0 text-brassBright"
                />
                <p className="leading-7 text-white/60">
                  {recommendation.animation}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Check
                  size={16}
                  className="mt-1 shrink-0 text-brassBright"
                />
                <p className="leading-7 text-white/60">
                  {recommendation.story}
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                What Enhanced Images Can Include
              </p>

              <p className="mt-4 leading-7 text-white/55">
                We keep the architecture, layout and defining property elements
                accurate, then build the life around them.
              </p>

              <p className="mt-4 leading-7 text-white/45">
                Depending on the scene, that can include people, furniture,
                appliances, décor, cars, landscaping, lighting and atmosphere.
              </p>
            </div>

            {selected.length > 0 && (
              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/30">
                  Your Story Ideas
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {options
                    .filter((option) => selected.includes(option.id))
                    .map((option) => (
                      <span
                        key={option.id}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/65"
                      >
                        {option.title}
                      </span>
                    ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-10">
            <Link
              href={recommendation.href}
              className="flex items-center justify-between rounded-full bg-white px-6 py-4 font-semibold text-ink transition hover:bg-brassBright"
            >
              Explore {recommendation.name}
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/enquire"
              className="mt-3 flex items-center justify-between rounded-full border border-white/15 px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Show us your property
              <ArrowRight size={17} />
            </Link>

            {selected.length > 0 && (
              <button
                type="button"
                onClick={() => setSelected([])}
                className="mt-5 text-sm font-semibold text-white/35 transition hover:text-white"
              >
                Clear selections
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}