"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
} from "lucide-react";

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
    title: "Lifestyle",
    description:
      "Add believable people, pets, entertaining and lived in moments.",
    weight: 1,
  },
  {
    id: "furniture",
    title: "Furniture & Styling",
    description:
      "Furnish empty spaces or refine the styling of existing rooms.",
    weight: 1,
  },
  {
    id: "lighting",
    title: "Lighting",
    description:
      "Create warmer interiors, golden hour or day to night transformations.",
    weight: 1,
  },
  {
    id: "landscape",
    title: "Landscape",
    description:
      "Improve lawns, planting, outdoor areas and the surrounding environment.",
    weight: 1,
  },
  {
    id: "people",
    title: "People & Activity",
    description:
      "Introduce families, cars, pedestrians, pets and believable movement.",
    weight: 1,
  },
  {
    id: "animation",
    title: "Property Animation",
    description:
      "Turn selected still images into moving scenes with camera motion and depth.",
    weight: 2,
  },
  {
    id: "day-night",
    title: "Day To Night",
    description:
      "Animate the property through daylight, sunset and evening.",
    weight: 2,
  },
  {
    id: "build",
    title: "Build Transformation",
    description:
      "Show demolition, construction, landscaping and the finished development.",
    weight: 4,
    development: true,
  },
  {
    id: "reel",
    title: "Finished Property Reel",
    description:
      "Combine multiple enhanced and animated scenes into one finished vertical property story.",
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

    const needsReel = selectedOptions.some(
      (option) => option.reel,
    );

    if (needsDevelopment) {
      return {
        name: "Development Campaign",
        href: "/packages/development-campaign",
        price: "Custom",
        description:
          "Best suited to demolition, build stages, future developments and more complex project sequences.",
      };
    }

    if (needsReel || score >= 9) {
      return {
        name: "Property Reel Campaign",
        href: "/packages/property-reel-campaign",
        price: "$1,590 + GST",
        description:
          "Best suited to campaigns that need multiple enhanced scenes, animation and a finished vertical Property Reel.",
      };
    }

    if (score >= 6) {
      return {
        name: "Premium Campaign",
        href: "/packages/premium-campaign",
        price: "$1,295 + GST",
        description:
          "Best suited to campaigns that need more enhanced images and several animated scenes.",
      };
    }

    if (score >= 3) {
      return {
        name: "Property Campaign",
        href: "/packages/property-campaign",
        price: "$895 + GST",
        description:
          "Best suited to listings that need a stronger mix of enhanced imagery and motion.",
      };
    }

    return {
      name: "Property Refresh",
      href: "/packages/property-refresh",
      price: "$495 + GST",
      description:
        "A simple starting point for giving existing property photography more campaign life.",
    };
  }, [selected]);

  return (
    <section className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        {/* OPTIONS */}
        <div className="p-6 md:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
              Build Your Campaign
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Choose the transformations you want.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-black/50">
              Tap the ideas that suit your property and we&apos;ll show you
              which package is the closest fit.
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
                    <div>
                      <p
                        className={`font-display text-xl font-semibold ${
                          active ? "text-white" : "text-ink"
                        }`}
                      >
                        {option.title}
                      </p>
                    </div>

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
                      active ? "text-white/70" : "text-black/50"
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
              Recommended Package
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

            <p className="mt-6 max-w-xl leading-8 text-white/50">
              {recommendation.description}
            </p>

            {selected.length > 0 && (
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/30">
                  Your selections
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {options
                    .filter((option) =>
                      selected.includes(option.id),
                    )
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
              View recommended package
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/enquire"
              className="mt-3 flex items-center justify-between rounded-full border border-white/15 px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Start a project
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