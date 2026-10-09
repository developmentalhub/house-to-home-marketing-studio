import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Check,
  Layers3,
  PencilRuler,
  Users,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "How Cabinet Makers Can Look More Professional Without Hiring a 3D Designer",

  description:
    "How cabinet makers can offer polished 3D visualisation and interactive client presentations without hiring an in-house designer or learning complex software.",

  alternates: {
    canonical:
      `${SITE_URL}/blog/how-cabinet-makers-can-look-more-professional-without-hiring-an-in-house-3d-designer`,
  },

  openGraph: {
    title:
      "How Cabinet Makers Can Look More Professional Without Hiring an In-House 3D Designer",
    description:
      "Use a backstage presentation partner to create polished cabinetry visuals without building an internal rendering department.",
    url:
      `${SITE_URL}/blog/how-cabinet-makers-can-look-more-professional-without-hiring-an-in-house-3d-designer`,
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How Cabinet Makers Can Look More Professional Without Hiring an In-House 3D Designer",
  description:
    "How cabinet makers can offer polished 3D visualisation and interactive client presentations without hiring an in-house designer.",
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
    `${SITE_URL}/blog/how-cabinet-makers-can-look-more-professional-without-hiring-an-in-house-3d-designer`,
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
              Cabinet Making Business
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Look more professional
              <span className="block text-rust">
                without hiring an in-house 3D designer.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              You can give clients polished
              visualisations and interactive
              presentations without adding another
              full-time role to your business.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <p className="text-xl leading-9 text-black/65">
              Many cabinet making businesses are
              excellent at design, construction and
              installation but do not have an
              internal 3D rendering team.
            </p>

            <p className="mt-6 text-xl leading-9 text-black/65">
              That can become a disadvantage when
              clients compare your hand-drawn
              presentation with a competitor&apos;s
              polished 3D visuals.
            </p>

            <p className="mt-7 font-display text-3xl leading-10">
              You do not necessarily need to hire
              another employee.
              <span className="text-rust">
                {" "}
                You can add the capability without
                adding the department.
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
                Keep your team focused
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Your time is better spent on
                cabinetry.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Meeting clients",
                "Measuring spaces",
                "Designing cabinetry",
                "Quoting projects",
                "Ordering materials",
                "Managing manufacture",
                "Installing joinery",
                "Running the business",
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

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Backstage support
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Add us to the team
                <span className="block text-rust">
                  without putting us in front of the client.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/55">
                You remain the expert your client
                sees. You own the relationship,
                design conversation and final
                project.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/55">
                We work behind the scenes turning
                your sketches, measurements and
                ideas into the polished material
                you present.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              A simple division of roles
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              You bring the trade knowledge.
              <span className="block text-rust">
                We bring the presentation capability.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <PencilRuler
                size={25}
                className="text-rust"
              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Your role
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">
                Design
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Create the cabinetry solution using
                your existing design process.
              </p>
            </article>

            <article className="rounded-[2rem] border border-rust bg-ink p-8 text-white">
              <Layers3
                size={25}
                className="text-brassBright"
              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Our role
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">
                Present
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                Turn the concept into professional
                images, presentation sheets and an
                interactive project experience.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <Users
                size={25}
                className="text-rust"
              />

              <p className="mt-7 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Client experience
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">
                You lead
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Present the project directly to the
                client as part of your own service.
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
                Scale when you need it
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Use the support when the project
                needs it.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-black/60">
              <p>
                One week it may be a single kitchen.
                Another project may include a
                kitchen, laundry, bathrooms, robes
                and entertainment cabinetry.
              </p>

              <p>
                Using external presentation support
                means you can scale the visual work
                around the project rather than
                carrying the fixed cost of an
                internal rendering role.
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
                What the client sees
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                A polished presentation from your
                business.
              </h2>

              <p className="mt-7 text-lg leading-8 text-black/55">
                The client does not need to know
                which software was used or who
                created the visual material.
              </p>

              <p className="mt-5 text-lg leading-8 text-black/55">
                They simply experience a more
                professional design process from
                the cabinet maker they are
                considering hiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Your backstage presentation partner
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Keep your team lean.
            <br />
            Make the presentation look big.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us your next cabinetry concept
            and we&apos;ll quote the visualisation
            and client presentation.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Send us a project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}