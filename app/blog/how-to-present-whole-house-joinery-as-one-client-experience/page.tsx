import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Check,
  House,
  Layers3,
  Scan,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "How to Present Whole-House Joinery as One Client Experience",

  description:
    "How cabinet makers can present kitchens, laundries, bathrooms, robes and custom joinery as one cohesive client presentation.",

  alternates: {
    canonical:
      `${SITE_URL}/blog/how-to-present-whole-house-joinery-as-one-client-experience`,
  },

  openGraph: {
    title:
      "How to Present Whole-House Joinery as One Cohesive Client Experience",
    description:
      "Bring kitchens, laundries, bathrooms, robes and custom cabinetry together in one professional client presentation.",
    url:
      `${SITE_URL}/blog/how-to-present-whole-house-joinery-as-one-client-experience`,
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Present Whole-House Joinery as One Cohesive Client Experience",
  description:
    "How cabinet makers can present kitchens, laundries, bathrooms, robes and custom joinery as one cohesive client presentation.",
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
    `${SITE_URL}/blog/how-to-present-whole-house-joinery-as-one-client-experience`,
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
              Whole-House Joinery
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Present the whole house
              <span className="block text-rust">
                as one design story.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              When a project includes a kitchen,
              laundry, robes, bathroom cabinetry,
              home office and living-room joinery,
              the presentation should feel as
              considered as the cabinetry itself.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <p className="text-xl leading-9 text-black/65">
              Whole-house joinery projects are
              larger, more complex and often more
              valuable than a single-room job.
            </p>

            <p className="mt-6 text-xl leading-9 text-black/65">
              They can also become harder for the
              client to keep track of when each
              room is presented separately through
              sketches, screenshots, samples and
              disconnected documents.
            </p>

            <p className="mt-7 font-display text-3xl leading-10">
              A better approach is to make the
              entire project feel like
              <span className="text-rust">
                {" "}
                one connected presentation.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                One project, many spaces
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Bring every joinery zone together.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Kitchen cabinetry",
                "Butler's pantry",
                "Laundry joinery",
                "Bathroom vanities",
                "Walk-in robes",
                "Bedroom wardrobes",
                "Home office cabinetry",
                "TV and entertainment units",
                "Entry joinery",
                "Custom storage",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-5"
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
        </div>
      </section>

      {/* WHY */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                A stronger client experience
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Make it easier to understand
                <span className="block text-rust">
                  how the home works as a whole.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/55">
                The client may make decisions about
                colours, handles, timber tones and
                profiles across several rooms.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/55">
                Presenting those spaces together
                can help them see where finishes
                repeat, where rooms intentionally
                differ and how the overall interior
                direction stays connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              The presentation structure
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              One private project.
              <span className="block text-rust">
                Multiple rooms inside it.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <House
                size={25}
                className="text-rust"
              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Project
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">
                One client page
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Keep the project together rather
                than sending a collection of
                unrelated files.
              </p>
            </article>

            <article className="rounded-[2rem] border border-rust bg-ink p-8 text-white">
              <Layers3
                size={25}
                className="text-brassBright"
              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Rooms
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">
                Multiple design views
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                Present each cabinetry space with
                its own useful images and
                presentation sheets.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <Scan
                size={25}
                className="text-rust"
              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Experience
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">
                Interactive spaces
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Add interactive 360° views where
                they are most useful for
                understanding a room.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PREMIUM */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Larger projects
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The presentation should match the
                scale of the opportunity.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-black/60">
              <p>
                A whole-house cabinetry project can
                represent a significant investment
                for the client and a significant
                contract for the cabinet maker.
              </p>

              <p>
                Presenting the work clearly can
                help the project feel organised,
                considered and premium before
                manufacture has even started.
              </p>

              <p>
                It also gives the client one place
                to return to when they want to
                review what has been proposed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSISTENCY */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Design consistency
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Help clients see what repeats
                throughout the home.
              </h2>

              <p className="mt-7 text-lg leading-8 text-black/55">
                The same door profile may appear
                in the kitchen and laundry. A
                timber tone may continue into the
                entertainment unit. Handles may
                remain consistent across several
                rooms.
              </p>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Visualising these spaces together
                can make those relationships much
                easier for a client to understand.
              </p>

              <Link
                href="/blog/how-to-help-clients-visualise-cabinetry-finishes-and-materials"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Read about presenting finishes
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BACKSTAGE */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Backstage presentation support
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                You can offer the bigger
                presentation without building a
                bigger internal team.
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/55">
                You remain responsible for the
                cabinetry design and the client
                relationship.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/55">
                The visual presentation can be
                created behind the scenes around
                the number of rooms, images and
                interactive spaces the project
                actually needs.
              </p>

              <Link
                href="/blog/how-cabinet-makers-can-look-more-professional-without-hiring-an-in-house-3d-designer"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brassBright"
              >
                Read about backstage support
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
            Whole-house joinery
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            One project.
            <br />
            One client experience.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us the sketches and project
            information for the rooms you are
            designing and we&apos;ll quote the
            presentation around the number of
            joinery views and interactive spaces
            required.
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