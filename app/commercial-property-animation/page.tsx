import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Property Animation | Real Estate Media House",
  description:
    "Turn existing commercial property photography into enhanced industry visuals, animated property scenes and campaign storytelling for buyers, tenants and operators.",
  alternates: {
    canonical: `${SITE_URL}/commercial-property-animation`,
  },
  openGraph: {
    title: "Commercial Property Animation | Real Estate Media House",
    description:
      "Transform existing commercial property photography into moving campaign content that shows use, activity and business possibility.",
    url: `${SITE_URL}/commercial-property-animation`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Commercial warehouse transformed into an active gym environment",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Property Animation",
  description:
    "Commercial property animation, enhanced visualisation and storytelling created from supplied property photography, renders and footage.",
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
      "Existing warehouse media developed into another moving campaign moment.",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-build",
    title: "Commercial Development Transformation",
    url: "https://www.youtube.com/shorts/2DXsq8mXemI",
    category: "Development",
    description:
      "A commercial development transformation shown as a moving visual story.",
    orientation: "portrait" as const,
  },
];

const problems = [
  {
    problem: "The warehouse looks empty",
    solution:
      "Show people, equipment, vehicles and business activity so the audience can understand the property in use.",
  },
  {
    problem: "The listing needs a different audience",
    solution:
      "Create an industry specific scene first, then animate the use you want that buyer or tenant to picture.",
  },
  {
    problem: "The campaign only has still images",
    solution:
      "Turn selected commercial property photography into animated scenes of up to 10 seconds each without another shoot.",
  },
  {
    problem: "The development is difficult to picture",
    solution:
      "Use supplied project media, visual transformation and motion to communicate the intended future property.",
  },
];

const packageDurations = [
  {
    name: "Story Starter",
    href: "/packages/story-starter",
    images: "5 enhanced property images",
    motion: "1 property animation",
    duration: "Up to 10 seconds",
  },
  {
    name: "Story Builder",
    href: "/packages/story-builder",
    images: "8 enhanced property images",
    motion: "2 property animations",
    duration: "Up to 10 seconds each · up to 20 seconds total",
  },
  {
    name: "Story Deep Dive",
    href: "/packages/story-deep-dive",
    images: "12 enhanced property images",
    motion: "3 property animations",
    duration: "Up to 10 seconds each · up to 30 seconds total",
  },
  {
    name: "The Full Story",
    href: "/packages/the-full-story",
    images: "12 enhanced property images",
    motion: "3 to 4 property animations",
    duration:
      "Up to 10 seconds each · up to 40 seconds total · plus a 20 to 30 second Reel",
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
        <div className="container-shell py-16 md:py-20 lg:py-24">
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

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/65 md:text-xl">
                Turn existing commercial property photography into moving
                campaign content that helps buyers, tenants and operators see
                how the space could work for them.
              </p>

              <p className="mt-5 max-w-xl leading-8 text-white/45">
                Each property animation can run up to 10 seconds. The strongest
                scenes begin by making the business use visible, then adding
                movement that supports the story.
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
                    Keep it true
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl font-semibold">02</p>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Show the use
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
                eyebrow="Commercial Stories In Motion"
                heading="See the commercial property come to life."
                description="Each example starts with existing property media and turns it into another visual story for the campaign."
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Commercial Problem
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                An empty property asks the audience to do too much imagining.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                A warehouse photo can show floor area, structure and access.
                It may still leave the buyer or tenant wondering what their
                operation would actually look like inside it.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                We make the intended use visible first, then use animation to
                show people, vehicles, equipment and business activity moving
                through the space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED IMAGES */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                beforeAlt="Vacant warehouse before gym visualisation"
                afterAlt="Warehouse transformed into an active gym environment"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                First Make The Use Visible
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Keep the property true.
                <span className="block text-rust">
                  Build the operation around it.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                We keep the architecture, layout, proportions and defining
                property elements accurate to the supplied image.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Depending on the story, we can add or refine people, furniture,
                appliances, equipment, vehicles, storage, landscaping,
                lighting, atmosphere and business activity.
              </p>

              <p className="mt-6 font-display text-2xl leading-9">
                The goal is not to redesign the property. It is to make a
                possible use easier for the right audience to understand.
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

      {/* PROBLEMS */}
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

      {/* MORE PROOF */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Different Audiences
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              The same property can carry more than one business story.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/50">
              A mechanic sees a workshop. A logistics company sees stock,
              storage and movement. The building stays the same while the
              campaign speaks to a different audience.
            </p>
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

                <p className="mt-3 leading-7 text-black/45">
                  Cars, work bays, equipment and staff turn the empty floor
                  area into an operation the audience can immediately
                  understand.
                </p>

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

                <p className="mt-3 leading-7 text-black/45">
                  Racking, stock, people and operational activity help a
                  logistics prospect see how the property might work for them.
                </p>

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

      {/* STORY */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Commercial Storytelling
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Movement catches attention.
                <span className="block text-rust">
                  The business story gives it meaning.
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  feature: "Large open warehouse",
                  story:
                    "Members training, equipment in use and people moving through an active gym floor.",
                },
                {
                  feature: "Industrial floor area",
                  story:
                    "Vehicles arriving, work bays active and a mechanic workshop already operating.",
                },
                {
                  feature: "Storage capacity",
                  story:
                    "Stock moving through the space, staff working and a logistics operation in motion.",
                },
                {
                  feature: "Flexible commercial shell",
                  story:
                    "The exact audience the campaign is trying to reach already using the property.",
                },
              ].map((item, index) => (
                <article
                  key={item.feature}
                  className="grid gap-4 border-b border-white/10 py-6 sm:grid-cols-[55px_0.8fr_1.2fr]"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brassBright">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div>
                    <p className="text-sm text-white/30">
                      The property has
                    </p>

                    <h3 className="mt-1 font-display text-xl font-semibold">
                      {item.feature}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm text-white/30">
                      The story becomes
                    </p>

                    <p className="mt-1 font-display text-2xl leading-8 text-white/70">
                      {item.story}
                    </p>
                  </div>
                </article>
              ))}
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
                  text: "Show staff, customers, members or visitors moving through the property.",
                },
                {
                  number: "02",
                  title: "Vehicles",
                  text: "Introduce relevant operational movement for automotive, logistics and industrial scenes.",
                },
                {
                  number: "03",
                  title: "Business Activity",
                  text: "Turn an empty shell into an environment that feels occupied and functional.",
                },
                {
                  number: "04",
                  title: "Environmental Movement",
                  text: "Use lighting, atmosphere and subtle scene movement to make the visual feel less static.",
                },
                {
                  number: "05",
                  title: "Development Transformation",
                  text: "Show supplied project imagery progressing toward the intended completed property.",
                },
                {
                  number: "06",
                  title: "Industry Story",
                  text: "Move from a vacant property toward the business use being communicated.",
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

      {/* PACKAGE DURATIONS */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Animation Length
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Every animated scene can run
                <span className="block text-rust">
                  up to 10 seconds.
                </span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {packageDurations.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group rounded-[1.75rem] border border-black/10 bg-white p-7 transition hover:border-rust hover:shadow-soft"
                >
                  <h3 className="font-display text-2xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="mt-4 text-sm text-black/40">
                    {item.images}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-black/60">
                    {item.motion}
                  </p>

                  <p className="mt-2 leading-6 text-rust">
                    {item.duration}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-rust">
                    View package
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}

              <Link
                href="/packages/story-custom"
                className="group rounded-[1.75rem] border border-black/10 bg-ink p-7 text-white transition hover:border-rust sm:col-span-2"
              >
                <h3 className="font-display text-2xl font-semibold">
                  Story Custom
                </h3>

                <p className="mt-4 text-sm text-white/45">
                  Custom enhanced visuals, custom number of animations,
                  development transformation and finished video where required.
                </p>

                <p className="mt-2 font-semibold leading-6 text-brassBright">
                  Animated scenes typically up to 10 seconds each
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brassBright">
                  View Story Custom
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the commercial property media you already have.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Existing Media",
                  text: "Supply the commercial property photography, renders or footage already created for the campaign.",
                },
                {
                  number: "02",
                  title: "Choose The Audience",
                  text: "Identify the buyer, tenant, operator or industry the next campaign story needs to speak to.",
                },
                {
                  number: "03",
                  title: "Build The Enhanced Scene",
                  text: "Rob keeps the architecture and defining property elements accurate while adding or refining equipment, furniture, people, vehicles, activity and atmosphere.",
                },
                {
                  number: "04",
                  title: "Make Selected Scenes Move",
                  text: "Turn the completed visuals into property animations of up to 10 seconds each.",
                },
                {
                  number: "05",
                  title: "Build The Narrative",
                  text: "Robyn develops the hooks, captions and sequencing that explain why the property matters to that audience.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7 sm:grid-cols-[80px_1fr]"
                >
                  <p className="font-mono text-sm font-semibold text-rust">
                    {step.number}
                  </p>

                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-black/50">
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
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Keep The Marketing Clear
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Animation can communicate a possible use. It does not prove that
              use is approved or feasible.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Commercial property visualisation and animation are created for
              marketing communication from the project media supplied to us.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Planning permission, permitted use, access, building compliance,
              fitout feasibility, fire safety, accessibility, acoustics, power,
              parking and operational suitability should be assessed separately
              by the appropriate professionals.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="bg-white py-16 md:py-20">
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
              href="/packages/the-full-story"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Finished Video
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                The Full Story
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Combine 3 to 4 animated property scenes with narrative,
                sequencing and a finished 20 to 30 second vertical Reel.
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

      {/* SCOPE */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Clear Scope
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              We create the story.
              <br />
              You decide where it lives.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              We create the enhanced visuals, animation, narrative, captions
              and sequencing included in your package.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              We do not manage your accounts, schedule your posts or run your
              day to day social presence. That stays with you, your agency or
              your marketing team.
            </p>
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
            Show the business inside them.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the commercial property photography you already have and
            tell us the buyer, tenant or operator the campaign needs to reach.
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