import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Warehouse to Mechanic Workshop Visualisation | Commercial Property Case Study",
  description:
    "See how an empty warehouse can be visualised as a mechanic workshop to help automotive operators assess a potential space and help commercial agents market industrial property to automotive tenants.",
  alternates: {
    canonical: `${SITE_URL}/projects/warehouse-to-mechanic-workshop-visualisation`,
  },
  openGraph: {
    title: "Warehouse to Mechanic Workshop Visualisation",
    description:
      "One empty warehouse transformed into two mechanic workshop concepts for automotive operators, agents and landlords.",
    url: `${SITE_URL}/projects/warehouse-to-mechanic-workshop-visualisation`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png`,
        alt: "Empty warehouse transformed into a mechanic workshop visualisation",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Warehouse to Mechanic Workshop Visualisation",
  description:
    "A commercial property case study showing an empty warehouse transformed into two automotive mechanic workshop concepts.",
  mainEntityOfPage: `${SITE_URL}/projects/warehouse-to-mechanic-workshop-visualisation`,
  image: [
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png`,
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic2.png`,
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

export default function WarehouseToMechanicWorkshopVisualisationPage() {
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
                Warehouse To Mechanic Workshop Visualisation
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Looking at an empty warehouse
                <span className="block text-rust">
                  for your next workshop?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                It can be hard to judge a vacant industrial space when you are
                trying to picture hoists, work bays, vehicles, tool storage,
                customer areas and the day to day flow of an automotive
                business.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                We can use the existing property photography to create a visual
                concept of how the warehouse could look once operating as a
                mechanic workshop.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#concept-one"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  See the workshop concepts
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/enquire"
                  className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Discuss a warehouse concept
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png"
                  beforeAlt="Empty warehouse before mechanic workshop visualisation"
                  afterAlt="Warehouse transformed into a working automotive mechanic workshop"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the empty warehouse with mechanic workshop concept one
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATOR PROBLEM */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                For Mechanic & Automotive Operators
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                The warehouse may be big enough.
                <span className="block text-rust">
                  But can you picture your workshop operating inside it?
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                A property listing shows the tenancy as it is. An automotive
                operator is trying to imagine how vehicles, work bays,
                equipment, storage and staff could actually function within the
                space.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                A visual concept helps make that possible use easier to picture
                before progressing into detailed fitout planning.
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
                Mechanic Workshop Concept 01
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Turn the vacant shell into a working automotive environment.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                The original warehouse stays recognisable while the visual adds
                the cues that help an automotive operator understand how the
                business could occupy the property.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png"
                beforeAlt="Vacant warehouse before automotive workshop transformation"
                afterAlt="Vacant warehouse visualised as a mechanic workshop with vehicles and equipment"
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
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic2.png"
                beforeAlt="Empty warehouse before second mechanic workshop concept"
                afterAlt="Empty warehouse transformed into a second automotive mechanic workshop concept"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Mechanic Workshop Concept 02
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Same warehouse.
                <br />
                Another workshop direction.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Showing more than one concept makes it easier to understand that
                the empty tenancy can support different automotive layouts and
                visual directions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CAN BE EXPLORED */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                What The Operator Is Trying To Picture
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Turn the real estate listing into something closer to the
                business you want to run.
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Work Bays",
                  text: "Explore how vehicle service areas could sit within the available warehouse space.",
                },
                {
                  number: "02",
                  title: "Vehicles & Scale",
                  text: "Use vehicles to make the internal dimensions and circulation of the tenancy easier to understand.",
                },
                {
                  number: "03",
                  title: "Tools & Equipment",
                  text: "Show the warehouse as an operating workshop rather than an empty industrial shell.",
                },
                {
                  number: "04",
                  title: "Storage & Organisation",
                  text: "Help visualise how tools, parts and workshop storage could form part of the space.",
                },
                {
                  number: "05",
                  title: "Staff Activity",
                  text: "Introduce technicians and workshop activity so the property feels occupied and functional.",
                },
                {
                  number: "06",
                  title: "Customer Experience",
                  text: "Explore how a workshop could feel as a real business rather than only a back of house industrial space.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="min-h-[220px] border-b border-r border-white/10 p-7"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-brassBright">
                    {item.number}
                  </p>

                  <h3 className="mt-8 font-display text-2xl font-semibold">
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

      {/* AGENT PROBLEM */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                For Commercial Agents & Landlords
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Make the warehouse relevant to automotive tenants before they
                inspect it.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                An automotive operator looking at a vacant warehouse has to
                mentally build the entire workshop from scratch.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                A mechanic workshop concept gives the commercial campaign a
                second image that speaks directly to that industry.
              </p>

              <div className="mt-10 grid border-l border-t border-black/10 sm:grid-cols-2">
                {[
                  "Target automotive operators",
                  "Show potential workshop use",
                  "Make vacant space easier to understand",
                  "Create industry specific campaign content",
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

      {/* TWO SIDES */}
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              One Visual. Two Problems Solved.
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Help the mechanic picture the workshop.
              <br />
              Help the agent market the opportunity.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 md:p-10">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Automotive Operator
              </p>

              <h3 className="mt-5 font-display text-3xl font-semibold">
                “Can I actually see my workshop operating here?”
              </h3>

              <p className="mt-5 leading-8 text-black/50">
                Visualise the empty tenancy as the type of automotive business
                you are considering before progressing to detailed fitout work.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 md:p-10">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Commercial Agent
              </p>

              <h3 className="mt-5 font-display text-3xl font-semibold">
                “How do I make this warehouse relevant to mechanic tenants?”
              </h3>

              <p className="mt-5 leading-8 text-black/50">
                Show a workshop specific outcome alongside the standard listing
                photography so the property opportunity is easier to
                understand.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SEARCH QUESTION */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              The Real Estate Question
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              How can I visualise an empty warehouse as a mechanic workshop
              before taking on the property?
            </h2>

            <p className="mt-7 text-xl leading-9 text-black/60">
              Start with the existing commercial property photography, then use
              that image to explore a realistic visual direction for the
              automotive business you are considering.
            </p>

            <p className="mt-5 max-w-4xl leading-8 text-black/50">
              Vehicles, equipment, work bays, storage and people can help make
              the empty industrial space easier to understand before detailed
              design work begins.
            </p>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTE */}
      <section className="border-y border-black/10 bg-white py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Visual Concept Only
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Picture the workshop.
              <br />
              Verify the property separately.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              This type of visualisation helps explore how the space could look
              and feel as an automotive workshop. It does not confirm planning,
              building suitability or compliance for that use.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Operators should obtain the relevant professional advice before
              leasing, purchasing or undertaking a workshop fitout.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/projects/warehouse-to-gym-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Another Industry
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                See an empty warehouse transformed into a gym.
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore the same property marketing problem from a fitness
                operator&apos;s perspective.
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
              href="/projects/warehouse-to-mancave-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Alternative Use
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                See the warehouse transformed into a private lifestyle space.
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore how an industrial property can be presented for a very
                different type of buyer.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View warehouse to mancave
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
            Mechanic Workshop Visualisation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Empty warehouse.
            <br />
            Easier workshop to picture.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the existing commercial property photography and tell us
            the automotive use you are trying to picture.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss a workshop concept
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}