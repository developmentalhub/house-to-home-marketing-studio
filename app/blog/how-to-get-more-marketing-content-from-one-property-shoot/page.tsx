import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Get More Marketing Content From One Property Shoot",
  description:
    "A practical guide for real estate agents, developers and commercial property marketers on getting more campaign value from existing property photography, renders and footage.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-get-more-marketing-content-from-one-property-shoot`,
  },
  openGraph: {
    title: "How to Get More Marketing Content From One Property Shoot",
    description:
      "Turn one property shoot into more campaign content using enhanced stills, visual concepts, animation and finished short form video.",
    url: `${SITE_URL}/blog/how-to-get-more-marketing-content-from-one-property-shoot`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Commercial property photography transformed into additional marketing content",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get More Marketing Content From One Property Shoot",
  description:
    "A practical guide to getting more campaign mileage from existing property photography, renders and footage.",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-get-more-marketing-content-from-one-property-shoot`,
  image: [
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
  ],
  author: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
};

const exampleVideos = [
  {
    id: "commercial-use",
    title: "Commercial Property Use Animation",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-animation",
    title: "Warehouse Animation",
    url: "https://www.youtube.com/shorts/bJCRltJn_vY",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "development-animation",
    title: "Development Build Animation",
    url: "https://www.youtube.com/shorts/2DXsq8mXemI",
    category: "Development",
    orientation: "portrait" as const,
  },
];

export default function HowToGetMoreMarketingContentFromOnePropertyShootPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Property Marketing Guide
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                One property shoot
                <span className="block text-rust">
                  can create much more than listing photos.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                You already paid to capture the property. The next question is
                how much campaign content you can get from those same images,
                renders or footage.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                Enhanced stills, alternative use visuals, lifestyle scenes,
                property animation and short form video can all extend the life
                of the media you already have.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#ways-to-reuse"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  See what one shoot can become
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/packages"
                  className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Explore packages
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                  after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                  beforeAlt="Original commercial property photography before visual transformation"
                  afterAlt="Commercial property photography transformed into an additional gym marketing concept"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Same property image. Another campaign asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Quick Answer
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              How do you get more marketing content from one real estate photo
              shoot?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Reuse the existing photography as the foundation for new
              campaign assets instead of treating each image as a finished
              endpoint.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              A still image can become an enhanced lifestyle scene, a virtually
              furnished room, an industry specific property concept, a day to
              night transformation, an animated scene or part of a finished
              property Reel.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Campaign Problem
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                The shoot is finished.
                <span className="block text-rust">
                  The campaign still needs content.
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                Property photography is usually commissioned for the listing,
                brochure or initial campaign launch. But the marketing does not
                stop when the photographer leaves.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Agents and developers still need fresh campaign moments, moving
                content, different visual angles and material that can speak to
                specific audiences.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The existing shoot can become the raw material for those extra
                assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAYS TO REUSE */}
      <section id="ways-to-reuse" className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Ways To Reuse Property Media
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                One image can do more than one job.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Enhanced Stills",
                  text: "Add atmosphere, lifestyle detail, people, landscaping or visual polish to create another finished campaign image.",
                },
                {
                  number: "02",
                  title: "Furniture & Styling",
                  text: "Show an empty or lightly presented room with a clearer furnishing and styling direction.",
                },
                {
                  number: "03",
                  title: "Industry Specific Concepts",
                  text: "Turn a vacant commercial property into a visual aimed at a gym, mechanic, logistics operator or another target industry.",
                },
                {
                  number: "04",
                  title: "Day To Night",
                  text: "Create an evening campaign moment from existing exterior photography.",
                },
                {
                  number: "05",
                  title: "Property Animation",
                  text: "Bring the finished still to life with people, vehicles, environmental movement or camera motion.",
                },
                {
                  number: "06",
                  title: "Finished Property Reels",
                  text: "Combine multiple transformed scenes into a short vertical property video.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="min-h-[230px] border-b border-r border-black/10 p-7"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-rust">
                    {item.number}
                  </p>

                  <h3 className="mt-8 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/50">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL EXAMPLE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-mechanic1.png"
                beforeAlt="Original vacant warehouse image"
                afterAlt="Original warehouse transformed into an automotive workshop marketing concept"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Example · Commercial Property
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                One warehouse photo can speak to different industries.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                The original vacant warehouse can remain part of the campaign
                while additional versions target specific types of operators.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                That means one original property image can help create separate
                campaign stories for fitness, automotive, logistics, creative
                and other audiences.
              </p>

              <Link
                href="/blog/how-to-show-buyers-different-uses-for-a-commercial-property"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                See how to target different property audiences
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Example · Residential
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Existing interiors can become new lifestyle content.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                A standard property image can be developed into a more
                aspirational lifestyle scene, furnished version or animated
                campaign moment.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The value is not replacing the real listing photography. It is
                creating additional reasons to show the property again.
              </p>

              <Link
                href="/residential-property-animation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore residential property animation
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/lifestyle/kitchen-before.jpeg"
                after="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                beforeAlt="Residential kitchen before lifestyle enhancement"
                afterAlt="Residential kitchen transformed into a lifestyle marketing image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHILDCARE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                beforeAlt="Property before childcare development visualisation"
                afterAlt="Property transformed into a childcare centre visualisation"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Example · Development Marketing
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Existing project media can help communicate what comes next.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Development imagery can be used to create more useful campaign
                moments before a project is complete.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                That can include completed concepts, landscaping, people,
                activity, build sequences and moving property content.
              </p>

              <Link
                href="/childcare-development-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore childcare development visualisation
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={exampleVideos}
            eyebrow="From Still To Motion"
            heading="The same property media can become moving campaign content."
            description="Once the image has the story you want to communicate, it can become the starting point for animation and short form property video."
          />
        </div>
      </section>

      {/* CAMPAIGN MILEAGE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                More Campaign Mileage
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                The goal is not more content for the sake of more content.
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                Each new asset should give the campaign another useful job to
                do.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                One visual might explain a future use. Another might make an
                empty room feel lived in. Another might create movement. A
                finished Reel might bring several of those moments together.
              </p>

              <p className="mt-7 font-display text-3xl font-semibold text-rust">
                One shoot. More campaign content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO BENEFITS */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Who This Helps
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Real estate agents",
                "Commercial property agents",
                "Property developers",
                "Childcare developers",
                "Project marketers",
                "Property owners and landlords",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/10 bg-white p-6"
                >
                  <p className="font-display text-xl font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE WORKFLOW */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                A Simple Workflow
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with what you already paid for.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Existing Media",
                  text: "Use the photography, renders or footage already created for the property.",
                },
                {
                  number: "02",
                  title: "Choose The Campaign Problem",
                  text: "Decide whether you need more attention, a different audience, a future use, a stronger lifestyle story or moving content.",
                },
                {
                  number: "03",
                  title: "Create The New Assets",
                  text: "Develop the existing media into enhanced images, visual concepts, animations or finished video.",
                },
                {
                  number: "04",
                  title: "Keep The Campaign Moving",
                  text: "Use the new assets as additional campaign moments without commissioning another property shoot.",
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

      {/* CLARITY */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Keep The Original Media
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              More campaign content does not mean hiding the real property.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Original photography still plays an important role. Enhanced and
              transformed assets work alongside it to communicate additional
              ideas, uses and campaign moments.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Where an image represents a possible future use or concept, that
              distinction should remain clear.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/image-library"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Still Images
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Image Library
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See before and after property transformations.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore images
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/video-library"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Moving Content
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Video Library
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See property images transformed into motion.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore video
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
                Campaign Options
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Property Media Packages
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Choose how much additional content you want to create from the
                media you already have.
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
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            More From Existing Property Media
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Already have the property photos?
            <br />
            Get more out of them.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the property photography, renders or footage you already
            have and we can help turn it into more useful campaign content.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss your existing property media
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}