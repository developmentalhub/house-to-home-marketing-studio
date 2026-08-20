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
      "Turn a polished property image into a scene buyers can imagine themselves stepping into.",
  },
  {
    number: "02",
    title: "Food & Entertaining",
    description:
      "Give kitchens, dining spaces and outdoor areas the energy of a real moment.",
  },
  {
    number: "03",
    title: "Furniture & Styling",
    description:
      "Complete empty or under styled spaces with furniture, art, rugs, plants and detail.",
  },
  {
    number: "04",
    title: "Lighting",
    description:
      "Shift the mood with warmer light, evening atmosphere or a more cinematic finish.",
  },
  {
    number: "05",
    title: "Landscape",
    description:
      "Strengthen lawns, gardens and planting so the outside feels as considered as the inside.",
  },
  {
    number: "06",
    title: "Pool",
    description:
      "Bring water, reflections, activity and poolside atmosphere into the scene.",
  },
  {
    number: "07",
    title: "Cars & Activity",
    description:
      "Introduce arrivals, vehicles and believable exterior activity to make the property feel active.",
  },
  {
    number: "08",
    title: "People & Pets",
    description:
      "Add scale, warmth and everyday life to help buyers see more than an empty space.",
  },
];

const propertyTypes = [
  {
    title: "Standard Home",
    eyebrow: "Residential",
    description:
      "Give an everyday listing more reasons to be noticed with lifestyle, styling, lighting, landscape and motion.",
    image:
      "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
    tags: [
      "Lifestyle",
      "Lighting",
      "Landscape",
      "Animation",
    ],
  },
  {
    title: "Premium Home",
    eyebrow: "Luxury Residential",
    description:
      "Build a more cinematic campaign around architecture, entertaining, arrivals, pool life and atmosphere.",
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
    eyebrow: "Commercial & Development",
    description:
      "Help people understand how the property will feel when it is active, occupied and complete.",
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
      "Show the journey from the existing site through demolition, construction, landscaping and the finished centre.",
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
    title: "Send us the media you already have",
    text:
      "Start with the professional photography, architectural renders or footage already created for the property.",
  },
  {
    number: "02",
    title: "Tell us where the campaign needs more",
    text:
      "We help identify the images with the most potential and the transformations that will give you something genuinely new to use.",
  },
  {
    number: "03",
    title: "We create the extra campaign moments",
    text:
      "We add lifestyle, styling, atmosphere, landscape and motion while keeping the property itself at the centre.",
  },
  {
    number: "04",
    title: "You get more from the original shoot",
    text:
      "Receive finished property content ready to support the campaign across your digital marketing.",
  },
];

const packageCards = [
  {
    name: "Property Refresh",
    price: "$495",
    href: "/packages/property-refresh",
    eyebrow: "A focused lift",
    description:
      "For a listing that needs fresh visual content without building a larger campaign.",
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
      "More transformed imagery and more moving moments to support the property campaign.",
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
      "A broader creative campaign for properties where presentation is part of the value.",
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
      "Turn multiple transformed scenes into one finished vertical property film.",
    images: "12 enhanced images",
    motion: "3 to 4 animated scenes",
    duration: "20 to 30 sec finished Reel",
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

            <h1 className="mt-6 max-w-6xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-8xl lg:text-[6.7rem]">
              Your listing is competing
              <br />
              with everything.
              <span className="mt-2 block text-rust">
                Give people a reason to stop.
              </span>
            </h1>

            <div className="mt-10 grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                You already paid for the photography. We turn those same
                property images and renders into fresh visual content that
                helps your campaign stay visible, feel current and work harder.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/explore"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  See what we can create
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
        <div className="container-shell py-8 md:py-9">
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
                </span>
                . We created it to help agents and developers get more campaign
                value from the property media they already have.
              </p>
            </div>

            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-3 font-semibold text-rust"
            >
              See how we support your campaign

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-rust/25 transition group-hover:bg-rust group-hover:text-white">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* PAIN POINT */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                One shoot. More campaign content.
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
                Your best property images should not disappear after one post.
              </h2>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-black/55">
                Feeds move quickly. Listings compete with new properties,
                personal content, video, advertising and everything else
                fighting for attention. We give your existing property media
                more ways to show up without asking you to organise another
                shoot.
              </p>

              <Link
                href="/explore"
                className="mt-7 inline-flex items-center gap-3 font-semibold text-rust"
              >
                See how one image can change
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
                Same photography. New campaign value.
              </p>

              <h3 className="mt-3 max-w-2xl font-display text-3xl font-semibold">
                Give buyers more than an empty room to look at.
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-black/50">
                The property stays the hero. We create the moment around it.
              </p>
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
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Create the moments buyers stop for
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Great photography shows the property.
              <br />
              We help people feel something around it.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              Add the details that create emotion, context and attention.
              People, entertaining, styling, landscape, lighting and movement
              can turn a static property image into a completely new piece of
              campaign content.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {transformations.map((item) => (
              <article
                key={item.title}
                className="group min-h-[260px] border-b border-r border-black/10 p-7 transition hover:bg-white md:p-8"
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
              Explore all transformations
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
                Different property. Different opportunity.
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Not every listing should look like every other listing.
              </h2>
            </div>

            <p className="max-w-lg leading-7 text-black/50">
              We shape the treatment around the property, the audience and the
              story you need the campaign to tell.
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
              Explore property examples
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
                Property media made to move
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                The feed moves fast.
                <br />
                Your property should too.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-white/55">
                A still image can show the space. Motion can create a new reason
                to notice it. We turn selected property images into cinematic
                scenes that give your campaign another opportunity to earn
                attention.
              </p>

              <Link
                href="/video-library"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-brassBright"
              >
                Watch the transformations
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-0 border-l border-t border-white/10 sm:grid-cols-2">
              {[
                [
                  "01",
                  "Furniture Appearing",
                  "Turn an empty room into a styled scene in motion.",
                ],
                [
                  "02",
                  "Day to Night",
                  "Move a property from daylight into warmer evening atmosphere.",
                ],
                [
                  "03",
                  "Show The Arrival",
                  "Add cars, people and a sense of activity around the property.",
                ],
                [
                  "04",
                  "Cinematic Movement",
                  "Create depth and movement from an image that originally stood still.",
                ],
                [
                  "05",
                  "Build Sequence",
                  "Show a site or development progressing towards completion.",
                ],
                [
                  "06",
                  "Finished Property Reel",
                  "Bring multiple moving scenes together into one finished property story.",
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
                See it in motion
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Static property media becomes something new.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
                We use the property media you already have to create fresh
                moving content without sending another production crew back to
                the property.
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

      {/* SUPPORT */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Your creative property media partner
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Less for your team to organise.
                <br />
                More for your campaign to use.
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-black/50">
                You focus on the vendor, the buyers, the launch and the listing.
                We support the visual campaign by getting more from the media
                already produced.
              </p>
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
                Campaign support that scales
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
                Some listings need a lift.
                <br />
                Others need a content runway.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
                Choose the level of support that suits the property. Start with
                a focused refresh or build a larger campaign with more enhanced
                imagery, more motion and a finished Property Reel.
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
                className={`group relative flex min-h-[430px] flex-col rounded-[2rem] border p-7 transition hover:-translate-y-1 hover:shadow-soft ${
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
                      Finished Property Reel included
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
                  Developments need a different story
                </p>

                <h3 className="mt-3 font-display text-3xl font-semibold">
                  Development Campaign
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-black/50">
                  Show people what is coming before they can see it for
                  themselves. Create demolition, construction, landscape, car
                  park, activity and finished development sequences from your
                  existing project media.
                </p>
              </div>

              <div className="flex items-center gap-3 font-semibold text-rust">
                View Development Campaign
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
            Keep the campaign moving
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            The shoot is done.
            <br />
            The campaign does not have to look done.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the property media you already have. We&apos;ll turn it
            into fresh campaign content that gives the listing more variety,
            more visibility and more opportunities to earn attention.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              Make this listing stand out
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/explore"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              See what we can create
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}