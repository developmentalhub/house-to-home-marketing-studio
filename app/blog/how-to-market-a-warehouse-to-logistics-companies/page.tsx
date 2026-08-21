import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Market a Warehouse to Logistics Companies",
  description:
    "A practical guide for commercial agents and landlords on marketing a vacant warehouse to logistics and distribution businesses using industry specific property visualisation.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-market-a-warehouse-to-logistics-companies`,
  },
  openGraph: {
    title: "How to Market a Warehouse to Logistics Companies",
    description:
      "Show logistics operators how a vacant warehouse could function as a working distribution environment using the property photography you already have.",
    url: `${SITE_URL}/blog/how-to-market-a-warehouse-to-logistics-companies`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png`,
        alt: "Vacant warehouse transformed into a logistics and distribution facility concept",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Market a Warehouse to Logistics Companies",
  description:
    "A practical commercial property marketing guide showing how logistics specific visualisation can make a vacant warehouse more relevant to distribution and logistics operators.",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-market-a-warehouse-to-logistics-companies`,
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

export default function HowToMarketAWarehouseToLogisticsCompaniesPage() {
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
                How do you market
                <span className="block text-rust">
                  a warehouse to logistics companies?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                Show more than an empty industrial shell. Help logistics
                operators picture storage, stock movement, staff and the
                atmosphere of a working distribution facility.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                That extra campaign content can be created from the commercial
                property photography you already have.
              </p>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png"
                  beforeAlt="Vacant warehouse before logistics specific property marketing visualisation"
                  afterAlt="Warehouse visualised as an active logistics and distribution facility"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the vacant warehouse with the logistics concept
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
              How can you make a vacant warehouse more relevant to a logistics
              or distribution business?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Create a logistics specific version of the existing property
              photograph showing how the warehouse could look once occupied by
              storage, stock, staff and operational activity.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              The aim is to help the operator connect the vacant tenancy with
              the type of environment they are trying to run.
            </p>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Marketing Problem
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                The property may suit logistics.
                <span className="block text-rust">
                  The listing may not make that obvious.
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                Empty warehouse photography shows the building clearly, but a
                logistics operator is thinking about much more than the walls
                and floor.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                They are trying to picture how the warehouse might feel once
                filled with stock, storage systems, staff and constant
                operational movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN VISUAL */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png"
                beforeAlt="Original warehouse photograph before logistics facility visualisation"
                afterAlt="Original warehouse photograph transformed into a logistics and distribution concept"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Industry Specific Visualisation
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Turn floor area into an operating environment.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                The warehouse remains recognisable while the image introduces
                the visual cues that make the property easier to understand
                from a logistics perspective.
              </p>

              <p className="mt-6 font-display text-3xl font-semibold text-rust">
                One shoot. More campaign content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO SHOW */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What To Show
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Build the image around the operator&apos;s real questions.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Storage",
                  text: "Show how the warehouse volume could feel once storage or racking is introduced.",
                },
                {
                  number: "02",
                  title: "Stock",
                  text: "Product and inventory make the space feel much closer to an active distribution environment.",
                },
                {
                  number: "03",
                  title: "Staff",
                  text: "People help communicate scale and make the operational environment easier to understand.",
                },
                {
                  number: "04",
                  title: "Movement",
                  text: "Operational activity helps transform the image from a static vacant tenancy into a working facility.",
                },
                {
                  number: "05",
                  title: "Business Density",
                  text: "A populated warehouse helps the prospect understand how the floor and height might feel once occupied.",
                },
                {
                  number: "06",
                  title: "The Real Property",
                  text: "Keep the actual warehouse recognisable so the concept stays connected to the tenancy being marketed.",
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

      {/* THINK LIKE OPERATOR */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Think Like The Operator
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A logistics operator is trying to picture a system, not an empty
                room.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-white/60">
                Your marketing should help them understand how the property
                might feel once their business is actually running inside it.
              </p>

              <div className="mt-10 grid border-l border-t border-white/10 sm:grid-cols-2">
                {[
                  "What does the space feel like once occupied?",
                  "Can I picture storage inside the building?",
                  "Does the warehouse volume still feel workable?",
                  "Can I imagine our people and stock here?",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="min-h-[150px] border-b border-r border-white/10 p-6"
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

      {/* CAMPAIGN STRATEGY */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Campaign Strategy
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Keep the real listing.
                <br />
                Add the logistics story.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                The visual concept should sit alongside the normal property
                photography rather than replace it.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                That gives the prospect both the actual vacant tenancy and a
                clearer picture of one possible industry use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE TO USE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Where The Visual Can Help
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Industrial leasing campaigns",
                "Logistics tenant prospecting",
                "Landlord marketing material",
                "Commercial property presentations",
                "Industry specific landing pages",
                "Short form property content",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/10 bg-white p-6"
                >
                  <p className="font-display text-xl font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENT INDUSTRIES */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What If The Property Suits Other Industries?
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Create a different visual for a different audience.
            </h2>

            <p className="mt-7 text-xl leading-9 text-black/60">
              The same warehouse may also appeal to fitness, automotive,
              photography or other commercial businesses.
            </p>

            <p className="mt-5 max-w-4xl leading-8 text-black/50">
              Instead of asking one generic campaign image to speak to all of
              them, create separate visuals that make the property easier to
              understand for each target industry.
            </p>

            <Link
              href="/blog/how-to-visualise-an-empty-warehouse-for-different-industries"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-rust"
            >
              See how to visualise one warehouse for different industries
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* LIMIT */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Keep The Marketing Clear
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              A logistics visual is a possible use, not a feasibility study.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              The concept is designed to help people understand how the
              property could look and feel as a logistics or distribution
              facility.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Operators should separately investigate access, loading,
              circulation, storage requirements, fire safety, planning,
              building compliance and other operational requirements before
              committing to a property.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/projects/warehouse-to-logistics-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Logistics Case Study
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Warehouse to Logistics
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See the full warehouse transformation.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View case study
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/commercial-property-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Commercial Property
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Commercial Property Visualisation
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore industry specific visualisation for different
                commercial audiences.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore service
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/projects/warehouse-to-mechanic-workshop-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Another Industry
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Warehouse to Mechanic Workshop
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See how the same approach can target automotive operators.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View case study
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
            Logistics Property Marketing
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Trying to attract
            <br />
            logistics operators?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the warehouse photography you already have and we can help
            create a logistics specific visual for the property campaign.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss a logistics campaign
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}