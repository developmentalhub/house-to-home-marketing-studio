import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium Campaign Package",
  description:
    "Transform your existing real estate photography with 12 enhanced property images and 3 animated scenes. Premium Campaign by Real Estate Media House.",
};

const inclusions = [
  "12 enhanced property images",
  "3 animated scenes",
  "Around 15 seconds of total motion",
  "More advanced multi-scene animation",
  "Enhancements selected to suit the property",
  "Finished files supplied ready for digital marketing",
];

const transformationExamples = [
  {
    number: "01",
    title: "Golden Hour",
    description:
      "Shift selected exterior imagery into a warmer, more atmospheric late-day scene.",
  },
  {
    number: "02",
    title: "Pool Activation",
    description:
      "Bring water, reflections and poolside activity into a selected exterior scene.",
  },
  {
    number: "03",
    title: "Lifestyle Moments",
    description:
      "Introduce believable people, entertaining, family activity or premium lifestyle details.",
  },
  {
    number: "04",
    title: "Cinematic Movement",
    description:
      "Create stronger camera motion, depth and visual movement across selected scenes.",
  },
  {
    number: "05",
    title: "Show The Arrival",
    description:
      "Add vehicles, people or an arrival moment to give the property exterior more life.",
  },
  {
    number: "06",
    title: "Multi-Scene Motion",
    description:
      "Create a collection of moving property moments that work together across the campaign.",
  },
];

export default function PremiumCampaignPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Property Package 03
              </p>

              <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Premium Campaign
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                A larger visual campaign for premium properties that need more
                enhanced imagery, more motion and a more cinematic presentation.
              </p>
            </div>

            <div className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="font-display text-5xl font-semibold">$1,295</p>

              <p className="mt-1 text-sm text-white/40">+ GST</p>

              <Link
                href="/enquire"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Start Premium Campaign
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Premium property marketing
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                More of the property. More of the atmosphere.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                Premium Campaign gives us more room to build a stronger visual
                identity around a high-value listing.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Twelve supplied images can be transformed across interiors,
                exteriors and lifestyle scenes, with three selected scenes
                developed into more advanced animation.
              </p>

              <p className="mt-5 font-display text-2xl font-semibold">
                The goal is not more content for the sake of it. It is more
                useful moments from the property you already have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem] bg-sand">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/property-images/website/lifestyle/foyer-before.jpeg"
                  alt="Original premium property foyer photograph"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em]">
                Original
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-sand">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/property-images/website/lifestyle/foyer-after.jpeg"
                  alt="Premium foyer enhanced with lifestyle and atmosphere"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute left-5 top-5 rounded-full bg-ink px-4 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
                Enhanced
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-3xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
              Premium transformation
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Create the atmosphere the property deserves.
            </h2>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What&apos;s included
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A larger visual campaign.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {inclusions.map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[55px_1fr] border-b border-black/10 py-6"
                >
                  <p className="font-mono text-xs text-rust">
                    0{index + 1}
                  </p>

                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Premium transformations
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Create more cinematic property moments.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/50">
              With three animated scenes, we can create a more varied set of
              moving content around the property rather than relying on one
              isolated animation.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
            {transformationExamples.map((item) => (
              <article
                key={item.title}
                className="min-h-[250px] border-b border-r border-white/10 p-7"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brassBright">
                  {item.number}
                </p>

                <h3 className="mt-10 font-display text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT DISTINCTION */}
      <section className="border-b border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Animation vs Reel
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
                This package includes animated scenes, not a finished Property
                Reel.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="leading-8 text-black/55">
                Premium Campaign gives you three individual animated property
                scenes with around 15 seconds of total motion. If you want those
                scenes edited together with transitions into one finished
                vertical property film, the Property Reel Campaign is the next
                package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Best suited to
              </p>

              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl">
                Properties where presentation is part of the value.
              </h2>
            </div>

            <div className="grid gap-0 border-l border-t border-black/10 sm:grid-cols-2">
              {[
                "Premium residential listings",
                "Luxury homes",
                "Properties with strong architecture",
                "Pool and entertaining properties",
                "Campaigns needing multiple animated scenes",
                "Listings with strong interior and exterior imagery",
              ].map((item, index) => (
                <div
                  key={item}
                  className="min-h-[150px] border-b border-r border-black/10 p-6"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-rust">
                    0{index + 1}
                  </p>

                  <p className="mt-7 font-display text-xl font-semibold">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="border-y border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Payment
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                50% to begin.
                <br />
                50% before publishing.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="leading-8 text-black/55">
                A 50% deposit is required before production begins. The
                remaining 50% is payable before the finished content can be
                published, posted, advertised or distributed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PACKAGE */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-sand p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                  Want the finished film?
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold">
                  Step up to Property Reel Campaign.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-black/55">
                  Combine enhanced imagery and 3–4 animated scenes into one
                  finished 20–30 second vertical Property Reel.
                </p>
              </div>

              <Link
                href="/packages/property-reel-campaign"
                className="inline-flex items-center gap-2 font-semibold text-rust"
              >
                View Property Reel Campaign
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Premium Campaign
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Make the property
            <br />
            feel worth stopping for.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Start with the premium photography you already have and turn the
            strongest scenes into a more cinematic visual campaign.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              Start Premium Campaign
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/packages"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Compare packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}