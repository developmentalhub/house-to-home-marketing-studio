import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Turn Commercial Property Photos Into Video",
  description:
    "A practical guide to turning existing commercial property photography into animated marketing content, short property videos and industry specific campaign media.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-turn-commercial-property-photos-into-video`,
  },
  openGraph: {
    title: "How to Turn Commercial Property Photos Into Video",
    description:
      "Use the commercial property photography you already have to create animated property content and additional campaign media.",
    url: `${SITE_URL}/blog/how-to-turn-commercial-property-photos-into-video`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Commercial warehouse transformed into active property marketing content",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Turn Commercial Property Photos Into Video",
  description:
    "A practical guide to transforming existing commercial real estate photography into moving marketing content.",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-turn-commercial-property-photos-into-video`,
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

const commercialVideos = [
  {
    id: "warehouse-use-animation",
    title: "Warehouse Use Animation",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-warehouse-animation",
    title: "Commercial Warehouse Animation",
    url: "https://www.youtube.com/shorts/bJCRltJn_vY",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "warehouse-development-build",
    title: "Vacant Site To Warehouse Development",
    url: "https://www.youtube.com/shorts/2DXsq8mXemI",
    category: "Development",
    orientation: "portrait" as const,
  },
];

export default function HowToTurnCommercialPropertyPhotosIntoVideoPage() {
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
                How do you turn commercial property photos
                <span className="block text-rust">into video?</span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                Start with the property photography you already have, bring the
                image to life, then turn that scene into movement.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                The result can be used as additional campaign content without
                organising another property shoot.
              </p>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                  beforeAlt="Vacant commercial warehouse before visual enhancement"
                  afterAlt="Commercial warehouse transformed into an active gym concept before animation"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                First bring the image to life. Then make it move.
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
              Can you make a property video from still photos?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Yes. Existing commercial property photography can be transformed
              into short animated scenes by adding movement, atmosphere,
              people, activity or a visual change in how the property is being
              used.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Those scenes can then become standalone property animations or be
              combined into short vertical campaign videos.
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
                The Campaign Problem
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                You paid for the property photography.
                <span className="block text-rust">
                  It should do more than sit in a listing gallery.
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                Commercial property campaigns often begin with a strong set of
                still images, but the same campaign also needs content that can
                stop attention in faster moving channels.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Instead of organising another shoot, the existing images can be
                developed into new visual scenes and animated property content.
              </p>
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
                Still image.
                <br />
                Visual concept.
                <br />
                Movement.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Start With The Existing Property Image",
                  text: "Use the commercial photography or render already produced for the property campaign.",
                },
                {
                  number: "02",
                  title: "Decide What The Scene Needs To Communicate",
                  text: "That could be a different industry use, people, business activity, landscaping, lighting or a future development outcome.",
                },
                {
                  number: "03",
                  title: "Bring The Still Image To Life",
                  text: "Create the finished visual scene while keeping the underlying property recognisable.",
                },
                {
                  number: "04",
                  title: "Animate The Scene",
                  text: "Add movement through people, vehicles, environmental activity, camera motion or the property transformation itself.",
                },
                {
                  number: "05",
                  title: "Build More Campaign Content",
                  text: "Use individual animations or combine several scenes into short form property video.",
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

      {/* VIDEO EXAMPLES */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={commercialVideos}
            eyebrow="Commercial Property Animation Examples"
            heading="Property media made to move."
            description="Existing property imagery can become short moving scenes that communicate use, activity or transformation."
          />
        </div>
      </section>

      {/* TYPES */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What Can Be Animated?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Movement should help explain the property story.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "People & Activity",
                  text: "Turn an empty space into an occupied business environment with people moving through the scene.",
                },
                {
                  number: "02",
                  title: "Vehicles & Operations",
                  text: "Add movement that helps communicate automotive, logistics or other commercial activity.",
                },
                {
                  number: "03",
                  title: "Industry Use",
                  text: "Show the property changing from a vacant tenancy into a more specific business concept.",
                },
                {
                  number: "04",
                  title: "Day To Night",
                  text: "Use lighting changes to create another campaign moment from an existing exterior image.",
                },
                {
                  number: "05",
                  title: "Development Build",
                  text: "Show a vacant site or earlier project stage progressing toward a completed development.",
                },
                {
                  number: "06",
                  title: "Camera Movement",
                  text: "Introduce subtle motion that gives a still property image a more cinematic feel.",
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

      {/* COMMERCIAL USE CASE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                beforeAlt="Vacant warehouse before commercial campaign transformation"
                afterAlt="Warehouse transformed into a gym concept ready for animation"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Example · Warehouse To Gym
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                First make the use visible.
                <br />
                Then make the use move.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                A vacant warehouse can first be transformed into a gym concept.
                That finished visual can then become the starting point for
                moving fitness content.
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

      {/* WHY VIDEO */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Why Create Video From Stills?
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Your listing is competing with everything.
                <span className="block text-rust">
                  Give people a reason to stop.
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                Still photography remains essential, but movement gives the
                same campaign another way to capture attention.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                That makes the original property shoot more useful because the
                same media can support listing imagery, visual concepts,
                animations and short form campaign content.
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
                Where It Can Be Used
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Commercial property campaigns",
                "Short form property videos",
                "Agent marketing",
                "Developer presentations",
                "Property landing pages",
                "Industry specific campaign content",
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

      {/* WHAT WE CREATE */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What We Create
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              We create the property content.
              <br />
              You decide where it goes.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Real Estate Media House transforms existing property photography,
              renders and footage into enhanced visuals, animations and
              finished property video content.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              We are not a social media management service. We do not manage
              posting, captions, hashtags or scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/commercial-property-animation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Animation
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Commercial Property Animation
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore more moving commercial property examples.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore animation
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/commercial-property-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Visualisation
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Commercial Property Visualisation
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See how empty properties can be visualised for specific
                industries.
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
              href="/packages/property-reel-campaign"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Finished Video
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Property Reel Campaign
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Turn multiple transformed scenes into a finished vertical
                property Reel.
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
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Commercial Property Video
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Already have the photos?
            <br />
            Make them move.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the commercial property photography you already have and
            we can help turn it into additional moving campaign content.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss commercial property video
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}