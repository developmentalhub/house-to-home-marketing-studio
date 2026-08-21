import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ChildcareDevelopmentStory from "@/components/ChildcareDevelopmentStory";
import YouTubeVideoCarousel, {
  type YouTubeVideoCarouselItem,
} from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Childcare Centre Development Visualisation | Before & After Case Study",
  description:
    "See how existing property photography can be transformed into future childcare centre visuals, interiors, outdoor environments and animated development content.",
  alternates: {
    canonical: `${SITE_URL}/projects/childcare-centre-development-transformation`,
  },
  openGraph: {
    title:
      "Childcare Centre Development Visualisation | Before & After Case Study",
    description:
      "See an existing property transformed into future childcare centre imagery and animation.",
    url: `${SITE_URL}/projects/childcare-centre-development-transformation`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/childcare/before-after-childcare/childcare-centre-new-build-after.png`,
        alt: "Future childcare centre visualisation created from an existing property image",
      },
    ],
  },
};

const developmentVideos: YouTubeVideoCarouselItem[] = [
  {
    id: "childcare-build-1",
    title: "Existing Property To Future Childcare Centre",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Development Animation",
    description:
      "A moving transformation showing the existing property becoming a future childcare centre.",
    orientation: "portrait",
  },
  {
    id: "childcare-build-2",
    title: "Childcare Development Transformation",
    url: "https://www.youtube.com/shorts/fDUWkWFLUrM",
    category: "Development Animation",
    description:
      "Another visual approach to communicating the transition from the existing property to the proposed centre.",
    orientation: "portrait",
  },
  {
    id: "childcare-build-3",
    title: "Future Centre Build Story",
    url: "https://www.youtube.com/shorts/kdFOHfqTHLw",
    category: "Development Animation",
    description:
      "A short development sequence designed to make the future childcare project easier to understand.",
    orientation: "portrait",
  },
];

const interiorVideos: YouTubeVideoCarouselItem[] = [
  {
    id: "childcare-interior-1",
    title: "Childcare Interior Animation 01",
    url: "https://www.youtube.com/shorts/quxLhvqpAEQ",
    category: "Interior Animation",
    description:
      "Movement and atmosphere help communicate how the future childcare room could feel once complete.",
    orientation: "portrait",
  },
  {
    id: "childcare-interior-2",
    title: "Childcare Interior Animation 02",
    url: "https://www.youtube.com/shorts/VNgAj19pqJc",
    category: "Interior Animation",
    description:
      "A static project image becomes another piece of visual content for the future centre.",
    orientation: "portrait",
  },
  {
    id: "childcare-interior-3",
    title: "Childcare Interior Animation 03",
    url: "https://www.youtube.com/shorts/m3xlOPyhYe8",
    category: "Interior Animation",
    description:
      "The finished room is presented as an active environment rather than a single still image.",
    orientation: "portrait",
  },
  {
    id: "childcare-foyer-1",
    title: "Childcare Foyer Animation 01",
    url: "https://www.youtube.com/shorts/4MduhCc7tOU",
    category: "Foyer Animation",
    description:
      "The arrival area becomes a moving visual that helps communicate the future centre experience.",
    orientation: "portrait",
  },
  {
    id: "childcare-foyer-2",
    title: "Childcare Foyer Animation 02",
    url: "https://www.youtube.com/shorts/al5ui0K4D98",
    category: "Foyer Animation",
    description:
      "Another treatment of the foyer using the supplied childcare project imagery.",
    orientation: "portrait",
  },
];

const outdoorVideos: YouTubeVideoCarouselItem[] = [
  {
    id: "childcare-yard-1",
    title: "Childcare Outdoor Environment 01",
    url: "https://www.youtube.com/shorts/GnoYNXeTZaA",
    category: "Outdoor Animation",
    description:
      "Show the future outdoor play environment as a more active and complete space.",
    orientation: "portrait",
  },
  {
    id: "childcare-yard-2",
    title: "Childcare Outdoor Environment 02",
    url: "https://www.youtube.com/shorts/5WQoWJR4qjc",
    category: "Outdoor Animation",
    description:
      "Create another campaign visual from the same future childcare environment.",
    orientation: "portrait",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Childcare Centre Development Visualisation Before and After Case Study",
  description:
    "A visual case study showing how existing property imagery can become future childcare centre visuals and animation.",
  mainEntityOfPage: `${SITE_URL}/projects/childcare-centre-development-transformation`,
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

export default function ChildcareCentreDevelopmentTransformationPage() {
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
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Childcare Development Case Study
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                From existing property
                <span className="block text-rust">
                  to future childcare centre.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                A visual example of how existing property photography can be
                transformed into future childcare centre imagery, interiors,
                outdoor environments and animated development content.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#before-after"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  See the transformation
                  <ArrowRight size={18} />
                </a>

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
                  beforeAlt="Existing residential property before childcare centre development visualisation"
                  afterAlt="Future childcare centre visualisation created from the existing property photograph"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the existing property with the future centre
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS SHOWS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Childcare Development Visualisation
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Help people understand a centre that does not exist yet.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                Childcare developments are often being presented, marketed or
                discussed while the site still looks completely different from
                the finished centre.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Existing photography can become the starting point for a much
                clearer visual story. The finished centre, internal rooms,
                outdoor areas and development sequence can all be shown before
                the project reaches completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN BEFORE AFTER */}
      <section
        id="before-after"
        className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28"
      >
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Before & After
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Existing site to future centre.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              Drag directly across the image to compare the original property
              with the future childcare centre visual.
            </p>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <BeforeAfterSlider
              before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
              after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
              beforeAlt="Existing house before conversion into a future childcare centre visual"
              afterAlt="Completed childcare centre development visualisation based on the existing property"
            />
          </div>
        </div>
      </section>

      {/* DEVELOPMENT STORY */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              More Than One Image
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Build a visual story around the entire centre.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              The development can be shown across the facade, internal rooms
              and outdoor areas so people get a broader understanding of the
              finished environment.
            </p>
          </div>

          <ChildcareDevelopmentStory />
        </div>
      </section>

      {/* DEVELOPMENT ANIMATION */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={developmentVideos}
            eyebrow="Development Animation"
            heading="Then make the transformation move."
            description="Instead of showing only the existing property and final centre, animation can communicate the change as a visual sequence."
          />
        </div>
      </section>

      {/* CORNER SITE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Another Development Example
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Corner site childcare centre visualisation.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-black/55">
                The same approach can help communicate how another existing
                property could become a future early learning centre.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/corner-site-childcare-before.png"
                after="/images/childcare/before-after-childcare/corner-site-childcare-after.png"
                beforeAlt="Existing corner property before childcare centre development visualisation"
                afterAlt="Future childcare centre visualisation for the corner development site"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTERIORS */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={interiorVideos}
            eyebrow="Future Childcare Interiors"
            heading="Show how the rooms could feel once the centre is complete."
            description="Interior imagery can become more than a static render or photograph. Movement and atmosphere help communicate the future childcare environment more clearly."
          />
        </div>
      </section>

      {/* OUTDOOR BEFORE AFTER */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/Rearyard1-Before.png"
                after="/images/childcare/before-after-childcare/Rearyard1-After.png"
                beforeAlt="Existing rear yard before childcare outdoor play area visualisation"
                afterAlt="Future childcare outdoor play area with landscaping and completed environment"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Outdoor Environment
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Show more than the building.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-black/55">
                Outdoor environments can be an important part of how a future
                childcare centre is understood. Landscaping, play areas and
                activity can all form part of the visual story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTDOOR VIDEO */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={outdoorVideos}
            eyebrow="Outdoor Animation"
            heading="Bring the future outdoor environment into motion."
            description="The completed outdoor visual can also become moving campaign content rather than remaining a single static image."
          />
        </div>
      </section>

      {/* WHAT CAN BE CREATED */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                From Existing Project Media
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                One project can produce a much broader visual campaign.
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Future Centre Visuals",
                  description:
                    "Show the completed childcare centre while the existing property or site is still in place.",
                },
                {
                  number: "02",
                  title: "Interior Environments",
                  description:
                    "Present future rooms with furniture, atmosphere and a clearer sense of use.",
                },
                {
                  number: "03",
                  title: "Outdoor Areas",
                  description:
                    "Show landscaping, outdoor play spaces and the wider centre environment.",
                },
                {
                  number: "04",
                  title: "Development Animation",
                  description:
                    "Turn still project imagery into moving transformations and short campaign content.",
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
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/childcare-property-animation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Childcare Property Animation
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Explore more childcare animation examples.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-black/50">
                See development sequences, childcare interiors, foyer scenes
                and outdoor environments.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore childcare animation
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/image-library"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Interactive Image Library
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Drag through more childcare before and after examples.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-black/50">
                Compare the original project imagery directly with the finished
                visual transformations.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Open image library
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
            Childcare Development Visualisation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            The centre does not need to be finished
            <br />
            before you can start showing it.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the site photography, renders or development imagery you
            already have and we&apos;ll help identify what can be brought to
            life.
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