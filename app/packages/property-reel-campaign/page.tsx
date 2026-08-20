import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Property Reel Campaign",
  description:
    "Transform your existing real estate photography into 12 enhanced property images, 3–4 animated scenes and one finished vertical Property Reel.",
};

const inclusions = [
  "12 enhanced property images",
  "3–4 animated scenes",
  "1 finished vertical Property Reel",
  "Approx. 20–30 seconds finished duration",
  "Transitions between animated scenes",
  "More advanced cinematic movement and reveals",
  "Finished files supplied ready for digital marketing",
];

const transformationExamples = [
  {
    number: "01",
    title: "Cinematic Camera Movement",
    description:
      "Create depth and movement through selected still images to make each scene feel more film-like.",
  },
  {
    number: "02",
    title: "Lifestyle Motion",
    description:
      "Introduce people, activity, entertaining or subtle movement that makes the property feel lived in.",
  },
  {
    number: "03",
    title: "Day → Night",
    description:
      "Move selected property imagery from daylight through golden hour into evening.",
  },
  {
    number: "04",
    title: "Property Reveals",
    description:
      "Use movement and transitions to reveal interiors, exteriors and key architectural moments.",
  },
  {
    number: "05",
    title: "Arrival Moments",
    description:
      "Create car arrivals, people approaching the property or exterior activity that adds movement to the story.",
  },
  {
    number: "06",
    title: "Finished Property Reel",
    description:
      "Combine multiple transformed scenes into one edited vertical property film with transitions between moments.",
  },
];

export default function PropertyReelCampaignPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Property Package 04
              </p>

              <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Property Reel Campaign
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                Our most complete residential campaign — enhanced imagery,
                multiple animated scenes and one finished vertical Property Reel.
              </p>
            </div>

            <div className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="font-display text-5xl font-semibold">$1,590</p>

              <p className="mt-1 text-sm text-white/40">+ GST</p>

              <Link
                href="/enquire"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Start Property Reel Campaign
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
                The complete property story
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                From individual scenes to one finished film.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                Property Reel Campaign takes the strongest parts of the property
                and turns them into a sequence designed to work together.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                We enhance twelve supplied property images, create three to four
                animated scenes and then edit those moments together into one
                finished vertical Reel.
              </p>

              <p className="mt-5 font-display text-2xl font-semibold">
                This is where individual transformations become a property film.
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
                  src="/property-images/website/lifestyle/kitchen-before.jpeg"
                  alt="Original property photography before enhancement"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em]">
                Start here
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-sand">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                  alt="Property image transformed with lifestyle enhancement"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute left-5 top-5 rounded-full bg-ink px-4 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
                Then make it move
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-3xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
              From still to Reel
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              First, we bring the image to life. Then, we build the story.
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
                The full residential campaign.
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

      {/* REEL DIFFERENCE */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                What makes this different
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Individual animations become one finished property Reel.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-white/55">
                The Premium Campaign gives you individual animated scenes. The
                Property Reel Campaign takes those moments further by editing
                them together into one finished vertical film.
              </p>

              <div className="mt-9 grid gap-0 border-l border-t border-white/10 sm:grid-cols-2">
                {[
                  "Scene sequencing",
                  "Transitions",
                  "Cinematic reveals",
                  "Walkthrough-style movement",
                  "Multiple animated moments",
                  "20–30 second final Reel",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="min-h-[140px] border-b border-r border-white/10 p-6"
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brassBright">
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
        </div>
      </section>

      {/* TRANSFORMATIONS */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Reel possibilities
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Build a sequence of property moments.
            </h2>
          </div>

          <div className="mt-12 grid border-l border-t border-black/10 md:grid-cols-2 lg:grid-cols-3">
            {transformationExamples.map((item) => (
              <article
                key={item.title}
                className="min-h-[250px] border-b border-r border-black/10 p-7"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-rust">
                  {item.number}
                </p>

                <h3 className="mt-10 font-display text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/50">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Best suited to
              </p>

              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl">
                Properties that deserve more than a collection of still images.
              </h2>
            </div>

            <div className="grid gap-0 border-l border-t border-black/10 sm:grid-cols-2">
              {[
                "Premium listings",
                "Luxury property",
                "Property launches",
                "Architectural homes",
                "High-value campaigns",
                "Agents wanting a finished property film",
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
      <section className="bg-[#f7f5f1] py-16 md:py-20">
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
                remaining 50% is payable before the finished images,
                animations or Property Reel can be published, posted,
                advertised or distributed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section className="border-t border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-sand p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                  Larger project?
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold">
                  Explore Development Campaigns.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-black/55">
                  For demolition, construction stages, childcare centres,
                  commercial projects, render-to-reality and larger
                  transformation sequences, we create a custom campaign scope.
                </p>
              </div>

              <Link
                href="/packages/development-campaign"
                className="inline-flex items-center gap-2 font-semibold text-rust"
              >
                View Development Campaign
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
            Property Reel Campaign
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Turn the property
            <br />
            into a story that moves.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Start with your existing photography and build a complete visual
            campaign around the strongest parts of the property.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              Start Property Reel Campaign
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