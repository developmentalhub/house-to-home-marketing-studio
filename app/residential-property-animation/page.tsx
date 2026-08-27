import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import SwipeGallery from "@/components/SwipeGallery";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Residential Property Animation | Real Estate Media House",
  description:
    "Turn existing real estate photography into enhanced residential property images, animated scenes and property storytelling without organising another shoot.",
  alternates: {
    canonical: `${SITE_URL}/residential-property-animation`,
  },
  openGraph: {
    title: "Residential Property Animation | Real Estate Media House",
    description:
      "Transform existing residential property photography into enhanced visuals, moving scenes and emotionally engaging campaign content.",
    url: `${SITE_URL}/residential-property-animation`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/residential/residential-before-after/residential-home-after.png`,
        alt: "Residential property photography transformed into additional campaign content",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Property Animation",
  description:
    "Residential property animation, enhanced imagery and storytelling created from supplied real estate photography, renders and footage.",
  provider: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${SITE_URL}/residential-property-animation`,
};

const heroVideos = [
  {
    id: "kitchen-animation",
    title: "Kitchen Animation",
    url: "https://www.youtube.com/shorts/5NP5Ay_3SBY",
    category: "Residential",
    description:
      "An existing kitchen image turned into moving residential campaign content.",
    orientation: "portrait" as const,
  },
  {
    id: "facade-coming-soon-sign",
    title: "Coming Soon Facade",
    url: "https://www.youtube.com/shorts/7sLtp4cucnU",
    category: "Facade",
    description:
      "A still facade image transformed into another campaign moment.",
    orientation: "portrait" as const,
  },
  {
    id: "facade-balloons",
    title: "Facade Campaign Moment",
    url: "https://www.youtube.com/shorts/npBU8mNYw0o",
    category: "Facade",
    description:
      "Another way to give familiar property imagery a different reason to appear in the campaign.",
    orientation: "portrait" as const,
  },
  {
    id: "facade-day-night",
    title: "Facade Day To Night",
    url: "https://www.youtube.com/shorts/UMWARuYjMSU",
    category: "Day To Night",
    description:
      "Turn an existing exterior into another campaign moment with lighting and atmosphere.",
    orientation: "portrait" as const,
  },
];

const transformationImages = [
  {
    id: "bedroom-lifestyle",
    title: "Bedroom Lifestyle",
    category: "Lifestyle",
    description:
      "Residential photography made more lived in with atmosphere and human context.",
    image:
      "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
  },
  {
    id: "bathroom-lifestyle",
    title: "Bathroom Lifestyle",
    category: "Lifestyle",
    description:
      "An existing bathroom image developed into a more emotional campaign moment.",
    image:
      "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
  },
  {
    id: "living-staging",
    title: "Living Room Styling",
    category: "Furniture & Styling",
    description:
      "An empty living area shown with furniture to improve scale, purpose and emotional context.",
    image:
      "/property-images/website/staging/living-room-after.jpeg",
  },
  {
    id: "foyer-lifestyle",
    title: "Foyer Transformation",
    category: "Residential",
    description:
      "Existing residential photography developed into another polished campaign visual.",
    image: "/property-images/website/lifestyle/foyer-after.jpeg",
  },
];

const packageDurations = [
  {
    name: "Story Starter",
    href: "/packages/story-starter",
    images: "5 enhanced images",
    motion: "1 property animation",
    duration: "Up to 10 seconds",
  },
  {
    name: "Story Builder",
    href: "/packages/story-builder",
    images: "8 enhanced images",
    motion: "2 property animations",
    duration: "Up to 10 seconds each · up to 20 seconds total",
  },
  {
    name: "Story Deep Dive",
    href: "/packages/story-deep-dive",
    images: "12 enhanced images",
    motion: "3 property animations",
    duration: "Up to 10 seconds each · up to 30 seconds total",
  },
  {
    name: "The Full Story",
    href: "/packages/the-full-story",
    images: "12 enhanced images",
    motion: "3 to 4 property animations",
    duration:
      "Up to 10 seconds each · up to 40 seconds total · plus a 20 to 30 second Reel",
  },
];

export default function ResidentialPropertyAnimationPage() {
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
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Residential Property Animation
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Your listing is competing
                <span className="block text-rust">with everything.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/65 md:text-xl">
                Turn the residential photography you already have into enhanced
                images and moving campaign moments that give people another
                reason to stop.
              </p>

              <p className="mt-5 max-w-xl leading-8 text-white/45">
                Each property animation can run up to 10 seconds. The strongest
                scenes combine accurate property detail with lifestyle,
                atmosphere and a clear story.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#examples"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Watch the examples
                  <ArrowRight size={17} />
                </a>

                <Link
                  href="/enquire"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Show us your photos
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                <div>
                  <p className="font-display text-3xl font-semibold">01</p>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Keep it true
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl font-semibold">02</p>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Bring it to life
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
                eyebrow="Residential Stories In Motion"
                heading="See what a still property image can become."
                description="Each example begins with existing property media and becomes another visual moment for the campaign."
              />
            </div>
          </div>
        </div>
      </section>

      {/* AGENT PROBLEM */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Agent Problem
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                You already paid for good photography.
                <span className="block text-rust">
                  The campaign still needs fresh moments.
                </span>
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                The listing photos might be excellent. They can still become
                familiar after people have seen them repeatedly across portals,
                social feeds and campaign updates.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                We use the existing photography as the foundation for new
                images, moving scenes and story angles instead of asking you to
                organise another property shoot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED IMAGE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/lifestyle/bedroom-before.jpeg"
                after="/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg"
                beforeAlt="Original residential bedroom property photograph"
                afterAlt="Residential bedroom enhanced with lifestyle and atmosphere"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                First, Bring The Image To Life
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Keep the property true.
                <span className="block text-rust">
                  Build the life around it.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                We keep the architecture, layout, room proportions and defining
                property elements accurate to the supplied image.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Depending on the scene, we can add or refine people, furniture,
                appliances, décor, cars, landscaping, lighting, atmosphere and
                everyday activity.
              </p>

              <p className="mt-6 font-display text-2xl leading-9">
                The goal is not to redesign the property. It is to make the
                image more human, more complete and more useful to the
                campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Then, Find The Story
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A photo shows the room.
                <span className="block text-rust">
                  The story shows the life.
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  feature: "Breakfast bar",
                  story:
                    "Sunday morning coffee while the house is quiet and nobody is rushing anywhere.",
                },
                {
                  feature: "Outdoor entertaining",
                  story:
                    "Lunch that turns into dinner because nobody really wants to leave.",
                },
                {
                  feature: "Light filled room",
                  story:
                    "The patch of afternoon sun that becomes the favourite place to sit.",
                },
                {
                  feature: "Spare bedroom",
                  story:
                    "A nursery now, a study later, a room that changes as life changes.",
                },
              ].map((item, index) => (
                <article
                  key={item.feature}
                  className="grid gap-4 border-b border-black/10 py-6 sm:grid-cols-[55px_0.8fr_1.2fr]"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div>
                    <p className="text-sm text-black/30">
                      The property has
                    </p>

                    <h3 className="mt-1 font-display text-xl font-semibold">
                      {item.feature}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm text-black/30">
                      The story becomes
                    </p>

                    <p className="mt-1 font-display text-2xl leading-8 text-black/65">
                      {item.story}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL GALLERY */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-9 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              More From The Same Photography
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              One shoot can become several different campaign moments.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/50">
              Enhanced stills can stand on their own or become the starting
              point for animation.
            </p>
          </div>

          <SwipeGallery items={transformationImages} />
        </div>
      </section>

      {/* WHAT CAN BE CREATED */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What One Shoot Can Become
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                More campaign value from the photography you already have.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Lifestyle Scene",
                  text: "Add people, activity and atmosphere to create a more emotional campaign image.",
                },
                {
                  number: "02",
                  title: "Furniture & Styling",
                  text: "Add furniture, appliances and décor while keeping the room architecture and proportions accurate.",
                },
                {
                  number: "03",
                  title: "Day To Night",
                  text: "Turn one exterior into another visual moment with different lighting, atmosphere and mood.",
                },
                {
                  number: "04",
                  title: "Property Animation",
                  text: "Turn a selected enhanced image into a moving scene of up to 10 seconds.",
                },
                {
                  number: "05",
                  title: "Campaign Moments",
                  text: "Create new visual ideas around a facade or hero room for different stages of the listing campaign.",
                },
                {
                  number: "06",
                  title: "Finished Property Reel",
                  text: "Combine selected scenes into a finished vertical property story in The Full Story package.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="min-h-[210px] border-b border-r border-black/10 p-7"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-rust">
                    {item.number}
                  </p>

                  <h3 className="mt-7 font-display text-2xl font-semibold">
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

      {/* MOTION */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Then, Make It Move
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Every animated scene can run
                <span className="block text-rust">
                  up to 10 seconds.
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  problem: "The listing has already been seen",
                  answer:
                    "Turn a familiar image into a moving moment with a new visual and emotional angle.",
                },
                {
                  problem: "The room feels static",
                  answer:
                    "Introduce believable movement, activity, atmosphere or environmental detail.",
                },
                {
                  problem: "The facade needs another campaign moment",
                  answer:
                    "Use lighting, atmosphere, signage or environmental movement to create another reason to stop.",
                },
                {
                  problem: "The campaign needs a finished video",
                  answer:
                    "Use The Full Story to combine selected enhanced and animated moments into a 20 to 30 second vertical Reel.",
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

                  <p className="leading-7 text-white/45">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Residential Story Packages
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Choose how many moving moments the campaign needs.
              </h2>
            </div>

            <div className="space-y-4">
              {packageDurations.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group grid gap-4 rounded-[1.75rem] border border-black/10 bg-white p-7 transition hover:border-rust hover:shadow-soft sm:grid-cols-[1fr_1fr_auto] sm:items-center"
                >
                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm text-black/40">
                      {item.images}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-black/60">
                      {item.motion}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-rust">
                      {item.duration}
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-rust transition group-hover:translate-x-1"
                  />
                </Link>
              ))}

              <Link
                href="/packages/story-custom"
                className="group grid gap-4 rounded-[1.75rem] border border-black/10 bg-ink p-7 text-white transition hover:border-rust sm:grid-cols-[1fr_1fr_auto] sm:items-center"
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    Story Custom
                  </h3>

                  <p className="mt-2 text-sm text-white/40">
                    Custom enhanced visuals
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-white/60">
                    Custom number of animations
                  </p>

                  <p className="mt-2 text-sm leading-6 text-brassBright">
                    Animated scenes typically up to 10 seconds each
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="text-brassBright transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the photos.
                <span className="block text-rust">
                  Find the moments worth extending.
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Existing Photography",
                  text: "Supply the residential property photography, renders or footage already created for the campaign.",
                },
                {
                  number: "02",
                  title: "Choose The Strongest Moments",
                  text: "We identify hero rooms, facades and lifestyle opportunities with the strongest visual and emotional potential.",
                },
                {
                  number: "03",
                  title: "Enhance The Images",
                  text: "Rob keeps the architecture and defining property elements accurate while adding or refining people, furniture, appliances, décor, cars, landscaping, lighting and atmosphere.",
                },
                {
                  number: "04",
                  title: "Make Selected Scenes Move",
                  text: "The animations included in your package can run up to 10 seconds each.",
                },
                {
                  number: "05",
                  title: "Build The Narrative",
                  text: "Robyn develops the hooks, captions and sequencing that connect the visual moments to the campaign story.",
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

      {/* CASE STUDY */}
      <section className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More Residential Proof
              </p>

              <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-5xl">
                See a residential property transformation across multiple rooms
                and campaign moments.
              </h2>
            </div>

            <Link
              href="/projects/residential-property-transformation"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
            >
              View case study
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="border-y border-black/10 bg-white py-16 md:py-20">
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

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Residential Property Animation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Already have the photos?
            <br />
            Give them another story.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the residential property photography you already have.
            We’ll find the images worth enhancing, the scenes worth moving and
            the moments worth building a story around.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Show us your property photos
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}