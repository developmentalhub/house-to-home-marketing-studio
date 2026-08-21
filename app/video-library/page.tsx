"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Maximize2,
  X,
} from "lucide-react";

import SocialEmbed from "@/components/SocialEmbed";

type SocialVideo = {
  id: number;
  title: string;
  category: "Property Reels" | "Short Animations";
  url: string;
  description: string;
};

const videos: SocialVideo[] = [
  {
    id: 1,
    title: "Property Reel 01",
    category: "Property Reels",
    url: "https://www.instagram.com/rpimages.au/reel/DcP0_PoA7L6/",
    description:
      "Multiple property scenes brought together into one finished vertical property story.",
  },
  {
    id: 2,
    title: "Property Reel 02",
    category: "Property Reels",
    url: "https://www.instagram.com/rpimages.au/reel/DcPX4nBB-Ps/",
    description:
      "Existing property imagery transformed into a polished vertical property Reel.",
  },
  {
    id: 3,
    title: "Property Reel 03",
    category: "Property Reels",
    url: "https://www.instagram.com/rpimages.au/reel/DcOBs7AhSco/",
    description:
      "A property campaign transformed into a flowing short form visual story.",
  },
  {
    id: 4,
    title: "Property Reel 04",
    category: "Property Reels",
    url: "https://www.instagram.com/rpimages.au/reel/DcN5KYSBRYs/",
    description:
      "Existing property photography transformed into moving vertical content.",
  },
  {
    id: 5,
    title: "Property Reel 05",
    category: "Property Reels",
    url: "https://www.instagram.com/rpimages.au/reel/DcAYIiLhIWV/",
    description:
      "Multiple property visuals edited together into one finished campaign Reel.",
  },
  {
    id: 6,
    title: "Property Reel 06",
    category: "Property Reels",
    url: "https://www.instagram.com/rpimages.au/reel/Db9vSsphbWj/",
    description:
      "Still property assets transformed into a more engaging vertical property film.",
  },
  {
    id: 7,
    title: "Property Animation 01",
    category: "Short Animations",
    url: "https://www.tiktok.com/@rpimages.au/video/7675941476982918418",
    description:
      "A still property image transformed into a cinematic moving scene.",
  },
  {
    id: 8,
    title: "Property Animation 02",
    category: "Short Animations",
    url: "https://www.tiktok.com/@rpimages.au/video/7675941178067488007",
    description:
      "Existing real estate imagery brought to life through movement and depth.",
  },
  {
    id: 9,
    title: "Property Animation 03",
    category: "Short Animations",
    url: "https://www.tiktok.com/@rpimages.au/video/7675892331488218386",
    description:
      "Property imagery transformed into a short animated moment.",
  },
  {
    id: 10,
    title: "Property Animation 04",
    category: "Short Animations",
    url: "https://www.tiktok.com/@rpimages.au/video/7675368129895075079",
    description:
      "Static property media transformed with cinematic motion.",
  },
];

const filters = [
  "All",
  "Short Animations",
  "Property Reels",
] as const;

const specialistPages = [
  {
    number: "01",
    label: "Priority Sector",
    title: "Childcare Property Animation",
    description:
      "Show interiors, outdoor environments, demolition, construction and the finished childcare centre before it physically exists.",
    href: "/childcare-property-animation",
    cta: "Explore childcare",
  },
  {
    number: "02",
    label: "Residential",
    title: "Residential Property Animation",
    description:
      "Turn existing listing photography into fresh campaign content with movement, lifestyle, atmosphere and visual ideas.",
    href: "/residential-property-animation",
    cta: "Explore residential",
  },
  {
    number: "03",
    label: "Commercial",
    title: "Commercial Property Animation",
    description:
      "Help buyers and tenants see how a warehouse or commercial property could be used, occupied or developed.",
    href: "/commercial-property-animation",
    cta: "Explore commercial",
  },
];

export default function VideoLibraryPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const [selectedVideo, setSelectedVideo] =
    useState<SocialVideo | null>(null);

  const filteredVideos =
    activeFilter === "All"
      ? videos
      : videos.filter(
          (video) => video.category === activeFilter,
        );

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Property Animation Library
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Your property media
                <span className="block text-rust">
                  does not have to stand still.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/60">
                Explore property animation across residential, childcare and
                commercial projects. See how existing photography and renders
                can become fresh moving content without another property shoot.
              </p>

              <Link
                href="/enquire"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Start a project
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIST CATEGORIES */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Explore By Property Sector
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Different properties need different stories.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              Choose the type of property you work with and explore animation
              created around the problems that sector needs to solve.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {specialistPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-[420px] flex-col rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:-translate-y-1 hover:border-rust hover:bg-white hover:shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                    {item.number}
                  </p>

                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-black/30">
                    {item.label}
                  </p>
                </div>

                <div className="mt-auto pt-20">
                  <h3 className="font-display text-3xl font-semibold leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/50">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5 font-semibold text-rust">
                    {item.cta}

                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHILDCARE FEATURE */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Childcare Development
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Help people see the finished centre before it exists.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/55">
                Turn an existing home or development site into a visual journey
                through demolition, construction, landscaping, car parks,
                families and the completed childcare centre.
              </p>

              <Link
                href="/childcare-property-animation"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Explore childcare animation
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Interior Rooms",
                  text: "Show future childcare environments furnished, active and ready for use.",
                },
                {
                  number: "02",
                  title: "Outdoor Play",
                  text: "Create landscaped and active outdoor environments before they are complete.",
                },
                {
                  number: "03",
                  title: "Demolition",
                  text: "Show an existing home or building being removed from the development site.",
                },
                {
                  number: "04",
                  title: "Final Centre",
                  text: "Reveal the completed development with landscaping, cars, families and activity.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="min-h-[220px] border-b border-r border-white/10 p-7"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-brassBright">
                    {item.number}
                  </p>

                  <h3 className="mt-9 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                  Residential Case Study
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  One property became twelve pieces of moving content.
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-lg leading-8 text-black/55">
                  Explore one residential property across the facade, kitchen,
                  dining, living spaces, bedrooms, bathroom, study, laundry and
                  backyard.
                </p>

                <Link
                  href="/projects/residential-property-transformation"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
                >
                  Open the full case study
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEGACY SOCIAL LIBRARY */}
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More Property Motion
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Keep playing.
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
                Browse more property animations and finished vertical Reels.
                Tap any example to open it larger.
              </p>
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {filters.map((filter) => {
                const active = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                      active
                        ? "bg-ink text-white"
                        : "border border-black/10 bg-[#f7f5f1] text-black/50 hover:border-rust hover:text-rust"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video, index) => (
              <article
                key={video.id}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[1.75rem] bg-ink p-2">
                  <div className="overflow-hidden rounded-[1.3rem] bg-black">
                    <SocialEmbed
                      url={video.url}
                      caption={video.title}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedVideo(video)}
                    aria-label={`Open ${video.title}`}
                    className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/75 text-white backdrop-blur transition hover:bg-rust"
                  >
                    <Maximize2 size={17} />
                  </button>
                </div>

                <div className="px-1 pt-5">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                    {String(index + 1).padStart(2, "0")} / {video.category}
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    {video.title}
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-black/50">
                    {video.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedVideo(video)}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rust"
                  >
                    Open larger
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ANIMATION VS REEL */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-ink p-8 text-white md:p-10">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brassBright">
                Animated Scene
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold">
                One image.
                <br />
                One moving moment.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-white/50">
                A single property image transformed through camera movement,
                people, lighting, cars, furniture, landscape or environmental
                motion.
              </p>

              <Link
                href="/residential-property-animation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-brassBright"
              >
                Explore animations
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-white p-8 md:p-10">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                Property Reel
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold">
                Multiple scenes.
                <br />
                One finished property story.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-black/50">
                Several enhanced and animated scenes are edited together into a
                finished vertical property Reel ready to support the campaign.
              </p>

              <Link
                href="/packages/property-reel-campaign"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View Property Reel Campaign
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE LIBRARY */}
      <section className="border-t border-black/10 bg-white py-20 md:py-24">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Want to control the transformation?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Drag between the original and finished image yourself.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
                Our interactive image library includes childcare, residential,
                commercial and lifestyle transformations.
              </p>
            </div>

            <Link
              href="/image-library"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
            >
              Open Image Library
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Real Estate Media House
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Have the property media?
            <br />
            Let&apos;s make it move.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the photography, renders or project imagery you already have
            and we&apos;ll help create the next layer of the campaign.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start a project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-xl overflow-hidden rounded-[1.5rem] bg-ink shadow-2xl md:rounded-[2rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
              className="absolute right-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition hover:bg-rust"
            >
              <X size={19} />
            </button>

            <div className="bg-black">
              <SocialEmbed
                url={selectedVideo.url}
                caption={selectedVideo.title}
              />
            </div>

            <div className="p-6 text-white md:p-8">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                {selectedVideo.category}
              </p>

              <h2 className="mt-2 font-display text-3xl font-semibold">
                {selectedVideo.title}
              </h2>

              <p className="mt-3 leading-7 text-white/50">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}