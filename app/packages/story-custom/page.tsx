import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Story Custom | Custom Property Storytelling",
  description:
    "Custom enhanced property images, animations with scenes typically up to 10 seconds each and tailored narrative for residential, commercial, childcare and development projects.",
  alternates: {
    canonical: `${SITE_URL}/packages/story-custom`,
  },
  openGraph: {
    title: "Story Custom | Real Estate Media House",
    description:
      "Custom visual and narrative storytelling for property projects that need more flexibility than a standard package.",
    url: `${SITE_URL}/packages/story-custom`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/childcare/before-after-childcare/childcare-centre-new-build-after.png`,
        alt: "Childcare property transformed into a completed development marketing visual",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Story Custom",
  description:
    "Custom enhanced property images, property animation with scenes typically up to 10 seconds each and a tailored narrative arc.",
  provider: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${SITE_URL}/packages/story-custom`,
};

const visualDeliverables = [
  "Custom number of enhanced property images",
  "Custom number of property animations",
  "Animated scenes typically up to 10 seconds each",
  "Development transformation where required",
  "Finished vertical or campaign video where required",
];

const storyDeliverables = [
  "Custom narrative arc matched to the property and project stage",
  "Story hooks, captions and sequencing matched to the campaign",
  "Narrative direction that can move from possibility to progress to completed lifestyle",
];

const enhancedExamples = [
  {
    number: "01",
    title: "People",
    text: "Add believable people and activity that help residential, commercial or childcare spaces feel occupied and purposeful.",
  },
  {
    number: "02",
    title: "Furniture",
    text: "Add or refine furniture while keeping the architecture, proportions and layout accurate to the supplied image.",
  },
  {
    number: "03",
    title: "Appliances & Décor",
    text: "Introduce appliances, styling and decorative details that make the space feel complete without redesigning the property itself.",
  },
  {
    number: "04",
    title: "Cars & Activity",
    text: "Add appropriate vehicles, people and movement to help exterior and commercial scenes communicate how the property may feel in use.",
  },
  {
    number: "05",
    title: "Landscape",
    text: "Refine lawns, planting, outdoor play areas and surrounding atmosphere while keeping the built form accurate.",
  },
  {
    number: "06",
    title: "Lighting & Atmosphere",
    text: "Adjust warmth, daylight, dusk, interior glow and atmosphere to support the intended campaign moment.",
  },
];

const projectTypes = [
  {
    number: "01",
    title: "Residential",
    text: "Custom storytelling for larger residential campaigns, premium listings or properties that need more than the standard package structure.",
  },
  {
    number: "02",
    title: "Commercial",
    text: "Help future tenants or buyers see more than an empty space by showing believable business use, activity and atmosphere.",
  },
  {
    number: "03",
    title: "Childcare",
    text: "Communicate the future centre as an active environment with arrival, outdoor play, interior activity and community rather than simply a building.",
  },
  {
    number: "04",
    title: "Development",
    text: "Build a visual and narrative progression from the supplied existing media through to the intended completed environment.",
  },
];

const videos = [
  {
    id: "childcare-story",
    title: "Childcare Property Story",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Childcare",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-story",
    title: "Commercial Property Story",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "residential-story",
    title: "Residential Property Story",
    url: "https://www.youtube.com/shorts/UMWARuYjMSU",
    category: "Residential",
    orientation: "portrait" as const,
  },
];

const process = [
  {
    number: "01",
    title: "Send The Existing Media",
    text: "Supply the photography, renders, plans or footage already created for the project.",
  },
  {
    number: "02",
    title: "Define The Story",
    text: "We identify what the audience needs to understand, imagine or feel and shape the scope around that goal.",
  },
  {
    number: "03",
    title: "Build The Visual Direction",
    text: "Rob develops the enhanced images, animated scenes and finished video elements required for the project.",
  },
  {
    number: "04",
    title: "Build The Narrative",
    text: "Robyn develops the hooks, captions, sequencing and narrative direction that connect the individual assets.",
  },
];

export default function StoryCustomPage() {
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
              Story Custom · Custom Scope
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              When the project does not fit a box,
              <span className="block text-rust">
                neither should the story.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
              Custom enhanced property images, animation with scenes typically
              up to 10 seconds each and a narrative built around the project,
              audience and campaign stage.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                Discuss Your Project
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
                The custom visual story.
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
                The custom narrative.
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
                  Build the world around it.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                We keep the supplied architecture, layout and defining property
                elements accurate.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                Depending on the project, we can then add or refine people,
                furniture, appliances, décor, cars, landscaping, lighting,
                atmosphere and other lifestyle elements.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                The goal is not to invent a different property. It is to make
                the existing property or supplied design easier to understand,
                imagine and emotionally connect with.
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
                before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                beforeAlt="Existing property before childcare development visualisation"
                afterAlt="Property shown as a completed childcare development marketing visual"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Show The Future
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Do not ask the audience
                <span className="block text-rust">
                  to imagine everything themselves.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                Story Custom can help communicate a future environment, a new
                use, a different atmosphere or a more complete lifestyle around
                the media you already have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT TYPES */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Built Around The Project
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Different properties need
                <span className="block text-rust">
                  different kinds of imagination.
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {projectTypes.map((item) => (
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
              Custom Animation
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Animated scenes are typically
              <span className="block text-rust">
                up to 10 seconds each.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              The number of animated scenes is determined by the custom scope,
              but individual scenes are generally built at up to 10 seconds
              each.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              That allows each scene to work as its own campaign asset while
              also giving us the flexibility to combine selected moments into a
              longer finished video where the project needs one.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEOS LOWER ON PAGE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={videos}
            eyebrow="Custom Stories In Motion"
            heading="The movement changes with the property. The purpose stays the same."
            description="Whether the project is residential, commercial, childcare or development, animation should help the audience understand how the property could feel in use."
          />
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
                Start with the project.
                <br />
                Build the scope around it.
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

      {/* SCOPE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Clear Scope
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                We create the story.
                <span className="block text-rust">
                  You decide where it lives.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                We can create the enhanced visuals, animation, finished video,
                narrative, captions and sequencing required by the agreed
                project scope.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                We do not manage your accounts, schedule your posts or run your
                day to day social presence. That remains with you, your agency
                or your marketing team.
              </p>
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

      {/* DISCLAIMER */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-12">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
              Development Visualisation
            </p>

            <p className="mt-4 max-w-4xl leading-7 text-black/45">
              Development visualisation is created for marketing communication.
              It is not proof of planning approval, feasibility, building
              compliance or operational suitability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Story Custom
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Tell us what you are working with.
            <br />
            We’ll build the story around it.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Custom enhanced imagery, animation and narrative built around the
            property, project stage and audience.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}