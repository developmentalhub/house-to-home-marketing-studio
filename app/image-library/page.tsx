import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ChildcareDevelopmentStory from "@/components/ChildcareDevelopmentStory";
import CommercialOutcomeGallery from "@/components/CommercialOutcomeGallery";
import SwipeGallery from "@/components/SwipeGallery";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property Image Transformations | Real Estate Media House",
  description:
    "Explore before and after property image transformations across residential, commercial and childcare property using existing photography and project media.",
  alternates: {
    canonical: `${SITE_URL}/image-library`,
  },
  openGraph: {
    title: "Property Image Transformations | Real Estate Media House",
    description:
      "See existing property photography transformed into lifestyle scenes, furniture, commercial use concepts and development marketing visuals.",
    url: `${SITE_URL}/image-library`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Commercial warehouse transformed into a gym marketing visual",
      },
    ],
  },
};

const residentialGallery = [
  {
    id: "residential-home",
    title: "Residential Exterior",
    category: "Residential",
    description:
      "An existing residential property image developed into another finished campaign visual.",
    image:
      "/images/residential/residential-before-after/residential-home-after.png",
  },
  {
    id: "residential-kitchen",
    title: "Residential Kitchen",
    category: "Residential",
    description:
      "Existing kitchen photography transformed into additional campaign content.",
    image:
      "/images/residential/residential-before-after/kitchen-after.png",
  },
  {
    id: "lifestyle-kitchen",
    title: "Kitchen Lifestyle",
    category: "Lifestyle",
    description:
      "A clean kitchen image given more atmosphere and lifestyle context.",
    image:
      "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
  },
  {
    id: "lifestyle-bedroom",
    title: "Bedroom Lifestyle",
    category: "Lifestyle",
    description:
      "Existing bedroom photography turned into another lifestyle campaign moment.",
    image:
      "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
  },
  {
    id: "staged-living",
    title: "Living Room Styling",
    category: "Furniture & Styling",
    description:
      "An empty living area shown with furniture to improve scale and purpose.",
    image:
      "/property-images/website/staging/living-room-after.jpeg",
  },
];

export default function ImageLibraryPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Property Image Library
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Do not imagine
                <span className="block text-rust">what we mean.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60 md:text-xl">
                Drag the images and see what existing property photography can
                become.
              </p>

              <p className="mt-5 max-w-xl leading-8 text-white/45">
                Residential lifestyle. Furniture and styling. Commercial use
                concepts. Childcare development visualisation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#transformations"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Start exploring
                  <ArrowRight size={17} />
                </a>

                <Link
                  href="/video-library"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  See them move
                </Link>
              </div>
            </div>

            <div id="transformations" className="space-y-4">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                  beforeAlt="Vacant commercial warehouse before gym visualisation"
                  afterAlt="Commercial warehouse transformed into a gym concept"
                />
              </div>

              <div className="flex items-center justify-between gap-4 px-1">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                    Commercial
                  </p>

                  <p className="mt-1 font-display text-xl font-semibold">
                    Warehouse to gym
                  </p>
                </div>

                <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
                  Drag to compare
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAST CHOICE */}
      <section className="border-b border-black/10 bg-white">
        <div className="container-shell py-7">
          <div className="grid gap-3 md:grid-cols-3">
            <a
              href="#residential"
              className="group rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-5 transition hover:border-rust hover:bg-white"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                01
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold">
                Residential
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/45">
                Lifestyle, furniture and finished property transformations.
              </p>
            </a>

            <a
              href="#commercial"
              className="group rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-5 transition hover:border-rust hover:bg-white"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                02
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold">
                Commercial
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/45">
                Show vacant property as relevant industry specific uses.
              </p>
            </a>

            <a
              href="#childcare"
              className="group rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-5 transition hover:border-rust hover:bg-white"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                03
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold">
                Childcare
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/45">
                Development, interiors and outdoor environments brought to life.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL */}
      <section id="residential" className="py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Residential
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Help buyers feel more than an empty room.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-black/55">
                Existing residential photography can become lifestyle content,
                furnished interiors and additional campaign images while the
                original listing photography remains available.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/property-images/website/lifestyle/kitchen-before.jpeg"
                  after="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                  beforeAlt="Original residential kitchen property photograph"
                  afterAlt="Residential kitchen transformed into lifestyle marketing content"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Lifestyle
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Kitchen
                </h3>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/property-images/website/staging/living-room-before.jpeg"
                  after="/property-images/website/staging/living-room-after.jpeg"
                  beforeAlt="Empty residential living room before virtual furniture"
                  afterAlt="Residential living room after furniture and styling"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Furniture & Styling
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Living room
                </h3>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/property-images/website/lifestyle/bedroom-before.jpeg"
                  after="/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg"
                  beforeAlt="Original residential bedroom"
                  afterAlt="Residential bedroom transformed into lifestyle marketing content"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Lifestyle
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Bedroom
                </h3>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/property-images/website/staging/kitchen-before.jpeg"
                  after="/property-images/website/staging/kitchen-after.jpeg"
                  beforeAlt="Residential kitchen before styling"
                  afterAlt="Residential kitchen after furniture and styling"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Styling
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Kitchen styling
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL SWIPE */}
      <section className="border-y border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-9 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              More Residential Outcomes
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Swipe through more finished campaign images.
            </h2>
          </div>

          <SwipeGallery items={residentialGallery} />
        </div>
      </section>

      {/* COMMERCIAL */}
      <section id="commercial" className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Commercial
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                One vacant property.
                <br />
                Several possible audiences.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-black/55">
                Instead of describing a warehouse as flexible, create visual
                content around the industries the campaign actually wants to
                reach.
              </p>

              <Link
                href="/commercial-property-visualisation"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore commercial visualisation
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                  beforeAlt="Vacant warehouse before gym visualisation"
                  afterAlt="Warehouse transformed into a gym"
                />
              </div>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                    Fitness
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Warehouse to gym
                  </h3>
                </div>

                <Link
                  href="/projects/warehouse-to-gym-visualisation"
                  className="text-sm font-semibold text-rust"
                >
                  Case study
                </Link>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png"
                  beforeAlt="Vacant warehouse before mechanic workshop visualisation"
                  afterAlt="Warehouse transformed into a mechanic workshop"
                />
              </div>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                    Automotive
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Warehouse to mechanic workshop
                  </h3>
                </div>

                <Link
                  href="/projects/warehouse-to-mechanic-workshop-visualisation"
                  className="text-sm font-semibold text-rust"
                >
                  Case study
                </Link>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png"
                  beforeAlt="Vacant warehouse before logistics visualisation"
                  afterAlt="Warehouse transformed into a logistics operation"
                />
              </div>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                    Logistics
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Warehouse to logistics
                  </h3>
                </div>

                <Link
                  href="/projects/warehouse-to-logistics-visualisation"
                  className="text-sm font-semibold text-rust"
                >
                  Case study
                </Link>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-photography-studio.png"
                  beforeAlt="Vacant warehouse before photography studio visualisation"
                  afterAlt="Warehouse transformed into a photography studio"
                />
              </div>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                    Creative
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Warehouse to photography studio
                  </h3>
                </div>

                <Link
                  href="/projects/warehouse-to-photography-studio-visualisation"
                  className="text-sm font-semibold text-rust"
                >
                  Case study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL MULTIPLE OUTCOMES */}
      <section className="border-y border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-9 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              One Warehouse. Multiple Outcomes.
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Explore how one commercial property can carry several campaign
              stories.
            </h2>
          </div>

          <CommercialOutcomeGallery />
        </div>
      </section>

      {/* CHILDCARE */}
      <section id="childcare" className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Childcare
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Show the centre before the finished centre can be photographed.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-black/55">
                Development imagery can become completed property visuals,
                active rooms and outdoor environments that make the future
                childcare centre easier to understand.
              </p>

              <Link
                href="/childcare-development-visualisation"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore childcare visualisation
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                  after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                  beforeAlt="Property before childcare development visualisation"
                  afterAlt="Property transformed into a completed childcare centre"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Development
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Future childcare centre
                </h3>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/room1-before.png"
                  after="/images/childcare/before-after-childcare/room1-after.png"
                  beforeAlt="Childcare room before visual transformation"
                  afterAlt="Childcare room transformed into an active environment"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Interior
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Active learning environment
                </h3>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/Rearyard1-Before.png"
                  after="/images/childcare/before-after-childcare/Rearyard1-After.png"
                  beforeAlt="Childcare rear yard before visual transformation"
                  afterAlt="Childcare rear yard transformed into an active outdoor environment"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Outdoor
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Rear yard environment
                </h3>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/corner-site-childcare-before.png"
                  after="/images/childcare/before-after-childcare/corner-site-childcare-after.png"
                  beforeAlt="Corner site before childcare development visualisation"
                  afterAlt="Corner site transformed into a childcare centre"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Development
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Corner site transformation
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHILDCARE STORY */}
      <section className="border-y border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-9 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Explore The Development Story
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Move through the childcare project visually.
            </h2>
          </div>

          <ChildcareDevelopmentStory />
        </div>
      </section>

      {/* WHY */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Why Create Another Image?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Because another image should solve another campaign problem.
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  problem: "The room is empty",
                  solution:
                    "Show furniture, lifestyle or activity so buyers understand the space faster.",
                },
                {
                  problem: "The commercial use is unclear",
                  solution:
                    "Create an industry specific version for the tenant or operator you want to reach.",
                },
                {
                  problem: "The development is unfinished",
                  solution:
                    "Show the completed property story before it can be photographed.",
                },
                {
                  problem: "The campaign has been seen",
                  solution:
                    "Create another visual moment from the media already produced.",
                },
              ].map((item, index) => (
                <article
                  key={item.problem}
                  className="grid gap-4 border-b border-white/10 py-6 sm:grid-cols-[55px_0.8fr_1.2fr]"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brassBright">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-xl font-semibold">
                    {item.problem}
                  </h3>

                  <p className="leading-7 text-white/45">{item.solution}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/video-library"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Next Step
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Make The Image Move
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See existing property media transformed into animated campaign
                content.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore videos
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/services"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Services
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Choose The Transformation
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Lifestyle, furniture, visualisation, animation and finished
                campaign content.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore services
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/packages"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Packages
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Build A Property Campaign
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Combine several transformed images and animated scenes into a
                larger campaign.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore packages
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Existing Property Photography
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Already have the images?
            <br />
            Give them another job.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the property media you already have and tell us what the
            campaign needs people to see next.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Show us your property images
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}