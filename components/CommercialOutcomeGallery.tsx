"use client";

import { useMemo, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
} from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MediaLightbox from "@/components/MediaLightbox";

type Outcome = {
  id: string;
  title: string;
  category: string;
  description: string;
  before: string;
  after: string;
};

const outcomes: Outcome[] = [
  {
    id: "gym",
    title: "Gym & Fitness",
    category: "Fitness",
    description:
      "Show training zones, equipment, people and activity so a fitness operator can picture the warehouse in use.",
    before:
      "/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png",
    after:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png",
  },
  {
    id: "mechanic-one",
    title: "Mechanic Workshop",
    category: "Automotive",
    description:
      "Turn the empty warehouse into a working automotive environment with vehicles, equipment and activity.",
    before:
      "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
    after:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png",
  },
  {
    id: "mechanic-two",
    title: "Mechanic Workshop Alternative",
    category: "Automotive",
    description:
      "A second workshop direction showing how the same commercial property can support another campaign visual.",
    before:
      "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
    after:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic2.png",
  },
  {
    id: "logistics",
    title: "Logistics & Distribution",
    category: "Logistics",
    description:
      "Show stock, storage and operational activity so logistics businesses can understand the property more quickly.",
    before:
      "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
    after:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png",
  },
  {
    id: "studio",
    title: "Photography Studio",
    category: "Creative",
    description:
      "Show shooting areas, lighting, equipment and people to make the warehouse relevant to creative operators.",
    before:
      "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
    after:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png",
  },
  {
    id: "mancave-one",
    title: "Private Mancave",
    category: "Private Lifestyle",
    description:
      "Show how an industrial property could become a private collection, entertainment or lifestyle environment.",
    before:
      "/images/commercial/warehouse-multiple-afters/warehouse-before-mancave.png",
    after:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-mancave1.png",
  },
  {
    id: "mancave-two",
    title: "Private Mancave Alternative",
    category: "Private Lifestyle",
    description:
      "A second private use concept showing another possible visual story for the same property.",
    before:
      "/images/commercial/warehouse-multiple-afters/warehouse-before-mancave.png",
    after:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-mancave2.png",
  },
];

export default function CommercialOutcomeGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeOutcome = outcomes[activeIndex];

  const lightboxItems = useMemo(
    () =>
      outcomes.map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category,
        description: item.description,
        before: item.before,
        after: item.after,
      })),
    []
  );

  function previousOutcome() {
    setActiveIndex((current) =>
      current === 0 ? outcomes.length - 1 : current - 1
    );
  }

  function nextOutcome() {
    setActiveIndex((current) =>
      current === outcomes.length - 1 ? 0 : current + 1
    );
  }

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        {/* SELECTOR */}
        <div className="lg:sticky lg:top-28">
          <div className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-4 md:p-5">
            <div className="mb-4 flex items-center justify-between gap-4 px-2">
              <div>
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Choose An Audience
                </p>

                <p className="mt-2 text-sm leading-6 text-black/45">
                  Same property. Different campaign story.
                </p>
              </div>

              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/30">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(outcomes.length).padStart(2, "0")}
              </p>
            </div>

            <div className="space-y-2">
              {outcomes.map((outcome, index) => {
                const active = activeIndex === index;

                return (
                  <button
                    key={outcome.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group grid w-full grid-cols-[42px_1fr_auto] items-center gap-3 rounded-[1.25rem] border px-4 py-4 text-left transition ${
                      active
                        ? "border-ink bg-ink text-white"
                        : "border-black/10 bg-white hover:border-rust"
                    }`}
                  >
                    <span
                      className={`font-mono text-[9px] ${
                        active ? "text-brassBright" : "text-rust"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <p className="font-display text-lg font-semibold">
                        {outcome.title}
                      </p>

                      <p
                        className={`mt-1 text-xs ${
                          active ? "text-white/40" : "text-black/35"
                        }`}
                      >
                        {outcome.category}
                      </p>
                    </div>

                    <ArrowRight
                      size={16}
                      className={`transition group-hover:translate-x-1 ${
                        active ? "text-brassBright" : "text-rust"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ACTIVE OUTCOME */}
        <div>
          <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                {activeOutcome.category}
              </p>

              <h3 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
                {activeOutcome.title}
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-black/50">
                {activeOutcome.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(activeIndex)}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold transition hover:border-rust hover:text-rust"
            >
              <Maximize2 size={16} />
              Full screen
            </button>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-soft">
            <BeforeAfterSlider
              before={activeOutcome.before}
              after={activeOutcome.after}
              beforeAlt={`Vacant commercial property before ${activeOutcome.title.toLowerCase()} visualisation`}
              afterAlt={`Commercial property visualised as ${activeOutcome.title.toLowerCase()}`}
            />
          </div>

          <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-black/30">
              Drag across the image to compare
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousOutcome}
                aria-label="Previous commercial outcome"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition hover:border-rust hover:text-rust"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextOutcome}
                aria-label="Next commercial outcome"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition hover:bg-rust"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE QUICK STRIP */}
      <div className="mt-8 overflow-x-auto pb-2 lg:hidden">
        <div className="flex min-w-max gap-3">
          {outcomes.map((outcome, index) => (
            <button
              key={`mobile-${outcome.id}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`w-[210px] shrink-0 rounded-[1.4rem] border p-5 text-left transition ${
                activeIndex === index
                  ? "border-rust bg-white shadow-soft"
                  : "border-black/10 bg-[#f7f5f1]"
              }`}
            >
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-rust">
                {outcome.category}
              </p>

              <p className="mt-3 font-display text-xl font-semibold">
                {outcome.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      <MediaLightbox
        items={lightboxItems}
        openIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={(index) => setActiveIndex(index)}
      />
    </>
  );
}