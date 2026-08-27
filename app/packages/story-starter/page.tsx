import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Story Starter | Property Story Package",
  description:
    "Five enhanced property images, one property animation up to 10 seconds and five individual story hooks for $595 + GST.",
  alternates: {
    canonical: `${SITE_URL}/packages/story-starter`,
  },
  openGraph: {
    title: "Story Starter | Real Estate Media House",
    description:
      "Five enhanced property images, one animation up to 10 seconds and five individual story hooks built from your existing property media.",
    url: `${SITE_URL}/packages/story-starter`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/residential/residential-before-after/residential-home-after.png`,
        alt: "Residential property enhanced for a stronger visual marketing story",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Story Starter",
  description:
    "Five enhanced property images, one property animation up to 10 seconds and five individual story hooks.",
  provider: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${SITE_URL}/packages/story-starter`,
  offers: {
    "@type": "Offer",
    price: "595",
    priceCurrency: "AUD",
    url: `${SITE_URL}/packages/story-starter`,
  },
};

const visualDeliverables = [
  "5 enhanced property images",
  "1 property animation up to 10 seconds",
];

const storyDeliverables = [
  "A story hook or caption angle for each of the 5 images",
  "An emotional direction for each image so it has a reason to exist in the campaign",
];

const enhancedExamples = [
  {
    number: "01",
    title: "People",
    text: "Introduce believable human moments that help someone imagine how the property could feel to live in.",
  },
  {
    number: "02",
    title: "Furniture",
    text: "Add or refine furniture while keeping the room dimensions, architecture and layout accurate.",
  },
  {
    number: "03",
    title: "Appliances & Décor",
    text: "Add selected appliances, styling and decorative elements that support the scene without changing the property itself.",
  },
  {
    number: "04",
    title: "Cars & Activity",
    text: "Bring exterior scenes to life with appropriate vehicles, people and everyday activity.",
  },
  {
    number: "05",
    title: "Landscape",
    text: "Improve lawns, planting and surrounding atmosphere while keeping the built property true to the supplied image.",
  },
  {
    number: "06",
    title: "Lighting & Atmosphere",
    text: "Strengthen warmth, mood and time of day so the same property image can carry a different emotional story.",
  },
];

const process = [
  {
    number: "01",
    title: "Send The Property Media",
    text: "Supply the property photography, renders or footage you already have.",
  },
  {
    number: "02",
    title: "Find The Strongest Moments",
    text: "We identify five images with the best visual and emotional potential.",
  },
  {
    number: "03",
    title: "Build The Visual Story",
    text: "Rob enhances the selected images and creates one animated scene up to 10 seconds.",
  },
  {
    number: "04",
    title: "Give Each Image Something To Say",
    text: "Robyn develops a hook or caption angle for each image so the campaign moves beyond simply showing rooms.",
  },
];

export default function StoryStarterPage() {
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
              Story Starter · $595 + GST
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Give them a reason
              <span className="block text-rust">to stop.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
              Five enhanced property images, one animation up to 10 seconds and
              five individual story hooks built from the property media you
              already have.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                Start Story Starter
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
                The visual story.
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
                The human story.
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
                Keep the architecture true.
                <span className="block text-rust">
                  Build the life around it.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                We keep the architecture, layout and defining property elements
                accurate to the supplied image.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                Then, depending on what the story needs, we can add or refine
                people, furniture, appliances, décor, cars, landscaping,
                lighting and atmosphere.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                The goal is not to redesign the property. It is to make the
                existing image feel more complete, more human and more useful
                to the campaign.
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
                afterAlt="Residential property image enhanced for additional campaign storytelling"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                One Image. More Possibility.
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The property stays recognisable.
                <span className="block text-rust">
                  The campaign gains another moment.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                Story Starter is designed for photography that already does a
                good job of showing the property but needs another layer of
                attention, atmosphere or human connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE STORY DIFFERENCE */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                The Story Difference
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Do not just show
                <span className="block text-rust">what is in the room.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-white/60">
                A photograph can show a breakfast bar. The story can make that
                image about Sunday morning coffee while the house is still
                quiet.
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/50">
                A photograph can show the backyard. The story can make it about
                dinner outside that somehow turns into the whole evening.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9 text-white/80">
                Five images. Five opportunities to give someone something more
                to imagine.
              </p>
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
                Start with the media.
                <br />
                Find the story.
              </h2>
            </div>

            <div className="space-y-4">
              {process.map((step) => (
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
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
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
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <Link
            href="/packages/story-builder"
            className="group block rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft md:p-10"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Need More Campaign Depth?
            </p>

            <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-display text-4xl font-semibold">
                  Story Builder
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-black/50">
                  Eight enhanced images, two animations up to 10 seconds each
                  and a three post narrative sequence.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 font-semibold text-rust">
                Explore Story Builder
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
            Story Starter · $595 + GST
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            The photography is already there.
            <br />
            Give it more to say.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Five enhanced images, one animation up to 10 seconds and five
            individual story hooks.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start Story Starter
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}