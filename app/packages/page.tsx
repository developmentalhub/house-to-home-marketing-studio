import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property Story Packages | Real Estate Media House",
  description:
    "Property storytelling packages combining enhanced real estate images, animation and emotionally driven narrative built from the property media you already have.",
  alternates: {
    canonical: `${SITE_URL}/packages`,
  },
  openGraph: {
    title: "Property Story Packages | Real Estate Media House",
    description:
      "Turn existing property photography, renders and footage into enhanced images, animation and a stronger campaign story.",
    url: `${SITE_URL}/packages`,
    type: "website",
  },
};

const packages = [
  {
    number: "01",
    name: "Story Starter",
    price: "$595",
    gst: "+ GST",
    href: "/packages/story-starter",
    featured: false,
    summary:
      "For beautiful property photography that needs a stronger reason for someone to stop and feel something.",
    rob: [
      "5 enhanced property images",
      "1 property animation up to 10 seconds",
    ],
    robyn: [
      "A story hook or caption angle for each of the 5 images",
      "Emotional direction for each image",
    ],
    bestFor:
      "A focused first step when the photography already looks good but the campaign needs more life, movement and story.",
    comparison: {
      images: "5",
      animations: "1",
      duration: "Up to 10 sec",
      narrative: "5 story hooks",
    },
  },
  {
    number: "02",
    name: "Story Builder",
    price: "$995",
    gst: "+ GST",
    href: "/packages/story-builder",
    featured: false,
    summary:
      "For a listing that needs more than one attention grab. It needs a story that starts somewhere and keeps going.",
    rob: [
      "8 enhanced property images",
      "2 property animations up to 10 seconds each",
      "Up to 20 seconds of animation in total",
    ],
    robyn: [
      "A 3 post narrative sequence",
      "Hook → Property moment → Lifestyle moment",
    ],
    bestFor:
      "A campaign that needs several connected moments rather than unrelated posts using the same listing photography.",
    comparison: {
      images: "8",
      animations: "2",
      duration: "Up to 20 sec total",
      narrative: "3 post sequence",
    },
  },
  {
    number: "03",
    name: "Story Deep Dive",
    price: "$1,595",
    gst: "+ GST",
    href: "/packages/story-deep-dive",
    featured: false,
    summary:
      "For a property where the feeling lives in more than one room, one view or one feature.",
    rob: [
      "12 enhanced property images",
      "3 property animations up to 10 seconds each",
      "Up to 30 seconds of animation in total",
    ],
    robyn: [
      "A 5 post narrative arc",
      "Arrival → connection → hero moment → lifestyle → emotional close",
    ],
    bestFor:
      "A property with several strong spaces, details and lifestyle moments that deserve their own place in the campaign.",
    comparison: {
      images: "12",
      animations: "3",
      duration: "Up to 30 sec total",
      narrative: "5 post arc",
    },
  },
  {
    number: "04",
    name: "The Full Story",
    price: "$1,990",
    gst: "+ GST",
    href: "/packages/the-full-story",
    featured: true,
    summary:
      "For a listing that deserves a complete campaign story rather than simply a collection of individual assets.",
    rob: [
      "12 enhanced property images",
      "3 to 4 property animations up to 10 seconds each",
      "Up to 40 seconds of animation in total",
      "1 finished vertical property Reel from 20 to 30 seconds",
    ],
    robyn: [
      "Complete listing lifecycle narrative",
      "Coming Soon → Just Listed → Lifestyle → Open House → Sold",
      "Reel script and narration structure",
    ],
    bestFor:
      "A complete listing campaign that needs to keep creating new reasons for people to notice, imagine and return.",
    comparison: {
      images: "12",
      animations: "3 to 4",
      duration: "Up to 40 sec total + Reel",
      narrative: "Full lifecycle story",
    },
  },
  {
    number: "05",
    name: "Story Custom",
    price: "Custom",
    gst: "",
    href: "/packages/story-custom",
    featured: false,
    summary:
      "For residential, commercial, childcare and development projects that need a scope built around the property.",
    rob: [
      "Custom number of enhanced property images",
      "Custom number of property animations",
      "Animated scenes typically up to 10 seconds each",
      "Development transformation where required",
      "Finished video where required",
    ],
    robyn: [
      "Custom narrative arc matched to the project",
      "Story hooks, captions and sequencing matched to the campaign",
    ],
    bestFor:
      "Larger, multi stage or unusual projects that do not fit comfortably inside a standard package.",
    comparison: {
      images: "Custom",
      animations: "Custom",
      duration: "Typically up to 10 sec each",
      narrative: "Custom",
    },
  },
];

const enhancedExamples = [
  {
    number: "01",
    title: "People",
    text: "Introduce believable human moments that help someone imagine how the property could feel in everyday use.",
  },
  {
    number: "02",
    title: "Furniture",
    text: "Add or refine furniture while keeping the architecture, room proportions and layout accurate.",
  },
  {
    number: "03",
    title: "Appliances & Décor",
    text: "Add selected appliances, styling and decorative details without redesigning the property itself.",
  },
  {
    number: "04",
    title: "Cars & Activity",
    text: "Add appropriate vehicles, people and everyday activity to exterior scenes where they support the story.",
  },
  {
    number: "05",
    title: "Landscape",
    text: "Refine lawns, planting and surrounding atmosphere while keeping the built property true.",
  },
  {
    number: "06",
    title: "Lighting & Atmosphere",
    text: "Use warmth, daylight, evening light and atmosphere to give the same property a different emotional moment.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Real Estate Media House Property Story Packages",
  itemListElement: packages.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: item.name,
      url: `${SITE_URL}${item.href}`,
    },
  })),
};

export default function PackagesPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* HEADER */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Property Story Packages
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Beautiful property media
                <span className="block text-rust">
                  should make someone feel something.
                </span>
              </h1>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-white/65 md:text-xl">
                A beautiful photograph shows the room. A stronger property story
                helps someone picture what life inside that room could actually
                feel like.
              </p>

              <p className="mt-5 leading-8 text-white/45">
                We take the photography, renders or footage you already have and
                turn selected moments into enhanced images, animation and a
                narrative designed to give the campaign more emotional depth.
              </p>

              <p className="mt-6 font-display text-2xl leading-9 text-white/80">
                First, we bring the image to life. Then, we make it move. Then,
                we tell you why it matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED IMAGES */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Enhanced Property Images
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Keep the architecture true.
                <span className="block text-rust">
                  Build the life around it.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                Every package includes enhanced property images. We keep the
                architecture, layout and defining property elements accurate to
                the supplied image.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                Depending on the property and story, we can then add or refine
                people, furniture, appliances, décor, cars, landscaping,
                lighting and atmosphere.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                We are not redesigning the property. We are adding the details,
                atmosphere and human moments that help someone imagine life
                around it.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {enhancedExamples.map((item) => (
              <article
                key={item.number}
                className="rounded-[1.75rem] border border-black/10 bg-[#f7f5f1] p-7"
              >
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  {item.number}
                </p>

                <h3 className="mt-5 font-display text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-black/50">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ANIMATION EXPLANATION */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Property Animation
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Each animated scene
                <span className="block text-rust">
                  can run up to 10 seconds.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                The package determines how many individual animated scenes are
                included.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  ["Story Starter", "1 scene · up to 10 sec"],
                  ["Story Builder", "2 scenes · up to 20 sec total"],
                  ["Story Deep Dive", "3 scenes · up to 30 sec total"],
                  ["The Full Story", "3 to 4 scenes · up to 40 sec total"],
                ].map(([name, duration]) => (
                  <div
                    key={name}
                    className="rounded-[1.5rem] border border-black/10 bg-white p-6"
                  >
                    <p className="font-display text-xl font-semibold">{name}</p>

                    <p className="mt-3 text-sm leading-6 text-black/50">
                      {duration}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-7 max-w-3xl leading-8 text-black/50">
                These animations can work as individual campaign assets. The
                Full Story also includes a separate finished vertical Reel from
                20 to 30 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE LIST */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Choose Your Story
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              How far do you want
              <span className="block text-rust">
                the property story to go?
              </span>
            </h2>
          </div>

          <div className="space-y-5">
            {packages.map((item) => (
              <article
                key={item.name}
                className={`overflow-hidden rounded-[2rem] border ${
                  item.featured
                    ? "border-rust bg-ink text-white"
                    : "border-black/10 bg-[#f7f5f1]"
                }`}
              >
                <div className="p-7 md:p-9">
                  <div className="grid gap-7 lg:grid-cols-[70px_1fr_auto] lg:items-start">
                    <p
                      className={`font-mono text-xs font-semibold ${
                        item.featured ? "text-brassBright" : "text-rust"
                      }`}
                    >
                      {item.number}
                    </p>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-4xl font-semibold">
                          {item.name}
                        </h3>

                        {item.featured && (
                          <span className="rounded-full border border-rust bg-rust/20 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-brassBright">
                            The Flagship Story
                          </span>
                        )}
                      </div>

                      <p
                        className={`mt-4 max-w-3xl leading-7 ${
                          item.featured ? "text-white/55" : "text-black/50"
                        }`}
                      >
                        {item.summary}
                      </p>
                    </div>

                    <div className="lg:text-right">
                      <p className="font-display text-4xl font-semibold">
                        {item.price}
                      </p>

                      {item.gst && (
                        <p
                          className={`mt-1 text-xs ${
                            item.featured ? "text-white/35" : "text-black/35"
                          }`}
                        >
                          {item.gst}
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className={`mt-8 grid gap-5 border-t pt-8 lg:grid-cols-2 ${
                      item.featured ? "border-white/10" : "border-black/10"
                    }`}
                  >
                    <div>
                      <p
                        className={`font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${
                          item.featured ? "text-brassBright" : "text-rust"
                        }`}
                      >
                        Visual Story
                      </p>

                      <div className="mt-5 space-y-3">
                        {item.rob.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-3"
                          >
                            <Check
                              size={16}
                              className={`mt-1 shrink-0 ${
                                item.featured
                                  ? "text-brassBright"
                                  : "text-rust"
                              }`}
                            />

                            <p
                              className={`leading-6 ${
                                item.featured
                                  ? "text-white/60"
                                  : "text-black/60"
                              }`}
                            >
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p
                        className={`font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${
                          item.featured ? "text-brassBright" : "text-rust"
                        }`}
                      >
                        Human Story
                      </p>

                      <div className="mt-5 space-y-3">
                        {item.robyn.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-3"
                          >
                            <Check
                              size={16}
                              className={`mt-1 shrink-0 ${
                                item.featured
                                  ? "text-brassBright"
                                  : "text-rust"
                              }`}
                            />

                            <p
                              className={`leading-6 ${
                                item.featured
                                  ? "text-white/60"
                                  : "text-black/60"
                              }`}
                            >
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`mt-8 grid gap-6 border-t pt-7 md:grid-cols-[1fr_auto] md:items-end ${
                      item.featured ? "border-white/10" : "border-black/10"
                    }`}
                  >
                    <div>
                      <p
                        className={`font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${
                          item.featured ? "text-brassBright" : "text-rust"
                        }`}
                      >
                        Best For
                      </p>

                      <p
                        className={`mt-3 max-w-3xl leading-7 ${
                          item.featured ? "text-white/55" : "text-black/50"
                        }`}
                      >
                        {item.bestFor}
                      </p>
                    </div>

                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold transition ${
                        item.featured
                          ? "bg-white text-ink hover:bg-brassBright"
                          : "bg-ink text-white hover:bg-rust"
                      }`}
                    >
                      Explore {item.name}
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-9">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Quick Comparison
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              See the difference at a glance.
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-black/10 bg-white">
            <table className="min-w-[950px] w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="p-5 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                    Package
                  </th>

                  <th className="p-5 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                    Price
                  </th>

                  <th className="p-5 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                    Enhanced Images
                  </th>

                  <th className="p-5 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                    Animations
                  </th>

                  <th className="p-5 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                    Animation Duration
                  </th>

                  <th className="p-5 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                    Narrative
                  </th>
                </tr>
              </thead>

              <tbody>
                {packages.map((item) => (
                  <tr
                    key={item.name}
                    className={`border-b border-black/10 last:border-b-0 ${
                      item.featured ? "bg-rust/5" : ""
                    }`}
                  >
                    <td className="p-5">
                      <Link
                        href={item.href}
                        className="font-display text-xl font-semibold hover:text-rust"
                      >
                        {item.name}
                      </Link>
                    </td>

                    <td className="p-5 font-semibold">
                      {item.price}

                      {item.gst && (
                        <span className="ml-1 text-xs font-normal text-black/35">
                          {item.gst}
                        </span>
                      )}
                    </td>

                    <td className="p-5 text-black/55">
                      {item.comparison.images}
                    </td>

                    <td className="p-5 text-black/55">
                      {item.comparison.animations}
                    </td>

                    <td className="p-5 text-black/55">
                      {item.comparison.duration}
                    </td>

                    <td className="p-5 text-black/55">
                      {item.comparison.narrative}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CLEAR SCOPE */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Clear Scope
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                We create the story.
                <span className="block text-rust">
                  You decide where it lives.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                We create the enhanced visuals, animation, narrative, captions
                and sequencing included in your package.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                We do not manage your accounts, schedule your posts or run your
                day to day social presence. That stays with you, your agency or
                your marketing team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-10">
            <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                  Payment
                </p>

                <p className="mt-5 font-display text-5xl font-semibold">
                  50 / 50
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
                  50% deposit to begin. 50% before use.
                </h2>

                <p className="mt-5 leading-8 text-black/50">
                  The remaining 50% is due before the finished content may be
                  published, posted, distributed, advertised or otherwise used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Start With The Property
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Show us the photos.
            <br />
            We’ll show you the story hiding inside them.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Start with the property media you already have. We’ll help you work
            out which package gives it the right amount of visual and narrative
            depth.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Show Us Your Property
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}