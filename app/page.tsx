import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Check,
  ExternalLink,
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
    "Interactive Cabinetry & Joinery Presentations | Real Estate Media House",

  description:
    "Interactive 360 degree visualisation and presentation support for cabinet makers, joiners, shop fitters and carpentry businesses across residential, commercial, hospitality and retail projects.",

  keywords: [
    "cabinet maker visualisation",
    "joinery visualisation",
    "commercial joinery visualisation",
    "hospitality joinery",
    "retail fitout visualisation",
    "shop fitout visualisation",
    "kitchen visualisation",
    "interactive cabinetry presentation",
    "360 joinery presentation",
    "carpentry visualisation",
  ],

  alternates: {
    canonical:
      "https://www.realestatemediahouse.net",
  },

  openGraph: {
    title:
      "Interactive Cabinetry & Joinery Presentations",

    description:
      "From residential cabinetry to commercial, hospitality and retail fitouts, turn your concepts into interactive 360 degree client presentations.",

    url:
      "https://www.realestatemediahouse.net",

    type: "website",
  },
};

const SUPABASE_PUBLIC_URL =
  "https://icnplmgegficqmmsoqxt.supabase.co/storage/v1/object/public/website-images";

const kitchenPanorama =
  `${SUPABASE_PUBLIC_URL}/preview/kitchen/updated-kitchen-panorama-image.png`;

const hospitalityPanorama =
  `${SUPABASE_PUBLIC_URL}/preview/hospitality/hospitality-panorama-image.png`;

const projectTypes = [
  "Kitchens",
  "Bathrooms",
  "Laundries",
  "Walk-in robes",
  "Commercial joinery",
  "Hospitality fitouts",
  "Retail fitouts",
  "Shop fitouts",
  "Custom joinery",
  "Carpentry projects",
];

const process = [
  {
    number: "01",
    title: "You design it",
    text: "Sketch the cabinetry or fitout, take measurements, make notes and select finishes using the process that already works for your business.",
  },
  {
    number: "02",
    title: "Send it backstage",
    text: "Send us the sketches, dimensions, plans, inspiration images and project information. You do not need to prepare a 3D model.",
  },
  {
    number: "03",
    title: "We build the presentation",
    text: "We turn the concept into polished visualisations, detailed presentation images and an interactive 360° experience.",
  },
  {
    number: "04",
    title: "You present it",
    text: "Share the finished project with your customer using their project page, QR code or printable presentation material.",
  },
];

const benefits = [
  "No SketchUp skills required",
  "No rendering software to learn",
  "Start with your existing sketches",
  "Residential or commercial projects",
  "Interactive 360° panoramas",
  "Private customer presentation pages",
  "Detailed presentation images",
  "Printable design sheets",
  "QR code access",
  "Single space or larger fitout",
];

export default function HomePage() {
  return (
    <main className="bg-[#f4f1eb] text-[#181818]">
      {/* RP IMAGES BRAND BANNER */}
      <a
        href="https://www.rpimages.com.au"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-b border-white/10 bg-rust text-white transition hover:bg-[#171717]"
      >
        <div className="container-shell flex flex-col items-center justify-center gap-1 py-3 text-center sm:flex-row sm:gap-2">
          <span className="text-[11px] leading-5 md:text-xs">
            <strong>
              Real Estate Media House
            </strong>{" "}
            is the cabinetry, joinery and fitout
            specialist brand from{" "}
            <strong>RP Images</strong>.
          </span>

          <span className="inline-flex items-center gap-1 text-[11px] font-semibold underline underline-offset-4 md:text-xs">
            Explore RP Images
            <ExternalLink size={12} />
          </span>
        </div>
      </a>

      {/* HERO */}
      <section className="overflow-hidden bg-[#171717] text-white">
        <div className="container-shell py-14 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                The cabinetry, joinery & fitout
                specialist brand from RP Images
              </p>

              <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[5.2rem]">
                You sketch it.
                <span className="block text-rust">
                  Your client steps inside it.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-white/70">
                We bring the visualisation experience
                behind RP Images into cabinetry,
                joinery and fitout projects, turning
                your concepts into interactive 360°
                presentations your clients can
                explore before anything is built.
              </p>

              <p className="mt-5 max-w-2xl leading-8 text-white/45">
                Residential, commercial,
                hospitality, retail, shop fitout
                and custom carpentry projects.
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
                  href="/preview"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-white/60"
                >
                  View project previews
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">
                <span>Hand sketches welcome</span>
                <span>No SketchUp required</span>
                <span>Residential + commercial</span>
              </div>
            </div>

            <HomePanorama
              panoramaUrl={kitchenPanorama}
              label="Interactive residential example"
              loadingText="Loading interactive kitchen"
              helperText="Click and drag to explore the kitchen."
            />
          </div>
        </div>
      </section>

      {/* PROJECT RANGE */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Residential to commercial
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              From kitchens to hospitality,
              retail and commercial fitouts.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              Explore the spaces below. Both are
              live interactive 360° presentations,
              not static renders.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-rust">
                  Residential
                </p>

                <h3 className="mt-2 font-display text-3xl font-semibold">
                  Kitchens, robes, bathrooms
                  and whole-house cabinetry
                </h3>
              </div>

              <HomePanorama
                panoramaUrl={kitchenPanorama}
                label="Interactive residential panorama"
                loadingText="Loading residential panorama"
                heightClassName="h-[360px] w-full md:h-[440px]"
                helperText="Drag to look around the residential space."
              />
            </div>

            <div>
              <div className="mb-4">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-rust">
                  Commercial
                </p>

                <h3 className="mt-2 font-display text-3xl font-semibold">
                  Hospitality, retail, shop
                  fitout and custom joinery
                </h3>
              </div>

              <HomePanorama
                panoramaUrl={hospitalityPanorama}
                label="Interactive hospitality panorama"
                loadingText="Loading hospitality panorama"
                heightClassName="h-[360px] w-full md:h-[440px]"
                helperText="Drag to explore the commercial hospitality space."
              />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Residential",
              "Commercial",
              "Hospitality",
              "Retail",
              "Shop fitout",
              "Joinery",
              "Cabinetry",
              "Carpentry",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-[#f4f1eb] px-4 py-2 text-sm font-semibold text-black/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RP IMAGES RELATIONSHIP */}
      <section className="border-y border-black/10 bg-[#f4f1eb] py-16 md:py-22">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                One visualisation team
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Two specialist brands.
                <span className="block text-rust">
                  One project journey.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-black/60">
                Real Estate Media House grew from
                RP Images to give cabinetry, joinery
                and fitout businesses their own
                specialist visualisation and client
                presentation service.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <a
                  href="https://www.rpimages.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[1.75rem] border border-black/10 bg-white p-7 transition hover:border-rust"
                >
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-rust">
                    RP Images
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-semibold">
                    Property & development
                  </h3>

                  <p className="mt-4 leading-7 text-black/50">
                    Architectural visualisation for
                    property developers, building
                    designers and real estate projects.
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rust">
                    Visit RP Images
                    <ExternalLink size={15} />
                  </span>
                </a>

                <div className="rounded-[1.75rem] border border-rust bg-[#171717] p-7 text-white">
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-brassBright">
                    Real Estate Media House
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-semibold">
                    Cabinetry, joinery & fitout
                  </h3>

                  <p className="mt-4 leading-7 text-white/50">
                    Interactive visualisation and
                    presentation support for cabinet
                    makers, joiners, shop fitters,
                    hospitality, retail and custom
                    carpentry projects.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-l-2 border-rust pl-6">
                <p className="font-display text-2xl leading-9">
                  When a project moves from property
                  development through to detailed
                  custom interiors, we can help you
                  visualise the whole journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE POSITION */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Your skills are in making
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                You shouldn&apos;t have to
                become a software expert too.
              </h2>
            </div>

            <div className="max-w-4xl">
              <p className="text-xl leading-9 text-black/60">
                You can look at a drawing or
                cabinetry concept and understand
                exactly how it will come together.
                Your customer often can&apos;t.
              </p>

              <p className="mt-6 text-xl leading-9 text-black/60">
                Whether it is a kitchen,
                restaurant, retail space or custom
                fitout, the right visual presentation
                makes the finished concept easier
                to understand.
              </p>

              <p className="mt-7 font-display text-3xl leading-10">
                We bridge that gap.
                <span className="text-rust">
                  {" "}
                  You bring the trade knowledge.
                  We help your customer see what
                  you can already see.
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
                We become the presentation arm
                of your team without becoming
                the face of the project.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Premium work deserves a premium
                presentation
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Your craftsmanship may already
                be premium.
                <span className="block text-rust">
                  Now the presentation can feel
                  premium too.
                </span>
              </h2>

              <div className="mt-8 space-y-5">
                {[
                  "You keep the customer relationship.",
                  "Your design stays at the centre.",
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
      <section
        id="interactive-presentation"
        className="bg-white py-20 md:py-28"
      >
        <div className="container-shell">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              The heart of the presentation
            </p>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Stop asking your customer to
              imagine the space.
              <span className="block text-rust">
                Let them look around it.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">
              An interactive panorama gives your
              customer a much clearer sense of
              the proposed space than a flat
              drawing alone.
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
                Explore the proposed space.
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-white/50">
                Drag around the space on phone,
                tablet or computer and understand
                how the design feels in context.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-[#f4f1eb] p-7">
              <TabletSmartphone
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Easy to present
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Open the customer&apos;s project
                during a meeting without specialist
                software.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-[#f4f1eb] p-7">
              <FileImage
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Detailed images
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Customers can open presentation
                images and inspect the project
                details clearly.
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
                Use the presentation digitally
                or print finished sheets when
                required.
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
                opens their project directly.
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
                Individual presentations can sit
                behind their own access codes
                rather than being publicly visible.
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
                You don&apos;t need to learn
                rendering software before you can
                offer a polished presentation.
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
                  as part of your own service.
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
                Residential + commercial
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Wherever your work goes.
              </h2>

              <p className="mt-6 leading-8 text-black/50">
                Use us for a single cabinetry
                project, a whole home, a hospitality
                fitout or larger commercial work.
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

      {/* HOW IT WORKS */}
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

      {/* INSIGHTS */}
      <section className="border-y border-black/10 bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Insights
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
                Better ways to present your work
                and help clients say yes.
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                Explore ideas around visualisation,
                presentation and helping cabinetry,
                joinery and fitout businesses
                communicate designs more clearly.
              </p>

              <Link
                href="/blog"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore the insights
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
            Residential, commercial, hospitality,
            retail, shop fitout, joinery and
            carpentry projects.
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