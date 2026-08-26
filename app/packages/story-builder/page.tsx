import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Story Builder | Property Story Package",
  description:
    "Story Builder combines 8 enhanced property images, 2 animations and a 3 post narrative sequence to turn an existing listing into a mini campaign.",
  alternates: {
    canonical: `${SITE_URL}/packages/story-builder`,
  },
  openGraph: {
    title: "Story Builder | Real Estate Media House",
    description:
      "Eight enhanced property images, two animations and a three post narrative sequence designed to build across the campaign.",
    url: `${SITE_URL}/packages/story-builder`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg`,
        alt: "Residential property image transformed into additional campaign content",
      },
    ],
  },
};

const packageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Story Builder",
  description:
    "A property storytelling package including 8 enhanced property images, 2 animations and a 3 post narrative sequence.",
  provider: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "AUD",
    price: "995",
    url: `${SITE_URL}/packages/story-builder`,
  },
};

const robDelivers = [
  "8 enhanced property images",
  "2 property animations",
  "Up to 10 seconds total animation",
];

const robynDelivers = [
  "A 3 post narrative sequence written to publish in order",
  "Hook → Feature → Lifestyle moment",
  "A clear story shape instead of a loose collection of posts",
];

const fit = [
  {
    title: "One post is not enough.",
    text: "The property needs a few connected campaign moments rather than one isolated piece of content.",
  },
  {
    title: "You want the story to build.",
    text: "Each post has a role, so the campaign unfolds instead of repeating the same message.",
  },
  {
    title: "You want more campaign mileage.",
    text: "Use the existing photography to create both fresh stills and moving moments without organising another shoot.",
  },
];

const storySequence = [
  {
    number: "01",
    title: "Hook",
    text: "Start with the image or idea most likely to interrupt the scroll and create curiosity.",
  },
  {
    number: "02",
    title: "Feature",
    text: "Move into the property detail, room or visual point that gives the listing substance.",
  },
  {
    number: "03",
    title: "Lifestyle",
    text: "Finish with the human reason someone could imagine wanting the property.",
  },
];

const videos = [
  {
    id: "residential-kitchen",
    title: "Residential Kitchen",
    url: "https://www.youtube.com/shorts/5NP5Ay_3SBY",
    category: "Residential",
    orientation: "portrait" as const,
  },
  {
    id: "facade-day-night",
    title: "Facade Day To Night",
    url: "https://www.youtube.com/shorts/UMWARuYjMSU",
    category: "Residential",
    orientation: "portrait" as const,
  },
];

export default function StoryBuilderPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(packageJsonLd),
        }}
      />

      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-14 md:py-18">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Story Builder
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Do not post everything
                <span className="block text-rust">at once.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                Story Builder gives the listing a simple campaign arc: something
                to stop for, something to notice and something to feel.
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl font-semibold">
                  $995
                </span>

                <span className="text-sm text-white/40">+ GST</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Start with Story Builder
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/packages"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 font-semibold transition hover:bg-white hover:text-ink"
                >
                  Compare stories
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                  Rob Delivers
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold">
                  The visual campaign.
                </h2>

                <div className="mt-6 space-y-4">
                  {robDelivers.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="mt-1 shrink-0 text-brassBright"
                      />

                      <p className="leading-7 text-white/60">{item}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[2rem] border border-rust/50 bg-rust/15 p-7">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                  Robyn Delivers
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold">
                  The sequence.
                </h2>

                <div className="mt-6 space-y-4">
                  {robynDelivers.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="mt-1 shrink-0 text-brassBright"
                      />

                      <p className="leading-7 text-white/65">{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/lifestyle/bedroom-before.jpeg"
                after="/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg"
                beforeAlt="Original residential bedroom photograph"
                afterAlt="Residential bedroom transformed into additional lifestyle campaign content"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Build The Campaign
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                One shoot can create more than one moment.
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                The enhanced images give you more visual range. The narrative
                sequence gives those images an order and a purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY ARC */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Three Post Story
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Hook.
                <br />
                Feature.
                <br />
                <span className="text-rust">Lifestyle.</span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-black/50">
                Instead of three unrelated posts, each one moves the campaign
                forward.
              </p>
            </div>

            <div className="space-y-4">
              {storySequence.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-white p-7 sm:grid-cols-[70px_0.55fr_1.45fr]"
                >
                  <p className="font-mono text-xs font-semibold text-rust">
                    {item.number}
                  </p>

                  <h3 className="font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-black/50">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT SUITS */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Is This You?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The listing needs a mini campaign, not another content dump.
              </h2>
            </div>

            <div className="space-y-4">
              {fit.map((item, index) => (
                <article
                  key={item.title}
                  className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-[#f7f5f1] p-6 sm:grid-cols-[55px_0.85fr_1.15fr]"
                >
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-black/50">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-ink py-14 text-white md:py-18">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              What You Receive
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Eight images. Two moving moments.
              <span className="block text-rust">One story with a shape.</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="font-display text-5xl font-semibold text-brassBright">
                8
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Enhanced Images
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                Eight selected property images developed into additional
                campaign visuals.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="font-display text-5xl font-semibold text-brassBright">
                2
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Animated Scenes
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                Two selected scenes turned into up to ten seconds of total
                animation.
              </p>
            </article>

            <article className="rounded-[2rem] border border-rust bg-rust/15 p-8">
              <p className="font-display text-5xl font-semibold text-brassBright">
                3
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Post Narrative
              </h3>

              <p className="mt-4 leading-7 text-white/55">
                Three connected story beats written to move from attention to
                feature to lifestyle.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MOTION */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={videos}
            eyebrow="Two Moving Moments"
            heading="Use motion where it earns attention."
            description="Story Builder includes two animated scenes, giving the campaign multiple opportunities to interrupt the scroll."
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Build the visuals and the story together.
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  number: "01",
                  title: "Send The Existing Media",
                  text: "Supply the photography, renders or footage already created for the property.",
                },
                {
                  number: "02",
                  title: "Choose The Campaign Moments",
                  text: "We identify the eight images and two scenes with the strongest potential.",
                },
                {
                  number: "03",
                  title: "Build The Visuals",
                  text: "Rob develops the enhanced images and moving property scenes.",
                },
                {
                  number: "04",
                  title: "Build The Sequence",
                  text: "Robyn writes the Hook → Feature → Lifestyle narrative that ties the campaign together.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-white p-7 sm:grid-cols-[70px_1fr]"
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

      {/* PAYMENT */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-10">
            <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                  Payment
                </p>

                <p className="mt-5 font-display text-5xl font-semibold">
                  50 / 50
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
                  50% deposit to begin. Balance before use.
                </h2>

                <p className="mt-5 leading-8 text-black/50">
                  A 50% deposit is required to begin. The remaining 50% is due
                  before the finished content may be published, posted,
                  distributed, advertised or otherwise used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="border-t border-black/10 bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/packages/story-starter"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Need Less?
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Story Starter
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Five enhanced images, one short animation and five individual
                story hooks.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View Story Starter
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/packages/story-deep-dive"
              className="group rounded-[2rem] border border-rust bg-ink p-8 text-white transition hover:bg-rust"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Need More Depth?
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Story Deep Dive
              </h2>

              <p className="mt-4 leading-7 text-white/50">
                Twelve enhanced images, three animated scenes and a five post
                narrative arc.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-brassBright">
                View Story Deep Dive
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
            Story Builder · $995 + GST
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Do not just add more content.
            <br />
            Build a story.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Eight enhanced images, two moving moments and a three post narrative
            sequence built from the property media you already have.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start with Story Builder
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}