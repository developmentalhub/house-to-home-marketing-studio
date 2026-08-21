import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Premium Property Campaign Package",
  description:
    "Get 12 enhanced property images and 3 animated scenes created from your existing property media for a stronger premium campaign.",
  alternates: {
    canonical: `${SITE_URL}/packages/premium-campaign`,
  },
  openGraph: {
    title: "Premium Property Campaign Package",
    description:
      "A larger property media campaign with 12 enhanced images and 3 animated scenes created from existing photography.",
    url: `${SITE_URL}/packages/premium-campaign`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg`,
        alt: "Residential property photography transformed into premium campaign content",
      },
    ],
  },
};

const packageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Premium Campaign",
  description:
    "A premium property media campaign including 12 enhanced images and 3 animated scenes created from supplied existing property media.",
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
    price: "1295",
    url: `${SITE_URL}/packages/premium-campaign`,
  },
};

const inclusions = [
  "12 enhanced property images",
  "3 animated scenes",
  "Around 15 seconds total animation",
  "Created from your existing property media",
];

const premiumVideos = [
  {
    id: "kitchen",
    title: "Kitchen Animation",
    url: "https://www.youtube.com/shorts/5NP5Ay_3SBY",
    category: "Residential",
    orientation: "portrait" as const,
  },
  {
    id: "facade",
    title: "Facade Day To Night",
    url: "https://www.youtube.com/shorts/UMWARuYjMSU",
    category: "Facade",
    orientation: "portrait" as const,
  },
  {
    id: "living",
    title: "Living Room Animation",
    url: "https://www.youtube.com/watch?v=5_j6Nd7QxJA",
    category: "Interior",
    orientation: "landscape" as const,
  },
];

export default function PremiumCampaignPage() {
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
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Premium Campaign
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Build a deeper
                <span className="block text-rust">
                  property campaign.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                For listings that need a larger bank of transformed images and
                multiple animated scenes, without moving into a finished Reel.
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl font-semibold">
                  $1,295
                </span>
                <span className="text-sm text-white/40">+ GST</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Start a Premium Campaign
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

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Included
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {inclusions.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 p-4"
                  >
                    <Check
                      size={17}
                      className="mt-1 shrink-0 text-brassBright"
                    />

                    <p className="text-sm leading-6 text-white/65">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-white/40">
                Best for stronger property campaigns that need more visual
                variety across several spaces, angles or campaign moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIT */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Best For
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                When a few fresh images are not enough.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "The campaign needs multiple new visual moments.",
                "Several rooms, facades or scenes are worth extending.",
                "You want more stills and more motion without a finished Reel.",
                "The listing needs enough content to refresh the campaign more than once.",
              ].map((item, index) => (
                <article
                  key={item}
                  className="rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-6"
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

      {/* PROOF */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/staging/living-room-before.jpeg"
                after="/property-images/website/staging/living-room-after.jpeg"
                beforeAlt="Empty residential living room before styling"
                afterAlt="Residential living room transformed into additional campaign content"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More Campaign Range
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Spread the new content across the property.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                With 12 enhanced images and 3 animated scenes, the campaign can
                cover more than one hero room or one idea.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] bg-ink p-6 text-white md:p-8">
            <YouTubeVideoCarousel
              items={premiumVideos}
              eyebrow="Three Animated Scenes"
              heading="Use motion across more than one part of the property."
              description="The Premium Campaign gives you three separate animated scenes and around 15 seconds of total animation."
            />
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <p className="font-display text-5xl font-semibold text-rust">
                12
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Enhanced Images
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                A larger bank of transformed stills for different rooms, spaces
                and campaign moments.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <p className="font-display text-5xl font-semibold text-rust">
                3
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Animated Scenes
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Three moving scenes chosen from the strongest property images.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <p className="font-display text-5xl font-semibold text-rust">
                ~15 sec
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Total Animation
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Around fifteen seconds of total animation across the selected
                scenes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ink py-14 text-white md:py-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Simple Process
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Use the strongest images from the shoot.
              </h2>
            </div>

            <div className="space-y-2">
              {[
                "Send the property photography, renders or footage you already have.",
                "Choose the 12 images with the best campaign potential.",
                "Choose the 3 scenes that should become moving content.",
                "Use the finished assets alongside the original listing media.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="grid gap-4 border-b border-white/10 py-5 sm:grid-cols-[55px_1fr]"
                >
                  <p className="font-mono text-[9px] text-brassBright">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="leading-7 text-white/55">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT + NEXT */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Payment
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                50% to begin. 50% before use.
              </h2>

              <p className="mt-5 leading-7 text-black/50">
                The remaining balance is due before the finished content may be
                published, posted, distributed, advertised or otherwise used.
              </p>
            </div>

            <Link
              href="/packages/property-reel-campaign"
              className="group rounded-[2rem] border border-rust bg-ink p-8 text-white transition hover:bg-rust"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Want A Finished Reel?
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Property Reel Campaign
              </h2>

              <p className="mt-5 leading-7 text-white/50">
                Keep the 12 enhanced images, add 3 to 4 animated scenes and
                receive a finished vertical property Reel.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-brassBright">
                View Property Reel Campaign
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
            Premium Campaign · $1,295 + GST
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            More scenes.
            <br />
            More campaign mileage.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Twelve enhanced images and three animated scenes created from the
            property media you already have.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start a Premium Campaign
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}