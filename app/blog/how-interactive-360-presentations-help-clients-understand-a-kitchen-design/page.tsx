import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Eye,
  Move3D,
  Scan,
  Smartphone,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "How 360° Presentations Help Clients Understand Kitchen Designs",

  description:
    "Learn how interactive 360 degree kitchen presentations can help cabinetry clients understand layout, scale, finishes and design decisions before manufacture begins.",

  alternates: {
    canonical:
      `${SITE_URL}/blog/how-interactive-360-presentations-help-clients-understand-a-kitchen-design`,
  },

  openGraph: {
    title:
      "How Interactive 360° Presentations Help Clients Understand a Kitchen Design",
    description:
      "Why interactive kitchen visualisation can make cabinetry designs easier for clients to understand.",
    url:
      `${SITE_URL}/blog/how-interactive-360-presentations-help-clients-understand-a-kitchen-design`,
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How Interactive 360° Presentations Help Clients Understand a Kitchen Design",
  description:
    "How interactive 360 degree presentations can help cabinetry clients understand proposed kitchen designs.",
  author: {
    "@type": "Organization",
    name: "Real Estate Media House",
  },
  publisher: {
    "@type": "Organization",
    name: "Real Estate Media House",
    url: SITE_URL,
  },
  mainEntityOfPage:
    `${SITE_URL}/blog/how-interactive-360-presentations-help-clients-understand-a-kitchen-design`,
};

export default function BlogPost() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(articleJsonLd),
        }}
      />

      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Interactive 360° Visualisation
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Let your client look around
              <span className="block text-rust">
                before you build the kitchen.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              A flat drawing can show where the
              cabinetry goes. An interactive
              panorama can help the client
              understand what the room may
              actually feel like.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <p className="text-xl leading-9 text-black/65">
              Kitchen design involves more than
              individual cabinets. It is the
              relationship between the island,
              overheads, appliances, walls,
              walkways, finishes and the wider
              room.
            </p>

            <p className="mt-6 text-xl leading-9 text-black/65">
              Cabinet makers may understand those
              relationships immediately from a
              drawing. Clients often need more
              visual context.
            </p>

            <p className="mt-7 font-display text-3xl leading-10">
              Interactive 360° presentation gives
              them another way to understand
              <span className="text-rust">
                {" "}
                the whole space rather than one
                fixed view.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* FLAT VIEW */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                One image has limits
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A render only shows the angle you
                choose.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-black/60">
              <p>
                A beautifully rendered kitchen can
                still leave questions unanswered.
              </p>

              <p>
                What is behind the viewer? How
                close does the island feel to the
                opposite cabinetry? What happens
                when the client turns towards the
                pantry or dining area?
              </p>

              <p>
                A panorama gives the client control
                over where they look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CLIENT CAN UNDERSTAND */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What becomes easier to understand
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Give the client more spatial context.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7">
              <Move3D
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Scale
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Understand how large cabinetry
                elements feel in relation to the
                room.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7">
              <Eye
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Sightlines
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                See how the kitchen appears when
                looking in different directions.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7">
              <Scan
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Layout
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Better understand the relationship
                between islands, walls, cabinetry
                and surrounding spaces.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7">
              <Smartphone
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Accessibility
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Explore the design on a phone,
                tablet or computer without
                specialist software.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* DECISIONS */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Better design conversations
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Give the client something specific
                to respond to.
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/55">
                Instead of asking, “Can you imagine
                what this will look like?”, you can
                move through the proposed room
                together.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/55">
                The client can point to a finish,
                question a proportion or talk about
                a particular part of the room while
                both of you are looking at the same
                visual reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IPAD */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                In the client meeting
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Put the room in their hands.
              </h2>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-white p-8 md:p-10">
              <Smartphone
                size={30}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-3xl font-semibold">
                Open it on your iPad.
              </h3>

              <p className="mt-5 text-lg leading-8 text-black/55">
                The cabinet maker can sit with the
                client, open the project page and
                let them move around the room
                themselves.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                There is no need for the customer
                to download design software or
                learn a complicated interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOT REPLACEMENT */}
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Part of the presentation
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                The panorama does not replace the
                drawings.
              </h2>

              <p className="mt-7 text-lg leading-8 text-black/55">
                Detailed plans, measurements and
                presentation sheets still have an
                important role.
              </p>

              <p className="mt-5 text-lg leading-8 text-black/55">
                The panorama adds a different type
                of information: an intuitive sense
                of the space and how the design
                comes together around the viewer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFIT */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                For cabinet makers
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Offer the experience without
                becoming a 3D software expert.
              </h2>

              <p className="mt-7 text-lg leading-8 text-black/55">
                You can continue designing from
                sketches, measurements and the
                information you already collect.
              </p>

              <p className="mt-5 text-lg leading-8 text-black/55">
                A backstage presentation partner
                can create the visualisation and
                interactive project for you, while
                you remain the business presenting
                the work to your client.
              </p>

              <Link
                href="/blog/how-to-present-a-kitchen-design-without-sketchup"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Read how to present without SketchUp
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Interactive cabinetry presentation
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Let your client
            <br />
            look around.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us your cabinetry sketch,
            dimensions and project information and
            we&apos;ll quote the visualisation and
            interactive presentation.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Send us your project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}