import type { Metadata } from "next";

import Link from "next/link";

import {

  ArrowRight,

  Check,

  Layers3,

  Palette,

  Scan,

} from "lucide-react";

import { SITE_URL } from "@/lib/site";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {

  title:

    "How to Help Clients Visualise Cabinetry, Finishes & Materials",

  description:

    "Practical ways cabinet makers and interior designers can help clients understand cabinetry colours, benchtops, finishes and materials before manufacture begins.",

  alternates: {

    canonical:

      `${SITE_URL}/blog/how-to-help-clients-visualise-cabinetry-finishes-and-materials`,

  },

  openGraph: {

    title:

      "How to Help Clients Visualise Cabinetry, Finishes and Materials Before They Commit",

    description:

      "Help cabinetry clients understand finishes, colours and materials before manufacture begins.",

    url:

      `${SITE_URL}/blog/how-to-help-clients-visualise-cabinetry-finishes-and-materials`,

    type: "article",

  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPost() {

  return (

    <main className="bg-[#f7f5f1] text-ink">
      <ArticleSchema
        title="How to Help Clients Visualise Cabinetry, Finishes & Materials"
        description="Practical ways cabinet makers and interior designers can help clients understand cabinetry colours, benchtops, finishes and materials before manufacture begins."
        url={`${SITE_URL}/blog/how-to-help-clients-visualise-cabinetry-finishes-and-materials`}
      />

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: SITE_URL,
          },
          {
            name: "Insights",
            url: `${SITE_URL}/blog`,
          },
          {
            name: "How to Help Clients Visualise Cabinetry, Finishes & Materials",
            url: `${SITE_URL}/blog/how-to-help-clients-visualise-cabinetry-finishes-and-materials`,
          },
        ]}
      />

      <div className="border-b border-black/10 bg-white">
        <div className="container-shell py-4">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-black/45"
          >
            <Link
              href="/"
              className="transition hover:text-rust"
            >
              Home
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              href="/blog"
              className="transition hover:text-rust"
            >
              Insights
            </Link>

            <span aria-hidden="true">/</span>

            <span className="text-black/65">
              Visualising finishes and materials
            </span>
          </nav>
        </div>
      </div>

      <section className="bg-ink text-white">

        <div className="container-shell py-20 md:py-28">

          <div className="max-w-5xl">

            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">

              Interior Design & Cabinetry

            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">

              Help clients visualise

              <span className="block text-rust">

                finishes before they commit.

              </span>

            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">

              A sample chip can show colour. A

              visual presentation can help the

              client understand what that colour

              may feel like across an entire

              kitchen, robe or joinery wall.

            </p>

          </div>

        </div>

      </section>

      <section className="bg-white py-20 md:py-28">

        <div className="container-shell">

          <div className="mx-auto max-w-4xl">

            <p className="text-xl leading-9 text-black/65">

              Choosing finishes is one of the most

              important parts of a cabinetry

              project, but it can also be one of

              the hardest decisions for clients.

            </p>

            <p className="mt-6 text-xl leading-9 text-black/65">

              They may like a door sample, a

              benchtop sample and a timber tone

              individually without knowing how they

              will work together in the finished

              room.

            </p>

            <p className="mt-7 font-display text-3xl leading-10">

              The question is not only,

              “Do you like this colour?”

              <span className="text-rust">

                {" "}

                It is, “Do you like this colour

                across this whole design?”

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

                Samples have limits

              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">

                A small sample does not show the

                visual weight of a full room.

              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-black/60">

              <p>

                A dark finish on a small sample may

                feel elegant. Across an entire wall

                of cabinetry it may feel much

                stronger.

              </p>

              <p>

                A timber grain may look subtle in

                isolation but become a major visual

                feature when used across an island

                or full-height cabinetry.

              </p>

              <p>

                A rendered room can help the client

                understand these decisions at a

                more realistic scale.

              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-white py-20 md:py-28">

        <div className="container-shell">

          <div className="mb-12 max-w-4xl">

            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">

              What to visualise together

            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">

              Help the client see the combination.

            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {[

              "Cabinet door colours",

              "Timber finishes",

              "Benchtop materials",

              "Splashbacks",

              "Handles and hardware",

              "Flooring",

              "Wall colours",

              "Appliances",

              "Feature panels",

              "Open shelving",

            ].map((item) => (

              <div

                key={item}

                className="flex items-start gap-4 rounded-2xl border border-black/10 bg-[#f7f5f1] p-5"

              >

                <Check

                  size={18}

                  className="mt-1 shrink-0 text-rust"

                />

                <p className="font-semibold leading-7">

                  {item}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="bg-ink py-20 text-white md:py-28">

        <div className="container-shell">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">

                Show the relationship

              </p>

            </div>

            <div>

              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">

                Materials do not exist

                <span className="block text-rust">

                  in isolation.

                </span>

              </h2>

              <p className="mt-7 text-lg leading-8 text-white/55">

                Cabinetry sits beside floors,

                walls, windows, furniture,

                appliances and lighting.

              </p>

              <p className="mt-5 text-lg leading-8 text-white/55">

                Showing those elements together can

                make it much easier to discuss

                balance, contrast and whether a

                material choice is doing what the

                client expected.

              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-[#f7f5f1] py-20 md:py-28">

        <div className="container-shell">

          <div className="grid gap-5 md:grid-cols-3">

            <article className="rounded-[2rem] border border-black/10 bg-white p-8">

              <Palette

                size={25}

                className="text-rust"

              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">

                Step 01

              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">

                Select

              </h3>

              <p className="mt-4 leading-7 text-black/50">

                Gather the materials, product

                references and colour selections

                already being considered.

              </p>

            </article>

            <article className="rounded-[2rem] border border-rust bg-ink p-8 text-white">

              <Layers3

                size={25}

                className="text-brassBright"

              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">

                Step 02

              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">

                Combine

              </h3>

              <p className="mt-4 leading-7 text-white/50">

                Place those selections into the

                proposed cabinetry and surrounding

                room.

              </p>

            </article>

            <article className="rounded-[2rem] border border-black/10 bg-white p-8">

              <Scan

                size={25}

                className="text-rust"

              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">

                Step 03

              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">

                Explore

              </h3>

              <p className="mt-4 leading-7 text-black/50">

                Review still views and an

                interactive panorama to understand

                the design from different angles.

              </p>

            </article>

          </div>

        </div>

      </section>

      <section className="border-y border-black/10 bg-white py-20 md:py-28">

        <div className="container-shell">

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

            <div>

              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">

                Important limitation

              </p>

            </div>

            <div className="max-w-4xl">

              <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">

                A render is a visual guide, not a

                physical material sample.

              </h2>

              <p className="mt-7 text-lg leading-8 text-black/55">

                Screen settings, lighting and

                digital reproduction can change how

                colours and materials appear.

              </p>

              <p className="mt-5 text-lg leading-8 text-black/55">

                Clients should still review real

                product samples and supplier

                information before final selections

                are approved.

              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-[#f7f5f1] py-20 md:py-28">

        <div className="container-shell">

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

            <div>

              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">

                Better client conversations

              </p>

            </div>

            <div>

              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">

                Move beyond individual samples.

              </h2>

              <p className="mt-7 text-lg leading-8 text-black/55">

                When the client can see several

                selections working together, the

                conversation becomes more specific.

              </p>

              <p className="mt-5 text-lg leading-8 text-black/55">

                Instead of discussing each finish

                separately, you can talk about the

                overall room and whether the

                combination matches the direction

                they want.

              </p>

              <Link

                href="/blog/how-interactive-360-presentations-help-clients-understand-a-kitchen-design"

                className="mt-8 inline-flex items-center gap-2 font-semibold text-rust"

              >

                Learn about 360° presentation

                <ArrowRight size={17} />

              </Link>

            </div>

          </div>

        </div>

      </section>

      <section className="border-t border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 md:p-10">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
              Continue exploring
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
              More cabinetry presentation insights
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-black/55">
              Explore more ways to help clients understand the design, materials and space before cabinetry goes into manufacture.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/blog/how-interactive-360-presentations-help-clients-understand-a-kitchen-design"
                className="inline-flex items-center gap-2 font-semibold text-rust"
              >
                How 360° presentations help clients
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/blog/from-pencil-sketch-to-interactive-kitchen-presentation"
                className="inline-flex items-center gap-2 font-semibold text-rust"
              >
                From pencil sketch to interactive presentation
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-semibold text-rust"
              >
                Browse all insights
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rust px-6 py-20 text-white md:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">

            Present the whole design

          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">

            Show the materials

            <br />

            in the room.

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">

            Send us your design, material

            selections and project information and

            we&apos;ll quote the visualisation and

            client presentation.

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