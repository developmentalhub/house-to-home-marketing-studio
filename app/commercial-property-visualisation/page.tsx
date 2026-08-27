import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Property Visualisation | Real Estate Media House",
  description:
    "Turn existing commercial property photography into industry specific visualisation, enhanced property images and animated campaign content for buyers, tenants and operators.",
  alternates: {
    canonical: `${SITE_URL}/commercial-property-visualisation`,
  },
  openGraph: {
    title: "Commercial Property Visualisation | Real Estate Media House",
    description:
      "Show the business operating inside the property with industry specific visualisation built from existing commercial photography.",
    url: `${SITE_URL}/commercial-property-visualisation`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Vacant commercial warehouse transformed into an active gym environment",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Property Visualisation",
  description:
    "Industry specific commercial property visualisation, enhanced imagery and animation created from supplied property photography.",
  provider: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${SITE_URL}/commercial-property-visualisation`,
};

const industries = [
  {
    number: "01",
    title: "Gym & Fitness",
    description:
      "Show fitness operators how the warehouse could look with training zones, equipment, reception, people and activity.",
    href: "/projects/warehouse-to-gym-visualisation",
  },
  {
    number: "02",
    title: "Mechanic Workshop",
    description:
      "Help automotive operators picture vehicles, work bays, equipment and workshop activity inside the property.",
    href: "/projects/warehouse-to-mechanic-workshop-visualisation",
  },
  {
    number: "03",
    title: "Logistics & Distribution",
    description:
      "Show stock, storage, staff and operational activity so logistics businesses can picture the property in use.",
    href: "/projects/warehouse-to-logistics-visualisation",
  },
  {
    number: "04",
    title: "Photography Studio",
    description:
      "Show creative operators shooting zones, lighting, equipment, people and a working studio environment.",
    href: "/projects/warehouse-to-photography-studio-visualisation",
  },
  {
    number: "05",
    title: "Private Lifestyle Use",
    description:
      "Show a private buyer how an industrial space could become an entertainment, collection or lifestyle environment.",
    href: "/projects/warehouse-to-mancave-visualisation",
  },
];

const commercialVideos = [
  {
    id: "commercial-one",
    title: "Commercial Property Story",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-two",
    title: "Commercial Property Animation",
    url: "https://www.youtube.com/shorts/bJCRltJn_vY",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-three",
    title: "Commercial Property Transformation",
    url: "https://www.youtube.com/shorts/2DXsq8mXemI",
    category: "Commercial",
    orientation: "portrait" as const,
  },
];

const packageDurations = [
  {
    name: "Story Starter",
    href: "/packages/story-starter",
    motion: "1 property animation",
    duration: "Up to 10 seconds",
  },
  {
    name: "Story Builder",
    href: "/packages/story-builder",
    motion: "2 property animations",
    duration: "Up to 10 seconds each · up to 20 seconds total",
  },
  {
    name: "Story Deep Dive",
    href: "/packages/story-deep-dive",
    motion: "3 property animations",
    duration: "Up to 10 seconds each · up to 30 seconds total",
  },
  {
    name: "The Full Story",
    href: "/packages/the-full-story",
    motion: "3 to 4 property animations",
    duration:
      "Up to 10 seconds each · up to 40 seconds total · plus a 20 to 30 second Reel",
  },
];

export default function CommercialPropertyVisualisationPage() {
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
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Commercial Property Visualisation
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Do not ask the tenant
                <span className="block text-rust">
                  to imagine an empty box.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
                Turn existing commercial property photography into industry
                specific visuals that help buyers, tenants and operators see
                how their business could fit inside the space.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/45">
                Keep the actual building visible. Add the equipment, vehicles,
                furniture, people, workflow and atmosphere that make the
                property relevant to the audience you want to reach.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#industries"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Explore industry examples
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/enquire"
                  className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Show us your property
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                  beforeAlt="Vacant warehouse before commercial property visualisation"
                  afterAlt="Warehouse transformed into an active gym environment"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                The warehouse stays the same. The audience changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What Is Commercial Property Visualisation?
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              It shows the business operating inside the property instead of
              asking the prospect to imagine it from an empty photograph.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              We start with the commercial photography you already have and
              create enhanced property images around specific audiences or
              possible uses.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              The architecture, layout and defining property elements remain
              accurate to the supplied media. The concept is built around the
              existing property rather than replacing it.
            </p>
          </div>
        </div>
      </section>

      {/* ENHANCED IMAGE DEFINITION */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Enhanced Property Images
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Keep the building true.
                <span className="block text-rust">
                  Build the operation around it.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                We keep the architecture, layout, proportions and defining
                property elements accurate to the supplied image.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                Depending on the commercial story, we can add or refine people,
                furniture, appliances, equipment, vehicles, storage, landscape,
                lighting, atmosphere and business activity.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                The goal is not to redesign the warehouse. It is to make a
                possible use easier for the right audience to understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TWO AUDIENCES */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Two Different Problems
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Make the opportunity easier to understand from both sides.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                  Buyer, Tenant or Operator
                </p>

                <h3 className="mt-5 font-display text-3xl font-semibold">
                  “Can I picture my business here?”
                </h3>

                <p className="mt-5 leading-8 text-black/50">
                  A vacant warehouse asks the prospect to mentally add every
                  vehicle, workstation, machine, rack, customer and staff
                  member. A relevant visual gives them somewhere to start.
                </p>
              </article>

              <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                  Agent or Landlord
                </p>

                <h3 className="mt-5 font-display text-3xl font-semibold">
                  “How do I make this relevant to the audience I want?”
                </h3>

                <p className="mt-5 leading-8 text-black/50">
                  Instead of asking one vacant image to speak to everyone,
                  create different campaign stories around the industries the
                  property is actually being marketed toward.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        id="industries"
        className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20"
      >
        <div className="container-shell">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Industry Specific Visualisation
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                One vacant warehouse.
                <span className="block text-rust">
                  Several completely different stories.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                Each concept is built around what a different prospect needs to
                picture happening inside the same property.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group grid gap-6 rounded-[2rem] border border-black/10 bg-white p-7 transition hover:border-rust hover:shadow-soft sm:grid-cols-[70px_1fr_auto] sm:items-start md:p-8"
              >
                <p className="font-mono text-xs font-semibold text-rust">
                  {industry.number}
                </p>

                <div>
                  <h3 className="font-display text-3xl font-semibold">
                    {industry.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-black/50">
                    {industry.description}
                  </p>
                </div>

                <ArrowRight
                  size={20}
                  className="text-rust transition group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GYM */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                beforeAlt="Empty warehouse before gym visualisation"
                afterAlt="Warehouse visualised as a gym and fitness facility"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Gym & Fitness
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Let the fitness operator see the training floor.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Training zones, equipment, reception, people and activity can
                make the industrial shell feel relevant to a fitness operator
                much faster than an empty floor plan alone.
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

      {/* MECHANIC */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Mechanic Workshop
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Show the work bays, vehicles and workshop activity.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Automotive operators are thinking about how the property could
                function once cars, hoists, tools, equipment and staff are
                inside it.
              </p>

              <Link
                href="/projects/warehouse-to-mechanic-workshop-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View mechanic workshop case study
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png"
                beforeAlt="Vacant warehouse before mechanic workshop visualisation"
                afterAlt="Warehouse visualised as an active mechanic workshop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOGISTICS */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png"
                beforeAlt="Vacant warehouse before logistics visualisation"
                afterAlt="Warehouse visualised as a logistics and distribution operation"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Logistics & Distribution
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Make storage, stock and workflow visible.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Racking, stock, movement and people can help a logistics
                business understand the operational story of the property
                instead of seeing only empty floor area.
              </p>

              <Link
                href="/projects/warehouse-to-logistics-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View logistics case study
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Photography & Production
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Show a creative business the studio already operating there.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Shooting zones, lighting, equipment, people and production
                activity can turn the same warehouse into a much more relevant
                campaign visual for a creative operator.
              </p>

              <Link
                href="/projects/warehouse-to-photography-studio-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View photography studio case study
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png"
                beforeAlt="Vacant warehouse before photography studio visualisation"
                afterAlt="Warehouse visualised as a working photography and production studio"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-mancave.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mancave1.png"
                beforeAlt="Empty warehouse before private lifestyle visualisation"
                afterAlt="Warehouse visualised as a private collection and entertainment space"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Private Lifestyle Use
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The buyer may be imagining something completely different.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                The same industrial space might become a collection space,
                entertainment room, hobby environment or private retreat for a
                different buyer.
              </p>

              <Link
                href="/projects/warehouse-to-mancave-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View private lifestyle case study
                <ArrowRight size={17} />
              </Link>
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
                The listing tells them what it has.
                <span className="block text-rust">
                  The story shows them how it might work.
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  feature: "Large open floor area",
                  story:
                    "Training zones, equipment and people moving through a busy fitness environment.",
                },
                {
                  feature: "High clearance warehouse",
                  story:
                    "Vehicles on hoists, work bays active and a mechanic workshop already in motion.",
                },
                {
                  feature: "Flexible industrial space",
                  story:
                    "Racking, stock and staff moving through a logistics operation.",
                },
                {
                  feature: "Large creative shell",
                  story:
                    "Lighting rigs, shooting zones and a production team using the space as a working studio.",
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
                    <p className="text-sm text-white/30">The property has</p>
                    <h3 className="mt-1 font-display text-xl font-semibold">
                      {item.feature}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm text-white/30">
                      The campaign story becomes
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

      {/* ANIMATION */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={commercialVideos}
            eyebrow="Commercial Property Animation"
            heading="Once the business is visible, make the operation move."
            description="Selected commercial property images can become animated scenes of up to 10 seconds each, using activity, people, vehicles and environmental movement."
          />
        </div>
      </section>

      {/* PACKAGE LENGTHS */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Animation Length
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Each animation can run
                <span className="block text-rust">up to 10 seconds.</span>
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

                  <p className="mt-4 text-sm text-black/45">{item.motion}</p>

                  <p className="mt-2 font-semibold leading-6 text-rust">
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
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the property.
                <span className="block text-rust">
                  Then choose the audience.
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Existing Property Media",
                  text: "Supply the commercial photography, renders or footage already created for the campaign.",
                },
                {
                  number: "02",
                  title: "Choose The Audience",
                  text: "Identify the buyer, tenant, operator or industry the next campaign story needs to speak to.",
                },
                {
                  number: "03",
                  title: "Build The Enhanced Visual",
                  text: "Rob keeps the architecture and defining property elements accurate while adding the equipment, furniture, people, vehicles, activity and atmosphere needed for the concept.",
                },
                {
                  number: "04",
                  title: "Make Selected Scenes Move",
                  text: "The property animations included in your package can run up to 10 seconds each.",
                },
                {
                  number: "05",
                  title: "Build The Narrative",
                  text: "Robyn develops the hooks, captions and sequencing that explain why each audience should see the property differently.",
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
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Keep The Marketing Clear
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              A visual concept communicates a possible use. It does not prove
              that use is approved or feasible.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Commercial property visualisation is created for marketing
              communication and to help a potential audience understand the
              property.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Planning permission, permitted use, access, building compliance,
              fitout feasibility, fire safety, accessibility, acoustics, power,
              parking and other operational requirements should be assessed
              separately by the appropriate professionals.
            </p>
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-12">
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
            Commercial Property Visualisation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Have the property photos?
            <br />
            Show us who you want to reach.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the commercial property photography you already have and
            tell us the buyers, tenants or industries the campaign needs to
            speak to.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss commercial visualisation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}