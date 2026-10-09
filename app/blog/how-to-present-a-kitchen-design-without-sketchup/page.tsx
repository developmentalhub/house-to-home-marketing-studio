import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Check,
  PencilRuler,
  Scan,
  TabletSmartphone,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "How to Present a Kitchen Design Without SketchUp | Cabinet Makers",

  description:
    "A practical guide for cabinet makers who want to present kitchen designs professionally without learning SketchUp or 3D rendering software.",

  alternates: {
    canonical:
      `${SITE_URL}/blog/how-to-present-a-kitchen-design-without-sketchup`,
  },

  openGraph: {
    title:
      "How to Present a Kitchen Design Without SketchUp",
    description:
      "How cabinet makers can turn hand-drawn kitchen concepts into professional client presentations without learning complicated 3D software.",
    url:
      `${SITE_URL}/blog/how-to-present-a-kitchen-design-without-sketchup`,
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Present a Kitchen Design Without SketchUp",
  description:
    "A practical guide for cabinet makers who want to present kitchen designs professionally without learning SketchUp or 3D rendering software.",
  author: {
    "@type": "Organization",
    name: "Real Estate Media House",
  },
  publisher: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  mainEntityOfPage:
    `${SITE_URL}/blog/how-to-present-a-kitchen-design-without-sketchup`,
};

export default function BlogPost() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(articleJsonLd),
        }}
      />

      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Cabinet Making
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              How to present a kitchen design
              <span className="block text-rust">
                without learning SketchUp.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              You can be excellent at designing
              and building kitchens without wanting
              to spend hours learning 3D software.
              There is another way to give clients
              the visual presentation they now
              expect.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <p className="text-xl leading-9 text-black/65">
              Many experienced cabinet makers
              already know exactly what a kitchen
              will look like from a sketch,
              measurements and a list of finishes.
            </p>

            <p className="mt-6 text-xl leading-9 text-black/65">
              The challenge is that the client may
              not be able to visualise it as
              clearly.
            </p>

            <p className="mt-7 font-display text-3xl leading-10">
              The issue is not your ability to
              design.
              <span className="text-rust">
                {" "}
                It is helping the client see what
                you can already see.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The problem
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A simple sketch can make sense to
                you and still feel unclear to the
                client.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-black/60">
              <p>
                Your sketch may show every important
                cabinet, opening, appliance and
                dimension.
              </p>

              <p>
                But the client may still struggle
                to understand scale, proportions,
                colour combinations, how the island
                relates to the room or what the
                cabinetry will feel like around
                them.
              </p>

              <p>
                That uncertainty can make it harder
                for them to commit to an expensive
                project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YOU DO NOT NEED SOFTWARE */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                You do not need to become a renderer
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                You can keep designing
                <span className="block text-rust">
                  the way you already design.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/55">
                A hand-drawn sketch, dimensions,
                notes, finish selections and
                reference images can be enough to
                start.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/55">
                Instead of learning SketchUp or
                another 3D program, you can use a
                presentation partner to turn that
                information into a more polished
                client experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO SUPPLY */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What you can supply
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the information you
                already use.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Hand-drawn cabinetry sketches",
                "Room measurements",
                "Cabinet dimensions",
                "Appliance locations",
                "Benchtop selections",
                "Door and panel finishes",
                "Inspiration images",
                "Notes from the client meeting",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-black/10 bg-[#f7f5f1] p-5"
                >
                  <Check
                    size={18}
                    className="mt-1 shrink-0 text-rust"
                  />

                  <p className="font-semibold leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              A simple workflow
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              From sketch to client presentation.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-[2rem] border border-black/10 bg-white p-8">
              <PencilRuler
                size={25}
                className="text-rust"
              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Step 01
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">
                Sketch the kitchen
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Work through the cabinetry layout
                exactly as you normally would.
              </p>
            </article>

            <article className="rounded-[2rem] border border-rust bg-ink p-8 text-white">
              <Scan
                size={25}
                className="text-brassBright"
              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Step 02
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">
                Build the visual presentation
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                The design is translated into
                polished visuals and an interactive
                360° room experience.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-white p-8">
              <TabletSmartphone
                size={25}
                className="text-rust"
              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Step 03
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">
                Present it to the client
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Open the presentation on your iPad,
                send the client their private link
                or print the design sheets.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WHY 360 */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Why 360° matters
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A flat image shows the kitchen.
              </h2>
            </div>

            <div>
              <p className="font-display text-3xl leading-10">
                An interactive panorama helps the
                client understand
                <span className="text-rust">
                  {" "}
                  what it feels like to stand
                  inside it.
                </span>
              </p>

              <p className="mt-7 text-lg leading-8 text-black/55">
                They can look towards the island,
                turn towards the overhead
                cabinetry, understand how the room
                connects and see the design from
                more than one fixed angle.
              </p>

              <Link
                href="/#interactive-presentation"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Try the interactive panorama
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM WORK */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Higher-value projects
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Your presentation influences how
                clients perceive your business.
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/55">
                When a client is comparing several
                cabinet makers, presentation can
                become part of how they judge
                professionalism, confidence and
                value.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/55">
                That does not mean you need a large
                internal design department. It
                means the presentation of your
                ideas should match the quality of
                the work you intend to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Have a kitchen sketch ready?
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Send us the sketch.
            <br />
            You present the vision.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Upload the drawings, measurements and
            project information you already have
            and we&apos;ll quote the presentation
            based on the number of joinery views
            and spaces required.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Send us your kitchen sketch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}