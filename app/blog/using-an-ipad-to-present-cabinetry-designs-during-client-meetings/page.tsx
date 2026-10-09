import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Eye,
  FileText,
  Scan,
  TabletSmartphone,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Using an iPad to Present Cabinetry Designs During Client Meetings",

  description:
    "How cabinet makers can use an iPad to present cabinetry designs, renders, presentation sheets and interactive 360 degree views during client meetings.",

  alternates: {
    canonical:
      `${SITE_URL}/blog/using-an-ipad-to-present-cabinetry-designs-during-client-meetings`,
  },

  openGraph: {
    title:
      "Using an iPad to Present Cabinetry Designs During Client Meetings",
    description:
      "A simple way for cabinet makers to present kitchens and joinery more professionally without complicated presentation software.",
    url:
      `${SITE_URL}/blog/using-an-ipad-to-present-cabinetry-designs-during-client-meetings`,
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Using an iPad to Present Cabinetry Designs During Client Meetings",
  description:
    "How cabinet makers can use an iPad to present cabinetry designs, renders, presentation sheets and interactive 360 degree views during client meetings.",
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
    `${SITE_URL}/blog/using-an-ipad-to-present-cabinetry-designs-during-client-meetings`,
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
              Client Presentation
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Put the cabinetry design
              <span className="block text-rust">
                in your client&apos;s hands.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              An iPad can turn a design meeting into
              a much more visual conversation,
              without requiring you or your client
              to learn complicated software.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <p className="text-xl leading-9 text-black/65">
              Cabinetry is easier to discuss when
              both people are looking at the same
              thing.
            </p>

            <p className="mt-6 text-xl leading-9 text-black/65">
              Instead of spreading plans,
              screenshots and material samples
              across the table, a private project
              page can bring the visual part of the
              presentation together in one place.
            </p>

            <p className="mt-7 font-display text-3xl leading-10">
              Open the project.
              <span className="text-rust">
                {" "}
                Turn the iPad towards the client.
                Start the conversation.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* WHY IPAD */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Why an iPad works well
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                It keeps the meeting visual without
                making it technical.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-black/60">
              <p>
                The client does not need design
                software installed.
              </p>

              <p>
                You do not need to open a complicated
                modelling program just to show them
                a room.
              </p>

              <p>
                A browser-based presentation can
                simply open like any other website,
                which makes it easy to move between
                images and interactive views while
                you talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO SHOW */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-12 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              What to show
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Give each type of visual a job.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <FileText
                size={26}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Presentation sheets
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Use clear static views when you
                want to focus on one part of the
                cabinetry or compare details.
              </p>
            </article>

            <article className="rounded-[2rem] border border-rust bg-ink p-8 text-white">
              <Scan
                size={26}
                className="text-brassBright"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Interactive 360°
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                Let the client look around the room
                to better understand the whole
                space.
              </p>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8">
              <Eye
                size={26}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Full-screen views
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Zoom into cabinetry details,
                finishes and important design
                features when you need a closer
                look.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MEETING FLOW */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                A simple meeting flow
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Use the presentation to support
                <span className="block text-rust">
                  the conversation you are already having.
                </span>
              </h2>

              <div className="mt-10 space-y-8">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                    01
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Start with the overall room
                  </h3>

                  <p className="mt-3 leading-7 text-white/50">
                    Show the client the general
                    cabinetry direction and layout.
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                    02
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Move into important details
                  </h3>

                  <p className="mt-3 leading-7 text-white/50">
                    Open individual views when you
                    want to discuss the island,
                    pantry, overheads, appliances
                    or other key joinery.
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                    03
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Let the client explore
                  </h3>

                  <p className="mt-3 leading-7 text-white/50">
                    Give them control of the
                    interactive panorama so they
                    can look in the directions that
                    matter to them.
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                    04
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Talk through decisions
                  </h3>

                  <p className="mt-3 leading-7 text-white/50">
                    Use the visual as a common
                    reference point while discussing
                    any changes, questions or
                    selections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOT REPLACE CONVERSATION */}
      <section className="bg-[#f7f5f1] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Keep the meeting human
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The iPad is not the salesperson.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-black/60">
                The presentation should not replace
                your expertise, your explanation or
                your relationship with the client.
              </p>

              <p className="mt-6 text-lg leading-8 text-black/60">
                It should make those conversations
                easier by giving you something
                visual to point to while you
                explain the design.
              </p>

              <p className="mt-7 font-display text-3xl leading-10">
                You lead the meeting.
                <span className="text-rust">
                  {" "}
                  The technology simply helps the
                  client follow.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEAVE WITH ACCESS */}
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                After the meeting
              </p>
            </div>

            <div>
              <TabletSmartphone
                size={32}
                className="text-rust"
              />

              <h2 className="mt-7 font-display text-4xl font-semibold leading-tight md:text-6xl">
                The presentation does not have to
                disappear when the meeting ends.
              </h2>

              <p className="mt-7 text-lg leading-8 text-black/55">
                Where appropriate, the client can
                access their private project again
                later using their project link or
                QR code.
              </p>

              <p className="mt-5 text-lg leading-8 text-black/55">
                That means they can review the
                visual material again without
                relying only on what they remember
                from the meeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONALISM */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Client experience
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Make the presentation feel as
                considered as the cabinetry.
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/55">
                For higher-value projects, clients
                are often paying attention to every
                part of the process.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/55">
                A clear, organised presentation can
                help reinforce the feeling that the
                project is being handled
                professionally.
              </p>

              <Link
                href="/blog/how-to-win-higher-end-cabinetry-projects-when-competitors-have-better-renders"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brassBright"
              >
                Read about presenting premium work
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
            Your next client meeting
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Open the project.
            <br />
            Hand them the iPad.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Send us your cabinetry sketches and
            project information and we&apos;ll
            quote the presentation around the
            views and interactive spaces you need.
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