"use client";

import Link from "next/link";
import { useState } from "react";

import {
  ArrowRight,
  Building2,
  Film,
  Play,
  Sparkles,
  SunMedium,
  Video,
} from "lucide-react";

import SocialEmbed from "@/components/SocialEmbed";

const videos = [
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
      "Existing property imagery transformed into a polished vertical Reel.",
  },
  {
    id: 3,
    title: "Property Reel 03",
    category: "Property Reels",
    url: "https://www.instagram.com/rpimages.au/reel/DcOBs7AhSco/",
    description:
      "A property campaign turned into a flowing short-form visual story.",
  },
  {
    id: 4,
    title: "Property Reel 04",
    category: "Property Reels",
    url: "https://www.instagram.com/rpimages.au/reel/DcN5KYSBRYs/",
    description:
      "Property photography transformed into moving vertical content.",
  },
  {
    id: 5,
    title: "Property Reel 05",
    category: "Property Reels",
    url: "https://www.instagram.com/rpimages.au/reel/DcAYIiLhIWV/",
    description:
      "Multiple property visuals edited together into a finished campaign Reel.",
  },
  {
    id: 6,
    title: "Property Reel 06",
    category: "Property Reels",
    url: "https://www.instagram.com/rpimages.au/reel/Db9vSsphbWj/",
    description:
      "Still property assets reimagined as an engaging vertical property film.",
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

const categories = [
  "All",
  "Short Animations",
  "Property Reels",
];

const futureMotion = [
  {
    title: "Day → Night",
    description:
      "Move from daylight through golden hour and into evening as the property lights come on.",
    icon: SunMedium,
  },
  {
    title: "Cinematic Movement",
    description:
      "Create camera movement, depth and a more film-like feeling from a still property image.",
    icon: Film,
  },
  {
    title: "Lifestyle Motion",
    description:
      "Introduce believable people, activity and movement into property scenes.",
    icon: Sparkles,
  },
  {
    title: "Build Reveals",
    description:
      "Show demolition, construction stages and finished developments through animation.",
    icon: Building2,
  },
];

export default function VideoLibraryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter(
          (video) => video.category === activeCategory,
        );

  const featured = filteredVideos[0] ?? videos[0];

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="border-b border-white/10 bg-ink text-white">
        <div className="container-shell py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Video Library
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.96] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[5.7rem]">
                First, bring it to life.
                <span className="block text-white/35">
                  Then make it move.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/60">
                Explore short property animations and finished
                vertical Reels created from existing photography,
                renders and property media.
              </p>

              <Link
                href="/explore"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Explore what&apos;s possible
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="border-b border-black/10 bg-white">
        <div className="container-shell py-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`rounded-full px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
                    active
                      ? "bg-ink text-white"
                      : "border border-black/10 bg-[#f7f5f1] text-black/50 hover:border-rust hover:text-rust"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Featured Motion
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                See the property move.
              </h2>
            </div>

            <p className="max-w-lg leading-7 text-black/50">
              Motion adds another layer to the property image:
              movement, atmosphere, transitions and story.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[2rem] bg-ink text-white lg:grid-cols-[1.05fr_0.95fr]">
            <div className="bg-black p-3">
              <div className="overflow-hidden rounded-[1.4rem]">
                <SocialEmbed
                  url={featured.url}
                  caption={featured.title}
                />
              </div>
            </div>

            <div className="flex items-center p-8 md:p-12">
              <div>
                <div className="flex items-center gap-2">
                  <Film
                    size={17}
                    className="text-brassBright"
                  />

                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">
                    {featured.category}
                  </p>
                </div>

                <h3 className="mt-5 font-display text-4xl font-semibold">
                  {featured.title}
                </h3>

                <p className="mt-5 max-w-lg text-lg leading-8 text-white/55">
                  {featured.description}
                </p>

                <Link
                  href="/enquire"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-brassBright"
                >
                  Create something like this
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO GRID */}
      <section className="border-t border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Motion Library
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Animations and Property Reels.
              </h2>
            </div>

            <p className="max-w-lg leading-7 text-black/50">
              A growing library of property scenes transformed
              through motion.
            </p>
          </div>

          <div className="grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video, index) => (
              <article
                key={video.id}
                className="group"
              >
                <div className="overflow-hidden rounded-[1.75rem] bg-ink p-2">
                  <div className="overflow-hidden rounded-[1.3rem] bg-black">
                    <SocialEmbed
                      url={video.url}
                      caption={video.title}
                    />
                  </div>
                </div>

                <div className="px-1 pt-5">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                        {String(index + 1).padStart(
                          2,
                          "0",
                        )}{" "}
                        / {video.category}
                      </p>

                      <h3 className="mt-2 font-display text-2xl font-semibold">
                        {video.title}
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 transition group-hover:bg-ink group-hover:text-white">
                      <Play size={15} />
                    </div>
                  </div>

                  <p className="mt-3 max-w-md leading-7 text-black/50">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MOTION TYPES */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More ways to move
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Motion can tell different property stories.
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-black/55">
                As we build the new demonstration library,
                these animation styles will become part of the
                Explore experience.
              </p>

              <Link
                href="/explore"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore property examples
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {futureMotion.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.7rem] border border-black/10 bg-white p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f5f1] text-rust">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-8 font-display text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-black/50">
                      {item.description}
                    </p>

                    <p className="mt-6 font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-black/25">
                      More examples coming
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATION VS REEL */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
              <Film
                size={25}
                className="text-brassBright"
              />

              <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brassBright">
                Animated Scene
              </p>

              <h2 className="mt-3 font-display text-4xl font-semibold">
                One image.
                <br />
                One moving moment.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-white/50">
                A single property image transformed into a
                short animation. This can include camera
                movement, people, lighting, cars, furniture
                or environmental motion.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 text-ink md:p-10">
              <Video
                size={25}
                className="text-rust"
              />

              <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                Property Reel
              </p>

              <h2 className="mt-3 font-display text-4xl font-semibold">
                Multiple scenes.
                <br />
                One finished story.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-black/50">
                Several enhanced and animated scenes combined
                with transitions into a finished vertical
                property Reel.
              </p>

              <Link
                href="/packages"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                See Property Reel package
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE NOTE */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Motion in our packages
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                More motion is what takes a campaign further.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
                Property Refresh starts with one short
                animation. Larger packages add more animated
                scenes, while the $1,590 Property Reel
                Campaign includes the finished vertical Reel.
              </p>
            </div>

            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
            >
              Compare packages
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
            Real Estate Media House
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Have the image?
            <br />
            Let&apos;s make it move.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Start with the property photography or renders
            you already have.
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
    </main>
  );
}