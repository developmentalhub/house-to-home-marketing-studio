import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Full Story | Property Story Package",
  description:
    "Twelve enhanced property images, three to four property animations up to 10 seconds each, a finished vertical Reel and a complete listing lifecycle story for $1,990 + GST.",
  alternates: {
    canonical: `${SITE_URL}/packages/the-full-story`,
  },
  openGraph: {
    title: "The Full Story | Real Estate Media House",
    description:
      "Twelve enhanced property images, up to four animations, a finished Reel and a complete property story from Coming Soon through to Sold.",
    url: `${SITE_URL}/packages/the-full-story`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/residential/residential-before-after/residential-home-after.png`,
        alt: "Residential property enhanced into a stronger visual marketing story",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "The Full Story",
  description:
    "Twelve enhanced property images, three to four property animations up to 10 seconds each, a finished vertical Reel and a complete listing lifecycle story.",
  provider: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${SITE_URL}/packages/the-full-story`,
  offers: {
    "@type": "Offer",
    price: "1990",
    priceCurrency: "AUD",
    url: `${SITE_URL}/packages/the-full-story`,
  },
};

const visualDeliverables = [
  "12 enhanced property images",
  "3 to 4 property animations up to 10 seconds each",
  "Up to 40 seconds of animation in total",
  "1 finished vertical property Reel from 20 to 30 seconds",
];

const storyDeliverables = [
  "A complete listing lifecycle story",
  "Coming Soon → Just Listed → Lifestyle → Open House → Sold",
  "Reel script and narration structure",
  "Story direction that connects the individual campaign moments into one continuous narrative",
];

const enhancedExamples = [
  {
    number: "01",
    title: "People",
    text: "Introduce believable people and everyday moments that help the space feel lived in and emotionally relevant.",
  },
  {
    number: "02",
    title: "Furniture",
    text: "Add or refine furniture while keeping the architecture, room proportions and layout accurate to the supplied image.",
  },
  {
    number: "03",
    title: "Appliances & Décor",
    text: "Introduce selected appliances, styling and decorative details that support the scene without changing the property itself.",
  },
  {
    number: "04",
    title: "Cars & Activity",
    text: "Add appropriate vehicles, people and movement to exterior scenes when they support the story and intended audience.",
  },
  {
    number: "05",
    title: "Landscape",
    text: "Refine lawns, planting and the surrounding environment while keeping the built form and defining property elements true.",
  },
  {
    number: "06",
    title: "Lighting & Atmosphere",
    text: "Strengthen warmth, mood and time of day so individual campaign moments can carry different emotional tones.",
  },
];

const lifecycle = [
  {
    number: "01",
    title: "Coming Soon",
    text: "Create curiosity before the full listing appears. Give people one strong visual or emotional reason to watch for what comes next.",
  },
  {
    number: "02",
    title: "Just Listed",
    text: "Reveal the property with enough detail to create interest without exhausting every story on day one.",
  },
  {
    number: "03",
    title: "Lifestyle",
    text: "Move beyond rooms and features into the moments that help someone imagine their own routines, family and future there.",
  },
  {
    number: "04",
    title: "Open House",
    text: "Give the campaign another reason to return to the feed while building anticipation around physically experiencing the property.",
  },
  {
    number: "05",
    title: "Sold",
    text: "Close the campaign with a final chapter that feels connected to the story that came before it.",
  },
];

const videos = [
  {
    id: "residential-kitchen",
    title: "Residential Property Story",
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
    title: "Commercial Property Story",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "childcare",
    title: "Childcare Property Story",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Childcare",
    orientation: "portrait" as const,
  },
];

const process = [
  {
    number: "01",
    title: "Send The Property Media",
    text: "Supply the photography, renders or footage already created for the property.",
  },
  {
    number: "02",
    title: "Find The Full Campaign Story",
    text: "We identify the strongest visual moments and map how the campaign can unfold from the first teaser through to the final post.",
  },
  {
    number: "03",
    title: "Build The Visual Assets",
    text: "Rob creates twelve enhanced images, three to four animated scenes up to 10 seconds each and the finished vertical Reel.",
  },
  {
    number: "04",
    title: "Build The Narrative",
    text: "Robyn develops the lifecycle story, captions, sequencing and Reel structure so the campaign feels connected from beginning to end.",
  },
];

export default function TheFullStoryPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />

      {/* PLAIN HEADER */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              The Full Story · $1,990 + GST
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              One property.
              <span className="block text-rust">
                One continuous story.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
              Twelve enhanced property images, three to four animations up to
              10 seconds each, a finished vertical Reel and a complete listing
              lifecycle story.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                Start The Full Story
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/packages"
                className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Compare packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE DELIVERABLES */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 md:p-10">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Rob Delivers
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold">
                The complete visual campaign.
              </h2>

              <div className="mt-7 space-y-4">
                {visualDeliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={16} className="mt-1 shrink-0 text-rust" />

                    <p className="leading-7 text-black/60">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-rust bg-ink p-8 text-white md:p-10">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Robyn Delivers
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold">
                The complete property story.
              </h2>

              <div className="mt-7 space-y-4">
                {storyDeliverables.map((item) => (
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

      {/* ENHANCED IMAGE EXPLANATION */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Enhanced Property Images
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Keep the architecture accurate.
                <span className="block text-rust">
                  Build the story around it.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                We keep the architecture, layout and defining property elements
                accurate to the supplied image.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                Depending on what the campaign needs, we can then add or refine
                people, furniture, appliances, décor, cars, landscaping,
                lighting and atmosphere.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                The property remains true. The added details help each campaign
                moment feel more human, more complete and more emotionally
                useful.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {enhancedExamples.map((item) => (
              <article
                key={item.number}
                className="rounded-[1.75rem] border border-black/10 bg-white p-7"
              >
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  {item.number}
                </p>

                <h3 className="mt-5 font-display text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-black/50">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/residential/residential-before-after/residential-home-before.png"
                after="/images/residential/residential-before-after/residential-home-after.png"
                beforeAlt="Original residential property image"
                afterAlt="Residential property enhanced into a stronger campaign image"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Complete Campaign
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Do not make every post
                <span className="block text-rust">
                  say the same thing.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                A full property campaign has different jobs at different
                moments. Tease. Reveal. Build desire. Create urgency. Close the
                story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE STORY */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                The Listing Lifecycle
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Keep giving people
                <span className="block text-rust">
                  another reason to come back.
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {lifecycle.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/5 p-7 sm:grid-cols-[60px_0.75fr_1.25fr]"
                >
                  <p className="font-mono text-xs font-semibold text-brassBright">
                    {item.number}
                  </p>

                  <h3 className="font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-white/50">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATION LENGTH */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Three To Four Animated Moments
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Up to 10 seconds each.
              <span className="block text-rust">
                Up to 40 seconds in total.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Each animated scene can run for up to 10 seconds, giving you
              three to four individual pieces of moving content and up to 40
              seconds of animation across the package.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Those scenes can be used individually throughout the campaign,
              while selected moments are also shaped into the finished vertical
              Reel.
            </p>
          </div>
        </div>
      </section>

      {/* REEL */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Finished Property Reel
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The scenes become
                <span className="block text-rust">
                  one finished story.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                The Full Story includes a finished vertical Reel from 20 to 30
                seconds.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                The Reel is not simply every animated scene placed back to back.
                The strongest moments are selected, paced and sequenced around
                the property story so the finished piece has a beginning,
                progression and close.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                Motion gets attention. Narrative gives the attention somewhere
                to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS LOWER ON PAGE */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={videos}
            eyebrow="Property Stories In Motion"
            heading="Use movement as part of the campaign, not just decoration."
            description="Individual animated scenes create additional campaign moments. The finished Reel brings selected moments together into one continuous property story."
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Build the assets.
                <br />
                Build the story.
              </h2>
            </div>

            <div className="space-y-4">
              {process.map((step) => (
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

      {/* PAYMENT */}
      <section className="bg-white py-16 md:py-20">
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
                  50% deposit to begin. 50% before use.
                </h2>

                <p className="mt-5 leading-8 text-black/50">
                  The remaining 50% is due before the finished content may be
                  published, posted, distributed, advertised or otherwise used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PACKAGE */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <Link
            href="/packages/story-custom"
            className="group block rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft md:p-10"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Project Does Not Fit A Standard Package?
            </p>

            <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-display text-4xl font-semibold">
                  Story Custom
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-black/50">
                  Custom enhanced visuals, animation and narrative for
                  developments, multi stage projects and more complex property
                  campaigns.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 font-semibold text-rust">
                Explore Story Custom
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            The Full Story · $1,990 + GST
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Give the listing
            <br />
            a beginning, middle and end.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Twelve enhanced images, three to four animations up to 10 seconds
            each, a finished vertical Reel and a complete listing lifecycle
            story.
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