import Link from "next/link";

import {
  ArrowRight,
  Film,
  Play,
  Sparkles,
  Video,
} from "lucide-react";

import SocialEmbed from "@/components/SocialEmbed";

const videos = [
  {
    id: 1,
    title: "Property Reel 01",
    category: "Reels",
    url: "https://www.instagram.com/rpimages.au/reel/DcP0_PoA7L6/",
    description:
      "Property imagery transformed into short-form vertical content designed to capture attention.",
  },
  {
    id: 2,
    title: "Property Reel 02",
    category: "Reels",
    url: "https://www.instagram.com/rpimages.au/reel/DcPX4nBB-Ps/",
    description:
      "Existing property media reworked into a polished Reel for digital marketing.",
  },
  {
    id: 3,
    title: "Property Reel 03",
    category: "Reels",
    url: "https://www.instagram.com/rpimages.au/reel/DcOBs7AhSco/",
    description:
      "A short-form property video created to give existing imagery more movement and impact.",
  },
  {
    id: 4,
    title: "Property Reel 04",
    category: "Reels",
    url: "https://www.instagram.com/rpimages.au/reel/DcN5KYSBRYs/",
    description:
      "Property photography transformed into social-ready motion content.",
  },
  {
    id: 5,
    title: "Property Reel 05",
    category: "Reels",
    url: "https://www.instagram.com/rpimages.au/reel/DcAYIiLhIWV/",
    description:
      "A vertical visual campaign created from existing real estate imagery.",
  },
  {
    id: 6,
    title: "Property Reel 06",
    category: "Reels",
    url: "https://www.instagram.com/rpimages.au/reel/Db9vSsphbWj/",
    description:
      "Still property assets reimagined as an engaging vertical Reel.",
  },
  {
    id: 7,
    title: "Property Animation 01",
    category: "Animations",
    url: "https://www.tiktok.com/@rpimages.au/video/7675941476982918418",
    description:
      "Still property imagery transformed into cinematic motion content.",
  },
  {
    id: 8,
    title: "Property Animation 02",
    category: "Animations",
    url: "https://www.tiktok.com/@rpimages.au/video/7675941178067488007",
    description:
      "Existing real estate visuals brought to life through movement and animation.",
  },
  {
    id: 9,
    title: "Property Animation 03",
    category: "Animations",
    url: "https://www.tiktok.com/@rpimages.au/video/7675892331488218386",
    description:
      "Property imagery turned into a dynamic short-form animation for digital campaigns.",
  },
  {
    id: 10,
    title: "Property Animation 04",
    category: "Animations",
    url: "https://www.tiktok.com/@rpimages.au/video/7675368129895075079",
    description:
      "Static property media transformed into cinematic social content.",
  },
];

const categories = [
  "All Work",
  "Reels",
  "Animations",
  "Build Reveals",
  "Lifestyle",
  "Developments",
];

export default function VideoLibraryPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="border-b border-white/10 bg-ink text-white">
        <div className="container-shell py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Video Library
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Property media
                <span className="block text-white/35">
                  made to be watched.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/60">
                Explore property Reels, animations and short-form visual content
                created from existing photography, renders and footage.
              </p>

              <Link
                href="/enquire"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Start a project
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <section className="border-b border-black/10 bg-[#f7f5f1]">
        <div className="container-shell">
          <div className="flex gap-2 overflow-x-auto py-5">
            {categories.map((category, index) => (
              <span
                key={category}
                className={`shrink-0 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide ${
                  index === 0
                    ? "bg-ink text-white"
                    : "border border-black/10 bg-white text-black/55"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Featured
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Latest work
              </h2>
            </div>

            <p className="max-w-lg leading-7 text-black/50">
              Real estate imagery has already done the hard work. We give it
              another life through motion.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[2rem] bg-ink text-white lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-black p-3">
              <div className="overflow-hidden rounded-[1.4rem]">
                <SocialEmbed
                  url={videos[0].url}
                  caption={videos[0].title}
                />
              </div>
            </div>

            <div className="flex items-center p-8 md:p-12">
              <div>
                <div className="flex items-center gap-2">
                  <Film size={17} className="text-brassBright" />

                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">
                    {videos[0].category}
                  </p>
                </div>

                <h3 className="mt-5 font-display text-4xl font-semibold">
                  {videos[0].title}
                </h3>

                <p className="mt-5 max-w-lg text-lg leading-8 text-white/55">
                  {videos[0].description}
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
                Full Library
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Reels and animations.
              </h2>
            </div>

            <p className="max-w-lg leading-7 text-black/50">
              A growing library of visual property content created for social
              media and digital marketing.
            </p>
          </div>

          <div className="grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <article key={video.id} className="group">
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
                        {String(index + 1).padStart(2, "0")} / {video.category}
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

      {/* WHAT WE CREATE */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What we create
              </p>

              <h2 className="mt-4 max-w-lg font-display text-4xl font-semibold leading-tight md:text-5xl">
                One property can become a lot more content.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-black/55">
                Send us the photography, renders or footage you already have.
                We transform those assets into content designed specifically
                for property marketing.
              </p>
            </div>

            <div className="border-t border-black/10">
              <div className="grid gap-5 border-b border-black/10 py-7 sm:grid-cols-[60px_1fr_auto] sm:items-center">
                <Video size={21} className="text-rust" />

                <div>
                  <h3 className="font-display text-xl font-semibold">
                    Property Reels
                  </h3>

                  <p className="mt-1 text-sm text-black/50">
                    Vertical short-form video created from supplied property
                    media.
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="hidden text-black/25 sm:block"
                />
              </div>

              <div className="grid gap-5 border-b border-black/10 py-7 sm:grid-cols-[60px_1fr_auto] sm:items-center">
                <Film size={21} className="text-rust" />

                <div>
                  <h3 className="font-display text-xl font-semibold">
                    Property Animations
                  </h3>

                  <p className="mt-1 text-sm text-black/50">
                    Cinematic movement created from still imagery and renders.
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="hidden text-black/25 sm:block"
                />
              </div>

              <div className="grid gap-5 border-b border-black/10 py-7 sm:grid-cols-[60px_1fr_auto] sm:items-center">
                <Sparkles size={21} className="text-rust" />

                <div>
                  <h3 className="font-display text-xl font-semibold">
                    Lifestyle Content
                  </h3>

                  <p className="mt-1 text-sm text-black/50">
                    Property imagery enhanced with believable activity and
                    atmosphere.
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="hidden text-black/25 sm:block"
                />
              </div>
            </div>
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
            Have imagery?
            <br />
            Let&apos;s make it move.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the property photography, renders or footage you already
            have and tell us what you want to create.
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