import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  MoveRight,
  Play,
} from "lucide-react";

import SocialEmbed from "@/components/SocialEmbed";

const featuredVideos = [
  {
    url: "https://www.instagram.com/rpimages.au/reel/DcP0_PoA7L6/",
    caption: "Property Reel",
  },
  {
    url: "https://www.tiktok.com/@rpimages.au/video/7675941178067488007",
    caption: "Property Animation",
  },
];

const transformations = [
  {
    number: "01",
    title: "Lifestyle",
    description:
      "Add believable people, families, pets and everyday activity.",
  },
  {
    number: "02",
    title: "Food & Entertaining",
    description:
      "Style kitchens, dining tables, outdoor areas and entertaining moments.",
  },
  {
    number: "03",
    title: "Furniture & Styling",
    description:
      "Add furniture, artwork, rugs, plants and finishing touches.",
  },
  {
    number: "04",
    title: "Lighting",
    description:
      "Improve atmosphere, create golden hour or move the property into evening.",
  },
  {
    number: "05",
    title: "Landscape",
    description:
      "Improve lawns, planting, gardens and mature the surroundings.",
  },
  {
    number: "06",
    title: "Pool",
    description:
      "Bring water, reflections and poolside life into the scene.",
  },
  {
    number: "07",
    title: "Cars & Activity",
    description:
      "Add vehicles, arrivals and believable exterior activity.",
  },
  {
    number: "08",
    title: "People & Pets",
    description:
      "Create a more lived-in property with human and pet activity.",
  },
];

const propertyTypes = [
  {
    title: "Standard Home",
    eyebrow: "Residential",
    description:
      "See how an everyday listing can be elevated with lifestyle, lighting, landscaping and short animation.",
    image:
      "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
    tags: [
      "Lifestyle",
      "Lighting",
      "Landscape",
      "Short Animation",
    ],
  },
  {
    title: "Premium Home",
    eyebrow: "Luxury Residential",
    description:
      "Explore more cinematic treatments including golden hour, pool life, arrivals and premium motion.",
    image:
      "/property-images/website/lifestyle/foyer-after.jpeg",
    tags: [
      "Golden Hour",
      "Pool",
      "Arrival",
      "Property Reel",
    ],
  },
  {
    title: "Commercial",
    eyebrow: "Commercial / Development",
    description:
      "Show more life, landscaping, cars, people and movement around larger commercial or development imagery.",
    image:
      "/property-images/website/staging/living-room-after.jpeg",
    tags: [
      "Cars",
      "People",
      "Landscape",
      "Motion",
    ],
  },
  {
    title: "Childcare Transformation",
    eyebrow: "Development Story",
    description:
      "From an existing site to demolition, construction, landscaping, car park and finished reveal.",
    image:
      "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
    tags: [
      "Demolition",
      "Build",
      "Car Park",
      "Final Reveal",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Start with the property media you already have",
    text:
      "Professional photography, architectural renders or existing footage become the starting point.",
  },
  {
    number: "02",
    title: "Choose what should be brought to life",
    text:
      "We identify the scenes that suit lifestyle, furniture, lighting, landscaping or other visual enhancement.",
  },
  {
    number: "03",
    title: "Make selected scenes move",
    text:
      "Animations can introduce cinematic camera movement, arrivals, lighting changes, build sequences and more.",
  },
  {
    number: "04",
    title: "Build the larger property story",
    text:
      "Higher packages include more motion, with the Property Reel Campaign combining multiple animated scenes into a finished vertical Reel.",
  },
];

const packageCards = [
  {
    name: "Property Refresh",
    price: "$495",
    href: "/packages/property-refresh",
    eyebrow: "Entry Package",
    description:
      "A focused refresh for a single property using enhanced still imagery and one short animated scene.",
    images: "5 enhanced images",
    motion: "1 short animation",
    duration: "Up to 5 sec",
    featured: false,
    reel: false,
  },
  {
    name: "Property Campaign",
    price: "$895",
    href: "/packages/property-campaign",
    eyebrow: "Most Popular",
    description:
      "More enhanced imagery and multiple animated moments across the property.",
    images: "8 enhanced images",
    motion: "2 animations",
    duration: "Up to 10 sec total",
    featured: true,
    reel: false,
  },
  {
    name: "Premium Campaign",
    price: "$1,295",
    href: "/packages/premium-campaign",
    eyebrow: "Premium Property",
    description:
      "A larger visual campaign with more enhanced stills and multiple animated scenes.",
    images: "12 enhanced images",
    motion: "3 animated scenes",
    duration: "Around 15 sec total",
    featured: false,
    reel: false,
  },
  {
    name: "Property Reel Campaign",
    price: "$1,590",
    href: "/packages/property-reel-campaign",
    eyebrow: "Complete Property Story",
    description:
      "Enhanced imagery, multiple animated scenes and one finished vertical Property Reel.",
    images: "12 enhanced images",
    motion: "3–4 animated scenes",
    duration: "20–30 sec finished Reel",
    featured: false,
    reel: true,
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="container-shell py-24 md:py-32 lg:py-40">
          <div className="max-w-6xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Real Estate Media House
            </p>

            <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-8xl lg:text-[7rem]">
              Your property.
              <span className="block text-white/35">
                Choose what happens next.
              </span>
            </h1>

            <div className="mt-10 grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                We transform the property photography and renders you already
                have with lifestyle, furniture, lighting, landscaping and
                cinematic animation.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/explore"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Explore what&apos;s possible
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/video-library"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-white/60"
                >
                  Watch our work
                  <Play size={16} />
                </Link>
              </div>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
              <span>Lifestyle</span>
              <span>Furniture</span>
              <span>Lighting</span>
              <span>Landscape</span>
              <span>Animation</span>
              <span>Property Reels</span>
              <span>Build Reveals</span>
            </div>
          </div>
        </div>
      </section>

      {/* SISTER BRAND */}
      <section className="border-b border-black/10 bg-white">
        <div className="container-shell py-7 md:py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-4xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-rust">
                From the team behind RP Images
              </p>

              <p className="mt-2 text-base leading-7 text-black/65 md:text-lg">
                <span className="font-semibold text-ink">
                  Real Estate Media House
                </span>{" "}
                is the sister brand of{" "}
                <span className="font-semibold text-ink">
                  RP Images
                </span>{" "}
                — built on the belief that great real estate visuals should
                keep working long after the original property shoot.
              </p>
            </div>

            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-3 font-semibold text-rust"
            >
              See what we create

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-rust/25 transition group-hover:bg-rust group-hover:text-white">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* BIG IDEA */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                See what can happen
              </p>

              <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
                One property image can become a completely different marketing
                moment.
              </h2>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-black/55">
                We&apos;re not simply placing text over a property photograph.
                We&apos;re changing what happens inside the scene — adding
                lifestyle, atmosphere, styling, landscape, activity and motion.
              </p>

              <Link
                href="/explore"
                className="mt-7 inline-flex items-center gap-3 font-semibold text-rust"
              >
                Explore the transformations
                <MoveRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/property-images/website/staging/kitchen-before.jpeg"
                  alt="Original kitchen property photograph"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] shadow">
                Original
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                  alt="Kitchen enhanced with people and lifestyle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute left-5 top-5 rounded-full bg-ink/95 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                Brought to life
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Lifestyle Enhancement
              </p>

              <h3 className="mt-3 font-display text-3xl font-semibold">
                Same room. Completely different feeling.
              </h3>
            </div>

            <Link
              href="/image-library"
              className="inline-flex items-center gap-2 font-semibold"
            >
              View Image Library
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION CATEGORIES */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Enhance the image
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              What would make the property feel more alive?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
              Every property needs something different. These are some of the
              creative transformations we can introduce into supplied imagery.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {transformations.map((item) => (
              <article
                key={item.title}
                className="group min-h-[250px] border-b border-r border-black/10 p-7 transition hover:bg-white md:p-8"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                  {item.number}
                </p>

                <h3 className="mt-12 font-display text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/50">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-semibold text-rust"
            >
              Explore all enhancement options
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROPERTY WORLDS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Explore by property
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Different properties need different stories.
              </h2>
            </div>

            <p className="max-w-lg leading-7 text-black/50">
              Explore four example property types and see the kinds of image
              enhancements and animation that can work for each one.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {propertyTypes.map((property, index) => (
              <article
                key={property.title}
                className="group relative min-h-[500px] overflow-hidden rounded-[2rem] bg-ink text-white"
              >
                <Image
                  src={property.image}
                  alt={`${property.title} example`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/5" />

                <div className="absolute left-6 top-6 rounded-full border border-white/25 bg-black/25 px-4 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-white/80 backdrop-blur">
                  0{index + 1}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brassBright">
                    {property.eyebrow}
                  </p>

                  <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                    {property.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-white/65">
                    {property.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {property.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 bg-black/20 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/75 backdrop-blur"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:bg-rust"
            >
              Explore the property examples
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* MOTION */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Make it move
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                The still image is only the beginning.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-white/55">
                Short animations turn static imagery into cinematic moments.
                Bigger campaigns combine multiple animated scenes into a
                finished Property Reel.
              </p>

              <Link
                href="/video-library"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-brassBright"
              >
                Watch our animations
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-0 border-l border-t border-white/10 sm:grid-cols-2">
              {[
                [
                  "01",
                  "Furniture Appearing",
                  "Turn an empty or static room into a styled scene.",
                ],
                [
                  "02",
                  "Day → Night",
                  "Move from daylight through golden hour into evening.",
                ],
                [
                  "03",
                  "Car Arrival",
                  "Create movement and life around the property exterior.",
                ],
                [
                  "04",
                  "Cinematic Motion",
                  "Create depth, camera movement and a more film-like scene.",
                ],
                [
                  "05",
                  "Build Sequence",
                  "Show a building progressing from site to completion.",
                ],
                [
                  "06",
                  "Finished Property Reel",
                  "Combine multiple animated moments into one property story.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={title}
                  className="min-h-[210px] border-b border-r border-white/10 p-6"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-brassBright">
                    {number}
                  </p>

                  <h3 className="mt-10 font-display text-2xl font-semibold">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO LIBRARY */}
      <section
        id="video-library"
        className="border-b border-black/10 bg-[#f7f5f1] py-20 md:py-28"
      >
        <div className="container-shell">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Video Library
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                See the work actually move.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
                Property photography and renders transformed into short
                animations, motion scenes and finished vertical content.
              </p>
            </div>

            <Link
              href="/video-library"
              className="group inline-flex items-center gap-3 font-semibold"
            >
              View full library

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition group-hover:bg-ink group-hover:text-white">
                <ArrowRight size={17} />
              </span>
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {featuredVideos.map((video, index) => (
              <article
                key={video.url}
                className="overflow-hidden rounded-[2rem] bg-ink p-3 text-white"
              >
                <div className="overflow-hidden rounded-[1.5rem] bg-black">
                  <SocialEmbed
                    url={video.url}
                    caption={video.caption}
                  />
                </div>

                <div className="flex items-center justify-between px-4 py-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                      0{index + 1}
                    </p>

                    <p className="mt-1 font-display text-xl">
                      {video.caption}
                    </p>
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-brassBright">
                    Watch
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How it works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Your photography starts the story.
                <br />
                We do the transforming.
              </h2>
            </div>

            <div>
              {process.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-t border-black/10 py-8 sm:grid-cols-[80px_1fr]"
                >
                  <p className="font-mono text-sm text-rust">
                    {step.number}
                  </p>

                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-black/50">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Property Packages
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
                More enhanced images.
                <br />
                More motion.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
                Every residential package includes enhanced property imagery
                and animation. Higher packages include more animated scenes,
                longer motion and eventually a finished vertical Property Reel.
              </p>
            </div>

            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
            >
              Compare all packages
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {packageCards.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative flex min-h-[420px] flex-col rounded-[2rem] border p-7 transition hover:-translate-y-1 hover:shadow-soft ${
                  item.featured
                    ? "border-rust bg-ink text-white"
                    : "border-black/10 bg-white"
                }`}
              >
                <div>
                  <p
                    className={`font-mono text-[9px] font-semibold uppercase tracking-[0.17em] ${
                      item.featured
                        ? "text-brassBright"
                        : "text-rust"
                    }`}
                  >
                    {item.eyebrow}
                  </p>

                  <h3 className="mt-5 font-display text-3xl font-semibold leading-tight">
                    {item.name}
                  </h3>

                  <div className="mt-5">
                    <span className="font-display text-4xl font-semibold">
                      {item.price}
                    </span>

                    <span
                      className={`ml-2 text-xs ${
                        item.featured
                          ? "text-white/35"
                          : "text-black/35"
                      }`}
                    >
                      + GST
                    </span>
                  </div>

                  <p
                    className={`mt-6 leading-7 ${
                      item.featured
                        ? "text-white/55"
                        : "text-black/50"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  className={`mt-8 border-t pt-6 ${
                    item.featured
                      ? "border-white/10"
                      : "border-black/10"
                  }`}
                >
                  <p
                    className={`text-sm ${
                      item.featured
                        ? "text-white/65"
                        : "text-black/55"
                    }`}
                  >
                    {item.images}
                  </p>

                  <p
                    className={`mt-2 text-sm ${
                      item.featured
                        ? "text-white/65"
                        : "text-black/55"
                    }`}
                  >
                    {item.motion}
                  </p>

                  <p
                    className={`mt-2 text-sm ${
                      item.featured
                        ? "text-white/40"
                        : "text-black/40"
                    }`}
                  >
                    {item.duration}
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  {item.reel && (
                    <p className="mb-4 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-rust">
                      Finished vertical Reel included
                    </p>
                  )}

                  <div
                    className={`flex items-center justify-between border-t pt-5 font-semibold ${
                      item.featured
                        ? "border-white/10 text-brassBright"
                        : "border-black/10 text-rust"
                    }`}
                  >
                    View package

                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/packages/development-campaign"
            className="group mt-5 block rounded-[2rem] border border-black/10 bg-white p-7 transition hover:border-rust hover:shadow-soft md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                  Custom Scope
                </p>

                <h3 className="mt-3 font-display text-3xl font-semibold">
                  Development Campaign
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-black/50">
                  Demolition, construction stages, childcare centres,
                  commercial developments, car parks, landscaping,
                  render-to-reality and complex transformation sequences.
                </p>
              </div>

              <div className="flex items-center gap-3 font-semibold text-rust">
                View development package
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Real Estate Media House
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Have the photos?
            <br />
            Let&apos;s bring them to life.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Start with the property photography or renders you already have.
            We&apos;ll help you decide which scenes should be enhanced, which
            should move and how far to take the campaign.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              Explore what&apos;s possible
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}