import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import SwipeGallery from "@/components/SwipeGallery";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Residential Property Animation",
  description:
    "Turn existing real estate photography into animated residential property content, lifestyle scenes and finished campaign video without another property shoot.",
  alternates: {
    canonical: `${SITE_URL}/residential-property-animation`,
  },
  openGraph: {
    title: "Residential Property Animation",
    description:
      "Transform existing residential property photography into moving campaign content, lifestyle visuals and property video.",
    url: `${SITE_URL}/residential-property-animation`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg`,
        alt: "Residential property photography transformed into lifestyle marketing content",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Property Animation",
  description:
    "Residential property animation and visual transformation created from supplied real estate photography, renders and footage.",
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
    category: "Kitchen",
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
      "A still facade image transformed into a simple campaign moment.",
    orientation: "portrait" as const,
  },
  {
    id: "facade-balloons",
    title: "Facade With Balloons",
    url: "https://www.youtube.com/shorts/npBU8mNYw0o",
    category: "Facade",
    description:
      "Another way to create attention from the same property imagery.",
    orientation: "portrait" as const,
  },
  {
    id: "facade-day-night",
    title: "Facade Day To Night",
    url: "https://www.youtube.com/shorts/UMWARuYjMSU",
    category: "Day To Night",
    description:
      "Turn an existing exterior into a second campaign moment with lighting and atmosphere.",
    orientation: "portrait" as const,
  },
];

const transformationImages = [
  {
    id: "kitchen-lifestyle",
    title: "Kitchen Lifestyle",
    category: "Lifestyle",
    description:
      "A clean kitchen image developed into another campaign asset with more atmosphere.",
    image: "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
  },
  {
    id: "bedroom-lifestyle",
    title: "Bedroom Lifestyle",
    category: "Lifestyle",
    description:
      "Residential photography made more lived in without replacing the original listing image.",
    image: "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
  },
  {
    id: "bathroom-lifestyle",
    title: "Bathroom Lifestyle",
    category: "Lifestyle",
    description:
      "A finished residential image with more human context and campaign variety.",
    image: "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
  },
  {
    id: "living-staging",
    title: "Living Room Styling",
    category: "Furniture & Styling",
    description:
      "An empty living area shown with furniture to improve scale and purpose.",
    image: "/property-images/website/staging/living-room-after.jpeg",
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
        <div className="container-shell py-14 md:py-18 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Residential Property Animation
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Make the property
                <span className="block text-rust">move before they scroll.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60 md:text-xl">
                Turn the residential photography you already have into short
                moving campaign content that gives agents more reasons to put
                the property back in front of buyers.
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
                    Existing photo
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
                eyebrow="Choose A Video"
                heading="See what a still property image can become."
                description="Tap through the examples. The proof comes first, the explanation comes after."
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK PROBLEM */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Agent Problem
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                You already have good photos.
                <br />
                The campaign still needs fresh moments.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                Buyers may have already seen the listing photography. Animation
                gives the same property another way to capture attention without
                organising another shoot.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The original images stay useful. We build additional content
                from them.
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
                before="/property-images/website/lifestyle/kitchen-before.jpeg"
                after="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                beforeAlt="Original residential kitchen property photograph"
                afterAlt="Residential kitchen developed into lifestyle marketing content"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                First Bring It To Life
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Movement works better when the scene already has a story.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Before animation, the still image can be enhanced with
                atmosphere, people, furniture, lighting or another visual idea
                that gives the final motion something useful to communicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL GALLERY */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-9 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              More From The Same Photography
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Still images can become new campaign assets before they become
              video.
            </h2>
          </div>

          <SwipeGallery items={transformationImages} />
        </div>
      </section>

      {/* WHAT AGENTS CAN CREATE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What One Shoot Can Become
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                More formats from property media you already paid for.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Lifestyle Scene",
                  text: "Add people and atmosphere to create another emotional campaign image.",
                },
                {
                  number: "02",
                  title: "Furniture & Styling",
                  text: "Help buyers understand empty spaces with a clearer sense of scale and use.",
                },
                {
                  number: "03",
                  title: "Day To Night",
                  text: "Turn one exterior into another visual moment with a different mood.",
                },
                {
                  number: "04",
                  title: "Property Animation",
                  text: "Add movement to people, environments or the scene itself.",
                },
                {
                  number: "05",
                  title: "Coming Soon Content",
                  text: "Create another campaign moment from an existing facade or hero image.",
                },
                {
                  number: "06",
                  title: "Finished Property Reel",
                  text: "Combine several transformed scenes into a short vertical campaign video.",
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

      {/* AGENT USE CASES */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Built For The Campaign
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Each asset should have a job.
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  problem: "The listing has been seen",
                  answer:
                    "Create a moving version that gives the property another reason to appear.",
                },
                {
                  problem: "An empty room lacks impact",
                  answer:
                    "Add furniture, styling or lifestyle before introducing motion.",
                },
                {
                  problem: "The facade needs another campaign moment",
                  answer:
                    "Create coming soon, atmosphere or day to night content.",
                },
                {
                  problem: "The campaign needs short form video",
                  answer:
                    "Turn several transformed scenes into a finished vertical Reel.",
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

      {/* SIMPLE PROCESS */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                No second property shoot required.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Existing Photography",
                  text: "Use the images already created for the listing or campaign.",
                },
                {
                  number: "02",
                  title: "Choose The Images Worth Extending",
                  text: "Focus on hero rooms, facades or scenes that can carry another campaign idea.",
                },
                {
                  number: "03",
                  title: "Bring The Scene To Life",
                  text: "Add the visual elements needed for lifestyle, styling, atmosphere or another concept.",
                },
                {
                  number: "04",
                  title: "Make It Move",
                  text: "Turn the finished scene into short residential property animation.",
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
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More Residential Proof
              </p>

              <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-5xl">
                See a full residential property transformation across multiple
                rooms and animations.
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

      {/* PACKAGES */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Need More Than One Animation?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Build a campaign instead of a single asset.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/55">
                Combine enhanced stills and multiple animated scenes when the
                listing needs more than one fresh campaign moment.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/packages/property-campaign"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f7f5f1] px-6 py-3.5 font-semibold transition hover:border-rust"
                >
                  Property Campaign
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/packages/property-reel-campaign"
                  className="inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3.5 font-semibold text-white transition hover:bg-ink"
                >
                  Property Reel Campaign
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-18 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Residential Property Animation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Already have the photos?
            <br />
            Make them move.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the residential property photography you already have and
            we can turn selected images into more useful campaign content.
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