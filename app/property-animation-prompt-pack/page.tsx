import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  FileText,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "10 Property Animation Prompts | Real Estate Media House",
  description:
    "Get 10 ready-to-adapt property animation prompts for residential, commercial, hotel, development and architectural visualisation Reels.",
  alternates: {
    canonical: `${SITE_URL}/property-animation-prompt-pack`,
  },
  openGraph: {
    title:
      "10 Property Animation Prompts | Real Estate Media House",
    description:
      "A $7 property animation prompt pack designed to help you create better architectural and real estate Reel animations.",
    url: `${SITE_URL}/property-animation-prompt-pack`,
    type: "website",
  },
};

const prompts = [
  {
    number: "01",
    title: "Exterior Arrival",
    description:
      "Create a cinematic arrival moment using subtle camera movement, environmental motion and a strong sense of place.",
  },
  {
    number: "02",
    title: "Living Room Movement",
    description:
      "Bring a living space to life while keeping the room proportions, furniture placement and architecture consistent.",
  },
  {
    number: "03",
    title: "Kitchen Lifestyle",
    description:
      "Add believable camera movement and atmosphere to a kitchen scene without letting the animation distort the cabinetry or layout.",
  },
  {
    number: "04",
    title: "Bedroom Morning Light",
    description:
      "Use softer movement, natural light and subtle fabric motion to create a calm residential lifestyle scene.",
  },
  {
    number: "05",
    title: "Pool & Outdoor Entertaining",
    description:
      "Animate water, planting, light and outdoor activity while keeping the built environment stable.",
  },
  {
    number: "06",
    title: "Commercial Space In Use",
    description:
      "Turn an empty or quiet commercial property into a scene that helps the right operator imagine the space functioning.",
  },
  {
    number: "07",
    title: "Development Transformation",
    description:
      "Guide the movement from an existing site or early-stage image toward a more complete development visual.",
  },
  {
    number: "08",
    title: "Hotel Lobby Walkthrough",
    description:
      "Create a polished hospitality walkthrough with controlled forward camera movement and believable guest activity.",
  },
  {
    number: "09",
    title: "Childcare Activity Scene",
    description:
      "Add appropriate movement and life to childcare environments while protecting the original room or outdoor layout.",
  },
  {
    number: "10",
    title: "Dusk & Evening Atmosphere",
    description:
      "Shift the feeling of a property using lighting, reflections and restrained environmental movement.",
  },
];

const promptStructure = [
  {
    number: "01",
    title: "Scene Purpose",
    text:
      "What the animation is trying to communicate before any movement is added.",
  },
  {
    number: "02",
    title: "Camera Direction",
    text:
      "Clear instructions for how the camera should move through or around the scene.",
  },
  {
    number: "03",
    title: "Movement",
    text:
      "What should move naturally within the scene, such as people, curtains, trees, water or reflections.",
  },
  {
    number: "04",
    title: "What Must Stay True",
    text:
      "The architectural and property details that should not be redesigned, distorted or replaced.",
  },
  {
    number: "05",
    title: "Atmosphere",
    text:
      "The lighting, pace and mood that help the scene feel intentional rather than randomly animated.",
  },
];

export default function PropertyAnimationPromptPackPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">

      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Property Reel Prompt Pack
              </p>

              <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                10 prompts to help you make
                <span className="block text-rust">
                  property images move.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
                A practical set of ready-to-adapt animation prompts for
                real estate, architectural visualisation, development and
                property marketing Reels.
              </p>

              <p className="mt-5 max-w-2xl leading-8 text-white/45">
                Each prompt has been structured around the details that
                matter most when animating property images: camera movement,
                architectural accuracy, believable motion and atmosphere.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href="/property-animation-prompt-pack/buy"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Get the 10 prompts for $7
                  <ArrowRight size={18} />
                </Link>

                <p className="text-sm text-white/35">
                  Instant PDF access after purchase.
                </p>
              </div>
            </div>

            {/* PRODUCT CARD */}
            <div className="mx-auto w-full max-w-xl">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-soft">
                <div className="overflow-hidden rounded-[1.65rem] bg-[#f7f5f1] text-ink">

                  <div className="relative min-h-[300px]">
                    <img
                      src="/images/arch-viz-reel-animation.png"
                      alt="Property Reel Animation Prompt Pack"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-8 md:p-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white">
                      <FileText size={24} />
                    </div>

                    <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                      Digital Prompt Pack
                    </p>

                    <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">
                      10 Property Reel Animation Prompts
                    </h2>

                    <p className="mt-5 leading-7 text-black/50">
                      Built for property marketers, agents, developers,
                      visualisers and content creators who want a stronger
                      starting point for AI animation.
                    </p>

                    <div className="mt-8 border-y border-black/10 py-6">
                      <div className="flex items-end justify-between gap-6">
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/35">
                            Price
                          </p>

                          <p className="mt-2 font-display text-5xl font-semibold">
                            $7
                          </p>

                          <p className="mt-1 text-sm text-black/35">
                            AUD
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/35">
                            Format
                          </p>

                          <p className="mt-2 text-sm font-semibold text-black/60">
                            PDF
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 text-sm leading-6 text-black/45">
                      Use the prompts as starting points and change the
                      scene details to suit your own property image,
                      animation platform and campaign.
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Built For Property Content
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with more direction.
                <span className="block text-rust">
                  Spend less time guessing.
                </span>
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-black/60">
                AI animation tools can create impressive movement, but
                vague prompting can also cause walls to bend, windows to
                shift, furniture to change or camera movement to feel
                completely disconnected from the property.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                These prompts are designed to give you a stronger
                framework before you generate, with clear direction
                around the property, the camera and the motion you
                actually want.
              </p>

              <p className="mt-6 font-display text-2xl leading-9">
                You still bring your own image and creative judgement.
                The prompt gives the animation model better instructions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROMPTS */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">

          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              The 10 Prompt Scenarios
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Different scenes need
              <span className="block text-rust">
                different movement.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
              The pack covers a range of residential, commercial,
              hospitality and development scenes so you are not trying
              to force the same animation style onto every property.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">

            {prompts.map((item) => (
              <article
                key={item.number}
                className="rounded-[1.75rem] border border-black/10 bg-white p-7 md:p-8"
              >
                <div className="grid grid-cols-[48px_1fr] gap-5">

                  <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-rust">
                    {item.number}
                  </p>

                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-black/50">
                      {item.description}
                    </p>
                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* PROMPT STRUCTURE */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How The Prompts Are Built
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Not just one long paragraph
                <span className="block text-rust">
                  of vague instructions.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-black/50">
                Each example is designed to make you think about the
                different parts of the animation separately before they
                are brought together.
              </p>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">

              {promptStructure.map((item) => (
                <div
                  key={item.number}
                  className="grid gap-4 py-6 sm:grid-cols-[55px_0.55fr_1.45fr]"
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

      {/* FREE SAMPLE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">

          <div className="grid gap-8 rounded-[2rem] border border-black/10 bg-white p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Not Sure Yet?
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                Try one prompt first.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-black/50">
                Download the free architectural visualisation prompt and
                see how the structure works before purchasing the full
                pack.
              </p>
            </div>

            <Link
              href="/free-property-animation-prompt"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 font-semibold text-ink transition hover:border-rust hover:text-rust"
            >
              Get the free prompt
              <ArrowRight size={17} />
            </Link>

          </div>
        </div>
      </section>

      {/* BUY */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Get The Full Pack
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                10 property animation prompts.
                <span className="block text-rust">
                  $7 AUD.
                </span>
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">
                Download the complete prompt pack and use the examples
                as starting points for your own property animation
                experiments.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/40">
                After payment, you will be taken directly to the PDF
                download page and receive the download link by email.
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
                href="/property-animation-prompt-pack/buy"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                Buy the prompt pack
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
              Need More Than A Prompt?
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              We can create the property
              <span className="block text-rust">
                animation for you.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/55">
              Real Estate Media House creates finished property visuals
              and animation for residential, commercial, childcare,
              hospitality and development projects.
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