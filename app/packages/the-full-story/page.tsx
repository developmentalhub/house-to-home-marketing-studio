import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Full Story | Property Story Package",
  description:
    "The Full Story combines 12 enhanced property images, 3 to 4 animated scenes, a finished vertical Reel and a complete listing lifecycle narrative.",
  alternates: {
    canonical: `${SITE_URL}/packages/the-full-story`,
  },
  openGraph: {
    title: "The Full Story | Real Estate Media House",
    description:
      "A complete property storytelling campaign from Coming Soon to Sold, with enhanced visuals, animation and a finished vertical Reel.",
    url: `${SITE_URL}/packages/the-full-story`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/residential/residential-before-after/residential-home-after.png`,
        alt: "Residential property transformed into campaign content",
      },
    ],
  },
};

const packageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "The Full Story",
  description:
    "A complete property storytelling campaign including 12 enhanced images, 3 to 4 animated scenes, a finished vertical Reel and a listing lifecycle narrative.",
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
    price: "1990",
    url: `${SITE_URL}/packages/the-full-story`,
  },
};

const robDelivers = [
  "12 enhanced property images",
  "3 to 4 animated scenes",
  "Finished vertical property Reel",
  "Approximately 20 to 30 seconds",
];

const robynDelivers = [
  "Complete listing lifecycle story",
  "Coming Soon → Just Listed → Lifestyle → Open House → Sold",
  "Reel script and narration structure",
  "A clear story arc across the whole campaign",
];

const lifecycle = [
  {
    number: "01",
    title: "Coming Soon",
    text: "Create curiosity before the listing is fully revealed.",
  },
  {
    number: "02",
    title: "Just Listed",
    text: "Introduce the property with a clear reason to stop, look and remember it.",
  },
  {
    number: "03",
    title: "Lifestyle",
    text: "Move beyond features and show what living with the property could feel like.",
  },
  {
    number: "04",
    title: "Open House",
    text: "Build urgency and give people a reason to experience the property in person.",
  },
  {
    number: "05",
    title: "Sold",
    text: "Close the campaign with a final story moment that also reinforces the agent brand.",
  },
];

const fit = [
  {
    title: "You want the whole campaign to feel connected.",
    text: "The teaser, launch, lifestyle content, inspection push and final result all belong to one story.",
  },
  {
    title: "The property deserves the full treatment.",
    text: "You want enough visual depth, movement and written direction to give the listing a campaign of its own.",
  },
  {
    title: "You want a Reel with an actual point.",
    text: "The finished video follows a narrative structure rather than simply stitching together attractive property shots.",
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
  {
    id: "commercial",
    title: "Commercial Property",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "childcare",
    title: "Childcare Development",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Childcare",
    orientation: "portrait" as const,
  },
];

export default function TheFullStoryPage() {
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
          <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                The Full Story
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                From first tease
                <span className="block text-rust">to final result.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                The complete property storytelling package. Visuals, movement,
                narrative and a finished Reel built to work as one connected
                campaign.
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl font-semibold">
                  $1,990
                </span>

                <span className="text-sm text-white/40">+ GST</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Start The Full Story
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

            <div>
              <YouTubeVideoCarousel
                items={videos}
                eyebrow="The Flagship Package"
                heading="The Reel is the finish. The story starts much earlier."
                description="The Full Story combines transformed images, animated scenes and a finished vertical Reel with a complete campaign narrative."
              />
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERS */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Rob Delivers
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold">
                The complete visual campaign.
              </h2>

              <div className="mt-7 space-y-4">
                {robDelivers.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={16} className="mt-1 shrink-0 text-rust" />

                    <p className="leading-7 text-black/60">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-rust bg-ink p-8 text-white">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Robyn Delivers
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold">
                The complete narrative.
              </h2>

              <div className="mt-7 space-y-4">
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
      </section>

      {/* CORE IDEA */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/residential/residential-before-after/residential-home-before.png"
                after="/images/residential/residential-before-after/residential-home-after.png"
                beforeAlt="Original residential property image"
                afterAlt="Residential property transformed into additional campaign content"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Whole Campaign
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                First, we bring the image to life.
                <span className="block">Then, we make it move.</span>
                <span className="block text-rust">
                  Then, we tell you why it matters.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                The Full Story takes that idea all the way through the listing
                lifecycle, so every stage feels connected rather than improvised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Listing Lifecycle
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                One property.
                <span className="block text-rust">Five campaign chapters.</span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-black/50">
                Each stage has a different job. Together they build one
                continuous property story.
              </p>
            </div>

            <div className="space-y-3">
              {lifecycle.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-[#f7f5f1] p-6 sm:grid-cols-[60px_0.65fr_1.35fr]"
                >
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                    {item.number}
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

      {/* FIT */}
      <section className="bg-ink py-14 text-white md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Is This You?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The property deserves more than a launch post and a few photos.
              </h2>
            </div>

            <div className="space-y-4">
              {fit.map((item, index) => (
                <article
                  key={item.title}
                  className="grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:grid-cols-[55px_0.85fr_1.15fr]"
                >
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-white/50">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLE NUMBERS */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What You Receive
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Visuals, motion and story built as one campaign.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <article className="rounded-[1.75rem] border border-black/10 bg-[#f7f5f1] p-7">
              <p className="font-display text-5xl font-semibold text-rust">
                12
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Enhanced Images
              </h3>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-[#f7f5f1] p-7">
              <p className="font-display text-5xl font-semibold text-rust">
                3 to 4
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Animated Scenes
              </h3>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-[#f7f5f1] p-7">
              <p className="font-display text-5xl font-semibold text-rust">
                20 to 30
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Second Reel
              </h3>
            </article>

            <article className="rounded-[1.75rem] border border-rust bg-ink p-7 text-white">
              <p className="font-display text-5xl font-semibold text-brassBright">
                5
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Story Chapters
              </h3>
            </article>
          </div>
        </div>
      </section>

      {/* REEL STORY */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Reel Has A Job
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Not just a sequence of pretty shots.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-black/55">
                Robyn structures the Reel around a beginning, build and close.
                Rob creates the animated scenes and visual movement that carry
                that structure.
              </p>

              <p className="mt-5 text-lg leading-8 text-black/55">
                The result is a short property video with a reason for each scene
                to be there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Build one story from the media you already have.
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  number: "01",
                  title: "Send The Property Media",
                  text: "Supply the photography, renders or footage already created for the listing.",
                },
                {
                  number: "02",
                  title: "Find The Campaign Story",
                  text: "We identify the strongest visual moments and the emotional thread that connects them.",
                },
                {
                  number: "03",
                  title: "Build The Visual Assets",
                  text: "Rob creates the enhanced images, animated scenes and finished vertical Reel.",
                },
                {
                  number: "04",
                  title: "Build The Narrative",
                  text: "Robyn develops the lifecycle story and Reel structure so each campaign stage has a clear purpose.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-[#f7f5f1] p-7 sm:grid-cols-[70px_1fr]"
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
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-18">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-10">
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
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/packages/story-deep-dive"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                No Reel Needed?
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Story Deep Dive
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Keep the narrative depth with twelve enhanced images, three
                animated scenes and a five post story arc.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View Story Deep Dive
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/packages/story-custom"
              className="group rounded-[2rem] border border-rust bg-ink p-8 text-white transition hover:bg-rust"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Larger Project?
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Story Custom
              </h2>

              <p className="mt-4 leading-7 text-white/50">
                For developments, multiple stages or projects that need a custom
                visual and narrative scope.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-brassBright">
                View Story Custom
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
            The Full Story · $1,990 + GST
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Do not just launch the listing.
            <br />
            Tell the whole story.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Twelve enhanced images, multiple animated scenes, a finished Reel
            and a complete listing lifecycle narrative.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start The Full Story
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}