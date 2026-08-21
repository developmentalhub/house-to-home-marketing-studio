import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works | Real Estate Media House",
  description:
    "See how Real Estate Media House turns existing property photography, renders and footage into enhanced visuals, animation and finished campaign content.",
  alternates: {
    canonical: `${SITE_URL}/how-it-works`,
  },
  openGraph: {
    title: "How It Works | Real Estate Media House",
    description:
      "Send the property media you already have. We turn selected assets into fresh stills, animation and campaign content.",
    url: `${SITE_URL}/how-it-works`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg`,
        alt: "Existing property photography transformed into additional marketing content",
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

export default function HowItWorksPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                How It Works
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Start with the media
                <span className="block text-rust">
                  you already have.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60 md:text-xl">
                You send us the property photography, renders or footage
                already created for the campaign. We turn selected assets into
                more useful visual content.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Show us your media
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/explore"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 font-semibold transition hover:bg-white hover:text-ink"
                >
                  Explore examples
                </Link>
              </div>
            </div>

            <YouTubeVideoCarousel
              items={videos}
              eyebrow="See The Process In Action"
              heading="Still property media can become moving campaign content."
              description="Residential, commercial and development imagery can all become fresh visual assets without organising another property shoot."
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Four Steps
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
                  text: "More attention, a different audience, furniture, lifestyle, commercial use, development visualisation or movement.",
                },
                {
                  number: "03",
                  title: "Choose The Strongest Assets",
                  text: "We focus on the images and scenes with the most potential to become useful new campaign content.",
                },
                {
                  number: "04",
                  title: "Create The New Campaign Assets",
                  text: "Use the finished stills, animated scenes or Reel alongside the original property media.",
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

      {/* BEFORE AFTER */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/lifestyle/kitchen-before.jpeg"
                after="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                beforeAlt="Original property photography"
                afterAlt="Property photography transformed into additional lifestyle marketing content"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                First, Change The Story
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The original photo stays useful.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                We are not replacing the property shoot. We are extending it
                with additional visual directions that can be used throughout
                the campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CAN BE CREATED */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-shell">
          <div className="mb-9 max-w-4xl">
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
                text: "Create stronger finished stills from existing property photography.",
              },
              {
                number: "02",
                title: "Lifestyle",
                text: "Add people, atmosphere and activity to create a more human campaign moment.",
              },
              {
                number: "03",
                title: "Furniture & Styling",
                text: "Help buyers understand empty rooms with a clearer sense of scale and purpose.",
              },
              {
                number: "04",
                title: "Commercial Visualisation",
                text: "Show a vacant property as a relevant possible use for the audience being targeted.",
              },
              {
                number: "05",
                title: "Property Animation",
                text: "Turn selected still images into short moving property scenes.",
              },
              {
                number: "06",
                title: "Finished Reel",
                text: "Combine several transformed and animated scenes into one finished vertical video.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-[1.75rem] border border-black/10 bg-[#f7f5f1] p-7"
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

      {/* PROPERTY TYPES */}
      <section className="bg-ink py-14 text-white md:py-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Different Property Types
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Same process.
                <br />
                Different marketing problem.
              </h2>
            </div>

            <div className="space-y-2">
              {[
                {
                  title: "Residential",
                  text: "Lifestyle, furniture, atmosphere, facade content and property animation.",
                  href: "/residential-property-animation",
                },
                {
                  title: "Commercial",
                  text: "Industry specific visualisation, vacant property transformation and commercial animation.",
                  href: "/commercial-property-visualisation",
                },
                {
                  title: "Childcare",
                  text: "Development visualisation, completed centre concepts, active environments and animation.",
                  href: "/childcare-development-visualisation",
                },
              ].map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group grid gap-4 border-b border-white/10 py-6 sm:grid-cols-[55px_0.7fr_1.3fr_auto] sm:items-center"
                >
                  <p className="font-mono text-[9px] text-brassBright">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-white/45">{item.text}</p>

                  <ArrowRight
                    size={18}
                    className="text-brassBright transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Choose The Amount
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                From a small refresh to a finished Reel.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/55">
                Five campaign options let you choose how many enhanced images
                and animated scenes the property needs, with a custom option
                for developments.
              </p>

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

      {/* PAYMENT */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-16">
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
                  50% deposit to begin. Balance before use.
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
      <section className="bg-rust px-6 py-18 text-white md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            One Shoot. More Campaign Content.
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Show us what you already have.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the property media and tell us what the campaign needs to do
            next.
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