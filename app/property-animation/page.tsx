import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import { ArrowRight } from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Single Property Reel Animation | Real Estate Media House",
  description:
    "Turn one supplied property image or render into a finished vertical animation up to 10 seconds for $245 + GST.",
  alternates: {
    canonical: `${SITE_URL}/property-animation`,
  },
  openGraph: {
    title:
      "Single Property Reel Animation | Real Estate Media House",
    description:
      "One supplied property image. One finished vertical property animation up to 10 seconds. $245 + GST.",
    url: `${SITE_URL}/property-animation`,
    type: "website",
  },
};

const included = [
  {
    number: "01",
    title: "One supplied image or render",
    text:
      "Send us the property photograph, architectural render or visual you want to animate.",
  },
  {
    number: "02",
    title: "Animation direction",
    text:
      "We work out the most suitable camera movement, atmosphere and scene motion for the image.",
  },
  {
    number: "03",
    title: "Prompt development",
    text:
      "We build the animation instructions around the property rather than relying on a generic prompt.",
  },
  {
    number: "04",
    title: "Up to 10 seconds",
    text:
      "You receive one finished vertical property animation suitable for social media and Reel content.",
  },
  {
    number: "05",
    title: "Basic refinement",
    text:
      "We review the generated movement and refine the direction where needed before final delivery.",
  },
];

const goodFor = [
  {
    number: "01",
    title: "Residential listings",
    text:
      "Turn a strong exterior, kitchen, living room, pool or lifestyle image into a moving campaign moment.",
  },
  {
    number: "02",
    title: "Commercial property",
    text:
      "Bring a warehouse, office, retail or industrial property image to life with purposeful movement.",
  },
  {
    number: "03",
    title: "Developments",
    text:
      "Add movement to architectural visualisation or development renders before the project is built.",
  },
  {
    number: "04",
    title: "Hospitality",
    text:
      "Create movement through hotel, accommodation, lobby, restaurant or resort imagery.",
  },
  {
    number: "05",
    title: "Childcare",
    text:
      "Animate childcare interiors, outdoor environments and development visuals while keeping the built environment true.",
  },
  {
    number: "06",
    title: "Social content",
    text:
      "Create a fresh Reel asset from a property image you already have rather than organising another shoot.",
  },
];

const instagramPosts = [
  {
    url: "https://www.instagram.com/p/DcpotB_E7YA/",
    title: "Property animation Reel example one",
  },
  {
    url: "https://www.instagram.com/p/DciAZZDtpEY/",
    title: "Property animation Reel example two",
  },
];

export default function PropertyAnimationPage() {
  return (
    <>
      <main className="bg-[#f7f5f1] text-ink">
        {/* HERO */}
        <section className="bg-ink text-white">
          <div className="container-shell py-16 md:py-20 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                  Single Property Reel
                </p>

                <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                  Give one property image
                  <span className="block text-rust">
                    somewhere to move.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
                  Send us one property photograph or architectural render
                  and we will turn it into a finished vertical animation
                  of up to 10 seconds.
                </p>

                <p className="mt-5 max-w-2xl leading-8 text-white/45">
                  We develop the movement around the image, protect the
                  defining property details and create a Reel-ready scene
                  without requiring you to purchase a larger campaign
                  package.
                </p>

                <div className="mt-9 flex flex-wrap items-end gap-6">
                  <div>
                    <p className="font-display text-5xl font-semibold">
                      $245
                    </p>

                    <p className="mt-1 text-sm text-white/35">
                      + GST
                    </p>
                  </div>

                  <Link
                    href="/enquire"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                  >
                    Animate my property
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="mx-auto w-full max-w-xl">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-soft">
                  <div className="overflow-hidden rounded-[1.65rem] bg-[#f7f5f1] text-ink">
                    <div className="relative min-h-[360px] bg-[#ece8e1]">
                      <img
                        src="/images/arch-viz-reel-animation.png"
                        alt="Property Reel animation example"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>

                    <div className="p-8 md:p-10">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                        One Finished Animation
                      </p>

                      <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">
                        One image.
                        <span className="block text-rust">
                          Up to 10 seconds.
                        </span>
                      </h2>

                      <p className="mt-5 leading-7 text-black/50">
                        Designed for property marketers who want one
                        strong animated asset without committing to a
                        complete story package.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="bg-white py-16 md:py-20">
          <div className="container-shell">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                  What Is Included
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  More than pressing
                  <span className="block text-rust">
                    an animate button.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-black/50">
                  The value is in deciding what should move, what should
                  stay true and how the camera can support the property
                  instead of distracting from it.
                </p>
              </div>

              <div className="divide-y divide-black/10 border-y border-black/10">
                {included.map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-4 py-6 sm:grid-cols-[55px_0.7fr_1.3fr]"
                  >
                    <p className="font-mono text-[9px] font-semibold tracking-[0.16em] text-rust">
                      {item.number}
                    </p>

                    <h3 className="font-display text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="leading-7 text-black/50">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INSTAGRAM PROOF */}
        <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
          <div className="container-shell">
            <div className="mx-auto max-w-5xl text-center">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Property Animation In The Wild
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                These are the Reels people
                <span className="block text-rust">
                  stopped to watch.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/55">
                Some of our strongest Instagram response has come from
                short property animations where one image is given a
                clear movement idea rather than trying to turn the whole
                listing into a video at once.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
              {instagramPosts.map((post) => (
                <article
                  key={post.url}
                  className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-4 shadow-soft md:p-6"
                >
                  <div className="mx-auto flex min-h-[680px] justify-center overflow-hidden rounded-[1.5rem] bg-[#f7f5f1]">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-captioned
                      data-instgrm-permalink={post.url}
                      data-instgrm-version="14"
                      style={{
                        background: "#fff",
                        border: 0,
                        borderRadius: "12px",
                        boxShadow: "none",
                        margin: "0 auto",
                        maxWidth: "540px",
                        minWidth: "326px",
                        padding: 0,
                        width: "100%",
                      }}
                    >
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noreferrer"
                        className="sr-only"
                      >
                        {post.title}
                      </a>
                    </blockquote>
                  </div>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-black/10 bg-white p-8 text-center md:p-10">
              <p className="font-display text-2xl leading-9 md:text-3xl">
                One image does not need ten different effects.
              </p>

              <p className="mx-auto mt-4 max-w-2xl leading-8 text-black/50">
                The strongest idea is often one controlled camera move,
                a small amount of believable motion and enough change to
                make someone stop without losing the property itself.
              </p>

              <Link
                href="/enquire"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:bg-rust"
              >
                Create one from my image
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* PRINCIPLE */}
        <section className="bg-white py-16 md:py-20">
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                  Keep The Property True
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  Movement should add life.
                  <span className="block text-rust">
                    Not redesign the building.
                  </span>
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-lg leading-8 text-black/60">
                  AI animation can create impressive movement, but it can
                  also change windows, shift walls, replace furniture or
                  distort the proportions that made the original property
                  image work.
                </p>

                <p className="mt-5 leading-8 text-black/50">
                  Our direction focuses on controlling the camera and
                  adding believable movement around the property while
                  protecting the defining architecture and visual details
                  wherever possible.
                </p>

                <p className="mt-6 font-display text-2xl leading-9">
                  The property stays the hero. The movement gives someone
                  another reason to notice it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GOOD FOR */}
        <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
          <div className="container-shell">
            <div className="mb-12 max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Where It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                One animation can create
                <span className="block text-rust">
                  a completely new campaign moment.
                </span>
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {goodFor.map((item) => (
                <article
                  key={item.number}
                  className="rounded-[1.75rem] border border-black/10 bg-white p-7"
                >
                  <p className="font-mono text-[9px] font-semibold tracking-[0.16em] text-rust">
                    {item.number}
                  </p>

                  <h3 className="mt-5 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/50">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRICE */}
        <section className="bg-ink py-16 text-white md:py-20">
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                  Single Property Reel
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                  One finished property animation.
                  <span className="block text-rust">
                    $245 + GST.
                  </span>
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">
                  Supply one property image or render and we will develop
                  the animation direction, generate the movement and
                  deliver one vertical scene of up to 10 seconds.
                </p>

                <p className="mt-5 max-w-3xl leading-8 text-white/40">
                  This option is designed for a single image and one
                  finished animation. Projects requiring multiple scenes,
                  image enhancement, campaign storytelling or a complete
                  Reel are better suited to our Story Packages.
                </p>
              </div>

              <div className="lg:text-right">
                <p className="font-display text-6xl font-semibold">
                  $245
                </p>

                <p className="mt-1 text-sm text-white/35">
                  + GST
                </p>

                <Link
                  href="/enquire"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Send us your image
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DIY OR DONE FOR YOU */}
        <section className="bg-[#f7f5f1] py-16 md:py-20">
          <div className="container-shell">
            <div className="mb-10 max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Want To Try It Yourself First?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the prompt.
                <span className="block text-rust">
                  Or send the image to us.
                </span>
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              <Link
                href="/free-property-animation-prompt"
                className="group flex min-h-[300px] flex-col rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
              >
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Free
                </p>

                <h3 className="mt-6 font-display text-3xl font-semibold">
                  Try one prompt
                </h3>

                <p className="mt-4 flex-1 leading-7 text-black/50">
                  Download one property animation prompt and experiment
                  with creating the movement yourself.
                </p>

                <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                  Get the free prompt
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>

              <Link
                href="/property-animation-prompt-pack"
                className="group flex min-h-[300px] flex-col rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
              >
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  $7
                </p>

                <h3 className="mt-6 font-display text-3xl font-semibold">
                  Get 10 prompts
                </h3>

                <p className="mt-4 flex-1 leading-7 text-black/50">
                  Use ready-to-adapt animation prompts across residential,
                  commercial, hospitality and development scenes.
                </p>

                <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                  Explore the prompt pack
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>

              <Link
                href="/enquire"
                className="group flex min-h-[300px] flex-col rounded-[2rem] border border-rust bg-ink p-8 text-white transition hover:shadow-soft"
              >
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                  $245 + GST
                </p>

                <h3 className="mt-6 font-display text-3xl font-semibold">
                  We create it for you
                </h3>

                <p className="mt-4 flex-1 leading-7 text-white/50">
                  Send us the image and we will develop the direction,
                  create the animation and deliver the finished Reel-ready
                  scene.
                </p>

                <div className="mt-7 inline-flex items-center gap-2 font-semibold text-brassBright">
                  Animate my property
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* STORY PACKAGE BRIDGE */}
        <section className="border-t border-black/10 bg-white py-16 md:py-20">
          <div className="container-shell">
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                    Need More Than One Scene?
                  </p>

                  <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                    Build a complete property story instead.
                  </h2>

                  <p className="mt-4 max-w-3xl leading-7 text-black/50">
                    Our Story Packages combine enhanced property imagery,
                    animation and campaign storytelling when one Reel is
                    only the beginning.
                  </p>
                </div>

                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:bg-rust"
                >
                  Compare story packages
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}