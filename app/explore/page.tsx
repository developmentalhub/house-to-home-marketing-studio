"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MediaLightbox from "@/components/MediaLightbox";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";

type PropertyType = "childcare" | "residential" | "commercial";

type Project = {
  id: string;
  title: string;
  description: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  category: string;
  href: string;
};

const propertyTypes: {
  id: PropertyType;
  label: string;
  description: string;
}[] = [
  {
    id: "childcare",
    label: "Childcare",
    description:
      "Development visualisation, active environments and property animation.",
  },
  {
    id: "residential",
    label: "Residential",
    description:
      "Lifestyle transformation, virtual styling and animated property content.",
  },
  {
    id: "commercial",
    label: "Commercial",
    description:
      "Industry specific visualisation for vacant commercial and industrial property.",
  },
];

const projects: Record<PropertyType, Project[]> = {
  childcare: [
    {
      id: "childcare-new-build",
      title: "Childcare Development",
      description:
        "Use existing property imagery to make the completed childcare centre easier to understand before construction is finished.",
      before:
        "/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg",
      after:
        "/images/childcare/before-after-childcare/childcare-centre-new-build-after.png",
      beforeAlt: "Property before childcare development visualisation",
      afterAlt: "Property transformed into a completed childcare centre",
      category: "Development Visualisation",
      href: "/projects/childcare-centre-development-transformation",
    },
    {
      id: "childcare-corner",
      title: "Corner Site Childcare",
      description:
        "Turn an existing site image into a clearer visual of the future childcare development.",
      before:
        "/images/childcare/before-after-childcare/corner-site-childcare-before.png",
      after:
        "/images/childcare/before-after-childcare/corner-site-childcare-after.png",
      beforeAlt: "Corner site before childcare visualisation",
      afterAlt: "Corner site transformed into a childcare development",
      category: "Future Property",
      href: "/childcare-development-visualisation",
    },
    {
      id: "childcare-room-one",
      title: "Childcare Interior",
      description:
        "Show the room as an active childcare environment rather than an unfinished or empty interior.",
      before:
        "/images/childcare/before-after-childcare/room1-before.png",
      after:
        "/images/childcare/before-after-childcare/room1-after.png",
      beforeAlt: "Childcare room before visual transformation",
      afterAlt: "Childcare room transformed into an active learning environment",
      category: "Interior Visualisation",
      href: "/childcare-property-animation",
    },
  ],

  residential: [
    {
      id: "residential-kitchen",
      title: "Kitchen Lifestyle",
      description:
        "Turn clean property photography into another campaign image with more atmosphere and lifestyle.",
      before: "/property-images/website/lifestyle/kitchen-before.jpeg",
      after: "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
      beforeAlt: "Residential kitchen before lifestyle transformation",
      afterAlt: "Residential kitchen after lifestyle transformation",
      category: "Lifestyle",
      href: "/residential-property-animation",
    },
    {
      id: "residential-bedroom",
      title: "Bedroom Lifestyle",
      description:
        "Create a more lived in campaign moment from an existing residential property image.",
      before: "/property-images/website/lifestyle/bedroom-before.jpeg",
      after: "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
      beforeAlt: "Residential bedroom before lifestyle enhancement",
      afterAlt: "Residential bedroom after lifestyle enhancement",
      category: "Lifestyle",
      href: "/projects/residential-property-transformation",
    },
    {
      id: "residential-living",
      title: "Living Room Styling",
      description:
        "Help buyers understand an empty living area with furniture and a clearer sense of scale.",
      before: "/property-images/website/staging/living-room-before.jpeg",
      after: "/property-images/website/staging/living-room-after.jpeg",
      beforeAlt: "Living room before virtual furniture",
      afterAlt: "Living room after virtual furniture and styling",
      category: "Furniture & Styling",
      href: "/projects/residential-property-transformation",
    },
  ],

  commercial: [
    {
      id: "commercial-gym",
      title: "Warehouse To Gym",
      description:
        "Help a fitness operator picture training zones, equipment, reception and activity inside the property.",
      before:
        "/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png",
      after:
        "/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png",
      beforeAlt: "Vacant warehouse before gym visualisation",
      afterAlt: "Warehouse transformed into a gym and fitness environment",
      category: "Gym & Fitness",
      href: "/projects/warehouse-to-gym-visualisation",
    },
    {
      id: "commercial-mechanic",
      title: "Warehouse To Mechanic Workshop",
      description:
        "Show automotive operators vehicles, work bays, equipment and workshop activity.",
      before:
        "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
      after:
        "/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png",
      beforeAlt: "Vacant warehouse before mechanic workshop visualisation",
      afterAlt: "Warehouse transformed into a mechanic workshop",
      category: "Automotive",
      href: "/projects/warehouse-to-mechanic-workshop-visualisation",
    },
    {
      id: "commercial-logistics",
      title: "Warehouse To Logistics",
      description:
        "Make stock, storage, people and operational activity visible to logistics operators.",
      before:
        "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
      after:
        "/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png",
      beforeAlt: "Vacant warehouse before logistics visualisation",
      afterAlt: "Warehouse transformed into a logistics operation",
      category: "Logistics",
      href: "/projects/warehouse-to-logistics-visualisation",
    },
    {
      id: "commercial-studio",
      title: "Warehouse To Photography Studio",
      description:
        "Help creative operators picture shooting areas, lighting, equipment and a working production environment.",
      before:
        "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
      after:
        "/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png",
      beforeAlt: "Vacant warehouse before photography studio visualisation",
      afterAlt: "Warehouse transformed into a photography studio",
      category: "Creative",
      href: "/projects/warehouse-to-photography-studio-visualisation",
    },
    {
      id: "commercial-mancave",
      title: "Warehouse To Private Mancave",
      description:
        "Show a private buyer how an industrial space could become a collection, entertainment or lifestyle environment.",
      before:
        "/images/commercial/warehouse-multiple-afters/warehouse-before-mancave.png",
      after:
        "/images/commercial/warehouse-multiple-afters/warehouse-after-mancave1.png",
      beforeAlt: "Vacant warehouse before private lifestyle visualisation",
      afterAlt: "Warehouse transformed into a private mancave",
      category: "Private Lifestyle",
      href: "/projects/warehouse-to-mancave-visualisation",
    },
  ],
};

const featuredVideos = [
  {
    id: "residential-kitchen",
    title: "Residential Kitchen Animation",
    url: "https://www.youtube.com/shorts/5NP5Ay_3SBY",
    category: "Residential",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-use",
    title: "Commercial Property Animation",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-development",
    title: "Childcare Build Transformation",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Childcare",
    orientation: "portrait" as const,
  },
];

export default function ExplorePage() {
  const [activeType, setActiveType] = useState<PropertyType>("childcare");
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeProjects = projects[activeType];

  const activeProject = useMemo(
    () => activeProjects[activeIndex] ?? activeProjects[0],
    [activeProjects, activeIndex]
  );

  const lightboxItems = useMemo(
    () =>
      activeProjects.map((project) => ({
        id: project.id,
        title: project.title,
        category: project.category,
        description: project.description,
        before: project.before,
        after: project.after,
      })),
    [activeProjects]
  );

  function selectType(type: PropertyType) {
    setActiveType(type);
    setActiveIndex(0);
    setLightboxIndex(null);
  }

  function previousProject() {
    setActiveIndex((current) =>
      current === 0 ? activeProjects.length - 1 : current - 1
    );
  }

  function nextProject() {
    setActiveIndex((current) =>
      current === activeProjects.length - 1 ? 0 : current + 1
    );
  }

  if (!activeProject) {
    return null;
  }

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Explore The Work
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Start with the property.
                <span className="block text-rust">
                  See what the media can become.
                </span>
              </h1>
            </div>

            <div className="max-w-2xl lg:pb-2">
              <p className="text-lg leading-8 text-white/60 md:text-xl">
                Explore real examples across commercial, residential and
                childcare property using photography that already existed.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Drag the transformations, switch between projects and open any
                example full screen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPE SELECTOR */}
      <section className="border-b border-black/10 bg-white">
        <div className="container-shell py-7">
          <div className="grid gap-3 md:grid-cols-3">
            {propertyTypes.map((type) => {
              const active = type.id === activeType;

              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => selectType(type.id)}
                  className={`rounded-[1.5rem] border p-5 text-left transition ${
                    active
                      ? "border-ink bg-ink text-white"
                      : "border-black/10 bg-[#f7f5f1] hover:border-rust hover:bg-white"
                  }`}
                >
                  <p
                    className={`font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${
                      active ? "text-brassBright" : "text-rust"
                    }`}
                  >
                    Property Type
                  </p>

                  <h2 className="mt-3 font-display text-2xl font-semibold">
                    {type.label}
                  </h2>

                  <p
                    className={`mt-3 text-sm leading-6 ${
                      active ? "text-white/50" : "text-black/45"
                    }`}
                  >
                    {type.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVE PROJECT */}
      <section className="py-14 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                  {activeProject.category}
                </p>

                <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  {activeProject.title}
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-black/50">
                  {activeProject.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(activeIndex)}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold transition hover:border-rust hover:text-rust"
              >
                <Maximize2 size={16} />
                Full screen
              </button>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-soft">
              <BeforeAfterSlider
                before={activeProject.before}
                after={activeProject.after}
                beforeAlt={activeProject.beforeAlt}
                afterAlt={activeProject.afterAlt}
              />
            </div>

            <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-black/30">
                Drag across the image to compare
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previousProject}
                  aria-label="Previous project"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition hover:border-rust hover:text-rust"
                >
                  <ArrowLeft size={18} />
                </button>

                <p className="px-3 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(activeProjects.length).padStart(2, "0")}
                </p>

                <button
                  type="button"
                  onClick={nextProject}
                  aria-label="Next project"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition hover:border-rust hover:text-rust"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-x-auto pb-3">
            <div className="flex min-w-max gap-3">
              {activeProjects.map((project, index) => {
                const active = index === activeIndex;

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-[250px] shrink-0 rounded-[1.4rem] border p-5 text-left transition ${
                      active
                        ? "border-rust bg-white shadow-soft"
                        : "border-black/10 bg-white/50 hover:border-rust hover:bg-white"
                    }`}
                  >
                    <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-rust">
                      {project.category}
                    </p>

                    <h3 className="mt-3 font-display text-xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/45">
                      {project.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* GO DEEPER */}
      <section className="border-y border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Go Deeper
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                See the problem, the transformation and the thinking behind it.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/55">
                Each property type has its own marketing problem. Explore the
                relevant service or case study for more examples and context.
              </p>

              <Link
                href={activeProject.href}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
              >
                Explore {activeProject.title}
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MOTION */}
      <section className="bg-ink py-20 text-white md:py-24">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={featuredVideos}
            eyebrow="From Still To Motion"
            heading="First, bring the image to life. Then, make it move."
            description="Existing property photography can become animated residential, commercial and development campaign content."
          />

          <div className="mt-10">
            <Link
              href="/video-library"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold transition hover:bg-white hover:text-ink"
            >
              Explore the video library
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* CHOOSE PATH */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What Do You Want To Explore?
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Images, movement or a specific property problem.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/image-library"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Before & After
              </p>

              <h3 className="mt-4 font-display text-3xl font-semibold">
                Image Transformations
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Explore lifestyle, furniture, commercial and development
                transformations.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore images
                <ArrowRight size={17} />
              </div>
            </Link>

            <Link
              href="/video-library"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Motion
              </p>

              <h3 className="mt-4 font-display text-3xl font-semibold">
                Property Animation
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                See still property media turned into animated campaign content.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore videos
                <ArrowRight size={17} />
              </div>
            </Link>

            <Link
              href="/blog"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Problem Solving
              </p>

              <h3 className="mt-4 font-display text-3xl font-semibold">
                Property Marketing Guides
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Start with the property marketing problem and find the most
                relevant content approach.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore guides
                <ArrowRight size={17} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Have Existing Property Media?
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Show us what you have.
            <br />
            Tell us what needs to happen next.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            We can help turn existing property photography, renders and footage
            into more useful campaign content.
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

      <MediaLightbox
        items={lightboxItems}
        openIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={(index) => setActiveIndex(index)}
      />
    </main>
  );
}