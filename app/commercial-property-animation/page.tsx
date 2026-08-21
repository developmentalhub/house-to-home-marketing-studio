import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Property Animation",
  description:
    "Turn existing commercial property photography into animated property content that shows use, activity, movement and development potential.",
  alternates: {
    canonical: `${SITE_URL}/commercial-property-animation`,
  },
  openGraph: {
    title: "Commercial Property Animation",
    description:
      "Transform existing commercial property photography into moving campaign content for agents, landlords, developers and operators.",
    url: `${SITE_URL}/commercial-property-animation`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Commercial warehouse transformed into an active gym concept",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Property Animation",
  description:
    "Commercial property animation created from supplied property photography, renders and footage.",
  provider: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${SITE_URL}/commercial-property-animation`,
};

const heroVideos = [
  {
    id: "commercial-use-one",
    title: "Warehouse Use Animation",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    description:
      "A vacant warehouse turned into moving commercial campaign content.",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-use-two",
    title: "Commercial Warehouse Animation",
    url: "https://www.youtube.com/shorts/bJCRltJn_vY",
    category: "Commercial",
    description:
      "Existing warehouse media developed into another moving campaign asset.",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-build",
    title: "Vacant Site To Warehouse",
    url: "https://www.youtube.com/shorts/2DXsq8mXemI",
    category: "Development",
    description:
      "A site transformation showing progression toward a completed commercial development.",
    orientation: "portrait" as const,
  },
];

const problems = [
  {
    problem: "The warehouse looks empty",
    solution:
      "Show people, equipment, vehicles or business activity so the audience understands the space in use.",
  },
  {
    problem: "The listing needs a new audience",
    solution:
      "Create an industry specific scene first, then animate the use you want that audience to picture.",
  },
  {
    problem: "The campaign only has still images",
    solution:
      "Turn selected property photography into short moving scenes without another shoot.",
  },
  {
    problem: "The development is difficult to picture",
    solution:
      "Use build transformation and motion to communicate progress toward the completed property.",
  },
];

export default function CommercialPropertyAnimationPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />

      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Commercial Property Animation
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Show the property
                <span className="block text-rust">
                  working, not just waiting.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60 md:text-xl">
                Turn existing commercial property photography into moving
                content that helps buyers, tenants and operators understand the
                opportunity faster.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#examples"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Watch examples
                  <ArrowRight size={17} />
                </a>

                <Link
                  href="/enquire"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Show us the property
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                <div>
                  <p className="font-display text-3xl font-semibold">01</p>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Existing image
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl font-semibold">02</p>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Add the use
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl font-semibold">03</p>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Make it move
                  </p>
                </div>
              </div>
            </div>

            <div id="examples">
              <YouTubeVideoCarousel
                items={heroVideos}
                eyebrow="Choose A Video"
                heading="See the commercial property in motion."
                description="Tap through the examples first. The proof is immediate."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAST VALUE */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Agent Problem
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Empty commercial property can be hard to picture once occupied.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                Animation gives the campaign a faster way to communicate use,
                activity and scale while still working from the property media
                already produced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GYM PROOF */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                beforeAlt="Vacant warehouse before gym visualisation"
                afterAlt="Warehouse transformed into an active gym concept"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                First Make The Use Visible
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A moving property story starts with a relevant visual.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                A vacant warehouse can first be turned into a gym concept with
                equipment, people and activity. That finished scene can then
                become the basis for animation.
              </p>

              <Link
                href="/projects/warehouse-to-gym-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View gym case study
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SOLVING */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What Does The Campaign Need?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the commercial marketing problem.
              </h2>
            </div>

            <div className="space-y-4">
              {problems.map((item, index) => (
                <article
                  key={item.problem}
                  className="grid gap-5 rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7 sm:grid-cols-[65px_0.8fr_1.2fr]"
                >
                  <p className="font-mono text-xs font-semibold text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-2xl font-semibold">
                    {item.problem}
                  </h3>

                  <p className="leading-7 text-black/50">{item.solution}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MORE COMMERCIAL PROOF */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Different Audiences
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              The same property can carry more than one business story.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png"
                  beforeAlt="Vacant warehouse before mechanic workshop visualisation"
                  afterAlt="Warehouse transformed into a mechanic workshop"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Automotive
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Warehouse to mechanic workshop
                </h3>

                <Link
                  href="/projects/warehouse-to-mechanic-workshop-visualisation"
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-rust"
                >
                  View case study
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png"
                  beforeAlt="Vacant warehouse before logistics visualisation"
                  afterAlt="Warehouse transformed into a logistics operation"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Logistics
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Warehouse to logistics operation
                </h3>

                <Link
                  href="/projects/warehouse-to-logistics-visualisation"
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-rust"
                >
                  View case study
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CAN MOVE */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What Can Be Animated?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Movement should explain the commercial story.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "People",
                  text: "Show staff, customers or members moving through the property.",
                },
                {
                  number: "02",
                  title: "Vehicles",
                  text: "Add operational movement for automotive, logistics or industrial scenes.",
                },
                {
                  number: "03",
                  title: "Business Activity",
                  text: "Turn an empty shell into an environment that feels active and occupied.",
                },
                {
                  number: "04",
                  title: "Camera Movement",
                  text: "Give a still image a more cinematic sense of motion.",
                },
                {
                  number: "05",
                  title: "Development Build",
                  text: "Show a site or earlier development stage progressing toward completion.",
                },
                {
                  number: "06",
                  title: "Industry Transformation",
                  text: "Move from vacant property toward the business use being marketed.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="min-h-[210px] border-b border-r border-black/10 p-7"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-rust">
                    {item.number}
                  </p>

                  <h3 className="mt-7 font-display text-2xl font-semibold">
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

      {/* HOW IT WORKS */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Use the commercial photography you already have.
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  number: "01",
                  title: "Send The Existing Media",
                  text: "Supply the commercial property photography, renders or footage already created for the campaign.",
                },
                {
                  number: "02",
                  title: "Choose The Audience Or Story",
                  text: "Decide what use, operator or development outcome the content needs to communicate.",
                },
                {
                  number: "03",
                  title: "Build The Scene",
                  text: "Add the people, equipment, activity and atmosphere needed to make that story visible.",
                },
                {
                  number: "04",
                  title: "Make It Move",
                  text: "Turn the completed scene into short commercial property animation.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 border-b border-white/10 py-6 sm:grid-cols-[65px_1fr]"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brassBright">
                    {step.number}
                  </p>

                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-3xl leading-7 text-white/45">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLEAR LIMITS */}
      <section className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Keep The Marketing Clear
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Animation can show a possible use. It does not prove that use is
              approved or feasible.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Planning, permitted use, access, fire requirements, accessibility,
              fitout feasibility and operational suitability should be assessed
              separately by the appropriate professionals.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT PATH */}
      <section className="border-t border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/commercial-property-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Visualisation
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Commercial Property Visualisation
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See industry specific property concepts before movement is
                added.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore visualisation
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/blog/how-to-market-a-vacant-commercial-property"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Agent Guide
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                How to Market a Vacant Commercial Property
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Start with the commercial marketing problem and build the
                content around it.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Read guide
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/packages/property-reel-campaign"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Finished Video
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Property Reel Campaign
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Combine multiple scenes into a finished short property video.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View package
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
      <section className="bg-rust px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Commercial Property Animation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Already have the commercial photos?
            <br />
            Make the opportunity move.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the commercial property photography you already have and
            tell us the audience or use the campaign needs to communicate.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss commercial animation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}