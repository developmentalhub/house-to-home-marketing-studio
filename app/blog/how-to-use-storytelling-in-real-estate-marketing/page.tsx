import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Use Storytelling in Real Estate Marketing",
  description:
    "Learn how to move beyond property features and use visual storytelling to help buyers imagine the everyday moments, routines and lifestyle a home could offer.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-use-storytelling-in-real-estate-marketing`,
  },
  openGraph: {
    title: "How to Use Storytelling in Real Estate Marketing",
    description:
      "Beautiful property photography shows the room. Storytelling helps buyers imagine the life that could happen inside it.",
    url: `${SITE_URL}/blog/how-to-use-storytelling-in-real-estate-marketing`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/residential/residential-before-after/residential-home-after.png`,
        alt: "Residential property transformed into additional visual storytelling content",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Use Storytelling in Real Estate Marketing",
  description:
    "A practical guide to using visual and emotional storytelling to help property buyers imagine everyday life inside a home.",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-use-storytelling-in-real-estate-marketing`,
  image: [
    `${SITE_URL}/images/residential/residential-before-after/residential-home-after.png`,
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
    id: "residential-kitchen",
    title: "Residential Kitchen Story",
    url: "https://www.youtube.com/shorts/5NP5Ay_3SBY",
    category: "Residential",
    orientation: "portrait" as const,
  },
  {
    id: "facade-day-night",
    title: "Facade Day To Night",
    url: "https://www.youtube.com/shorts/UMWARuYjMSU",
    category: "Residential",
    orientation: "portrait" as const,
  },
  {
    id: "facade-coming-soon",
    title: "Coming Soon Property Story",
    url: "https://www.youtube.com/shorts/npBU8mNYw0o",
    category: "Residential",
    orientation: "portrait" as const,
  },
];

const moments = [
  {
    number: "01",
    feature: "Breakfast bar",
    listing: "Large stone island with seating",
    story:
      "Sunday morning coffee while the house is still quiet and nobody needs to be anywhere yet.",
  },
  {
    number: "02",
    feature: "Outdoor entertaining",
    listing: "Covered alfresco area",
    story:
      "Lunch stretches into dinner because everyone is comfortable and nobody feels like leaving.",
  },
  {
    number: "03",
    feature: "Natural light",
    listing: "North facing living room",
    story:
      "That warm patch of afternoon sun that quietly becomes the favourite place in the house.",
  },
  {
    number: "04",
    feature: "Spare bedroom",
    listing: "Fourth bedroom with built in robe",
    story:
      "A nursery now. A study later. A room that changes as life changes.",
  },
];

export default function StorytellingRealEstateMarketingPage() {
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
                Real Estate Storytelling Guide
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                The listing shows
                <span className="block text-rust">what the home has.</span>
                <span className="block">
                  The story shows why it matters.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
                Your property photography can be technically excellent,
                beautifully lit and professionally composed and still leave the
                buyer doing all the emotional work.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/45">
                Storytelling gives those images another layer. Not just the
                kitchen, but Sunday morning at the breakfast bar. Not just the
                backyard, but the dinner that runs late because nobody wants to
                leave.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#storytelling"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  See how it works
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/packages"
                  className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Explore story packages
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/residential/residential-before-after/residential-home-before.png"
                  after="/images/residential/residential-before-after/residential-home-after.png"
                  beforeAlt="Original residential property image"
                  afterAlt="Residential property transformed into additional visual storytelling content"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                The property stays recognisable. The story becomes richer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Quick Answer
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              What does storytelling mean in real estate marketing?
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              It means showing more than rooms, finishes and dimensions. It
              means helping a prospective buyer imagine the routines,
              relationships and small everyday moments that could happen inside
              the property.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              The property facts still matter. Storytelling does not replace
              them. It gives those facts emotional context.
            </p>
          </div>
        </div>
      </section>

      {/* THE DISCONNECT */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Marketing Gap
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Property marketing often stops
                <span className="block text-rust">
                  just before the interesting part.
                </span>
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                Four bedrooms. Two bathrooms. Stone benchtops. Double garage.
                North facing living.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Those facts help someone assess the property. But they do not
                necessarily help them feel attached to it.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The emotional opportunity is hidden inside the facts. North
                facing living is afternoon light on the sofa. The stone island
                is breakfast before school or wine with friends while dinner is
                being made.
              </p>

              <p className="mt-6 font-display text-3xl leading-10">
                Features explain the property.
                <span className="text-rust">
                  {" "}
                  Moments make it personal.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORYTELLING */}
      <section id="storytelling" className="bg-ink py-18 text-white md:py-24">
        <div className="container-shell">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Feature To Feeling
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                The same property.
                <span className="block text-rust">
                  A completely different conversation.
                </span>
              </h2>
            </div>
          </div>

          <div className="space-y-2">
            {moments.map((item) => (
              <article
                key={item.number}
                className="grid gap-5 border-b border-white/10 py-7 md:grid-cols-[65px_0.7fr_0.9fr_1.4fr]"
              >
                <p className="font-mono text-[9px] font-semibold text-brassBright">
                  {item.number}
                </p>

                <div>
                  <p className="text-xs text-white/30">Feature</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">
                    {item.feature}
                  </h3>
                </div>

                <div>
                  <p className="text-xs text-white/30">The listing says</p>
                  <p className="mt-2 leading-7 text-white/45">
                    {item.listing}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-white/30">The story says</p>
                  <p className="mt-2 font-display text-2xl leading-8 text-white/75">
                    {item.story}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SIX WAYS */}
      <section className="bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Practical Story Angles
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Six ways to give property media more to say.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Show The Ritual",
                  text: "Think coffee in the morning, homework at the island, reading by the window or dinner outside rather than simply describing the room.",
                },
                {
                  number: "02",
                  title: "Use Light As Part Of The Story",
                  text: "Morning, afternoon and evening light can completely change the emotional character of the same property.",
                },
                {
                  number: "03",
                  title: "Show How Rooms Connect",
                  text: "Help people understand the relationship between kitchen, living, outdoor areas and the way everyday life moves between them.",
                },
                {
                  number: "04",
                  title: "Give Empty Rooms A Future",
                  text: "A spare bedroom can become a nursery, study, guest room or quiet retreat depending on the story the campaign needs.",
                },
                {
                  number: "05",
                  title: "Use Movement With Purpose",
                  text: "Animation should reveal something: atmosphere, activity, changing light or a moment that is harder to communicate with a still image alone.",
                },
                {
                  number: "06",
                  title: "Connect The Property To A Life",
                  text: "The local park, morning coffee, school run, beach walk or nearby village can extend the story beyond the boundary of the property.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="min-h-[250px] border-b border-r border-black/10 p-7"
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
      <section className="border-y border-black/10 bg-[#f7f5f1] py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/staging/living-room-before.jpeg"
                after="/property-images/website/staging/living-room-after.jpeg"
                beforeAlt="Residential living room before furniture and styling"
                afterAlt="Residential living room transformed into a furnished lifestyle space"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Residential Example
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                An empty room asks the buyer to do all the work.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Furniture gives the room scale and purpose. Storytelling goes
                one step further by asking what someone might actually do,
                notice or feel there.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                It is the difference between showing a living room and helping
                someone imagine where they would curl up at the end of the day.
              </p>

              <Link
                href="/residential-property-animation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore residential storytelling
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-ink py-18 text-white md:py-24">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={exampleVideos}
            eyebrow="Story In Motion"
            heading="Movement catches attention. The story tells people why they should keep watching."
            description="Property animation works best when the movement supports a moment, mood or campaign idea rather than simply making a still image move."
          />
        </div>
      </section>

      {/* WHO THIS HELPS */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                When This Matters Most
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Story becomes useful when the property needs more than exposure.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "The photography is excellent but feels impersonal",
                  text: "Keep the photography. Add the emotional layer around it.",
                },
                {
                  title: "The listing has been seen before",
                  text: "Give familiar images a new campaign purpose and a different reason to stop.",
                },
                {
                  title: "The strongest features are getting lost",
                  text: "Give the hero moments their own place in the campaign instead of burying them in a gallery.",
                },
                {
                  title: "The property is hard to imagine",
                  text: "Use styling, lifestyle and movement to reduce the amount of imagination being demanded from the audience.",
                },
              ].map((item, index) => (
                <article
                  key={item.title}
                  className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-white p-7 sm:grid-cols-[60px_0.9fr_1.1fr]"
                >
                  <p className="font-mono text-[9px] font-semibold text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-black/50">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How We Build It
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the media.
                <br />
                Find the human moment.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Property Media",
                  text: "Supply the photography, renders or footage already created for the property.",
                },
                {
                  number: "02",
                  title: "Find The Emotional Opportunities",
                  text: "We look for the rooms, light, details and transitions that could carry a stronger human story.",
                },
                {
                  number: "03",
                  title: "Build The Visual And Narrative",
                  text: "Rob develops the visual treatment and motion. Robyn develops the hook, caption, sequence or script.",
                },
                {
                  number: "04",
                  title: "Use It In The Campaign",
                  text: "Publish the new visual and story content alongside the original property photography through your own marketing channels.",
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

      {/* KEY THOUGHT */}
      <section className="bg-[#f7f5f1] py-18 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl border-y border-black/10 py-12 text-center md:py-16">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              The Simple Test
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">
              Does your marketing only show the room?
              <span className="block text-rust">
                Or does it help someone picture a moment?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black/50">
              If the image already looks beautiful, you may not need another
              photograph. You may simply need a better story around it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Property Storytelling
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Show us the property.
            <br />
            We’ll find the story hiding inside it.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            We can turn the photography, renders or footage you already have
            into visual moments, animation and narrative that give people more
            to imagine.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Discuss your property
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}