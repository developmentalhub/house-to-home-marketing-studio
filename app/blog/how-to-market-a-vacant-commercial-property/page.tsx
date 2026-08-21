import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Market a Vacant Commercial Property",
  description:
    "A practical guide for commercial agents and landlords on making a vacant commercial property easier to understand using existing photography, industry specific visualisation and moving property content.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-market-a-vacant-commercial-property`,
  },
  openGraph: {
    title: "How to Market a Vacant Commercial Property",
    description:
      "Show prospective buyers and tenants what an empty commercial property could become instead of relying only on vacant listing photography.",
    url: `${SITE_URL}/blog/how-to-market-a-vacant-commercial-property`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Vacant commercial warehouse transformed into an active business concept",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Market a Vacant Commercial Property",
  description:
    "A practical guide to using existing commercial property photography to make vacant warehouses and industrial spaces easier for buyers and tenants to understand.",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-market-a-vacant-commercial-property`,
  image: [
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png`,
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png`,
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

const commercialVideos = [
  {
    id: "warehouse-use",
    title: "Warehouse Use Animation",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "warehouse-animation",
    title: "Commercial Warehouse Animation",
    url: "https://www.youtube.com/shorts/bJCRltJn_vY",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "warehouse-development",
    title: "Vacant Site To Warehouse Development",
    url: "https://www.youtube.com/shorts/2DXsq8mXemI",
    category: "Development",
    orientation: "portrait" as const,
  },
];

export default function HowToMarketAVacantCommercialPropertyPage() {
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
                  a vacant commercial property?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                Start by making the empty space easier for the right buyer,
                tenant or operator to understand.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                The existing commercial property photography can be turned into
                industry specific visuals and moving campaign content that show
                what the space could become.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#marketing-options"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  See ways to market it
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/enquire"
                  className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Show us the property
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                  beforeAlt="Vacant commercial warehouse before industry specific marketing visualisation"
                  afterAlt="Vacant commercial warehouse transformed into a gym concept"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Same property. A much clearer use.
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
              What is the best way to market an empty commercial property?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Keep the real property photography, then create additional
              campaign visuals that show how the vacant space could work for
              specific buyers, tenants or industries.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Instead of relying only on phrases like flexible warehouse or
              suitable for multiple uses, show a gym operator the gym, a
              mechanic the workshop, a logistics business the operation or a
              photographer the studio.
            </p>
          </div>
        </div>
      </section>

      {/* CORE PROBLEM */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Vacant Property Problem
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Empty space puts
                <span className="block text-rust">
                  the imagination burden on the prospect.
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                A vacant warehouse may have strong floor area, ceiling height
                and access, but an empty photograph does not automatically show
                how a business might occupy the property.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Every prospect has to mentally add their own equipment, people,
                furniture, storage, workflow and atmosphere before they can
                picture themselves there.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Good commercial property marketing can help close that gap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETING OPTIONS */}
      <section id="marketing-options" className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Ways To Market A Vacant Commercial Property
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Give the campaign more than one job.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Show Industry Specific Uses",
                  text: "Create separate property visuals for the types of operators you actually want to attract.",
                },
                {
                  number: "02",
                  title: "Add People & Activity",
                  text: "Turn a cold vacant tenancy into something that feels occupied and easier to understand at scale.",
                },
                {
                  number: "03",
                  title: "Create Moving Content",
                  text: "Animate the property or the proposed use so the campaign has more than static listing imagery.",
                },
                {
                  number: "04",
                  title: "Show More Than One Possibility",
                  text: "If the property could appeal to several industries, create a different visual for each audience.",
                },
                {
                  number: "05",
                  title: "Keep The Real Property Visible",
                  text: "Use the original listing image alongside the concept so the audience can compare the actual space with one possible use.",
                },
                {
                  number: "06",
                  title: "Reuse The Existing Shoot",
                  text: "Build additional campaign content from the commercial photography already produced for the property.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="min-h-[230px] border-b border-r border-black/10 p-7"
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

      {/* GYM */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                beforeAlt="Vacant warehouse before gym marketing concept"
                afterAlt="Vacant warehouse transformed into a working gym visualisation"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Example · Fitness
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                If you want gym operators,
                <br />
                show them a gym.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Equipment, members, training zones and reception can make the
                property feel much more relevant to a fitness business.
              </p>

              <Link
                href="/projects/warehouse-to-gym-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View the warehouse to gym case study
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MECHANIC */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Example · Automotive
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                If you want mechanics,
                <br />
                show them the workshop.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Vehicles, tools, work bays and technicians turn the same
                warehouse into a much clearer automotive proposition.
              </p>

              <Link
                href="/projects/warehouse-to-mechanic-workshop-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View the mechanic workshop case study
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png"
                beforeAlt="Vacant warehouse before automotive workshop visualisation"
                afterAlt="Vacant warehouse transformed into a mechanic workshop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOGISTICS */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png"
                beforeAlt="Vacant commercial warehouse before logistics use visualisation"
                afterAlt="Vacant warehouse transformed into a logistics and distribution facility"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Example · Logistics
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                If you want logistics operators,
                <br />
                show the operation.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Storage, stock, staff and operational activity can make the
                property easier to understand as a working distribution
                environment.
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

      {/* STUDIO */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Example · Creative
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                If you want creative tenants,
                <br />
                show the studio.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Shooting areas, lighting, equipment and people make the same
                industrial space read very differently to a photographer or
                production company.
              </p>

              <Link
                href="/projects/warehouse-to-photography-studio-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View the photography studio case study
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png"
                beforeAlt="Vacant warehouse before photography studio concept"
                afterAlt="Vacant warehouse transformed into a photography and production studio"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SOLVING MARKETING */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Market The Property Around The Problem
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The strongest campaign visual answers a question the prospect
                already has.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  problem: "Gym operator",
                  question: "Can I picture my gym operating here?",
                },
                {
                  problem: "Mechanic",
                  question: "Could this warehouse work visually as my workshop?",
                },
                {
                  problem: "Logistics operator",
                  question: "Can I imagine our stock and operation inside it?",
                },
                {
                  problem: "Photographer",
                  question: "Could this become a functioning studio?",
                },
                {
                  problem: "Commercial agent",
                  question: "How do I make this property relevant to more tenants?",
                },
              ].map((item, index) => (
                <article
                  key={item.problem}
                  className="grid gap-5 border-b border-white/10 py-7 last:border-b-0 sm:grid-cols-[70px_170px_1fr]"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brassBright">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="font-semibold text-white/55">{item.problem}</p>

                  <p className="font-display text-2xl font-semibold">
                    {item.question}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={commercialVideos}
            eyebrow="Vacant Property In Motion"
            heading="Once the use is visible, the property can move too."
            description="Existing commercial property imagery can become moving content that shows business activity, different uses and development outcomes."
          />
        </div>
      </section>

      {/* WHY NOT JUST GENERIC */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Be Specific
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                “Suitable for multiple uses”
                <span className="block text-rust">
                  is weaker than showing the uses.
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                Broad copy has a role in a commercial listing, but it still
                leaves the prospect with the job of interpreting what those
                uses might be.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                If you already know the industries the property could
                reasonably appeal to, create visual content around those
                industries.
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
        </div>
      </section>

      {/* EXISTING PHOTOGRAPHY */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Use The Photography You Already Have
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The commercial shoot is the starting point, not the limit.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                The original property photography already gives you the real
                building, perspective and spatial context.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Those same images can become industry concepts, alternative use
                visuals and moving content without organising another shoot.
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
                Where This Content Can Help
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Commercial leasing campaigns",
                "Vacant warehouse marketing",
                "Landlord presentations",
                "Tenant prospecting",
                "Industry specific landing pages",
                "Commercial property video",
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

      {/* IMPORTANT LIMIT */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Keep The Marketing Clear
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Show potential without presenting a concept as an approved use.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Industry specific visualisation is marketing and decision support
              imagery. It helps people picture one possible use for the vacant
              property.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Planning permission, building suitability, compliance,
              operational requirements and fitout feasibility should be
              assessed separately by the appropriate professionals.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/commercial-property-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Service
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Commercial Property Visualisation
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore industry specific commercial property concepts.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore the service
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/blog/how-to-show-buyers-different-uses-for-a-commercial-property"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Related Guide
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Show Buyers Different Property Uses
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See how one commercial property can speak to several different
                audiences.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Read the guide
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/commercial-property-animation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Motion
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Commercial Property Animation
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Turn existing commercial property media into moving campaign
                content.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore commercial animation
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
            Vacant Commercial Property Marketing
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Empty property.
            <br />
            Give the right audience something to picture.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the commercial property photography you already have and
            tell us the buyers, tenants or industries you are trying to reach.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss a vacant property campaign
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}