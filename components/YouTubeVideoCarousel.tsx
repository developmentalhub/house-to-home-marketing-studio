"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import YouTubeProjectPlayer from "@/components/YouTubeProjectPlayer";

export type YouTubeVideoCarouselItem = {
  id: string;
  title: string;
  url: string;
  category?: string;
  description?: string;
  orientation?: "landscape" | "portrait";
};

type YouTubeVideoCarouselProps = {
  items: YouTubeVideoCarouselItem[];
  eyebrow?: string;
  heading?: string;
  description?: string;
};

export default function YouTubeVideoCarousel({
  items,
  eyebrow,
  heading,
  description,
}: YouTubeVideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = items[activeIndex];

  const progress = useMemo(() => {
    if (!items.length) {
      return 0;
    }

    return ((activeIndex + 1) / items.length) * 100;
  }, [activeIndex, items.length]);

  if (!items.length || !activeItem) {
    return null;
  }

  function previous() {
    setActiveIndex((current) =>
      current === 0 ? items.length - 1 : current - 1,
    );
  }

  function next() {
    setActiveIndex((current) =>
      current === items.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <div>
      {(eyebrow || heading || description) && (
        <div className="mb-8 max-w-4xl">
          {eyebrow && (
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
              {eyebrow}
            </p>
          )}

          {heading && (
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-6xl">
              {heading}
            </h2>
          )}

          {description && (
            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/50">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
          {/* ACTIVE VIDEO */}
          <div className="bg-ink p-3 md:p-4">
            <div className="overflow-hidden rounded-[1.5rem] bg-black">
              <YouTubeProjectPlayer
                url={activeItem.url}
                title={activeItem.title}
                orientation={
                  activeItem.orientation ?? "portrait"
                }
              />
            </div>
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-between p-7 md:p-9">
            <div>
              {activeItem.category && (
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                  {activeItem.category}
                </p>
              )}

              <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">
                {activeItem.title}
              </h3>

              {activeItem.description && (
                <p className="mt-4 leading-8 text-black/50">
                  {activeItem.description}
                </p>
              )}
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous video"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white transition hover:bg-ink hover:text-white"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next video"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white transition hover:bg-rust"
                >
                  <ArrowRight size={18} />
                </button>

                <p className="ml-2 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                  {activeIndex + 1} of {items.length}
                </p>
              </div>

              <div className="mt-6 h-[2px] overflow-hidden bg-black/10">
                <div
                  className="h-full bg-rust transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE FRIENDLY VIDEO STRIP */}
        <div className="border-t border-black/10 bg-[#f7f5f1] p-4 md:p-5">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1">
            {items.map((item, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`min-w-[72%] snap-center rounded-[1rem] border bg-white p-4 text-left transition sm:min-w-[240px] md:min-w-[270px] ${
                    active
                      ? "border-rust shadow-sm"
                      : "border-black/10"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {item.category && (
                        <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-rust">
                          {item.category}
                        </p>
                      )}

                      <p className="mt-2 font-display text-lg font-semibold leading-tight">
                        {item.title}
                      </p>
                    </div>

                    <span className="shrink-0 font-mono text-[9px] font-semibold text-black/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}