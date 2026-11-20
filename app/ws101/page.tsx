"use client";

import "@photo-sphere-viewer/core/index.css";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  ArrowLeft,
  LockKeyhole,
  Scan,
} from "lucide-react";

export default function WalshStreetPage() {
  const panoramaRef =
    useRef<HTMLDivElement | null>(null);

  const viewerRef =
    useRef<
      import("@photo-sphere-viewer/core").Viewer | null
    >(null);

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] =
    useState(false);

  const [panoramaUrl, setPanoramaUrl] =
    useState("");

  const [unlocked, setUnlocked] =
    useState(false);

  useEffect(() => {
    if (
      !unlocked ||
      !panoramaUrl ||
      !panoramaRef.current
    ) {
      return;
    }

    let cancelled = false;

    async function loadViewer() {
      const { Viewer } = await import(
        "@photo-sphere-viewer/core"
      );

      if (
        cancelled ||
        !panoramaRef.current
      ) {
        return;
      }

      const viewer = new Viewer({
        container: panoramaRef.current,
        panorama: panoramaUrl,

        loadingTxt:
          "Loading Walsh Street",

        navbar: [
          "zoom",
          "move",
          "fullscreen",
        ],

        defaultZoomLvl: 45,

        mousewheelCtrlKey: false,

        touchmoveTwoFingers: false,
      });

      viewerRef.current = viewer;
    }

    loadViewer();

    return () => {
      cancelled = true;

      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, [unlocked, panoramaUrl]);

  async function handleAccess(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "/api/projects/ws101/assets",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            code,
          }),
        },
      );

      const data =
        await response.json();

      if (!response.ok) {
        setError(
          data.error ||
            "Invalid access code.",
        );

        return;
      }

      setPanoramaUrl(
        data.panoramaUrl ?? "",
      );

      setUnlocked(true);

      sessionStorage.setItem(
        "remh-ws101-access-code",
        code,
      );
    } catch {
      setError(
        "Could not open the project. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-[#171717] px-5 py-16 text-white">
        <div className="mx-auto max-w-xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Real Estate Media House
          </Link>

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rust text-white">
              <LockKeyhole size={22} />
            </div>

            <p className="mt-7 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brassBright">
              Private client presentation
            </p>

            <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Walsh Street
            </h1>

            <p className="mt-3 text-lg text-white/55">
              Bathroom design presentation
            </p>

            <p className="mt-7 leading-7 text-white/45">
              Enter the project access code to
              open the interactive presentation.
            </p>

            <form
              onSubmit={handleAccess}
              className="mt-8"
            >
              <label
                htmlFor="access-code"
                className="text-sm font-semibold"
              >
                Access code
              </label>

              <input
                id="access-code"
                type="password"
                value={code}
                onChange={(event) =>
                  setCode(
                    event.target.value,
                  )
                }
                autoComplete="off"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-white px-4 py-4 text-[#181818] outline-none transition focus:border-rust"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-4 flex w-full items-center justify-center rounded-full bg-rust px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-[#181818] disabled:opacity-50"
              >
                {loading
                  ? "Opening project..."
                  : "Open project"}
              </button>

              {error && (
                <p className="mt-4 text-sm leading-6 text-red-300">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#171717] text-white">
      <section className="border-b border-white/10">
        <div className="container-shell py-8">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brassBright">
            Private client presentation
          </p>

          <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
            Walsh Street
          </h1>

          <p className="mt-3 text-white/50">
            Bathroom design presentation
          </p>
        </div>
      </section>

      <section className="pb-12 pt-8">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
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
              className="h-[500px] w-full md:h-[700px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}