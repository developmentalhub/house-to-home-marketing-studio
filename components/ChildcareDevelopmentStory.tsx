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

const stages = [
  {
    id: "existing-site",
    title: "Existing Site",
    category: "Stage 01",
    image:
      "/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg",
    description:
      "Start with the property as it exists today.",
  },
  {
    id: "future-centre",
    title: "Future Childcare Centre",
    category: "Stage 02",
    image:
      "/images/childcare/before-after-childcare/childcare-centre-new-build-after.png",
    description:
      "Show the completed centre before construction is finished.",
  },
  {
    id: "corner-site",
    title: "Corner Site Development",
    category: "Stage 03",
    image:
      "/images/childcare/before-after-childcare/corner-site-childcare-after.png",
    description:
      "Give developers and stakeholders another view of the future centre.",
  },
  {
    id: "interior-one",
    title: "Interior Room 01",
    category: "Stage 04",
    image:
      "/images/childcare/before-after-childcare/room1-after.png",
    description:
      "Bring the internal environment to life and show how the finished room can feel.",
  },
  {
    id: "interior-two",
    title: "Interior Room 02",
    category: "Stage 05",
    image:
      "/images/childcare/before-after-childcare/room2-after.png",
    description:
      "Show another part of the childcare environment as a finished space.",
  },
  {
    id: "interior-three",
    title: "Interior Room 03",
    category: "Stage 06",
    image:
      "/images/childcare/before-after-childcare/room3-after.png",
    description:
      "Create a more complete sense of the centre before opening day.",
  },
  {
    id: "outdoor-yard",
    title: "Outdoor Play Area",
    category: "Stage 07",
    image:
      "/images/childcare/before-after-childcare/Rearyard1-After.png",
    description:
      "Finish the story with a landscaped and active outdoor environment.",
  },
];

const lightboxItems: MediaLightboxItem[] = stages.map((stage) => ({
  id: stage.id,
  title: stage.title,
  category: stage.category,
  description: stage.description,
  image: stage.image,
}));

export default function ChildcareDevelopmentStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] =
    useState<number | null>(null);

  const activeStage = stages[activeIndex];

  function previous() {
    setActiveIndex((current) =>
      current === 0 ? stages.length - 1 : current - 1,
    );
  }

  function next() {
    setActiveIndex((current) =>
      current === stages.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <>
      <section className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
            <Image
              src={activeStage.image}
              alt={activeStage.title}
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/65 to-transparent" />

            <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-ink shadow-sm">
              {activeStage.category}
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(activeIndex)}
              aria-label={`Open ${activeStage.title} larger`}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-rust"
            >
              <Maximize2 size={17} />
            </button>

            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55">
                Childcare development story
              </p>

              <h3 className="mt-2 font-display text-3xl font-semibold text-white">
                {activeStage.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-between p-7 md:p-9">
            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                {activeStage.category}
              </p>

              <h3 className="mt-3 font-display text-3xl font-semibold">
                {activeStage.title}
              </h3>

              <p className="mt-4 leading-8 text-black/50">
                {activeStage.description}
              </p>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous stage"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white transition hover:bg-ink hover:text-white"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next stage"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white transition hover:bg-rust"
                >
                  <ArrowRight size={18} />
                </button>

                <p className="ml-2 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                  {activeIndex + 1} of {stages.length}
                </p>
              </div>

              <div className="mt-6 h-[2px] overflow-hidden bg-black/10">
                <div
                  className="h-full bg-rust transition-all duration-500"
                  style={{
                    width: `${
                      ((activeIndex + 1) / stages.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 bg-[#f7f5f1] p-4 md:p-5">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1">
            {stages.map((stage, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group min-w-[170px] snap-start overflow-hidden rounded-[1rem] border bg-white text-left transition sm:min-w-[200px] ${
                    active
                      ? "border-rust shadow-sm"
                      : "border-black/10"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      sizes="200px"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-3">
                    <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-rust">
                      {stage.category}
                    </p>

                    <p className="mt-1 font-display text-base font-semibold">
                      {stage.title}
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