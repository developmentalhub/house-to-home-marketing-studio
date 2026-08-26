import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property Story Packages | Real Estate Media House",
  description:
    "Property storytelling packages combining enhanced real estate visuals, animation and emotionally driven campaign narrative built from the media you already have.",
  alternates: {
    canonical: `${SITE_URL}/packages`,
  },
  openGraph: {
    title: "Property Story Packages | Real Estate Media House",
    description:
      "Turn beautiful property photography into a campaign people can picture themselves living inside.",
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
      "For a listing that already looks good but needs a stronger reason for someone to stop and feel something.",
    painPoints: [
      "The photography is beautiful, but it still feels like a gallery of rooms.",
      "You want to test what happens when each image is given a more human story.",
    ],
    rob: [
      "5 enhanced property images",
      "1 short property animation up to 5 sec",
    ],
    robyn: [
      "A story hook or caption angle for each of the 5 images",
      "Emotional direction that turns a room into a moment someone can imagine living",
    ],
    comparison: {
      images: "5",
      animation: "1 · up to 5 sec",
      story: "5 individual story hooks",
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
    painPoints: [
      "You have several strong images but no real reason for one post to lead into the next.",
      "You want people to move from noticing the property to imagining how life there might actually feel.",
    ],
    rob: [
      "8 enhanced property images",
      "2 property animations up to 10 sec total",
    ],
    robyn: [
      "A 3 post narrative sequence written to unfold in order",
      "Hook → Property moment → Lifestyle moment",
    ],
    comparison: {
      images: "8",
      animation: "2 · up to 10 sec",
      story: "3 post narrative sequence",
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
    painPoints: [
      "The property has details that deserve their own moment instead of disappearing into the listing gallery.",
      "You want to move beyond features and show the rhythm of what living there could feel like.",
    ],
    rob: [
      "12 enhanced property images",
      "3 animated scenes around 15 sec total",
    ],
    robyn: [
      "A 5 post narrative arc that moves through the property",
      "Arrival → connection → hero moment → lifestyle → emotional close",
    ],
    comparison: {
      images: "12",
      animation: "3 · around 15 sec",
      story: "5 post narrative arc",
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
      "For a listing that deserves a campaign people remember, not simply a collection of assets.",
    painPoints: [
      "You want the property story to build from the first teaser through to inspection and sale.",
      "You want a Reel that feels like a story unfolding, not a slideshow of attractive rooms.",
    ],
    rob: [
      "12 enhanced property images",
      "3 to 4 animated scenes",
      "Finished vertical property Reel · 20 to 30 sec",
    ],
    robyn: [
      "Complete listing lifecycle narrative",
      "Coming Soon → Just Listed → Lifestyle → Open House → Sold",
      "Reel story structure and narration direction",
    ],
    comparison: {
      images: "12",
      animation: "3 to 4 + Reel",
      story: "Lifecycle story + Reel structure",
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
      "For developments and larger projects where people need to feel the future before they can physically walk through it.",
    painPoints: [
      "The finished property does not exist yet, so photography alone cannot tell the whole story.",
      "You need people to picture the completed environment, the activity and the life that could happen there.",
    ],
    rob: [
      "Custom enhanced visuals",
      "Custom animation",
      "Development transformation",
      "Finished video where required",
    ],
    robyn: [
      "Custom narrative arc matched to the project stage",
      "Possibility → momentum → completed lifestyle story",
    ],
    comparison: {
      images: "Custom",
      animation: "Custom",
      story: "Custom narrative arc",
    },
  },
];

const packageSchema = {
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
          __html: JSON.stringify(packageSchema),
        }}
      />

      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-14 md:py-18">
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
                A beautiful kitchen photograph shows the breakfast bar.
                A story helps someone picture coffee there on Sunday morning,
                the house still quiet, sunlight coming through the window.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/45">
                That is the difference we build into every package. Rob creates
                the visual moment. Robyn finds the human story inside it.
              </p>

              <p className="mt-5 font-display text-2xl leading-8 text-white/80">
                First, we bring the image to life. Then, we make it move.
                Then, we tell you why it matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAST SELECTOR */}
      <section className="border-b border-black/10 bg-white">
        <div className="container-shell py-7">
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-max gap-3">
              {packages.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.number}`}
                  className={`w-[230px] shrink-0 rounded-[1.5rem] border p-5 transition ${
                    item.featured
                      ? "border-rust bg-ink text-white"
                      : "border-black/10 bg-[#f7f5f1] hover:border-rust hover:bg-white"
                  }`}
                >
                  <p
                    className={`font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${
                      item.featured ? "text-brassBright" : "text-rust"
                    }`}
                  >
                    {item.number}
                  </p>

                  <h2 className="mt-3 font-display text-2xl font-semibold">
                    {item.name}
                  </h2>

                  <p
                    className={`mt-3 font-display text-3xl font-semibold ${
                      item.featured ? "text-white" : "text-ink"
                    }`}
                  >
                    {item.price}

                    {item.gst && (
                      <span className="ml-2 font-sans text-xs font-normal opacity-50">
                        {item.gst}
                      </span>
                    )}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE DIFFERENCE */}
      <section className="py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                The Difference
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A room can look perfect
                <span className="block text-rust">
                  and still feel emotionally empty.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/55">
                Property photography is very good at showing what is there.
                Storytelling adds the next layer: what could happen there.
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
                The breakfast bar becomes slow Sunday mornings. The backyard
                becomes friends staying long after dinner. The window seat
                becomes the quiet place at the end of the day. The spare room
                becomes the nursery, study or space someone has been waiting for.
              </p>

              <p className="mt-5 max-w-3xl font-display text-2xl leading-9">
                We are not trying to make the property less real.
                We are helping people see where their own life might fit inside it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROB + ROBYN */}
      <section className="border-y border-black/10 bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Rob
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold">
                Makes the moment believable.
              </h2>

              <p className="mt-5 leading-8 text-black/50">
                Twenty years of architectural illustration and animation go
                into making every added element, movement and atmosphere feel
                like it belongs in the property.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The aim is not visual noise. It is a stronger, more useful
                version of the media the campaign already has.
              </p>
            </article>

            <article className="rounded-[2rem] border border-rust bg-ink p-8 text-white">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Robyn
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold">
                Finds the life inside the room.
              </h2>

              <p className="mt-5 leading-8 text-white/55">
                Instead of repeating what someone can already see, Robyn looks
                for the emotional doorway into the property: the ritual, the
                possibility, the little piece of life that makes the image mean
                more.
              </p>

              <p className="mt-5 leading-8 text-white/55">
                That story becomes the hook, caption, sequence or script that
                sits beside the visual.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PACKAGE ACCORDIONS */}
      <section className="bg-[#f7f5f1] py-14 md:py-18">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Choose Your Story
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              How deeply do you want people
              <span className="block text-rust">
                to imagine themselves there?
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {packages.map((item) => (
              <details
                key={item.name}
                id={item.number}
                open={item.featured}
                className={`group overflow-hidden rounded-[2rem] border ${
                  item.featured
                    ? "border-rust bg-ink text-white"
                    : "border-black/10 bg-white"
                }`}
              >
                <summary className="cursor-pointer list-none p-7 md:p-9">
                  <div className="grid gap-6 lg:grid-cols-[70px_1fr_auto] lg:items-center">
                    <p
                      className={`font-mono text-xs font-semibold ${
                        item.featured ? "text-brassBright" : "text-rust"
                      }`}
                    >
                      {item.number}
                    </p>

                    <div>
                      <h3 className="font-display text-3xl font-semibold md:text-4xl">
                        {item.name}
                      </h3>

                      <p
                        className={`mt-3 max-w-2xl leading-7 ${
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
                </summary>

                <div
                  className={`border-t px-7 pb-8 pt-7 md:px-9 md:pb-9 ${
                    item.featured
                      ? "border-white/10"
                      : "border-black/10"
                  }`}
                >
                  <div className="grid gap-5 lg:grid-cols-2">
                    <article
                      className={`rounded-[1.5rem] border p-6 ${
                        item.featured
                          ? "border-white/10 bg-white/5"
                          : "border-black/10 bg-[#f7f5f1]"
                      }`}
                    >
                      <p
                        className={`font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${
                          item.featured ? "text-brassBright" : "text-rust"
                        }`}
                      >
                        Rob Delivers
                      </p>

                      <h4 className="mt-3 font-display text-2xl font-semibold">
                        The visual story
                      </h4>

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
                    </article>

                    <article
                      className={`rounded-[1.5rem] border p-6 ${
                        item.featured
                          ? "border-rust bg-rust/20"
                          : "border-rust/30 bg-rust/5"
                      }`}
                    >
                      <p
                        className={`font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${
                          item.featured ? "text-brassBright" : "text-rust"
                        }`}
                      >
                        Robyn Delivers
                      </p>

                      <h4 className="mt-3 font-display text-2xl font-semibold">
                        The human story
                      </h4>

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
                                  ? "text-white/70"
                                  : "text-black/60"
                              }`}
                            >
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </article>
                  </div>

                  <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                      <p
                        className={`font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${
                          item.featured ? "text-brassBright" : "text-rust"
                        }`}
                      >
                        This Is Probably You If
                      </p>

                      <div className="mt-4 space-y-3">
                        {item.painPoints.map((point) => (
                          <p
                            key={point}
                            className={`font-display text-xl leading-8 ${
                              item.featured
                                ? "text-white/65"
                                : "text-black/65"
                            }`}
                          >
                            “{point}”
                          </p>
                        ))}
                      </div>
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
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STORY */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Why Story?
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Features explain a property.
                <span className="block text-rust">
                  Moments make it personal.
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  feature: "Large kitchen island",
                  story:
                    "Sunday morning coffee while someone else steals the last piece of toast.",
                },
                {
                  feature: "North facing living room",
                  story:
                    "That patch of afternoon sun everyone quietly fights to sit in.",
                },
                {
                  feature: "Covered outdoor area",
                  story:
                    "Dinner starts at six and somehow nobody leaves before ten.",
                },
                {
                  feature: "Extra bedroom",
                  story:
                    "A nursery now, a study later, a room that changes as life does.",
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
                    <p className="text-sm text-white/35">The listing says</p>
                    <h3 className="mt-1 font-display text-xl font-semibold">
                      {item.feature}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm text-white/35">The story says</p>
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

      {/* QUICK COMPARISON */}
      <section className="bg-white py-14 md:py-18">
        <div className="container-shell">
          <div className="mb-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Quick Comparison
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Choose how far you want the story to go.
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-black/10 bg-white">
            <table className="min-w-[900px] w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="p-5 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                    Package
                  </th>
                  <th className="p-5 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                    Price
                  </th>
                  <th className="p-5 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                    Images
                  </th>
                  <th className="p-5 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                    Animation
                  </th>
                  <th className="p-5 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">
                    Story
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
                      {item.price}{" "}

                      {item.gst && (
                        <span className="text-xs font-normal text-black/35">
                          {item.gst}
                        </span>
                      )}
                    </td>

                    <td className="p-5 text-black/55">
                      {item.comparison.images}
                    </td>

                    <td className="p-5 text-black/55">
                      {item.comparison.animation}
                    </td>

                    <td className="p-5 text-black/55">
                      {item.comparison.story}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-14 md:py-16">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 md:p-10">
            <div className="grid gap-7 md:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                  Payment
                </p>

                <p className="mt-5 font-display text-5xl font-semibold">
                  50 / 50
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold">
                  50% deposit to begin. 50% before use.
                </h2>

                <p className="mt-4 leading-7 text-black/50">
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
            The room may already look beautiful. Our job is to help someone
            picture the morning, the dinner, the quiet moment or the future
            that could happen there.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Show us your property
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}