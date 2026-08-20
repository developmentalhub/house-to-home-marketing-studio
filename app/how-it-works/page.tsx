import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Images,
  Layers3,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Send us your property photos",
    description:
      "Send through your existing listing photography, branding and any key property details you want featured.",
    icon: Images,
  },
  {
    number: "02",
    title: "Choose your content package",
    description:
      "Select the mix of graphics, lifestyle-enhanced imagery, animations and reels you want created for the property.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Tell us the look you want",
    description:
      "Let us know the audience, mood or lifestyle you want the property to communicate, from family living to luxury or investor-focused content.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "We bring the photos to life",
    description:
      "We transform ordinary property images into polished visual content using lifestyle staging, motion, graphic design and creative editing.",
    icon: WandSparkles,
  },
  {
    number: "05",
    title: "Review your content",
    description:
      "You review the first delivery and provide one round of reasonable changes where included in your selected package.",
    icon: Sparkles,
  },
  {
    number: "06",
    title: "Receive ready-to-use assets",
    description:
      "Download your final graphics, enhanced images, animations and reels in social-ready formats.",
    icon: Download,
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="bg-[#f3efe9] py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9f725c]">
            How it works
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            Send us your property photos.
            <br />
            We turn them into content.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">
            Real Estate Media House helps agents get more from the photography
            they already have by transforming standard listing images into
            premium social media and marketing content.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9f725c]">
              Simple process
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              One property. One content pack. Everything ready to use.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group rounded-[2rem] border border-neutral-200 bg-[#faf9f7] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8ddd2]">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <p className="text-sm font-semibold tracking-[0.16em] text-[#9f725c]">
                      {step.number}
                    </p>
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#171717] py-20 text-white md:py-28">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
              Start with one listing
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Your property photos deserve more than one post.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Send us your existing listing images and we&apos;ll transform them
              into premium graphics, lifestyle imagery, animations and reels
              designed to help the property stand out.
            </p>
          </div>

          <Link
            href="/enquire"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            Start a project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}