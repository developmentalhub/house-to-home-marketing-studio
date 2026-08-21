"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  House,
  Maximize2,
  Play,
  Sparkles,
  X,
} from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";

type Example = {
  id: string;
  title: string;
  category: string;
  description: string;
  before: string;
  after: string;
};

type PropertyType = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: React.ElementType;
  href: string;
  examples: Example[];
};

const propertyTypes: PropertyType[] = [
  {
    id: "childcare",
    title: "Childcare",
    eyebrow: "Development",
    description:
      "Show future centres, interiors, outdoor areas and complete development transformations before the project is finished.",
    icon: Building2,
    href: "/childcare-property-animation",
    examples: [
      {
        id: "childcare-new-build",
        title: "Childcare Centre New Build",
        category: "Development Transformation",
        description:
          "Start with the existing property and show people what the completed childcare centre could become.",
        before:
          "/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg",
        after:
          "/images/childcare/before-after-childcare/childcare-centre-new-build-after.png",
      },
      {
        id: "childcare-corner",
        title: "Corner Site Childcare Centre",
        category: "Future Development",
        description:
          "Turn an existing corner site into a clearer visual representation of the proposed childcare centre.",
        before:
          "/images/childcare/before-after-childcare/corner-site-childcare-before.png",
        after:
          "/images/childcare/before-after-childcare/corner-site-childcare-after.png",
      },
      {
        id: "childcare-yard",
        title: "Outdoor Play Area",
        category: "Outdoor Environment",
        description:
          "Show how an outdoor childcare space can feel once the environment is finished and brought to life.",
        before:
          "/images/childcare/before-after-childcare/Rearyard1-Before.png",
        after:
          "/images/childcare/before-after-childcare/Rearyard1-After.png",
      },
      {
        id: "childcare-room-one",
        title: "Childcare Interior 01",
        category: "Interior Transformation",
        description:
          "Help people understand the finished room rather than asking them to imagine it from an empty interior.",
        before:
          "/images/childcare/before-after-childcare/room1-before.png",
        after:
          "/images/childcare/before-after-childcare/room1-after.png",
      },
      {
        id: "childcare-room-two",
        title: "Childcare Interior 02",
        category: "Interior Transformation",
        description:
          "Create a clearer sense of atmosphere, function and future use inside the centre.",
        before:
          "/images/childcare/before-after-childcare/room2-before.png",
        after:
          "/images/childcare/before-after-childcare/room2-after.png",
      },
      {
        id: "childcare-room-three",
        title: "Childcare Interior 03",
        category: "Interior Transformation",
        description:
          "Transform a static room into a more complete visual story for operators, developers and families.",
        before:
          "/images/childcare/before-after-childcare/room3-before.png",
        after:
          "/images/childcare/before-after-childcare/room3-after.png",
      },
    ],
  },
  {
    id: "residential",
    title: "Residential",
    eyebrow: "Property Campaigns",
    description:
      "Take listing photography you already paid for and turn selected images into fresh visual content for the campaign.",
    icon: House,
    href: "/residential-property-animation",
    examples: [
      {
        id: "residential-home",
        title: "Residential Exterior",
        category: "Property Transformation",
        description:
          "Give an existing residential image another job inside the campaign rather than letting it disappear after one use.",
        before:
          "/images/residential/residential-before-after/residential-home-before.png",
        after:
          "/images/residential/residential-before-after/residential-home-after.png",
      },
      {
        id: "residential-kitchen",
        title: "Residential Kitchen",
        category: "Lifestyle Transformation",
        description:
          "Turn a standard kitchen photograph into a stronger visual moment using the photography already supplied.",
        before:
          "/images/residential/residential-before-after/kitchen-before.png",
        after:
          "/images/residential/residential-before-after/kitchen-after.png",
      },
      {
        id: "kitchen-lifestyle",
        title: "Kitchen Lifestyle",
        category: "Lifestyle",
        description:
          "Introduce believable human activity and atmosphere to make the same kitchen photograph feel more lived in.",
        before:
          "/property-images/website/staging/kitchen-before.jpeg",
        after:
          "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
      },
      {
        id: "living-styling",
        title: "Living Room Styling",
        category: "Furniture & Styling",
        description:
          "Take an empty living space and turn it into a more complete property marketing image.",
        before:
          "/property-images/website/staging/living-room-before.jpeg",
        after:
          "/property-images/website/staging/living-room-after.jpeg",
      },
      {
        id: "bedroom-lifestyle",
        title: "Bedroom Lifestyle",
        category: "Lifestyle",
        description:
          "Create a warmer, more aspirational scene from the original bedroom photography.",
        before:
          "/property-images/website/lifestyle/bedroom-before.jpeg",
        after:
          "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
      },
      {
        id: "foyer-lifestyle",
        title: "Foyer Lifestyle",
        category: "Lifestyle",
        description:
          "Turn a static entry image into a more welcoming property moment.",
        before:
          "/property-images/website/lifestyle/foyer-before.jpeg",
        after:
          "/property-images/website/lifestyle/foyer-after.jpeg",
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    eyebrow: "Sales & Leasing",
    description:
      "Show buyers and tenants how an empty warehouse or commercial property could actually be used.",
    icon: Building2,
    href: "/commercial-property-animation",
    examples: [
      {
        id: "warehouse-one",
        title: "Warehouse Possibility 01",
        category: "Commercial Use Case",
        description:
          "Take one empty warehouse photograph and show a potential commercial use.",
        before:
          "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
        after:
          "/images/commercial/warehouse-multiple-afters/warehouse-after-1.png",
      },
      {
        id: "warehouse-two",
        title: "Warehouse Possibility 02",
        category: "Commercial Use Case",
        description:
          "Use the same property image to speak to a completely different buyer or tenant.",
        before:
          "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
        after:
          "/images/commercial/warehouse-multiple-afters/warehouse-after-2.png",
      },
      {
        id: "warehouse-three",
        title: "Warehouse Possibility 03",
        category: "Commercial Use Case",
        description:
          "Show another way the warehouse could function without needing a new property shoot.",
        before:
          "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
        after:
          "/images/commercial/warehouse-multiple-afters/warehouse-after-3.png",
      },
      {
        id: "warehouse-four",
        title: "Warehouse Possibility 04",
        category: "Commercial Use Case",
        description:
          "Help prospective tenants imagine their operation inside an otherwise empty commercial space.",
        before:
          "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
        after:
          "/images/commercial/warehouse-multiple-afters/warehouse-after-4.png",
      },
      {
        id: "warehouse-five",
        title: "Warehouse Possibility 05",
        category: "Commercial Use Case",
        description:
          "Turn one original commercial photograph into another visual sales story.",
        before:
          "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
        after:
          "/images/commercial/warehouse-multiple-afters/warehouse-after-5.png",
      },
      {
        id: "warehouse-six",
        title: "Warehouse Possibility 06",
        category: "Commercial Use Case",
        description:
          "Give the same property relevance to another potential industry or business type.",
        before:
          "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
        after:
          "/images/commercial/warehouse-multiple-afters/warehouse-after-6.png",
      },
      {
        id: "warehouse-seven",
        title: "Warehouse Possibility 07",
        category: "Commercial Use Case",
        description:
          "Show just how many different marketing directions can come from the same supplied photograph.",
        before:
          "/images/commercial/warehouse-multiple-afters/warehouse-before.jpg",
        after:
          "/images/commercial/warehouse-multiple-afters/warehouse-after-7.png",
      },
    ],
  },
];

export default function ExplorePage() {
  const [activePropertyId, setActivePropertyId] =
    useState("childcare");

  const [activeIndex, setActiveIndex] = useState(0);

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const activeProperty =
    propertyTypes.find(
      (property) => property.id === activePropertyId,
    ) ?? propertyTypes[0];

  const activeExample =
    activeProperty.examples[activeIndex] ??
    activeProperty.examples[0];

  const selectedExample =
    selectedIndex !== null
      ? activeProperty.examples[selectedIndex]
      : null;

  const progress = useMemo(() => {
    return (
      ((activeIndex + 1) /
        activeProperty.examples.length) *
      100
    );
  }, [
    activeIndex,
    activeProperty.examples.length,
  ]);

  function changeProperty(id: string) {
    setActivePropertyId(id);
    setActiveIndex(0);
    setSelectedIndex(null);
  }

  function previousExample() {
    setActiveIndex((current) =>
      current === 0
        ? activeProperty.examples.length - 1
        : current - 1,
    );
  }

  function nextExample() {
    setActiveIndex((current) =>
      current ===
      activeProperty.examples.length - 1
        ? 0
        : current + 1,
    );
  }

  function previousModal() {
    setSelectedIndex((current) => {
      if (current === null) {
        return null;
      }

      return current === 0
        ? activeProperty.examples.length - 1
        : current - 1;
    });
  }

  function nextModal() {
    setSelectedIndex((current) => {
      if (current === null) {
        return null;
      }

      return current ===
        activeProperty.examples.length - 1
        ? 0
        : current + 1;
    });
  }

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Explore The Possibilities
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Pick the property.
                <span className="block text-rust">
                  Play with what it could become.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/60">
                Choose a property type, move through real
                examples and drag directly between the original
                media and the finished transformation.
              </p>

              <p className="mt-5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/30">
                No uploads. No editing tools. Just ideas for
                your campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY SELECTOR */}
      <section className="sticky top-[76px] z-30 border-b border-black/10 bg-[#f7f5f1]/95 backdrop-blur-xl">
        <div className="container-shell py-4">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {propertyTypes.map((property) => {
              const Icon = property.icon;
              const active =
                property.id === activePropertyId;

              return (
                <button
                  key={property.id}
                  type="button"
                  onClick={() =>
                    changeProperty(property.id)
                  }
                  className={`flex min-w-[220px] shrink-0 items-center gap-4 rounded-[1.25rem] border p-4 text-left transition md:min-w-[250px] ${
                    active
                      ? "border-ink bg-ink text-white"
                      : "border-black/10 bg-white hover:border-rust"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                      active
                        ? "bg-brassBright text-ink"
                        : "bg-[#f7f5f1] text-rust"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <div>
                    <p
                      className={`font-mono text-[8px] font-semibold uppercase tracking-[0.16em] ${
                        active
                          ? "text-white/45"
                          : "text-rust"
                      }`}
                    >
                      {property.eyebrow}
                    </p>

                    <p className="mt-1 font-display text-xl font-semibold">
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
      <section className="py-16 md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            {/* PROPERTY INFO */}
            <div className="lg:sticky lg:top-32 lg:self-start">
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
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-black/30">
                      Current example
                    </p>

                    <p className="mt-2 font-display text-2xl font-semibold">
                      {activeExample.title}
                    </p>
                  </div>

                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/35">
                    {String(activeIndex + 1).padStart(
                      2,
                      "0",
                    )}{" "}
                    /{" "}
                    {String(
                      activeProperty.examples.length,
                    ).padStart(2, "0")}
                  </p>
                </div>

                <div className="mt-5 h-[2px] overflow-hidden bg-black/10">
                  <div
                    className="h-full bg-rust transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={previousExample}
                  aria-label="Previous example"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white transition hover:bg-ink hover:text-white"
                >
                  <ChevronLeft size={19} />
                </button>

                <button
                  type="button"
                  onClick={nextExample}
                  aria-label="Next example"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white transition hover:bg-rust"
                >
                  <ChevronRight size={19} />
                </button>
              </div>

              <Link
                href={activeProperty.href}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore {activeProperty.title}
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* MAIN INTERACTIVE VIEWER */}
            <div>
              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-soft">
                <BeforeAfterSlider
                  before={activeExample.before}
                  after={activeExample.after}
                  beforeAlt={`Original ${activeExample.title}`}
                  afterAlt={`Transformed ${activeExample.title}`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setSelectedIndex(activeIndex)
                  }
                  aria-label={`Open ${activeExample.title} full screen`}
                  className="absolute right-4 top-[72px] z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-rust"
                >
                  <Maximize2 size={17} />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                    {activeExample.category}
                  </p>

                  <h3 className="mt-2 font-display text-3xl font-semibold">
                    {activeExample.title}
                  </h3>

                  <p className="mt-3 max-w-2xl leading-7 text-black/50">
                    {activeExample.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedIndex(activeIndex)
                  }
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold transition hover:border-rust hover:text-rust"
                >
                  <Maximize2 size={15} />
                  Open larger
                </button>
              </div>

              {/* MOBILE SWIPE STYLE CARDS */}
              <div className="mt-10">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-black/30">
                  More {activeProperty.title} examples
                </p>

                <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
                  {activeProperty.examples.map(
                    (example, index) => {
                      const active =
                        index === activeIndex;

                      return (
                        <button
                          key={example.id}
                          type="button"
                          onClick={() =>
                            setActiveIndex(index)
                          }
                          className={`group min-w-[78%] snap-center overflow-hidden rounded-[1.5rem] border bg-white text-left transition sm:min-w-[330px] ${
                            active
                              ? "border-rust shadow-soft"
                              : "border-black/10"
                          }`}
                        >
                          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                            <Image
                              src={example.after}
                              alt={example.title}
                              fill
                              sizes="330px"
                              className="object-cover transition duration-500 group-hover:scale-[1.02]"
                            />

                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent" />

                            <p className="absolute bottom-4 left-4 right-4 font-display text-xl font-semibold text-white">
                              {example.title}
                            </p>
                          </div>

                          <div className="p-4">
                            <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-rust">
                              {example.category}
                            </p>
                          </div>
                        </button>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY PATHS */}
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Go Deeper
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Explore the type of property you work with.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {propertyTypes.map((property, index) => (
              <Link
                key={property.id}
                href={property.href}
                className="group flex min-h-[330px] flex-col rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
              >
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-rust">
                  0{index + 1}
                </p>

                <div className="mt-auto pt-16">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/30">
                    {property.eyebrow}
                  </p>

                  <h3 className="mt-3 font-display text-3xl font-semibold">
                    {property.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/50">
                    {property.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 font-semibold text-rust">
                    Explore this sector
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STILL TO MOTION */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                From still to motion
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                First change the scene.
                <br />
                Then make the moment move.
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              <div className="min-h-[250px] border-b border-r border-white/10 p-7">
                <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-brassBright">
                  01 / Enhanced Image
                </p>

                <Sparkles
                  size={23}
                  className="mt-10 text-brassBright"
                />

                <h3 className="mt-5 font-display text-2xl font-semibold">
                  Change what people see.
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  Add lifestyle, furniture, people,
                  landscaping, lighting, vehicles or a
                  completely different use for the space.
                </p>
              </div>

              <div className="min-h-[250px] border-b border-r border-white/10 p-7">
                <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-brassBright">
                  02 / Animation
                </p>

                <Play
                  size={23}
                  className="mt-10 text-brassBright"
                />

                <h3 className="mt-5 font-display text-2xl font-semibold">
                  Then give it movement.
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  Create camera movement, activity, lighting
                  transitions, arrivals, construction or a
                  complete animated property story.
                </p>
              </div>
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
            See something you like?
            <br />
            Build it into your campaign.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            You supply the existing property photography,
            renders or project imagery. Tell us which ideas
            caught your attention and we&apos;ll help shape the
            campaign around them.
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

      {/* FULL SCREEN PREVIEW */}
      {selectedExample && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedExample.title}
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[1.5rem] bg-[#f7f5f1] shadow-2xl md:rounded-[2rem]"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              onClick={() =>
                setSelectedIndex(null)
              }
              aria-label="Close preview"
              className="absolute right-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition hover:bg-rust"
            >
              <X size={19} />
            </button>

            {activeProperty.examples.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={previousModal}
                  aria-label="Previous transformation"
                  className="absolute left-3 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/75 text-white backdrop-blur transition hover:bg-rust md:left-5"
                >
                  <ArrowLeft size={19} />
                </button>

                <button
                  type="button"
                  onClick={nextModal}
                  aria-label="Next transformation"
                  className="absolute right-3 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/75 text-white backdrop-blur transition hover:bg-rust md:right-5"
                >
                  <ArrowRight size={19} />
                </button>
              </>
            )}

            <div className="max-h-[74vh] overflow-auto">
              <BeforeAfterSlider
                before={selectedExample.before}
                after={selectedExample.after}
                beforeAlt={`Original ${selectedExample.title}`}
                afterAlt={`Transformed ${selectedExample.title}`}
              />
            </div>

            <div className="border-t border-black/10 p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                    {selectedExample.category}
                  </p>

                  <h2 className="mt-2 font-display text-3xl font-semibold">
                    {selectedExample.title}
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-black/50">
                    {selectedExample.description}
                  </p>
                </div>

                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                  {selectedIndex + 1} of{" "}
                  {activeProperty.examples.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}