import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Visualise an Empty Warehouse as a Gym",
  description:
    "A practical guide for gym operators, commercial agents and landlords on using existing warehouse photography to visualise a vacant industrial space as a working gym before leasing, buying or marketing it.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-visualise-an-empty-warehouse-as-a-gym`,
  },
  openGraph: {
    title: "How to Visualise an Empty Warehouse as a Gym",
    description:
      "See how an empty warehouse can be turned into a gym concept using the property photography already available.",
    url: `${SITE_URL}/blog/how-to-visualise-an-empty-warehouse-as-a-gym`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Empty warehouse transformed into a working gym concept",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Visualise an Empty Warehouse as a Gym",
  description:
    "A practical guide to using existing warehouse photography to explore how a vacant industrial space could look and feel as a working gym.",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-visualise-an-empty-warehouse-as-a-gym`,
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

export default function HowToVisualiseAnEmptyWarehouseAsAGymPage() {
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
                Gym Property Guide
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                How do you visualise
                <span className="block text-rust">
                  an empty warehouse as a gym?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                Start with the property photography you already have, then add
                the things a gym operator actually needs to picture: equipment,
                training zones, reception, people and activity.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                The aim is not to create a final architectural fitout plan. It
                is to make the real estate decision easier to understand before
                more detailed planning begins.
              </p>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                  beforeAlt="Empty warehouse before gym visualisation"
                  afterAlt="Warehouse visualised as a working gym with equipment, reception and people"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the empty warehouse with the gym concept
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
              How can I see what a warehouse might look like as a gym before
              committing to it?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Use the existing property photography as the base image and
              create a visual concept that introduces gym equipment, training
              areas, reception, people and the general atmosphere of an active
              fitness facility.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              This gives you a faster way to judge the visual potential of the
              space before moving into detailed fitout design, planning and
              compliance work.
            </p>
          </div>
        </div>
      </section>

      {/* REAL PROBLEM */}
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
                An empty warehouse can look nothing like the gym you have in
                mind.
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                A property listing might show the floor area, ceiling height and
                structure clearly, but the operator still has to mentally build
                the entire gym inside the space.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                That is where visualisation becomes useful. It bridges the gap
                between the empty tenancy being marketed and the working
                fitness facility the operator is actually trying to picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO VISUALISE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What To Visualise
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Focus on the things that help the operator understand the
                space.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Strength Area",
                  text: "Add racks, benches, free weights or lifting zones to show how one part of the warehouse could function.",
                },
                {
                  number: "02",
                  title: "Cardio & Training",
                  text: "Introduce equipment and open training areas to help show how the floor plate could be divided.",
                },
                {
                  number: "03",
                  title: "Reception",
                  text: "A front desk or arrival zone can make the space feel much closer to a real member experience.",
                },
                {
                  number: "04",
                  title: "People",
                  text: "Members and staff help communicate scale, circulation and atmosphere.",
                },
                {
                  number: "05",
                  title: "Lighting & Mood",
                  text: "The visual direction can help turn a cold industrial shell into something that feels like a fitness brand.",
                },
                {
                  number: "06",
                  title: "General Fitout Direction",
                  text: "Use the image to test a broad concept before investing in detailed design work.",
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

      {/* TRANSFORMATION */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              See The Difference
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              The building stays the same.
              <br />
              The way you understand it changes.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              The original warehouse remains recognisable while the second
              image introduces a possible fitness use.
            </p>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <BeforeAfterSlider
              before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
              after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
              beforeAlt="Vacant industrial warehouse before gym concept"
              afterAlt="Vacant industrial warehouse transformed into a working fitness facility concept"
            />
          </div>
        </div>
      </section>

      {/* BEFORE LEASE */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Before Signing A Lease
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Use the visual to ask better questions about the property.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-white/60">
                A concept visual is useful because it can make the intended use
                feel more concrete earlier in the decision process.
              </p>

              <p className="mt-5 leading-8 text-white/45">
                Once you can picture the gym, it becomes easier to identify the
                questions that need proper professional assessment before you
                commit.
              </p>

              <div className="mt-10 grid border-l border-t border-white/10 sm:grid-cols-2">
                {[
                  "Is the floor area sufficient?",
                  "How might members move through the space?",
                  "Where could key training zones sit?",
                  "What needs professional assessment before fitout?",
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

      {/* AGENT ANGLE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                For Commercial Agents
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                If the warehouse could suit a gym, show the gym operator why.
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                A commercial agent can use the same idea from the opposite side
                of the property decision.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Instead of relying only on standard vacant warehouse
                photography, create an additional image that speaks directly to
                fitness operators and makes that possible use visible in the
                campaign.
              </p>

              <Link
                href="/projects/warehouse-to-gym-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                See the warehouse to gym case study
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY EXISTING PHOTOGRAPHY */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Use The Media You Already Have
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                You do not need another property shoot to explore the idea.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                The existing warehouse photograph already contains the real
                building, perspective and architectural context.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                That image can become the foundation for additional campaign
                content or a concept visual for a prospective operator.
              </p>

              <p className="mt-5 font-display text-3xl font-semibold text-rust">
                One shoot. More useful property content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIMITS */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What The Visual Does Not Confirm
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Seeing a gym in the warehouse does not mean the property is
              approved or suitable for that use.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              The visual is a concept. It can help with early decision making
              and communication, but it is not architectural documentation or
              a property feasibility assessment.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Planning, building requirements, accessibility, fire safety,
              acoustics, parking, amenities and other relevant requirements
              should be checked by the appropriate professionals before
              committing to the property or fitout.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/projects/warehouse-to-gym-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Gym Case Study
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                See the full warehouse to gym transformation.
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore how the visual can help both a gym operator and a
                commercial property campaign.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View the case study
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/commercial-property-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                More Industries
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                See how commercial properties can be visualised for other
                industries.
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore mechanic workshops, logistics facilities, photography
                studios and other commercial property concepts.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore commercial visualisation
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
            Gym Property Visualisation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Looking at a warehouse
            <br />
            and trying to picture the gym?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the existing property photography and tell us the type of
            fitness space you are trying to visualise.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss a gym concept
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}