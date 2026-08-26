import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Story Starter | Property Story Package",
  description:
    "Story Starter combines 5 enhanced property images, 1 short animation and 5 written hooks to give an existing property campaign a stronger reason to stop and look.",
  alternates: {
    canonical: `${SITE_URL}/packages/story-starter`,
  },
  openGraph: {
    title: "Story Starter | Real Estate Media House",
    description:
      "Five enhanced property images, one short animation and a written story angle for every image.",
    url: `${SITE_URL}/packages/story-starter`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/residential/residential-before-after/residential-home-after.png`,
        alt: "Residential property transformed into additional campaign content",
      },
    ],
  },
};

const packageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Story Starter",
  description:
    "An entry property storytelling package including 5 enhanced property images, 1 short property animation and a written caption or hook for each image.",
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
    price: "595",
    url: `${SITE_URL}/packages/story-starter`,
  },
};

const robDelivers = [
  "5 enhanced property images",
  "1 short property animation",
  "Up to 5 seconds of animation",
];

const robynDelivers = [
  "A written hook or caption angle for each of the 5 images",
  "An emotional reason for each image to exist in the campaign",
  "Copy designed to work with the visual rather than simply describe it",
];

const reasons = [
  {
    title: "The photos are fine. People are still scrolling.",
    text: "The problem may not be image quality. It may be that the campaign is giving people no reason to stop.",
  },
  {
    title: "The listing has already been seen.",
    text: "Use the photography you already paid for to create new visual and narrative moments.",
  },
  {
    title: "You want to test the story approach.",
    text: "Story Starter is the smallest way to see what happens when visual transformation and narrative work together.",
  },
];

export default function StoryStarterPage() {
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
                Story Starter
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Give them a reason
                <span className="block text-rust">to stop.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                Your property photography may already be technically good.
                Story Starter gives five of those images a new visual direction
                and a new reason to matter.
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl font-semibold">
                  $595
                </span>

                <span className="text-sm text-white/40">+ GST</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Start with Story Starter
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
                  The visual.
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
                  The reason to care.
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

      {/* CORE IDEA */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/residential/residential-before-after/residential-home-before.png"
                after="/images/residential/residential-before-after/residential-home-after.png"
                beforeAlt="Original residential property image"
                afterAlt="Residential property transformed into additional campaign content"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More Than An Edit
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                First, we bring the image to life.
                <span className="block">Then, we make it move.</span>
                <span className="block text-rust">
                  Then, we tell you why it matters.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                The transformed image catches attention. The story gives that
                attention somewhere to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Is This You?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The listing does not need another shoot.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-black/50">
                It needs a stronger reason for someone to notice what is already
                there.
              </p>
            </div>

            <div className="space-y-4">
              {reasons.map((item, index) => (
                <article
                  key={item.title}
                  className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-white p-6 sm:grid-cols-[55px_0.9fr_1.1fr]"
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

      {/* WHAT YOU RECEIVE */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="mb-9 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What You Receive
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Five images. One moving moment. Five story angles.
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
                Five selected property images given a stronger visual direction.
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
                One selected image turned into a short moving property moment
                of up to five seconds.
              </p>
            </article>

            <article className="rounded-[2rem] border border-rust bg-ink p-8 text-white">
              <p className="font-display text-5xl font-semibold text-brassBright">
                5
              </p>

              <h3 className="mt-6 font-display text-2xl font-semibold">
                Story Hooks
              </h3>

              <p className="mt-4 leading-7 text-white/55">
                One written emotional angle for each image so the campaign has
                something more useful to say.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ROB + ROBYN */}
      <section className="bg-ink py-14 text-white md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Two Parts Of One Story
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                One person makes you look.
                <span className="block text-rust">
                  The other gives you a reason to stay.
                </span>
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <article className="rounded-[1.75rem] border border-white/10 p-7">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                  Rob
                </p>

                <h3 className="mt-4 font-display text-3xl font-semibold">
                  Visual craft.
                </h3>

                <p className="mt-4 leading-7 text-white/50">
                  Twenty years of architectural illustration and animation
                  applied to the property media you already have.
                </p>
              </article>

              <article className="rounded-[1.75rem] border border-rust bg-rust/15 p-7">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                  Robyn
                </p>

                <h3 className="mt-4 font-display text-3xl font-semibold">
                  Emotional direction.
                </h3>

                <p className="mt-4 leading-7 text-white/50">
                  Interior design thinking and storytelling used to find the
                  human angle inside each selected image.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with what you already have.
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  number: "01",
                  title: "Send The Property Media",
                  text: "Supply the existing photography, renders or footage from the campaign.",
                },
                {
                  number: "02",
                  title: "Choose The Five Images",
                  text: "We focus on the images with the strongest visual and storytelling potential.",
                },
                {
                  number: "03",
                  title: "Build The Visual + Story",
                  text: "Rob develops the visuals and motion. Robyn develops the hook and emotional angle for each image.",
                },
                {
                  number: "04",
                  title: "Put Them Back Into The Campaign",
                  text: "Use the new images, animation and written story alongside the original property media.",
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
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-18">
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

      {/* NEXT PACKAGE */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/packages/story-builder"
              className="group rounded-[2rem] border border-rust bg-ink p-8 text-white transition hover:bg-rust"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Need More Story?
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Story Builder
              </h2>

              <p className="mt-4 leading-7 text-white/50">
                Eight enhanced images, two animations and a three post sequence
                designed to unfold as a mini campaign.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-brassBright">
                View Story Builder
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
                Compare All Five Stories
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Compare the visual content, animation and storytelling included
                at each level.
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
            Story Starter · $595 + GST
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            The photography is already there.
            <br />
            Now give people a reason to care.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Five enhanced images. One moving scene. Five story hooks built from
            the property media you already have.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start with Story Starter
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}