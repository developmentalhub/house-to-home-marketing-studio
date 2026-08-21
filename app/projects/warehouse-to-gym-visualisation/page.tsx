import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Warehouse to Gym Visualisation | Commercial Property Case Study",
  description:
    "See how an empty warehouse can be visualised as a working gym to help gym operators assess a potential space and help commercial agents market the property to fitness tenants.",
  alternates: {
    canonical: `${SITE_URL}/projects/warehouse-to-gym-visualisation`,
  },
  openGraph: {
    title: "Warehouse to Gym Visualisation",
    description:
      "An empty commercial warehouse transformed into a working gym concept for operators, agents and landlords.",
    url: `${SITE_URL}/projects/warehouse-to-gym-visualisation`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Empty warehouse transformed into a working gym visualisation with equipment, reception and people",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Warehouse to Gym Visualisation",
  description:
    "A commercial property case study showing how an empty warehouse can be visualised as a working gym for operators, agents and landlords.",
  mainEntityOfPage: `${SITE_URL}/projects/warehouse-to-gym-visualisation`,
  image: [
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
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

export default function WarehouseToGymVisualisationPage() {
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
                Warehouse To Gym Visualisation
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Looking at an empty warehouse
                <span className="block text-rust">
                  for your next gym?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                It can be difficult to judge an empty industrial space when
                you&apos;re trying to picture equipment, training zones,
                reception, members and the atmosphere of a working gym.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                We can use the existing commercial property photography to
                create a visual concept of how the warehouse could look once
                fitted out and active.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#transformation"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  See the gym transformation
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
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                  beforeAlt="Empty warehouse before gym concept visualisation"
                  afterAlt="Warehouse visualised as a working gym with fitness equipment, reception and people"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the empty warehouse with the gym concept
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GYM OWNER PROBLEM */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                For Gym Owners & Operators
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                The empty warehouse might have the right size.
                <span className="block text-rust">
                  But can you picture your gym inside it?
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                Property listings are designed to show the building as it is.
                A gym operator is trying to imagine something completely
                different.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                You may be thinking about free weights, functional training,
                cardio, reception, member circulation, branding and how the
                warehouse volume will feel once people and equipment occupy
                the space.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                A visual concept can make that conversation much easier before
                you start spending heavily on detailed fitout design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN SLIDER */}
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
              From vacant shell
              <br />
              to working fitness space.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              The original warehouse photography stays recognisable while the
              visual adds the elements needed to make the future use easier to
              understand.
            </p>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <BeforeAfterSlider
              before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
              after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
              beforeAlt="Vacant industrial warehouse before gym fitout visualisation"
              afterAlt="Industrial warehouse visualised as an operational fitness centre with gym equipment and members"
            />
          </div>
        </div>
      </section>

      {/* WHAT OPERATOR CAN EXPLORE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What You Can Explore Visually
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Turn the listing photo into a clearer business concept.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Strength & Free Weights",
                  text: "See how racks, benches, dumbbells and lifting areas could sit within the warehouse volume.",
                },
                {
                  number: "02",
                  title: "Functional Training",
                  text: "Explore how open training areas could work alongside equipment zones.",
                },
                {
                  number: "03",
                  title: "Reception & Arrival",
                  text: "Give the front of the space a clearer member arrival and reception experience.",
                },
                {
                  number: "04",
                  title: "People & Scale",
                  text: "Use members and staff to make the size, circulation and atmosphere of the property easier to judge.",
                },
                {
                  number: "05",
                  title: "Fitout Direction",
                  text: "Explore a broad visual direction before moving into detailed architectural or fitout documentation.",
                },
                {
                  number: "06",
                  title: "Brand Experience",
                  text: "Help the empty industrial shell feel more like a real fitness business rather than a vacant tenancy.",
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

      {/* IMPORTANT BOUNDARY */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What This Does And Does Not Do
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Visualise the idea first.
              <br />
              Verify the property separately.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              This type of visualisation helps you explore how a warehouse
              could look and feel as a gym. It is not a planning, architectural
              or compliance assessment.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Before committing to a property or fitout, gym operators should
              still obtain the appropriate professional advice around planning,
              building requirements, accessibility, fire safety, acoustics,
              parking, amenities and other approvals relevant to the site.
            </p>
          </div>
        </div>
      </section>

      {/* AGENT PROBLEM */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                For Commercial Agents & Landlords
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Stop asking a fitness operator to imagine everything from an
                empty warehouse photo.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-white/60">
                If a warehouse could suit a gym or fitness operator, the
                marketing can show that possibility directly.
              </p>

              <p className="mt-5 leading-8 text-white/45">
                Instead of presenting only the vacant shell, use the existing
                listing photography to create a second version showing the
                property occupied as a fitness business.
              </p>

              <div className="mt-10 grid border-l border-t border-white/10 sm:grid-cols-2">
                {[
                  "Attract fitness operators",
                  "Explain ceiling height and scale",
                  "Show the tenancy occupied",
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

      {/* BOTH SIDES */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              One Visual. Two Property Problems.
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Help the operator picture the business.
              <br />
              Help the agent communicate the opportunity.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 md:p-10">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Gym Owner
              </p>

              <h3 className="mt-5 font-display text-3xl font-semibold">
                “Can I see my gym operating here?”
              </h3>

              <p className="mt-5 leading-8 text-black/50">
                Use the property photography to explore a visual concept before
                the warehouse feels real as a fitness space.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 md:p-10">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Commercial Agent
              </p>

              <h3 className="mt-5 font-display text-3xl font-semibold">
                “How do I make this warehouse relevant to gym operators?”
              </h3>

              <p className="mt-5 leading-8 text-black/50">
                Show a fitness specific outcome alongside the normal listing
                photography so the opportunity is easier to understand.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROBLEM SEARCH SECTION */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              The Real Estate Question
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              How can I visualise an empty warehouse as a gym before committing
              to the space?
            </h2>

            <p className="mt-7 text-xl leading-9 text-black/60">
              Start with the commercial property photography already supplied
              for the tenancy. That image gives you the real dimensions,
              architecture and visual character of the space.
            </p>

            <p className="mt-5 max-w-4xl leading-8 text-black/50">
              A concept visual can then introduce gym equipment, members,
              reception and activity so you can explore how the property might
              feel as an operating fitness facility before progressing into
              detailed fitout work.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/commercial-property-animation"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Commercial Property Animation
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Turn commercial property concepts into moving content.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-black/50">
                Show business activity, future uses and development outcomes
                using existing commercial property imagery.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore commercial animation
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/image-library"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Commercial Visual Examples
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                See more possibilities from commercial property photography.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-black/50">
                Explore other finished commercial outcomes created from
                existing warehouse imagery.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Open image library
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
            Warehouse To Gym Visualisation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Empty warehouse.
            <br />
            Easier decision to picture.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the commercial property photography you already have and
            we&apos;ll help turn the vacant space into a visual concept for the
            business you&apos;re considering.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss a warehouse concept
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}