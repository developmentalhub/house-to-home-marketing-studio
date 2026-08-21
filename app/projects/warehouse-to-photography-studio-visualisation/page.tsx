import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Warehouse to Photography Studio Visualisation | Commercial Property Case Study",
  description:
    "See how an empty warehouse can be visualised as a photography studio to help photographers and production businesses assess a potential space and help commercial agents market industrial property to creative tenants.",
  alternates: {
    canonical: `${SITE_URL}/projects/warehouse-to-photography-studio-visualisation`,
  },
  openGraph: {
    title: "Warehouse to Photography Studio Visualisation",
    description:
      "An empty warehouse transformed into a photography studio concept for creative operators, agents and landlords.",
    url: `${SITE_URL}/projects/warehouse-to-photography-studio-visualisation`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png`,
        alt: "Empty warehouse transformed into a photography studio visualisation",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Warehouse to Photography Studio Visualisation",
  description:
    "A commercial property case study showing an empty warehouse transformed into a photography studio concept.",
  mainEntityOfPage: `${SITE_URL}/projects/warehouse-to-photography-studio-visualisation`,
  image: [
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png`,
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

export default function WarehouseToPhotographyStudioVisualisationPage() {
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
                Warehouse To Photography Studio Visualisation
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Looking at an empty warehouse
                <span className="block text-rust">
                  for your next studio?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                A vacant industrial space can be hard to judge when you are
                trying to picture shooting zones, backdrops, equipment,
                production areas, clients and the atmosphere of a working
                photography studio.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                We can use the existing property photography to create a visual
                concept of how the warehouse could look once operating as a
                photography or creative production studio.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#transformation"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  See the studio concept
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
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png"
                  beforeAlt="Empty warehouse before photography studio visualisation"
                  afterAlt="Warehouse transformed into a working photography studio"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the vacant warehouse with the photography studio concept
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
                For Photographers & Creative Operators
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                The warehouse may have the right ceiling height.
                <span className="block text-rust">
                  But can you picture the studio operating inside it?
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                A photographer or production business is thinking about much
                more than floor area. They are thinking about shooting zones,
                light, equipment, movement, client areas and how the studio
                might actually function day to day.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                A visual concept can make that potential easier to understand
                before progressing into detailed fitout design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN TRANSFORMATION */}
      <section
        id="transformation"
        className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28"
      >
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Before & After
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              From empty industrial shell
              <br />
              to active creative studio.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              Keep the original warehouse recognisable while adding the visual
              cues that help a creative operator understand one possible use.
            </p>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <BeforeAfterSlider
              before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
              after="/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png"
              beforeAlt="Vacant industrial warehouse before photography studio transformation"
              afterAlt="Vacant industrial warehouse visualised as an active photography and production studio"
            />
          </div>
        </div>
      </section>

      {/* WHAT OPERATOR NEEDS TO SEE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What The Operator Is Trying To Picture
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Turn the listing photo into something closer to the creative
                business you want to run.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Shooting Zones",
                  text: "Explore how the floor area could support multiple sets, backdrops or production zones.",
                },
                {
                  number: "02",
                  title: "Equipment & Storage",
                  text: "Help visualise how stands, lighting, cases and production gear could occupy the space.",
                },
                {
                  number: "03",
                  title: "People & Scale",
                  text: "Use photographers, crew and talent to make the warehouse volume easier to understand.",
                },
                {
                  number: "04",
                  title: "Client Experience",
                  text: "Explore how the space might feel when clients, crew and production activity are present.",
                },
                {
                  number: "05",
                  title: "Creative Fitout",
                  text: "Test a broad visual direction before investing in detailed studio design.",
                },
                {
                  number: "06",
                  title: "Working Atmosphere",
                  text: "Turn a cold vacant tenancy into something that feels like an operating creative business.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="min-h-[220px] border-b border-r border-black/10 p-7"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-rust">
                    {item.number}
                  </p>

                  <h3 className="mt-8 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/50">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AGENT ANGLE */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                For Commercial Agents & Landlords
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Make the property relevant to photographers, production
                companies and creative businesses.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-white/60">
                A creative operator may be looking for ceiling height, open
                floor area and flexibility, but vacant warehouse photography
                does not automatically communicate what a studio could become.
              </p>

              <p className="mt-5 leading-8 text-white/45">
                An industry specific visual gives the campaign another way to
                speak directly to that audience.
              </p>

              <div className="mt-10 grid border-l border-t border-white/10 sm:grid-cols-2">
                {[
                  "Target photographers",
                  "Target production businesses",
                  "Show an active studio use",
                  "Create industry specific campaign content",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="min-h-[145px] border-b border-r border-white/10 p-6"
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brassBright">
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
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              One Visual. Two Problems Solved.
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Help the photographer picture the studio.
              <br />
              Help the agent market the opportunity.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 md:p-10">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Creative Operator
              </p>

              <h3 className="mt-5 font-display text-3xl font-semibold">
                “Can I actually see my studio working here?”
              </h3>

              <p className="mt-5 leading-8 text-black/50">
                Use the existing property image to explore a visual concept
                before moving into detailed studio planning or fitout.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 md:p-10">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Commercial Agent
              </p>

              <h3 className="mt-5 font-display text-3xl font-semibold">
                “How do I make this warehouse relevant to creative tenants?”
              </h3>

              <p className="mt-5 leading-8 text-black/50">
                Show a photography studio outcome alongside the normal property
                photography so the opportunity is easier to understand.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SEARCH QUESTION */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              The Real Estate Question
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              How can I visualise an empty warehouse as a photography studio
              before committing to the property?
            </h2>

            <p className="mt-7 text-xl leading-9 text-black/60">
              Start with the existing property photography and use that image
              to explore a visual direction for the type of studio you are
              considering.
            </p>

            <p className="mt-5 max-w-4xl leading-8 text-black/50">
              Shooting areas, lighting equipment, people, production activity
              and studio fitout elements can help make the vacant property
              easier to picture as a working creative environment.
            </p>
          </div>
        </div>
      </section>

      {/* BOUNDARY */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Visual Concept Only
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Picture the studio.
              <br />
              Assess the property separately.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              This visualisation helps explore how the property could look and
              feel as a photography or production studio. It is not an
              architectural, acoustic, electrical or planning assessment.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Operators should separately assess matters such as permitted use,
              power requirements, access, sound, climate control, amenities,
              building compliance and other requirements relevant to their
              studio.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/projects/warehouse-to-gym-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Fitness
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Warehouse to Gym
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See the same commercial property problem solved for a fitness
                operator.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View project
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/projects/warehouse-to-mechanic-workshop-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Automotive
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Warehouse to Mechanic Workshop
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See how an automotive operator could picture the same type of
                vacant warehouse.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View project
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/projects/warehouse-to-logistics-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Logistics
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Warehouse to Logistics
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore the warehouse as an active logistics and distribution
                environment.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View project
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
            Photography Studio Visualisation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Empty warehouse.
            <br />
            Easier studio to picture.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the existing commercial property photography and tell us
            the creative use you are trying to visualise.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss a studio concept
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}