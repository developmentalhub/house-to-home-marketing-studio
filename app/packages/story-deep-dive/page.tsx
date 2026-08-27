import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Story Deep Dive | Property Story Package",
  description:
    "Twelve enhanced property images, three property animations up to 10 seconds each and a five post narrative arc for $1,595 + GST.",
  alternates: {
    canonical: `${SITE_URL}/packages/story-deep-dive`,
  },
  openGraph: {
    title: "Story Deep Dive | Real Estate Media House",
    description:
      "Twelve enhanced property images, three animations up to 10 seconds each and a five post narrative arc built from your existing property media.",
    url: `${SITE_URL}/packages/story-deep-dive`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg`,
        alt: "Residential bedroom enhanced into lifestyle marketing content",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Story Deep Dive",
  description:
    "Twelve enhanced property images, three property animations up to 10 seconds each and a five post narrative arc.",
  provider: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${SITE_URL}/packages/story-deep-dive`,
  offers: {
    "@type": "Offer",
    price: "1595",
    priceCurrency: "AUD",
    url: `${SITE_URL}/packages/story-deep-dive`,
  },
};

const visualDeliverables = [
  "12 enhanced property images",
  "3 property animations up to 10 seconds each",
  "Up to 30 seconds of animation in total",
];

const storyDeliverables = [
  "A 5 post narrative arc built around the strongest moments in the property",
  "Arrival → connection → hero moment → lifestyle → emotional close",
  "Story direction that gives each stage a different reason to matter",
];

const enhancedExamples = [
  {
    number: "01",
    title: "People",
    text: "Introduce believable human moments that help someone understand how the room, garden or exterior could feel in everyday use.",
  },
  {
    number: "02",
    title: "Furniture",
    text: "Add or refine furniture while keeping the architecture, room proportions and layout accurate to the supplied image.",
  },
  {
    number: "03",
    title: "Appliances & Décor",
    text: "Introduce selected appliances, styling and decorative details that support the scene without changing the property itself.",
  },
  {
    number: "04",
    title: "Cars & Activity",
    text: "Add appropriate vehicles, people and movement to exterior scenes when they help tell a stronger property story.",
  },
  {
    number: "05",
    title: "Landscape",
    text: "Refine lawns, planting and surrounding environment while keeping the built form and defining architectural elements true.",
  },
  {
    number: "06",
    title: "Lighting & Atmosphere",
    text: "Strengthen warmth, mood and time of day so the same property media can communicate a different emotional moment.",
  },
];

const storyArc = [
  {
    number: "01",
    title: "Arrival",
    text: "Start with the first impression and the feeling someone gets before they have even stepped inside.",
  },
  {
    number: "02",
    title: "Connection",
    text: "Show how the main spaces relate to each other and where everyday life naturally comes together.",
  },
  {
    number: "03",
    title: "Hero Moment",
    text: "Give the room, view or feature with the strongest emotional pull enough space to become memorable.",
  },
  {
    number: "04",
    title: "Lifestyle",
    text: "Move beyond the property itself and help someone imagine the routines, gatherings and quiet moments that could happen there.",
  },
  {
    number: "05",
    title: "Emotional Close",
    text: "Finish with the feeling you want someone to carry with them after the campaign disappears from the screen.",
  },
];

const videos = [
  {
    id: "bedroom",
    title: "Bedroom Property Animation",
    url: "https://www.youtube.com/watch?v=dQjStlhEGzI",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "living",
    title: "Living Property Animation",
    url: "https://www.youtube.com/watch?v=5_j6Nd7QxJA",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "facade",
    title: "Facade Property Animation",
    url: "https://www.youtube.com/watch?v=ezOd5jztwcI",
    category: "Residential",
    orientation: "landscape" as const,
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
    title: "Find The Narrative Arc",
    text: "We identify the strongest rooms, details and emotional opportunities and decide how the story should unfold.",
  },
  {
    number: "03",
    title: "Build The Visual Story",
    text: "Rob creates twelve enhanced images and three animated scenes of up to 10 seconds each.",
  },
  {
    number: "04",
    title: "Build The Five Part Narrative",
    text: "Robyn develops the five post arc so the campaign moves from first impression to emotional close.",
  },
];

export default function StoryDeepDivePage() {
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
              Story Deep Dive · $1,595 + GST
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Some properties have
              <span className="block text-rust">
                more than one story worth telling.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
              Twelve enhanced property images, three animations up to 10
              seconds each and a five post narrative arc built around the
              strongest visual and emotional moments in the property.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                Start Story Deep Dive
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
                The visual depth.
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
                The five part story.
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
                Depending on what each scene needs, we can then add or refine
                people, furniture, appliances, décor, cars, landscaping,
                lighting and atmosphere.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                The property is not redesigned. The enhancement helps each image
                carry a stronger visual and emotional story.
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
                afterAlt="Residential bedroom enhanced into lifestyle marketing content"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More Narrative Depth
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Give the best moments
                <span className="block text-rust">
                  enough room to matter.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                Some properties have too many strong details to reduce to one or
                two campaign moments. Story Deep Dive creates enough space for
                those moments to unfold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIVE PART ARC */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                The Five Part Story
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Move through the property
                <span className="block text-rust">
                  like someone already belongs there.
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {storyArc.map((item) => (
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

      {/* ANIMATION LENGTH */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Three Animated Moments
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Up to 10 seconds each.
              <span className="block text-rust">
                Up to 30 seconds in total.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Each animated scene can run for up to 10 seconds, giving you
              three separate moving campaign assets and up to 30 seconds of
              animation across the package.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Each scene can focus on a different part of the story, such as
              arrival, a hero room, a lifestyle moment, changing light or
              believable movement through the property.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEOS LOWER ON PAGE */}
      <section className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={videos}
            eyebrow="Property Stories In Motion"
            heading="Movement should reveal something worth noticing."
            description="Animation can add life, atmosphere and another campaign moment while keeping the original property media at the centre of the story."
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Find the moments.
                <br />
                Build the arc.
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
      <section className="bg-[#f7f5f1] py-16 md:py-20">
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
            href="/packages/the-full-story"
            className="group block rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft md:p-10"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Ready For The Complete Campaign?
            </p>

            <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-display text-4xl font-semibold">
                  The Full Story
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-black/50">
                  Twelve enhanced images, three to four animations up to 10
                  seconds each, a finished vertical Reel and a complete listing
                  lifecycle story.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 font-semibold text-rust">
                Explore The Full Story
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
            Story Deep Dive · $1,595 + GST
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Give every strong moment
            <br />
            its place in the story.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Twelve enhanced images, three animations up to 10 seconds each and
            a five part story that moves through the property with purpose.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start Story Deep Dive
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}