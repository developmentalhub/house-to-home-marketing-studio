import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Clapperboard,
  Download,
  Images,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Send us your property media",
    description:
      "Send through the professional photography, renders or footage you already have for the property.",
    icon: Images,
  },
  {
    number: "02",
    title: "Choose what you want brought to life",
    description:
      "Tell us which scenes you want enhanced with lifestyle, furniture, food, lighting, landscaping, cars, pool activity or other visual additions.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "We enhance the strongest images",
    description:
      "We transform selected stills into more engaging property scenes while keeping the property itself recognisable and believable.",
    icon: WandSparkles,
  },
  {
    number: "04",
    title: "We make selected scenes move",
    description:
      "Depending on your package, we create short animated moments using camera movement, lighting changes, arrivals, build sequences or other motion.",
    icon: Clapperboard,
  },
  {
    number: "05",
    title: "We build the campaign",
    description:
      "Larger packages include more animated scenes and can combine multiple moments into a finished vertical Property Reel.",
    icon: CheckCircle2,
  },
  {
    number: "06",
    title: "You receive the finished files",
    description:
      "Your enhanced images, animations and finished Reel are delivered ready to use in your property marketing.",
    icon: Download,
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                How It Works
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.96] tracking-[-0.035em] md:text-7xl lg:text-[5.7rem]">
                You already have
                <span className="block text-white/35">
                  the starting point.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/60">
                We start with the property photography, renders or footage you
                already have, enhance the strongest scenes and then add motion
                where it creates the most impact.
              </p>

              <Link
                href="/explore"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Explore what&apos;s possible
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE IDEA */}
      <section className="border-b border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                Simple by design
              </p>
            </div>

            <p className="max-w-4xl font-display text-2xl leading-relaxed text-black/65 md:text-3xl">
              First, we bring the image to life. Then, we make it move.
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              The Process
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              From supplied image to finished campaign.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group rounded-[2rem] border border-black/10 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-rust hover:shadow-soft"
                >
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f5f1] text-rust">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <p className="font-mono text-xs font-semibold tracking-[0.16em] text-rust">
                      {step.number}
                    </p>
                  </div>

                  <h3 className="mt-8 font-display text-2xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/50">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* STILL TO MOTION */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
              <Sparkles size={25} className="text-brassBright" />

              <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brassBright">
                Step One
              </p>

              <h2 className="mt-3 font-display text-4xl font-semibold">
                Enhance the still.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-white/50">
                Add people, pets, furniture, food, plants, landscaping, cars,
                better lighting, pool life and other details that help the
                property feel more complete.
              </p>

              <Link
                href="/image-library"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-brassBright"
              >
                View image transformations
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="rounded-[2rem] bg-white p-8 text-ink md:p-10">
              <Clapperboard size={25} className="text-rust" />

              <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                Step Two
              </p>

              <h2 className="mt-3 font-display text-4xl font-semibold">
                Make it move.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-black/50">
                Turn selected scenes into short animations, cinematic movement,
                day-to-night transitions, arrivals, build sequences or a
                finished Property Reel.
              </p>

              <Link
                href="/video-library"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Watch the motion library
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE NOTE */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Package Logic
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                More motion as the campaign grows.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-lg leading-8 text-black/55">
                Every package includes enhanced property imagery and animation.
                Higher packages include more animated scenes and longer motion.
                The Property Reel Campaign includes the finished vertical Reel.
              </p>

              <Link
                href="/packages"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
              >
                Compare packages
                <ArrowRight size={17} />
              </Link>
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
            Have the property media?
            <br />
            We&apos;ll take it from here.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Tell us about the property and what you&apos;d like brought to life.
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