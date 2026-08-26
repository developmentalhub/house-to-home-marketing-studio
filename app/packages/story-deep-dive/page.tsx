import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Story Deep Dive | Property Story Package",
  description:
    "Story Deep Dive combines 12 enhanced property images, 3 animated scenes and a 5 post narrative arc for listings with more than one story to tell.",
  alternates: {
    canonical: `${SITE_URL}/packages/story-deep-dive`,
  },
  openGraph: {
    title: "Story Deep Dive | Real Estate Media House",
    description:
      "Twelve enhanced property images, three animated scenes and a five post narrative arc built around the property.",
    url: `${SITE_URL}/packages/story-deep-dive`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg`,
        alt: "Residential property image transformed into additional lifestyle campaign content",
      },
    ],
  },
};

const packageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Story Deep Dive",
  description:
    "A property storytelling package including 12 enhanced images, 3 animated scenes and a 5 post narrative arc.",
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
    price: "1595",
    url: `${SITE_URL}/packages/story-deep-dive`,
  },
};

const robDelivers = [
  "12 enhanced property images",
  "3 animated scenes",
  "Around 15 seconds total animation",
];

const robynDelivers = [
  "A 5 post narrative arc",
  "A story that moves through the property rather than repeating features",
  "Arrival → living → hero room → lifestyle → close",
];

const storyArc = [
  {
    number: "01",
    title: "Arrival",
    text: "Open with the first impression and establish what kind of life or property story this is.",
  },
  {
    number: "02",
    title: "Living",
    text: "Move into the everyday heart of the property and show how the space feels to occupy.",
  },
  {
    number: "03",
    title: "The Room That Sells It",
    text: "Give the strongest room, detail or view its own moment instead of burying it in the gallery.",
  },
  {
    number: "04",
    title: "Lifestyle",
    text: "Shift from what the property has to what life around the property could feel like.",
  },
  {
    number: "05",
    title: "The Close",
    text: "Bring the story together with the final reason someone should inspect, enquire or keep thinking about it.",
  },
];

const fit = [
  {
    title: "The property has more than one story.",
    text: "The architecture, light, rooms, neighbourhood and lifestyle all deserve room to breathe.",
  },
  {
    title: "A three post campaign feels too shallow.",
    text: "You want enough narrative depth to move through the property rather than stop after a hook and one feature.",
  },
  {
    title: "You want depth without a finished Reel.",
    text: "Story Deep Dive gives you a larger visual and written campaign while keeping the assets flexible.",
  },
];

const videos = [
  {
    id: "bedroom",
    title: "Bedroom Animation",
    url: "https://www.youtube.com/watch?v=dQjStlhEGzI",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "living",
    title: "Living Room Animation",
    url: "https://www.youtube.com/watch?v=5_j6Nd7QxJA",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "facade",
    title: "Facade Animation",
    url: "https://www.youtube.com/watch?v=ezOd5jztwcI",
    category: "Residential",
    orientation: "landscape" as const,
  },
];

export default function StoryDeepDivePage() {
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
                Story Deep Dive
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Some properties need
                <span className="block text-rust">more room to speak.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                Story Deep Dive is for listings with more than one reason to
                care. More rooms. More emotion. More campaign depth.
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl font-semibold">
                  $1,595
                </span>

                <span className="text-sm text-white/40">+ GST</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Start a Story Deep Dive
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
                  More visual range.
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
                  More narrative depth.
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
                afterAlt="Residential bedroom transformed into lifestyle campaign content"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More Than One Hero Image
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Let the property unfold.
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                A strong property can lose impact when every room is treated the
                same. Story Deep Dive gives the best moments their own role in
                the campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NARRATIVE ARC */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Five Post Arc
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Room to room.
                <span className="block text-rust">Moment to moment.</span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-black/50">
                The story moves through the property so each post adds something
                instead of repeating what the listing already says.
              </p>
            </div>

            <div className="space-y-3">
              {storyArc.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-white p-6 sm:grid-cols-[60px_0.65fr_1.35fr]"
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
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Is This You?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The property deserves more than one angle.
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
              Twelve images. Three moving scenes.
              <span className="block text-rust">
                Five connected story moments.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="font-display text-5xl font-semibold text-brassBright">
                12
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Enhanced Images
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                Enough visual range to cover several rooms, details and campaign
                moments.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="font-display text-5xl font-semibold text-brassBright">
                3
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Animated Scenes
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                Three moving property moments with around fifteen seconds total
                animation.
              </p>
            </article>

            <article className="rounded-[2rem] border border-rust bg-rust/15 p-8">
              <p className="font-display text-5xl font-semibold text-brassBright">
                5
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Post Story Arc
              </h3>

              <p className="mt-4 leading-7 text-white/55">
                Five connected posts that move from arrival through the property
                and into the lifestyle story.
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
            eyebrow="Three Animated Scenes"
            heading="Give the strongest moments movement."
            description="Story Deep Dive includes three animated scenes so motion can appear throughout the campaign rather than in one isolated post."
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
                Find the property story before building the posts.
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  number: "01",
                  title: "Send The Existing Property Media",
                  text: "Supply the photography, renders or footage already created for the property.",
                },
                {
                  number: "02",
                  title: "Identify The Strongest Moments",
                  text: "We choose the rooms, details and scenes that can carry different parts of the campaign.",
                },
                {
                  number: "03",
                  title: "Build The Visual Range",
                  text: "Rob creates the enhanced images and three animated scenes.",
                },
                {
                  number: "04",
                  title: "Build The Five Part Story",
                  text: "Robyn structures the campaign so each post moves naturally into the next.",
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
              href="/packages/story-builder"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Need Less?
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Story Builder
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Eight enhanced images, two animated scenes and a three post
                narrative sequence.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View Story Builder
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/packages/the-full-story"
              className="group rounded-[2rem] border border-rust bg-ink p-8 text-white transition hover:bg-rust"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Want The Complete Campaign?
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                The Full Story
              </h2>

              <p className="mt-4 leading-7 text-white/50">
                Keep the visual depth, add more motion and finish with a complete
                vertical Reel and listing lifecycle story.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-brassBright">
                View The Full Story
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
            Story Deep Dive · $1,595 + GST
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Give the property
            <br />
            more than one moment.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Twelve enhanced images, three animated scenes and a five post story
            arc built from the property media you already have.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start a Story Deep Dive
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}