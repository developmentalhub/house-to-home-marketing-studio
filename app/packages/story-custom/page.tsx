import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Story Custom | Property Development Story Package",
  description:
    "Story Custom is a tailored property storytelling package for developments, multi stage projects and campaigns that need a custom mix of visuals, animation and narrative.",
  alternates: {
    canonical: `${SITE_URL}/packages/story-custom`,
  },
  openGraph: {
    title: "Story Custom | Real Estate Media House",
    description:
      "Custom enhanced visuals, animation and narrative built around the stage and story of a property development.",
    url: `${SITE_URL}/packages/story-custom`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/childcare/before-after-childcare/childcare-centre-new-build-after.png`,
        alt: "Childcare development transformed into completed property marketing content",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Story Custom",
  description:
    "A custom property storytelling package for developments and complex projects using supplied photography, renders and project imagery.",
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

const robDelivers = [
  "Custom number of enhanced visuals",
  "Custom property animation",
  "Development transformation",
  "Interior and exterior visualisation",
  "Finished video where required",
];

const robynDelivers = [
  "A custom narrative arc matched to the project stage",
  "Pre construction possibility and anticipation",
  "Build in progress momentum",
  "Completed lifestyle storytelling",
  "Narrative direction for multi stage campaigns",
];

const fit = [
  {
    title: "The project does not fit a standard package.",
    text: "There may be multiple stages, spaces, audiences or deliverables that need to work together.",
  },
  {
    title: "The finished property does not exist yet.",
    text: "The campaign still needs people to understand what is coming and why it matters.",
  },
  {
    title: "The story changes as the project progresses.",
    text: "Pre construction, build progress and completion each need a different message and visual emphasis.",
  },
];

const stages = [
  {
    number: "01",
    title: "Possibility",
    text: "Before construction, show what the project is becoming and give people something tangible to imagine.",
  },
  {
    number: "02",
    title: "Momentum",
    text: "During the build, turn progress into a story rather than waiting silently for completion.",
  },
  {
    number: "03",
    title: "Lifestyle",
    text: "As completion approaches, shift the story from construction to the people, activity and life the finished property can support.",
  },
];

const videos = [
  {
    id: "childcare-one",
    title: "Childcare Development",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Childcare",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-two",
    title: "Childcare Property Animation",
    url: "https://www.youtube.com/shorts/quxLhvqpAEQ",
    category: "Childcare",
    orientation: "portrait" as const,
  },
  {
    id: "commercial",
    title: "Commercial Property Animation",
    url: "https://www.youtube.com/shorts/2DXsq8mXemI",
    category: "Commercial",
    orientation: "portrait" as const,
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

      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-14 md:py-18">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Story Custom
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                The property is still becoming.
                <span className="block text-rust">
                  The story can start now.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                A custom visual and narrative campaign for developments,
                multi stage projects and properties that do not fit a standard
                package.
              </p>

              <p className="mt-6 font-display text-4xl font-semibold">
                Custom scope
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Discuss your project
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

            <YouTubeVideoCarousel
              items={videos}
              eyebrow="Custom Development Story"
              heading="Do not wait for completion to start building interest."
              description="Existing photography, renders and development imagery can become a campaign that evolves with the project."
            />
          </div>
        </div>
      </section>

      {/* ROB + ROBYN */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Rob Delivers
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold">
                The project visuals.
              </h2>

              <div className="mt-7 space-y-4">
                {robDelivers.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={16} className="mt-1 shrink-0 text-rust" />

                    <p className="leading-7 text-black/60">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-rust bg-ink p-8 text-white">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Robyn Delivers
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold">
                The project narrative.
              </h2>

              <div className="mt-7 space-y-4">
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
      </section>

      {/* PROOF */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                beforeAlt="Property before childcare development visualisation"
                afterAlt="Property transformed into a completed childcare centre visual"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Show What Is Coming
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Make the future property easier to feel now.
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/55">
                The visual shows what the project could become. The narrative
                gives people a reason to care before the finished property is
                available to photograph.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT STAGES */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Story Changes
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Different stage.
                <span className="block text-rust">Different story.</span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-black/50">
                Story Custom can change direction as the project moves from idea
                to build to completed environment.
              </p>
            </div>

            <div className="space-y-4">
              {stages.map((stage) => (
                <article
                  key={stage.number}
                  className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-[#f7f5f1] p-7 sm:grid-cols-[70px_0.65fr_1.35fr]"
                >
                  <p className="font-mono text-xs font-semibold text-rust">
                    {stage.number}
                  </p>

                  <h3 className="font-display text-2xl font-semibold">
                    {stage.title}
                  </h3>

                  <p className="leading-7 text-black/50">{stage.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FIT */}
      <section className="bg-ink py-14 text-white md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Is This You?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The project does not fit neatly into a box.
              </h2>
            </div>

            <div className="space-y-4">
              {fit.map((item, index) => (
                <article
                  key={item.title}
                  className="grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:grid-cols-[55px_0.85fr_1.15fr]"
                >
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-white/50">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CAN BE BUILT */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Custom Scope
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Build around what the project actually needs.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Enhanced development visuals",
              "Interior visualisation",
              "Exterior visualisation",
              "Property animation",
              "Build progression",
              "People and activity",
              "Landscape and atmosphere",
              "Finished vertical video",
              "Multi stage narrative",
            ].map((item, index) => (
              <article
                key={item}
                className="rounded-[1.75rem] border border-black/10 bg-[#f7f5f1] p-7"
              >
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-5 font-display text-2xl font-semibold">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the project story.
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  number: "01",
                  title: "Send The Existing Project Media",
                  text: "Supply the photography, renders and development imagery already available.",
                },
                {
                  number: "02",
                  title: "Tell Us What Stage You Are At",
                  text: "Pre construction, build progress and completion each need a different visual and narrative approach.",
                },
                {
                  number: "03",
                  title: "Build The Custom Scope",
                  text: "Rob defines the visual and animation requirements. Robyn defines the narrative direction.",
                },
                {
                  number: "04",
                  title: "Create The Campaign",
                  text: "The finished visuals and story work together alongside the original project material.",
                },
              ].map((step) => (
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

                    <p className="mt-3 leading-7 text-black/50">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIMITS */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 md:p-10">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Visual Marketing Concept
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
              The story communicates possibility. It does not replace technical
              or planning advice.
            </h2>

            <p className="mt-5 leading-8 text-black/50">
              Planning approval, building compliance, fitout feasibility,
              operational suitability and technical requirements should be
              assessed separately by the appropriate professionals.
            </p>
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

      {/* RELATED */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/packages/the-full-story"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Standard Listing?
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                The Full Story
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                For a complete listing campaign with twelve enhanced images,
                multiple animated scenes, a finished Reel and lifecycle story.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View The Full Story
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/childcare-development-visualisation"
              className="group rounded-[2rem] border border-rust bg-ink p-8 text-white transition hover:bg-rust"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                See Development Proof
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Childcare Development
              </h2>

              <p className="mt-4 leading-7 text-white/50">
                See how existing project imagery can be transformed into a
                clearer completed development story.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-brassBright">
                Explore childcare visualisation
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
            Story Custom · Custom Scope
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            The project does not have to be finished
            <br />
            for the story to begin.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the project imagery you already have and tell us what people
            need to understand, imagine or feel next.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss your project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}