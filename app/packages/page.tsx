import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clapperboard,
  Images,
  Layers3,
  Play,
  Sparkles,
} from "lucide-react";

const packages = [
  {
    name: "Starter Content Pack",
    price: "$495 + GST",
    eyebrow: "A first set of content",
    description:
      "A quick way to get more from a single listing's existing photography, without a full campaign build.",
    image: "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
    imageAlt: "Kitchen transformed into premium property marketing content",
    icon: Sparkles,
    inclusions: [
      "5 custom property graphics",
      "1 short animation",
      "Social ready delivery",
      "Created from client supplied photography",
    ],
    idealFor:
      "A single listing that needs more than the standard agency photo set.",
  },
  {
    name: "Property Content Pack",
    price: "$795 + GST",
    eyebrow: "Enough to carry a campaign",
    description:
      "A complete set of graphics, animation and a vertical Reel, enough content to run a listing's full marketing window.",
    image: "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
    imageAlt: "Bedroom transformed into premium property marketing content",
    icon: Clapperboard,
    inclusions: [
      "8 custom property graphics",
      "2 short animations",
      "1 vertical Reel",
      "Social ready delivery",
      "Created from client supplied photography",
    ],
    idealFor:
      "Most listings running a proper campaign from launch through to sale.",
    featured: true,
  },
  {
    name: "Premium Launch Pack",
    price: "$1,295 + GST",
    eyebrow: "A complete visual campaign",
    description:
      "The full treatment for a bigger launch, built to carry a development or feature listing across every format.",
    image: "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
    imageAlt: "Bathroom transformed into premium property marketing content",
    icon: Layers3,
    inclusions: [
      "12 custom property graphics",
      "3 short animations",
      "2 vertical Reels",
      "2 launch graphics",
      "Multiple social formats",
      "Created from client supplied photography",
    ],
    idealFor:
      "Developments, feature properties and agents wanting a stronger launch moment.",
  },
];

const addOns = [
  { title: "Additional property graphic", price: "From $65" },
  { title: "Additional short animation", price: "From $150" },
  { title: "Additional vertical Reel", price: "From $180" },
  { title: "Additional launch graphic", price: "From $95" },
  { title: "Extra format resize (square, portrait, landscape)", price: "From $40" },
  { title: "Rush delivery", price: "From $120" },
];

export default function PackagesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        </div>

        <div className="container-shell relative z-10 grid min-h-[680px] items-end gap-10 py-20 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-brassBright">
              Real Estate Media House packages
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] md:text-7xl">
              Priced per property, not per month.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Send us the photography you already have and choose the pack
              that matches the size of the launch. Larger development
              campaigns are available on request.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink"
              >
                Transform My Property
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/before-after"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur"
              >
                See transformations
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur-md">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Not sure which pack fits?
            </p>

            <h2 className="mt-4 font-display text-2xl font-semibold">
              Send us the photos and tell us about the launch.
            </h2>

            <p className="mt-4 leading-7 text-white/65">
              We will recommend the pack that gets the most out of the images
              you already have.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-cream">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-7 shadow-soft">
              <Images className="h-9 w-9 text-rust" />

              <p className="mt-5 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-rust">
                You send
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold">
                Your existing property photography
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Listing photos, renders or footage you already have, ready to
                be turned into something more.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-7 shadow-soft">
              <Sparkles className="h-9 w-9 text-rust" />

              <p className="mt-5 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-rust">
                We create
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold">
                Graphics, animation and Reels
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Creative editing, digital lifestyle staging, motion graphics
                and vertical video, built from what you supply.
              </p>
            </div>

            <div className="rounded-[2rem] bg-ink p-7 text-white shadow-soft">
              <Play className="h-9 w-9 text-brassBright" />

              <p className="mt-5 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
                You receive
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold">
                Ready to use visual content
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                Finished graphics, animations and Reels delivered as files,
                ready to post. No captions, scheduling or posting included.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-rust">
              Project packages
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              One project. One content pack. Everything you need to launch it.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Every pack is created entirely from the photography you supply.
              Choose the size that matches the launch.
            </p>
          </div>

          <div className="mt-14 grid gap-8">
            {packages.map((item, index) => {
              const Icon = item.icon;
              const reverse = index % 2 === 1;

              return (
                <article
                  key={item.name}
                  className={`grid overflow-hidden rounded-[2.5rem] border shadow-soft lg:grid-cols-2 ${
                    item.featured ? "border-rust bg-cream" : "border-black/5 bg-white"
                  }`}
                >
                  <div className={`relative min-h-[430px] ${reverse ? "lg:order-2" : ""}`}>
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 rounded-full bg-white/95 px-4 py-2 font-mono text-sm font-semibold text-ink shadow">
                      {item.price}
                    </div>
                  </div>

                  <div className={`flex items-center p-8 md:p-12 ${reverse ? "lg:order-1" : ""}`}>
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand">
                          <Icon size={23} />
                        </div>

                        {item.featured && (
                          <span className="rounded-full bg-rust px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white">
                            Most booked
                          </span>
                        )}
                      </div>

                      <p className="mt-7 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-rust">
                        {item.eyebrow}
                      </p>

                      <h3 className="mt-3 font-display text-4xl font-semibold">
                        {item.name}
                      </h3>

                      <p className="mt-5 text-lg leading-8 text-black/60">
                        {item.description}
                      </p>

                      <ul className="mt-7 grid gap-3">
                        {item.inclusions.map((detail) => (
                          <li key={detail} className="flex items-start gap-3 text-black/70">
                            <Check size={18} className="mt-1 shrink-0 text-rust" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 border-t border-black/10 pt-6">
                        <p className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-black/40">
                          Ideal for
                        </p>

                        <p className="mt-3 leading-7 text-black/60">
                          {item.idealFor}
                        </p>
                      </div>

                      <Link
                        href="/enquire"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
                      >
                        Ask about this pack
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-center font-mono text-xs uppercase tracking-wide text-black/45">
            Custom quotes available for larger development campaigns
          </p>
        </div>
      </section>

      <section className="section-space bg-cream">
        <div className="container-shell">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-ink text-white shadow-soft lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[420px]">
              <Image
                src="/property-images/website/lifestyle/foyer-after.jpeg"
                alt="Foyer transformed into premium property marketing content"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            </div>

            <div className="p-8 md:p-12">
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-brassBright">
                Add to any pack
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Need a little more than the pack includes?
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Add individual graphics, animations or Reels to any package
                as the project needs them.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {addOns.map((option) => (
                  <div
                    key={option.title}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <h3 className="font-semibold">{option.title}</h3>
                    <p className="font-mono text-sm text-brassBright">{option.price}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/enquire"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink"
              >
                Ask about add-ons
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-rust">
              Send us your photos
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              You do not need to know the perfect pack before you enquire.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
              Tell us how many images you have and what the launch needs. We
              will recommend the pack that gets the most out of them.
            </p>

            <Link
              href="/enquire"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:bg-rust"
            >
              Transform My Property
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}