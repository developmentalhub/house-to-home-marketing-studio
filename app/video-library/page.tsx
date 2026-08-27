import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";
import { fetchLatestYouTubeVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Property Video & Animation Library | Real Estate Media House",
  description:
    "Watch residential, commercial and childcare property animations created from existing photography, renders and property media, including the latest videos from Real Estate Media House.",
  alternates: {
    canonical: `${SITE_URL}/video-library`,
  },
  openGraph: {
    title: "Property Video & Animation Library | Real Estate Media House",
    description:
      "See existing property media transformed into animated residential, commercial and childcare campaign stories.",
    url: `${SITE_URL}/video-library`,
    type: "website",
  },
};

const residentialLandscape = [
  {
    id: "res-bathroom",
    title: "Bathroom",
    url: "https://www.youtube.com/watch?v=rwduPrHJmrU",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-bedroom",
    title: "Bedroom",
    url: "https://www.youtube.com/watch?v=dQjStlhEGzI",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-dining",
    title: "Dining",
    url: "https://www.youtube.com/watch?v=b_iS2Uz8L-I",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-facade",
    title: "Facade",
    url: "https://www.youtube.com/watch?v=ezOd5jztwcI",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-baby-room",
    title: "Baby Room",
    url: "https://www.youtube.com/watch?v=Z_aNTKvrD74",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-laundry",
    title: "Laundry",
    url: "https://www.youtube.com/watch?v=W2uLloIY8o4",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-living-one",
    title: "Living Room",
    url: "https://www.youtube.com/watch?v=5_j6Nd7QxJA",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-living-hand",
    title: "Living Room Furniture Drop",
    url: "https://www.youtube.com/watch?v=psc1vhNWgXs",
    category: "Residential",
    description:
      "A playful transformation showing furniture arriving into the existing living room scene.",
    orientation: "landscape" as const,
  },
  {
    id: "res-living-two",
    title: "Living Room Animation",
    url: "https://www.youtube.com/watch?v=-LY8KI3cmmA",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-study",
    title: "Study",
    url: "https://www.youtube.com/watch?v=hQa0O5RQwkk",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-kitchen",
    title: "Kitchen",
    url: "https://www.youtube.com/watch?v=E6sOWBaJP38",
    category: "Residential",
    orientation: "landscape" as const,
  },
  {
    id: "res-backyard",
    title: "Backyard",
    url: "https://www.youtube.com/watch?v=4vz-HSeqEh4",
    category: "Residential",
    orientation: "landscape" as const,
  },
];

const featuredShorts = [
  {
    id: "residential-kitchen-short",
    title: "Residential Kitchen Story",
    url: "https://www.youtube.com/shorts/5NP5Ay_3SBY",
    category: "Residential",
    orientation: "portrait" as const,
  },
  {
    id: "residential-coming-soon",
    title: "Coming Soon Facade",
    url: "https://www.youtube.com/shorts/7sLtp4cucnU",
    category: "Residential",
    orientation: "portrait" as const,
  },
  {
    id: "residential-balloons",
    title: "Facade Campaign Moment",
    url: "https://www.youtube.com/shorts/npBU8mNYw0o",
    category: "Residential",
    orientation: "portrait" as const,
  },
  {
    id: "residential-day-night",
    title: "Facade Day To Night",
    url: "https://www.youtube.com/shorts/UMWARuYjMSU",
    category: "Residential",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-one",
    title: "Commercial Property Story",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-two",
    title: "Commercial Property Animation",
    url: "https://www.youtube.com/shorts/bJCRltJn_vY",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-three",
    title: "Commercial Property Transformation",
    url: "https://www.youtube.com/shorts/2DXsq8mXemI",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-one",
    title: "Childcare Development Story",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Childcare",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-two",
    title: "Childcare Property Animation",
    url: "https://www.youtube.com/shorts/fDUWkWFLUrM",
    category: "Childcare",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-three",
    title: "Childcare Centre Story",
    url: "https://www.youtube.com/shorts/kdFOHfqTHLw",
    category: "Childcare",
    orientation: "portrait" as const,
  },
];

const packageDurations = [
  {
    name: "Story Starter",
    href: "/packages/story-starter",
    scenes: "1 property animation",
    duration: "Up to 10 seconds",
  },
  {
    name: "Story Builder",
    href: "/packages/story-builder",
    scenes: "2 property animations",
    duration: "Up to 10 seconds each · up to 20 seconds total",
  },
  {
    name: "Story Deep Dive",
    href: "/packages/story-deep-dive",
    scenes: "3 property animations",
    duration: "Up to 10 seconds each · up to 30 seconds total",
  },
  {
    name: "The Full Story",
    href: "/packages/the-full-story",
    scenes: "3 to 4 property animations",
    duration:
      "Up to 10 seconds each · up to 40 seconds total · plus a 20 to 30 second Reel",
  },
];

export default async function VideoLibraryPage() {
  const latestVideos = await fetchLatestYouTubeVideos(18);

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Property Video Library
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Property media
              <span className="block text-rust">made to move.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
              Turn selected property images into moving moments that help the
              campaign earn attention and give the story another way to unfold.
            </p>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/45">
              Individual property animations can run up to 10 seconds each.
              Higher packages simply include more scenes, while The Full Story
              also includes a finished vertical Reel.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#latest"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                Watch latest videos
                <ArrowRight size={18} />
              </a>

              <Link
                href="/image-library"
                className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:bg-white hover:text-ink"
              >
                See before and after
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST YOUTUBE */}
      <section
        id="latest"
        className="border-b border-black/10 bg-white py-16 md:py-20"
      >
        <div className="container-shell">
          {latestVideos.length > 0 ? (
            <YouTubeVideoCarousel
              items={latestVideos}
              eyebrow="Latest From YouTube"
              heading="The newest property stories, automatically."
              description="This section pulls the latest videos directly from our YouTube channel so new uploads can appear here without manually rebuilding the page."
            />
          ) : (
            <YouTubeVideoCarousel
              items={featuredShorts}
              eyebrow="Recent Property Stories"
              heading="Recent residential, commercial and childcare animation."
              description="Recent property animation examples while the live YouTube feed is unavailable."
            />
          )}
        </div>
      </section>

      {/* FEATURED SHORTS */}
      <section className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={featuredShorts}
            eyebrow="Property Stories In Motion"
            heading="One property. Different reasons to stop."
            description="Residential, commercial and childcare examples showing how still property media can become another campaign moment."
          />
        </div>
      </section>

      {/* ANIMATION LENGTH */}
      <section className="border-y border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Animation Length
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Every animated scene
                <span className="block text-rust">
                  can run up to 10 seconds.
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-black/50">
                The package determines how many individual animated scenes are
                included.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {packageDurations.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group rounded-[1.75rem] border border-black/10 bg-[#f7f5f1] p-7 transition hover:border-rust hover:bg-white hover:shadow-soft"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold">
                        {item.name}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-black/45">
                        {item.scenes}
                      </p>

                      <p className="mt-2 font-semibold leading-6 text-rust">
                        {item.duration}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      className="shrink-0 text-rust transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY MOTION */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Why Make It Move?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Motion catches the eye.
                <span className="block text-rust">
                  Story gives the movement meaning.
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  problem: "The listing has already been seen",
                  answer:
                    "Give a familiar property image another campaign moment with movement, atmosphere and a different story angle.",
                },
                {
                  problem: "A beautiful room still feels static",
                  answer:
                    "Add believable activity, environmental movement and atmosphere so the image begins to feel like a moment rather than a photograph.",
                },
                {
                  problem: "The commercial use is hard to picture",
                  answer:
                    "Show the relevant business environment first, then animate people, vehicles, equipment or activity within it.",
                },
                {
                  problem: "The development is not finished",
                  answer:
                    "Use movement to help communicate the progression from the supplied project media toward the intended completed environment.",
                },
                {
                  problem: "The campaign needs one finished story",
                  answer:
                    "Combine selected enhanced and animated moments into a finished vertical property Reel.",
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

      {/* ROOM BY ROOM */}
      <section
        id="room-by-room"
        className="bg-white py-16 md:py-20"
      >
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={residentialLandscape}
            eyebrow="Residential Animation Library"
            heading="Room by room. Moment by moment."
            description="Explore residential animation examples across bedrooms, bathrooms, dining areas, living rooms, facades, studies, laundries, kitchens and outdoor spaces."
          />
        </div>
      </section>

      {/* STORY */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Story Behind The Movement
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Do not animate something
                <span className="block text-rust">
                  just because it can move.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                A curtain moving, a light changing or someone walking through a
                room can catch attention. But the strongest animation has a
                reason for that movement to exist.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                The backyard becomes lunch that runs into the evening. The
                breakfast bar becomes a quiet Sunday morning. The commercial
                warehouse becomes a business already operating inside the
                space.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                First, bring the image to life. Then, make it move. Then, tell
                people why it matters.
              </p>
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
                Start with the property media already created.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Existing Media",
                  text: "Supply property photography, renders or footage already created for the campaign.",
                },
                {
                  number: "02",
                  title: "Choose The Strongest Scene",
                  text: "We identify the rooms, facades, commercial uses or development moments with the strongest visual and emotional potential.",
                },
                {
                  number: "03",
                  title: "Bring The Image To Life",
                  text: "Keep the architecture and defining property elements accurate while adding or refining people, furniture, appliances, décor, cars, landscaping, lighting and atmosphere where the scene needs them.",
                },
                {
                  number: "04",
                  title: "Make It Move",
                  text: "Turn the finished visual into an animated scene of up to 10 seconds.",
                },
                {
                  number: "05",
                  title: "Give The Movement A Story",
                  text: "Build the hook, caption angle and sequencing around what the audience should notice, imagine or feel.",
                },
                {
                  number: "06",
                  title: "Build A Reel Where Required",
                  text: "The Full Story combines selected enhanced and animated moments into a finished vertical Reel from 20 to 30 seconds.",
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

      {/* REEL */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Finished Property Reel
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Individual scenes first.
                <span className="block text-rust">
                  One finished story after.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/55">
                Individual animations and the finished Reel are different
                deliverables.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                The Full Story includes 3 to 4 individual animations of up to
                10 seconds each, giving you up to 40 seconds of individual
                animated campaign content. Selected moments are then shaped
                into a separate finished vertical Reel from 20 to 30 seconds.
              </p>

              <Link
                href="/packages/the-full-story"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
              >
                Explore The Full Story
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/image-library"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Before Motion
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Explore Image Transformations
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See the enhanced property images that can become the starting
                point for animation.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore images
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/packages/the-full-story"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Finished Video
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                The Full Story
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Combine 3 to 4 animated property scenes with a complete
                narrative and finished vertical Reel.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                View Full Story package
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/packages"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Packages
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Choose How Much Motion You Need
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Start with one animated scene or build a complete property
                campaign with multiple moving moments.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Compare packages
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
            Property Media Made To Move
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Your listing is competing with everything.
            <br />
            Give people a reason to stop.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the property media you already have. We’ll find the scenes
            worth bringing to life, the moments worth moving and the story that
            gives them meaning.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss property animation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}