"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
} from "lucide-react";

import MediaLightbox, {
  type MediaLightboxItem,
} from "@/components/MediaLightbox";

const outcomes = [
  {
    id: "warehouse-1",
    title: "Warehouse Possibility 01",
    category: "Commercial Use Case",
    image:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-1.png",
    description:
      "Show one possible commercial use for the same warehouse.",
  },
  {
    id: "warehouse-2",
    title: "Warehouse Possibility 02",
    category: "Commercial Use Case",
    image:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-2.png",
    description:
      "Use the same property image to speak to a different buyer or tenant.",
  },
  {
    id: "warehouse-3",
    title: "Warehouse Possibility 03",
    category: "Commercial Use Case",
    image:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-3.png",
    description:
      "Show another way the space could be occupied and used.",
  },
  {
    id: "warehouse-4",
    title: "Warehouse Possibility 04",
    category: "Commercial Use Case",
    image:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-4.png",
    description:
      "Help prospective tenants imagine their operation inside the property.",
  },
  {
    id: "warehouse-5",
    title: "Warehouse Possibility 05",
    category: "Commercial Use Case",
    image:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-5.png",
    description:
      "Turn the same original property photograph into another sales story.",
  },
  {
    id: "warehouse-6",
    title: "Warehouse Possibility 06",
    category: "Commercial Use Case",
    image:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-6.png",
    description:
      "Give the same warehouse relevance to another industry or business type.",
  },
  {
    id: "warehouse-7",
    title: "Warehouse Possibility 07",
    category: "Commercial Use Case",
    image:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-7.png",
    description:
      "Show how many different marketing directions can come from one supplied image.",
  },
];

const lightboxItems: MediaLightboxItem[] = outcomes.map(
  (item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    description: item.description,
    image: item.image,
  }),
);

export default function CommercialOutcomeGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] =
    useState<number | null>(null);

  const activeOutcome = outcomes[activeIndex];

  function previous() {
    setActiveIndex((current) =>
      current === 0
        ? outcomes.length - 1
        : current - 1,
    );
  }

  function next() {
    setActiveIndex((current) =>
      current === outcomes.length - 1
        ? 0
        : current + 1,
    );
  }

  return (
    <>
      <section className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
        {/* MAIN VIEWER */}
        <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
            <Image
              src={activeOutcome.image}
              alt={activeOutcome.title}
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/65 to-transparent" />

            <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-ink shadow-sm">
              Outcome {activeIndex + 1} of {outcomes.length}
            </div>

            <button
              type="button"
              onClick={() =>
                setLightboxIndex(activeIndex)
              }
              aria-label="Open image larger"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-rust"
            >
              <Maximize2 size={17} />
            </button>

            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55">
                Same warehouse. Different possibility.
              </p>

              <h3 className="mt-2 font-display text-3xl font-semibold text-white">
                {activeOutcome.title}
              </h3>
            </div>
          </div>

          {/* COPY */}
          <div className="flex flex-col justify-between p-7 md:p-9">
            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                {activeOutcome.category}
              </p>

              <h3 className="mt-3 font-display text-3xl font-semibold">
                {activeOutcome.title}
              </h3>

              <p className="mt-4 leading-8 text-black/50">
                {activeOutcome.description}
              </p>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous outcome"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white transition hover:bg-ink hover:text-white"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next outcome"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white transition hover:bg-rust"
                >
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="mt-6 h-[2px] overflow-hidden bg-black/10">
                <div
                  className="h-full bg-rust transition-all duration-500"
                  style={{
                    width: `${
                      ((activeIndex + 1) /
                        outcomes.length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* THUMBNAIL STRIP */}
        <div className="border-t border-black/10 bg-[#f7f5f1] p-4 md:p-5">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1">
            {outcomes.map((outcome, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={outcome.id}
                  type="button"
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  className={`group min-w-[160px] snap-start overflow-hidden rounded-[1rem] border bg-white text-left transition sm:min-w-[190px] ${
                    active
                      ? "border-rust shadow-sm"
                      : "border-black/10"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={outcome.image}
                      alt={outcome.title}
                      fill
                      sizes="190px"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-3">
                    <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-rust">
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </p>

                    <p className="mt-1 font-display text-base font-semibold">
                      {outcome.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <MediaLightbox
        items={lightboxItems}
        openIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={(index) => {
          setLightboxIndex(index);
          setActiveIndex(index);
        }}
      />
    </>
  );
}