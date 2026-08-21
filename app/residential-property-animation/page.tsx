import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import SwipeGallery, {
  type SwipeGalleryItem,
} from "@/components/SwipeGallery";
import YouTubeVideoCarousel, {
  type YouTubeVideoCarouselItem,
} from "@/components/YouTubeVideoCarousel";

export const metadata: Metadata = {
  title: "Residential Property Animation",
  description:
    "Residential property animation created from existing real estate photography. Turn listing images into fresh campaign content with movement, lifestyle, day to night transformations and cinematic property animation.",
};

const residentialVideos: YouTubeVideoCarouselItem[] = [
  {
    id: "kitchen",
    title: "Kitchen Animation",
    url: "https://www.youtube.com/shorts/5NP5Ay_3SBY",
    category: "Residential Animation",
    description:
      "Turn a standard kitchen image into a fresh moving piece of campaign content.",
    orientation: "portrait",
  },
  {
    id: "coming-soon-sign",
    title: "Coming Soon Sign",
    url: "https://www.youtube.com/shorts/7sLtp4cucnU",
    category: "Campaign Launch",
    description:
      "Create a more memorable Coming Soon moment from the property photography you already have.",
    orientation: "portrait",
  },
  {
    id: "coming-soon-balloons",
    title: "Coming Soon Balloons",
    url: "https://www.youtube.com/shorts/npBU8mNYw0o",
    category: "Campaign Launch",
    description:
      "Add a more playful campaign moment to an existing facade image.",
    orientation: "portrait",
  },
  {
    id: "day-night",
    title: "Day To Night Facade",
    url: "https://www.youtube.com/shorts/UMWARuYjMSU",
    category: "Lighting Transformation",
    description:
      "Move the property from daylight into evening to create another visual story from the same facade.",
    orientation: "portrait",
  },
];

const residentialGallery: SwipeGalleryItem[] = [
  {
    id: "residential-home-after",
    title: "Residential Exterior",
    category: "Property Transformation",
    image:
      "/images/residential/residential-before-after/residential-home-after.png",
    description:
      "Turn an existing residential photograph into a stronger visual moment for the campaign.",
  },
  {
    id: "residential-kitchen-after",
    title: "Residential Kitchen",
    category: "Lifestyle Transformation",
    image:
      "/images/residential/residential-before-after/kitchen-after.png",
    description:
      "Create another piece of visual content from the kitchen photography already supplied.",
  },
  {
    id: "kitchen-lifestyle",
    title: "Kitchen Lifestyle",
    category: "Lifestyle",
    image:
      "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
    description:
      "Add believable people and activity to make the scene feel more lived in.",
  },
  {
    id: "living-styling",
    title: "Living Room Styling",
    category: "Furniture & Styling",
    image:
      "/property-images/website/staging/living-room-after.jpeg",
    description:
      "Turn an empty living space into a more complete property marketing image.",
  },
  {
    id: "bedroom-lifestyle",
    title: "Bedroom Lifestyle",
    category: "Lifestyle",
    image:
      "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
    description:
      "Create a warmer and more aspirational bedroom scene.",
  },
  {
    id: "foyer-lifestyle",
    title: "Foyer Lifestyle",
    category: "Lifestyle",
    image:
      "/property-images/website/lifestyle/foyer-after.jpeg",
    description:
      "Give the entry a stronger sense of arrival and atmosphere.",
  },
];

export default function ResidentialPropertyAnimationPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Residential Property Animation
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Your listing is competing
              <span className="block text-rust">
                with everything else in the feed.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              You already paid for the photography. We turn those same property
              images into fresh visual content that helps the campaign stay
              visible, feel current and work harder.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#residential-animation"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                Watch residential examples
                <ArrowRight size={18} />
              </a>

              <Link
                href="/enquire"
                className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Start a residential campaign
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
                One shoot. More campaign content.
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Your best property images should not disappear after one post.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                A listing campaign rarely needs more photography. It needs more
                ways to use the photography that already exists.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                We can turn individual rooms and exterior images into new
                visual moments with lifestyle, movement, lighting, furniture,
                campaign treatments and cinematic motion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <SwipeGallery
            items={residentialGallery}
            eyebrow="Residential Image Transformations"
            heading="Swipe through what the same property media can become."
            description="The shoot is already done. These transformations help the existing media keep working across the campaign."
          />
        </div>
      </section>

      <section
        id="residential-animation"
        className="bg-white py-20 md:py-28"
      >
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={residentialVideos}
            eyebrow="Residential Animation"
            heading="Turn a still image into a new campaign moment."
            description="Use movement, lighting and visual ideas to give the listing more than one way to get noticed."
          />
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Full Property Case Study
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                One property.
                <br />
                Twelve moving scenes.
              </h2>
            </div>

            <div className="max-w-2xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/55">
                See one residential property transformed room by room across the
                facade, kitchen, dining, living spaces, bedroom, bathroom,
                study, laundry and backyard.
              </p>

              <Link
                href="/projects/residential-property-transformation"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brassBright"
              >
                Explore the full property
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What could your campaign use?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Not every listing should look like every other listing.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Lifestyle",
                  text: "Add believable people, pets, food and activity around the property.",
                },
                {
                  number: "02",
                  title: "Furniture & Styling",
                  text: "Furnish empty spaces or give existing rooms a more finished presentation.",
                },
                {
                  number: "03",
                  title: "Lighting",
                  text: "Create golden hour, evening atmosphere or day to night transitions.",
                },
                {
                  number: "04",
                  title: "Motion",
                  text: "Add camera movement, arrivals, changing scenes or cinematic property animation.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="min-h-[220px] border-b border-r border-black/10 p-7"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-rust">
                    {item.number}
                  </p>

                  <h3 className="mt-9 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/50">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Interactive Before & After
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Want to control the transformation yourself?
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Drag directly between the supplied property image and the
                finished transformation.
              </p>
            </div>

            <Link
              href="/before-after"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
            >
              Open Before & After
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Residential Property Campaign
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            The feed moves fast.
            <br />
            Your property should too.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the property photography you already have and we&apos;ll
            turn the strongest images into fresh campaign content.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              Start a residential campaign
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