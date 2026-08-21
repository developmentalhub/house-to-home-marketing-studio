import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Development Campaign Package",
  description:
    "A custom property development media campaign using existing photography, renders and project imagery for childcare, commercial and other developments.",
  alternates: {
    canonical: `${SITE_URL}/packages/development-campaign`,
  },
  openGraph: {
    title: "Development Campaign Package",
    description:
      "Custom visual content for property developments that need more than a standard campaign package.",
    url: `${SITE_URL}/packages/development-campaign`,
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
  name: "Development Campaign",
  description:
    "A custom property development media campaign created from supplied photography, renders and project imagery.",
  provider: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${SITE_URL}/packages/development-campaign`,
};

const videos = [
  {
    id: "childcare-development",
    title: "Childcare Development Transformation",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Childcare Development",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-development",
    title: "Commercial Development Transformation",
    url: "https://www.youtube.com/shorts/2DXsq8mXemI",
    category: "Commercial Development",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-animation",
    title: "Childcare Property Animation",
    url: "https://www.youtube.com/shorts/quxLhvqpAEQ",
    category: "Childcare",
    orientation: "portrait" as const,
  },
];

const scopeItems = [
  "Custom number of enhanced visuals",
  "Custom animation requirements",
  "Development transformation options",
  "Interior and exterior visualisation",
  "People, activity and atmosphere",
  "Finished video options where required",
];

export default function DevelopmentCampaignPage() {
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
        <div className="container-shell py-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Development Campaign
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Show people
                <span className="block text-rust">
                  what the project is becoming.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                A custom campaign for developments that need more than a fixed
                number of images or animations.
              </p>

              <p className="mt-5 max-w-xl leading-7 text-white/40">
                Built around the project media you already have, including
                photography, renders and development imagery.
              </p>

              <div className="mt-8">
                <p className="font-display text-4xl font-semibold">
                  Custom scope
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Discuss your development
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/packages"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 font-semibold transition hover:bg-white hover:text-ink"
                >
                  Compare packages
                </Link>
              </div>
            </div>

            <YouTubeVideoCarousel
              items={videos}
              eyebrow="Development Proof"
              heading="Let the project explain itself visually."
              description="Use existing development media to show completed environments, activity and movement before the finished property can be photographed."
            />
          </div>
        </div>
      </section>

      {/* WHO IT SUITS */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Best For
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Projects that do not fit neatly into a standard property package.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Childcare developments being marketed before completion.",
                "Commercial developments that need future use or build progression shown.",
                "Projects with several interiors, exteriors or stages to communicate.",
                "Campaigns that need a custom combination of stills, animation and video.",
              ].map((item, index) => (
                <article
                  key={item}
                  className="rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-6"
                >
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="mt-4 leading-7 text-black/60">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                beforeAlt="Property before childcare development visualisation"
                afterAlt="Property transformed into a completed childcare centre"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Show The Outcome
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Make the future property easier to understand now.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Existing project imagery can become a clearer completed visual
                before the development is ready for finished photography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM SCOPE */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Custom Scope
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Build around what the project actually needs.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {scopeItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-6"
                >
                  <Check size={17} className="mt-1 shrink-0 text-rust" />
                  <p className="leading-7 text-black/60">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ink py-14 text-white md:py-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the project story.
              </h2>
            </div>

            <div className="space-y-2">
              {[
                {
                  number: "01",
                  title: "Send The Existing Project Media",
                  text: "Supply the photography, renders and development imagery already available.",
                },
                {
                  number: "02",
                  title: "Tell Us What Needs To Be Understood",
                  text: "That might be the completed facade, interiors, landscaping, activity, build progression or future use.",
                },
                {
                  number: "03",
                  title: "Build The Scope",
                  text: "Choose the amount of transformed imagery and motion required for the campaign.",
                },
                {
                  number: "04",
                  title: "Create The Campaign Assets",
                  text: "Use the finished visuals alongside the original project material.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="grid gap-4 border-b border-white/10 py-5 sm:grid-cols-[55px_1fr]"
                >
                  <p className="font-mono text-[9px] text-brassBright">
                    {step.number}
                  </p>

                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-white/45">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLEAR LIMITS */}
      <section className="bg-[#f7f5f1] py-14 md:py-16">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-10">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Visual Marketing Concept
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
              The visuals communicate possibility. They do not replace planning,
              design or technical advice.
            </h2>

            <p className="mt-5 leading-7 text-black/50">
              Planning approval, building compliance, fitout feasibility,
              operational suitability and technical requirements should be
              assessed separately by the appropriate professionals.
            </p>
          </div>
        </div>
      </section>

      {/* PAYMENT + RELATED */}
      <section className="border-t border-black/10 bg-white py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Payment
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                50% to begin. 50% before use.
              </h2>

              <p className="mt-5 leading-7 text-black/50">
                The remaining balance is due before the finished content may be
                published, posted, distributed, advertised or otherwise used.
              </p>
            </div>

            <Link
              href="/childcare-development-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                See A Development Example
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Childcare Development Visualisation
              </h2>

              <p className="mt-5 leading-7 text-black/50">
                See how project imagery can be used to communicate a future
                childcare centre before completion.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore development visualisation
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
      <section className="bg-rust px-6 py-18 text-white md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Development Campaign · Custom
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Show the project
            <br />
            before the project is finished.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the project media you already have and tell us what the
            campaign needs people to understand.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss your development
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}