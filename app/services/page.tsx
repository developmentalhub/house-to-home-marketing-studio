import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property Storytelling & Media Services | Real Estate Media House",
  description:
    "Turn existing property photography, renders and footage into emotionally engaging campaign content with enhanced visuals, animation, narrative, captions and finished property video.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Property Storytelling & Media Services | Real Estate Media House",
    description:
      "Beautiful property media can show the room. We help people imagine the life that could happen inside it.",
    url: `${SITE_URL}/services`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/childcare/before-after-childcare/childcare-centre-new-build-after.png`,
        alt: "Existing property imagery transformed into a more complete marketing story",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Property Storytelling and Media Transformation",
  description:
    "Real Estate Media House transforms supplied property photography, renders and footage into enhanced visuals, animation, campaign narrative, captions and finished property storytelling content.",
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
      "Take an already strong property image and give it more atmosphere, emotion and campaign purpose.",
    href: "/image-library",
  },
  {
    number: "02",
    title: "Lifestyle Storytelling",
    description:
      "Add the human moments that help someone imagine being there: coffee at the breakfast bar, friends in the backyard, a quiet corner at the end of the day.",
    href: "/image-library",
  },
  {
    number: "03",
    title: "Furniture & Styling",
    description:
      "Turn an empty room into a space with purpose so people do not have to work so hard to imagine how their life might fit.",
    href: "/image-library",
  },
  {
    number: "04",
    title: "Commercial Property Visualisation",
    description:
      "Show a vacant commercial property as a relevant environment for the operator you actually want to attract.",
    href: "/commercial-property-visualisation",
  },
  {
    number: "05",
    title: "Property Animation",
    description:
      "Turn still property images into moving moments using people, atmosphere, environmental movement and camera motion.",
    href: "/video-library",
  },
  {
    number: "06",
    title: "Development Storytelling",
    description:
      "Use existing project media to help people understand and feel the future property before it is complete.",
    href: "/childcare-development-visualisation",
  },
  {
    number: "07",
    title: "Day To Night",
    description:
      "Take a familiar exterior and change the emotional temperature with evening light, atmosphere and a different sense of occasion.",
    href: "/image-library",
  },
  {
    number: "08",
    title: "Finished Property Reels",
    description:
      "Combine transformed visuals, motion and a clear narrative arc into a finished short vertical property story.",
    href: "/packages/the-full-story",
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
                Property Storytelling Services
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                The photo shows the room.
                <span className="block text-rust">
                  The story shows the life.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
                A listing can be beautifully photographed and still feel like
                a collection of rooms. We help turn those rooms into moments
                people can picture themselves living.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/45">
                The breakfast bar becomes Sunday morning coffee. The outdoor
                area becomes dinner that runs late. The spare room becomes the
                nursery, study or space someone has been waiting for.
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
                  Show us your property
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/residential/residential-before-after/residential-home-before.png"
                  after="/images/residential/residential-before-after/residential-home-after.png"
                  beforeAlt="Original residential property image"
                  afterAlt="Residential property transformed into additional campaign content"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                The property is the same. The way people feel about it changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What We Actually Do
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                We do not replace good photography.
                <span className="block text-rust">
                  We give it somewhere to go.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                Good photography proves the property looks beautiful.
                Storytelling helps someone imagine what it might feel like to
                live, work or grow there.
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-black/50">
                We start with the photography, renders or footage you already
                have. Then we build new visual moments, motion, captions and
                narrative around the strongest emotional opportunities inside
                the property.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                First, we bring the image to life. Then, we make it move.
                Then, we tell you why it matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-y border-black/10 bg-[#f7f5f1] py-18 md:py-24"
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
                Start with what you want someone
                <span className="block text-rust">
                  to notice, imagine or feel.
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

      {/* STORY EXAMPLES */}
      <section className="bg-ink py-18 text-white md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                The Emotional Layer
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Features tell people what is there.
                <span className="block text-rust">
                  Story tells them why it matters.
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  feature: "Breakfast bar",
                  story:
                    "Sunday morning coffee while the house is still quiet and nobody is rushing anywhere.",
                },
                {
                  feature: "Large backyard",
                  story:
                    "The place where lunch becomes dinner because nobody really wants to leave.",
                },
                {
                  feature: "Light filled living room",
                  story:
                    "The patch of afternoon sun that becomes everyone's favourite place to sit.",
                },
                {
                  feature: "Extra bedroom",
                  story:
                    "A nursery now, a study later, a room that changes as life changes.",
                },
              ].map((item, index) => (
                <article
                  key={item.feature}
                  className="grid gap-4 border-b border-white/10 py-6 sm:grid-cols-[55px_0.8fr_1.2fr]"
                >
                  <p className="font-mono text-[9px] text-brassBright">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div>
                    <p className="text-sm text-white/30">The property has</p>
                    <h3 className="mt-1 font-display text-xl font-semibold">
                      {item.feature}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm text-white/30">The story becomes</p>
                    <p className="mt-1 font-display text-2xl leading-8 text-white/75">
                      {item.story}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL */}
      <section className="bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/staging/living-room-before.jpeg"
                after="/property-images/website/staging/living-room-after.jpeg"
                beforeAlt="Residential living room before furniture and styling"
                afterAlt="Residential living room shown as a more complete lifestyle space"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Residential
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Help people picture the moments between the rooms.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                A furnished room is useful. A room with a sense of life is more
                powerful. The goal is not simply to show where the sofa goes.
                It is to make the property feel like somewhere life already has
                a rhythm.
              </p>

              <Link
                href="/residential-property-animation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore residential property stories
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Commercial
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Do not ask the tenant to imagine an empty warehouse.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Show the gym operator training zones and activity. Show the
                mechanic vehicles on hoists. Show the logistics business stock,
                movement and workflow. Make the property relevant to the person
                you actually want to reach.
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
                beforeAlt="Vacant commercial warehouse before gym visualisation"
                afterAlt="Commercial warehouse transformed into an active gym environment"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHILDCARE */}
      <section className="bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                beforeAlt="Property before childcare development visualisation"
                afterAlt="Property transformed into a completed childcare centre story"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Childcare Development
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A future centre is more than a future building.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                It is drop offs in the morning, children moving through the
                rooms, play outside, families arriving and a centre becoming
                part of a community. We help the campaign show that future
                before the finished centre exists.
              </p>

              <Link
                href="/childcare-development-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore childcare storytelling
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MOTION */}
      <section className="bg-ink py-18 text-white md:py-24">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={videos}
            eyebrow="Property Stories In Motion"
            heading="First, bring the image to life. Then, make it move. Then, tell people why it matters."
            description="Motion catches the eye. Story gives the movement meaning."
          />
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What Is Missing?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Sometimes the problem is not the photography.
              </h2>

              <p className="mt-5 leading-8 text-black/50">
                Sometimes the photography is excellent. It just has not been
                given a human story yet.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  problem: "The listing looks beautiful but feels flat",
                  solution:
                    "Find the human moments inside the strongest images and build the campaign around them.",
                },
                {
                  problem: "The property has been seen before",
                  solution:
                    "Create another visual and emotional angle from the media already produced.",
                },
                {
                  problem: "The room is empty",
                  solution:
                    "Add styling, activity and purpose so someone can understand how the space might feel to use.",
                },
                {
                  problem: "The future property does not exist yet",
                  solution:
                    "Turn project imagery into a story about possibility, progress and the completed environment.",
                },
                {
                  problem: "You need moving content",
                  solution:
                    "Animate the strongest visual moments and give them a narrative reason to be there.",
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

      {/* CLEAR SCOPE */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-18 md:py-22">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Clear Scope
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
              We create the story.
              <br />
              You decide where it lives.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              We write the narrative, the captions and the sequencing included
              in your package so the visual content has a clear emotional
              direction.
            </p>

            <p className="mt-5 leading-8 text-black/50">
              What we do not do is manage your accounts, schedule your posts or
              run your day to day social presence. That stays with you, your
              agency or your marketing team.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the property.
                <br />
                Find the human story.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Property Media",
                  text: "Supply the photography, renders or footage you already have.",
                },
                {
                  number: "02",
                  title: "Find The Strongest Moments",
                  text: "We look for the rooms, details and scenes with the most visual and emotional potential.",
                },
                {
                  number: "03",
                  title: "Build The Visual Story",
                  text: "Rob develops the enhanced visuals and motion. Robyn develops the emotional angle, captions and narrative sequence.",
                },
                {
                  number: "04",
                  title: "Put The Story Into The Campaign",
                  text: "Use the finished images, animation, captions and narrative alongside the original property media.",
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
      <section className="border-t border-black/10 bg-[#f7f5f1] py-18 md:py-24">
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
                See What The Media Can Become
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Explore residential, commercial and childcare transformations.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore the work
                <ArrowRight size={17} />
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
                Choose How Far The Story Goes
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                From five individual story hooks through to a complete listing
                lifecycle campaign.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore packages
                <ArrowRight size={17} />
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
                Start With The Marketing Problem
              </h2>

              <p className="mt-4 leading-7 text-black/50">
                Browse practical property marketing guides built around what
                the campaign needs to achieve.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                Explore guides
                <ArrowRight size={17} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Start With What You Already Have
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Show us the property.
            <br />
            We’ll find the story inside it.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            The photography may already be beautiful. We help turn it into a
            campaign that gives people something to imagine, remember and feel.
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