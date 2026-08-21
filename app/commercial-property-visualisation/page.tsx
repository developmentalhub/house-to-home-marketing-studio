import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Property Visualisation",
  description:
    "Show commercial buyers and tenants what a vacant property could become using industry specific visualisation created from existing property photography.",
  alternates: {
    canonical: `${SITE_URL}/commercial-property-visualisation`,
  },
  openGraph: {
    title: "Commercial Property Visualisation",
    description:
      "Transform existing commercial property photography into industry specific visuals for buyers, tenants and operators.",
    url: `${SITE_URL}/commercial-property-visualisation`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Vacant commercial warehouse transformed into an industry specific gym concept",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Property Visualisation",
  description:
    "Industry specific commercial property visualisation created from supplied property photography.",
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
    title: "Private Mancave",
    description:
      "Show a private buyer how an industrial space could become an entertainment, collection or lifestyle environment.",
    href: "/projects/warehouse-to-mancave-visualisation",
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
                Show the right buyer
                <span className="block text-rust">
                  what the property could become.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                Turn existing commercial property photography into industry
                specific visuals that make a vacant warehouse easier for buyers,
                tenants and operators to understand.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                Keep the real property visible. Add the business activity,
                equipment, people and atmosphere that help the target audience
                picture themselves there.
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
                  afterAlt="Warehouse transformed into a gym concept for a specific commercial audience"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the original property with one possible use
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
              What Is Commercial Property Visualisation?
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              It is a way to show a realistic possible use for a property using
              the photography you already have.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Instead of relying only on vacant listing photographs, the same
              image can be transformed into a gym, workshop, logistics facility,
              studio or another relevant use.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              The goal is not to replace the real property photography. It is to
              give the campaign additional visual content that speaks more
              clearly to specific audiences.
            </p>
          </div>
        </div>
      </section>

      {/* TWO AUDIENCES */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Two Different Problems
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The visual should help both sides understand the opportunity.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-[2rem] border border-black/10 bg-white p-8">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                  Buyer, Tenant or Operator
                </p>

                <h3 className="mt-5 font-display text-3xl font-semibold">
                  “Can I picture my business operating here?”
                </h3>

                <p className="mt-5 leading-8 text-black/50">
                  An empty warehouse forces the operator to mentally add their
                  equipment, people, workflow and atmosphere. A relevant concept
                  can make that first step easier.
                </p>
              </article>

              <article className="rounded-[2rem] border border-black/10 bg-white p-8">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                  Agent or Landlord
                </p>

                <h3 className="mt-5 font-display text-3xl font-semibold">
                  “How do I make this property relevant to the people I want to
                  reach?”
                </h3>

                <p className="mt-5 leading-8 text-black/50">
                  Instead of asking one vacant image to appeal to everyone,
                  create separate visual content for the industries the property
                  is being marketed toward.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY DIRECTORY */}
      <section id="industries" className="bg-white py-20 md:py-28">
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
                Each concept is built around a different audience problem rather
                than using one generic fitout image for everyone.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group grid gap-6 rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7 transition hover:border-rust hover:bg-white hover:shadow-soft sm:grid-cols-[70px_1fr_auto] sm:items-start md:p-8"
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
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
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
                Help a fitness operator see the training environment.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Equipment, training zones, people and reception can make a
                vacant industrial shell much easier to understand from a gym
                operator&apos;s perspective.
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
      <section className="bg-white py-20 md:py-28">
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
                Automotive operators are thinking about how the building might
                function once tools, cars, staff and equipment are inside it.
              </p>

              <Link
                href="/projects/warehouse-to-mechanic-workshop-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View mechanic workshop case study
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
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
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
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
                Make storage, stock and operational activity visible.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                A logistics concept can help a prospective operator picture the
                property with storage, people and business activity rather than
                only empty floor area.
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
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Photography & Production
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Help creative operators picture a working studio.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Shooting areas, lighting, equipment, people and production
                activity can turn the same industrial space into a much more
                relevant visual for creative businesses.
              </p>

              <Link
                href="/projects/warehouse-to-photography-studio-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View photography studio case study
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
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

      {/* MANCAVE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-mancave.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mancave1.png"
                beforeAlt="Empty warehouse before private lifestyle visualisation"
                afterAlt="Warehouse visualised as a private mancave and entertainment space"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Private Lifestyle Use
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Not every prospect is thinking about a traditional business use.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                A private buyer may see a collection space, games room,
                entertainment environment or personal retreat where another
                person sees an empty warehouse.
              </p>

              <Link
                href="/projects/warehouse-to-mancave-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View mancave case study
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the property media already created for the campaign.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Existing Property Photography",
                  text: "Use the commercial listing images you already have rather than organising another shoot.",
                },
                {
                  number: "02",
                  title: "Choose The Audience",
                  text: "Identify the buyer, tenant or operator the next piece of campaign content needs to speak to.",
                },
                {
                  number: "03",
                  title: "Build The Relevant Concept",
                  text: "Introduce the equipment, furniture, people, activity and atmosphere that help communicate that use.",
                },
                {
                  number: "04",
                  title: "Use It Alongside The Real Property",
                  text: "Keep the original photography visible so the concept remains connected to the actual building.",
                },
                {
                  number: "05",
                  title: "Turn It Into More Campaign Content",
                  text: "The finished visual can also become the starting point for property animation and short form video.",
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

      {/* CAMPAIGN MILEAGE */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                More Campaign Mileage
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                One property image can become more than one campaign message.
              </h2>

              <p className="mt-7 text-xl leading-9 text-white/60">
                The same commercial shoot can support the original listing,
                industry specific visuals and moving property content.
              </p>

              <p className="mt-7 font-display text-3xl font-semibold text-rust">
                One shoot. More campaign content.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/commercial-property-animation"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-rust hover:text-white"
                >
                  Explore commercial animation
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/blog/how-to-turn-commercial-property-photos-into-video"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold transition hover:bg-white hover:text-ink"
                >
                  How to turn property photos into video
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLEAR LIMITS */}
      <section className="bg-[#f7f5f1] py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Keep The Marketing Clear
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              A visual concept shows a possible use. It does not prove that use
              is approved or feasible.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Commercial property visualisation is designed to help communicate
              possibility and make a property easier to understand.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Planning permission, permitted use, access, building requirements,
              fitout feasibility, fire safety, accessibility, acoustics, power,
              parking and other operational requirements should be assessed
              separately by the appropriate professionals.
            </p>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="border-t border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Commercial Property Guides
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Start with the marketing problem.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/blog/how-to-market-a-vacant-commercial-property"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Vacant Property
              </p>

              <h3 className="mt-4 font-display text-2xl font-semibold">
                How to Market a Vacant Commercial Property
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Make an empty property easier for the right tenant or buyer to
                understand.
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
              href="/blog/how-to-show-buyers-different-uses-for-a-commercial-property"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Different Audiences
              </p>

              <h3 className="mt-4 font-display text-2xl font-semibold">
                Show Buyers Different Uses for One Property
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Create a separate visual story for each relevant commercial
                audience.
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
              href="/blog/how-to-visualise-an-empty-warehouse-for-different-industries"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Industry Visualisation
              </p>

              <h3 className="mt-4 font-display text-2xl font-semibold">
                Visualise an Empty Warehouse for Different Industries
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                See how one warehouse can become several industry specific
                campaign assets.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Read guide
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