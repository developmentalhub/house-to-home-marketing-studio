import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel, {
  type YouTubeVideoCarouselItem,
} from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Childcare Development Visualisation",
  description:
    "Childcare development visualisation created from existing property photography, site imagery and renders. Show future childcare centres, interiors, outdoor areas and development transformations before construction is complete.",
  alternates: {
    canonical: `${SITE_URL}/childcare-development-visualisation`,
  },
  openGraph: {
    title: "Childcare Development Visualisation",
    description:
      "Show future childcare centres before construction is complete using existing property photography, site imagery and renders.",
    url: `${SITE_URL}/childcare-development-visualisation`,
    images: [
      {
        url: `${SITE_URL}/images/childcare/before-after-childcare/childcare-centre-new-build-after.png`,
        alt: "Future childcare centre visualisation created from an existing property image",
      },
    ],
  },
};

const videos: YouTubeVideoCarouselItem[] = [
  {
    id: "development-1",
    title: "Existing Property To Future Childcare Centre",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Development Transformation",
    description:
      "Show the existing property changing into the future childcare centre.",
    orientation: "portrait",
  },
  {
    id: "development-2",
    title: "Childcare Centre Build Transformation",
    url: "https://www.youtube.com/shorts/fDUWkWFLUrM",
    category: "Development Transformation",
    description:
      "Turn the future development into a moving visual story rather than a single static image.",
    orientation: "portrait",
  },
  {
    id: "development-3",
    title: "Future Childcare Centre Animation",
    url: "https://www.youtube.com/shorts/kdFOHfqTHLw",
    category: "Development Transformation",
    description:
      "Help stakeholders understand the proposed centre through animated project imagery.",
    orientation: "portrait",
  },
  {
    id: "outdoor-1",
    title: "Future Childcare Outdoor Environment",
    url: "https://www.youtube.com/shorts/GnoYNXeTZaA",
    category: "Outdoor Environment",
    description:
      "Show landscaping, play areas and the future outdoor environment in motion.",
    orientation: "portrait",
  },
  {
    id: "interior-1",
    title: "Future Childcare Interior",
    url: "https://www.youtube.com/shorts/quxLhvqpAEQ",
    category: "Interior Visualisation",
    description:
      "Bring a future childcare room to life with movement and atmosphere.",
    orientation: "portrait",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Childcare Development Visualisation",
  serviceType: "Childcare development visualisation",
  provider: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  url: `${SITE_URL}/childcare-development-visualisation`,
  description:
    "Visualisation and animation services that transform existing childcare property photography, renders and site imagery into future centre visuals and marketing content.",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
};

export default function ChildcareDevelopmentVisualisationPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Childcare Development Visualisation
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Show the future centre
                <span className="block text-rust">
                  while the old site is still there.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                Turn existing site photography, property images and project
                renders into visual content that helps people understand the
                childcare centre before construction is complete.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/projects/childcare-centre-development-transformation"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  View childcare case study
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/enquire"
                  className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Discuss a childcare project
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                  after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                  beforeAlt="Existing residential property before future childcare centre development visualisation"
                  afterAlt="Future childcare centre visualisation created from the existing residential property photograph"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the existing site and future centre
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What Is Childcare Development Visualisation?
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                A clearer way to communicate a childcare project before it is
                finished.
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                Childcare development visualisation uses existing property
                photography, site imagery or architectural material to show
                what the future childcare centre could look and feel like.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The visual can show the completed facade, landscaping,
                interiors, outdoor play areas and other parts of the centre
                while the current property or construction site is still in
                place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS HIGH ON PAGE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={videos}
            eyebrow="Childcare Visualisation In Motion"
            heading="See several ways the future centre can be brought to life."
            description="Choose from the video library to see development transformations, interiors and outdoor environments."
          />
        </div>
      </section>

      {/* BEFORE AFTER EXAMPLES */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Childcare Before & After
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Start with what is there now.
              <br />
              Show what could be there next.
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <article>
              <div className="overflow-hidden rounded-[1.75rem] bg-[#f7f5f1] shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                  after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                  beforeAlt="Existing house before childcare centre development"
                  afterAlt="Future childcare centre development visualisation"
                />
              </div>

              <p className="mt-5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Future Centre
              </p>

              <h3 className="mt-2 font-display text-2xl font-semibold">
                Existing property to childcare centre
              </h3>

              <p className="mt-3 leading-7 text-black/50">
                Show the proposed centre while the existing residential
                property is still on the site.
              </p>
            </article>

            <article>
              <div className="overflow-hidden rounded-[1.75rem] bg-[#f7f5f1] shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/corner-site-childcare-before.png"
                  after="/images/childcare/before-after-childcare/corner-site-childcare-after.png"
                  beforeAlt="Existing corner property before childcare development visualisation"
                  afterAlt="Future childcare centre visualisation on a corner site"
                />
              </div>

              <p className="mt-5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Corner Site
              </p>

              <h3 className="mt-2 font-display text-2xl font-semibold">
                Show the completed corner development
              </h3>

              <p className="mt-3 leading-7 text-black/50">
                Give stakeholders a clearer view of how the completed childcare
                centre could sit within the existing site.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WHO USES IT */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Who It Is For
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Built for people who need to communicate the project before
                opening day.
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Childcare Developers",
                  text: "Show future centres during development, planning and marketing stages.",
                },
                {
                  number: "02",
                  title: "Childcare Operators",
                  text: "Give families and stakeholders a clearer understanding of the future centre.",
                },
                {
                  number: "03",
                  title: "Property & Development Teams",
                  text: "Use the existing site imagery to communicate proposed project outcomes.",
                },
                {
                  number: "04",
                  title: "Pre Opening Campaigns",
                  text: "Create visual content before finished centre photography is possible.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="min-h-[220px] border-b border-r border-white/10 p-7"
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

      {/* WHAT CAN BE SHOWN */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What Can Be Visualised?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The whole centre can become part of the story.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                "Future centre facades",
                "Childcare interiors",
                "Outdoor play areas",
                "Landscaping",
                "Arrival and foyer areas",
                "Development transformations",
                "People and activity",
                "Animated project sequences",
              ].map((item, index) => (
                <div
                  key={item}
                  className="min-h-[140px] border-b border-r border-black/10 p-6"
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

      {/* OUTDOOR EXAMPLE */}
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/Rearyard1-Before.png"
                after="/images/childcare/before-after-childcare/Rearyard1-After.png"
                beforeAlt="Existing rear yard before childcare outdoor environment visualisation"
                afterAlt="Future childcare outdoor play area with landscaping and completed environment"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Outdoor Visualisation
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The project is more than the facade.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Outdoor play spaces, landscaping and the surrounding environment
                can help communicate how the completed centre will actually be
                experienced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CASE STUDY */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <Link
            href="/projects/childcare-centre-development-transformation"
            className="group block rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft md:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                  Childcare Case Study
                </p>
              </div>

              <div>
                <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                  See the full existing property to future childcare centre
                  transformation.
                </h2>

                <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                  View the case study
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Childcare Development Visualisation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Show the future centre
            <br />
            before opening day.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the site photography, renders or project imagery you
            already have and we&apos;ll help identify what can be transformed.
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