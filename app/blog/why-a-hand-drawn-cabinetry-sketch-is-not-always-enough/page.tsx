import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Check,
  Eye,
  PencilRuler,
  Scan,
  TabletSmartphone,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Why a Hand-Drawn Cabinetry Sketch Is Not Always Enough",

  description:
    "Why cabinet makers may need more than a hand-drawn sketch when presenting high-value kitchen and joinery projects to clients.",

  alternates: {
    canonical:
      `${SITE_URL}/blog/why-a-hand-drawn-cabinetry-sketch-is-not-always-enough`,
  },

  openGraph: {
    title:
      "Why a Hand-Drawn Cabinetry Sketch Is Not Always Enough",
    description:
      "How better visual presentation can help cabinet makers communicate ideas and build client confidence.",
    url:
      `${SITE_URL}/blog/why-a-hand-drawn-cabinetry-sketch-is-not-always-enough`,
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Why a Hand-Drawn Cabinetry Sketch Is Not Always Enough",
  description:
    "Why cabinet makers may need more than a hand-drawn sketch when presenting high-value kitchen and joinery projects to clients.",
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
    `${SITE_URL}/blog/why-a-hand-drawn-cabinetry-sketch-is-not-always-enough`,
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

      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Client Presentation
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Why a hand-drawn cabinetry sketch
              <span className="block text-rust">
                is not always enough.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              A sketch may be completely clear to
              you. But when a client is investing
              heavily in a kitchen, robe or
              whole-house joinery package, they may
              need more help to understand what
              they are agreeing to.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <p className="text-xl leading-9 text-black/65">
              Hand drawing is still a valuable
              design skill. It is fast, flexible
              and often the easiest way to work
              through an idea.
            </p>

            <p className="mt-6 text-xl leading-9 text-black/65">
              The problem is not the sketch itself.
              The problem is expecting every client
              to be able to mentally turn that
              sketch into a finished room.
            </p>

            <p className="mt-7 font-display text-3xl leading-10">
              Cabinet makers often see the finished
              space immediately.
              <span className="text-rust">
                {" "}
                Clients often need to be shown.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Where confusion starts
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Clients may understand the drawing
                without understanding the room.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "How large the island will feel",
                "How overhead cabinetry relates to the room",
                "Whether colours and finishes work together",
                "How much visual space the cabinetry occupies",
                "How the joinery connects with surrounding walls",
                "How the design will look from different viewpoints",
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

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                The higher the investment
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                The more confidence the client may
                want before saying yes.
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/55">
                A client spending a significant
                amount on cabinetry may be
                comparing several businesses.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/55">
                They are not only comparing price.
                They may also be comparing how
                clearly each business communicates,
                how professional the process feels
                and how confident they are that
                everyone understands the same
                design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Add another layer
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Keep the sketch.
              <span className="block text-rust">
                Add a visual experience.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <PencilRuler
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Sketch
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Use the fast design process that
                already works for you.
              </p>
            </article>

            <article className="rounded-[2rem] border border-rust bg-ink p-8 text-white">
              <Eye
                size={25}
                className="text-brassBright"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Visualise
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                Turn the concept into polished
                images that make the materials,
                proportions and room easier to
                understand.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <Scan
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Explore
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Let the client look around the
                space using an interactive 360°
                panorama.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Make it easy to present
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The technology should support your
                meeting, not take it over.
              </h2>
            </div>

            <div>
              <div className="flex items-start gap-5">
                <TabletSmartphone
                  size={30}
                  className="mt-1 shrink-0 text-rust"
                />

                <div>
                  <h3 className="font-display text-3xl font-semibold">
                    Open it on your iPad.
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-black/55">
                    Sit beside the client, open
                    their project and walk through
                    the concept together.
                  </p>
                </div>
              </div>

              <p className="mt-8 text-lg leading-8 text-black/55">
                You can still print presentation
                sheets when that suits the client.
                The interactive project simply
                gives you another way to explain
                the design clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The goal
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                The client should leave the meeting
                understanding what you intend to
                build.
              </h2>

              <p className="mt-7 text-lg leading-8 text-black/55">
                A professional presentation is not
                about making the project flashy for
                the sake of it. It is about making
                the design easier to understand and
                helping both sides make decisions
                with more confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Keep sketching
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            You design it.
            <br />
            We help the client see it.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the sketch, measurements and
            project information you already have
            and we&apos;ll quote the visualisation
            and presentation.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Send us a sketch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}