import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Show Buyers Different Uses for a Commercial Property",
  description:
    "A practical guide for commercial agents and landlords on using existing property photography to show buyers and tenants different possible uses for a vacant commercial or industrial property.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-show-buyers-different-uses-for-a-commercial-property`,
  },
  openGraph: {
    title: "How to Show Buyers Different Uses for a Commercial Property",
    description:
      "Use the commercial property photography you already have to create industry specific visuals for different buyers, tenants and operators.",
    url: `${SITE_URL}/blog/how-to-show-buyers-different-uses-for-a-commercial-property`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Commercial warehouse visualised as a different possible business use",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Show Buyers Different Uses for a Commercial Property",
  description:
    "A practical guide to using existing commercial property photography to create different visual concepts for different buyers, tenants and industries.",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-show-buyers-different-uses-for-a-commercial-property`,
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

export default function HowToShowBuyersDifferentUsesForACommercialPropertyPage() {
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
                How do you show buyers
                <span className="block text-rust">
                  what a commercial property could become?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                A vacant warehouse can appeal to very different businesses, but
                one empty listing image may not help each buyer or tenant see
                how the property could work for them.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                The solution is to create different visual concepts from the
                property photography you already have.
              </p>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png"
                  beforeAlt="Vacant commercial warehouse before alternative use visualisation"
                  afterAlt="Commercial warehouse visualised as a mechanic workshop"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the vacant property with one possible use
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
              How can you show different possible uses for the same commercial
              property?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Start with the existing real estate photography and create
              separate versions of the property for the specific industries,
              buyers or tenants you want to reach.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              The original photograph stays familiar. What changes is the
              business activity, equipment, furniture, people and atmosphere
              introduced into each concept.
            </p>
          </div>
        </div>
      </section>

      {/* THE CORE PROBLEM */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Real Estate Problem
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Different buyers look at the same property
                <span className="block text-rust">
                  and imagine completely different businesses.
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                A gym operator sees training space. A mechanic sees work bays. A
                logistics company sees storage and movement. A photographer
                sees a studio.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                If your campaign only shows the empty building, each prospect
                has to create that picture in their own head.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY 1 */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                beforeAlt="Empty warehouse before gym visualisation"
                afterAlt="Warehouse transformed into an active gym and fitness facility"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Buyer Type 01 · Fitness
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Show the gym operator the gym.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Add equipment, training zones, reception and members so the
                property becomes easier to assess from a fitness operator&apos;s
                point of view.
              </p>

              <Link
                href="/projects/warehouse-to-gym-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View the gym case study
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY 2 */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Buyer Type 02 · Automotive
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Show the mechanic the workshop.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Vehicles, tools, equipment and workshop activity can make a
                vacant industrial tenancy much easier for an automotive
                operator to understand.
              </p>

              <Link
                href="/projects/warehouse-to-mechanic-workshop-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View the mechanic case study
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic2.png"
                beforeAlt="Empty warehouse before automotive workshop visualisation"
                afterAlt="Warehouse transformed into a mechanic workshop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY 3 */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png"
                beforeAlt="Empty warehouse before logistics visualisation"
                afterAlt="Warehouse transformed into a logistics and distribution environment"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Buyer Type 03 · Logistics
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Show the logistics operator the operation.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Storage, stock, people and activity help turn the empty shell
                into something closer to a working distribution environment.
              </p>

              <Link
                href="/projects/warehouse-to-logistics-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View the logistics case study
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY 4 */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Buyer Type 04 · Creative
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Show the photographer the studio.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Shooting zones, lighting, equipment and production activity can
                help creative operators picture the property in a completely
                different way.
              </p>

              <Link
                href="/projects/warehouse-to-photography-studio-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View the studio case study
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png"
                beforeAlt="Empty warehouse before photography studio visualisation"
                afterAlt="Warehouse transformed into a photography and production studio"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY 5 */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-mancave.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mancave1.png"
                beforeAlt="Empty warehouse before private lifestyle space visualisation"
                afterAlt="Warehouse transformed into a private mancave and entertainment space"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Buyer Type 05 · Lifestyle
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Show the private buyer the lifestyle opportunity.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Not every prospect wants a traditional industrial use. A private
                entertainment, recreation or collection space can reveal a
                different type of potential.
              </p>

              <Link
                href="/projects/warehouse-to-mancave-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View the mancave case study
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS WORKS */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Why This Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Relevance is easier to understand than generic flexibility.
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "The Buyer Sees Their Industry",
                  text: "The campaign becomes more relevant to the person you are trying to reach.",
                },
                {
                  number: "02",
                  title: "The Property Stays Recognisable",
                  text: "The real warehouse remains visible underneath the concept.",
                },
                {
                  number: "03",
                  title: "You Create More Campaign Content",
                  text: "One property shoot can support several different marketing messages.",
                },
                {
                  number: "04",
                  title: "The Opportunity Becomes Easier To Picture",
                  text: "Prospects are given a visual starting point instead of an empty shell.",
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

      {/* AGENT STRATEGY */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                For Commercial Agents
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Stop asking one generic image to appeal to every potential
                occupier.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                If the property has several realistic target audiences, build a
                separate piece of visual content for each one.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The campaign can still use the original property photography,
                but now you have more ways to communicate the property&apos;s
                potential to specific industries.
              </p>

              <p className="mt-7 font-display text-3xl font-semibold text-rust">
                One shoot. More campaign content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE PROCESS */}
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                A Simple Approach
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Start with the real property image",
                  text: "Use the commercial photography already produced for the campaign.",
                },
                {
                  number: "02",
                  title: "Identify realistic target audiences",
                  text: "Decide which industries, operators or buyers you actually want to speak to.",
                },
                {
                  number: "03",
                  title: "Create a visual for each audience",
                  text: "Change the use, activity and fitout direction while keeping the building recognisable.",
                },
                {
                  number: "04",
                  title: "Use the concepts alongside the original images",
                  text: "Show both the real tenancy and the possible future use.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7 sm:grid-cols-[80px_1fr] md:p-8"
                >
                  <p className="font-mono text-sm font-semibold text-rust">
                    {step.number}
                  </p>

                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-black/50">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIMITS */}
      <section className="bg-[#f7f5f1] py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Keep The Marketing Clear
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              A visual concept shows possibility.
              <br />
              It does not confirm suitability or approval.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Commercial property visualisation can help buyers and tenants
              understand one possible use for the property, but it is not a
              planning, architectural or feasibility assessment.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Each prospective use should be assessed separately by the
              appropriate professionals before anyone commits to a lease,
              purchase or fitout.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/commercial-property-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Commercial Property Visualisation
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Explore all current industry specific property concepts.
              </h2>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore commercial visualisation
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/blog/how-to-visualise-an-empty-warehouse-for-different-industries"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Related Guide
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                How to visualise an empty warehouse for different industries.
              </h2>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Read the guide
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
            Commercial Property Marketing
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            One property.
            <br />
            More than one buyer story.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the commercial property photography you already have and
            tell us the buyers, tenants or industries you want the property to
            make more sense to.
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