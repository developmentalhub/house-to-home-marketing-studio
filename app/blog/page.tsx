import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Building2,
  Hammer,
  Layers3,
  PencilRuler,
  Scan,
  Sofa,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Cabinet Making, Joinery & Design Insights | Real Estate Media House",

  description:
    "Practical insights for cabinet makers, joinery businesses, interior designers and builders covering client presentations, cabinetry visualisation, 3D design, interactive panoramas and communicating design concepts.",

  alternates: {
    canonical: `${SITE_URL}/blog`,
  },

  openGraph: {
    title:
      "Cabinet Making, Joinery & Design Insights",
    description:
      "Insights for cabinet makers, joinery businesses, interior designers and builders who want to present design concepts more professionally.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

const categories = [
  {
    icon: Hammer,
    title: "Cabinet Making & Joinery",
    description:
      "Practical ideas for presenting kitchens, bathrooms, laundries, robes and custom cabinetry to clients.",
  },
  {
    icon: PencilRuler,
    title: "From Sketch to Presentation",
    description:
      "How to turn hand-drawn concepts, measurements and ideas into professional client-facing presentations.",
  },
  {
    icon: Scan,
    title: "3D & Interactive Visualisation",
    description:
      "Using renders, interactive panoramas and visual presentations to help clients understand a proposed design.",
  },
  {
    icon: Sofa,
    title: "Interior Design",
    description:
      "Communicating finishes, cabinetry, spatial relationships and design intent clearly to clients.",
  },
  {
    icon: Building2,
    title: "Building & Renovation",
    description:
      "Helping clients understand cabinetry and interior decisions before construction or manufacture begins.",
  },
  {
    icon: Layers3,
    title: "Winning Higher-Value Projects",
    description:
      "Ways smaller cabinet making and joinery businesses can present their work at a more premium level.",
  },
];

const insights = [
  {
    category: "Cabinet Making",
    title:
      "How to Present a Kitchen Design to a Client Without Using SketchUp",
    description:
      "A simpler way for cabinet makers to turn sketches and dimensions into a professional client presentation.",
    href:
      "/blog/how-to-present-a-kitchen-design-without-sketchup",
  },
  {
    category: "Client Presentation",
    title:
      "Why a Hand-Drawn Cabinetry Sketch Is No Longer Always Enough",
    description:
      "What clients may need to see before committing to a higher-value kitchen or joinery project.",
    href:
      "/blog/why-a-hand-drawn-cabinetry-sketch-is-not-always-enough",
  },
  {
    category: "Interactive 360°",
    title:
      "How Interactive 360° Presentations Help Clients Understand a Kitchen Design",
    description:
      "Why being able to look around a proposed room can make design conversations easier.",
    href:
      "/blog/how-interactive-360-presentations-help-clients-understand-a-kitchen-design",
  },
  {
    category: "Joinery Business",
    title:
      "How Cabinet Makers Can Look More Professional Without Hiring an In-House 3D Designer",
    description:
      "Using a backstage presentation partner instead of building an internal rendering department.",
    href:
      "/blog/how-cabinet-makers-can-look-more-professional-without-hiring-an-in-house-3d-designer",
  },
  {
    category: "Interior Design",
    title:
      "How to Help Clients Visualise Cabinetry, Finishes and Materials Before They Commit",
    description:
      "Presenting cabinetry colours, benchtops and materials in context rather than as isolated samples.",
    href:
      "/blog/how-to-help-clients-visualise-cabinetry-finishes-and-materials",
  },
  {
    category: "Whole-House Joinery",
    title:
      "How to Present Whole-House Joinery as One Cohesive Client Experience",
    description:
      "Bring kitchens, laundries, bathrooms, robes and custom cabinetry into one connected presentation.",
    href:
      "/blog/how-to-present-whole-house-joinery-as-one-client-experience",
  },
  {
    category: "Higher-Value Projects",
    title:
      "How to Win Higher-End Cabinetry Projects When Your Competitor Has Better Renders",
    description:
      "Why presentation quality can influence how clients perceive professionalism and value.",
    href:
      "/blog/how-to-win-higher-end-cabinetry-projects-when-competitors-have-better-renders",
  },
  {
    category: "Design Process",
    title:
      "From Pencil Sketch to Interactive Kitchen Presentation",
    description:
      "What information a cabinet maker actually needs to supply to create a professional visual presentation.",
    href:
      "/blog/from-pencil-sketch-to-interactive-kitchen-presentation",
  },
  {
    category: "Client Meetings",
    title:
      "Using an iPad to Present Cabinetry Designs During Client Meetings",
    description:
      "A simple way to make cabinetry design meetings more visual without complicated presentation software.",
    href:
      "/blog/using-an-ipad-to-present-cabinetry-designs-during-client-meetings",
  },
];

const hubJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name:
    "Cabinet Making, Joinery & Design Insights",
  description:
    "Practical insights covering cabinet making, joinery, interior design, client presentation and interactive visualisation.",
  url: `${SITE_URL}/blog`,
  publisher: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
};

export default function BlogPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(hubJsonLd),
        }}
      />

      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Cabinet Making & Design Insights
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Better ways to show
              <span className="block text-rust">
                what you&apos;re going to build.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              Practical ideas for cabinet makers,
              joinery businesses, interior
              designers and builders who need
              clients to understand a design before
              it becomes a finished space.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#topics"
                className="rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Explore topics
              </a>

              <a
                href="#insights"
                className="rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Browse insights
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The communication gap
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                You can see the finished design.
              </h2>
            </div>

            <div className="max-w-4xl">
              <p className="text-xl leading-9 text-black/60">
                Experienced cabinet makers and
                designers can often look at a
                sketch, dimensions and finish
                selections and immediately
                understand how the finished space
                will come together.
              </p>

              <p className="mt-6 text-xl leading-9 text-black/60">
                The client may not have that same
                ability.
              </p>

              <p className="mt-7 font-display text-3xl leading-10">
                These insights are about closing
                that gap.
                <span className="text-rust">
                  {" "}
                  Helping clients see, understand
                  and feel more confident about a
                  design before it is manufactured.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section
        id="topics"
        className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28"
      >
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Insight topics
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Cabinetry, interiors and the way
              ideas are presented.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-black/10 bg-white p-7 md:p-8"
                >
                  <Icon
                    size={25}
                    className="text-rust"
                  />

                  <h3 className="mt-7 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/50">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section
        id="insights"
        className="bg-white py-20 md:py-28"
      >
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Insight library
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Practical questions from real
                cabinetry work.
              </h2>

              <p className="mt-6 leading-8 text-black/50">
                Insights covering cabinetry,
                joinery, interiors, visualisation
                and better ways to present ideas to
                clients.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {insights.map((insight) => (
                <Link
                  key={insight.href}
                  href={insight.href}
                  className="group flex h-full flex-col rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7 transition hover:border-rust hover:bg-white hover:shadow-soft md:p-8"
                >
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                    {insight.category}
                  </p>

                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight">
                    {insight.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-black/50">
                    {insight.description}
                  </p>

                  <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                    Read insight

                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Interactive presentation
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                A drawing explains the design.
                <span className="block text-rust">
                  A panorama lets the client
                  experience it.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/55">
                Interactive 360° visualisation is
                one way cabinet makers can help
                clients understand a proposed room
                without needing to become 3D
                software experts themselves.
              </p>

              <Link
                href="/#interactive-presentation"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brassBright"
              >
                See the interactive example
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Who these insights are for
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                People who design spaces without
                necessarily wanting to become
                rendering experts.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Cabinet makers",
                "Joinery businesses",
                "Kitchen designers",
                "Bathroom designers",
                "Interior designers",
                "Builders",
                "Renovation businesses",
                "Custom furniture makers",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/10 bg-white p-5 font-display text-xl font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What we explore
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                More than just rendering.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title:
                    "Client communication",
                  text:
                    "Helping customers understand layouts, finishes and cabinetry before they approve the job.",
                },
                {
                  title:
                    "Kitchen presentation",
                  text:
                    "Ways to present kitchens professionally without spending your week inside design software.",
                },
                {
                  title:
                    "Joinery visualisation",
                  text:
                    "Showing custom cabinetry, robes, laundries, offices and living-room joinery more clearly.",
                },
                {
                  title:
                    "Interior design",
                  text:
                    "Helping clients understand how cabinetry, materials and surrounding interiors work together.",
                },
                {
                  title:
                    "Building & renovation",
                  text:
                    "Communicating proposed interiors before manufacture or construction begins.",
                },
                {
                  title:
                    "Business presentation",
                  text:
                    "How better presentation can help smaller cabinet makers compete for premium work.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-black/10 bg-[#f7f5f1] p-7"
                >
                  <h3 className="font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/50">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Have a project now?
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Send us the sketch.
            <br />
            You present the vision.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Upload the drawings, measurements and
            project information you already have
            and we&apos;ll quote the visualisation
            and presentation.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Request a quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}