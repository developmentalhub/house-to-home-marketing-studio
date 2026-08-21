import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CampaignBuilder from "@/components/CampaignBuilder";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";

const featuredVideos = [
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
    id: "childcare-build",
    title: "Childcare Development Transformation",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Childcare",
    orientation: "portrait" as const,
  },
];

const propertyTypes = [
  {
    number: "01",
    title: "Residential",
    description:
      "Turn existing property photography into lifestyle scenes, furnished interiors, day to night content and property animation.",
    href: "/residential-property-animation",
  },
  {
    number: "02",
    title: "Commercial",
    description:
      "Show buyers and tenants what a vacant commercial property could become with industry specific visualisation and moving content.",
    href: "/commercial-property-visualisation",
  },
  {
    number: "03",
    title: "Childcare",
    description:
      "Help people understand a future childcare centre before construction is complete or before opening day.",
    href: "/childcare-development-visualisation",
  },
];

const solutions = [
  {
    problem: "The listing needs more attention",
    solution:
      "Create another visual campaign moment from the photography you already have.",
    href: "/blog/how-to-make-a-property-listing-stand-out-without-another-photo-shoot",
  },
  {
    problem: "The campaign feels stale",
    solution:
      "Refresh the story without organising another property shoot.",
    href: "/blog/how-to-refresh-a-property-campaign-that-has-gone-stale",
  },
  {
    problem: "The property is empty",
    solution:
      "Add furniture, lifestyle, people or a relevant commercial use.",
    href: "/blog/how-to-market-a-vacant-commercial-property",
  },
  {
    problem: "The campaign needs video",
    solution:
      "Turn selected still images into animated property content.",
    href: "/blog/how-to-turn-commercial-property-photos-into-video",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Real Estate Media House
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                You already have
                <span className="block text-rust">the property media.</span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                We turn existing property photography, renders and footage into
                more useful visual marketing content.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/50">
                Enhanced stills. Lifestyle scenes. Commercial visualisation.
                Property animation. Development transformations. Finished
                property video.
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
                  Show us your media
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                  after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                  beforeAlt="Property before childcare development visualisation"
                  afterAlt="Property transformed into a completed childcare development visual"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to compare the original with the transformed property
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE POSITIONING */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                One Shoot. More Campaign Content.
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                The property shoot is not the end of the content.
              </h2>

              <p className="mt-7 text-xl leading-9 text-black/60">
                It is the starting point.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                Existing property photography can become another still, another
                audience angle, another campaign moment or moving property
                content without organising another shoot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL PROOF */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png"
                beforeAlt="Original vacant commercial warehouse"
                afterAlt="Vacant warehouse transformed into a logistics business concept"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Commercial Property
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Turn one image into another campaign moment.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                A vacant commercial property can be shown differently to the
                audiences the campaign actually needs to reach.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The same warehouse can become a gym, mechanic workshop,
                logistics operation, photography studio or another relevant
                visual concept.
              </p>

              <Link
                href="/commercial-property-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore commercial visualisation
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Property Types
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Different properties.
                <span className="block text-rust">
                  Different marketing problems.
                </span>
              </h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {propertyTypes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-[320px] flex-col rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 transition hover:border-rust hover:bg-white hover:shadow-soft"
              >
                <p className="font-mono text-xs font-semibold text-rust">
                  {item.number}
                </p>

                <h3 className="mt-10 font-display text-4xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-5 flex-1 leading-8 text-black/50">
                  {item.description}
                </p>

                <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                  Explore {item.title.toLowerCase()}
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM SOLVING */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Start With The Problem
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                What does the campaign need to do next?
              </h2>
            </div>

            <div className="space-y-4">
              {solutions.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group grid gap-5 rounded-[2rem] border border-black/10 bg-white p-7 transition hover:border-rust hover:shadow-soft sm:grid-cols-[70px_0.85fr_1.15fr_auto] sm:items-start md:p-8"
                >
                  <p className="font-mono text-xs font-semibold text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-2xl font-semibold">
                    {item.problem}
                  </h3>

                  <p className="leading-7 text-black/50">{item.solution}</p>

                  <ArrowRight
                    size={19}
                    className="text-rust transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
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
                More useful content out.
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
                  title: "Tell Us The Campaign Problem",
                  text: "Explain what needs more attention, what is hard to picture or which audience you want to reach.",
                },
                {
                  number: "03",
                  title: "Choose The Transformation",
                  text: "Lifestyle, furniture, enhanced still, commercial use, animation, build transformation or finished video.",
                },
                {
                  number: "04",
                  title: "Use It Alongside The Original Media",
                  text: "Create more campaign moments while keeping the original property photography available.",
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

      {/* MOTION */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={featuredVideos}
            eyebrow="Property Media In Motion"
            heading="First, we bring the image to life. Then, we make it move."
            description="Existing residential, commercial and development media can become animated property content and short campaign video."
          />

          <div className="mt-10">
            <Link
              href="/video-library"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Explore more property video
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL PROOF */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Lifestyle Transformation
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Clean property photography can become a more human campaign
                moment.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Add atmosphere and lifestyle without replacing the original
                image.
              </p>

              <Link
                href="/image-library"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore image transformations
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/lifestyle/bathroom-before.jpeg"
                after="/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg"
                beforeAlt="Original residential bathroom property photograph"
                afterAlt="Residential bathroom transformed into lifestyle marketing content"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN BUILDER */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Build Your Campaign
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Choose what you want your existing property media to become.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Select the types of content you need and see which package may
              fit the campaign.
            </p>
          </div>

          <CampaignBuilder />
        </div>
      </section>

      {/* GUIDES */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Property Marketing Guides
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Find the problem before choosing the content.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/55">
                Our guides are built around practical property marketing
                questions: vacant spaces, stale campaigns, different tenant
                audiences, development marketing and getting more value from one
                property shoot.
              </p>

              <Link
                href="/blog"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
              >
                Explore property marketing guides
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SISTER BRAND */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Sister Brand
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
                Need the property photographed first?
              </h2>

              <p className="mt-5 leading-8 text-black/50">
                Real Estate Media House focuses on transforming property media
                that already exists. Photography is handled separately through
                our sister real estate photography brand, RP Images.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Real Estate Media House
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Your listing is competing with everything.
            <br />
            Give people a reason to stop.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Show us the property media you already have and tell us what the
            campaign needs to do next.
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