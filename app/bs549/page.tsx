"use client";

import "@photo-sphere-viewer/core/index.css";

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  LockKeyhole,
  Maximize2,
  Minus,
  Plus,
  RotateCcw,
  X,
} from "lucide-react";

import { getProject } from "@/lib/projects";

const STORAGE_KEY = "remh-bs549-access-code";

type ProjectAssets = {
  panoramaUrl: string;
  presentationUrls: string[];
};

export default function BeachStreetProjectPage() {
  const project = getProject("bs549");

  const panoramaContainerRef =
    useRef<HTMLDivElement | null>(null);

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [unlocked, setUnlocked] = useState(false);

  const [panoramaUrl, setPanoramaUrl] =
    useState("");

  const [presentationUrls, setPresentationUrls] =
    useState<string[]>([]);

  const [activeImage, setActiveImage] =
    useState<number | null>(null);

  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const savedCode =
      sessionStorage.getItem(STORAGE_KEY);

    if (savedCode) {
      setCode(savedCode);
      loadProjectAssets(savedCode, false);
    }
  }, []);

  useEffect(() => {
    if (
      !unlocked ||
      !panoramaUrl ||
      !panoramaContainerRef.current
    ) {
      return;
    }

    let viewer:
      | import("@photo-sphere-viewer/core").Viewer
      | null = null;

    let cancelled = false;

    async function createViewer() {
      const { Viewer } = await import(
        "@photo-sphere-viewer/core"
      );

      if (
        cancelled ||
        !panoramaContainerRef.current
      ) {
        return;
      }

      viewer = new Viewer({
        container: panoramaContainerRef.current,
        panorama: panoramaUrl,

        loadingTxt: "Loading 360° view",

        touchmoveTwoFingers: false,

        mousewheelCtrlKey: false,

        navbar: [
          "zoom",
          "move",
          "fullscreen",
        ],

        defaultZoomLvl: 50,
      });
    }

    createViewer();

    return () => {
      cancelled = true;

      if (viewer) {
        viewer.destroy();
      }
    };
  }, [unlocked, panoramaUrl]);

  async function loadProjectAssets(
    accessCode: string,
    showError = true,
  ) {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "/api/projects/bs549/assets",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            code: accessCode,
          }),
        },
      );

      const data =
        (await response.json()) as
          | ProjectAssets
          | { error?: string };

      if (!response.ok) {
        sessionStorage.removeItem(
          STORAGE_KEY,
        );

        setUnlocked(false);
        setPanoramaUrl("");
        setPresentationUrls([]);

        if (showError) {
          setError(
            data &&
              "error" in data &&
              data.error
              ? data.error
              : "That access code is not valid.",
          );
        }

        return;
      }

      if (
        !(
          "panoramaUrl" in data &&
          "presentationUrls" in data
        )
      ) {
        throw new Error(
          "Project assets were not returned.",
        );
      }

      sessionStorage.setItem(
        STORAGE_KEY,
        accessCode,
      );

      setPanoramaUrl(
        data.panoramaUrl,
      );

      setPresentationUrls(
        data.presentationUrls,
      );

      setUnlocked(true);
      setError("");
    } catch (error) {
      console.error(
        "Could not load project:",
        error instanceof Error
          ? error.message
          : "Unknown error",
      );

      setUnlocked(false);

      if (showError) {
        setError(
          "We could not load this project. Please try again.",
        );
      }
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const enteredCode =
      code.trim().toUpperCase();

    if (!enteredCode) {
      setError(
        "Please enter your access code.",
      );

      return;
    }

    loadProjectAssets(
      enteredCode,
      true,
    );
  }

  function openImage(index: number) {
    setActiveImage(index);
    setZoom(1);
  }

  function closeImage() {
    setActiveImage(null);
    setZoom(1);
  }

  function showPreviousImage() {
    if (
      activeImage === null ||
      presentationUrls.length === 0
    ) {
      return;
    }

    const nextIndex =
      activeImage === 0
        ? presentationUrls.length - 1
        : activeImage - 1;

    setActiveImage(nextIndex);
    setZoom(1);
  }

  function showNextImage() {
    if (
      activeImage === null ||
      presentationUrls.length === 0
    ) {
      return;
    }

    const nextIndex =
      activeImage ===
      presentationUrls.length - 1
        ? 0
        : activeImage + 1;

    setActiveImage(nextIndex);
    setZoom(1);
  }

  if (!project) {
    return null;
  }

  if (!unlocked) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#171717] px-5 py-12 text-white">
        <div className="w-full max-w-lg">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur md:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <LockKeyhole size={20} />
            </div>

            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Private Project
            </p>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Beach St

              <span className="block text-[#c97857]">
                Kitchen
              </span>
            </h1>

            <p className="mt-5 leading-7 text-white/50">
              Enter the project access code
              provided by Real Estate Media
              House to view this presentation.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-9"
            >
              <label
                htmlFor="access-code"
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45"
              >
                Access code
              </label>

              <input
                id="access-code"
                type="text"
                value={code}
                disabled={loading}
                onChange={(event) => {
                  setCode(
                    event.target.value,
                  );

                  setError("");
                }}
                autoComplete="off"
                autoCapitalize="characters"
                placeholder="Enter access code"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-lg text-white outline-none transition placeholder:text-white/25 focus:border-[#c97857] disabled:cursor-wait disabled:opacity-50"
              />

              {error && (
                <p className="mt-3 text-sm text-[#e6a188]">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-5 w-full rounded-full bg-white px-6 py-4 font-semibold text-[#181818] transition hover:bg-[#c97857] hover:text-white disabled:cursor-wait disabled:opacity-60"
              >
                {loading
                  ? "Loading project..."
                  : "View project"}
              </button>
            </form>

            <div className="mt-9 border-t border-white/10 pt-6">
              <p className="text-sm leading-6 text-white/30">
                Real Estate Media House ·
                Interactive Architectural
                Presentation
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-[#f4f1eb] text-[#181818]">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <div className="border-b border-black/10 pb-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/40">
              Real Estate Media House
            </p>

            <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-7xl">
              Beach St

              <span className="block text-[#a34f33]">
                Kitchen
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
              {project.subtitle}
            </p>
          </div>

          {/* 360 PANORAMA */}
          <section className="mt-10">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a34f33]">
                  360° View
                </p>

                <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
                  Explore the space
                </h2>
              </div>

              <p className="hidden text-sm text-black/40 md:block">
                Drag to explore
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-black shadow-xl">
              <div
                ref={
                  panoramaContainerRef
                }
                className="h-[420px] w-full md:h-[620px]"
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-black/40">
              Drag to look around. Scroll
              or pinch to zoom. Use the
              controls to enter full screen.
            </p>
          </section>

          {/* PRESENTATION SHEETS */}
          <section className="mt-16 pb-20">
            <div className="mb-8">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a34f33]">
                Presentation
              </p>

              <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
                Project drawings and details
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-black/50">
                Select any presentation
                sheet to open it full screen
                and inspect the design in
                detail.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {presentationUrls.map(
                (url, index) => (
                  <button
                    key={`${url}-${index}`}
                    type="button"
                    onClick={() =>
                      openImage(index)
                    }
                    className="group text-left"
                  >
                    <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                      <div className="relative aspect-[4/3] overflow-hidden bg-white">
                        <img
                          src={url}
                          alt={`Beach Street presentation page ${
                            index + 1
                          }`}
                          className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                        />

                        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/75 text-white backdrop-blur">
                          <Maximize2
                            size={17}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-black/10 px-5 py-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-black/45">
                          Page{" "}
                          {index + 1}
                        </p>

                        <p className="text-sm text-black/35">
                          View details
                        </p>
                      </div>
                    </div>
                  </button>
                ),
              )}
            </div>
          </section>
        </div>
      </main>

      {/* FULL SCREEN VIEWER */}
      {activeImage !== null && (
        <div className="fixed inset-0 z-[200] flex flex-col bg-[#0d0d0d] text-white">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-6">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                Beach St – Kitchen
              </p>

              <p className="mt-1 text-sm text-white/70">
                {activeImage + 1} of{" "}
                {
                  presentationUrls.length
                }
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setZoom(
                    (current) =>
                      Math.max(
                        0.75,
                        current - 0.25,
                      ),
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                aria-label="Zoom out"
              >
                <Minus size={18} />
              </button>

              <button
                type="button"
                onClick={() =>
                  setZoom(
                    (current) =>
                      Math.min(
                        4,
                        current + 0.25,
                      ),
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                aria-label="Zoom in"
              >
                <Plus size={18} />
              </button>

              <button
                type="button"
                onClick={() =>
                  setZoom(1)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                aria-label="Reset zoom"
              >
                <RotateCcw
                  size={17}
                />
              </button>

              <button
                type="button"
                onClick={closeImage}
                className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:bg-[#c97857] hover:text-white"
                aria-label="Close viewer"
              >
                <X size={19} />
              </button>
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center overflow-auto p-4 md:p-8">
            <button
              type="button"
              onClick={
                showPreviousImage
              }
              className="fixed left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 backdrop-blur transition hover:bg-white hover:text-black md:left-6"
              aria-label="Previous page"
            >
              <ChevronLeft
                size={24}
              />
            </button>

            <div className="flex min-h-full min-w-full items-center justify-center">
              <img
                src={
                  presentationUrls[
                    activeImage
                  ]
                }
                alt={`Beach Street presentation page ${
                  activeImage + 1
                }`}
                className="max-h-[calc(100vh-130px)] max-w-full select-none object-contain transition-transform duration-200"
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin:
                    "center center",
                }}
                draggable={false}
              />
            </div>

            <button
              type="button"
              onClick={showNextImage}
              className="fixed right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 backdrop-blur transition hover:bg-white hover:text-black md:right-6"
              aria-label="Next page"
            >
              <ChevronRight
                size={24}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}