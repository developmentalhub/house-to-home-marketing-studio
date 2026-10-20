"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Images,
  Scan,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

import {
  Viewer,
} from "@photo-sphere-viewer/core";

import "@photo-sphere-viewer/core/index.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  PreviewProject,
} from "@/lib/previewProjects";

type Props = {
  project: PreviewProject;
};

export default function PreviewProjectClient({
  project,
}: Props) {
  const panoramaRef =
    useRef<HTMLDivElement | null>(null);

  const viewerRef =
    useRef<Viewer | null>(null);

  const [activeImage, setActiveImage] =
    useState<number | null>(null);

  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!panoramaRef.current) {
      return;
    }

    const viewer = new Viewer({
      container: panoramaRef.current,
      panorama: project.panoramaUrl,
      navbar: [
        "zoom",
        "move",
        "fullscreen",
      ],
      defaultZoomLvl: 20,
      mousewheelCtrlKey: false,
      touchmoveTwoFingers: false,
    });

    viewerRef.current = viewer;

    return () => {
      viewer.destroy();
      viewerRef.current = null;
    };
  }, [project.panoramaUrl]);

  useEffect(() => {
    if (activeImage === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  function openImage(index: number) {
    setZoom(1);
    setActiveImage(index);
  }

  function closeImage() {
    setZoom(1);
    setActiveImage(null);
  }

  function previousImage() {
    if (activeImage === null) return;

    setZoom(1);

    setActiveImage(
      activeImage === 0
        ? project.imageUrls.length - 1
        : activeImage - 1,
    );
  }

  function nextImage() {
    if (activeImage === null) return;

    setZoom(1);

    setActiveImage(
      activeImage ===
        project.imageUrls.length - 1
        ? 0
        : activeImage + 1,
    );
  }

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* PROJECT HEADER */}
      <section className="border-b border-white/10 bg-ink text-white">
        <div className="container-shell py-7 md:py-9">
          <Link
            href="/preview"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            All sample projects
          </Link>

          <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brassBright">
                Interactive project preview
              </p>

              <h1 className="mt-2 font-display text-4xl font-semibold md:text-6xl">
                {project.shortName}
              </h1>
            </div>

            <a
              href="#project-images"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-rust px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              <Images size={17} />
              View detailed images
            </a>
          </div>
        </div>
      </section>

      {/* PANORAMA */}
      <section className="bg-ink pb-8 md:pb-12">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-soft md:rounded-[2rem]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-white">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Scan
                  size={17}
                  className="text-brassBright"
                />
                Interactive 360° panorama
              </div>

              <span className="hidden text-xs text-white/40 sm:block">
                Drag to look around
              </span>
            </div>

            <div
              ref={panoramaRef}
              className="h-[440px] w-full md:h-[650px]"
            />
          </div>
        </div>
      </section>

      {/* PROJECT IMAGES */}
      <section
        id="project-images"
        className="scroll-mt-24 py-14 md:py-20"
      >
        <div className="container-shell">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-rust">
                Detailed presentation files
              </p>

              <h2 className="mt-2 font-display text-3xl font-semibold md:text-5xl">
                Project images
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-black/45">
              Select any image to open it full
              screen and inspect the design in more
              detail.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {project.imageUrls.map(
              (imageUrl, index) => (
                <button
                  key={imageUrl}
                  type="button"
                  onClick={() =>
                    openImage(index)
                  }
                  className="group relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-white text-left shadow-soft"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                    <img
                      src={imageUrl}
                      alt={`${project.shortName} detailed presentation view ${index + 1}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    />

                    <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm">
                      <Expand size={18} />
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-5 py-4">
                    <span className="font-semibold">
                      View {index + 1}
                    </span>

                    <span className="text-sm text-black/40">
                      Open full screen
                    </span>
                  </div>
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      {/* SHORT SALES CTA */}
      <section className="border-t border-black/10 bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-ink p-8 text-white md:flex md:items-center md:justify-between md:gap-12 md:p-12">
            <div className="max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brassBright">
                Your cabinetry could be presented
                like this
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
                Send us the sketch.
                <span className="text-rust">
                  {" "}
                  You present the vision.
                </span>
              </h2>
            </div>

            <Link
              href="/enquire"
              className="mt-7 inline-flex shrink-0 items-center gap-2 rounded-full bg-rust px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink md:mt-0"
            >
              Send us your project
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FULLSCREEN IMAGE VIEWER */}
      {activeImage !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95">
          <div className="absolute left-4 top-4 z-20 text-sm text-white/55 md:left-7 md:top-7">
            {project.shortName} · View{" "}
            {activeImage + 1} of{" "}
            {project.imageUrls.length}
          </div>

          <button
            type="button"
            onClick={closeImage}
            aria-label="Close image"
            className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-black md:right-7 md:top-7"
          >
            <X size={23} />
          </button>

          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-black md:left-7"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-black md:right-7"
          >
            <ChevronRight size={26} />
          </button>

          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/60 p-2 backdrop-blur-md">
            <button
              type="button"
              onClick={() =>
                setZoom((value) =>
                  Math.max(
                    1,
                    value - 0.25,
                  ),
                )
              }
              aria-label="Zoom out"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/15"
            >
              <ZoomOut size={19} />
            </button>

            <span className="min-w-[60px] text-center text-xs font-semibold text-white">
              {Math.round(zoom * 100)}%
            </span>

            <button
              type="button"
              onClick={() =>
                setZoom((value) =>
                  Math.min(
                    3,
                    value + 0.25,
                  ),
                )
              }
              aria-label="Zoom in"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/15"
            >
              <ZoomIn size={19} />
            </button>
          </div>

          <div className="h-full w-full overflow-auto p-8 md:p-16">
            <div className="flex min-h-full min-w-full items-center justify-center">
              <img
                src={
                  project.imageUrls[
                    activeImage
                  ]
                }
                alt={`${project.shortName} detailed presentation view ${activeImage + 1}`}
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: "center",
                }}
                className="max-h-[82vh] max-w-[88vw] object-contain transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}