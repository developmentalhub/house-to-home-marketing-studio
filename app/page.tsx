import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Clapperboard,
  MoveRight,
  Play,
  Sparkles,
  Wand2,
} from "lucide-react";

import SocialEmbed from "@/components/SocialEmbed";
import PackageCard from "@/components/PackageCard";

const featuredVideos = [
  {
    url: "https://www.instagram.com/p/DcPX4nBB-Ps/",
    caption: "Property Reel",
  },
  {
    url: "https://www.tiktok.com/@rpimages.au/video/7675941476982918418",
    caption: "Property Animation",
  },
];

const services = [
  {
    title: "Property Reels",
    description:
      "Vertical short-form video created from your existing property photography, renders and footage.",
    icon: Play,
  },
  {
    title: "Property Animations",
    description:
      "Turn still property imagery into cinematic motion designed to earn attention.",
    icon: Clapperboard,
  },
  {
    title: "Lifestyle Enhancement",
    description:
      "Add believable people, atmosphere and activity to bring ordinary property photography to life.",
    icon: Sparkles,
  },
  {
    title: "Property Graphics",
    description:
      "Premium launch, feature and campaign graphics created from the imagery you already have.",
    icon: Wand2,
  },
];

const steps = [
  {
    number: "01",
    title: "Send us your media",
    text: "Send through the property photos, renders or footage you already have.",
  },
  {
    number: "02",
    title: "Choose what you need",
    text: "Select Reels, animations, lifestyle imagery, graphics or a complete content pack.",
  },
  {
    number: "03",
    title: "We bring it to life",
    text: "We create the finished visual content and deliver it ready for your marketing.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="container-shell py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Real Estate Media House
            </p>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.96] tracking-[-0.035em] sm:text-6xl md:text-8xl lg:text-[7rem]">
              Property media
              <span className="block text-white/35">
                made to move.
              </span>
            </h1>

            <div className="mt-9 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                We turn the property photos, renders and footage you already
                have into Reels, animations, lifestyle imagery and visual
                campaigns built to earn attention.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#video-library"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Watch our work
                  <Play size={17} />
                </Link>

                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-white/60"
                >
                  Start a project
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-white/35">
              <span>Property Reels</span>
              <span>Animations</span>
              <span>Build Reveals</span>
              <span>Lifestyle Imagery</span>
              <span>Campaign Graphics</span>
            </div>
          </div>
        </div>
      </section>

      {/* RP IMAGES SISTER BRAND BANNER */}
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
                <span className="font-semibold text-ink">RP Images</span> —
                built on the belief that great real estate visuals should work
                just as hard on social media as they do anywhere else.
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
                Our latest property films, Reels and animations.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
                Existing property photography and renders transformed into
                visual content designed for modern property marketing.
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

                  <Play
                    size={18}
                    className="text-brassBright"
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="border border-black/10 bg-white p-6">
              <p className="font-display text-3xl font-semibold">
                Still → Reel
              </p>

              <p className="mt-2 text-sm leading-6 text-black/50">
                Existing listing photography transformed into vertical video.
              </p>
            </div>

            <div className="border border-black/10 bg-white p-6">
              <p className="font-display text-3xl font-semibold">
                Render → Motion
              </p>

              <p className="mt-2 text-sm leading-6 text-black/50">
                Architectural renders turned into moving campaign assets.
              </p>
            </div>

            <div className="border border-black/10 bg-white p-6">
              <p className="font-display text-3xl font-semibold">
                Photo → Lifestyle
              </p>

              <p className="mt-2 text-sm leading-6 text-black/50">
                Property photography enhanced with believable people and
                activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More from every image
              </p>

              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
                Your property photography shouldn&apos;t stop working after one
                post.
              </h2>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-black/60">
                Agents and developers already invest in good imagery. We take
                those existing assets and turn them into an entire library of
                content without another property shoot.
              </p>

              <Link
                href="/services"
                className="mt-7 inline-flex items-center gap-3 font-semibold text-rust"
              >
                Explore our services
                <MoveRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What we create
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              A content studio for property.
            </h2>
          </div>

          <div className="mt-12 grid border-l border-t border-black/10 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group border-b border-r border-black/10 p-8 transition hover:bg-white md:p-10"
                >
                  <div className="flex items-start justify-between gap-5">
                    <Icon
                      size={24}
                      strokeWidth={1.6}
                      className="text-rust"
                    />

                    <ArrowRight
                      size={18}
                      className="-translate-x-2 text-black/20 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="mt-12 font-display text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-black/55">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Simple by design
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                You already have the assets.
              </h2>

              <p className="mt-5 max-w-md leading-7 text-white/55">
                No ongoing social media management. No monthly contract. Just
                professionally produced visual content for the property you
                need to market.
              </p>
            </div>

            <div>
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-t border-white/15 py-8 sm:grid-cols-[80px_1fr]"
                >
                  <p className="font-mono text-sm text-brassBright">
                    {step.number}
                  </p>

                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-white/55">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE TRANSFORMATIONS */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Image Transformations
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                From property photograph to lived experience.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
                Add believable people, activity and atmosphere to help buyers
                imagine what living in the property could actually feel like.
              </p>
            </div>

            <Link
              href="/image-library"
              className="group inline-flex items-center gap-3 font-semibold"
            >
              Explore image library

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition group-hover:bg-ink group-hover:text-white">
                <ArrowRight size={17} />
              </span>
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {/* BEFORE */}
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

              <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em]">
                Original
              </div>
            </div>

            {/* AFTER */}
            <div className="relative overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                  alt="Kitchen property photograph enhanced with people and lifestyle"
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

          <div className="mt-8 max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
              Lifestyle Enhancement
            </p>

            <h3 className="mt-3 font-display text-3xl font-semibold">
              Same room. Completely different feeling.
            </h3>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Content packs
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Priced by property.
                <br />
                Not by month.
              </h2>
            </div>

            <Link
              href="/packages"
              className="inline-flex items-center gap-2 font-semibold"
            >
              Compare packages
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <PackageCard
              name="Starter"
              price="$495 + GST"
              description="Essential creative content for one listing."
              items={[
                "5 property graphics",
                "1 short animation",
                "Social-ready delivery",
                "Client-supplied photography",
              ]}
            />

            <PackageCard
              featured
              name="Property Content"
              price="$795 + GST"
              description="A complete content set built around one property."
              items={[
                "8 property graphics",
                "2 short animations",
                "1 vertical Reel",
                "Social-ready delivery",
              ]}
            />

            <PackageCard
              name="Premium Launch"
              price="$1,295 + GST"
              description="More content for premium listings and launches."
              items={[
                "12 property graphics",
                "3 short animations",
                "2 vertical Reels",
                "2 launch graphics",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Real Estate Media House
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Send us your property.
            <br />
            We&apos;ll make it move.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Start with the images, renders or footage you already have and turn
            them into a library of visual content.
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
    </main>
  );
}