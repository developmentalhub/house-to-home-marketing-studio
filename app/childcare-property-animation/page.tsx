import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ChildcareDevelopmentStory from "@/components/ChildcareDevelopmentStory";
import SwipeGallery from "@/components/SwipeGallery";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Childcare Property Animation",
  description:
    "Turn existing childcare property photography and development imagery into animated marketing content, active childcare scenes and moving project visuals.",
  alternates: {
    canonical: `${SITE_URL}/childcare-property-animation`,
  },
  openGraph: {
    title: "Childcare Property Animation",
    description:
      "Transform existing childcare development imagery into moving property content that helps people understand the future centre faster.",
    url: `${SITE_URL}/childcare-property-animation`,
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
  name: "Childcare Property Animation",
  description:
    "Childcare property animation and development visualisation created from supplied property photography, renders and project imagery.",
  provider: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${SITE_URL}/childcare-property-animation`,
};

const heroVideos = [
  {
    id: "childcare-interior-one",
    title: "Childcare Interior Animation",
    url: "https://www.youtube.com/shorts/quxLhvqpAEQ",
    category: "Interior",
    description:
      "An existing childcare interior turned into active moving campaign content.",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-interior-two",
    title: "Active Childcare Room",
    url: "https://www.youtube.com/shorts/VNgAj19pqJc",
    category: "Interior",
    description:
      "A still childcare scene developed into a more active and engaging environment.",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-foyer",
    title: "Childcare Foyer Animation",
    url: "https://www.youtube.com/shorts/4MduhCc7tOU",
    category: "Foyer",
    description:
      "A childcare entry scene turned into moving property content.",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-yard",
    title: "Outdoor Yard Animation",
    url: "https://www.youtube.com/shorts/GnoYNXeTZaA",
    category: "Outdoor",
    description:
      "Outdoor childcare imagery brought to life with activity and movement.",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-build",
    title: "Childcare Build Transformation",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Development",
    description:
      "A development story showing progression toward the finished childcare centre.",
    orientation: "portrait" as const,
  },
];

const childcareImages = [
  {
    id: "facade-one",
    title: "Completed Childcare Facade",
    category: "Facade",
    description:
      "A childcare development visual used to communicate the completed property.",
    image: "/images/childcare/childcare-facade/build centre.png",
  },
  {
    id: "facade-two",
    title: "Childcare Development Exterior",
    category: "Facade",
    description:
      "Another exterior view showing the future childcare property outcome.",
    image: "/images/childcare/childcare-facade/build centre3.png",
  },
  {
    id: "corner-elc",
    title: "Corner Site Early Learning Centre",
    category: "Development",
    description:
      "A corner site concept showing the future childcare centre in context.",
    image: "/images/childcare/childcare-facade/corner site ELC.png",
  },
];

export default function ChildcarePropertyAnimationPage() {
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
        <div className="container-shell py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Childcare Property Animation
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Show the childcare centre
                <span className="block text-rust">
                  before people can walk through it.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60 md:text-xl">
                Turn existing childcare property photography, development
                imagery and renders into moving content that helps people
                understand the future centre faster.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#examples"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Watch examples
                  <ArrowRight size={17} />
                </a>

                <Link
                  href="/enquire"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Show us your project media
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                <div>
                  <p className="font-display text-3xl font-semibold">01</p>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Existing image
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl font-semibold">02</p>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Show the future
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl font-semibold">03</p>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Make it move
                  </p>
                </div>
              </div>
            </div>

            <div id="examples">
              <YouTubeVideoCarousel
                items={heroVideos}
                eyebrow="Choose A Video"
                heading="See the childcare property in motion."
                description="Tap through the examples first. Show the proof before asking someone to read the detail."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAST VALUE */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Development Marketing Problem
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The centre may not be finished.
                <br />
                The marketing still has to start.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                Childcare developments often need to communicate the future
                property before opening day. Moving visual content can help make
                rooms, outdoor areas, entrances and the completed centre easier
                to picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                beforeAlt="Property before childcare development visualisation"
                afterAlt="Property transformed into a completed childcare centre"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                First Show The Outcome
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Make the future centre visible before adding motion.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                A development image can first become a clearer completed
                childcare visual. That finished scene can then become the
                starting point for moving content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT STORY */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-9 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Development Story
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Let people explore the project instead of only reading about it.
            </h2>
          </div>

          <ChildcareDevelopmentStory />
        </div>
      </section>

      {/* VISUAL GALLERY */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-9 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              More Childcare Visuals
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Give the project more than one visual moment.
            </h2>
          </div>

          <SwipeGallery items={childcareImages} />
        </div>
      </section>

      {/* INTERIOR PROOF */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/room1-before.png"
                after="/images/childcare/before-after-childcare/room1-after.png"
                beforeAlt="Childcare interior before visual transformation"
                afterAlt="Childcare room shown as an active learning environment"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Interior Activity
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Empty rooms communicate space.
                <br />
                Active rooms communicate experience.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                People, furniture and activity can make an interior easier for
                families, operators and project stakeholders to understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTDOOR PROOF */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Outdoor Environment
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Show more than the building.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Outdoor areas can be just as important to the childcare story as
                the facade and interiors. Landscaping, activity and scale help
                communicate how the completed environment may feel.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/Rearyard1-Before.png"
                after="/images/childcare/before-after-childcare/Rearyard1-After.png"
                beforeAlt="Childcare rear yard before visual transformation"
                afterAlt="Childcare rear yard transformed into an active outdoor environment"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SOLVING */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                What Does The Campaign Need?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Build the content around the childcare marketing problem.
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  problem: "The centre is not built yet",
                  solution:
                    "Show the future property and completed development story.",
                },
                {
                  problem: "The rooms feel empty",
                  solution:
                    "Add people, furniture and activity so the space becomes easier to understand.",
                },
                {
                  problem: "Families need to picture the environment",
                  solution:
                    "Show active interior and outdoor childcare scenes.",
                },
                {
                  problem: "The campaign needs movement",
                  solution:
                    "Turn selected childcare visuals into short animated property content.",
                },
                {
                  problem: "Opening day is still ahead",
                  solution:
                    "Create campaign material from existing project media before the finished centre can be photographed.",
                },
              ].map((item, index) => (
                <article
                  key={item.problem}
                  className="grid gap-4 border-b border-white/10 py-6 sm:grid-cols-[55px_0.8fr_1.2fr]"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brassBright">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-xl font-semibold">
                    {item.problem}
                  </h3>

                  <p className="leading-7 text-white/45">{item.solution}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the childcare project media you already have.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Existing Media",
                  text: "Supply the project photography, renders or development imagery already created.",
                },
                {
                  number: "02",
                  title: "Choose What Needs To Be Understood",
                  text: "That might be the completed facade, a room, outdoor area, build progression or the overall future centre.",
                },
                {
                  number: "03",
                  title: "Build The Finished Visual",
                  text: "Add the relevant environment, people, furniture, landscaping and activity.",
                },
                {
                  number: "04",
                  title: "Make It Move",
                  text: "Turn selected scenes into short childcare property animation.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7 sm:grid-cols-[80px_1fr]"
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

      {/* NEXT PATH */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/childcare-development-visualisation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Visualisation
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Childcare Development Visualisation
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See how existing project imagery can communicate the completed
                childcare centre.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore visualisation
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
                Childcare Development Transformation
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore the project story, before and after imagery and moving
                childcare content.
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
              href="/blog/how-to-market-a-childcare-centre-before-opening-day"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Marketing Guide
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Market a Childcare Centre Before Opening Day
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See how existing development media can support the campaign
                before the centre opens.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Read guide
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
            Childcare Property Animation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Have the project media?
            <br />
            Show people what comes next.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the childcare development imagery you already have and tell
            us what the campaign needs people to understand.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss childcare animation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}