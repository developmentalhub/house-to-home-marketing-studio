"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
} from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MediaLightbox, {
  type MediaLightboxItem,
} from "@/components/MediaLightbox";

type PropertyType = "Childcare" | "Residential" | "Commercial";

type ExploreProject = {
  id: string;
  title: string;
  propertyType: PropertyType;
  eyebrow: string;
  description: string;
  before: string;
  after: string;
};

const projects: ExploreProject[] = [
  {
    id: "childcare-new-build",
    title: "Future Childcare Centre",
    propertyType: "Childcare",
    eyebrow: "Development Transformation",
    description:
      "Start with the existing property and show a clearer vision of the future childcare centre.",
    before:
      "/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg",
    after:
      "/images/childcare/before-after-childcare/childcare-centre-new-build-after.png",
  },
  {
    id: "childcare-corner-site",
    title: "Corner Site Childcare Centre",
    propertyType: "Childcare",
    eyebrow: "Childcare Development",
    description:
      "Help developers, operators and stakeholders understand what the completed site could become.",
    before:
      "/images/childcare/before-after-childcare/corner-site-childcare-before.png",
    after:
      "/images/childcare/before-after-childcare/corner-site-childcare-after.png",
  },
  {
    id: "childcare-yard",
    title: "Outdoor Childcare Environment",
    propertyType: "Childcare",
    eyebrow: "Outdoor Transformation",
    description:
      "Bring the future outdoor environment to life with landscaping, activity and a more complete sense of place.",
    before:
      "/images/childcare/before-after-childcare/Rearyard1-Before.png",
    after:
      "/images/childcare/before-after-childcare/Rearyard1-After.png",
  },
  {
    id: "childcare-room",
    title: "Childcare Interior",
    propertyType: "Childcare",
    eyebrow: "Interior Transformation",
    description:
      "Turn a static interior into a clearer picture of the future childcare environment.",
    before:
      "/images/childcare/before-after-childcare/room1-before.png",
    after:
      "/images/childcare/before-after-childcare/room1-after.png",
  },
  {
    id: "residential-home",
    title: "Residential Exterior",
    propertyType: "Residential",
    eyebrow: "Property Transformation",
    description:
      "Use the photography already created for the listing to produce another strong campaign visual.",
    before:
      "/images/residential/residential-before-after/residential-home-before.png",
    after:
      "/images/residential/residential-before-after/residential-home-after.png",
  },
  {
    id: "residential-kitchen",
    title: "Residential Kitchen",
    propertyType: "Residential",
    eyebrow: "Interior Transformation",
    description:
      "Turn an existing kitchen image into a fresh piece of property marketing content.",
    before:
      "/images/residential/residential-before-after/kitchen-before.png",
    after:
      "/images/residential/residential-before-after/kitchen-after.png",
  },
  {
    id: "residential-lifestyle",
    title: "Kitchen Lifestyle",
    propertyType: "Residential",
    eyebrow: "Lifestyle",
    description:
      "Introduce believable people and activity to make the property feel more lived in.",
    before:
      "/property-images/website/staging/kitchen-before.jpeg",
    after:
      "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
  },
  {
    id: "residential-styling",
    title: "Living Room Styling",
    propertyType: "Residential",
    eyebrow: "Furniture & Styling",
    description:
      "Turn an empty living room into a more complete and marketable property image.",
    before:
      "/property-images/website/staging/living-room-before.jpeg",
    after:
      "/property-images/website/staging/living-room-after.jpeg",
  },
  {
    id: "commercial-1",
    title: "Warehouse Possibility 01",
    propertyType: "Commercial",
    eyebrow: "Commercial Use Case",
    description:
      "Show how an empty warehouse could be presented for a different business use.",
    before:
      "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
    after:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-1.png",
  },
  {
    id: "commercial-2",
    title: "Warehouse Possibility 02",
    propertyType: "Commercial",
    eyebrow: "Commercial Use Case",
    description:
      "Use the same original commercial image to communicate another possible outcome.",
    before:
      "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
    after:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-2.png",
  },
  {
    id: "commercial-3",
    title: "Warehouse Possibility 03",
    propertyType: "Commercial",
    eyebrow: "Commercial Use Case",
    description:
      "Help buyers and tenants imagine more than an empty industrial space.",
    before:
      "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
    after:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-3.png",
  },
  {
    id: "commercial-4",
    title: "Warehouse Possibility 04",
    propertyType: "Commercial",
    eyebrow: "Commercial Use Case",
    description:
      "Create multiple visual stories from the same commercial property photography.",
    before:
      "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
    after:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-4.png",
  },
];

const propertyTypes: {
  name: PropertyType;
  description: string;
  href: string;
}[] = [
  {
    name: "Childcare",
    description:
      "Future centres, interiors, outdoor areas and development transformations.",
    href: "/childcare-property-animation",
  },
  {
    name: "Residential",
    description:
      "Lifestyle, styling and animation created from existing listing photography.",
    href: "/residential-property-animation",
  },
  {
    name: "Commercial",
    description:
      "Show different uses, future outcomes and the potential inside the property.",
    href: "/commercial-property-animation",
  },
];

export default function ExplorePage() {
  const [activeType, setActiveType] =
    useState<PropertyType>("Childcare");

  const [activeIndex, setActiveIndex] = useState(0);

  const [lightboxIndex, setLightboxIndex] =
    useState<number | null>(null);

  const activeProjects = useMemo(
    () =>
      projects.filter(
        (project) => project.propertyType === activeType,
      ),
    [activeType],
  );

  const activeProject =
    activeProjects[activeIndex] ?? activeProjects[0];

  const lightboxItems = useMemo<MediaLightboxItem[]>(
    () =>
      activeProjects.map((project) => ({
        id: project.id,
        title: project.title,
        category: project.eyebrow,
        description: project.description,
        before: project.before,
        after: project.after,
      })),
    [activeProjects],
  );

  function changeType(type: PropertyType) {
    setActiveType(type);
    setActiveIndex(0);
    setLightboxIndex(null);
  }

  function previous() {
    setActiveIndex((current) =>
      current === 0
        ? activeProjects.length - 1
        : current - 1,
    );
  }

  function next() {
    setActiveIndex((current) =>
      current === activeProjects.length - 1
        ? 0
        : current + 1,
    );
  }

  if (!activeProject) {
    return null;
  }

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Explore The Work
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                See what your existing
                <span className="block text-rust">
                  property media can become.
                </span>
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-8 text-white/60 lg:ml-auto">
              Choose a property type, drag between the original
              and finished image, then move through more examples.
            </p>
          </div>
        </div>
      </section>

      {/* PROPERTY SELECTOR */}
      <section className="sticky top-[76px] z-30 border-b border-black/10 bg-[#f7f5f1]/95 backdrop-blur-xl">
        <div className="container-shell py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {propertyTypes.map((type) => {
              const active = type.name === activeType;

              return (
                <button
                  key={type.name}
                  type="button"
                  onClick={() => changeType(type.name)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "bg-ink text-white"
                      : "border border-black/10 bg-white text-black/55 hover:border-rust hover:text-rust"
                  }`}
                >
                  {type.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN INTERACTIVE PROJECT */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                {activeType}
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Drag the image.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-black/55">
              The slider stays interactive, but the image is kept
              to a more natural viewing size so the original media
              stays sharper.
            </p>
          </div>

          <div className="mx-auto mt-10 w-full max-w-4xl">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before={activeProject.before}
                after={activeProject.after}
                beforeAlt={`Original ${activeProject.title}`}
                afterAlt={`Enhanced ${activeProject.title}`}
              />

              <button
                type="button"
                onClick={() => setLightboxIndex(activeIndex)}
                aria-label={`Open ${activeProject.title} full screen`}
                className="absolute right-4 top-[72px] z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-rust"
              >
                <Maximize2 size={17} />
              </button>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div className="max-w-2xl">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                  {activeProject.eyebrow}
                </p>

                <h3 className="mt-2 font-display text-3xl font-semibold">
                  {activeProject.title}
                </h3>

                <p className="mt-3 leading-7 text-black/50">
                  {activeProject.description}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous transformation"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white transition hover:bg-ink hover:text-white"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next transformation"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white transition hover:bg-rust"
                  >
                    <ArrowRight size={18} />
                  </button>

                  <p className="ml-2 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                    {activeIndex + 1} of{" "}
                    {activeProjects.length}
                  </p>
                </div>

                <div className="mt-5 h-[2px] w-full min-w-[180px] overflow-hidden bg-black/10">
                  <div
                    className="h-full bg-rust transition-all duration-500"
                    style={{
                      width: `${
                        ((activeIndex + 1) /
                          activeProjects.length) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT STRIP */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More {activeType}
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                Move through the possibilities.
              </h2>
            </div>

            <p className="hidden font-mono text-[9px] uppercase tracking-[0.15em] text-black/30 md:block">
              Swipe on mobile
            </p>
          </div>

          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
            {activeProjects.map((project, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group min-w-[82%] snap-center overflow-hidden rounded-[1.5rem] border bg-white text-left transition sm:min-w-[340px] md:min-w-[390px] ${
                    active
                      ? "border-rust shadow-soft"
                      : "border-black/10"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <Image
                      src={project.after}
                      alt={project.title}
                      fill
                      sizes="390px"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />

                    <p className="absolute bottom-4 left-5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="p-5">
                    <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-rust">
                      {project.eyebrow}
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* GO DEEPER */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Go Deeper
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Explore by property type.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {propertyTypes.map((type, index) => (
              <Link
                key={type.name}
                href={type.href}
                className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7 transition hover:border-rust hover:bg-white hover:shadow-soft md:p-8"
              >
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                  0{index + 1}
                </p>

                <h3 className="mt-8 font-display text-3xl font-semibold">
                  {type.name}
                </h3>

                <p className="mt-4 leading-7 text-black/50">
                  {type.description}
                </p>

                <div className="mt-7 flex items-center gap-2 font-semibold text-rust">
                  Explore {type.name}
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STILL TO MOTION */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Still To Motion
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                First, we bring the image to life.
                <span className="block text-rust">
                  Then, we make it move.
                </span>
              </h2>
            </div>

            <div className="max-w-2xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/55">
                The transformed still can become the starting
                point for animation, movement and fresh campaign
                content.
              </p>

              <Link
                href="/video-library"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Explore property animation
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Real Estate Media House
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            You already have the media.
            <br />
            Get more from it.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us your existing property photography, renders
            or footage and we&apos;ll help identify the strongest
            opportunities.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              Start a project
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/packages"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Compare packages
            </Link>
          </div>
        </div>
      </section>

      <MediaLightbox
        items={lightboxItems}
        openIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={(index) => {
          setLightboxIndex(index);
          setActiveIndex(index);
        }}
      />
    </main>
  );
}