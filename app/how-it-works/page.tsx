import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Images,
  MessageSquareText,
  WandSparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Send us your listing images",
    description:
      "Provide your current high-resolution property photography through a shared folder or image link.",
    icon: Images,
  },
  {
    number: "02",
    title: "Choose the transformation",
    description:
      "Select lifestyle enhancement, virtual staging, feature highlights or a combination of all three.",
    icon: MessageSquareText,
  },
  {
    number: "03",
    title: "Tell us about the likely buyer",
    description:
      "Let us know whether the property should appeal to families, couples, downsizers, pet owners or another buyer group.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "We create the visual story",
    description:
      "We develop a consistent direction for the images, paying attention to lighting, proportion, materials and believable everyday life.",
    icon: WandSparkles,
  },
  {
    number: "05",
    title: "Review the first delivery",
    description:
      "You review the completed visuals and provide one clear round of reasonable changes where included.",
    icon: CheckCircle2,
  },
  {
    number: "06",
    title: "Receive your campaign folder",
    description:
      "Download the approved website images and any selected social posts, Stories, videos and written captions.",
    icon: Download,
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <section className="section-space bg-cream">
        <div className="container-shell">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
            How it works
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            You already have the property photographs. We help you do more with
            them.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/60">
            House to Home gives busy real estate agents a simple way to turn
            existing listing images into warmer, more engaging visual
            campaigns.
          </p>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="rounded-[2rem] border border-black/10 bg-white p-8"
              >
                <div className="flex items-center justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand">
                    <Icon size={22} />
                  </div>

                  <p className="text-sm font-semibold tracking-[0.16em] text-clay">
                    {step.number}
                  </p>
                </div>

                <h2 className="mt-7 text-2xl font-semibold">{step.title}</h2>

                <p className="mt-4 leading-7 text-black/60">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-space bg-ink text-white">
        <div className="container-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
              Start with one property
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Tell us what your current listing images are missing.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              We will review the number of images and the transformation style
              you need before preparing a tailored quote.
            </p>
          </div>

          <Link
            href="/enquire"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink"
          >
            Request a quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}