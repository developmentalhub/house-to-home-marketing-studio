import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property Media Services | Real Estate Media House",
  description:
    "Transform existing real estate photography, renders and footage into enhanced property visuals, lifestyle scenes, commercial visualisation, animation and finished property video.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Property Media Services | Real Estate Media House",
    description:
      "Get more campaign value from the property media you already have with enhanced stills, visualisation, animation and finished property content.",
    url: `${SITE_URL}/services`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Existing commercial property photography transformed into additional marketing content",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Property Media Transformation",
  description:
    "Real Estate Media House transforms supplied property photography, renders and footage into enhanced visuals, commercial property visualisation, animation and finished property campaign content.",
  provider: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  url: `${SITE_URL}/services`,
};

const videos = [
  {
    id: "residential-kitchen",
    title: "Residential Kitchen Animation",
    url: "https://www.youtube.com/shorts/5NP5Ay_3SBY",
    category: "Residential",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-warehouse",
    title: "Commercial Warehouse Animation",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-development",
    title: "Childcare Development Transformation",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Childcare",
    orientation: "portrait" as const,
  },
];

const services = [
  {
    number: "01",
    title: "Enhanced Property Images",
    description:
      "Create additional finished stills from existing photography with stronger atmosphere, lighting, landscaping, people or visual polish.",
    href: "/image-library",
  },
  {
    number: "02",
    title: "Lifestyle Visuals",
    description:
      "Add people and everyday activity to clean property photography so the space feels more lived in and easier to connect with.",
    href: "/image-library",
  },
  {
    number: "03",
    title: "Furniture & Styling",
    description:
      "Show an empty or lightly presented room with a clearer furnishing and styling direction using the original property image.",
    href: "/image-library",
  },
  {
    number: "04",
    title: "Commercial Property Visualisation",
    description:
      "Show a vacant commercial property as a relevant possible use for a gym, mechanic, logistics operator, photographer or another target audience.",
    href: "/commercial-property-visualisation",
  },
  {
    number: "05",
    title: "Property Animation",
    description:
      "Turn still property images into short moving scenes using people, vehicles, atmosphere, environmental movement or camera motion.",
    href: "/video-library",
  },
  {
    number: "06",
    title: "Development Transformation",
    description:
      "Use existing project media to communicate a future completed property, build progression, landscaping and activity.",
    href: "/childcare-development-visualisation",
  },
  {
    number: "07",
    title: "Day To Night",
    description:
      "Create another campaign moment from existing exterior photography with evening light and atmosphere.",
    href: "/image-library",
  },
  {
    number: "08",
    title: "Finished Property Reels",
    description:
      "Combine transformed stills and animated scenes into a finished short vertical property video.",
    href: "/packages/property-reel-campaign",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />

      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Property Media Services
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                You already have the property media.
                <span className="block text-rust">
                  Make it do more.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                We transform existing property photography, renders and footage
                into more useful visual marketing content.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                Enhanced stills. Lifestyle scenes. Furniture. Commercial
                visualisation. Animation. Development transformations. Finished
                property video.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  Explore services
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/enquire"
                  className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Show us your media
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/property-images/website/lifestyle/kitchen-before.jpeg"
                  after="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                  beforeAlt="Original property photography before lifestyle enhancement"
                  afterAlt="Existing property photography transformed into additional lifestyle marketing content"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Existing media in. More campaign content out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What We Actually Do
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              We do not replace the original property shoot.
              <br />
              We build on it.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Send us the property photography, renders or footage that already
              exists. We use those assets as the starting point for additional
              visual marketing content.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              That means the original property stays recognisable while the
              campaign gains new visual stories, new formats and more reasons to
              put the property back in front of people.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        id="services"
        className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28"
      >
        <div className="container-shell">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Services
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Choose the content based on
                <span className="block text-rust">
                  the problem the campaign needs to solve.
                </span>
              </h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {services.map((service) => (
              <Link
                key={`${service.number}-${service.title}`}
                href={service.href}
                className="group grid gap-6 rounded-[2rem] border border-black/10 bg-white p-7 transition hover:border-rust hover:shadow-soft sm:grid-cols-[70px_1fr_auto] sm:items-start md:p-8"
              >
                <p className="font-mono text-xs font-semibold text-rust">
                  {service.number}
                </p>

                <div>
                  <h3 className="font-display text-3xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-black/50">
                    {service.description}
                  </p>
                </div>

                <ArrowRight
                  size={20}
                  className="text-rust transition group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESIDENTIAL PROOF */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/staging/living-room-before.jpeg"
                after="/property-images/website/staging/living-room-after.jpeg"
                beforeAlt="Residential living room before virtual furniture and styling"
                afterAlt="Residential living room transformed with furniture and styling"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Residential
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Help people understand the room before asking them to imagine
                it.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Existing residential photography can become furnished,
                lifestyle driven or animated campaign content while the
                original listing images remain available.
              </p>

              <Link
                href="/residential-property-animation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore residential property content
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL PROOF */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Commercial
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Make an empty warehouse relevant to the operator you want to
                reach.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Create industry specific versions of existing commercial
                property photography rather than asking one vacant image to
                speak to every possible tenant.
              </p>

              <Link
                href="/commercial-property-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore commercial visualisation
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                beforeAlt="Vacant commercial warehouse before industry specific visualisation"
                afterAlt="Commercial warehouse transformed into a gym concept"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHILDCARE PROOF */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                beforeAlt="Property before childcare development visualisation"
                afterAlt="Property transformed into a childcare development marketing visual"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Childcare Development
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Communicate the finished centre before the finished centre
                exists.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Existing development media can become completed visual
                concepts, active childcare environments and moving build
                transformations.
              </p>

              <Link
                href="/childcare-development-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore childcare visualisation
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MOTION */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={videos}
            eyebrow="Property Media In Motion"
            heading="First, bring the image to life. Then, make it move."
            description="Existing residential, commercial and development media can become animated campaign content without another property shoot."
          />
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What Problem Are You Trying To Solve?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start there.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  problem: "The property is empty",
                  solution:
                    "Add furniture, lifestyle, people or a relevant commercial use.",
                },
                {
                  problem: "The listing needs more attention",
                  solution:
                    "Create another visual campaign moment from the existing photography.",
                },
                {
                  problem: "The campaign has gone stale",
                  solution:
                    "Give the property another story instead of repeating the same images.",
                },
                {
                  problem: "The future property does not exist yet",
                  solution:
                    "Use existing project media to communicate the completed outcome.",
                },
                {
                  problem: "You need moving content",
                  solution:
                    "Turn selected still images into property animation or a finished Reel.",
                },
              ].map((item, index) => (
                <article
                  key={item.problem}
                  className="grid gap-5 rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7 sm:grid-cols-[70px_0.8fr_1.2fr] sm:items-start md:p-8"
                >
                  <p className="font-mono text-xs font-semibold text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-2xl font-semibold">
                    {item.problem}
                  </h3>

                  <p className="leading-7 text-black/50">{item.solution}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DON'T DO */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Clear Scope
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              We create property marketing content.
              <br />
              We do not manage your social accounts.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              We do not handle posting, captions, hashtags, scheduling or social
              media management.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              We create the visual property assets. You, your agency or your
              marketing team decide where and how they are used.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Existing media in.
                <br />
                New campaign assets out.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Property Media",
                  text: "Supply the property photography, renders or footage you already have.",
                },
                {
                  number: "02",
                  title: "Tell Us The Marketing Problem",
                  text: "Explain what the next piece of content needs to achieve or who it needs to speak to.",
                },
                {
                  number: "03",
                  title: "Choose The Transformation",
                  text: "Enhanced still, lifestyle, furniture, commercial use, animation, build transformation or finished property video.",
                },
                {
                  number: "04",
                  title: "Create More Campaign Content",
                  text: "Use the finished assets alongside the original property media throughout the campaign.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7 sm:grid-cols-[80px_1fr] md:p-8"
                >
                  <p className="font-mono text-sm font-semibold text-rust">
                    {step.number}
                  </p>

                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-black/50">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PATH */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/explore"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Explore
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                See What Property Media Can Become
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore transformations across residential, commercial and
                childcare property.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore the work
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/packages"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Packages
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Choose The Amount Of Content You Need
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Compare property refresh, campaign and finished Reel options.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore packages
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/blog"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Guides
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Solve The Marketing Problem First
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Browse practical guides built around real property marketing
                problems.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore guides
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
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Work With Existing Property Media
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Show us what you have.
            <br />
            Tell us what the campaign needs.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            We can help turn existing property photography, renders and footage
            into more useful visual marketing content.
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
    </main>
  );
}