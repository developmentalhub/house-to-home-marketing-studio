import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Refresh a Property Campaign That Has Gone Stale",
  description:
    "A practical guide for real estate agents, developers and commercial property marketers on refreshing a stale property campaign using existing photography, renders and footage.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-refresh-a-property-campaign-that-has-gone-stale`,
  },
  openGraph: {
    title: "How to Refresh a Property Campaign That Has Gone Stale",
    description:
      "Refresh a tired property campaign with new visuals, transformations and moving content created from the media you already have.",
    url: `${SITE_URL}/blog/how-to-refresh-a-property-campaign-that-has-gone-stale`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
        alt: "Existing commercial property photography refreshed into new campaign content",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Refresh a Property Campaign That Has Gone Stale",
  description:
    "A practical guide to creating fresh property marketing content from existing photography, renders and footage.",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-refresh-a-property-campaign-that-has-gone-stale`,
  image: [
    `${SITE_URL}/images/commercial/warehouse-multiple-afters/warehouse-after-gym.png`,
    `${SITE_URL}/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg`,
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

const campaignVideos = [
  {
    id: "residential-coming-soon",
    title: "Residential Coming Soon Animation",
    url: "https://www.youtube.com/shorts/7sLtp4cucnU",
    category: "Residential",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-warehouse",
    title: "Commercial Property Animation",
    url: "https://www.youtube.com/shorts/bJCRltJn_vY",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-development",
    title: "Childcare Build Transformation",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Childcare",
    orientation: "portrait" as const,
  },
];

export default function HowToRefreshAPropertyCampaignThatHasGoneStalePage() {
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
                Has the property campaign
                <span className="block text-rust">started to feel stale?</span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                You may not need another property shoot. You may need a new way
                to use the photography, renders or footage you already have.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                A fresh visual, a different audience angle or a moving scene can
                give the same campaign another reason to be noticed.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#refresh-options"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  See ways to refresh it
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/enquire"
                  className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Show us the existing campaign
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/property-images/website/lifestyle/kitchen-before.jpeg"
                  after="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                  beforeAlt="Original property campaign kitchen photograph"
                  afterAlt="Existing property photography refreshed into a new lifestyle campaign image"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Same image. Fresh campaign angle.
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
              How do you refresh a property listing or campaign without starting
              again?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Use the existing property media to create a new reason for people
              to look at the campaign.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              That might mean changing the visual story, targeting a different
              buyer or tenant, adding lifestyle, showing a future use, creating
              animation or turning still images into short form video.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CAMPAIGNS GO STALE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Why Campaigns Go Stale
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Sometimes the problem is not the property.
                <span className="block text-rust">
                  It is that people have already seen the same story.
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                The same hero image, the same listing gallery and the same
                campaign message can lose impact over time.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                That does not mean the original shoot failed. It means the
                campaign needs another angle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SIGNS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Signs You Need Fresh Campaign Content
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The property may still be relevant.
                <br />
                The presentation may need to change.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "The Same Images Keep Reappearing",
                  text: "The campaign has no new visual reason for someone to stop and look again.",
                },
                {
                  number: "02",
                  title: "The Property Needs Another Audience",
                  text: "The existing campaign does not speak clearly enough to a different buyer, tenant or operator.",
                },
                {
                  number: "03",
                  title: "The Property Feels Empty",
                  text: "Vacant or lightly presented spaces may be difficult for people to understand emotionally or practically.",
                },
                {
                  number: "04",
                  title: "The Campaign Needs Movement",
                  text: "The existing material is strong for listings but there is nothing built for moving content.",
                },
                {
                  number: "05",
                  title: "The Future Is Hard To Picture",
                  text: "The development, fitout or intended use is not obvious from the current property imagery.",
                },
                {
                  number: "06",
                  title: "The Listing Needs Another Moment",
                  text: "You need something new to put the property back in front of people without commissioning another shoot.",
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

      {/* REFRESH OPTIONS */}
      <section
        id="refresh-options"
        className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28"
      >
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Ways To Refresh The Campaign
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Change the story without changing the property.
            </h2>
          </div>

          <div className="mt-12 space-y-5">
            {[
              {
                number: "01",
                title: "Create A Lifestyle Version",
                text: "Add people, activity and atmosphere to turn a clean property image into something more human.",
              },
              {
                number: "02",
                title: "Show A Different Use",
                text: "For commercial property, create an industry specific concept that speaks to a new type of occupier.",
              },
              {
                number: "03",
                title: "Add Furniture Or Styling",
                text: "Help buyers understand an empty room by giving it a stronger sense of scale and purpose.",
              },
              {
                number: "04",
                title: "Create A Day To Night Moment",
                text: "Turn an existing exterior into another visual moment with a completely different mood.",
              },
              {
                number: "05",
                title: "Animate The Property",
                text: "Use people, vehicles, environmental movement or camera motion to create moving campaign content.",
              },
              {
                number: "06",
                title: "Build A Short Property Reel",
                text: "Combine several refreshed scenes into a finished vertical property video.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="grid gap-6 rounded-[2rem] border border-black/10 bg-white p-7 sm:grid-cols-[80px_1fr] md:p-9"
              >
                <p className="font-mono text-sm font-semibold text-rust">
                  {item.number}
                </p>

                <div>
                  <h3 className="font-display text-3xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-3xl leading-8 text-black/50">
                    {item.text}
                  </p>
                </div>
              </article>
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
                before="/property-images/website/lifestyle/bedroom-before.jpeg"
                after="/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg"
                beforeAlt="Original residential bedroom listing image"
                afterAlt="Residential bedroom transformed into fresh lifestyle campaign content"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Residential Campaign Refresh
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The room has not changed.
                <br />
                The campaign story has.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Lifestyle content can introduce another emotional layer to an
                existing property photograph.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                That gives an agent a fresh campaign asset while keeping the
                original property imagery available for the listing.
              </p>
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
                Commercial Campaign Refresh
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A new audience can make the same warehouse feel like a new
                campaign.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Instead of showing the vacant industrial shell again, create a
                version aimed directly at the business you want to attract.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                A warehouse can become a gym, mechanic workshop, logistics
                facility, photography studio or another relevant concept.
              </p>

              <Link
                href="/commercial-property-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore commercial property visualisation
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png"
                beforeAlt="Original vacant commercial warehouse campaign image"
                afterAlt="Vacant warehouse refreshed into a logistics specific campaign visual"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROOF */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                beforeAlt="Property before childcare development visualisation"
                afterAlt="Property campaign refreshed with a completed childcare development visual"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Development Campaign Refresh
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                When the finished property does not exist yet, show the next
                chapter.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Development campaigns can lose momentum when there is little
                new physical progress to photograph.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Existing project imagery can become completed concepts,
                activity scenes and moving development transformations that
                keep communicating the future outcome.
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
            items={campaignVideos}
            eyebrow="Refresh The Campaign With Motion"
            heading="The same property media can become another moving campaign moment."
            description="Residential, commercial and development imagery can all be turned into short animated property content."
          />
        </div>
      </section>

      {/* STRATEGY */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Refresh With A Purpose
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Do not refresh the campaign just to make something different.
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                The strongest new asset solves a specific marketing problem.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                It might help people understand an empty room. It might target a
                new tenant type. It might explain a development outcome. It
                might create movement where the campaign only had stills.
              </p>

              <p className="mt-7 font-display text-3xl font-semibold text-rust">
                Fresh content works best when it has a clear job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DECISION TABLE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Match The Problem To The Content
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              What does the campaign need next?
            </h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white">
            {[
              {
                problem: "The listing feels repetitive",
                solution: "Create another visual story from the existing images.",
              },
              {
                problem: "The property is vacant",
                solution: "Add furniture, lifestyle or a relevant business use.",
              },
              {
                problem: "You need a new audience",
                solution: "Create content specifically for that buyer or tenant.",
              },
              {
                problem: "The future is hard to picture",
                solution: "Visualise the completed development or intended use.",
              },
              {
                problem: "The campaign needs movement",
                solution: "Animate selected property images.",
              },
              {
                problem: "You need a stronger content sequence",
                solution: "Combine transformed scenes into a finished property Reel.",
              },
            ].map((item, index) => (
              <div
                key={item.problem}
                className="grid gap-4 border-b border-black/10 p-7 last:border-b-0 md:grid-cols-[70px_0.8fr_1.2fr] md:items-center"
              >
                <p className="font-mono text-xs font-semibold text-rust">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="font-display text-xl font-semibold">
                  {item.problem}
                </p>

                <p className="leading-7 text-black/50">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXISTING MEDIA */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Use What You Already Have
            </p>

            <h2 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-7xl">
              A stale campaign does not automatically need
              <span className="block text-rust">another property shoot.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-black/55">
              The existing photography, renders and footage may already contain
              everything needed to create the next campaign moment.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            <Link
              href="/blog/how-to-make-a-property-listing-stand-out-without-another-photo-shoot"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Related Guide
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Make a Listing Stand Out Without Another Shoot
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See how existing media can become fresh property content.
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
              href="/blog/how-to-get-more-marketing-content-from-one-property-shoot"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Campaign Mileage
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Get More From One Property Shoot
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                See the different assets one set of property media can become.
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
              href="/packages"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Campaign Options
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Property Media Packages
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Choose how much fresh content you want to create from existing
                property media.
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
            Refresh The Campaign
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            The property is still there.
            <br />
            Give the campaign something new to say.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the property photography, renders or footage you already
            have and tell us what the campaign needs to do next.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Show us the existing campaign
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}