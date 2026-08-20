import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Property Refresh Package",
  description:
    "Transform your existing real estate photography with 5 enhanced property images and one short animation. Property Refresh by Real Estate Media House.",
};

const inclusions = [
  "5 enhanced property images",
  "1 short animation",
  "Up to 5 seconds of animation",
  "Enhancements selected to suit the property",
  "Finished files supplied ready for digital marketing",
];

const transformationExamples = [
  {
    number: "01",
    title: "Lifestyle",
    description:
      "Introduce believable people, pets or everyday activity into selected property imagery.",
  },
  {
    number: "02",
    title: "Furniture & Styling",
    description:
      "Add furniture, artwork, plants, rugs and finishing touches to strengthen a room.",
  },
  {
    number: "03",
    title: "Lighting",
    description:
      "Improve the atmosphere of a scene or create a warmer, more inviting property image.",
  },
  {
    number: "04",
    title: "Landscape",
    description:
      "Improve lawns, planting and outdoor areas where the existing photography needs more life.",
  },
  {
    number: "05",
    title: "People & Pets",
    description:
      "Give selected spaces a sense of scale, activity and everyday living.",
  },
  {
    number: "06",
    title: "Short Animation",
    description:
      "Turn one selected property image into a short moving scene of up to five seconds.",
  },
];

export default function PropertyRefreshPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Property Package 01
              </p>

              <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Property Refresh
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                A focused visual refresh for a property that already has strong
                photography but needs more life, atmosphere and movement.
              </p>
            </div>

            <div className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="font-display text-5xl font-semibold">$495</p>

              <p className="mt-1 text-sm text-white/40">+ GST</p>

              <Link
                href="/enquire"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Start with Property Refresh
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
                The starting package
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Bring the strongest images to life.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                Property Refresh is designed for agents who already have their
                listing photography and want to get more from it.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                We select five supplied property images and transform them with
                appropriate visual enhancements. One of those scenes can then
                be taken further with a short animation.
              </p>

              <p className="mt-5 font-display text-2xl font-semibold">
                First, we bring the image to life. Then, we make it move.
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
                  src="/property-images/website/staging/kitchen-before.jpeg"
                  alt="Original kitchen property photography"
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
                  src="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                  alt="Kitchen property image enhanced with lifestyle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute left-5 top-5 rounded-full bg-ink px-4 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
                Brought to life
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-3xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
              Example transformation
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Same property photography. More reason to stop and look.
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
                A compact property campaign.
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
              What we can do
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Choose the transformations that suit the property.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/50">
              Not every property needs every treatment. We use the supplied
              photography and the property itself to determine which
              enhancements will create the strongest result.
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

      {/* WHO IT'S FOR */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Best suited to
              </p>

              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl">
                Properties that need a creative lift without a full campaign.
              </h2>
            </div>

            <div className="grid gap-0 border-l border-t border-black/10 sm:grid-cols-2">
              {[
                "Residential listings",
                "New property campaigns",
                "Agents with existing photography",
                "Listings needing refreshed marketing",
                "Properties needing lifestyle",
                "A first step into property animation",
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
                  Need more motion?
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold">
                  Step up to Property Campaign.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-black/55">
                  Get 8 enhanced property images and 2 animations with up to 10
                  seconds of total animation.
                </p>
              </div>

              <Link
                href="/packages/property-campaign"
                className="inline-flex items-center gap-2 font-semibold text-rust"
              >
                View Property Campaign
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
            Property Refresh
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Send us the property.
            <br />
            We&apos;ll bring it to life.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Already have the photography? Start with Property Refresh and turn
            five of your strongest images into more engaging property content.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              Start Property Refresh
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