import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Make a Property Listing Stand Out Without Another Photo Shoot",
  description:
    "Already have the property photography? Learn how to create fresh real estate marketing content from existing photos, renders and footage without organising another property shoot.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-make-a-property-listing-stand-out-without-another-photo-shoot`,
  },
  openGraph: {
    title:
      "How to Make a Property Listing Stand Out Without Another Photo Shoot",
    description:
      "Use the property media you already have to create fresh stills, visual concepts, animations and property video.",
    url: `${SITE_URL}/blog/how-to-make-a-property-listing-stand-out-without-another-photo-shoot`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg`,
        alt: "Existing real estate photography transformed into additional lifestyle marketing content",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Make a Property Listing Stand Out Without Another Photo Shoot",
  description:
    "A practical guide to creating more property marketing content from photography, renders and footage that already exist.",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-make-a-property-listing-stand-out-without-another-photo-shoot`,
  image: [
    `${SITE_URL}/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg`,
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
    `${SITE_URL}/images/childcare/before-after-childcare/childcare-centre-new-build-after.png`,
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

const propertyVideos = [
  {
    id: "residential-kitchen",
    title: "Kitchen Property Animation",
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
    id: "childcare-build",
    title: "Childcare Development Transformation",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Childcare",
    orientation: "portrait" as const,
  },
];

export default function HowToMakeAPropertyListingStandOutWithoutAnotherPhotoShootPage() {
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
                How do you make a property listing stand out
                <span className="block text-rust">
                  without another photo shoot?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                Start with the photography, renders or footage you already have
                and turn those existing assets into fresh campaign content.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                The original shoot does not need to be the end of the content.
                It can become the starting point for new stills, visual
                transformations, animations and short property videos.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#what-you-can-create"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  See what you can create
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/enquire"
                  className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Show us your existing media
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/property-images/website/lifestyle/kitchen-before.jpeg"
                  after="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                  beforeAlt="Original residential property kitchen photograph"
                  afterAlt="Existing kitchen photograph transformed into additional lifestyle property marketing content"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Same property image. Another campaign moment.
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
              What can you do when the listing needs fresh content but the
              photography is already finished?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Rework the property media you already have into additional
              campaign assets.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              Existing images can become lifestyle scenes, virtually furnished
              rooms, day to night transformations, industry specific concepts,
              animated scenes and finished short property videos.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              That gives you new reasons to put the property back in front of
              people without organising another shoot.
            </p>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Listing Problem
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                The listing has been seen.
                <span className="block text-rust">
                  The photography has not suddenly become useless.
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                A property campaign can lose momentum long before the original
                photography loses its value.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The problem is often not that you need another shoot. The
                problem is that you need another way to present the property.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                That is where the images you already paid for can start doing
                more work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN CREATE */}
      <section id="what-you-can-create" className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What Existing Property Photos Can Become
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Create another story from the same shoot.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Lifestyle Imagery",
                  text: "Add people, atmosphere and everyday activity so a clean property photograph feels more lived in.",
                },
                {
                  number: "02",
                  title: "Virtual Furniture",
                  text: "Show an empty or lightly presented space with a clearer furnishing and styling direction.",
                },
                {
                  number: "03",
                  title: "Commercial Use Concepts",
                  text: "Show an empty commercial property as a gym, workshop, logistics operation, studio or another target use.",
                },
                {
                  number: "04",
                  title: "Day To Night",
                  text: "Create another exterior campaign moment using lighting and atmosphere.",
                },
                {
                  number: "05",
                  title: "Property Animation",
                  text: "Turn the still image into movement using people, vehicles, environment or camera motion.",
                },
                {
                  number: "06",
                  title: "Finished Property Video",
                  text: "Combine several transformed scenes into a short vertical property campaign video.",
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

      {/* RESIDENTIAL EXAMPLE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/lifestyle/bathroom-before.jpeg"
                after="/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg"
                beforeAlt="Original residential bathroom property photograph"
                afterAlt="Residential bathroom image transformed into lifestyle marketing content"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Residential Example
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Make a clean property image feel more like a lifestyle.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Standard listing photography shows the room clearly. A second
                version can introduce atmosphere and a more human sense of how
                the property might feel to live in.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The original image remains useful. The transformed image gives
                you another campaign asset with a different job.
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

      {/* COMMERCIAL EXAMPLE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Commercial Example
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Make the empty warehouse relevant to a specific operator.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                A vacant industrial property can be difficult to picture once
                occupied.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The existing photography can become an industry specific visual
                showing the same building as a gym, mechanic workshop, logistics
                facility, photography studio or another possible use.
              </p>

              <Link
                href="/commercial-property-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore commercial property visualisation
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before-gym.png"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png"
                beforeAlt="Original empty commercial warehouse"
                afterAlt="Empty warehouse transformed into a gym concept for additional property marketing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHILDCARE EXAMPLE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/corner-site-childcare-before.png"
                after="/images/childcare/before-after-childcare/corner-site-childcare-after.png"
                beforeAlt="Property before childcare centre development visualisation"
                afterAlt="Property transformed into a childcare centre development visualisation"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Development Example
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Show the finished idea before the development exists.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Development marketing has a different problem. The final
                property may not exist yet.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Existing project imagery can help communicate the future
                childcare centre, landscaping, activity and completed property
                story before opening day.
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

      {/* VIDEO PROOF */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={propertyVideos}
            eyebrow="Existing Property Media In Motion"
            heading="A still image can become the starting point for another campaign format."
            description="Residential, commercial and development imagery can all become moving property content."
          />
        </div>
      </section>

      {/* WHY THIS IS USEFUL */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Why Reuse Existing Photography?
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                You are not starting again.
                <span className="block text-rust">
                  You are getting more value from the starting point.
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                The property has already been photographed. The architecture,
                perspective and core campaign imagery already exist.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                That gives you something valuable to build from without asking
                the photographer, agent, owner or developer to recreate the
                original shoot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SOLVING */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Start With The Marketing Problem
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Do not create another asset unless it has another job to do.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "The listing feels stale",
                  answer:
                    "Create another visual angle or moving campaign moment from the same property media.",
                },
                {
                  question: "The property is empty",
                  answer:
                    "Add furniture, lifestyle, people or an industry specific use that helps the audience understand the space.",
                },
                {
                  question: "The development is not finished",
                  answer:
                    "Use existing project media to make the future outcome easier to picture.",
                },
                {
                  question: "The campaign needs video",
                  answer:
                    "Turn selected still images into animated scenes and combine them into moving property content.",
                },
                {
                  question: "The property needs to reach another audience",
                  answer:
                    "Create an additional visual specifically around that buyer, tenant or operator.",
                },
              ].map((item, index) => (
                <article
                  key={item.question}
                  className="grid gap-5 rounded-[2rem] border border-black/10 bg-white p-7 sm:grid-cols-[80px_1fr] md:p-8"
                >
                  <p className="font-mono text-sm font-semibold text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {item.question}
                    </h3>

                    <p className="mt-3 leading-7 text-black/50">
                      {item.answer}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ATTENTION */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              More Reasons To Stop
            </p>

            <h2 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-7xl">
              Your listing is competing with everything.
              <span className="block text-rust">
                Give people another reason to notice it.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-black/55">
              Fresh campaign content does not always require fresh photography.
              Sometimes it requires looking at the photography you already have
              differently.
            </p>
          </div>
        </div>
      </section>

      {/* ONE SHOOT */}
      <section className="bg-rust py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Campaign Mileage
            </p>

            <h2 className="mt-5 font-display text-6xl font-semibold leading-none md:text-8xl">
              One shoot.
              <br />
              More campaign content.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Use the media you already paid for to create more visibility,
              more campaign moments and more ways to communicate the property.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#f7f5f1] py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What Real Estate Media House Does
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              We work with property media that already exists.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Send us the photography, renders or footage already created for
              the property and we transform those assets into additional visual
              marketing content.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              That can include enhanced stills, lifestyle scenes, furniture,
              lighting, landscapes, people, property animations, development
              transformations and finished property Reels.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/blog/how-to-get-more-marketing-content-from-one-property-shoot"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Related Guide
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Get More Content From One Property Shoot
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See the different campaign assets your existing media can
                become.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Read the guide
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/image-library"
              className="group rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Proof
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Before & After Image Library
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See real examples of existing property images transformed into
                additional content.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore transformations
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
                Motion
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Property Video Library
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See existing property media turned into moving campaign
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
            Already Have The Property Media?
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            You may not need another shoot.
            <br />
            You may need another idea.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/60">
            Send us the property photography, renders or footage you already
            have and tell us what the campaign needs to do next.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-rust hover:text-white"
          >
            Show us your existing property media
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}