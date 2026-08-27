import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel, {
  type YouTubeVideoCarouselItem,
} from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Childcare Development Visualisation | Real Estate Media House",
  description:
    "Turn existing childcare site photography, property imagery and project renders into enhanced visuals, animation and storytelling that help communicate the future centre.",
  alternates: {
    canonical: `${SITE_URL}/childcare-development-visualisation`,
  },
  openGraph: {
    title: "Childcare Development Visualisation | Real Estate Media House",
    description:
      "Show the future childcare centre, interiors, outdoor environments and everyday activity using existing project media.",
    url: `${SITE_URL}/childcare-development-visualisation`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/childcare/before-after-childcare/childcare-centre-new-build-after.png`,
        alt: "Future childcare centre visualisation created from existing property imagery",
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
      "Turn future development imagery into a moving property story.",
    orientation: "portrait",
  },
  {
    id: "development-3",
    title: "Future Childcare Centre Animation",
    url: "https://www.youtube.com/shorts/kdFOHfqTHLw",
    category: "Development Transformation",
    description:
      "Help audiences understand the intended future centre through animated project imagery.",
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
      "Bring a future childcare room to life with people, activity and atmosphere.",
    orientation: "portrait",
  },
];

const packageDurations = [
  {
    name: "Story Starter",
    href: "/packages/story-starter",
    motion: "1 property animation",
    duration: "Up to 10 seconds",
  },
  {
    name: "Story Builder",
    href: "/packages/story-builder",
    motion: "2 property animations",
    duration: "Up to 10 seconds each · up to 20 seconds total",
  },
  {
    name: "Story Deep Dive",
    href: "/packages/story-deep-dive",
    motion: "3 property animations",
    duration: "Up to 10 seconds each · up to 30 seconds total",
  },
  {
    name: "The Full Story",
    href: "/packages/the-full-story",
    motion: "3 to 4 property animations",
    duration:
      "Up to 10 seconds each · up to 40 seconds total · plus a 20 to 30 second Reel",
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
    "Visualisation, enhanced property imagery, animation and storytelling created from supplied childcare property photography, renders and site imagery.",
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
                A future centre is more
                <span className="block text-rust">
                  than a future building.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
                Turn existing site photography, project imagery and renders
                into enhanced visuals that help people understand not only what
                the centre could look like, but how it could feel in use.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/45">
                Arrival in the morning. Children moving through the rooms.
                Outdoor play. Landscaping. Families arriving. A future centre
                beginning to feel part of a community.
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
                  beforeAlt="Existing property before future childcare centre development visualisation"
                  afterAlt="Future childcare centre visualisation created from existing property imagery"
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
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What Is Childcare Development Visualisation?
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                A way to make the future centre easier to understand before the
                finished centre can be photographed.
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                We work from the property photography, site imagery and project
                material you already have, then create marketing visuals around
                the intended future environment.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                That can include the facade, landscaping, interiors, outdoor
                play areas, people, furniture, activity, atmosphere and
                animated scenes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED IMAGES */}
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
                  Build the future life around it.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                We keep the architecture, layout, proportions and defining
                property elements accurate to the supplied media.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                Depending on the project and story, we can add or refine
                people, furniture, appliances, décor, vehicles, landscaping,
                lawns, planting, lighting, atmosphere and everyday activity.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                The goal is not to redesign the project. It is to make the
                intended centre feel more complete, more human and easier to
                communicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={videos}
            eyebrow="Childcare Visualisation In Motion"
            heading="First, show the future centre. Then, show life moving through it."
            description="Explore development transformations, interiors and outdoor environments. Individual animated scenes can run up to 10 seconds each."
          />
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Childcare Before & After
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Start with what is there now.
              <span className="block text-rust">
                Help people picture what comes next.
              </span>
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <article>
              <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                  after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                  beforeAlt="Existing property before childcare centre development"
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
                Communicate the intended future centre while the existing
                property is still on the site.
              </p>
            </article>

            <article>
              <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-soft">
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
                Help the audience understand how the intended centre could sit
                within the existing property context.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                The Story Beyond The Building
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The plans show the centre.
                <span className="block text-rust">
                  The story shows the day inside it.
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  feature: "Entry and arrival",
                  story:
                    "Morning drop off, families arriving and the centre beginning another day.",
                },
                {
                  feature: "Learning rooms",
                  story:
                    "Children moving through spaces designed for play, discovery and everyday activity.",
                },
                {
                  feature: "Outdoor areas",
                  story:
                    "Play moving outside, landscaping surrounding the activity and the whole centre feeling connected.",
                },
                {
                  feature: "Future building",
                  story:
                    "Not just a completed facade, but a place beginning to feel part of the local community.",
                },
              ].map((item, index) => (
                <article
                  key={item.feature}
                  className="grid gap-4 border-b border-white/10 py-6 sm:grid-cols-[55px_0.8fr_1.2fr]"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brassBright">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div>
                    <p className="text-sm text-white/30">The project has</p>

                    <h3 className="mt-1 font-display text-xl font-semibold">
                      {item.feature}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm text-white/30">
                      The story becomes
                    </p>

                    <p className="mt-1 font-display text-2xl leading-8 text-white/70">
                      {item.story}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Who It Is For
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                For teams that need to communicate the project before opening
                day.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Childcare Developers",
                  text: "Use existing project material to communicate the intended future centre through development and marketing stages.",
                },
                {
                  number: "02",
                  title: "Childcare Operators",
                  text: "Help future families and stakeholders understand the intended environment before finished photography exists.",
                },
                {
                  number: "03",
                  title: "Property & Development Teams",
                  text: "Turn supplied site imagery and project media into clearer marketing communication.",
                },
                {
                  number: "04",
                  title: "Pre Opening Campaigns",
                  text: "Create visual and moving campaign content before the completed centre can be photographed.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="min-h-[220px] border-b border-r border-black/10 p-7"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-rust">
                    {item.number}
                  </p>

                  <h3 className="mt-9 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/45">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CAN BE SHOWN */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What Can Be Shown?
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
                "Landscaping and planting",
                "Arrival and foyer areas",
                "Furniture and equipment",
                "People and activity",
                "Animated project scenes",
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

      {/* OUTDOOR */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/Rearyard1-Before.png"
                after="/images/childcare/before-after-childcare/Rearyard1-After.png"
                beforeAlt="Existing rear yard before childcare outdoor environment visualisation"
                afterAlt="Future childcare outdoor play environment with landscaping"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Outdoor Visualisation
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The future centre is more than its facade.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Outdoor play, planting, lawns, people and activity can help
                communicate how the intended centre could actually be
                experienced.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Those moments can then become part of the broader campaign
                story rather than leaving the audience with only an exterior
                building image.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATION LENGTH */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Childcare Animation
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Every animated scene can run
                <span className="block text-rust">up to 10 seconds.</span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-black/50">
                The package determines how many individual moving scenes are
                included.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {packageDurations.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group rounded-[1.75rem] border border-black/10 bg-white p-7 transition hover:border-rust hover:shadow-soft"
                >
                  <h3 className="font-display text-2xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="mt-4 text-sm text-black/45">{item.motion}</p>

                  <p className="mt-2 font-semibold leading-6 text-rust">
                    {item.duration}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-rust">
                    View package
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}

              <Link
                href="/packages/story-custom"
                className="group rounded-[1.75rem] border border-black/10 bg-ink p-7 text-white transition hover:border-rust sm:col-span-2"
              >
                <h3 className="font-display text-2xl font-semibold">
                  Story Custom
                </h3>

                <p className="mt-4 text-sm text-white/45">
                  Custom enhanced visuals, development transformation and custom
                  number of animations.
                </p>

                <p className="mt-2 font-semibold leading-6 text-brassBright">
                  Animated scenes typically up to 10 seconds each
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brassBright">
                  View Story Custom
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the project media.
                <span className="block text-rust">
                  Build the future story around it.
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Existing Project Media",
                  text: "Supply the site photography, property images, renders or footage already available for the childcare project.",
                },
                {
                  number: "02",
                  title: "Choose The Story",
                  text: "Identify what the audience needs to understand: the future facade, interiors, outdoor areas, activity or the broader completed centre.",
                },
                {
                  number: "03",
                  title: "Build The Enhanced Visuals",
                  text: "Rob works from the supplied media to develop the property imagery, landscaping, furniture, people, activity and atmosphere required for the story.",
                },
                {
                  number: "04",
                  title: "Make Selected Scenes Move",
                  text: "Animated scenes included in your package can run up to 10 seconds each.",
                },
                {
                  number: "05",
                  title: "Build The Narrative",
                  text: "Robyn develops the hooks, captions and sequencing that connect the project visuals into a clear emotional story.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7 sm:grid-cols-[80px_1fr] md:p-8"
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

      {/* LIMITS */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Keep The Marketing Clear
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Childcare visualisation communicates a future marketing story. It
              does not prove approval, feasibility or compliance.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Development visualisation is created for marketing communication
              from the project material supplied to us.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Planning approval, building compliance, feasibility, operational
              suitability and other technical or regulatory matters should be
              confirmed separately by the appropriate project professionals.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <Link
            href="/projects/childcare-centre-development-transformation"
            className="group block rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft md:p-12"
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

      {/* SCOPE */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Clear Scope
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              We create the story.
              <br />
              You decide where it lives.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              We create the enhanced visuals, animation, narrative, captions
              and sequencing included in your package.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              We do not manage your accounts, schedule your posts or run your
              day to day social presence. That stays with you, your agency or
              your marketing team.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Childcare Development Visualisation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Show the future centre.
            <br />
            Then show the life inside it.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the site photography, renders or project imagery you
            already have. We’ll find the strongest opportunities for enhanced
            visuals, movement and storytelling.
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