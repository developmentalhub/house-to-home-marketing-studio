import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property Video Library | Real Estate Media House",
  description:
    "Explore residential, commercial and childcare property animations created from existing property photography, renders and campaign media.",
  alternates: {
    canonical: `${SITE_URL}/video-library`,
  },
  openGraph: {
    title: "Property Video Library | Real Estate Media House",
    description:
      "See existing property media transformed into animated residential, commercial and childcare campaign content.",
    url: `${SITE_URL}/video-library`,
    type: "website",
  },
};

const residentialShorts = [
  {
    id: "residential-kitchen-short",
    title: "Kitchen Animation",
    url: "https://www.youtube.com/shorts/5NP5Ay_3SBY",
    category: "Residential",
    description:
      "Existing kitchen photography turned into short moving campaign content.",
    orientation: "portrait" as const,
  },
  {
    id: "facade-coming-soon",
    title: "Coming Soon Facade",
    url: "https://www.youtube.com/shorts/7sLtp4cucnU",
    category: "Facade",
    description:
      "A still facade image turned into another campaign moment.",
    orientation: "portrait" as const,
  },
  {
    id: "facade-balloons",
    title: "Facade With Balloons",
    url: "https://www.youtube.com/shorts/npBU8mNYw0o",
    category: "Facade",
    description:
      "Another visual direction created from existing residential property media.",
    orientation: "portrait" as const,
  },
  {
    id: "facade-day-night",
    title: "Facade Day To Night",
    url: "https://www.youtube.com/shorts/UMWARuYjMSU",
    category: "Day To Night",
    description:
      "An exterior image turned into a second campaign moment with atmosphere and lighting.",
    orientation: "portrait" as const,
  },
];

const residentialLandscape = [
  {
    id: "res-bathroom",
    title: "Bathroom",
    url: "https://www.youtube.com/watch?v=rwduPrHJmrU",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-bedroom",
    title: "Bedroom",
    url: "https://www.youtube.com/watch?v=dQjStlhEGzI",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-dining",
    title: "Dining",
    url: "https://www.youtube.com/watch?v=b_iS2Uz8L-I",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-facade",
    title: "Facade",
    url: "https://www.youtube.com/watch?v=ezOd5jztwcI",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-baby-room",
    title: "Baby Room",
    url: "https://www.youtube.com/watch?v=Z_aNTKvrD74",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-laundry",
    title: "Laundry",
    url: "https://www.youtube.com/watch?v=W2uLloIY8o4",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-living-one",
    title: "Living Room",
    url: "https://www.youtube.com/watch?v=5_j6Nd7QxJA",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-living-hand",
    title: "Living Room Furniture Drop",
    url: "https://www.youtube.com/watch?v=psc1vhNWgXs",
    category: "Residential",
    description:
      "A more playful living room transformation showing furniture arriving into the scene.",
    orientation: "landscape" as const,
  },
  {
    id: "res-living-two",
    title: "Living Room Animation",
    url: "https://www.youtube.com/watch?v=-LY8KI3cmmA",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-study",
    title: "Study",
    url: "https://www.youtube.com/watch?v=hQa0O5RQwkk",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-kitchen",
    title: "Kitchen",
    url: "https://www.youtube.com/watch?v=E6sOWBaJP38",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-backyard",
    title: "Backyard",
    url: "https://www.youtube.com/watch?v=4vz-HSeqEh4",
    category: "Residential",
    orientation: "landscape" as const,
  },
];

const childcareVideos = [
  {
    id: "childcare-1",
    title: "Childcare Animation 01",
    url: "https://www.youtube.com/shorts/quxLhvqpAEQ",
    category: "Childcare",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-2",
    title: "Childcare Animation 02",
    url: "https://www.youtube.com/shorts/VNgAj19pqJc",
    category: "Childcare",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-3",
    title: "Childcare Animation 03",
    url: "https://www.youtube.com/shorts/m3xlOPyhYe8",
    category: "Childcare",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-4",
    title: "Childcare Animation 04",
    url: "https://www.youtube.com/shorts/4MduhCc7tOU",
    category: "Childcare",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-5",
    title: "Childcare Animation 05",
    url: "https://www.youtube.com/shorts/al5ui0K4D98",
    category: "Childcare",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-6",
    title: "Childcare Animation 06",
    url: "https://www.youtube.com/shorts/GnoYNXeTZaA",
    category: "Childcare",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-7",
    title: "Childcare Animation 07",
    url: "https://www.youtube.com/shorts/5WQoWJR4qjc",
    category: "Childcare",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-8",
    title: "Childcare Build Transformation",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Development",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-9",
    title: "Childcare Animation 09",
    url: "https://www.youtube.com/shorts/fDUWkWFLUrM",
    category: "Childcare",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-10",
    title: "Childcare Animation 10",
    url: "https://www.youtube.com/shorts/kdFOHfqTHLw",
    category: "Childcare",
    orientation: "portrait" as const,
  },
];

const commercialVideos = [
  {
    id: "commercial-1",
    title: "Commercial Property Animation 01",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    description:
      "Existing warehouse media turned into moving commercial campaign content.",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-2",
    title: "Commercial Property Animation 02",
    url: "https://www.youtube.com/shorts/bJCRltJn_vY",
    category: "Commercial",
    description:
      "Another moving commercial property concept created from existing campaign media.",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-3",
    title: "Commercial Development Transformation",
    url: "https://www.youtube.com/shorts/2DXsq8mXemI",
    category: "Development",
    description:
      "A commercial development progression shown as short moving content.",
    orientation: "portrait" as const,
  },
];

export default function VideoLibraryPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Property Video Library
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Do not read about it.
                <span className="block text-rust">Watch the property move.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60 md:text-xl">
                Existing real estate photography can become short moving
                campaign content without organising another property shoot.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#residential"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Start watching
                  <ArrowRight size={17} />
                </a>

                <Link
                  href="/image-library"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 font-semibold transition hover:bg-white hover:text-ink"
                >
                  See before and after
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                <div>
                  <p className="font-display text-3xl font-semibold">01</p>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Residential
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl font-semibold">02</p>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Commercial
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl font-semibold">03</p>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Childcare
                  </p>
                </div>
              </div>
            </div>

            <YouTubeVideoCarousel
              items={[
                residentialShorts[0],
                commercialVideos[0],
                childcareVideos[7],
              ]}
              eyebrow="Featured"
              heading="Pick a property type and press play."
              description="The fastest way to understand the service is to see what happens to the property media."
            />
          </div>
        </div>
      </section>

      {/* FAST NAV */}
      <section className="border-b border-black/10 bg-white">
        <div className="container-shell py-7">
          <div className="grid gap-3 md:grid-cols-3">
            <a
              href="#residential"
              className="rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-5 transition hover:border-rust hover:bg-white"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                01
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold">
                Residential
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/45">
                Lifestyle, room animation, facade content and day to night.
              </p>
            </a>

            <a
              href="#commercial"
              className="rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-5 transition hover:border-rust hover:bg-white"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                02
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold">
                Commercial
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/45">
                Vacant warehouses, industry specific use and development motion.
              </p>
            </a>

            <a
              href="#childcare"
              className="rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-5 transition hover:border-rust hover:bg-white"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                03
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold">
                Childcare
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/45">
                Interiors, outdoor activity and development transformations.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL SHORTS */}
      <section id="residential" className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={residentialShorts}
            eyebrow="Residential Short Form"
            heading="Give the listing another reason to appear."
            description="Use existing residential property photography to create short campaign moments for rooms, facades, coming soon content and day to night transformations."
          />

          <div className="mt-9">
            <Link
              href="/residential-property-animation"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
            >
              Explore residential animation
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL LANDSCAPE */}
      <section className="border-y border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={residentialLandscape}
            eyebrow="Residential Animation Library"
            heading="Room by room."
            description="Explore longer residential animation examples across kitchens, bedrooms, bathrooms, living rooms, facades, studies, laundries and outdoor areas."
          />
        </div>
      </section>

      {/* COMMERCIAL */}
      <section id="commercial" className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={commercialVideos}
            eyebrow="Commercial Property"
            heading="Show the property working, not just waiting."
            description="Commercial animation can add use, movement and development progression to property media that already exists."
          />

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/commercial-property-animation"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
            >
              Explore commercial animation
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/commercial-property-visualisation"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold transition hover:bg-white hover:text-ink"
            >
              See commercial visualisation
            </Link>
          </div>
        </div>
      </section>

      {/* CHILDCARE */}
      <section id="childcare" className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={childcareVideos}
            eyebrow="Childcare"
            heading="Make the future centre easier to understand."
            description="Move through childcare interiors, outdoor areas and development transformations using project imagery that already exists."
          />

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/childcare-property-animation"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
            >
              Explore childcare animation
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/childcare-development-visualisation"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 font-semibold transition hover:border-rust"
            >
              Childcare development visualisation
            </Link>
          </div>
        </div>
      </section>

      {/* AGENT USE */}
      <section className="border-y border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                For The Campaign
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Motion should have a job.
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  problem: "The listing has already been seen",
                  answer:
                    "Give a familiar property image another campaign moment with movement.",
                },
                {
                  problem: "The room needs more atmosphere",
                  answer:
                    "Bring the still to life first, then animate the finished scene.",
                },
                {
                  problem: "The commercial use is hard to picture",
                  answer:
                    "Show the relevant business environment, then add activity and movement.",
                },
                {
                  problem: "The development is not finished",
                  answer:
                    "Use motion to communicate progression toward the completed property.",
                },
                {
                  problem: "The campaign needs a finished short video",
                  answer:
                    "Combine several animated scenes into a property Reel.",
                },
              ].map((item, index) => (
                <article
                  key={item.problem}
                  className="grid gap-4 border-b border-black/10 py-6 sm:grid-cols-[55px_0.8fr_1.2fr]"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-xl font-semibold">
                    {item.problem}
                  </h3>

                  <p className="leading-7 text-black/50">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE PROCESS */}
      <section className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the property media already created.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Existing Media",
                  text: "Supply property photography, renders or footage already created for the campaign.",
                },
                {
                  number: "02",
                  title: "Choose The Scene",
                  text: "Pick the rooms, facades, commercial uses or development moments worth extending.",
                },
                {
                  number: "03",
                  title: "Bring The Image To Life",
                  text: "Add the visual detail, people, activity or atmosphere needed for the scene.",
                },
                {
                  number: "04",
                  title: "Make It Move",
                  text: "Turn the finished property visual into short animated content.",
                },
                {
                  number: "05",
                  title: "Build A Reel",
                  text: "Combine several animated scenes when the campaign needs a finished vertical property video.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 rounded-[2rem] border border-black/10 bg-white p-7 sm:grid-cols-[80px_1fr]"
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

      {/* NEXT */}
      <section className="border-t border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/image-library"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Before Motion
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Explore Image Transformations
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Drag through the still transformations that can become the
                starting point for animation.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore images
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

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Property Reel Campaign
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Combine multiple transformed and animated scenes into a finished
                vertical property video.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View Reel package
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/blog/how-to-get-more-marketing-content-from-one-property-shoot"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Agent Guide
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Get More From One Property Shoot
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See how existing photography can support more campaign content
                without another shoot.
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
      <section className="bg-rust px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Property Media Made To Move
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Already have the property photos?
            <br />
            Give people something new to watch.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the property media you already have and tell us which parts
            of the campaign need movement.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss property animation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}