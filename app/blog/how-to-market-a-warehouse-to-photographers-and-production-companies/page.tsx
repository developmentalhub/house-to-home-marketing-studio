import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Market a Warehouse to Photographers and Production Companies",
  description:
    "A practical guide for commercial agents and landlords on marketing a vacant warehouse to photographers, studios and production companies using industry specific property visualisation.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-market-a-warehouse-to-photographers-and-production-companies`,
  },
  openGraph: {
    title:
      "How to Market a Warehouse to Photographers and Production Companies",
    description:
      "Show creative operators how a vacant warehouse could work as a photography or production studio using the property photography you already have.",
    url: `${SITE_URL}/blog/how-to-market-a-warehouse-to-photographers-and-production-companies`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png`,
        alt: "Vacant warehouse transformed into a working photography studio concept",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Market a Warehouse to Photographers and Production Companies",
  description:
    "A practical commercial property marketing guide showing how creative industry visualisation can make a vacant warehouse more relevant to photographers and production companies.",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-market-a-warehouse-to-photographers-and-production-companies`,
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

export default function HowToMarketAWarehouseToPhotographersAndProductionCompaniesPage() {
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
                How do you market a warehouse
                <span className="block text-rust">
                  to photographers and production companies?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                Show more than an empty industrial shell. Help creative
                operators picture shooting zones, lighting, equipment, clients,
                crew and the atmosphere of a working studio.
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
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png"
                  beforeAlt="Vacant warehouse before photography studio marketing visualisation"
                  afterAlt="Warehouse visualised as an active photography and production studio"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the vacant warehouse with the photography studio concept
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
              How can you make a vacant warehouse more relevant to a
              photographer or production business?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Create a creative industry version of the existing property
              photograph showing how the warehouse could look as a working
              photography or production studio.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Shooting zones, lighting, equipment, people and production
              activity make it easier for a creative operator to connect the
              empty property with the business they are trying to build.
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
                The warehouse may have the right scale.
                <span className="block text-rust">
                  The listing may not help a creative operator see the studio.
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                Empty industrial photography can show ceiling height and open
                floor area clearly, but photographers and production companies
                are thinking about how that volume could actually be used.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                They may be trying to picture sets, backdrops, lighting,
                equipment storage, clients, crew and enough room to move around
                a production.
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
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png"
                beforeAlt="Original warehouse image before photography studio visualisation"
                afterAlt="Original warehouse image transformed into a photography and production studio concept"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Industry Specific Visualisation
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Turn open floor area into a creative environment.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                The warehouse stays recognisable while the image introduces the
                cues that help a photographer or production company understand
                one possible use for the property.
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
                Build the image around the way creative businesses use space.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Shooting Areas",
                  text: "Show how the open warehouse floor could support shooting zones, sets or backdrops.",
                },
                {
                  number: "02",
                  title: "Lighting",
                  text: "Studio lights and production equipment quickly communicate the intended creative use.",
                },
                {
                  number: "03",
                  title: "Crew & Talent",
                  text: "People help establish scale and make the studio feel active rather than theoretical.",
                },
                {
                  number: "04",
                  title: "Equipment",
                  text: "Cameras, stands and production gear can help turn the empty space into a recognisable working environment.",
                },
                {
                  number: "05",
                  title: "Client Experience",
                  text: "Show enough activity to help a business owner picture clients and production teams using the property.",
                },
                {
                  number: "06",
                  title: "The Real Warehouse",
                  text: "Keep the actual building visible so the concept stays connected to the property being marketed.",
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
                Think Like The Creative Operator
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                They are not only looking for square metres.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-white/60">
                They are trying to understand whether the space can support the
                way they actually work.
              </p>

              <div className="mt-10 grid border-l border-t border-white/10 sm:grid-cols-2">
                {[
                  "Can I picture several shooting areas here?",
                  "Does the ceiling height feel useful once occupied?",
                  "Can clients and crew move through the space?",
                  "Can I imagine equipment and production activity here?",
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

      {/* WHO COULD THIS SPEAK TO */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Creative Property Audiences
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                One studio concept can speak to several related creative
                businesses.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Commercial photographers",
                "Video production companies",
                "Content studios",
                "Advertising production teams",
                "Product photography businesses",
                "Creative production spaces",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/10 bg-[#f7f5f1] p-6"
                >
                  <p className="font-display text-xl font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN STRATEGY */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Campaign Strategy
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Keep the listing photography.
                <br />
                Add the studio story.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                The original warehouse imagery remains important because it
                documents the property as it is.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The studio concept becomes an additional campaign asset that
                speaks directly to the creative audience you want to reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE TO USE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Where The Visual Can Help
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Commercial leasing campaigns",
                "Creative tenant prospecting",
                "Landlord marketing material",
                "Property presentations",
                "Industry specific landing pages",
                "Short form property content",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/10 bg-[#f7f5f1] p-6"
                >
                  <p className="font-display text-xl font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENT INDUSTRIES */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What If The Warehouse Suits Other Industries?
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Show each audience a version of the property that makes sense to
              them.
            </h2>

            <p className="mt-7 text-xl leading-9 text-black/60">
              The same warehouse might also appeal to gyms, automotive
              businesses, logistics operators or other commercial tenants.
            </p>

            <p className="mt-5 max-w-4xl leading-8 text-black/50">
              Instead of using one generic visual for every prospect, build
              different concepts around the industries you want to target.
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
      <section className="bg-white py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Keep The Marketing Clear
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              A studio visual shows a possible use. It does not prove the
              property is suitable for that use.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              The concept is designed to help people picture how the property
              could look and feel as a photography or production studio.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Creative operators should separately assess permitted use, power,
              access, sound, ventilation, climate control, amenities, building
              compliance and other requirements relevant to their business.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/projects/warehouse-to-photography-studio-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Creative Case Study
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Warehouse to Photography Studio
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
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Commercial Property
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Commercial Property Visualisation
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore industry specific visualisation for other commercial
                audiences.
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
              href="/projects/warehouse-to-logistics-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Another Industry
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Warehouse to Logistics
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See how the same property marketing approach can target a
                completely different operator.
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
            Creative Property Marketing
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Trying to attract
            <br />
            creative tenants?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the warehouse photography you already have and we can help
            create a studio specific visual for the commercial property
            campaign.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss a creative property campaign
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}