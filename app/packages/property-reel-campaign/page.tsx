import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property Reel Campaign Package",
  description:
    "Get 12 enhanced property images, 3 to 4 animated scenes and a finished vertical Reel created from the property media you already have.",
  alternates: {
    canonical: `${SITE_URL}/packages/property-reel-campaign`,
  },
  openGraph: {
    title: "Property Reel Campaign Package",
    description:
      "A complete property media campaign with enhanced images, animated scenes and a finished vertical property Reel.",
    url: `${SITE_URL}/packages/property-reel-campaign`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg`,
        alt: "Property photography transformed into finished campaign content",
      },
    ],
  },
};

const packageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Property Reel Campaign",
  description:
    "A property media campaign including 12 enhanced images, 3 to 4 animated scenes and a finished vertical property Reel created from supplied existing property media.",
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
    price: "1590",
    url: `${SITE_URL}/packages/property-reel-campaign`,
  },
};

const inclusions = [
  "12 enhanced property images",
  "3 to 4 animated scenes",
  "Finished vertical property Reel",
  "Approximately 20 to 30 seconds",
];

const reelVideos = [
  {
    id: "residential-kitchen",
    title: "Residential Kitchen",
    url: "https://www.youtube.com/shorts/5NP5Ay_3SBY",
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
  {
    id: "facade",
    title: "Facade Day To Night",
    url: "https://www.youtube.com/shorts/UMWARuYjMSU",
    category: "Residential",
    orientation: "portrait" as const,
  },
];

export default function PropertyReelCampaignPage() {
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
        <div className="container-shell py-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Property Reel Campaign
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Build the content.
                <span className="block text-rust">Finish with the Reel.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                A complete property campaign using the photography you already
                have, with enhanced stills, multiple animated scenes and a
                finished vertical video.
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl font-semibold">
                  $1,590
                </span>
                <span className="text-sm text-white/40">+ GST</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Start a Reel Campaign
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/packages"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 font-semibold transition hover:bg-white hover:text-ink"
                >
                  Compare packages
                </Link>
              </div>
            </div>

            <div>
              <YouTubeVideoCarousel
                items={reelVideos}
                eyebrow="See The Motion"
                heading="This package is about having enough content to build a finished story."
                description="Tap through the examples. The Reel package combines transformed images and several animated scenes into one finished vertical video."
              />
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Included
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Enough content to create a proper campaign sequence.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {inclusions.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-6"
                >
                  <Check size={17} className="mt-1 shrink-0 text-rust" />
                  <p className="leading-7 text-black/60">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEST FOR */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Best For
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                When the campaign needs more than isolated assets.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "You want a finished short form property video.",
                "Several rooms, facades or scenes deserve their own campaign moment.",
                "The listing needs both fresh stills and movement.",
                "You want enough visual content to reuse across the campaign.",
              ].map((item, index) => (
                <article
                  key={item}
                  className="rounded-[1.5rem] border border-black/10 bg-white p-6"
                >
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="mt-4 leading-7 text-black/60">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STILL PROOF */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/lifestyle/kitchen-before.jpeg"
                after="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                beforeAlt="Original residential kitchen property photograph"
                afterAlt="Residential kitchen transformed into additional campaign content"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Reel Starts With The Images
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                First create stronger scenes. Then connect them.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                The 12 enhanced images give the campaign a wider visual bank.
                Selected scenes can then be animated and combined into the
                finished Reel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-4 md:grid-cols-4">
            <article className="rounded-[1.75rem] border border-black/10 bg-white p-7">
              <p className="font-display text-5xl font-semibold text-rust">
                12
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Enhanced Images
              </h3>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-white p-7">
              <p className="font-display text-5xl font-semibold text-rust">
                3 to 4
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Animated Scenes
              </h3>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-white p-7">
              <p className="font-display text-5xl font-semibold text-rust">
                20 to 30
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Seconds
              </h3>
            </article>

            <article className="rounded-[1.75rem] border border-rust bg-ink p-7 text-white">
              <p className="font-display text-5xl font-semibold text-brassBright">
                1
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Finished Vertical Reel
              </h3>
            </article>
          </div>
        </div>
      </section>

      {/* HOW IT BUILDS */}
      <section className="bg-ink py-14 text-white md:py-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                How The Campaign Builds
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                One property shoot becomes a sequence.
              </h2>
            </div>

            <div className="space-y-2">
              {[
                {
                  number: "01",
                  title: "Choose The Strongest Images",
                  text: "Select the property scenes with the most campaign potential.",
                },
                {
                  number: "02",
                  title: "Create The Enhanced Stills",
                  text: "Develop 12 images into additional campaign assets.",
                },
                {
                  number: "03",
                  title: "Choose The Motion Scenes",
                  text: "Turn 3 to 4 of the strongest visuals into moving content.",
                },
                {
                  number: "04",
                  title: "Build The Finished Reel",
                  text: "Combine the scenes into one short vertical property video.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="grid gap-4 border-b border-white/10 py-5 sm:grid-cols-[55px_1fr]"
                >
                  <p className="font-mono text-[9px] text-brassBright">
                    {step.number}
                  </p>

                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-white/45">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENCE FROM PREMIUM */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Premium Campaign
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                $1,295 + GST
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                12 enhanced images and 3 animated scenes. Best when you want a
                larger bank of campaign assets but do not need a finished Reel.
              </p>

              <Link
                href="/packages/premium-campaign"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View Premium Campaign
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="rounded-[2rem] border border-rust bg-rust p-8 text-white">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Property Reel Campaign
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                $1,590 + GST
              </h2>

              <p className="mt-4 leading-7 text-white/70">
                12 enhanced images, 3 to 4 animated scenes and a finished 20 to
                30 second vertical property Reel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-16">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-10">
            <div className="grid gap-7 md:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                  Payment
                </p>

                <p className="mt-5 font-display text-5xl font-semibold">
                  50 / 50
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold">
                  50% to begin. 50% before use.
                </h2>

                <p className="mt-4 leading-7 text-black/50">
                  The remaining balance is due before the finished content may
                  be published, posted, distributed, advertised or otherwise
                  used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/packages"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Compare
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Compare All Five Packages
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Check the differences in stills, animation and finished video
                before choosing.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Compare packages
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/video-library"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                See The Motion
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Explore Property Animation
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Watch more residential, commercial and childcare animation
                examples.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Open video library
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
      <section className="bg-rust px-6 py-18 text-white md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Property Reel Campaign · $1,590 + GST
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Property media made to move.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Twelve enhanced images, multiple animated scenes and one finished
            vertical Reel from the property media you already have.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start a Reel Campaign
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}