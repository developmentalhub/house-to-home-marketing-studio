import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Check,
  FileImage,
  MonitorSmartphone,
  PencilRuler,
  Printer,
  QrCode,
  Scan,
  ShieldCheck,
  Sparkles,
  TabletSmartphone,
} from "lucide-react";

import HomePanorama from "@/components/HomePanorama";

export const metadata: Metadata = {
  title:
    "Interactive Cabinetry Presentations for Cabinet Makers | Real Estate Media House",

  description:
    "Turn cabinet making sketches into professional interactive client presentations with 360 degree panoramas, high-resolution presentation sheets and private project pages. No SketchUp skills required.",

  keywords: [
    "cabinet maker visualisation",
    "cabinet maker 3D rendering",
    "kitchen visualisation",
    "interactive kitchen design",
    "cabinetry presentation",
    "joinery visualisation",
    "360 kitchen design",
    "kitchen rendering service",
    "cabinet maker design presentation",
    "bathroom cabinetry visualisation",
    "laundry cabinetry design",
    "walk in robe visualisation",
    "custom joinery rendering",
    "cabinet maker SketchUp alternative",
  ],

  alternates: {
    canonical:
      "https://www.realestatemediahouse.net",
  },

  openGraph: {
    title:
      "Interactive Cabinetry Presentations for Cabinet Makers",
    description:
      "From hand-drawn cabinetry concepts to interactive 360 degree client presentations.",
    url:
      "https://www.realestatemediahouse.net",
    type: "website",
  },
};

const projectTypes = [
  "Kitchens",
  "Bathrooms",
  "Laundries",
  "Walk-in robes",
  "TV & entertainment cabinetry",
  "Home offices",
  "Custom joinery",
  "Whole-house cabinetry",
];

const process = [
  {
    number: "01",
    title: "You design it",
    text: "Keep working the way you already do. Sketch the cabinetry, take measurements, make notes and choose finishes.",
  },
  {
    number: "02",
    title: "Send it backstage",
    text: "Send us the sketch, dimensions, plans, inspiration images and project information. You do not need to prepare a 3D model.",
  },
  {
    number: "03",
    title: "We build the presentation",
    text: "We turn your concept into polished visualisations, presentation sheets and an interactive 360° client experience.",
  },
  {
    number: "04",
    title: "You present it",
    text: "Open the project on your iPad, send your customer their private link or QR code, or print the presentation sheets yourself.",
  },
];

const benefits = [
  "No SketchUp skills required",
  "No rendering software to learn",
  "Start with your hand-drawn sketch",
  "Single room or full-house projects",
  "Interactive 360° panorama",
  "Private customer presentation page",
  "High-resolution presentation sheets",
  "Easy to present from an iPad",
  "Printable design sheets",
  "QR code access",
];

export default function HomePage() {
  return (
    <main className="bg-[#f4f1eb] text-[#181818]">
      {/* HERO */}
      <section className="overflow-hidden bg-[#171717] text-white">
        <div className="container-shell py-14 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Backstage presentation support
                for cabinet makers
              </p>

              <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[5.2rem]">
                You sketch it.
                <span className="block text-rust">
                  Your client steps inside it.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-white/70">
                We turn your cabinetry concepts
                into interactive 360° presentations
                that make your business look
                impressive in front of your
                customers.
              </p>

              <p className="mt-5 max-w-2xl leading-8 text-white/45">
                You stay the expert. We stay
                backstage and take care of the 3D
                visualisation and presentation
                technology.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-[#181818] transition hover:bg-rust hover:text-white"
                >
                  Send us a sketch
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-white/60"
                >
                  How it works
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">
                <span>Hand sketches welcome</span>
                <span>No SketchUp required</span>
                <span>iPad ready</span>
              </div>
            </div>

            {/* REAL INTERACTIVE PANORAMA */}
            <HomePanorama />
          </div>
        </div>
      </section>

      {/* CORE POSITION */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Your skills are in cabinetry
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                You shouldn&apos;t have to
                become a software expert too.
              </h2>
            </div>

            <div className="max-w-4xl">
              <p className="text-xl leading-9 text-black/60">
                You can look at a hand-drawn
                kitchen concept and understand
                exactly how it will come together.
                Your customer often can&apos;t.
              </p>

              <p className="mt-6 text-xl leading-9 text-black/60">
                And when they are considering a
                high-value kitchen or whole-house
                cabinetry project, they increasingly
                expect more than a sketch before
                making the decision.
              </p>

              <p className="mt-7 font-display text-3xl leading-10">
                We bridge that gap.
                <span className="text-rust">
                  {" "}
                  You bring the cabinetry
                  knowledge. We help your customer
                  see what you can already see.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BACKSTAGE PARTNER */}
      <section className="border-y border-black/10 bg-[#f4f1eb] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="rounded-[2rem] bg-[#171717] p-8 text-white md:p-12">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brassBright">
                We stay backstage
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Your customer sees your design
                and your expertise.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/55">
                We become the presentation arm of
                your team without needing to become
                the face of the project.
              </p>

              <p className="mt-5 leading-8 text-white/45">
                You can sit beside the customer,
                open their design on your iPad and
                walk them through a polished
                presentation as part of your own
                service.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Look more capable without adding
                an internal design department
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Your craftsmanship may already be
                premium.
                <span className="block text-rust">
                  Now the presentation can feel
                  premium too.
                </span>
              </h2>

              <div className="mt-8 space-y-5">
                {[
                  "You keep the customer relationship.",
                  "Your cabinetry concept stays at the centre.",
                  "We handle the technical presentation work.",
                  "You decide how and when you show it to the client.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <Check
                      size={18}
                      className="mt-1 shrink-0 text-rust"
                    />

                    <p className="leading-7 text-black/60">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 360 FEATURE */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              The heart of the presentation
            </p>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Stop asking your customer to
              imagine the room.
              <span className="block text-rust">
                Let them look around it.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
              The interactive panorama gives your
              customer a much clearer sense of the
              proposed kitchen, bathroom, laundry,
              robe or joinery design than a flat
              sketch alone.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            <article className="rounded-[1.75rem] border border-rust bg-[#171717] p-8 text-white lg:col-span-2">
              <Scan
                size={27}
                className="text-brassBright"
              />

              <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.16em] text-brassBright">
                Interactive 360°
              </p>

              <h3 className="mt-3 font-display text-3xl font-semibold">
                Explore the proposed room.
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-white/50">
                Drag around the space on phone,
                tablet or computer and understand
                how the cabinetry feels in the
                room.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-[#f4f1eb] p-7">
              <TabletSmartphone
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Present on iPad
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Open the customer&apos;s project
                during your meeting with no
                specialist software required.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-[#f4f1eb] p-7">
              <FileImage
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Detailed sheets
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Customers can open large
                presentation images and inspect
                cabinetry details clearly.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-[#f4f1eb] p-7">
              <Printer
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Print it yourself
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Use the presentation digitally or
                print the finished sheets when
                that suits your customer.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-[#f4f1eb] p-7">
              <QrCode
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                QR access
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Give the client a QR code that
                opens their project from their
                phone.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-[#f4f1eb] p-7 lg:col-span-2">
              <ShieldCheck
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Private customer projects
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-black/50">
                Individual customer presentations
                can sit behind their own access
                codes rather than being publicly
                visible.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SKETCH */}
      <section className="bg-[#171717] py-20 text-white md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Low tech is fine
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with a hand-drawn sketch.
              </h2>

              <p className="mt-6 leading-8 text-white/50">
                You don&apos;t have to learn
                SketchUp before you can offer your
                customers a modern presentation.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
                <PencilRuler
                  size={25}
                  className="text-brassBright"
                />

                <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                  From you
                </p>

                <h3 className="mt-3 font-display text-2xl font-semibold">
                  Sketches
                </h3>

                <p className="mt-4 leading-7 text-white/45">
                  Hand drawings, measurements,
                  notes, plans, finish selections
                  and reference images.
                </p>
              </article>

              <article className="rounded-[1.75rem] border border-rust bg-white/[0.06] p-7">
                <Sparkles
                  size={25}
                  className="text-brassBright"
                />

                <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                  From us
                </p>

                <h3 className="mt-3 font-display text-2xl font-semibold">
                  Visualisation
                </h3>

                <p className="mt-4 leading-7 text-white/45">
                  We turn your concept into the
                  polished visual experience your
                  customer sees.
                </p>
              </article>

              <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
                <MonitorSmartphone
                  size={25}
                  className="text-brassBright"
                />

                <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                  To your client
                </p>

                <h3 className="mt-3 font-display text-2xl font-semibold">
                  Presentation
                </h3>

                <p className="mt-4 leading-7 text-white/45">
                  You present the finished concept
                  as part of your own professional
                  service.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT TYPES */}
      <section className="bg-[#f4f1eb] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                One room or the whole house
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Wherever your cabinetry goes.
              </h2>

              <p className="mt-6 leading-8 text-black/50">
                Use us for one important kitchen
                presentation or bring the entire
                cabinetry package together for a
                larger home.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {projectTypes.map(
                (type, index) => (
                  <div
                    key={type}
                    className="flex items-center gap-5 rounded-2xl border border-black/10 bg-white p-5"
                  >
                    <span className="font-mono text-[9px] font-semibold text-rust">
                      {String(
                        index + 1,
                      ).padStart(2, "0")}
                    </span>

                    <p className="font-display text-xl font-semibold">
                      {type}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section
        id="how-it-works"
        className="border-y border-black/10 bg-white py-20 md:py-28"
      >
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How it works
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                You keep designing and building.
                <span className="block text-rust">
                  We handle the presentation.
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 rounded-[1.75rem] border border-black/10 bg-[#f4f1eb] p-7 sm:grid-cols-[70px_1fr] md:p-8"
                >
                  <p className="font-mono text-sm font-semibold text-rust">
                    {step.number}
                  </p>

                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-black/50">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#f4f1eb] py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Simple for your business
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                You don&apos;t need more
                technology.
              </h2>

              <p className="mt-6 font-display text-2xl text-rust">
                You need someone who can handle it
                for you.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-5"
                >
                  <Check
                    size={18}
                    className="mt-1 shrink-0 text-rust"
                  />

                  <p className="font-semibold leading-7">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="border-y border-black/10 bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Cabinet maker resources
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
                Better ways to present cabinetry
                and help clients say yes.
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                Our resource library is moving
                toward cabinetry visualisation,
                client presentations, design
                communication and helping cabinet
                makers compete for better projects.
              </p>

              <Link
                href="/blog"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore the resources
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
            Your backstage presentation partner
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Send us the sketch.
            <br />
            You present the vision.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Start with your next kitchen,
            bathroom, laundry, walk-in robe or
            custom cabinetry project.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-[#181818] transition hover:bg-[#171717] hover:text-white"
          >
            Send us your next project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}