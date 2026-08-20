"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  ArrowRight,
  Building2,
  Car,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  House,
  PawPrint,
  Play,
  Sparkles,
  SunMedium,
  Trees,
  Utensils,
  Waves,
  X,
} from "lucide-react";

type Transformation = {
  id: string;
  title: string;
  description: string;
  type: "still" | "animation";
  image?: string;
  video?: string;
  icon: React.ElementType;
  category: string;
};

type Scene = {
  id: string;
  title: string;
  original: string;
  transformations: Transformation[];
};

type PropertyExample = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  hero: string;
  icon: React.ElementType;
  scenes: Scene[];
};

const properties: PropertyExample[] = [
  {
    id: "standard-home",
    title: "Standard Home",
    eyebrow: "Residential",
    description:
      "See how a straightforward listing can be made warmer, more inviting and more memorable using the photography already supplied.",
    hero: "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
    icon: House,
    scenes: [
      {
        id: "kitchen",
        title: "Kitchen",
        original: "/property-images/website/staging/kitchen-before.jpeg",
        transformations: [
          {
            id: "kitchen-lifestyle",
            title: "Bring It To Life",
            description:
              "Introduce believable people and activity so the kitchen feels like a place someone could actually live in.",
            type: "still",
            image:
              "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
            icon: Sparkles,
            category: "Lifestyle",
          },
          {
            id: "kitchen-food",
            title: "Style The Kitchen",
            description:
              "Add food, drinks, flowers and subtle styling to create a more aspirational everyday moment.",
            type: "still",
            icon: Utensils,
            category: "Food & Entertaining",
          },
          {
            id: "kitchen-motion",
            title: "Make It Move",
            description:
              "Turn the still into a subtle cinematic animation with camera movement and depth.",
            type: "animation",
            icon: Play,
            category: "Animation",
          },
        ],
      },
      {
        id: "living",
        title: "Living Room",
        original:
          "/property-images/website/staging/living-room-before.jpeg",
        transformations: [
          {
            id: "living-furnished",
            title: "Furnish The Space",
            description:
              "Transform an empty room with furniture, artwork, rugs, plants and styling.",
            type: "still",
            image:
              "/property-images/website/staging/living-room-after.jpeg",
            icon: Sparkles,
            category: "Furniture & Styling",
          },
          {
            id: "living-people",
            title: "Add People & Pets",
            description:
              "Create a believable lived-in moment with people, pets or relaxed family activity.",
            type: "still",
            icon: PawPrint,
            category: "Lifestyle",
          },
          {
            id: "living-lighting",
            title: "Improve The Lighting",
            description:
              "Warm the scene, lift the atmosphere and create a more inviting property image.",
            type: "still",
            icon: SunMedium,
            category: "Lighting",
          },
        ],
      },
    ],
  },
  {
    id: "premium-home",
    title: "Premium Home",
    eyebrow: "Luxury Residential",
    description:
      "For premium listings, the transformation can become more cinematic with richer lifestyle scenes, lighting and motion.",
    hero: "/property-images/website/lifestyle/foyer-after.jpeg",
    icon: Sparkles,
    scenes: [
      {
        id: "premium-entry",
        title: "Entry",
        original:
          "/property-images/website/lifestyle/foyer-before.jpeg",
        transformations: [
          {
            id: "premium-entry-life",
            title: "Bring It To Life",
            description:
              "Introduce people and subtle movement to make the arrival experience feel more believable.",
            type: "still",
            image:
              "/property-images/website/lifestyle/foyer-after.jpeg",
            icon: Sparkles,
            category: "Lifestyle",
          },
          {
            id: "premium-arrival",
            title: "Show The Arrival",
            description:
              "Create an animated arrival with a premium vehicle, lighting and subtle human activity.",
            type: "animation",
            icon: Car,
            category: "Animation",
          },
        ],
      },
      {
        id: "premium-evening",
        title: "Exterior",
        original:
          "/property-images/website/lifestyle/foyer-before.jpeg",
        transformations: [
          {
            id: "premium-golden-hour",
            title: "Create Golden Hour",
            description:
              "Transform daylight into a warmer, more cinematic late-afternoon atmosphere.",
            type: "still",
            icon: SunMedium,
            category: "Lighting",
          },
          {
            id: "premium-night",
            title: "Day → Night",
            description:
              "Animate the property from daylight through sunset into evening as the lights come on.",
            type: "animation",
            icon: SunMedium,
            category: "Animation",
          },
        ],
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    eyebrow: "Commercial / Development",
    description:
      "Add activity, landscaping, cars and human scale to commercial imagery or architectural renders.",
    hero:
      "/property-images/website/staging/living-room-after.jpeg",
    icon: Building2,
    scenes: [
      {
        id: "commercial-exterior",
        title: "Exterior",
        original:
          "/property-images/website/staging/living-room-before.jpeg",
        transformations: [
          {
            id: "commercial-landscape",
            title: "Grow The Landscape",
            description:
              "Improve planting, lawns and surrounding landscape so the development feels established.",
            type: "still",
            icon: Trees,
            category: "Landscape",
          },
          {
            id: "commercial-activity",
            title: "Add Cars & Activity",
            description:
              "Introduce vehicles, pedestrians and everyday activity to show the development in use.",
            type: "still",
            icon: Car,
            category: "Lifestyle",
          },
          {
            id: "commercial-motion",
            title: "Make It Move",
            description:
              "Create subtle camera movement and activity from a static architectural image.",
            type: "animation",
            icon: Play,
            category: "Animation",
          },
        ],
      },
    ],
  },
  {
    id: "childcare",
    title: "Childcare Transformation",
    eyebrow: "Development Story",
    description:
      "Show the entire transformation from an existing site through demolition, construction and the finished operating centre.",
    hero:
      "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
    icon: Clapperboard,
    scenes: [
      {
        id: "childcare-build",
        title: "Development Sequence",
        original:
          "/property-images/website/lifestyle/bathroom-before.jpeg",
        transformations: [
          {
            id: "childcare-demolish",
            title: "Demolish Existing",
            description:
              "Animate the existing building being removed to reveal the cleared development site.",
            type: "animation",
            icon: Building2,
            category: "Build",
          },
          {
            id: "childcare-build-it",
            title: "Build It",
            description:
              "Show the proposed building rising from the site through construction stages.",
            type: "animation",
            icon: Clapperboard,
            category: "Build",
          },
          {
            id: "childcare-landscape",
            title: "Add Car Park & Landscape",
            description:
              "Complete the development with parking, planting, vehicles and finished external spaces.",
            type: "still",
            icon: Trees,
            category: "Landscape",
          },
          {
            id: "childcare-final",
            title: "Final Reveal",
            description:
              "Combine the development stages into a finished animated transformation story.",
            type: "animation",
            icon: Play,
            category: "Reel",
          },
        ],
      },
    ],
  },
];

export default function ExplorePage() {
  const [activePropertyId, setActivePropertyId] =
    useState("standard-home");

  const [activeSceneIndex, setActiveSceneIndex] = useState(0);

  const [selectedTransformation, setSelectedTransformation] =
    useState<Transformation | null>(null);

  const activeProperty =
    properties.find(
      (property) => property.id === activePropertyId,
    ) ?? properties[0];

  const activeScene =
    activeProperty.scenes[activeSceneIndex] ??
    activeProperty.scenes[0];

  function changeProperty(id: string) {
    setActivePropertyId(id);
    setActiveSceneIndex(0);
    setSelectedTransformation(null);
  }

  function previousScene() {
    setActiveSceneIndex((current) =>
      current === 0
        ? activeProperty.scenes.length - 1
        : current - 1,
    );
  }

  function nextScene() {
    setActiveSceneIndex((current) =>
      current === activeProperty.scenes.length - 1
        ? 0
        : current + 1,
    );
  }

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Explore
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.96] tracking-[-0.035em] md:text-7xl lg:text-[5.7rem]">
                Pick a property.
                <span className="block text-white/35">
                  See what could happen next.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/60">
                Browse our example properties and explore the different ways
                still photography and renders can be enhanced or animated.
              </p>

              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.17em] text-white/30">
                No editing tools. No uploads. Just ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY SELECTOR */}
      <section className="border-b border-black/10 bg-white">
        <div className="container-shell py-6">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {properties.map((property) => {
              const Icon = property.icon;
              const active =
                activePropertyId === property.id;

              return (
                <button
                  key={property.id}
                  type="button"
                  onClick={() =>
                    changeProperty(property.id)
                  }
                  className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
                    active
                      ? "border-ink bg-ink text-white"
                      : "border-black/10 bg-[#f7f5f1] hover:border-rust"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                      active
                        ? "bg-brassBright text-ink"
                        : "bg-white text-rust"
                    }`}
                  >
                    <Icon size={19} />
                  </div>

                  <div>
                    <p
                      className={`font-mono text-[9px] uppercase tracking-[0.16em] ${
                        active
                          ? "text-white/45"
                          : "text-rust"
                      }`}
                    >
                      {property.eyebrow}
                    </p>

                    <p className="mt-1 font-display text-lg font-semibold">
                      {property.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVE PROPERTY */}
      <section className="py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            {/* PROPERTY INTRO */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                {activeProperty.eyebrow}
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                {activeProperty.title}
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-8 text-black/55">
                {activeProperty.description}
              </p>

              <div className="mt-8 border-t border-black/10 pt-6">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-black/35">
                  Current scene
                </p>

                <p className="mt-2 font-display text-2xl font-semibold">
                  {activeScene.title}
                </p>
              </div>

              {activeProperty.scenes.length > 1 && (
                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={previousScene}
                    aria-label="Previous scene"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition hover:bg-ink hover:text-white"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-black/40">
                    {activeSceneIndex + 1} /{" "}
                    {activeProperty.scenes.length}
                  </span>

                  <button
                    type="button"
                    onClick={nextScene}
                    aria-label="Next scene"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition hover:bg-ink hover:text-white"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>

            {/* PROPERTY IMAGE */}
            <div>
              <div className="relative overflow-hidden rounded-[2.25rem] bg-ink">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={activeScene.original}
                    alt={`Original ${activeScene.title}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-ink shadow">
                    Original image
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-white/55">
                      What could happen here?
                    </p>

                    <p className="mt-2 font-display text-3xl font-semibold text-white">
                      Choose a transformation below.
                    </p>
                  </div>
                </div>
              </div>

              {/* TRANSFORMATION OPTIONS */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {activeScene.transformations.map(
                  (transformation) => {
                    const Icon = transformation.icon;

                    return (
                      <button
                        key={transformation.id}
                        type="button"
                        onClick={() =>
                          setSelectedTransformation(
                            transformation,
                          )
                        }
                        className="group rounded-[1.6rem] border border-black/10 bg-white p-6 text-left transition hover:-translate-y-1 hover:border-rust hover:shadow-soft"
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f5f1] text-rust transition group-hover:bg-rust group-hover:text-white">
                            <Icon size={18} />
                          </div>

                          <span
                            className={`rounded-full px-3 py-1.5 font-mono text-[8px] font-semibold uppercase tracking-[0.14em] ${
                              transformation.type ===
                              "animation"
                                ? "bg-ink text-white"
                                : "bg-[#f1eee8] text-black/45"
                            }`}
                          >
                            {transformation.type}
                          </span>
                        </div>

                        <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                          {transformation.category}
                        </p>

                        <h3 className="mt-2 font-display text-2xl font-semibold">
                          {transformation.title}
                        </h3>

                        <p className="mt-3 leading-7 text-black/50">
                          {transformation.description}
                        </p>

                        <div className="mt-6 flex items-center gap-2 font-semibold text-ink">
                          See example
                          <ArrowRight
                            size={16}
                            className="transition group-hover:translate-x-1"
                          />
                        </div>
                      </button>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLAIN STILL VS MOTION */}
      <section className="border-y border-black/10 bg-white py-20 md:py-24">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-[#f7f5f1] p-8 md:p-10">
              <Sparkles
                size={25}
                className="text-rust"
              />

              <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                Enhanced still
              </p>

              <h2 className="mt-3 font-display text-4xl font-semibold">
                Change what&apos;s inside the image.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-black/55">
                Add people, pets, furniture, food,
                landscaping, better lighting, cars, pool
                activity and other visual improvements.
              </p>
            </div>

            <div className="rounded-[2rem] bg-ink p-8 text-white md:p-10">
              <Play
                size={25}
                className="text-brassBright"
              />

              <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brassBright">
                Animation
              </p>

              <h2 className="mt-3 font-display text-4xl font-semibold">
                Then make the moment move.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-white/55">
                Create cinematic camera movement, lighting
                transitions, people moving, furniture
                appearing, vehicles arriving or entire
                buildings being constructed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE CONNECTION */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How packages work
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Every package starts with enhanced stills.
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-black/55">
                The higher the package, the more animated
                scenes and motion are included. Our top
                residential package combines multiple scenes
                into a finished vertical Property Reel.
              </p>

              <Link
                href="/packages"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
              >
                Compare packages
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-3">
              <PackageRow
                name="Property Refresh"
                price="$495"
                stills="5 enhanced images"
                motion="1 animation · up to 5 sec"
              />

              <PackageRow
                name="Property Campaign"
                price="$895"
                stills="8 enhanced images"
                motion="2 animations · up to 10 sec"
                featured
              />

              <PackageRow
                name="Premium Campaign"
                price="$1,295"
                stills="12 enhanced images"
                motion="3 animated scenes · ~15 sec"
              />

              <PackageRow
                name="Property Reel Campaign"
                price="$1,590"
                stills="12 enhanced images"
                motion="3–4 scenes + finished Reel"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
            Your property. Your campaign.
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Like what you see?
            <br />
            We&apos;ll create it for your property.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            You supply the existing property photography or
            renders. Tell us which ideas you like and we&apos;ll
            recommend the right package.
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

      {/* TRANSFORMATION MODAL */}
      {selectedTransformation && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm md:p-8"
          onMouseDown={() =>
            setSelectedTransformation(null)
          }
        >
          <div
            role="dialog"
            aria-modal="true"
            className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] bg-[#f7f5f1] shadow-2xl"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              onClick={() =>
                setSelectedTransformation(null)
              }
              aria-label="Close preview"
              className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-lg transition hover:bg-ink hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              {/* PREVIEW */}
              <div className="relative min-h-[420px] overflow-hidden rounded-t-[2rem] bg-ink lg:min-h-[680px] lg:rounded-l-[2rem] lg:rounded-tr-none">
                {selectedTransformation.image ? (
                  <Image
                    src={selectedTransformation.image}
                    alt={`${selectedTransformation.title} example`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                ) : (
                  <ExamplePlaceholder
                    transformation={
                      selectedTransformation
                    }
                  />
                )}
              </div>

              {/* COPY */}
              <div className="flex items-center p-8 md:p-10 lg:p-12">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                    {selectedTransformation.category}
                  </p>

                  <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                    {selectedTransformation.title}
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-black/55">
                    {
                      selectedTransformation.description
                    }
                  </p>

                  <div className="mt-8 rounded-2xl bg-white p-5">
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-black/35">
                      Example type
                    </p>

                    <p className="mt-2 font-display text-2xl font-semibold">
                      {selectedTransformation.type ===
                      "animation"
                        ? "Animated property scene"
                        : "Enhanced property image"}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/enquire"
                      className="inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3.5 font-semibold text-white transition hover:bg-ink"
                    >
                      I want something like this
                      <ArrowRight size={17} />
                    </Link>

                    {selectedTransformation.type ===
                    "animation" ? (
                      <Link
                        href="/video-library"
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3.5 font-semibold transition hover:bg-ink hover:text-white"
                      >
                        See more motion
                      </Link>
                    ) : (
                      <Link
                        href="/image-library"
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3.5 font-semibold transition hover:bg-ink hover:text-white"
                      >
                        See more images
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ExamplePlaceholder({
  transformation,
}: {
  transformation: Transformation;
}) {
  const Icon = transformation.icon;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-ink p-8 text-center text-white">
      <div className="max-w-md">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-brassBright">
          <Icon size={25} />
        </div>

        <p className="mt-7 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brassBright">
          Example in production
        </p>

        <h3 className="mt-3 font-display text-4xl font-semibold">
          {transformation.title}
        </h3>

        <p className="mt-4 leading-7 text-white/50">
          We&apos;re creating the demonstration asset for
          this transformation. It will appear here once
          ready.
        </p>
      </div>
    </div>
  );
}

function PackageRow({
  name,
  price,
  stills,
  motion,
  featured = false,
}: {
  name: string;
  price: string;
  stills: string;
  motion: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`grid gap-4 rounded-2xl border p-6 transition sm:grid-cols-[1fr_auto] sm:items-center ${
        featured
          ? "border-rust bg-ink text-white"
          : "border-black/10 bg-white"
      }`}
    >
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-2xl font-semibold">
            {name}
          </h3>

          {featured && (
            <span className="rounded-full bg-rust px-3 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-white">
              Most popular
            </span>
          )}
        </div>

        <p
          className={`mt-2 text-sm ${
            featured
              ? "text-white/55"
              : "text-black/50"
          }`}
        >
          {stills} · {motion}
        </p>
      </div>

      <div className="sm:text-right">
        <p className="font-display text-3xl font-semibold">
          {price}
        </p>

        <p
          className={`mt-1 font-mono text-[9px] uppercase tracking-[0.13em] ${
            featured
              ? "text-white/35"
              : "text-black/30"
          }`}
        >
          + GST
        </p>
      </div>
    </div>
  );
}