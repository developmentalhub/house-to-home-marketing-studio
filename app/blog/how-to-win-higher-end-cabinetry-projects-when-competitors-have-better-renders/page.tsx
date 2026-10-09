import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Award,
  Eye,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "How to Win Higher-End Cabinetry Projects When Competitors Have Better Renders",

  description:
    "How cabinet makers can improve client presentation, visualisation and perceived professionalism when competing for higher-value kitchen and joinery projects.",

  alternates: {
    canonical:
      `${SITE_URL}/blog/how-to-win-higher-end-cabinetry-projects-when-competitors-have-better-renders`,
  },

  openGraph: {
    title:
      "How to Win Higher-End Cabinetry Projects When Competitors Have Better Renders",
    description:
      "Why presentation quality can influence how clients perceive the quality and value of a cabinetry business.",
    url:
      `${SITE_URL}/blog/how-to-win-higher-end-cabinetry-projects-when-competitors-have-better-renders`,
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Win Higher-End Cabinetry Projects When Competitors Have Better Renders",
  description:
    "How cabinet makers can improve client presentation, visualisation and perceived professionalism when competing for higher-value kitchen and joinery projects.",
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
    `${SITE_URL}/blog/how-to-win-higher-end-cabinetry-projects-when-competitors-have-better-renders`,
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

      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Higher-Value Cabinetry Projects
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Your competitor&apos;s renders
              <span className="block text-rust">
                should not make your work look less valuable.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              You may build better cabinetry,
              understand the construction better
              and provide a stronger service, but a
              client cannot always see that during
              the quoting stage.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <p className="text-xl leading-9 text-black/65">
              When clients compare cabinet makers,
              they are comparing more than the
              finished product.
            </p>

            <p className="mt-6 text-xl leading-9 text-black/65">
              They are also comparing the
              experience of getting to that finished
              product.
            </p>

            <p className="mt-7 font-display text-3xl leading-10">
              If one business presents a rough
              sketch and another presents a
              polished visual experience,
              <span className="text-rust">
                {" "}
                the client may assume the second
                business is more sophisticated.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Perception matters
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Clients cannot inspect your future
                workmanship during the sales
                meeting.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-black/60">
              <p>
                They cannot yet see the finished
                doors, edging, installation,
                alignment or attention to detail.
              </p>

              <p>
                They are making a decision based on
                the information available to them
                at that moment.
              </p>

              <p>
                Your communication, quote,
                presentation and visual material
                all become signals of what it may
                be like to work with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                It is not about being flashy
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Better presentation is really
                <span className="block text-rust">
                  better communication.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/55">
                A polished render is useful when it
                helps the client understand what
                has been designed.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/55">
                An interactive panorama is useful
                when it helps the client understand
                the room, layout and relationship
                between different cabinetry
                elements.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/55">
                The goal is not to add visual
                effects for the sake of it. The
                goal is to make the proposed work
                easier to understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What a stronger presentation can communicate
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Give the client more reasons to feel
              confident.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <Eye
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Clarity
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                The client can understand what you
                are proposing without relying only
                on imagination.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <ShieldCheck
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Confidence
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                A considered process can make the
                project feel more organised and
                controlled.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <Award
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Professionalism
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                The presentation can better reflect
                the level of workmanship and
                service you want your business to
                represent.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <Layers3
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Detail
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                More complex projects can be
                broken into clear views rather than
                one overloaded drawing.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Compete differently
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                You do not need to become the
                cheapest quote.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-black/60">
              <p>
                Competing for better projects is
                not necessarily about reducing your
                price.
              </p>

              <p>
                It can be about making your value
                easier for the client to recognise.
              </p>

              <p>
                If your process feels thoughtful,
                clear and professional, the client
                has more information to compare
                than simply the number at the
                bottom of the quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                You do not need an internal 3D department
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Add presentation capability
                without changing what your business
                is good at.
              </h2>

              <p className="mt-7 text-lg leading-8 text-black/55">
                Continue measuring, designing,
                quoting, manufacturing and
                installing cabinetry.
              </p>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Use outside visualisation support
                where it gives a project a stronger
                client-facing presentation.
              </p>

              <Link
                href="/blog/how-cabinet-makers-can-look-more-professional-without-hiring-an-in-house-3d-designer"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Read about backstage presentation support
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Present the value
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                If you build premium work,
                <span className="block text-rust">
                  present it like premium work.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/55">
                Your presentation does not need to
                be the most complicated in the
                industry.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/55">
                It needs to help the client
                understand the design, feel
                confident in your process and see
                why your business deserves serious
                consideration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Competing for a larger project?
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Make the presentation
            <br />
            match the workmanship.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us your cabinetry concept and
            we&apos;ll quote the visualisation and
            client presentation around the project
            you are trying to win.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Send us the project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}