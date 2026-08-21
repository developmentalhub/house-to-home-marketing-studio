import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property Marketing Guides | Real Estate Media House",
  description:
    "Practical property marketing guides for real estate agents, commercial property professionals and developers. Learn how to get more from existing photography, visualise property potential and create moving campaign content.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Property Marketing Guides | Real Estate Media House",
    description:
      "Practical guides covering commercial property marketing, residential property content, childcare development marketing and getting more from existing property media.",
    url: `${SITE_URL}/blog`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Commercial property transformed into industry specific marketing content",
      },
    ],
  },
};

const commercialGuides = [
  {
    title: "How to Market a Vacant Commercial Property",
    description:
      "Make an empty property easier for buyers and tenants to understand by showing relevant possible uses.",
    href: "/blog/how-to-market-a-vacant-commercial-property",
    label: "Vacant Property",
  },
  {
    title: "How to Show Buyers Different Uses for a Commercial Property",
    description:
      "Use one property campaign to speak more clearly to different buyers, tenants and industries.",
    href: "/blog/how-to-show-buyers-different-uses-for-a-commercial-property",
    label: "Multiple Uses",
  },
  {
    title: "How to Visualise an Empty Warehouse for Different Industries",
    description:
      "Turn one vacant warehouse into industry specific campaign visuals for different operator types.",
    href: "/blog/how-to-visualise-an-empty-warehouse-for-different-industries",
    label: "Industry Visualisation",
  },
  {
    title: "How to Market a Warehouse to Gym Operators",
    description:
      "Help fitness operators picture training zones, equipment, reception and activity inside a vacant warehouse.",
    href: "/blog/how-to-market-a-warehouse-to-gym-operators",
    label: "Fitness",
  },
  {
    title: "How to Visualise an Empty Warehouse as a Gym",
    description:
      "A practical guide for understanding how an empty warehouse could look and feel as a fitness facility.",
    href: "/blog/how-to-visualise-an-empty-warehouse-as-a-gym",
    label: "Gym Operators",
  },
  {
    title: "How to Market a Warehouse to Mechanic Workshops",
    description:
      "Show automotive operators work bays, vehicles, equipment and activity instead of only an empty shell.",
    href: "/blog/how-to-market-a-warehouse-to-mechanic-workshops",
    label: "Automotive",
  },
  {
    title: "How to Market a Warehouse to Logistics Companies",
    description:
      "Help logistics and distribution operators picture stock, storage, movement and business activity.",
    href: "/blog/how-to-market-a-warehouse-to-logistics-companies",
    label: "Logistics",
  },
  {
    title: "How to Market a Warehouse to Photographers and Production Companies",
    description:
      "Show creative operators how a vacant industrial property could function as a photography or production studio.",
    href: "/blog/how-to-market-a-warehouse-to-photographers-and-production-companies",
    label: "Creative",
  },
  {
    title: "How to Turn Commercial Property Photos Into Video",
    description:
      "Turn existing commercial property photography into animated scenes and additional moving campaign content.",
    href: "/blog/how-to-turn-commercial-property-photos-into-video",
    label: "Commercial Video",
  },
];

const campaignGuides = [
  {
    title: "How to Get More Marketing Content From One Property Shoot",
    description:
      "Extend the value of existing photography, renders and footage into additional campaign assets.",
    href: "/blog/how-to-get-more-marketing-content-from-one-property-shoot",
    label: "Campaign Mileage",
  },
  {
    title: "How to Make a Property Listing Stand Out Without Another Photo Shoot",
    description:
      "Create another reason to notice the property without organising another photography session.",
    href: "/blog/how-to-make-a-property-listing-stand-out-without-another-photo-shoot",
    label: "Listing Attention",
  },
  {
    title: "How to Refresh a Property Campaign That Has Gone Stale",
    description:
      "Give an existing campaign another angle when buyers have already seen the same property story.",
    href: "/blog/how-to-refresh-a-property-campaign-that-has-gone-stale",
    label: "Campaign Refresh",
  },
];

const childcareGuides = [
  {
    title: "How to Market a Childcare Centre Before It Is Built",
    description:
      "Use existing project media to make a future childcare development easier for people to understand before completion.",
    href: "/blog/how-to-market-a-childcare-centre-before-it-is-built",
    label: "Development Marketing",
  },
  {
    title: "How to Market a Childcare Centre Before Opening Day",
    description:
      "Build useful campaign content before opening using development visuals, interior scenes and moving property media.",
    href: "/blog/how-to-market-a-childcare-centre-before-opening-day",
    label: "Pre Opening",
  },
];

const hubJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Property Marketing Guides",
  description:
    "Practical property marketing guides from Real Estate Media House.",
  url: `${SITE_URL}/blog`,
  publisher: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
};

function GuideCard({
  title,
  description,
  href,
  label,
}: {
  title: string;
  description: string;
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-[2rem] border border-black/10 bg-white p-7 transition hover:border-rust hover:shadow-soft md:p-8"
    >
      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
        {label}
      </p>

      <h3 className="mt-5 font-display text-2xl font-semibold leading-tight md:text-3xl">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-black/50">{description}</p>

      <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
        Read guide
        <ArrowRight
          size={17}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hubJsonLd),
        }}
      />

      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Property Marketing Guides
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Solve the property marketing problem
              <span className="block text-rust">
                before creating more content.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              Practical guides for real estate agents, commercial property
              professionals and developers who already have property media and
              need it to do more.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#commercial"
                className="rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Commercial property
              </a>

              <a
                href="#campaign-content"
                className="rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Campaign content
              </a>

              <a
                href="#childcare"
                className="rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Childcare development
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* START HERE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Start With The Problem
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                What does the property campaign need to do next?
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "The property is vacant",
                  text: "Show buyers or tenants how the space could work for a relevant use.",
                  href: "/blog/how-to-market-a-vacant-commercial-property",
                },
                {
                  title: "The campaign feels stale",
                  text: "Create another campaign angle from the media that already exists.",
                  href: "/blog/how-to-refresh-a-property-campaign-that-has-gone-stale",
                },
                {
                  title: "You need more content",
                  text: "Turn one property shoot into several useful campaign assets.",
                  href: "/blog/how-to-get-more-marketing-content-from-one-property-shoot",
                },
                {
                  title: "The property needs movement",
                  text: "Turn existing still photography into animated property content.",
                  href: "/blog/how-to-turn-commercial-property-photos-into-video",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7 transition hover:border-rust hover:bg-white hover:shadow-soft"
                >
                  <h3 className="font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/50">{item.text}</p>

                  <div className="mt-6 inline-flex items-center gap-2 font-semibold text-rust">
                    Solve this problem
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section
        id="commercial"
        className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28"
      >
        <div className="container-shell">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Commercial Property Marketing
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Help the right operator
                <span className="block text-rust">
                  see themselves in the property.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                These guides focus on vacant commercial and industrial
                properties, industry specific marketing and turning existing
                listing photography into more useful campaign content.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {commercialGuides.map((guide) => (
              <GuideCard key={guide.href} {...guide} />
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL PROOF */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Commercial Visual Proof
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Do not just describe the possibility.
                <br />
                Show it.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: "Gym & Fitness",
                  href: "/projects/warehouse-to-gym-visualisation",
                },
                {
                  label: "Mechanic Workshop",
                  href: "/projects/warehouse-to-mechanic-workshop-visualisation",
                },
                {
                  label: "Logistics & Distribution",
                  href: "/projects/warehouse-to-logistics-visualisation",
                },
                {
                  label: "Photography Studio",
                  href: "/projects/warehouse-to-photography-studio-visualisation",
                },
                {
                  label: "Private Mancave",
                  href: "/projects/warehouse-to-mancave-visualisation",
                },
                {
                  label: "All Commercial Visualisation",
                  href: "/commercial-property-visualisation",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-5 rounded-2xl border border-white/10 p-5 transition hover:border-brassBright hover:bg-white/5"
                >
                  <span className="font-display text-xl font-semibold">
                    {item.label}
                  </span>

                  <ArrowRight
                    size={18}
                    className="shrink-0 text-brassBright transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN CONTENT */}
      <section id="campaign-content" className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Existing Property Media
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                You already have the media.
                <span className="block text-rust">
                  What else can it become?
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                These guides focus on getting more visibility, value and
                campaign mileage from property photography, renders and footage
                that have already been created.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {campaignGuides.map((guide) => (
              <GuideCard key={guide.href} {...guide} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/image-library"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f7f5f1] px-6 py-3.5 font-semibold transition hover:border-rust"
            >
              Explore before and after images
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/video-library"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f7f5f1] px-6 py-3.5 font-semibold transition hover:border-rust"
            >
              Explore property videos
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* CHILDCARE */}
      <section
        id="childcare"
        className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28"
      >
        <div className="container-shell">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Childcare Development Marketing
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Market what the development
                <span className="block text-rust">is going to become.</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                Practical guides for childcare developers and project marketers
                who need to communicate a centre before construction is
                complete or before opening day.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {childcareGuides.map((guide) => (
              <GuideCard key={guide.href} {...guide} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/childcare-development-visualisation"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 font-semibold transition hover:border-rust"
            >
              Childcare development visualisation
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/projects/childcare-centre-development-transformation"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 font-semibold transition hover:border-rust"
            >
              View childcare case study
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* STRUCTURE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How The Site Is Organised
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Guides explain the problem.
                <br />
                Services explain the solution.
                <br />
                Projects show the proof.
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                That makes it easier to move from a marketing question to a
                relevant service and then see an actual visual example of the
                work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE GATEWAY */}
      <section className="bg-rust py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Property Media Services
              </p>

              <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
                Already have the property media?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Explore what your existing photography, renders or footage can
                become.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                {
                  label: "Explore Services",
                  href: "/services",
                },
                {
                  label: "Explore Packages",
                  href: "/packages",
                },
                {
                  label: "Explore Image Transformations",
                  href: "/image-library",
                },
                {
                  label: "Explore Property Animation",
                  href: "/video-library",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-5 rounded-2xl border border-white/20 px-6 py-5 font-semibold transition hover:bg-white hover:text-ink"
                >
                  {item.label}

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
            Real Estate Media House
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Tell us the property problem.
            <br />
            Show us the media you already have.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/60">
            We can help turn existing property photography, renders and footage
            into more useful visual marketing content.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-rust hover:text-white"
          >
            Discuss your property campaign
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}