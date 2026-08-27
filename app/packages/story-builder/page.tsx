import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Story Builder | Property Story Package",
  description:
    "Eight enhanced property images, two property animations up to 10 seconds each and a three post narrative sequence for $995 + GST.",
  alternates: {
    canonical: `${SITE_URL}/packages/story-builder`,
  },
  openGraph: {
    title: "Story Builder | Real Estate Media House",
    description:
      "Eight enhanced property images, two animations up to 10 seconds each and a three post story sequence built from the media you already have.",
    url: `${SITE_URL}/packages/story-builder`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg`,
        alt: "Residential bedroom enhanced into a stronger lifestyle marketing image",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Story Builder",
  description:
    "Eight enhanced property images, two property animations up to 10 seconds each and a three post narrative sequence.",
  provider: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${SITE_URL}/packages/story-builder`,
  offers: {
    "@type": "Offer",
    price: "995",
    priceCurrency: "AUD",
    url: `${SITE_URL}/packages/story-builder`,
  },
};

const visualDeliverables = [
  "8 enhanced property images",
  "2 property animations up to 10 seconds each",
  "Up to 20 seconds of animation in total",
];

const storyDeliverables = [
  "A 3 post narrative sequence designed to unfold in order",
  "Hook → Property moment → Lifestyle moment",
  "Story direction that gives each post a different emotional job",
];

const enhancedExamples = [
  {
    number: "01",
    title: "People",
    text: "Add believable people and everyday activity that help the room or exterior feel lived in rather than simply photographed.",
  },
  {
    number: "02",
    title: "Furniture",
    text: "Add or refine furniture while keeping the architecture, proportions and layout of the property accurate.",
  },
  {
    number: "03",
    title: "Appliances & Décor",
    text: "Introduce selected appliances, styling and decorative elements that support the lifestyle story without redesigning the property.",
  },
  {
    number: "04",
    title: "Cars & Movement",
    text: "Add appropriate vehicles and activity to exterior scenes where they help explain how the property could feel in use.",
  },
  {
    number: "05",
    title: "Landscape",
    text: "Enhance lawns, planting and outdoor areas while keeping the built form and defining property elements true.",
  },
  {
    number: "06",
    title: "Lighting & Atmosphere",
    text: "Adjust warmth, mood and time of day to create a different emotional moment from the same property media.",
  },
];

const storySequence = [
  {
    number: "01",
    title: "Hook",
    text: "Lead with the image or idea that gives someone the strongest reason to stop.",
  },
  {
    number: "02",
    title: "Property Moment",
    text: "Give them a feature, room or detail worth slowing down for rather than showing everything at once.",
  },
  {
    number: "03",
    title: "Lifestyle Moment",
    text: "Move from what the property has to what life there could actually feel like.",
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
    title: "Find The Campaign Thread",
    text: "We identify the strongest visual moments and decide how the three part story should unfold.",
  },
  {
    number: "03",
    title: "Build The Visual Story",
    text: "Rob creates eight enhanced images and two animated scenes of up to 10 seconds each.",
  },
  {
    number: "04",
    title: "Build The Narrative",
    text: "Robyn develops the three post sequence so each piece leads naturally into the next.",
  },
];

export default function StoryBuilderPage() {
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
              Story Builder · $995 + GST
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Give the campaign
              <span className="block text-rust">somewhere to go.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
              Eight enhanced property images, two animations up to 10 seconds
              each and a three post story sequence that moves from attention to
              property to lifestyle.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                Start Story Builder
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
                The three part story.
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
                Keep the property accurate.
                <span className="block text-rust">
                  Add the life around it.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                We keep the architecture, layout and defining property elements
                accurate to the supplied image.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                Depending on the story, we can then add or refine people,
                furniture, appliances, décor, cars, landscaping, lighting and
                atmosphere.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                The property remains the property. The enhancement helps someone
                understand how life could happen around it.
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
                before="/property-images/website/lifestyle/bedroom-before.jpeg"
                after="/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg"
                beforeAlt="Original residential bedroom photograph"
                afterAlt="Residential bedroom enhanced into a stronger lifestyle marketing image"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More Than One Moment
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                One post gets attention.
                <span className="block text-rust">
                  Three posts can build a story.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                Story Builder gives the listing room to unfold rather than
                asking one post to do everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SEQUENCE */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                The Three Part Sequence
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with attention.
                <span className="block text-rust">
                  Finish with imagination.
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {storySequence.map((item) => (
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

      {/* ANIMATION */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Two Animated Moments
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Up to 10 seconds each.
              <span className="block text-rust">
                Up to 20 seconds in total.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Each animated scene can run for up to 10 seconds, giving you two
              separate pieces of moving content and up to 20 seconds of
              animation across the package.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              The movement can support people, activity, lighting, atmosphere,
              environmental motion or camera movement depending on the selected
              image and story.
            </p>
          </div>
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
                Three posts.
                <br />
                One connected story.
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
            href="/packages/story-deep-dive"
            className="group block rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft md:p-10"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Need More Narrative Depth?
            </p>

            <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-display text-4xl font-semibold">
                  Story Deep Dive
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-black/50">
                  Twelve enhanced images, three animations up to 10 seconds each
                  and a five post narrative arc.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 font-semibold text-rust">
                Explore Story Deep Dive
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
            Story Builder · $995 + GST
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Do not dump the whole listing at once.
            <br />
            Let the story build.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Eight enhanced images, two animations up to 10 seconds each and a
            three post sequence designed to keep the campaign moving.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start Story Builder
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}