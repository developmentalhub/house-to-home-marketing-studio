"use client";

import { useEffect, useMemo, useState } from "react";

type YouTubeProjectPlayerProps = {
  url: string;
  title: string;
  orientation?: "landscape" | "portrait";
  className?: string;
};

function getYouTubeVideoId(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }

    if (parsed.pathname.startsWith("/shorts/")) {
      return parsed.pathname.split("/shorts/")[1]?.split("/")[0] ?? null;
    }

    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
}

export default function YouTubeProjectPlayer({
  url,
  title,
  orientation = "portrait",
  className = "",
}: YouTubeProjectPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);

  const videoId = useMemo(() => getYouTubeVideoId(url), [url]);

  useEffect(() => {
    setPlaying(false);
    setEnded(false);
  }, [url]);

  if (!videoId) {
    return (
      <div
        className={`flex min-h-[360px] items-center justify-center bg-black p-8 text-center text-white ${className}`}
      >
        <div>
          <p className="font-semibold">Video unavailable</p>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-white/60 underline"
          >
            View on YouTube
          </a>
        </div>
      </div>
    );
  }

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  const embedUrl =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1` +
    `&controls=1` +
    `&rel=0` +
    `&modestbranding=1` +
    `&playsinline=1` +
    `&fs=1` +
    `&disablekb=0`;

  return (
    <div className={className}>
      <div
        className={`relative overflow-hidden bg-black ${
          orientation === "landscape"
            ? "aspect-video"
            : "aspect-[9/16]"
        }`}
      >
        {!playing && !ended && (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 z-10 h-full w-full"
            aria-label={`Play ${title}`}
          >
            <img
              src={thumbnailUrl}
              alt=""
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-ink shadow-lg transition duration-300 group-hover:scale-105 md:h-20 md:w-20">
                <span className="ml-1 text-2xl">▶</span>
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-left">
              <p className="font-display text-xl font-semibold text-white md:text-2xl">
                {title}
              </p>
            </div>
          </button>
        )}

        {playing && !ended && (
          <iframe
            src={embedUrl}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        )}

        {ended && (
          <div className="absolute inset-0 flex items-center justify-center bg-ink p-8 text-center text-white">
            <div className="max-w-sm">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brassBright">
                Real Estate Media House
              </p>

              <h3 className="mt-4 font-display text-3xl font-semibold">
                Keep exploring.
              </h3>

              <p className="mt-4 leading-7 text-white/55">
                See another transformation or explore more property media.
              </p>

              <button
                type="button"
                onClick={() => {
                  setEnded(false);
                  setPlaying(false);
                }}
                className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-ink transition hover:bg-brassBright"
              >
                Replay preview
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}