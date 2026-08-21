"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
} from "lucide-react";

import MediaLightbox, {
  type MediaLightboxItem,
} from "@/components/MediaLightbox";

export type SwipeGalleryItem = {
  id: string;
  title: string;
  category?: string;
  description?: string;
  image: string;
};

type SwipeGalleryProps = {
  items: SwipeGalleryItem[];
  heading?: string;
  eyebrow?: string;
  description?: string;
};

export default function SwipeGallery({
  items,
  heading,
  eyebrow,
  description,
}: SwipeGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] =
    useState<number | null>(null);

  const activeItem = items[activeIndex];

  const lightboxItems = useMemo<MediaLightboxItem[]>(
    () =>
      items.map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category,
        description: item.description,
        image: item.image,
      })),
    [items],
  );

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
    <>
      <div>
        {(eyebrow || heading || description) && (
          <div className="mb-8 max-w-3xl">
            {eyebrow && (
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                {eyebrow}
              </p>
            )}

            {heading && (
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
                {heading}
              </h2>
            )}

            {description && (
              <p className="mt-4 max-w-2xl leading-8 text-black/50">
                {description}
              </p>
            )}
          </div>
        )}

        {/* MAIN VIEWER */}
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-ink shadow-sm">
              {activeIndex + 1} of {items.length}
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(activeIndex)}
              aria-label={`Open ${activeItem.title} larger`}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-rust"
            >
              <Maximize2 size={17} />
            </button>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              {activeItem.category && (
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  {activeItem.category}
                </p>
              )}

              <h3 className="mt-2 font-display text-3xl font-semibold">
                {activeItem.title}
              </h3>
            </div>
          </div>

          {/* DETAILS */}
          <div className="flex flex-col gap-6 p-6 md:flex-row md:items-end md:justify-between md:p-8">
            <div className="max-w-2xl">
              {activeItem.description && (
                <p className="leading-8 text-black/50">
                  {activeItem.description}
                </p>
              )}
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous image"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white transition hover:bg-ink hover:text-white"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white transition hover:bg-rust"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* SWIPE STRIP */}
          <div className="border-t border-black/10 bg-[#f7f5f1] p-4 md:p-5">
            <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1">
              {items.map((item, index) => {
                const active = index === activeIndex;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group min-w-[72%] snap-center overflow-hidden rounded-[1rem] border bg-white text-left transition sm:min-w-[220px] md:min-w-[250px] ${
                      active
                        ? "border-rust shadow-sm"
                        : "border-black/10"
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="250px"
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="p-3">
                      {item.category && (
                        <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-rust">
                          {item.category}
                        </p>
                      )}

                      <p className="mt-1 font-display text-base font-semibold">
                        {item.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

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