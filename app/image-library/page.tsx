import Link from "next/link";

import {
  ArrowRight,
  ImageIcon,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const transformations = [
  {
    id: 1,
    title: "Kitchen Lifestyle",
    category: "Lifestyle Enhancement",
    before: "/property-images/website/staging/kitchen-before.jpeg",
    after:
      "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
    description:
      "A standard kitchen photograph transformed with people, activity and atmosphere.",
  },
  {
    id: 2,
    title: "Bedroom",
    category: "Lifestyle Enhancement",
    before:
      "/property-images/website/lifestyle/bedroom-before.jpeg",
    after:
      "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
    description:
      "A standard bedroom photograph transformed into a more aspirational lifestyle scene.",
  },
  {
    id: 3,
    title: "Bathroom Lifestyle",
    category: "Lifestyle Enhancement",
    before:
      "/property-images/website/lifestyle/bathroom-before.jpeg",
    after:
      "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
    description:
      "Existing bathroom photography brought to life with lifestyle and human presence.",
  },
  {
    id: 4,
    title: "Foyer",
    category: "Lifestyle Enhancement",
    before:
      "/property-images/website/lifestyle/foyer-before.jpeg",
    after:
      "/property-images/website/lifestyle/foyer-after.jpeg",
    description:
      "A static entrance photograph transformed into a more welcoming and engaging lifestyle scene.",
  },
  {
    id: 5,
    title: "Kitchen Staging",
    category: "Digital Staging",
    before:
      "/property-images/website/staging/kitchen-before.jpeg",
    after:
      "/property-images/website/staging/kitchen-after.jpeg",
    description:
      "The same property photograph digitally transformed into a polished marketing image.",
  },
  {
    id: 6,
    title: "Living Room",
    category: "Digital Staging",
    before:
      "/property-images/website/staging/living-room-before.jpeg",
    after:
      "/property-images/website/staging/living-room-after.jpeg",
    description:
      "An empty living space transformed into a finished and styled property marketing image.",
  },
  {
    id: 7,
    title: "Ensuite",
    category: "Digital Staging",
    before:
      "/property-images/website/staging/ensuite-before.jpeg",
    after:
      "/property-images/website/staging/ensuite-after.jpeg",
    description:
      "A standard ensuite photograph transformed into a more polished visual for property marketing.",
  },
];

export default function ImageLibraryPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="overflow-hidden bg-ink text-white">
        <div className="container-shell py-24 md:py-32 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <ImageIcon size={18} className="text-brassBright" />

                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                  Image Library
                </p>
              </div>

              <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.96] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
                From ordinary
                <span className="block text-white/35">
                  to full of life.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/60">
                Drag across each image to see how standard property
                photography can be transformed with people, activity,
                atmosphere and digital styling.
              </p>

              <Link
                href="/enquire"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Transform your property
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div className="flex items-center gap-3">
              <Sparkles size={20} className="text-rust" />

              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                Image Transformation
              </p>
            </div>

            <p className="max-w-3xl font-display text-2xl leading-relaxed text-black/65 md:text-3xl">
              Take the photography you already have and turn it into imagery
              that helps buyers imagine the people, atmosphere and lifestyle
              behind the property.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED TRANSFORMATION */}
      <section className="py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Featured Transformation
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Same property.
                <br />
                Completely different feeling.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-black/50">
              Drag the handle across the image to reveal the transformation.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <BeforeAfterSlider
              before={transformations[0].before}
              after={transformations[0].after}
              beforeAlt="Original kitchen property photograph"
              afterAlt="Kitchen photograph enhanced with people and lifestyle"
            />
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                {transformations[0].category}
              </p>

              <h3 className="mt-2 font-display text-3xl font-semibold">
                {transformations[0].title}
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-black/50">
                {transformations[0].description}
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-black/45">
              <WandSparkles size={14} />
              Drag to compare
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION LIBRARY */}
      <section className="border-t border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-14">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Transformation Library
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Explore the before and afters.
            </h2>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-white">
                All
              </span>

              <span className="rounded-full border border-black/10 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-black/50">
                Lifestyle Enhancement
              </span>

              <span className="rounded-full border border-black/10 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-black/50">
                Digital Staging
              </span>
            </div>
          </div>

          <div className="grid gap-x-8 gap-y-16 lg:grid-cols-2">
            {transformations.slice(1).map((item, index) => (
              <article key={item.id}>
                <div className="overflow-hidden rounded-[1.75rem] bg-neutral-100 shadow-sm">
                  <BeforeAfterSlider
                    before={item.before}
                    after={item.after}
                    beforeAlt={`Original ${item.title} property photograph`}
                    afterAlt={`Enhanced ${item.title} property photograph`}
                  />
                </div>

                <div className="mt-6 flex items-start gap-5">
                  <p className="pt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                    {String(index + 2).padStart(2, "0")}
                  </p>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/35">
                      {item.category}
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-lg leading-7 text-black/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MESSAGE */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More than staging
              </p>

              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Buyers don&apos;t just look at rooms.
                They imagine a life inside them.
              </h2>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-black/55">
                Standard photography communicates the space. Lifestyle
                enhancement can communicate the experience.
              </p>

              <p className="mt-5 text-lg leading-8 text-black/55">
                People, movement and subtle activity can transform a static
                property photograph into a more engaging piece of marketing
                content.
              </p>
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
            Send us the boring one.
            <br />
            We&apos;ll bring it to life.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Start with the property photography you already have.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start a transformation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}