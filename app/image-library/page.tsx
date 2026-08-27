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
    "Explore enhanced property image transformations across residential, commercial and childcare using existing photography and project media.",
  alternates: {
    canonical: `${SITE_URL}/image-library`,
  },
  openGraph: {
    title: "Property Image Transformations | Real Estate Media House",
    description:
      "See existing property photography transformed with people, furniture, appliances, décor, cars, landscaping, lighting, atmosphere and future use storytelling.",
    url: `${SITE_URL}/image-library`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/childcare/before-after-childcare/childcare-centre-new-build-after.png`,
        alt: "Property transformed into a completed childcare development visual",
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
    id: "residential-bedroom",
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
      "An empty living area shown with furniture to improve scale, purpose and emotional context.",
    image:
      "/property-images/website/staging/living-room-after.jpeg",
  },
  {
    id: "bathroom-lifestyle",
    title: "Bathroom Lifestyle",
    category: "Lifestyle",
    description:
      "Existing bathroom photography developed into another campaign visual with more atmosphere.",
    image:
      "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
  },
  {
    id: "foyer",
    title: "Foyer Transformation",
    category: "Residential",
    description:
      "Existing property photography developed into another polished campaign image.",
    image: "/property-images/website/lifestyle/foyer-after.jpeg",
  },
];

const enhancedExamples = [
  {
    number: "01",
    title: "People",
    text: "Add believable people and everyday activity that help someone imagine how the property could feel in use.",
  },
  {
    number: "02",
    title: "Furniture",
    text: "Add or refine furniture while keeping the architecture, room proportions and layout accurate.",
  },
  {
    number: "03",
    title: "Appliances & Décor",
    text: "Introduce selected appliances, styling and decorative details without redesigning the property itself.",
  },
  {
    number: "04",
    title: "Cars & Activity",
    text: "Add appropriate vehicles, people and movement to exterior scenes where they help communicate the story.",
  },
  {
    number: "05",
    title: "Landscape",
    text: "Refine lawns, planting and surrounding atmosphere while keeping the built form true.",
  },
  {
    number: "06",
    title: "Lighting & Atmosphere",
    text: "Use daylight, warmth, dusk and evening atmosphere to change the emotional tone of an existing image.",
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
                Drag the images and see what existing property photography and
                project media can become.
              </p>

              <p className="mt-5 max-w-xl leading-8 text-white/45">
                People. Furniture. Appliances. Décor. Cars. Landscaping.
                Lighting. Atmosphere. Commercial use. Development
                visualisation.
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
                  before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                  after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                  beforeAlt="Property before childcare centre development visualisation"
                  afterAlt="Property transformed into a completed childcare centre visual"
                />
              </div>

              <div className="flex items-center justify-between gap-4 px-1">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                    Childcare Development
                  </p>

                  <p className="mt-1 font-display text-xl font-semibold">
                    Future childcare centre
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
              className="rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-5 transition hover:border-rust hover:bg-white"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                01
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold">
                Residential
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/45">
                Lifestyle, furniture, people, atmosphere and finished property
                transformations.
              </p>
            </a>

            <a
              href="#commercial"
              className="rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-5 transition hover:border-rust hover:bg-white"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                02
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold">
                Commercial
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/45">
                Show vacant property as a relevant environment for specific
                commercial audiences.
              </p>
            </a>

            <a
              href="#childcare"
              className="rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-5 transition hover:border-rust hover:bg-white"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                03
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold">
                Childcare
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/45">
                Development, interiors, landscaping and active environments
                brought to life.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ENHANCED IMAGE DEFINITION */}
      <section className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Enhanced Property Images
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Keep the architecture true.
                <span className="block text-rust">
                  Build the life around it.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                We keep the architecture, layout, room proportions and defining
                property elements accurate to the supplied media.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                Depending on the property and campaign story, we can then add
                or refine people, furniture, appliances, décor, cars,
                landscaping, lighting, atmosphere and everyday activity.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                The goal is not to redesign the property. It is to make the
                existing image feel more complete, more human and more useful
                to the campaign.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {enhancedExamples.map((item) => (
              <article
                key={item.number}
                className="rounded-[1.75rem] border border-black/10 bg-white p-7"
              >
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  {item.number}
                </p>

                <h3 className="mt-5 font-display text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-black/50">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESIDENTIAL */}
      <section
        id="residential"
        className="border-y border-black/10 bg-white py-16 md:py-20"
      >
        <div className="container-shell">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Residential
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A room is one thing.
                <span className="block text-rust">
                  The life around it is another.
                </span>
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-black/55">
                Existing residential photography can become styled spaces,
                lifestyle moments and additional campaign images while the
                original listing photography remains available.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The aim is not simply to fill an empty room. It is to help
                someone imagine the routines, comfort and moments that could
                happen there.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f5f1] shadow-soft">
                <BeforeAfterSlider
                  before="/images/residential/residential-before-after/residential-home-before.png"
                  after="/images/residential/residential-before-after/residential-home-after.png"
                  beforeAlt="Original residential property exterior"
                  afterAlt="Residential property exterior transformed into additional campaign content"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Residential
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Property exterior
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-black/45">
                  Add warmth, activity, vehicles, landscaping or atmosphere
                  while keeping the home itself recognisable.
                </p>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f5f1] shadow-soft">
                <BeforeAfterSlider
                  before="/property-images/website/staging/living-room-before.jpeg"
                  after="/property-images/website/staging/living-room-after.jpeg"
                  beforeAlt="Empty residential living room before styling"
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

                <p className="mt-3 max-w-xl leading-7 text-black/45">
                  Show how the room might function without changing its
                  architecture, dimensions or defining features.
                </p>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f5f1] shadow-soft">
                <BeforeAfterSlider
                  before="/property-images/website/lifestyle/bedroom-before.jpeg"
                  after="/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg"
                  beforeAlt="Original residential bedroom photograph"
                  afterAlt="Residential bedroom transformed into lifestyle campaign content"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Lifestyle
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Bedroom
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-black/45">
                  Take the same room and give it more atmosphere, comfort and a
                  stronger emotional role in the campaign.
                </p>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f5f1] shadow-soft">
                <BeforeAfterSlider
                  before="/property-images/website/lifestyle/bathroom-before.jpeg"
                  after="/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg"
                  beforeAlt="Original residential bathroom photograph"
                  afterAlt="Residential bathroom transformed into lifestyle campaign content"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  Lifestyle
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Bathroom
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-black/45">
                  Turn a feature photograph into a more human moment built
                  around comfort, routine and atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL SWIPE */}
      <section className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-9 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              More Residential Outcomes
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              One shoot can keep giving the campaign new moments.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/50">
              Swipe through more finished images created from existing
              residential media.
            </p>
          </div>

          <SwipeGallery items={residentialGallery} />
        </div>
      </section>

      {/* COMMERCIAL */}
      <section
        id="commercial"
        className="border-y border-black/10 bg-white py-16 md:py-20"
      >
        <div className="container-shell">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Commercial
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Do not ask the tenant
                <span className="block text-rust">
                  to imagine an empty box.
                </span>
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-black/55">
                Instead of describing a warehouse as flexible, show different
                audiences how their business might actually operate there.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                People, vehicles, equipment, storage, furniture and activity
                can all help a vacant property feel relevant to the right
                operator while the underlying warehouse remains true.
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

          <CommercialOutcomeGallery />
        </div>
      </section>

      {/* CHILDCARE */}
      <section
        id="childcare"
        className="bg-[#f7f5f1] py-16 md:py-20"
      >
        <div className="container-shell">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Childcare
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A future centre is more
                <span className="block text-rust">
                  than a future building.
                </span>
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-black/55">
                Development imagery can become completed property visuals,
                active rooms and outdoor environments that make the future
                childcare centre easier to understand.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The story might include arrival, children moving through the
                spaces, outdoor play, landscaping, furniture and the centre
                beginning to feel part of a community.
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

          <div className="mt-12">
            <ChildcareDevelopmentStory />
          </div>
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
                Because another image should
                <span className="block text-rust">
                  tell another part of the story.
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  problem: "The room is empty",
                  solution:
                    "Add furniture, people, appliances, décor or activity so someone can understand the space and imagine life there.",
                },
                {
                  problem: "The photography feels emotionally flat",
                  solution:
                    "Add atmosphere and human context so the same room can communicate a moment rather than simply a feature.",
                },
                {
                  problem: "The commercial use is unclear",
                  solution:
                    "Create an industry specific version for the tenant or operator you want to reach.",
                },
                {
                  problem: "The development is unfinished",
                  solution:
                    "Use supplied project media to communicate the intended future property and the life around it.",
                },
                {
                  problem: "The campaign has already been seen",
                  solution:
                    "Create another visual and emotional moment from the media already produced.",
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
                See selected property images transformed into animated scenes
                of up to 10 seconds each.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore videos
                <ArrowRight size={17} />
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
                Enhanced imagery, lifestyle, furniture, visualisation,
                animation and finished campaign content.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore services
                <ArrowRight size={17} />
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
                Build A Property Story
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Combine enhanced images, animated scenes, hooks, captions and
                sequencing into a larger campaign story.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore packages
                <ArrowRight size={17} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-10">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
              Development Visualisation
            </p>

            <p className="mt-4 max-w-4xl leading-7 text-black/45">
              Development visualisation is created for marketing communication.
              It is not proof of planning approval, feasibility, building
              compliance or operational suitability.
            </p>
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
            Give them another story.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the property media you already have. We’ll identify the
            strongest opportunities for enhanced imagery, atmosphere, movement
            and narrative.
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