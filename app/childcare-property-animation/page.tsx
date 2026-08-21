import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import ChildcareDevelopmentStory from "@/components/ChildcareDevelopmentStory";
import SwipeGallery, {
  type SwipeGalleryItem,
} from "@/components/SwipeGallery";
import YouTubeVideoCarousel, {
  type YouTubeVideoCarouselItem,
} from "@/components/YouTubeVideoCarousel";

export const metadata: Metadata = {
  title: "Childcare Property Animation",
  description:
    "Childcare property animation for developers and operators. Show future centres, interiors, outdoor areas, demolition, development and finished project outcomes using existing property photography and renders.",
};

const developmentVideos: YouTubeVideoCarouselItem[] = [
  {
    id: "build-1",
    title: "Demolish House To Build Centre 01",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Development Transformation",
    description:
      "Show the existing property changing into a future childcare centre.",
    orientation: "portrait",
  },
  {
    id: "build-2",
    title: "Demolish House To Build Centre 02",
    url: "https://www.youtube.com/shorts/fDUWkWFLUrM",
    category: "Development Transformation",
    description:
      "Use animation to communicate the development journey instead of relying on plans alone.",
    orientation: "portrait",
  },
  {
    id: "build-3",
    title: "Demolish House To Build Centre 03",
    url: "https://www.youtube.com/shorts/kdFOHfqTHLw",
    category: "Development Transformation",
    description:
      "Turn an existing residential site into a visual story of the future centre.",
    orientation: "portrait",
  },
];

const interiorVideos: YouTubeVideoCarouselItem[] = [
  {
    id: "room-1",
    title: "Childcare Interior 01",
    url: "https://www.youtube.com/shorts/quxLhvqpAEQ",
    category: "Interior Animation",
    description:
      "Bring a future childcare room to life with movement and atmosphere.",
    orientation: "portrait",
  },
  {
    id: "room-2",
    title: "Childcare Interior 02",
    url: "https://www.youtube.com/shorts/VNgAj19pqJc",
    category: "Interior Animation",
    description:
      "Help operators and families understand how the finished room could feel.",
    orientation: "portrait",
  },
  {
    id: "room-3",
    title: "Childcare Interior 03",
    url: "https://www.youtube.com/shorts/m3xlOPyhYe8",
    category: "Interior Animation",
    description:
      "Turn a static childcare interior into a more engaging visual moment.",
    orientation: "portrait",
  },
  {
    id: "foyer-1",
    title: "Childcare Foyer 01",
    url: "https://www.youtube.com/shorts/4MduhCc7tOU",
    category: "Foyer Animation",
    description:
      "Make the arrival experience feel complete before the centre opens.",
    orientation: "portrait",
  },
  {
    id: "foyer-2",
    title: "Childcare Foyer 02",
    url: "https://www.youtube.com/shorts/al5ui0K4D98",
    category: "Foyer Animation",
    description:
      "Create a more polished first impression from the supplied project media.",
    orientation: "portrait",
  },
];

const outdoorVideos: YouTubeVideoCarouselItem[] = [
  {
    id: "yard-1",
    title: "Outdoor Yard 01",
    url: "https://www.youtube.com/shorts/GnoYNXeTZaA",
    category: "Outdoor Environment",
    description:
      "Show the outdoor environment active, landscaped and ready for use.",
    orientation: "portrait",
  },
  {
    id: "yard-2",
    title: "Outdoor Yard 02",
    url: "https://www.youtube.com/shorts/5WQoWJR4qjc",
    category: "Outdoor Environment",
    description:
      "Turn a static outdoor space into a stronger future centre visual.",
    orientation: "portrait",
  },
];

const facadeGallery: SwipeGalleryItem[] = [
  {
    id: "facade-1",
    title: "Future Childcare Centre",
    category: "Development Visual",
    image: "/images/childcare/childcare-facade/build centre.png",
    description:
      "A future centre visual designed to make the proposed development easier to understand.",
  },
  {
    id: "facade-2",
    title: "Childcare Development View",
    category: "Development Visual",
    image: "/images/childcare/childcare-facade/build centre3.png",
    description:
      "Another view of the development to help communicate the completed project.",
  },
  {
    id: "facade-3",
    title: "Corner Site ELC",
    category: "Development Visual",
    image: "/images/childcare/childcare-facade/corner site ELC.png",
    description:
      "Show what the corner site could become once the early learning centre is complete.",
  },
];

export default function ChildcarePropertyAnimationPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Childcare Property Animation
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Help people see the centre
              <span className="block text-rust">
                before the centre exists.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              Turn existing site photography, renders and project imagery into
              visual content that helps developers, operators and stakeholders
              understand the future centre more clearly.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#development-story"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                Explore the development
                <ArrowRight size={18} />
              </a>

              <Link
                href="/enquire"
                className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Discuss a childcare project
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
                Development communication
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Plans explain the project.
                <br />
                Visual storytelling helps people feel it.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                Childcare developments are often being marketed, presented or
                discussed long before the finished centre can be photographed.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                We use the property media you already have to create a clearer
                picture of the finished centre, its interiors, outdoor areas and
                development journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="development-story"
        className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28"
      >
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Interactive Development Story
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Move through the project.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              Explore the existing site, future centre, internal rooms and
              outdoor environment as one visual story.
            </p>
          </div>

          <ChildcareDevelopmentStory />
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <SwipeGallery
            items={facadeGallery}
            eyebrow="Future Centre Views"
            heading="Show the development from more than one angle."
            description="Give operators, developers and stakeholders more visual context around the finished project."
          />
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={developmentVideos}
            eyebrow="Development Animation"
            heading="Show the transformation, not just the final result."
            description="These animations help communicate the journey from an existing property or site into the completed childcare centre."
          />
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={interiorVideos}
            eyebrow="Interior Animation"
            heading="Bring the rooms to life."
            description="Use movement and atmosphere to help people understand how the future childcare environment could feel once complete."
          />
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={outdoorVideos}
            eyebrow="Outdoor Areas"
            heading="Show the centre active beyond the building."
            description="Outdoor environments can be just as important as the interiors. Show landscape, play areas and activity before opening day."
          />
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Where this can help
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Give your project team more than plans and static renders.
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {[
                "Pre opening campaigns",
                "Development launches",
                "Operator presentations",
                "Stakeholder updates",
                "Future centre promotion",
                "Project marketing",
              ].map((item, index) => (
                <div
                  key={item}
                  className="min-h-[150px] border-b border-r border-white/10 p-6"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brassBright">
                    0{index + 1}
                  </p>

                  <p className="mt-7 font-display text-xl font-semibold">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Childcare Development
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            The centre may not exist yet.
            <br />
            The campaign still needs something to show.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the photography, renders or development imagery you already
            have and we&apos;ll help turn the future project into something
            people can see.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              Discuss a childcare project
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/packages/development-campaign"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              View Development Campaign
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}