import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel, {
  type YouTubeVideoCarouselItem,
} from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Market a Childcare Centre Before It Is Built",
  description:
    "Learn how childcare developers and operators can market a future childcare centre before construction is complete using existing site photography, renders, visualisation and animation.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-market-a-childcare-centre-before-it-is-built`,
  },
  openGraph: {
    title: "How to Market a Childcare Centre Before It Is Built",
    description:
      "A practical guide to marketing future childcare centres using visualisation, before and after imagery and property animation.",
    url: `${SITE_URL}/blog/how-to-market-a-childcare-centre-before-it-is-built`,
    type: "article",
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
    id: "childcare-build-1",
    title: "Existing Property To Future Childcare Centre",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Development Transformation",
    description:
      "Use animation to help people understand how the current property could become the future childcare centre.",
    orientation: "portrait",
  },
  {
    id: "childcare-build-2",
    title: "Childcare Development Transformation",
    url: "https://www.youtube.com/shorts/fDUWkWFLUrM",
    category: "Development Transformation",
    description:
      "Create a moving development story instead of relying on a single final image.",
    orientation: "portrait",
  },
  {
    id: "childcare-room",
    title: "Future Childcare Interior",
    url: "https://www.youtube.com/shorts/quxLhvqpAEQ",
    category: "Interior Visualisation",
    description:
      "Show how a future childcare room could feel before the centre is complete.",
    orientation: "portrait",
  },
  {
    id: "childcare-yard",
    title: "Future Outdoor Environment",
    url: "https://www.youtube.com/shorts/GnoYNXeTZaA",
    category: "Outdoor Visualisation",
    description:
      "Use movement and atmosphere to show the future outdoor childcare environment.",
    orientation: "portrait",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Market a Childcare Centre Before It Is Built",
  description:
    "A practical guide to marketing a future childcare centre before construction is complete using visualisation and animation.",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-market-a-childcare-centre-before-it-is-built`,
  image: [
    `${SITE_URL}/images/childcare/before-after-childcare/childcare-centre-new-build-after.png`,
    `${SITE_URL}/images/childcare/before-after-childcare/corner-site-childcare-after.png`,
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

export default function HowToMarketAChildcareCentreBeforeItIsBuiltPage() {
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
                Childcare Marketing Guide
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                How to market a childcare centre
                <span className="block text-rust">
                  before it is built.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                A future childcare centre may still look like an old house, an
                empty site or an active construction project. That does not mean
                the marketing has to wait.
              </p>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                  after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                  beforeAlt="Existing residential property before childcare centre development"
                  afterAlt="Future childcare centre visualisation created from the existing property"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the current property with the future childcare centre
              </p>
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
                The Challenge
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                You need to market the future while people can still only see
                the present.
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                Childcare centres often need to build awareness, communicate
                the development and prepare for future enrolments before the
                finished centre can be photographed.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                If the site still looks like a residential property, vacant land
                or a construction zone, the audience has to imagine too much.
                Visualisation helps bridge that gap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Quick Answer
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              How do you market a childcare centre before it is built?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Start with the property media you already have. Use existing site
              photography, development imagery or renders to show the future
              centre, then create additional visuals for interiors, outdoor
              areas and animated development sequences.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              The goal is to help developers, operators, families and
              stakeholders understand what the completed centre will look and
              feel like before finished photography is possible.
            </p>
          </div>
        </div>
      </section>

      {/* STEP 1 */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                01 · Show The Future Centre
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Turn the existing site into a clear picture of what comes next.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                If the current site does not resemble a childcare centre, the
                first job is to make the future outcome understandable.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                A before and after transformation is one of the simplest ways
                to communicate that change because the audience can immediately
                see the relationship between the existing property and the
                proposed centre.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/corner-site-childcare-before.png"
                after="/images/childcare/before-after-childcare/corner-site-childcare-after.png"
                beforeAlt="Existing corner property before childcare centre development"
                afterAlt="Future childcare centre visualisation on a corner development site"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2 */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                02 · Show More Than The Facade
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Help people understand the entire childcare environment.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Interior Rooms",
                  text: "Show the future learning environments, furniture, atmosphere and use of the spaces.",
                },
                {
                  number: "02",
                  title: "Foyer & Arrival",
                  text: "Give families and stakeholders a stronger sense of how the centre will welcome people.",
                },
                {
                  number: "03",
                  title: "Outdoor Play Areas",
                  text: "Show landscaping, play spaces and how the external environment could feel.",
                },
                {
                  number: "04",
                  title: "Whole Site",
                  text: "Connect the facade, interiors and outdoor areas into one coherent visual story.",
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

                  <p className="mt-4 text-sm leading-7 text-black/50">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={videos}
            eyebrow="03 · Turn Still Images Into Motion"
            heading="A development story is stronger when people can see the change happen."
            description="Use animation to show the transition from the existing property to the future centre, then extend the same visual language into interiors and outdoor spaces."
          />
        </div>
      </section>

      {/* STEP 4 */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/Rearyard1-Before.png"
                after="/images/childcare/before-after-childcare/Rearyard1-After.png"
                beforeAlt="Existing rear yard before childcare outdoor area visualisation"
                afterAlt="Future childcare outdoor play area with landscaping and completed environment"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                04 · Show The Experience
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Families are not only choosing a building.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                The outdoor environment, learning spaces and atmosphere can all
                contribute to how the future centre is understood.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Showing these areas before opening day gives the project more
                visual depth than relying on one exterior image alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE CONTENT CAN HELP */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Where The Visuals Can Help
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Create a library of future centre content before finished
                photography exists.
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {[
                "Development presentations",
                "Pre opening campaigns",
                "Future enrolment marketing",
                "Project websites",
                "Stakeholder communication",
                "Centre launch material",
                "Property and development marketing",
                "Short form video content",
              ].map((item, index) => (
                <div
                  key={item}
                  className="min-h-[145px] border-b border-r border-white/10 p-6"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brassBright">
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

      {/* FAQ STYLE SECTION */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Common Questions
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">
              Childcare development marketing before construction is complete.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
            {[
              {
                question:
                  "Do we need finished photography to start marketing the centre?",
                answer:
                  "No. Existing site photography, property imagery or supplied project material can be used as the starting point for future centre visuals.",
              },
              {
                question:
                  "Can an existing house be shown as a future childcare centre?",
                answer:
                  "Yes. The current property can be used to create a before and after visual that helps communicate the proposed centre.",
              },
              {
                question:
                  "Can you show childcare interiors before the centre opens?",
                answer:
                  "Existing project imagery can be developed into more complete interior scenes with furniture, activity and atmosphere where appropriate.",
              },
              {
                question:
                  "Can the same images also become video content?",
                answer:
                  "Yes. Selected visuals can become short property animations and development transformations so the same project media can support both still and moving content.",
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
      <section className="border-t border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/childcare-development-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Childcare Development Visualisation
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                See how future childcare centres can be visualised.
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore the service, before and after examples and development
                animation.
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
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Childcare Case Study
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                See an existing property become a future childcare centre.
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                View the project as before and after imagery, future spaces and
                moving development content.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View the case study
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
            Childcare Development Marketing
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Do not wait for opening day
            <br />
            to start showing the centre.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the property photography, site imagery or renders you
            already have and we&apos;ll help identify what can become useful
            visual content.
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