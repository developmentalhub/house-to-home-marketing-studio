import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Market a Warehouse to Mechanic Workshops",
  description:
    "A practical guide for commercial agents and landlords on marketing a vacant warehouse to mechanics and automotive businesses using industry specific property visualisation.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-market-a-warehouse-to-mechanic-workshops`,
  },
  openGraph: {
    title: "How to Market a Warehouse to Mechanic Workshops",
    description:
      "Show automotive operators how a vacant warehouse could work as a mechanic workshop using the property photography you already have.",
    url: `${SITE_URL}/blog/how-to-market-a-warehouse-to-mechanic-workshops`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png`,
        alt: "Vacant warehouse transformed into a mechanic workshop concept",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Market a Warehouse to Mechanic Workshops",
  description:
    "A practical commercial property marketing guide showing how automotive specific visualisation can make a vacant warehouse more relevant to mechanics and workshop operators.",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-market-a-warehouse-to-mechanic-workshops`,
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

export default function HowToMarketAWarehouseToMechanicWorkshopsPage() {
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
                  a warehouse to mechanics?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                Show more than a vacant industrial shell. Help automotive
                operators picture vehicles, work bays, equipment, tools and a
                working mechanic workshop inside the property.
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
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png"
                  beforeAlt="Vacant warehouse before automotive workshop marketing visualisation"
                  afterAlt="Warehouse visualised as an active mechanic workshop with vehicles and equipment"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the vacant warehouse with the mechanic workshop concept
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
              How can you make a vacant warehouse more relevant to a mechanic
              or automotive business?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Create an automotive specific version of the existing property
              photograph showing how the warehouse could look as a working
              mechanic workshop.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Vehicles, workshop equipment, work bays, storage and technicians
              make it much easier for an operator to connect the empty tenancy
              with the business they are trying to run.
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
                The property may suit a workshop.
                <span className="block text-rust">
                  The listing may not make that obvious.
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                Empty warehouse photography tells an automotive operator what
                the building looks like today. It does not necessarily help
                them picture cars on the floor, technicians working, equipment
                installed and the business operating.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                That gap between the empty property and the intended business
                use is exactly what an industry specific visual can help solve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPT ONE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png"
                beforeAlt="Original warehouse photograph before mechanic workshop visualisation"
                afterAlt="Original warehouse photograph transformed into a mechanic workshop concept"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Workshop Concept 01
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Show the operator a business environment, not just floor area.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Adding automotive activity immediately changes how the property
                is read.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The warehouse remains recognisable, but the prospect can now
                see one possible direction for the tenancy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPT TWO */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Workshop Concept 02
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                One property can support more than one workshop direction.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                A second visual can help communicate flexibility without falling
                back on generic wording.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Instead of saying the warehouse could suit automotive use, show
                another example of what that use could look like.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic2.png"
                beforeAlt="Empty industrial warehouse before second mechanic workshop concept"
                afterAlt="Empty industrial warehouse transformed into a second automotive workshop concept"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO SHOW */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What To Show
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Build the visual around the operator&apos;s real questions.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Vehicles",
                  text: "Vehicles immediately provide scale and make the intended automotive use clear.",
                },
                {
                  number: "02",
                  title: "Work Bays",
                  text: "Show how workshop activity could be distributed across the available floor area.",
                },
                {
                  number: "03",
                  title: "Tools & Equipment",
                  text: "Introduce the visual language of an operating mechanic workshop.",
                },
                {
                  number: "04",
                  title: "Technicians",
                  text: "People make the space feel active and help communicate how the property could function day to day.",
                },
                {
                  number: "05",
                  title: "Storage",
                  text: "Parts, tools and equipment storage can help the operator picture a more complete working environment.",
                },
                {
                  number: "06",
                  title: "The Real Property",
                  text: "Keep the original warehouse visible so the concept stays connected to the property being marketed.",
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

      {/* THINK LIKE A MECHANIC */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Think Like The Operator
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A mechanic is not buying an empty photograph.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-white/60">
                They are trying to decide whether the property could support
                their business.
              </p>

              <p className="mt-5 leading-8 text-white/45">
                Good property marketing helps them picture that next step more
                clearly.
              </p>

              <div className="mt-10 grid border-l border-t border-white/10 sm:grid-cols-2">
                {[
                  "Can vehicles move through the space?",
                  "Can I picture several work areas?",
                  "Does the warehouse feel large enough once occupied?",
                  "Can I imagine customers and staff using it?",
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
                Keep the normal listing images.
                <br />
                Add the workshop story.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                Industry specific visualisation works best as additional
                campaign content rather than a replacement for the original
                commercial property photography.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The prospect can see both the real vacant tenancy and a possible
                automotive use.
              </p>

              <p className="mt-7 font-display text-3xl font-semibold text-rust">
                One shoot. More campaign content.
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
                Where The Content Can Help
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Industrial leasing campaigns",
                "Automotive tenant prospecting",
                "Commercial property presentations",
                "Landlord leasing material",
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

      {/* MORE INDUSTRIES */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What If The Warehouse Suits Other Industries?
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Do not make one image speak to everybody.
            </h2>

            <p className="mt-7 text-xl leading-9 text-black/60">
              If the warehouse could also appeal to logistics operators, gyms
              or creative businesses, build separate campaign visuals for those
              audiences.
            </p>

            <p className="mt-5 max-w-4xl leading-8 text-black/50">
              Each industry gets a version of the property that makes sense in
              the context of its own business.
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
              A workshop visual is a possible use, not proof the use is
              permitted.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              The concept is designed to help people understand how the property
              could look and feel as an automotive workshop.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Operators should separately investigate planning, access,
              environmental requirements, ventilation, fire safety, building
              compliance, vehicle circulation and any other requirements
              relevant to the property and proposed business.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/projects/warehouse-to-mechanic-workshop-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Automotive Case Study
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Warehouse to Mechanic Workshop
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See both workshop concepts created from the vacant warehouse.
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
                Explore industry specific property concepts for different
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
              href="/projects/warehouse-to-gym-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Another Industry
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Warehouse to Gym
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See how the same property marketing idea can target fitness
                operators.
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
            Automotive Property Marketing
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Trying to attract
            <br />
            mechanic workshop tenants?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the commercial property photography you already have and
            we can help create an automotive specific visual for the campaign.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss an automotive campaign
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}