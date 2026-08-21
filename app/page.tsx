import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CampaignBuilder from "@/components/CampaignBuilder";
import YouTubeVideoCarousel, {
  type YouTubeVideoCarouselItem,
} from "@/components/YouTubeVideoCarousel";

export const metadata: Metadata = {
  title: "Real Estate Media House | Property Media Made To Move",
  description:
    "Turn existing real estate photography, renders and footage into enhanced property imagery, lifestyle scenes, animation and finished campaign content.",
};

const featuredVideos: YouTubeVideoCarouselItem[] = [
  {
    id: "childcare-development",
    title: "From Existing Property To Future Childcare Centre",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Childcare Development",
    description:
      "Show the transformation from the existing property into the future childcare centre.",
    orientation: "portrait",
  },
  {
    id: "residential-day-night",
    title: "Residential Day To Night",
    url: "https://www.youtube.com/shorts/UMWARuYjMSU",
    category: "Residential",
    description:
      "Turn one facade image into another campaign moment with a day to night transformation.",
    orientation: "portrait",
  },
  {
    id: "commercial-warehouse",
    title: "Commercial Property In Use",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    description:
      "Help buyers and tenants imagine how an empty commercial property could actually be used.",
    orientation: "portrait",
  },
];

const propertyTypes = [
  {
    number: "01",
    title: "Childcare",
    description:
      "Show future centres, interiors, outdoor areas and development transformations before the project is complete.",
    href: "/childcare-property-animation",
    image:
      "/images/childcare/before-after-childcare/childcare-centre-new-build-after.png",
  },
  {
    number: "02",
    title: "Residential",
    description:
      "Create more campaign content from the photography already produced for the listing.",
    href: "/residential-property-animation",
    image:
      "/images/residential/residential-before-after/residential-home-after.png",
  },
  {
    number: "03",
    title: "Commercial",
    description:
      "Show different uses, future developments and the opportunity inside an empty commercial space.",
    href: "/commercial-property-animation",
    image:
      "/images/commercial/warehouse-multiple-afters/warehouse-after-1.png",
  },
];

const process = [
  {
    number: "01",
    title: "Send us what you already have",
    description:
      "Property photography, architectural renders, development imagery or existing footage.",
  },
  {
    number: "02",
    title: "We bring the image to life",
    description:
      "Lifestyle, people, furniture, lighting, landscaping and visual enhancements are applied where they add value.",
  },
  {
    number: "03",
    title: "Then we make it move",
    description:
      "Selected scenes become property animations, transformations and campaign moments.",
  },
  {
    number: "04",
    title: "Get more from the campaign",
    description:
      "One set of property media can now support more visual content without organising another shoot.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="overflow-hidden bg-ink text-white">
        <div className="container-shell py-16 md:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Real Estate Media House
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.3rem]">
                Property media
                <span className="block text-rust">
                  made to move.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                Turn the real estate photography, renders and footage you
                already have into fresh visual content built to keep the
                campaign moving.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/explore"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Explore the work
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/enquire"
                  className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Start a project
                </Link>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                  after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                  beforeAlt="Existing childcare development site"
                  afterAlt="Future childcare centre"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 px-2">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                  Drag to transform
                </p>

                <p className="text-sm text-white/40">
                  Existing site → Future centre
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONE SHOOT */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <Image
                src="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                alt="Property kitchen transformed into lifestyle campaign content"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority
              />

              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/65 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  Existing property media
                </p>

                <p className="mt-2 font-display text-2xl font-semibold">
                  Turn one image into another campaign moment.
                </p>
              </div>
            </div>

            <div className="max-w-3xl lg:pl-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                One shoot. More campaign content.
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Your listing is competing with everything.
                <span className="block text-rust">
                  Give people a reason to stop.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
                You already invested in the property photography. We help you
                get more visibility, more campaign mileage and more value from
                those same assets.
              </p>

              <Link
                href="/image-library"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                See what your images can become
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Property Types
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Different property.
              <br />
              Different visual story.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {propertyTypes.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white transition hover:border-rust hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />

                  <p className="absolute bottom-4 left-5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    {item.number}
                  </p>
                </div>

                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="font-display text-3xl font-semibold">
                      {item.title}
                    </h3>

                    <ArrowRight
                      size={20}
                      className="mt-2 shrink-0 text-rust transition group-hover:translate-x-1"
                    />
                  </div>

                  <p className="mt-4 leading-7 text-black/50">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Our Approach
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                First, we bring the image to life.
                <span className="block text-rust">
                  Then, we make it move.
                </span>
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {process.map((item) => (
                <article
                  key={item.number}
                  className="min-h-[240px] border-b border-r border-white/10 p-7"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-brassBright">
                    {item.number}
                  </p>

                  <h3 className="mt-10 font-display text-2xl font-semibold leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED MOTION */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={featuredVideos}
            eyebrow="Property Animation"
            heading="A still image can become another campaign moment."
            description="Explore examples across childcare, residential and commercial property."
          />

          <div className="mt-8 text-center">
            <Link
              href="/video-library"
              className="inline-flex items-center gap-2 font-semibold text-rust"
            >
              Explore the full video library
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* IMAGE TRANSFORMATION */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Interactive Transformation
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                See exactly how far one image can go.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-black/55">
                Drag between the original image and the finished transformation.
              </p>

              <Link
                href="/before-after"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore all before and afters
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/staging/living-room-before.jpeg"
                after="/property-images/website/staging/living-room-after.jpeg"
                beforeAlt="Original living room"
                afterAlt="Styled living room"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN BUILDER */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Find Your Starting Point
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              What do you want your property media to do?
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              Choose the transformations that make sense for your campaign and
              see which package is the closest fit.
            </p>
          </div>

          <CampaignBuilder />
        </div>
      </section>

      {/* SISTER BRAND */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-20 md:py-24">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr]">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              About Us
            </p>

            <div className="max-w-4xl">
              <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
                Real Estate Media House is the sister brand of RP Images.
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
                We created it to help agents and developers get more campaign
                value from the property media they already have.
              </p>

              <Link
                href="/services"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore what we do
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
            Now make it work harder.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us your existing property photography, renders or footage and
            we&apos;ll help identify the strongest opportunities.
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
    </main>
  );
}