import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works | Real Estate Media House",
  description:
    "See how Real Estate Media House turns existing property photography, renders and footage into enhanced images, animation, narrative and finished campaign content.",
  alternates: {
    canonical: `${SITE_URL}/how-it-works`,
  },
  openGraph: {
    title: "How It Works | Real Estate Media House",
    description:
      "Send the property media you already have. We enhance selected images, create animated scenes and build the story around them.",
    url: `${SITE_URL}/how-it-works`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/residential/residential-before-after/residential-home-after.png`,
        alt: "Existing property photography transformed into additional visual marketing content",
      },
    ],
  },
};

const videos = [
  {
    id: "residential",
    title: "Residential Property Animation",
    url: "https://www.youtube.com/shorts/5NP5Ay_3SBY",
    category: "Residential",
    orientation: "portrait" as const,
  },
  {
    id: "commercial",
    title: "Commercial Property Animation",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "childcare",
    title: "Childcare Development Animation",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Childcare",
    orientation: "portrait" as const,
  },
];

const enhancedExamples = [
  {
    number: "01",
    title: "People",
    text: "Add believable people and everyday activity that help someone imagine how the property could feel in use.",
  },
  {
    number: "02",
    title: "Furniture",
    text: "Add or refine furniture while keeping the architecture, proportions and room layout accurate.",
  },
  {
    number: "03",
    title: "Appliances & Décor",
    text: "Introduce selected appliances, styling and decorative details without changing the property itself.",
  },
  {
    number: "04",
    title: "Cars & Activity",
    text: "Add appropriate vehicles, people and movement to exterior scenes where they support the story.",
  },
  {
    number: "05",
    title: "Landscape",
    text: "Refine lawns, planting and surrounding atmosphere while keeping the built property true.",
  },
  {
    number: "06",
    title: "Lighting & Atmosphere",
    text: "Use daylight, warmth, dusk and evening atmosphere to create a stronger emotional moment.",
  },
];

const packageDurations = [
  {
    name: "Story Starter",
    href: "/packages/story-starter",
    images: "5 enhanced images",
    animation: "1 animated scene",
    duration: "Up to 10 seconds",
  },
  {
    name: "Story Builder",
    href: "/packages/story-builder",
    images: "8 enhanced images",
    animation: "2 animated scenes",
    duration: "Up to 20 seconds total",
  },
  {
    name: "Story Deep Dive",
    href: "/packages/story-deep-dive",
    images: "12 enhanced images",
    animation: "3 animated scenes",
    duration: "Up to 30 seconds total",
  },
  {
    name: "The Full Story",
    href: "/packages/the-full-story",
    images: "12 enhanced images",
    animation: "3 to 4 animated scenes",
    duration: "Up to 40 seconds total + finished Reel",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              How It Works
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Start with the media
              <span className="block text-rust">you already have.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
              Send us the property photography, renders or footage already
              created for the campaign. We keep the property itself true, then
              build new visual and emotional stories around the strongest
              moments.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-white/45">
              That can mean enhanced property images, animated scenes up to 10
              seconds each, captions, narrative sequencing and finished video.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                Show us your media
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/explore"
                className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Explore examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Five Steps
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Keep the process simple.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Existing Property Media",
                  text: "Supply the photography, renders or footage already created for the property.",
                },
                {
                  number: "02",
                  title: "Tell Us What The Campaign Needs",
                  text: "More attention, stronger lifestyle, furniture, people, atmosphere, commercial use, development storytelling or movement.",
                },
                {
                  number: "03",
                  title: "Choose The Strongest Assets",
                  text: "We identify the images and scenes with the strongest visual and emotional potential.",
                },
                {
                  number: "04",
                  title: "Build The Visual Story",
                  text: "Rob enhances the selected images and creates the animated scenes included in your package.",
                },
                {
                  number: "05",
                  title: "Build The Human Story",
                  text: "Robyn develops the hooks, captions and sequencing that give the finished visual content something meaningful to say.",
                },
              ].map((step) => (
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

                    <p className="mt-3 leading-7 text-black/50">{step.text}</p>
                  </div>
                </article>
              ))}
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
                Keep the architecture true.
                <span className="block text-rust">
                  Build the life around it.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                We keep the architecture, layout and defining property elements
                accurate to the supplied image.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                Then, depending on the scene and campaign story, we can add or
                refine people, furniture, appliances, décor, cars,
                landscaping, lighting and atmosphere.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                The goal is not to redesign the property. It is to make the
                existing image feel more complete, more human and more useful
                to the campaign.
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

      {/* BEFORE AFTER */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/staging/living-room-before.jpeg"
                after="/property-images/website/staging/living-room-after.jpeg"
                beforeAlt="Original residential living room property photograph"
                afterAlt="Residential living room enhanced with furniture and styling"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                First, Bring The Image To Life
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The original photograph
                <span className="block text-rust">still does its job.</span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                We are not replacing the property shoot. We are creating
                additional visual directions from the media already produced.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The original image can remain part of the listing while the
                enhanced version gives the campaign another way to communicate
                scale, purpose, atmosphere or lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CAN BE CREATED */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What Can The Media Become?
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Choose the transformation based on the campaign problem.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Enhanced Images",
                text: "Keep the property accurate while adding people, furniture, appliances, décor, cars, landscape, lighting or atmosphere.",
              },
              {
                number: "02",
                title: "Lifestyle Moments",
                text: "Add believable people and activity that help someone picture what everyday life there could feel like.",
              },
              {
                number: "03",
                title: "Furniture & Styling",
                text: "Help people understand an empty room with furniture, appliances and décor while keeping the room itself true.",
              },
              {
                number: "04",
                title: "Commercial Visualisation",
                text: "Show a vacant property as a relevant possible use for the operator or business being targeted.",
              },
              {
                number: "05",
                title: "Property Animation",
                text: "Turn selected still images into moving property scenes of up to 10 seconds each.",
              },
              {
                number: "06",
                title: "Finished Reel",
                text: "Combine selected enhanced and animated scenes into one finished vertical property story.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-[1.75rem] border border-black/10 bg-white p-7"
              >
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  {item.number}
                </p>

                <h3 className="mt-6 font-display text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-black/50">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ANIMATION */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Then, Make It Move
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Every animated scene can run
                <span className="block text-rust">up to 10 seconds.</span>
              </h2>

              <p className="mt-5 leading-8 text-white/50">
                The package determines how many individual animated scenes are
                included.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {packageDurations.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-7 transition hover:border-rust hover:bg-white/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold">
                        {item.name}
                      </h3>

                      <p className="mt-4 text-sm text-white/40">
                        {item.images}
                      </p>

                      <p className="mt-2 text-sm text-white/50">
                        {item.animation}
                      </p>

                      <p className="mt-3 font-semibold text-brassBright">
                        {item.duration}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      className="shrink-0 text-brassBright transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO PROOF */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={videos}
            eyebrow="Property Stories In Motion"
            heading="Movement gives the existing media another job."
            description="Selected images can become animated scenes up to 10 seconds each, adding activity, atmosphere and another reason for the campaign to appear in the feed."
          />
        </div>
      </section>

      {/* STORY */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Then, Tell The Story
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A visual can catch attention.
                <span className="block text-rust">
                  The story gives it meaning.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                A breakfast bar is a property feature. Sunday morning coffee
                while the house is still quiet is a moment.
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-black/50">
                Robyn develops the hook, caption angle and sequencing included
                in the package so each enhanced image or animated scene has a
                clear reason to be part of the campaign.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                Features explain the property. Moments make it personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Different Property Types
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Same process.
                <br />
                Different story.
              </h2>
            </div>

            <div className="space-y-2">
              {[
                {
                  title: "Residential",
                  text: "Lifestyle, furniture, appliances, décor, people, cars, atmosphere and property animation.",
                  href: "/residential-property-animation",
                },
                {
                  title: "Commercial",
                  text: "Industry specific visualisation, people, vehicles, equipment, business activity and commercial animation.",
                  href: "/commercial-property-visualisation",
                },
                {
                  title: "Childcare",
                  text: "Development visualisation, furniture, play environments, landscaping, people, activity and animation.",
                  href: "/childcare-development-visualisation",
                },
              ].map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group grid gap-4 border-b border-black/10 py-6 sm:grid-cols-[55px_0.7fr_1.3fr_auto] sm:items-center"
                >
                  <p className="font-mono text-[9px] text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-black/45">{item.text}</p>

                  <ArrowRight
                    size={18}
                    className="text-rust transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Choose The Depth
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                From one moving moment
                <span className="block text-rust">
                  to a complete property story.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/55">
                The five package options let you choose how many enhanced
                images, animated scenes and narrative moments the campaign
                needs.
              </p>

              <div className="mt-7 space-y-3">
                {packageDurations.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex flex-col gap-4 rounded-[1.5rem] border border-black/10 bg-white p-6 transition hover:border-rust hover:shadow-soft sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="font-display text-2xl font-semibold">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-black/45">
                        {item.images} · {item.animation}
                      </p>

                      <p className="mt-2 font-semibold text-rust">
                        {item.duration}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      className="shrink-0 text-rust transition group-hover:translate-x-1"
                    />
                  </Link>
                ))}

                <Link
                  href="/packages/story-custom"
                  className="group flex flex-col gap-4 rounded-[1.5rem] border border-black/10 bg-ink p-6 text-white transition hover:border-rust sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      Story Custom
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/45">
                      Custom enhanced images and custom number of animated
                      scenes, typically up to 10 seconds each
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="shrink-0 text-brassBright transition group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <Link
                href="/packages"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
              >
                Compare all five packages
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CLEAR SCOPE */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-12">
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

      {/* PAYMENT */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-10">
            <div className="grid gap-7 md:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                  Payment
                </p>

                <p className="mt-5 font-display text-5xl font-semibold">
                  50 / 50
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold">
                  50% deposit to begin. 50% before use.
                </h2>

                <p className="mt-4 leading-7 text-black/50">
                  The remaining 50% is due before the finished content may be
                  published, posted, distributed, advertised or otherwise used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Start With What You Already Have
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Show us the media.
            <br />
            We’ll find what it can become.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Start with the photography, renders or footage already created for
            the property. We’ll identify the strongest visual moments, enhance
            them, make selected scenes move and build the story around them.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss your property media
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}