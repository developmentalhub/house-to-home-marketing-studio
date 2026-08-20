import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Development Campaign",
  description:
    "Custom property media campaigns for developments, childcare centres and commercial projects including demolition, construction stages, landscaping, car parks and render-to-reality transformations.",
};

const inclusions = [
  "Custom image enhancement scope",
  "Custom animation scope",
  "Demolition and rebuild sequences",
  "Construction-stage transformations",
  "Car park and landscape development",
  "Render-to-reality sequences",
  "Commercial and childcare project campaigns",
  "Final deliverables tailored to the project",
];

const transformationExamples = [
  {
    number: "01",
    title: "Demolish Existing",
    description:
      "Show the existing building or site transitioning into demolition and site clearance.",
  },
  {
    number: "02",
    title: "Build It",
    description:
      "Create visual construction progress from cleared site through structure to completion.",
  },
  {
    number: "03",
    title: "Add Car Park & Landscape",
    description:
      "Introduce completed car parking, paths, planting, lawns and finished external works.",
  },
  {
    number: "04",
    title: "Populate The Development",
    description:
      "Add cars, people, families and believable activity to communicate how the finished site will operate.",
  },
  {
    number: "05",
    title: "Render → Reality",
    description:
      "Move from architectural render or early concept imagery into a more finished real-world presentation.",
  },
  {
    number: "06",
    title: "Final Reveal",
    description:
      "Create a completed visual sequence that brings the entire development story together.",
  },
];

const projectTypes = [
  "Childcare centres",
  "Commercial developments",
  "New-build projects",
  "Property developments",
  "Construction campaigns",
  "Render-to-reality projects",
];

export default function DevelopmentCampaignPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Custom Campaign
              </p>

              <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Development Campaign
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                Custom visual campaigns for developments, commercial projects
                and childcare centres where the story is bigger than a single
                finished property image.
              </p>
            </div>

            <div className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="font-display text-4xl font-semibold">
                Custom quote
              </p>

              <p className="mt-3 max-w-sm leading-7 text-white/45">
                Scope and pricing are built around the number of stages,
                transformations, stills and animations required.
              </p>

              <Link
                href="/enquire"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Discuss your development
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Larger project storytelling
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Show what the site is becoming.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                Development Campaigns are built for projects where the
                transformation itself is part of the marketing story.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                We can work from supplied photography, renders and project
                imagery to create still transformations and animated sequences
                showing demolition, construction, completed landscaping, car
                parks, people, vehicles and the final development.
              </p>

              <p className="mt-5 font-display text-2xl font-semibold">
                Start with what exists. Show what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT SEQUENCE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Example sequence
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              One site. Multiple stages.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
              A development campaign can follow the project from the existing
              condition right through to the completed property.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-black/10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Existing Site",
                text: "Begin with the supplied photography, render or existing property condition.",
              },
              {
                number: "02",
                title: "Demolition",
                text: "Remove the existing structure and communicate the beginning of the transformation.",
              },
              {
                number: "03",
                title: "Clear Site",
                text: "Show the property prepared for the next stage of development.",
              },
              {
                number: "04",
                title: "Construction",
                text: "Introduce the new building and communicate key stages of the build.",
              },
              {
                number: "05",
                title: "External Works",
                text: "Add car parks, planting, paths, fencing, lawns and completed surroundings.",
              },
              {
                number: "06",
                title: "Finished Development",
                text: "Complete the story with people, cars, activity and the final property reveal.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="min-h-[250px] border-b border-r border-black/10 p-7"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-rust">
                  {item.number}
                </p>

                <h3 className="mt-10 font-display text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/50">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Custom scope
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Built around the development.
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-black/50">
                Development projects vary too much to force into a fixed
                residential package. We review the supplied material and build
                the campaign around the actual stages you need to communicate.
              </p>
            </div>

            <div className="border-t border-black/10">
              {inclusions.map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[55px_1fr] border-b border-black/10 py-6"
                >
                  <p className="font-mono text-xs text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Development transformations
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Show the stages people cannot see yet.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/50">
              Use supplied property imagery to communicate future construction,
              completed environments and the progression of the project.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
            {transformationExamples.map((item) => (
              <article
                key={item.title}
                className="min-h-[260px] border-b border-r border-white/10 p-7"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brassBright">
                  {item.number}
                </p>

                <h3 className="mt-10 font-display text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT TYPES */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Best suited to
              </p>

              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl">
                Projects where people need to understand the future.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-black/50">
                Especially useful when the completed property does not yet
                exist, or when the development journey itself needs to be
                explained visually.
              </p>
            </div>

            <div className="grid gap-0 border-l border-t border-black/10 sm:grid-cols-2">
              {projectTypes.map((item, index) => (
                <div
                  key={item}
                  className="min-h-[150px] border-b border-r border-black/10 p-6"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-rust">
                    0{index + 1}
                  </p>

                  <p className="mt-7 font-display text-xl font-semibold">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHILDCARE */}
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Childcare development example
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Turn an existing site into the finished centre.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-black/55">
                A childcare campaign could begin with the existing house or
                site, move through demolition and construction, then reveal the
                completed centre with its car park, landscaping, vehicles,
                families and finished outdoor environment.
              </p>

              <div className="mt-8 border-t border-black/10">
                {[
                  "Existing house or site",
                  "Demolition",
                  "Cleared site",
                  "New childcare centre",
                  "Car park and landscaping",
                  "Cars, families and activity",
                  "Finished reveal",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[55px_1fr] border-b border-black/10 py-5"
                  >
                    <p className="font-mono text-xs text-rust">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Payment
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                50% to begin.
                <br />
                50% before publishing.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="leading-8 text-black/55">
                A 50% deposit is required before production begins. The
                remaining 50% is payable before the final development content
                can be published, posted, advertised or distributed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL LINK */}
      <section className="border-t border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-sand p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                  Residential property?
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold">
                  Compare our residential packages.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-black/55">
                  For completed residential properties, choose from Property
                  Refresh, Property Campaign, Premium Campaign and Property Reel
                  Campaign.
                </p>
              </div>

              <Link
                href="/packages"
                className="inline-flex items-center gap-2 font-semibold text-rust"
              >
                Compare packages
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Development Campaign
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Show them what
            <br />
            comes next.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the existing property photography, project renders or site
            imagery and tell us the stages you want people to see.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              Discuss your development
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/explore"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Explore transformations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}