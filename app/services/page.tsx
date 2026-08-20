"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  ArrowRight,
  Building2,
  Car,
  Clapperboard,
  Images,
  PawPrint,
  Play,
  Sparkles,
  SunMedium,
  Trees,
  Utensils,
  Waves,
  X,
} from "lucide-react";

type ServiceItem = {
  id: string;
  title: string;
  category: "still" | "animation";
  eyebrow: string;
  description: string;
  image?: string;
  icon: React.ElementType;
};

const stillServices: ServiceItem[] = [
  {
    id: "lifestyle",
    title: "Lifestyle",
    category: "still",
    eyebrow: "Enhanced Still",
    description:
      "Add believable people, families, pets and activity to help buyers imagine the property being lived in.",
    image:
      "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
    icon: Sparkles,
  },
  {
    id: "people-pets",
    title: "People & Pets",
    category: "still",
    eyebrow: "Enhanced Still",
    description:
      "Introduce people and pets naturally into interiors, gardens, pools and outdoor spaces.",
    icon: PawPrint,
  },
  {
    id: "food",
    title: "Food & Entertaining",
    category: "still",
    eyebrow: "Enhanced Still",
    description:
      "Style kitchens, dining tables and entertaining areas with food, drinks, flowers and believable social moments.",
    icon: Utensils,
  },
  {
    id: "furniture",
    title: "Furniture & Styling",
    category: "still",
    eyebrow: "Enhanced Still",
    description:
      "Add furniture, artwork, rugs, plants and decorative styling to unfinished or empty spaces.",
    image:
      "/property-images/website/staging/living-room-after.jpeg",
    icon: Images,
  },
  {
    id: "lighting",
    title: "Lighting",
    category: "still",
    eyebrow: "Enhanced Still",
    description:
      "Improve atmosphere with warmer interiors, better exterior lighting, golden hour or evening treatments.",
    icon: SunMedium,
  },
  {
    id: "landscape",
    title: "Landscape",
    category: "still",
    eyebrow: "Enhanced Still",
    description:
      "Improve lawns, planting, gardens and landscaping so new or unfinished environments feel established.",
    icon: Trees,
  },
  {
    id: "pool",
    title: "Pool",
    category: "still",
    eyebrow: "Enhanced Still",
    description:
      "Bring pools and outdoor entertaining areas to life with better water, reflections, furniture and lifestyle.",
    icon: Waves,
  },
  {
    id: "cars",
    title: "Cars & Activity",
    category: "still",
    eyebrow: "Enhanced Still",
    description:
      "Add vehicles and believable activity around driveways, developments and commercial spaces.",
    icon: Car,
  },
];

const animationServices: ServiceItem[] = [
  {
    id: "make-it-move",
    title: "Make It Move",
    category: "animation",
    eyebrow: "Animation",
    description:
      "Turn a supplied still image into a cinematic motion scene with depth, camera movement and subtle environmental activity.",
    icon: Play,
  },
  {
    id: "day-night",
    title: "Day → Night",
    category: "animation",
    eyebrow: "Animation",
    description:
      "Move a property through daylight, golden hour and into evening as interior and exterior lighting comes alive.",
    icon: SunMedium,
  },
  {
    id: "furniture-animation",
    title: "Furniture Appearing",
    category: "animation",
    eyebrow: "Animation",
    description:
      "Animate furniture, rugs, artwork and styling progressively appearing inside an empty room.",
    icon: Images,
  },
  {
    id: "car-arrival",
    title: "Show The Arrival",
    category: "animation",
    eyebrow: "Animation",
    description:
      "Create a vehicle arrival, garage opening or other cinematic entry moment around the property.",
    icon: Car,
  },
  {
    id: "pool-motion",
    title: "Pool Activation",
    category: "animation",
    eyebrow: "Animation",
    description:
      "Introduce water movement, reflections, people and subtle activity around pools and outdoor spaces.",
    icon: Waves,
  },
  {
    id: "build",
    title: "Build It",
    category: "animation",
    eyebrow: "Build Animation",
    description:
      "Show a building rising from the site through construction stages to the finished development.",
    icon: Building2,
  },
  {
    id: "demolition",
    title: "Transform Old → New",
    category: "animation",
    eyebrow: "Build Animation",
    description:
      "Animate an existing building being removed before revealing the proposed new development.",
    icon: Clapperboard,
  },
  {
    id: "reel",
    title: "Finished Property Reel",
    category: "animation",
    eyebrow: "Property Reel",
    description:
      "Combine multiple enhanced and animated property scenes into one finished vertical Reel with cinematic transitions.",
    icon: Play,
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] =
    useState<ServiceItem | null>(null);

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                What We Create
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.96] tracking-[-0.035em] md:text-7xl lg:text-[5.7rem]">
                Enhance the image.
                <span className="block text-white/35">
                  Then make it move.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/60">
                We work with the property photography and renders you already
                have, then transform the strongest scenes into enhanced stills
                and cinematic motion.
              </p>

              <Link
                href="/explore"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Explore examples
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED STILLS */}
      <section className="py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Enhanced Stills
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Change what&apos;s inside the image.
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-black/55">
                Use your existing property photography as the starting point
                and introduce the details that make the scene feel warmer,
                fuller and more aspirational.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stillServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOTION */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Animation
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Make the moment move.
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-white/55">
                Selected stills can become short animated scenes, longer
                transitions or complete property Reels.
              </p>

              <Link
                href="/video-library"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-brassBright"
              >
                Watch video examples
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {animationServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  dark
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Packages
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                More animation as the package grows.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
                Every package includes enhanced still images. Higher packages
                include more animated scenes, longer motion and eventually a
                finished Property Reel.
              </p>
            </div>

            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
            >
              Compare packages
              <ArrowRight size={18} />
            </Link>
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
            Have the images?
            <br />
            Let&apos;s do something with them.
          </h2>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Start a project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* MODAL */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm md:p-8"
          onMouseDown={() => setSelectedService(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-[#f7f5f1] shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-lg transition hover:bg-ink hover:text-white"
              aria-label="Close preview"
            >
              <X size={20} />
            </button>

            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-t-[2rem] bg-ink lg:min-h-[650px] lg:rounded-l-[2rem] lg:rounded-tr-none">
                {selectedService.image ? (
                  <Image
                    src={selectedService.image}
                    alt={`${selectedService.title} example`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-white">
                    <div>
                      <selectedService.icon
                        size={32}
                        className="mx-auto text-brassBright"
                      />

                      <p className="mt-6 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brassBright">
                        Example in production
                      </p>

                      <h3 className="mt-3 font-display text-4xl font-semibold">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center p-8 md:p-10 lg:p-12">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                    {selectedService.eyebrow}
                  </p>

                  <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                    {selectedService.title}
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-black/55">
                    {selectedService.description}
                  </p>

                  <Link
                    href="/enquire"
                    className="mt-9 inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3.5 font-semibold text-white transition hover:bg-ink"
                  >
                    I want something like this
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ServiceCard({
  service,
  onClick,
  dark = false,
}: {
  service: ServiceItem;
  onClick: () => void;
  dark?: boolean;
}) {
  const Icon = service.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group min-h-[290px] rounded-[1.8rem] border p-7 text-left transition hover:-translate-y-1 ${
        dark
          ? "border-white/10 bg-white/5 hover:bg-white/10"
          : "border-black/10 bg-white hover:border-rust hover:shadow-soft"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full ${
            dark
              ? "bg-white/10 text-brassBright"
              : "bg-[#f7f5f1] text-rust"
          }`}
        >
          <Icon size={18} />
        </div>

        <ArrowRight
          size={17}
          className={`transition group-hover:translate-x-1 ${
            dark ? "text-white/25" : "text-black/25"
          }`}
        />
      </div>

      <p
        className={`mt-10 font-mono text-[9px] font-semibold uppercase tracking-[0.17em] ${
          dark ? "text-brassBright" : "text-rust"
        }`}
      >
        {service.eyebrow}
      </p>

      <h3
        className={`mt-2 font-display text-2xl font-semibold ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {service.title}
      </h3>

      <p
        className={`mt-3 leading-7 ${
          dark ? "text-white/45" : "text-black/50"
        }`}
      >
        {service.description}
      </p>
    </button>
  );
}