import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Download,
  FileText,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Free Property Animation Prompt | Real Estate Media House",
  description:
    "Download a free property animation prompt showing how we structure camera movement, architectural accuracy, atmosphere and motion for AI property Reels.",
  alternates: {
    canonical: `${SITE_URL}/free-property-animation-prompt`,
  },
  openGraph: {
    title:
      "Free Property Animation Prompt | Real Estate Media House",
    description:
      "See how a property image can be turned into an animated Reel with a detailed architectural visualisation prompt.",
    url: `${SITE_URL}/free-property-animation-prompt`,
    type: "website",
  },
};

const included = [
  "A complete property animation prompt",
  "Camera movement direction",
  "Architectural accuracy instructions",
  "Movement and atmosphere guidance",
  "Prompt structure you can adapt to your own property image",
];

export default function FreePropertyAnimationPromptPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Free Property Animation Prompt
              </p>

              <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Want to see how we make
                <span className="block text-rust">
                  a property image move?
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
                We have taken one of the prompt structures we use when
                creating property animation and turned it into a free
                downloadable guide.
              </p>

              <p className="mt-5 max-w-2xl leading-8 text-white/45">
                It shows you how we think about camera movement,
                architectural accuracy, atmosphere and what should
                remain unchanged when turning a still property image
                into an animated scene.
              </p>

              <a
                href="/pdf/architectural-viz-prompts-free-demo.pdf"
                download
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                <Download size={18} />
                Download the free prompt
              </a>

              <p className="mt-4 text-sm leading-6 text-white/35">
                Free PDF. No purchase required.
              </p>
            </div>

            <div className="mx-auto w-full max-w-xl">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-soft">
                <div className="rounded-[1.65rem] bg-[#f7f5f1] p-8 text-ink md:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white">
                    <FileText size={24} />
                  </div>

                  <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                    Free Download
                  </p>

                  <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">
                    Architectural Visualisation
                    Animation Prompt
                  </h2>

                  <p className="mt-5 leading-7 text-black/50">
                    A real example of how detailed animation direction
                    can help an AI video tool understand the camera,
                    property, movement and atmosphere you want to create.
                  </p>

                  <div className="mt-7 divide-y divide-black/10 border-y border-black/10">
                    {included.map((item, index) => (
                      <div
                        key={item}
                        className="grid grid-cols-[36px_1fr] gap-4 py-4"
                      >
                        <p className="font-mono text-[9px] font-semibold tracking-[0.16em] text-rust">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <p className="leading-6 text-black/60">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAID PROMPT PACK BANNER */}
      <section className="bg-[#f7f5f1] py-10 md:py-14">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
              <div className="relative min-h-[280px] lg:min-h-[360px]">
                <img
                  src="/images/arch-viz-reel-animation.png"
                  alt="Property reel animation prompt pack preview"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="flex items-center p-8 md:p-10 lg:p-12">
                <div className="max-w-xl">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                    Ready For More?
                  </p>

                  <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                    Get all 10 property
                    <span className="block text-rust">
                      Reel animation prompts.
                    </span>
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-black/55">
                    The full prompt pack gives you ten ready-to-adapt
                    animation ideas for residential, commercial,
                    hospitality, development and architectural
                    visualisation scenes.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <Link
                      href="/property-animation-prompt-pack"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:bg-rust"
                    >
                      See the $7 prompt pack
                      <ArrowRight size={18} />
                    </Link>

                    <p className="font-display text-3xl font-semibold text-ink">
                      $7 AUD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THE PROMPT MATTERS */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More Than "Make This Move"
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The detail in the prompt
                <span className="block text-rust">
                  changes the result.
                </span>
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-black/60">
                Property animation is not simply about asking an AI tool
                to animate a photograph. The direction needs to explain
                what the camera is doing, what can move, what should stay
                still and which architectural elements must remain true
                to the original property.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The free prompt gives you a starting point that you can
                adapt to your own image rather than beginning with a
                blank prompt box.
              </p>

              <p className="mt-6 font-display text-2xl leading-9">
                The property is still the hero. The animation should
                create movement around it rather than accidentally
                redesigning it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO LOOK FOR */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Inside The Prompt
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Notice what we tell
              <span className="block text-rust">
                the animation model to protect.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-[1.75rem] border border-black/10 bg-white p-7">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                01
              </p>

              <h3 className="mt-5 font-display text-2xl font-semibold">
                Architecture
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Walls, windows, doors, rooflines, proportions and
                permanent property features should remain consistent
                with the supplied image.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-white p-7">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                02
              </p>

              <h3 className="mt-5 font-display text-2xl font-semibold">
                Camera
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                The prompt tells the model whether the camera should
                push forward, glide sideways, rise, pan or remain almost
                still.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-white p-7">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                03
              </p>

              <h3 className="mt-5 font-display text-2xl font-semibold">
                Movement
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Small movements such as curtains, trees, people,
                reflections or light can make the scene feel alive
                without distracting from the property.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-white p-7">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                04
              </p>

              <h3 className="mt-5 font-display text-2xl font-semibold">
                Atmosphere
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Light, weather, reflections and pace all influence
                whether the final scene feels calm, luxurious, active
                or cinematic.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PAID PACK UPSELL */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Want More?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                One prompt is free.
                <span className="block text-rust">
                  The next 10 are $7.
                </span>
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">
                The Property Reel Prompt Pack includes ten detailed
                animation prompts designed for different property scenes,
                camera movements and marketing moments.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/40">
                Use them as starting points, change the details to suit
                your property and experiment with creating your own
                animated property content.
              </p>
            </div>

            <div className="lg:text-right">
              <p className="font-display text-5xl font-semibold">
                $7
              </p>

              <p className="mt-1 text-sm text-white/35">
                AUD
              </p>

              <Link
                href="/property-animation-prompt-pack"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                See the 10 prompt pack
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DONE FOR YOU */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Prefer Us To Create It?
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              You do not have to become
              <span className="block text-rust">
                your own animation studio.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/55">
              If you have a property image, render or project that needs
              more than a DIY prompt, Real Estate Media House can build
              the visual, movement and property story for you.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/explore"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:bg-rust"
              >
                See our animation work
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/enquire"
                className="inline-flex items-center rounded-full border border-black/15 px-7 py-4 font-semibold text-ink transition hover:border-rust hover:text-rust"
              >
                Show us your property
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}