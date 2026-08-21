import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Warehouse to Mancave Visualisation | Commercial Property Case Study",
  description:
    "See how an empty warehouse can be visualised as a private mancave or lifestyle space to help buyers and owners understand one possible use for a vacant commercial property.",
  alternates: {
    canonical: `${SITE_URL}/projects/warehouse-to-mancave-visualisation`,
  },
  openGraph: {
    title: "Warehouse to Mancave Visualisation",
    description:
      "One empty warehouse, two different mancave concepts created from the same original property image.",
    url: `${SITE_URL}/projects/warehouse-to-mancave-visualisation`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-mancave1.png`,
        alt: "Empty warehouse transformed into a private mancave visualisation",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Warehouse to Mancave Visualisation",
  description:
    "A commercial property case study showing one empty warehouse transformed into two different mancave concepts.",
  mainEntityOfPage: `${SITE_URL}/projects/warehouse-to-mancave-visualisation`,
  image: [
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-mancave1.png`,
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-mancave2.png`,
  ],
  author: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
};

export default function WarehouseToMancaveVisualisationPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Warehouse Lifestyle Visualisation
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                What if the empty warehouse
                <span className="block text-rust">
                  became your own private mancave?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                Vacant industrial spaces can be hard to imagine beyond storage
                or traditional commercial use. A visual concept can show how the
                same space could become something much more personal.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#concept-one"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  See the concepts
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/enquire"
                  className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Discuss a property concept
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before-mancave.png"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-mancave1.png"
                  beforeAlt="Empty warehouse before private mancave visualisation"
                  afterAlt="Warehouse transformed into a private mancave concept"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the empty warehouse with mancave concept one
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Property Problem
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                An empty warehouse tells you the dimensions.
                <span className="block text-rust">
                  It does not tell you how the space could feel.
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                A buyer may be looking at a large vacant industrial space and
                trying to imagine a private retreat, entertainment room,
                collector space, games area or somewhere to spend time with
                friends.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The listing photography gives them the building. Visualisation
                can give them a much clearer picture of the lifestyle
                opportunity inside it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPT ONE */}
      <section
        id="concept-one"
        className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28"
      >
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Mancave Concept 01
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                One possible lifestyle direction.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Keep the original warehouse recognisable while introducing a
                completely different way to experience the property.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-mancave.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mancave1.png"
                beforeAlt="Vacant industrial warehouse before mancave transformation"
                afterAlt="Vacant industrial warehouse visualised as a private mancave"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPT TWO */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-mancave.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mancave2.png"
                beforeAlt="Empty warehouse before second mancave concept visualisation"
                afterAlt="Empty warehouse transformed into a second private mancave concept"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Mancave Concept 02
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Same warehouse.
                <br />
                Another possibility.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                The value is not showing one definitive fitout. It is helping
                someone understand that the empty shell can support very
                different ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUYER ANGLE */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                For Buyers & Owners
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                “Could I actually create the space I have in mind here?”
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Entertainment Space",
                  text: "Explore how a large industrial shell might work as somewhere to relax and entertain.",
                },
                {
                  number: "02",
                  title: "Car & Collection Space",
                  text: "Help picture a property being used around vehicles, collections or personal interests.",
                },
                {
                  number: "03",
                  title: "Games & Recreation",
                  text: "Use the scale of the warehouse to explore different leisure and recreation ideas.",
                },
                {
                  number: "04",
                  title: "Personal Retreat",
                  text: "Turn an anonymous vacant space into something that feels connected to the buyer's lifestyle.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="min-h-[220px] border-b border-r border-white/10 p-7"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-brassBright">
                    {item.number}
                  </p>

                  <h3 className="mt-9 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AGENT ANGLE */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                For Commercial Agents
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Market the lifestyle potential, not only the empty floor area.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                Some buyers may not be searching for a traditional warehouse
                use at all. They may be searching for space.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                A visual concept can help a commercial campaign demonstrate
                alternative lifestyle possibilities using the exact property
                photography already produced for the listing.
              </p>

              <div className="mt-10 grid border-l border-t border-black/10 sm:grid-cols-2">
                {[
                  "Broaden buyer imagination",
                  "Show alternative property uses",
                  "Create additional campaign imagery",
                  "Make vacant space easier to understand",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="min-h-[145px] border-b border-r border-black/10 p-6"
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-rust">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-7 font-display text-xl font-semibold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH QUESTION */}
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              The Real Estate Question
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              How can I see what an empty warehouse could become before I buy
              or lease it?
            </h2>

            <p className="mt-7 text-xl leading-9 text-black/60">
              Start with the existing property photography and create visual
              concepts around the use you actually have in mind.
            </p>

            <p className="mt-5 max-w-4xl leading-8 text-black/50">
              That might be a gym, private mancave, showroom, studio, storage
              concept or another commercial use. The objective is not to
              replace professional design work. It is to make the potential of
              the property easier to picture earlier in the decision process.
            </p>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTE */}
      <section className="bg-[#f7f5f1] py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Visual Concept Only
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Picture the possibility.
              <br />
              Then verify what is actually permitted.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              These visuals are conceptual marketing and decision support
              imagery. They do not confirm planning approval, building
              suitability or compliance for a particular use.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Buyers, tenants and owners should obtain the relevant professional
              advice before purchasing, leasing or undertaking a fitout.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/projects/warehouse-to-gym-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Another Warehouse Use
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                See the same real estate problem from a gym operator&apos;s
                point of view.
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore an empty industrial space transformed into a working
                fitness facility concept.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View warehouse to gym
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/commercial-property-animation"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Commercial Property
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Explore more ways commercial property media can work harder.
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See commercial property visualisation and animation examples
                created from existing imagery.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore commercial work
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Commercial Property Visualisation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Got an empty space
            <br />
            and an idea for what it could become?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the existing property photography and tell us the use
            you&apos;re trying to picture.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss a property concept
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}