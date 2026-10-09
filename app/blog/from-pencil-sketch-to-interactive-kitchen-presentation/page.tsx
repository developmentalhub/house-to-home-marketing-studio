import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Check,
  FileText,
  Image as ImageIcon,
  PencilRuler,
  Scan,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "From Pencil Sketch to Interactive Kitchen Presentation",

  description:
    "What cabinet makers need to supply to turn a hand-drawn kitchen concept into professional renders, presentation sheets and an interactive 360 degree client presentation.",

  alternates: {
    canonical:
      `${SITE_URL}/blog/from-pencil-sketch-to-interactive-kitchen-presentation`,
  },

  openGraph: {
    title:
      "From Pencil Sketch to Interactive Kitchen Presentation",
    description:
      "A practical workflow for turning a cabinet maker's sketch, measurements and finish selections into a professional client presentation.",
    url:
      `${SITE_URL}/blog/from-pencil-sketch-to-interactive-kitchen-presentation`,
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "From Pencil Sketch to Interactive Kitchen Presentation",
  description:
    "What cabinet makers need to supply to turn a hand-drawn kitchen concept into professional renders, presentation sheets and an interactive 360 degree client presentation.",
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
    `${SITE_URL}/blog/from-pencil-sketch-to-interactive-kitchen-presentation`,
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
              From Sketch to Presentation
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              From pencil sketch
              <span className="block text-rust">
                to interactive kitchen presentation.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              You do not need a polished 3D model
              before you send us a project. The
              starting point can be much simpler.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <p className="text-xl leading-9 text-black/65">
              Many cabinet makers already have
              everything needed to explain a
              project. It may simply exist across a
              sketch, measurements, product notes,
              photos and material selections.
            </p>

            <p className="mt-6 text-xl leading-9 text-black/65">
              That information can be turned into a
              far more polished client-facing
              presentation without changing the way
              you initially work through the
              design.
            </p>

            <p className="mt-7 font-display text-3xl leading-10">
              The important part is not whether the
              starting drawing looks impressive.
              <span className="text-rust">
                {" "}
                It is whether the design information
                is clear.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO SEND */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What to send
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the material you already
                use.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Hand-drawn floor plans",
                "Cabinet elevations",
                "Room measurements",
                "Cabinet dimensions",
                "Appliance locations",
                "Door profiles",
                "Benchtop selections",
                "Timber and colour selections",
                "Reference photos",
                "Inspiration images",
                "Notes from the client meeting",
                "Existing room photos",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-5"
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

      {/* STAGES */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              The workflow
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Four stages from your sketch
              <span className="block text-rust">
                to the client presentation.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <PencilRuler
                size={26}
                className="text-rust"
              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Step 01
              </p>

              <h3 className="mt-3 font-display text-3xl font-semibold">
                You create the concept
              </h3>

              <p className="mt-5 leading-7 text-black/50">
                Work through the cabinetry layout
                the way you normally would. This
                can be on paper, a printed plan or
                whatever method makes sense for
                your business.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <FileText
                size={26}
                className="text-rust"
              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Step 02
              </p>

              <h3 className="mt-3 font-display text-3xl font-semibold">
                You send the project information
              </h3>

              <p className="mt-5 leading-7 text-black/50">
                Upload the sketch, dimensions,
                reference material and finish
                selections needed to understand the
                intended design.
              </p>
            </article>

            <article className="rounded-[2rem] border border-rust bg-ink p-8 text-white">
              <ImageIcon
                size={26}
                className="text-brassBright"
              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Step 03
              </p>

              <h3 className="mt-3 font-display text-3xl font-semibold">
                We build the visual presentation
              </h3>

              <p className="mt-5 leading-7 text-white/50">
                The project is translated into the
                agreed number of joinery images,
                presentation views and supporting
                visual material.
              </p>
            </article>

            <article className="rounded-[2rem] border border-rust bg-ink p-8 text-white">
              <Scan
                size={26}
                className="text-brassBright"
              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Step 04
              </p>

              <h3 className="mt-3 font-display text-3xl font-semibold">
                The client explores the space
              </h3>

              <p className="mt-5 leading-7 text-white/50">
                Where included, an interactive
                360° panorama allows the client to
                look around the proposed room from
                their phone, tablet or computer.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CLARITY */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Clear information helps
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                The better the source information,
                <span className="block text-rust">
                  the clearer the presentation can be.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/55">
                Dimensions, finish references and
                clearly labelled sketches reduce
                ambiguity when the project is being
                visualised.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/55">
                You do not need to make the
                documents beautiful. Clear notes
                and accurate information are far
                more useful than a polished drawing
                with important details missing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DON'T NEED */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What you do not need
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Do not create a 3D model just so we
                can create the presentation.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-black/60">
              <p>
                If your existing workflow already
                includes 3D files, they can be
                useful.
              </p>

              <p>
                But the point of backstage
                presentation support is that you do
                not have to learn complex rendering
                software simply to provide your
                client with a professional visual
                experience.
              </p>

              <Link
                href="/blog/how-to-present-a-kitchen-design-without-sketchup"
                className="inline-flex items-center gap-2 font-semibold text-rust"
              >
                Read about presenting without SketchUp
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What the client receives
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Turn scattered project information
                into one clear experience.
              </h2>

              <p className="mt-7 text-lg leading-8 text-black/55">
                Instead of opening several
                attachments while sitting with the
                customer, the key design material
                can be organised into a private
                client project.
              </p>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Presentation images can be viewed
                full screen, printed when required
                and paired with an interactive
                panorama for spaces where a more
                immersive view is useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CABINET MAKER STAYS FRONT */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                You remain client-facing
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                You stay the expert.
                <span className="block text-rust">
                  We stay backstage.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/55">
                The purpose is not to take over
                your design process or your
                relationship with the client.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/55">
                It is to give you stronger
                presentation material to use while
                you lead the conversation.
              </p>

              <Link
                href="/blog/how-cabinet-makers-can-look-more-professional-without-hiring-an-in-house-3d-designer"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brassBright"
              >
                Read about backstage support
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Start with what you have
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Take a photo of the sketch.
            <br />
            Send us the project.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Upload your sketches, measurements,
            reference images and finish selections
            and we&apos;ll quote the presentation
            based on the number of joinery views
            and interactive spaces required.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Send us your project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}