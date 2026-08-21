import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel, {
  type YouTubeVideoCarouselItem,
} from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Market a Childcare Centre Before Opening Day",
  description:
    "Learn how to market a childcare centre before opening day using existing property photography, childcare development visualisation, future centre imagery and animation.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-market-a-childcare-centre-before-opening-day`,
  },
  openGraph: {
    title: "How to Market a Childcare Centre Before Opening Day",
    description:
      "A practical visual marketing guide for childcare developers and operators preparing a centre for launch.",
    url: `${SITE_URL}/blog/how-to-market-a-childcare-centre-before-opening-day`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/childcare/before-after-childcare/childcare-centre-new-build-after.png`,
        alt: "Future childcare centre visualisation used for pre opening marketing",
      },
    ],
  },
};

const videos: YouTubeVideoCarouselItem[] = [
  {
    id: "future-centre-build",
    title: "Future Childcare Centre Transformation",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Pre Opening Development Content",
    description:
      "Show the change from the existing property into the future childcare centre before opening day.",
    orientation: "portrait",
  },
  {
    id: "future-interior",
    title: "Future Childcare Interior",
    url: "https://www.youtube.com/shorts/quxLhvqpAEQ",
    category: "Future Interior",
    description:
      "Help families and stakeholders understand how the internal childcare environment could feel once complete.",
    orientation: "portrait",
  },
  {
    id: "future-foyer",
    title: "Future Childcare Foyer",
    url: "https://www.youtube.com/shorts/4MduhCc7tOU",
    category: "Arrival Experience",
    description:
      "Create a stronger visual sense of the future arrival and foyer experience.",
    orientation: "portrait",
  },
  {
    id: "future-yard",
    title: "Future Outdoor Play Environment",
    url: "https://www.youtube.com/shorts/GnoYNXeTZaA",
    category: "Outdoor Environment",
    description:
      "Show landscaping, outdoor play areas and future activity before finished photography is available.",
    orientation: "portrait",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Market a Childcare Centre Before Opening Day",
  description:
    "A practical guide to using future childcare centre visuals and animation before the centre opens.",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-market-a-childcare-centre-before-opening-day`,
  image: [
    `${SITE_URL}/images/childcare/before-after-childcare/childcare-centre-new-build-after.png`,
    `${SITE_URL}/images/childcare/before-after-childcare/room1-after.png`,
    `${SITE_URL}/images/childcare/before-after-childcare/Rearyard1-After.png`,
  ],
  author: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
};

export default function HowToMarketAChildcareCentreBeforeOpeningDayPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Childcare Pre Opening Marketing
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                How to market a childcare centre
                <span className="block text-rust">
                  before opening day.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                Opening day should not be the first time families, operators or
                stakeholders can clearly see the centre.
              </p>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                  after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                  beforeAlt="Existing property before future childcare centre pre opening visualisation"
                  afterAlt="Future childcare centre visualisation for pre opening marketing"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the existing property and future centre
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Short Version
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Build the visual story before the doors open.
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                Pre opening childcare marketing works better when people can
                already understand the future centre, not just read about it.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Existing property photography, development imagery and renders
                can be transformed into future centre visuals, internal spaces,
                outdoor environments and moving content well before finished
                photography becomes possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL LIBRARY */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={videos}
            eyebrow="Pre Opening Visual Content"
            heading="Give people several ways to see the future centre."
            description="A small library of development, interior and outdoor content gives the project more depth than relying on one exterior image."
          />
        </div>
      </section>

      {/* WHAT TO SHOW */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What To Show Before Opening
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Build confidence around the whole centre.
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <article>
              <div className="overflow-hidden rounded-[1.75rem] bg-[#f7f5f1] shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/room1-before.png"
                  after="/images/childcare/before-after-childcare/room1-after.png"
                  beforeAlt="Childcare room before future interior transformation"
                  afterAlt="Future childcare interior prepared for pre opening marketing"
                />
              </div>

              <p className="mt-5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Interior Environment
              </p>

              <h3 className="mt-2 font-display text-2xl font-semibold">
                Show what families will experience inside.
              </h3>

              <p className="mt-3 leading-7 text-black/50">
                Internal rooms can help communicate more than the building
                itself. They show the environment where children will actually
                spend time.
              </p>
            </article>

            <article>
              <div className="overflow-hidden rounded-[1.75rem] bg-[#f7f5f1] shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/Rearyard1-Before.png"
                  after="/images/childcare/before-after-childcare/Rearyard1-After.png"
                  beforeAlt="Existing childcare rear yard before outdoor visualisation"
                  afterAlt="Future childcare outdoor environment for pre opening marketing"
                />
              </div>

              <p className="mt-5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Outdoor Environment
              </p>

              <h3 className="mt-2 font-display text-2xl font-semibold">
                Show the outdoor experience too.
              </h3>

              <p className="mt-3 leading-7 text-black/50">
                Landscaping and play environments can form a major part of the
                future centre story and should not be left until finished
                photography is available.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CAMPAIGN STAGES */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Pre Opening Content Sequence
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Do not try to explain everything in one post.
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Introduce The Future Centre",
                  text: "Start with the strongest exterior transformation so people understand what is coming.",
                },
                {
                  number: "02",
                  title: "Reveal The Interiors",
                  text: "Introduce individual rooms, foyer areas and future learning environments.",
                },
                {
                  number: "03",
                  title: "Show Outdoor Spaces",
                  text: "Give the outdoor play environment and landscaping their own visual moments.",
                },
                {
                  number: "04",
                  title: "Use Motion",
                  text: "Turn selected visuals into short animations so the same project assets keep producing fresh content.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="min-h-[230px] border-b border-r border-white/10 p-7"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-brassBright">
                    {item.number}
                  </p>

                  <h3 className="mt-9 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS HELPS */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Why Start Early?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The marketing can start building familiarity before the centre
                is ready for photography.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                "Build project awareness",
                "Show future centre quality",
                "Give families visual context",
                "Support stakeholder communication",
                "Create pre opening campaign assets",
                "Build a library before launch",
              ].map((item, index) => (
                <div
                  key={item}
                  className="min-h-[145px] border-b border-r border-black/10 p-6"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-rust">
                    {String(index + 1).padStart(2, "0")}
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

      {/* FAQ */}
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Common Questions
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">
              Pre opening childcare marketing.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
            {[
              {
                question:
                  "Can we market a childcare centre before construction is finished?",
                answer:
                  "Yes. Future centre imagery can help communicate the proposed development before finished centre photography is available.",
              },
              {
                question:
                  "What if the site still looks like a house or construction site?",
                answer:
                  "The existing property or site can be used as the starting point for a future centre visualisation and before and after comparison.",
              },
              {
                question:
                  "Can we show future childcare interiors before opening?",
                answer:
                  "Existing project imagery can be developed into more complete internal scenes that help communicate furniture, atmosphere and future use.",
              },
              {
                question:
                  "Can pre opening visuals also be animated?",
                answer:
                  "Yes. Selected future centre visuals can become short animations and development transformations for additional campaign content.",
              },
            ].map((item) => (
              <article
                key={item.question}
                className="grid gap-4 py-8 md:grid-cols-[0.8fr_1.2fr]"
              >
                <h3 className="font-display text-2xl font-semibold">
                  {item.question}
                </h3>

                <p className="max-w-2xl leading-8 text-black/50">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/childcare-development-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Service
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Childcare Development Visualisation
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See how existing site and project imagery can become future
                childcare centre visuals.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore the service
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/projects/childcare-centre-development-transformation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Case Study
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Existing Property To Future Childcare Centre
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore the full transformation through still images and
                animated project content.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View case study
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/blog/how-to-market-a-childcare-centre-before-it-is-built"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Guide
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                How To Market A Childcare Centre Before It Is Built
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Build the broader visual story while construction is still in
                progress.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Read the guide
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
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Childcare Pre Opening Marketing
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Opening day is the finish line.
            <br />
            The visual campaign can start earlier.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the property photography, development imagery or renders
            you already have and we&apos;ll help identify what can be used
            before the centre opens.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss a childcare project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}