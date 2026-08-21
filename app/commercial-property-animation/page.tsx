import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import CommercialOutcomeGallery from "@/components/CommercialOutcomeGallery";
import YouTubeVideoCarousel, {
  type YouTubeVideoCarouselItem,
} from "@/components/YouTubeVideoCarousel";

export const metadata: Metadata = {
  title: "Commercial Property Animation",
  description:
    "Commercial property animation for warehouses and developments. Show how a commercial space could be used, visualise future builds and turn existing property imagery into stronger marketing content.",
};

const commercialVideos: YouTubeVideoCarouselItem[] = [
  {
    id: "warehouse-use-1",
    title: "Show How The Warehouse Could Be Used 01",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Warehouse Activation",
    description:
      "Turn an empty commercial space into a visual example of how a future buyer or tenant could use it.",
    orientation: "portrait",
  },
  {
    id: "warehouse-use-2",
    title: "Show How The Warehouse Could Be Used 02",
    url: "https://www.youtube.com/shorts/bJCRltJn_vY",
    category: "Warehouse Activation",
    description:
      "Show another possible business use for the same type of commercial space.",
    orientation: "portrait",
  },
  {
    id: "warehouse-build",
    title: "Grass Area To Warehouse And Car Park",
    url: "https://www.youtube.com/shorts/2DXsq8mXemI",
    category: "Development Transformation",
    description:
      "Show an undeveloped site becoming a completed warehouse development with building, car park and activity.",
    orientation: "portrait",
  },
];

export default function CommercialPropertyAnimationPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Commercial Property Animation
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Show what the space
              <span className="block text-rust">
                could become.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              Empty warehouses and development sites can be difficult to
              imagine. We turn existing commercial photography and project
              imagery into visual content that helps buyers, tenants and
              stakeholders see the opportunity.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#commercial-gallery"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
              >
                Explore warehouse possibilities
                <ArrowRight size={18} />
              </a>

              <Link
                href="/enquire"
                className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Discuss a commercial project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Help people see the opportunity
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                An empty warehouse leaves too much to the imagination.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                A commercial property may suit multiple industries, but the
                photography often shows nothing more than an empty shell.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                We can use that same photograph to demonstrate different
                business uses, activity, equipment, vehicles, people and future
                development outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL OUTCOME GALLERY */}
      <section
        id="commercial-gallery"
        className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28"
      >
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Interactive Warehouse Gallery
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              One warehouse.
              <br />
              Seven different possibilities.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              Move through different visual outcomes created from the same
              original commercial property image.
            </p>
          </div>

          <CommercialOutcomeGallery />
        </div>
      </section>

      {/* VIDEO CAROUSEL */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={commercialVideos}
            eyebrow="Commercial Animation"
            heading="Show the property in use, not just sitting empty."
            description="Use animation to introduce business activity, future development and commercial potential from the imagery you already have."
          />
        </div>
      </section>

      {/* VALUE */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Commercial Campaign Support
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Make the property easier to understand for more than one type
                of buyer.
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Different Use Cases",
                  text: "Show the same warehouse configured for different industries or business types.",
                },
                {
                  number: "02",
                  title: "Human Scale",
                  text: "Use people, vehicles and equipment to make the size and purpose of the space easier to understand.",
                },
                {
                  number: "03",
                  title: "Future Development",
                  text: "Show a grassed or undeveloped site becoming a completed commercial project.",
                },
                {
                  number: "04",
                  title: "More Campaign Content",
                  text: "Create multiple visual stories from the commercial imagery already supplied.",
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

      {/* DEVELOPMENT */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Development Visualisation
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Show the future site before the build is finished.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/60">
                Commercial developments can be communicated as a sequence rather
                than one static final render.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Show the site changing, the building appearing, the car park
                forming, landscaping establishing and activity arriving.
              </p>

              <Link
                href="/packages/development-campaign"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                View Development Campaign
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Useful For
              </p>

              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl">
                When the potential of the property is stronger than the current
                photograph.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {[
                "Warehouse leasing",
                "Commercial sales",
                "Industrial property",
                "Vacant properties",
                "Future developments",
                "Development launches",
              ].map((item, index) => (
                <div
                  key={item}
                  className="min-h-[150px] border-b border-r border-black/10 p-6"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-rust">
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

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Commercial Property Animation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Do not just show the warehouse.
            <br />
            Show the opportunity.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the commercial property photography, renders or site
            imagery you already have and we&apos;ll help create more ways to
            market it.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              Discuss a commercial project
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