import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property Campaign Package",
  description:
    "Get 8 enhanced property images and 2 animations created from your existing property photography for a stronger ongoing campaign.",
  alternates: {
    canonical: `${SITE_URL}/packages/property-campaign`,
  },
  openGraph: {
    title: "Property Campaign Package",
    description:
      "A practical property media package for agents who need more campaign variety from the photography they already have.",
    url: `${SITE_URL}/packages/property-campaign`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg`,
        alt: "Residential property photography transformed into additional campaign content",
      },
    ],
  },
};

const packageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Property Campaign",
  description:
    "A property media campaign package including 8 enhanced images and 2 property animations created from supplied existing property media.",
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
    price: "895",
    url: `${SITE_URL}/packages/property-campaign`,
  },
};

const inclusions = [
  "8 enhanced property images",
  "2 property animations",
  "Up to 10 seconds total animation",
  "Created from your existing property media",
];

const campaignVideos = [
  {
    id: "residential-kitchen",
    title: "Kitchen Animation",
    url: "https://www.youtube.com/shorts/5NP5Ay_3SBY",
    category: "Residential",
    orientation: "portrait" as const,
  },
  {
    id: "facade-day-night",
    title: "Facade Day To Night",
    url: "https://www.youtube.com/shorts/UMWARuYjMSU",
    category: "Facade",
    orientation: "portrait" as const,
  },
];

export default function PropertyCampaignPage() {
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
                Property Campaign
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                More campaign moments.
                <span className="block text-rust">
                  No second property shoot.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                For agents who need more than a quick refresh and want a useful
                mix of transformed stills and moving property content.
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl font-semibold">
                  $895
                </span>
                <span className="text-sm text-white/40">+ GST</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Start a Property Campaign
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
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT SUITS */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Best For
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A listing that needs several fresh reasons to appear again.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "The existing listing photography has already been seen.",
                "You want both fresh stills and moving content.",
                "There are several rooms or hero images worth extending.",
                "You need more variety without moving into a finished Reel.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-6"
                >
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="mt-4 leading-7 text-black/60">{item}</p>
                </div>
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
                before="/property-images/website/lifestyle/bedroom-before.jpeg"
                after="/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg"
                beforeAlt="Original residential bedroom property photograph"
                afterAlt="Residential bedroom transformed into additional lifestyle campaign content"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What Changes
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                One shoot can carry more than one campaign story.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Use the original photography for the listing, then create
                additional versions that add lifestyle, furniture, atmosphere
                or another visual direction.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] bg-ink p-6 text-white md:p-8">
            <YouTubeVideoCarousel
              items={campaignVideos}
              eyebrow="Two Moving Moments"
              heading="Add movement where it earns attention."
              description="The Property Campaign includes two animated scenes, giving the listing more than one moving asset to use."
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
                8
              </p>
              <h3 className="mt-6 font-display text-2xl font-semibold">
                Enhanced Images
              </h3>
              <p className="mt-4 leading-7 text-black/50">
                Enough still content to refresh several parts of the campaign.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <p className="font-display text-5xl font-semibold text-rust">
                2
              </p>
              <h3 className="mt-6 font-display text-2xl font-semibold">
                Animated Scenes
              </h3>
              <p className="mt-4 leading-7 text-black/50">
                Two separate moving property moments from selected images.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <p className="font-display text-5xl font-semibold text-rust">
                10 sec
              </p>
              <h3 className="mt-6 font-display text-2xl font-semibold">
                Total Animation
              </h3>
              <p className="mt-4 leading-7 text-black/50">
                Up to ten seconds total animation across the two scenes.
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
                Pick the strongest campaign opportunities.
              </h2>
            </div>

            <div className="space-y-2">
              {[
                "Send the existing property photography, renders or footage.",
                "Choose the eight images worth extending.",
                "Choose the two scenes with the strongest animation potential.",
                "Use the finished content alongside the original campaign media.",
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
              href="/packages/premium-campaign"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Need More?
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Premium Campaign
              </h2>

              <p className="mt-5 leading-7 text-black/50">
                Move up to 12 enhanced images and 3 animated scenes when the
                property needs a larger visual campaign.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View Premium Campaign
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
            Property Campaign · $895 + GST
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            One shoot.
            <br />
            More campaign content.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Eight enhanced images and two moving property moments from the media
            you already have.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start a Property Campaign
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}