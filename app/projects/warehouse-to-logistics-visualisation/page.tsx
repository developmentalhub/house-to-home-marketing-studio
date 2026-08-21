import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Warehouse to Logistics Visualisation | Commercial Property Case Study",
  description:
    "See how an empty warehouse can be visualised as a logistics and distribution facility to help operators assess a potential site and help commercial agents market industrial property to logistics tenants.",
  alternates: {
    canonical: `${SITE_URL}/projects/warehouse-to-logistics-visualisation`,
  },
  openGraph: {
    title: "Warehouse to Logistics Visualisation",
    description:
      "An empty warehouse transformed into a logistics and distribution concept for operators, agents and landlords.",
    url: `${SITE_URL}/projects/warehouse-to-logistics-visualisation`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png`,
        alt: "Empty warehouse transformed into a logistics and distribution facility visualisation",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Warehouse to Logistics Visualisation",
  description:
    "A commercial property case study showing an empty warehouse transformed into a logistics and distribution facility concept.",
  mainEntityOfPage: `${SITE_URL}/projects/warehouse-to-logistics-visualisation`,
  image: [
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png`,
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

export default function WarehouseToLogisticsVisualisationPage() {
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
                Warehouse To Logistics Visualisation
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Looking at an empty warehouse
                <span className="block text-rust">
                  for logistics or distribution?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                A vacant industrial property shows you the building. It does not
                automatically show how storage, racking, goods movement, staff
                and day to day operations could work inside it.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                We can use the existing property photography to create a visual
                concept of the warehouse operating as a logistics or
                distribution facility.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#transformation"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  See the logistics concept
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
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png"
                  beforeAlt="Empty warehouse before logistics and distribution visualisation"
                  afterAlt="Warehouse transformed into a logistics and distribution facility"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the vacant warehouse with the logistics concept
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
                For Logistics & Distribution Operators
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                The warehouse might have the right floor area.
                <span className="block text-rust">
                  But can you picture your operation inside it?
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                A logistics business is not simply looking at four walls and a
                roof. It is thinking about storage, stock movement, operational
                flow, people and how the facility might function once occupied.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                A visual concept can help make that future use easier to
                understand before detailed warehouse planning begins.
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
              to active logistics environment.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              Keep the original warehouse recognisable while adding the visual
              cues that help people understand a possible logistics use.
            </p>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <BeforeAfterSlider
              before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
              after="/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png"
              beforeAlt="Vacant industrial warehouse before logistics facility visualisation"
              afterAlt="Vacant industrial warehouse visualised as an active logistics and distribution facility"
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
                Turn a property listing into something closer to an operating
                facility.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Storage & Racking",
                  text: "Explore how the internal volume could feel once shelving, stock or warehouse storage is introduced.",
                },
                {
                  number: "02",
                  title: "Goods Movement",
                  text: "Use operational activity to help show how the warehouse could function once occupied.",
                },
                {
                  number: "03",
                  title: "People & Scale",
                  text: "Introduce staff to make the property dimensions and working environment easier to understand.",
                },
                {
                  number: "04",
                  title: "Operational Density",
                  text: "Help picture the difference between an empty shell and a busy distribution environment.",
                },
                {
                  number: "05",
                  title: "Business Activity",
                  text: "Show the property as part of a working logistics operation rather than a vacant industrial tenancy.",
                },
                {
                  number: "06",
                  title: "Future Use",
                  text: "Give decision makers another way to assess the opportunity before detailed planning begins.",
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
                For Industrial Agents & Landlords
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Make the warehouse relevant to logistics tenants before they
                have to imagine the whole operation themselves.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-white/60">
                A logistics operator may be comparing several vacant industrial
                properties that all look broadly similar in listing
                photography.
              </p>

              <p className="mt-5 leading-8 text-white/45">
                An industry specific visual gives your campaign another way to
                communicate how the property could be used.
              </p>

              <div className="mt-10 grid border-l border-t border-white/10 sm:grid-cols-2">
                {[
                  "Target logistics operators",
                  "Show an occupied warehouse",
                  "Communicate operational scale",
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
              Help the operator picture the facility.
              <br />
              Help the agent market the opportunity.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 md:p-10">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Logistics Operator
              </p>

              <h3 className="mt-5 font-display text-3xl font-semibold">
                “Can I picture our operation working in this warehouse?”
              </h3>

              <p className="mt-5 leading-8 text-black/50">
                Use the existing real estate photography to explore a possible
                operational environment before moving into detailed warehouse
                planning.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 md:p-10">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Industrial Agent
              </p>

              <h3 className="mt-5 font-display text-3xl font-semibold">
                “How do I make this vacant warehouse relevant to logistics
                tenants?”
              </h3>

              <p className="mt-5 leading-8 text-black/50">
                Add an industry specific outcome to the existing campaign so
                prospective occupiers do not have to start from an empty image.
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
              How can I visualise an empty warehouse as a logistics facility
              before committing to the property?
            </h2>

            <p className="mt-7 text-xl leading-9 text-black/60">
              Start with the existing commercial property photography and use
              it to create a visual concept around the type of logistics or
              distribution operation you are considering.
            </p>

            <p className="mt-5 max-w-4xl leading-8 text-black/50">
              Storage, stock, staff and operational activity can help make the
              property easier to understand before detailed warehouse design or
              operational planning begins.
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
              Picture the operation.
              <br />
              Verify the property separately.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              This type of visualisation helps explore how a warehouse could
              look and feel as a logistics or distribution facility. It does
              not confirm operational suitability, planning approval or
              compliance for that use.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Operators should undertake their own professional assessment of
              access, loading, storage capacity, circulation, fire
              requirements, building compliance and other site requirements
              before committing to a property.
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
                See how the commercial property could be presented to a fitness
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
                See the same real estate problem solved for an automotive
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
              href="/projects/warehouse-to-mancave-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Lifestyle
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Warehouse to Mancave
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore a very different use for the same type of vacant
                industrial space.
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
            Logistics Property Visualisation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Empty warehouse.
            <br />
            Easier operation to picture.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the existing commercial property photography and tell us
            the logistics or distribution use you are trying to visualise.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss a logistics concept
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}