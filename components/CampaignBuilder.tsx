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
  development?: boolean;
};

const options: CampaignOption[] = [
  {
    id: "lifestyle",
    title: "Lifestyle Moments",
    description:
      "Help someone picture the morning coffee, the family dinner, the quiet afternoon or the everyday life that could happen there.",
    weight: 1,
  },
  {
    id: "furniture",
    title: "Furniture & Styling",
    description:
      "Give an empty or lightly presented room purpose so people can understand how their life might fit inside it.",
    weight: 1,
  },
  {
    id: "lighting",
    title: "Light & Atmosphere",
    description:
      "Change the emotional feeling of a scene with warmer interiors, golden hour or evening atmosphere.",
    weight: 1,
  },
  {
    id: "landscape",
    title: "Outdoor Story",
    description:
      "Strengthen lawns, planting and outdoor areas so the exterior feels like somewhere people would actually spend time.",
    weight: 1,
  },
  {
    id: "people",
    title: "People & Activity",
    description:
      "Introduce believable life, movement and activity so the property feels occupied rather than simply photographed.",
    weight: 1,
  },
  {
    id: "animation",
    title: "Property Animation",
    description:
      "Turn selected stills into moving moments that catch attention and give the campaign another emotional beat.",
    weight: 2,
  },
  {
    id: "day-night",
    title: "Day To Night",
    description:
      "Take a familiar property image and give it a completely different mood, occasion and reason to be seen again.",
    weight: 2,
  },
  {
    id: "build",
    title: "Development Story",
    description:
      "Show the journey from what exists now to the future place people will eventually live, work, learn or gather.",
    weight: 4,
    development: true,
  },
  {
    id: "reel",
    title: "Finished Property Reel",
    description:
      "Bring several visual moments together into one short property story with a beginning, build and emotional close.",
    weight: 4,
    reel: true,
  },
];

type Recommendation = {
  name: string;
  href: string;
  price: string;
  description: string;
};

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

    const needsDevelopment = selectedOptions.some(
      (option) => option.development,
    );

    const needsReel = selectedOptions.some((option) => option.reel);

    if (needsDevelopment) {
      return {
        name: "Story Custom",
        href: "/packages/story-custom",
        price: "Custom scope",
        description:
          "For developments and more complex projects where the visual story needs to evolve from possibility through progress to the finished environment.",
      };
    }

    if (needsReel || score >= 9) {
      return {
        name: "The Full Story",
        href: "/packages/the-full-story",
        price: "$1,990 + GST",
        description:
          "For a complete listing campaign with enhanced visuals, several animated scenes, a finished Reel and a story that runs from Coming Soon through to Sold.",
      };
    }

    if (score >= 6) {
      return {
        name: "Story Deep Dive",
        href: "/packages/story-deep-dive",
        price: "$1,595 + GST",
        description:
          "For a property with several emotional and visual moments worth exploring through a five part narrative arc.",
      };
    }

    if (score >= 3) {
      return {
        name: "Story Builder",
        href: "/packages/story-builder",
        price: "$995 + GST",
        description:
          "For a listing that needs a small campaign with a clear progression from attention to property detail to lifestyle.",
      };
    }

    return {
      name: "Story Starter",
      href: "/packages/story-starter",
      price: "$595 + GST",
      description:
        "For beautiful property photography that needs something more to say. Five enhanced images, one moving moment and five individual story hooks.",
    };
  }, [selected]);

  return (
    <section className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        {/* OPTIONS */}
        <div className="p-6 md:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
              Build Your Story
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              What do you want people to imagine?
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-black/50">
              Choose the ideas that suit the property. We will show you which
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
                  className={`group rounded-[1.4rem] border p-5 text-left transition ${
                    active
                      ? "border-rust bg-rust text-white"
                      : "border-black/10 bg-[#f7f5f1] hover:border-rust hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p
                      className={`font-display text-xl font-semibold ${
                        active ? "text-white" : "text-ink"
                      }`}
                    >
                      {option.title}
                    </p>

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

        {/* RECOMMENDATION */}
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
              {recommendation.description}
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="font-display text-2xl leading-8 text-white/75">
                The goal is not simply more content.
              </p>

              <p className="mt-2 leading-7 text-white/45">
                It is to give someone another reason to picture themselves,
                their family, their business or their future inside the
                property.
              </p>
            </div>

            {selected.length > 0 && (
              <div className="mt-8 border-t border-white/10 pt-6">
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