import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Visualise an Empty Warehouse for Different Industries",
  description:
    "See how one empty warehouse can be visualised for different industries including gyms, mechanic workshops, logistics businesses, photography studios and private lifestyle use.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-visualise-an-empty-warehouse-for-different-industries`,
  },
  openGraph: {
    title: "How to Visualise an Empty Warehouse for Different Industries",
    description:
      "One empty warehouse can tell very different stories depending on the buyer, tenant or operator you are trying to reach.",
    url: `${SITE_URL}/blog/how-to-visualise-an-empty-warehouse-for-different-industries`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Empty warehouse transformed into an industry specific commercial property visualisation",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Visualise an Empty Warehouse for Different Industries",
  description:
    "A practical guide to using existing commercial property photography to show different possible warehouse uses for different industries.",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-visualise-an-empty-warehouse-for-different-industries`,
  image: [
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png`,
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png`,
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png`,
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-mancave1.png`,
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

export default function HowToVisualiseAnEmptyWarehouseForDifferentIndustriesPage() {
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
                Commercial Property Marketing Guide
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                How do you market one empty warehouse
                <span className="block text-rust">
                  to completely different industries?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                The same vacant industrial property can mean something very
                different to a gym operator, mechanic, logistics business,
                photographer or private buyer.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                Instead of asking every prospect to imagine the fitout
                themselves, use the property photography you already have to
                show several industry specific possibilities.
              </p>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png"
                  beforeAlt="Empty commercial warehouse before industry specific property visualisation"
                  afterAlt="Commercial warehouse transformed into a logistics and distribution facility"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the vacant warehouse with one possible industry use
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Quick Answer
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              How can you show different uses for an empty warehouse?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Start with the existing commercial property photograph and create
              separate visual concepts for the industries you believe the space
              could appeal to.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              A gym version should look like a gym. A mechanic version should
              show workshop activity. A logistics version should communicate
              storage and movement. The underlying warehouse stays familiar,
              but the business use changes.
            </p>
          </div>
        </div>
      </section>

      {/* WHY GENERIC IS WEAK */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Problem With Generic Marketing
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                “Flexible warehouse space” still asks the prospect to do most
                of the work.
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                A vacant warehouse campaign may talk about clear span space,
                ceiling height and floor area, but those facts do not always
                help a business owner imagine their operation inside the
                property.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Industry specific visualisation makes the message more direct.
                The property is no longer just flexible. The prospect can see
                one example of how that flexibility might apply to them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GYM */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                beforeAlt="Empty warehouse before fitness facility visualisation"
                afterAlt="Warehouse transformed into an active gym and fitness facility"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Industry 01 · Gym & Fitness
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A gym operator is not trying to picture an empty warehouse.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                They are thinking about equipment, training zones, reception,
                members, circulation and whether the industrial space could
                feel like their fitness business.
              </p>

              <Link
                href="/projects/warehouse-to-gym-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                See the gym case study
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MECHANIC */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Industry 02 · Automotive
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A mechanic needs to see workshop activity.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Work bays, vehicles, equipment and people can make the tenancy
                much easier to understand as an automotive environment.
              </p>

              <Link
                href="/projects/warehouse-to-mechanic-workshop-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                See the mechanic workshop case study
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png"
                beforeAlt="Vacant warehouse before mechanic workshop visualisation"
                afterAlt="Vacant warehouse transformed into an automotive mechanic workshop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOGISTICS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png"
                beforeAlt="Empty warehouse before logistics facility visualisation"
                afterAlt="Warehouse transformed into an active logistics and distribution environment"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Industry 03 · Logistics
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A logistics operator is trying to picture an operation, not an
                empty floor.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Storage, stock, people and operational activity help give the
                warehouse a clearer logistics identity.
              </p>

              <Link
                href="/projects/warehouse-to-logistics-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                See the logistics case study
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Industry 04 · Photography & Production
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A creative operator needs to see a studio, not just ceiling
                height.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Shooting areas, lighting, equipment, people and production
                activity can help the industrial space feel much closer to a
                working studio.
              </p>

              <Link
                href="/projects/warehouse-to-photography-studio-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                See the photography studio case study
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png"
                beforeAlt="Empty industrial warehouse before photography studio visualisation"
                afterAlt="Industrial warehouse transformed into a working photography studio"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MANCAVE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-mancave.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mancave1.png"
                beforeAlt="Empty warehouse before private lifestyle visualisation"
                afterAlt="Warehouse transformed into a private mancave and entertainment space"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Use 05 · Private Lifestyle Space
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Some buyers may want the space for something completely
                different.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                A private mancave, collector space or entertainment area can
                show another side of the property&apos;s potential.
              </p>

              <Link
                href="/projects/warehouse-to-mancave-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                See the mancave case study
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL AGENT STRATEGY */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                For Commercial Agents
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                One listing photograph can support several industry specific
                campaign messages.
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Identify The Audience",
                  text: "Choose the industries or buyer types the property could reasonably appeal to.",
                },
                {
                  number: "02",
                  title: "Build A Visual For Each",
                  text: "Create separate outcomes that speak to those audiences rather than one generic image.",
                },
                {
                  number: "03",
                  title: "Keep The Property Familiar",
                  text: "The real estate photograph remains the foundation so the prospect can still recognise the tenancy.",
                },
                {
                  number: "04",
                  title: "Create More Campaign Mileage",
                  text: "The same shoot can now support several different visual stories without organising another photography session.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="min-h-[230px] border-b border-r border-white/10 p-7"
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

      {/* OPERATOR STRATEGY */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              For Buyers & Operators
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              The question is not only “Is the property big enough?”
            </h2>

            <p className="mt-7 text-xl leading-9 text-black/60">
              The harder question is often whether you can picture the property
              becoming the business or space you actually need.
            </p>

            <p className="mt-5 max-w-4xl leading-8 text-black/50">
              Concept visualisation can help you explore that idea earlier in
              the property decision process, before detailed design and fitout
              planning.
            </p>
          </div>
        </div>
      </section>

      {/* IMPORTANT LIMIT */}
      <section className="border-y border-black/10 bg-white py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Visual Concepts, Not Property Approval
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Show what the property could look like.
              <br />
              Verify whether the use actually works separately.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              These visual concepts are designed to make potential property uses
              easier to understand. They do not confirm planning permission,
              compliance, operational suitability or fitout feasibility.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              The relevant professionals should assess the property before any
              buyer, tenant or operator commits to a specific use.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED SERVICE */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <Link
            href="/commercial-property-visualisation"
            className="group block rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft md:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                  Commercial Property Visualisation
                </p>
              </div>

              <div>
                <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                  Explore the full commercial property visualisation service.
                </h2>

                <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                  Explore commercial visualisation
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Commercial Property Marketing
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            One warehouse.
            <br />
            More than one audience.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the commercial property photography you already have and
            tell us the industries or buyers you want the property to make more
            sense to.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss a commercial campaign
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}