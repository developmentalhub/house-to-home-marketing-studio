import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import YouTubeVideoCarousel, {
  type YouTubeVideoCarouselItem,
} from "@/components/YouTubeVideoCarousel";

export const metadata: Metadata = {
  title: "Residential Property Transformation Case Study",
  description:
    "See one residential property transformed room by room using existing photography, with cinematic animation across the facade, kitchen, dining, living spaces, bedrooms, bathroom, study, laundry and backyard.",
};

const propertyVideos: YouTubeVideoCarouselItem[] = [
  {
    id: "facade",
    title: "Facade",
    url: "https://www.youtube.com/watch?v=ezOd5jztwcI",
    category: "Exterior",
    description:
      "Start with the front of the property and create a stronger first campaign moment.",
    orientation: "landscape",
  },
  {
    id: "kitchen",
    title: "Kitchen",
    url: "https://www.youtube.com/watch?v=E6sOWBaJP38",
    category: "Kitchen",
    description:
      "Turn the kitchen into a moving scene rather than leaving it as a single still image.",
    orientation: "landscape",
  },
  {
    id: "dining",
    title: "Dining",
    url: "https://www.youtube.com/watch?v=b_iS2Uz8L-I",
    category: "Dining",
    description:
      "Give the dining area its own campaign moment with movement and atmosphere.",
    orientation: "landscape",
  },
  {
    id: "living-one",
    title: "Living",
    url: "https://www.youtube.com/watch?v=5_j6Nd7QxJA",
    category: "Living",
    description:
      "Create another reason to notice the living space using the original property photography.",
    orientation: "landscape",
  },
  {
    id: "living-two",
    title: "Living Transformation",
    url: "https://www.youtube.com/watch?v=-LY8KI3cmmA",
    category: "Living",
    description:
      "Show a different creative direction from the same home and campaign.",
    orientation: "landscape",
  },
  {
    id: "furniture-drop",
    title: "Furniture Drop",
    url: "https://www.youtube.com/watch?v=psc1vhNWgXs",
    category: "Creative Transformation",
    description:
      "A hand drops furniture into the living room, turning a normal property image into a memorable visual idea.",
    orientation: "landscape",
  },
  {
    id: "bedroom",
    title: "Bedroom",
    url: "https://www.youtube.com/watch?v=dQjStlhEGzI",
    category: "Bedroom",
    description:
      "Give the bedroom another use inside the wider property campaign.",
    orientation: "landscape",
  },
  {
    id: "baby-room",
    title: "Baby Room",
    url: "https://www.youtube.com/watch?v=Z_aNTKvrD74",
    category: "Bedroom",
    description:
      "Create a more emotive visual moment around another room in the home.",
    orientation: "landscape",
  },
  {
    id: "bathroom",
    title: "Bathroom",
    url: "https://www.youtube.com/watch?v=rwduPrHJmrU",
    category: "Bathroom",
    description:
      "Turn a static bathroom image into another piece of moving property content.",
    orientation: "landscape",
  },
  {
    id: "study",
    title: "Study",
    url: "https://www.youtube.com/watch?v=hQa0O5RQwkk",
    category: "Study",
    description:
      "Give a smaller room its own place in the campaign rather than letting it disappear in the gallery.",
    orientation: "landscape",
  },
  {
    id: "laundry",
    title: "Laundry",
    url: "https://www.youtube.com/watch?v=W2uLloIY8o4",
    category: "Laundry",
    description:
      "Use even the practical spaces to create more campaign content from the same shoot.",
    orientation: "landscape",
  },
  {
    id: "backyard",
    title: "Backyard",
    url: "https://www.youtube.com/watch?v=4vz-HSeqEh4",
    category: "Outdoor",
    description:
      "Finish the property journey with another moving scene from the backyard.",
    orientation: "landscape",
  },
];

export default function ResidentialPropertyTransformationPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="max-w-6xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Residential Case Study
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              One property.
              <span className="block text-rust">
                A whole campaign hiding inside it.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              This home became a library of moving content across the facade,
              kitchen, dining, living spaces, bedrooms, bathroom, study,
              laundry and backyard.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#property-tour"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                Explore the property
                <ArrowRight size={18} />
              </a>

              <Link
                href="/enquire"
                className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Build a campaign like this
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                One shoot. More campaign value.
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The photography was already there.
                <br />
                We gave it more jobs to do.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                Agents already invest in professional property photography. The
                opportunity is to keep using those assets in ways that feel
                fresh throughout the campaign.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Instead of treating each room as one still image, selected
                scenes were turned into individual moving moments that could
                support the listing in different ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="property-tour"
        className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28"
      >
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={propertyVideos}
            eyebrow="Interactive Property Tour"
            heading="Move through the home room by room."
            description="Tap through the complete property without scrolling past twelve separate video embeds."
          />
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Creative Feature
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Do not just animate the room.
                <br />
                Give the content an idea.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-black/55">
                The furniture drop scene is a good example of how the same
                property media can become something more memorable than simple
                camera movement.
              </p>
            </div>

            <div className="rounded-[2rem] bg-ink p-3 shadow-soft">
              <YouTubeVideoCarousel
                items={[
                  {
                    id: "featured-furniture-drop",
                    title: "Furniture Drop",
                    url: "https://www.youtube.com/watch?v=psc1vhNWgXs",
                    category: "Creative Transformation",
                    description:
                      "A hand drops furniture into the living room to turn a static property image into a visual moment people are more likely to remember.",
                    orientation: "landscape",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Campaign Content Library
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Different parts of the home can carry different parts of the
                campaign.
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Launch",
                  text: "Use the facade or strongest hero scenes to introduce the property.",
                },
                {
                  number: "02",
                  title: "Feature Rooms",
                  text: "Give kitchens, living areas and bedrooms their own moment during the campaign.",
                },
                {
                  number: "03",
                  title: "Creative Moments",
                  text: "Use more unusual ideas like furniture appearing or other scene transformations.",
                },
                {
                  number: "04",
                  title: "Campaign Longevity",
                  text: "Keep releasing fresh content without organising another property shoot.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="min-h-[220px] border-b border-r border-white/10 p-7"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-brassBright">
                    {item.number}
                  </p>

                  <h3 className="mt-9 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              href="/residential-property-animation"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Residential Animation
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Explore more residential property animation.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-black/50">
                See portrait animations, Coming Soon ideas and day to night
                transformations.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore residential
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/before-after"
              className="group rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft md:p-10"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Before & After
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold">
                Drag between the original and finished image.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-black/50">
                Explore interactive residential, childcare and lifestyle
                transformations.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Open before and after
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Residential Campaign
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            One shoot.
            <br />
            More campaign runway.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the property photography you already have and we&apos;ll
            help identify which scenes can become fresh moving content.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              Build a campaign like this
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