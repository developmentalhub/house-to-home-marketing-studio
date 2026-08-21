import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property Refresh Package",
  description:
    "Refresh an existing property campaign with 5 enhanced images and 1 short property animation created from the photography you already have.",
  alternates: {
    canonical: `${SITE_URL}/packages/property-refresh`,
  },
  openGraph: {
    title: "Property Refresh Package",
    description:
      "A compact property media package for agents who need fresh campaign content without organising another shoot.",
    url: `${SITE_URL}/packages/property-refresh`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg`,
        alt: "Residential property image transformed into additional campaign content",
      },
    ],
  },
};

const packageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Property Refresh",
  description:
    "A property media refresh package including 5 enhanced images and 1 short property animation created from supplied existing property media.",
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
    price: "495",
    url: `${SITE_URL}/packages/property-refresh`,
  },
};

const packageIncludes = [
  "5 enhanced property images",
  "1 short property animation",
  "Up to 5 seconds of animation",
  "Created from your existing property media",
];

const goodFit = [
  {
    problem: "The listing has been seen",
    answer:
      "Create a few fresh campaign images and a moving moment instead of repeating the same photography.",
  },
  {
    problem: "You only need a small refresh",
    answer:
      "Add enough new content to change the campaign without committing to a larger package.",
  },
  {
    problem: "One hero image has more potential",
    answer:
      "Turn it into a stronger still and a short animated scene.",
  },
  {
    problem: "You want to test the idea",
    answer:
      "Start with a smaller package before building a larger property campaign.",
  },
];

export default function PropertyRefreshPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(packageJsonLd),
        }}
      />

      {/* COMPACT HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-14 md:py-18">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Property Refresh
              </p>

              <div className="mt-5 flex flex-wrap items-end gap-4">
                <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                  Give the campaign
                  <span className="block text-rust">something new.</span>
                </h1>
              </div>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                A compact refresh for agents who already have the property
                photography and need a few new campaign moments.
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl font-semibold">
                  $495
                </span>

                <span className="text-sm text-white/40">+ GST</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Start a Property Refresh
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

              <div className="mt-5 space-y-3">
                {packageIncludes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-white/10 pb-3 last:border-b-0"
                  >
                    <Check
                      size={17}
                      className="mt-1 shrink-0 text-brassBright"
                    />

                    <p className="leading-7 text-white/65">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-7 border-t border-white/10 pt-6 text-sm leading-7 text-white/40">
                Best for a listing that does not need a complete campaign
                rebuild but would benefit from a small bank of fresh visual
                content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMMEDIATE PROOF */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/lifestyle/kitchen-before.jpeg"
                after="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                beforeAlt="Original kitchen property photograph"
                afterAlt="Kitchen image transformed into additional lifestyle campaign content"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What The Refresh Does
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Take an image people have already seen and give it another job.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                The original photography stays available. The enhanced version
                gives the property another visual moment for the campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GOOD FIT */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Is This The Right Package?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Property Refresh is for a campaign that needs a nudge, not a
                rebuild.
              </h2>
            </div>

            <div className="space-y-4">
              {goodFit.map((item, index) => (
                <article
                  key={item.problem}
                  className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-white p-6 sm:grid-cols-[55px_0.8fr_1.2fr]"
                >
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
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

      {/* SIMPLE DELIVERABLES */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What You Receive
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Five fresh stills. One moving scene.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <p className="font-display text-5xl font-semibold text-rust">
                5
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Enhanced Images
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Selected property images transformed into additional finished
                campaign visuals.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <p className="font-display text-5xl font-semibold text-rust">
                1
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Property Animation
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                One selected scene turned into short moving property content.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <p className="font-display text-5xl font-semibold text-rust">
                5 sec
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Animation Length
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Up to five seconds of animation for one concise campaign
                moment.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                What Could You Refresh?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Pick the images with the most campaign potential.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "A hero kitchen or living room",
                "An empty room that needs furniture",
                "A facade that needs another campaign moment",
                "A lifestyle scene that feels too clean",
                "A vacant commercial space",
                "A property image that could work in motion",
              ].map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[40px_1fr] gap-4 border-b border-white/10 py-5"
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

      {/* PROCESS */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                No second shoot required.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Existing Property Media",
                  text: "Supply the photography, renders or footage already created for the campaign.",
                },
                {
                  number: "02",
                  title: "Choose The Five Images",
                  text: "Select the property scenes that would benefit most from another visual direction.",
                },
                {
                  number: "03",
                  title: "Choose The Animation Scene",
                  text: "Pick one image that can carry the strongest moving campaign moment.",
                },
                {
                  number: "04",
                  title: "Receive The Refresh",
                  text: "Use the new stills and animation alongside the original campaign media.",
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
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
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

      {/* PACKAGE UPGRADE */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/packages/property-campaign"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Need More?
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Property Campaign
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Move up to 8 enhanced images and 2 animations when the listing
                needs more campaign variety.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View Property Campaign
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

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
                See the difference between Refresh, Campaign, Premium, Reel and
                Development options.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Compare packages
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
            Property Refresh · $495 + GST
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            The photography is already done.
            <br />
            Give the campaign something new.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the existing property media and choose the images you want
            to extend.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start a Property Refresh
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}