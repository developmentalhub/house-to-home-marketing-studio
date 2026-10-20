import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Images,
  Scan,
} from "lucide-react";

import { previewProjects } from "@/lib/previewProjects";

export const metadata: Metadata = {
  title:
    "Cabinetry Presentation Preview | Real Estate Media House",

  description:
    "Explore sample kitchen, bathroom and walk-in robe cabinetry presentations with interactive 360 degree views and detailed client presentation images.",

  alternates: {
    canonical:
      "https://www.realestatemediahouse.net/preview",
  },

  openGraph: {
    title:
      "Cabinetry Presentation Preview | Real Estate Media House",

    description:
      "Explore sample kitchen, bathroom and walk-in robe cabinetry presentations with interactive 360 degree views and detailed client presentation images.",

    url:
      "https://www.realestatemediahouse.net/preview",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const projectOrder = [
  "kitchen",
  "bathroom",
  "walk-in-robe",
];

export default function PreviewPage() {
  const projects = projectOrder.map(
    (id) => previewProjects[id],
  );

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* COMPACT INTRO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-10 md:py-12">
          <div className="max-w-4xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brassBright">
              Public cabinetry previews
            </p>

            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Explore the projects.
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/55 md:text-lg">
              Open a sample 360° presentation, then
              view the detailed project images.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section className="py-8 md:py-12">
        <div className="container-shell">
          <div className="grid gap-7 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft"
              >
                {/* PANORAMA THUMBNAIL ONLY */}
                <Link
                  href={`/preview/${project.id}`}
                  className="group relative block aspect-[4/3] overflow-hidden bg-black"
                >
                  <img
                    src={project.panoramaUrl}
                    alt={`${project.shortName} interactive panorama preview`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/65 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                    <Scan size={15} />
                    360° panorama
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-white/60">
                      Sample project
                    </p>

                    <h2 className="mt-2 font-display text-3xl font-semibold">
                      {project.shortName}
                    </h2>
                  </div>
                </Link>

                {/* SIMPLE ACTION AREA */}
                <div className="p-6 md:p-7">
                  <Link
                    href={`/preview/${project.id}`}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-rust px-6 py-4 font-semibold text-white transition hover:bg-ink"
                  >
                    View interactive project
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href={`/preview/${project.id}#project-images`}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-black/15 px-6 py-4 font-semibold text-ink transition hover:border-rust hover:text-rust"
                  >
                    <Images size={18} />
                    View detailed image files
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VERY SHORT EXPLANATION */}
      <section className="border-t border-black/10 bg-white py-12 md:py-14">
        <div className="container-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-rust">
                Real client projects
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                The same experience can be kept private.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-black/55">
                Your customer can receive their own
                protected project page and unique
                access code.
              </p>
            </div>

            <Link
              href="/enquire"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-white transition hover:bg-rust"
            >
              Send us your sketch
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
