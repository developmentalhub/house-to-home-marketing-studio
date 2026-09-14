import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Download,
  FileText,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Download Your Property Animation Prompt Pack | Real Estate Media House",
  description:
    "Download your Property Reel Animation Prompt Pack from Real Estate Media House.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${SITE_URL}/property-animation-prompt-pack/download`,
  },
};

const included = [
  "10 property animation prompt scenarios",
  "Camera movement direction",
  "Architectural accuracy instructions",
  "Movement and atmosphere guidance",
  "Prompts you can adapt to your own property images",
];

export default function PropertyAnimationPromptPackDownloadPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* THANK YOU HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Your Prompt Pack Is Ready
            </p>

            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Thank you.
              <span className="block text-rust">
                Start making your property move.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
              Your 10 Property Reel Animation Prompts are ready to
              download below.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-white/45">
              Keep the PDF somewhere easy to find, then adapt each
              prompt to suit the property image, camera movement,
              atmosphere and animation platform you are working with.
            </p>
          </div>
        </div>
      </section>

      {/* DOWNLOAD CARD */}
      <section className="py-14 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              {/* IMAGE */}
              <div className="relative min-h-[340px] bg-[#ece8e1] lg:min-h-[520px]">
                <img
                  src="/images/arch-viz-reel-animation.png"
                  alt="Architectural visualisation property reel animation prompt pack"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              {/* DOWNLOAD */}
              <div className="flex items-center p-8 md:p-10 lg:p-12">
                <div className="w-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white">
                    <FileText size={24} />
                  </div>

                  <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                    Digital Download
                  </p>

                  <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
                    Property Reel
                    <span className="block text-rust">
                      Animation Prompt Pack
                    </span>
                  </h2>

                  <p className="mt-5 leading-7 text-black/50">
                    Ten ready-to-adapt prompt scenarios for residential,
                    commercial, development, hospitality and property
                    marketing animation.
                  </p>

                  <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
                    {included.map((item, index) => (
                      <div
                        key={item}
                        className="grid grid-cols-[38px_1fr] gap-4 py-4"
                      >
                        <p className="font-mono text-[9px] font-semibold tracking-[0.16em] text-rust">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <p className="leading-6 text-black/60">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/pdf/architectural-viz-prompts-reel-animation-package.pdf"
                    download
                    className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:bg-rust sm:w-auto"
                  >
                    <Download size={18} />
                    Download your prompt pack
                  </a>

                  <p className="mt-4 text-sm leading-6 text-black/35">
                    PDF digital download.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="border-y border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Before You Generate
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Adapt the prompt
                <span className="block text-rust">
                  to the property first.
                </span>
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-black/60">
                The prompts are designed as starting points rather than
                instructions to paste unchanged into every image.
                Look carefully at the property first and decide which
                movement actually makes sense for that scene.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Change the room, lighting, environmental details and
                camera direction where needed, while keeping the
                instructions that protect the architecture and defining
                property features.
              </p>

              <p className="mt-6 font-display text-2xl leading-9">
                A slower camera move with believable detail will often
                show the property better than trying to make everything
                move at once.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 STEP USE */}
      <section className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              A Simple Starting Point
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Image first.
              <span className="block text-rust">
                Movement second.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-[1.75rem] border border-black/10 bg-white p-8">
              <p className="font-mono text-[9px] font-semibold tracking-[0.16em] text-rust">
                01
              </p>

              <h3 className="mt-5 font-display text-2xl font-semibold">
                Choose the image
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Start with a property image that already has a clear
                subject, useful composition and a reason to become an
                animated moment.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-white p-8">
              <p className="font-mono text-[9px] font-semibold tracking-[0.16em] text-rust">
                02
              </p>

              <h3 className="mt-5 font-display text-2xl font-semibold">
                Choose the movement
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Decide what the camera should do and which small
                movements will make the scene feel believable without
                overwhelming the property.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-white p-8">
              <p className="font-mono text-[9px] font-semibold tracking-[0.16em] text-rust">
                03
              </p>

              <h3 className="mt-5 font-display text-2xl font-semibold">
                Adapt the prompt
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Use the closest example from your pack, then change the
                scene details so the instructions match the image in
                front of you.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* DONE FOR YOU */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                When DIY Is Not Enough
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Have a property that needs
                <span className="block text-rust">
                  more than a prompt?
                </span>
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">
                Send us the photography, render or development image you
                already have and Real Estate Media House can create the
                visual direction, animation and property story for you.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/explore"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                See our work
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/enquire"
                className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Show us your property
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}