"use client";

import "@photo-sphere-viewer/core/index.css";

import { useEffect, useRef } from "react";

type HomePanoramaProps = {
  panoramaUrl?: string;
  label?: string;
  loadingText?: string;
  heightClassName?: string;
  helperText?: string;
};

const DEFAULT_PANORAMA_URL =
  "https://icnplmgegficqmmsoqxt.supabase.co/storage/v1/object/public/website-images/preview/kitchen/updated-kitchen-panorama-image.png";

export default function HomePanorama({
  panoramaUrl = DEFAULT_PANORAMA_URL,
  label = "Live interactive example",
  loadingText = "Loading interactive panorama",
  heightClassName = "h-[430px] w-full sm:h-[500px] lg:h-[620px]",
  helperText = "Click and drag to look around. Scroll or pinch to zoom.",
}: HomePanoramaProps) {
  const containerRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    let viewer:
      | import("@photo-sphere-viewer/core").Viewer
      | null = null;

    let cancelled = false;

    async function loadViewer() {
      const { Viewer } = await import(
        "@photo-sphere-viewer/core"
      );

      if (
        cancelled ||
        !containerRef.current
      ) {
        return;
      }

      viewer = new Viewer({
        container: containerRef.current,
        panorama: panoramaUrl,

        loadingTxt: loadingText,

        navbar: [
          "zoom",
          "move",
          "fullscreen",
        ],

        defaultZoomLvl: 45,

        mousewheelCtrlKey: false,

        touchmoveTwoFingers: false,
      });
    }

    loadViewer();

    return () => {
      cancelled = true;

      if (viewer) {
        viewer.destroy();
      }
    };
  }, [
    panoramaUrl,
    loadingText,
  ]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
        <div
          ref={containerRef}
          className={heightClassName}
        />
      </div>

      <div className="pointer-events-none absolute left-5 top-5 z-10 rounded-full border border-white/15 bg-black/60 px-4 py-2 backdrop-blur">
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/75">
          {label}
        </p>
      </div>

      <p className="mt-4 text-center text-sm leading-6 text-black/45">
        {helperText}
      </p>
    </div>
  );
}