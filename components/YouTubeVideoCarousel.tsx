"use client";

import { useState } from "react";
import { Play } from "lucide-react";

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

function getYouTubeId(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }

    if (parsed.pathname.startsWith("/shorts/")) {
      return parsed.pathname.split("/shorts/")[1]?.split("/")[0] ?? "";
    }

    return parsed.searchParams.get("v") ?? "";
  } catch {
    return "";
  }
}

export default function YouTubeVideoCarousel({
  items,
  eyebrow,
  heading,
  description,
}: YouTubeVideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) {
    return null;
  }

  const activeItem = items[activeIndex];

  if (!activeItem) {
    return null;
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
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
              {heading}
            </h2>
          )}

          {description && (
            <p className="mt-4 max-w-3xl text-lg leading-8 text-black/50">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        {/* SMALL ACTIVE PLAYER */}
        <div className="mx-auto w-full max-w-[420px] lg:mx-0">
          <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-ink p-2 shadow-soft">
            <div className="overflow-hidden rounded-[1.1rem] bg-black">
              <YouTubeProjectPlayer
                key={activeItem.id}
                url={activeItem.url}
                title={activeItem.title}
                orientation={activeItem.orientation ?? "portrait"}
              />
            </div>
          </div>

          <div className="mt-4 px-1">
            {activeItem.category && (
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                {activeItem.category}
              </p>
            )}

            <h3 className="mt-2 font-display text-2xl font-semibold">
              {activeItem.title}
            </h3>

            {activeItem.description && (
              <p className="mt-3 text-sm leading-7 text-black/50">
                {activeItem.description}
              </p>
            )}
          </div>
        </div>

        {/* REEL FEED */}
        <div>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-black/35">
                Video Library
              </p>

              <p className="mt-2 text-sm text-black/45">
                Choose a video to play
              </p>
            </div>

            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/30">
              {items.length} videos
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
            {items.map((item, index) => {
              const videoId = getYouTubeId(item.url);
              const thumbnail = videoId
                ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
                : null;

              const active = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group overflow-hidden rounded-[1.2rem] border bg-white text-left transition ${
                    active
                      ? "border-rust shadow-soft"
                      : "border-black/10 hover:border-rust"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden bg-neutral-900 ${
                      item.orientation === "landscape"
                        ? "aspect-video"
                        : "aspect-[9/13]"
                    }`}
                  >
                    {thumbnail ? (
                      <img
                        src={thumbnail}
                        alt=""
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-ink" />
                    )}

                    <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/5" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full backdrop-blur transition ${
                          active
                            ? "bg-rust text-white"
                            : "bg-black/70 text-white group-hover:bg-rust"
                        }`}
                      >
                        <Play
                          size={17}
                          fill="currentColor"
                          className="ml-0.5"
                        />
                      </span>
                    </div>

                    <div className="absolute left-3 top-3 rounded-full bg-black/65 px-2.5 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="p-3.5">
                    {item.category && (
                      <p className="truncate font-mono text-[7px] font-semibold uppercase tracking-[0.13em] text-rust">
                        {item.category}
                      </p>
                    )}

                    <p className="mt-1.5 line-clamp-2 font-display text-base font-semibold leading-tight">
                      {item.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.14em] text-black/30">
            Tap any video to load it in the player
          </p>
        </div>
      </div>
    </div>
  );
}