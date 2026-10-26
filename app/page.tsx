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
    "Turn cabinet making sketches into professional interactive client presentations with 360 degree panoramas, high-resolution presentation sheets and private project pages for residential, commercial, hospitality, retail and shop fitout projects.",

  keywords: [
    "cabinet maker visualisation",
    "cabinet maker 3D rendering",
    "kitchen visualisation",
    "interactive kitchen design",
    "cabinetry presentation",
    "joinery visualisation",
    "360 kitchen design",
    "kitchen rendering service",
    "commercial joinery visualisation",
    "hospitality joinery visualisation",
    "retail joinery visualisation",
    "shop fitout visualisation",
    "carpentry visualisation",
    "bathroom cabinetry visualisation",
    "laundry cabinetry design",
    "walk in robe visualisation",
    "custom joinery rendering",
  ],

  alternates: {
    canonical:
      "https://www.realestatemediahouse.net",
  },

  openGraph: {
    title:
      "Interactive Cabinetry Presentations for Cabinet Makers",
    description:
      "Residential, commercial, hospitality and retail joinery visualisation from hand-drawn concepts to interactive 360 degree presentations.",
    url:
      "https://www.realestatemediahouse.net",
    type: "website",
  },
};

const SUPABASE_PUBLIC_URL =
  "https://icnplmgegficqmmsoqxt.supabase.co/storage/v1/object/public/website-images";

const projectTypes = [
  "Kitchens",
  "Bathrooms",
  "Laundries",
  "Walk-in robes",
  "Commercial joinery",
  "Hospitality fitouts",
  "Retail fitouts",
  "Custom joinery",
  "Carpentry projects",
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
    text: "Share the finished project with your customer using their private project page, QR code or printable presentation sheets.",
  },
];

const benefits = [
  "No SketchUp skills required",
  "No rendering software to learn",
  "Start with your hand-drawn sketch",
  "Residential or commercial projects",
  "Interactive 360° panorama",
  "Private customer presentation page",
  "High-resolution presentation images",
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
                We turn cabinetry, joinery and
                fitout concepts into interactive
                360° presentations that help your
                customers clearly see the finished
                space.
              </p>

              <p className="mt-5 max-w-2xl leading-8 text-white/45">
                Residential, commercial,
                hospitality, retail and custom
                joinery projects.
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

            <HomePanorama />
          </div>
        </div>
      </section>

      {/* PROJECT RANGE */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              More than residential cabinetry
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              From kitchens to hospitality,
              retail and commercial fitouts.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
              We can create visual presentations
              for cabinetry, joinery, shop fitout
              and carpentry projects across
              residential and commercial spaces.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* RESIDENTIAL */}
            <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#171717] shadow-soft">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={`${SUPABASE_PUBLIC_URL}/preview/kitchen/updated-kitchen-panorama-image.png`}
                  alt="Residential kitchen cabinetry visualisation"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-9">
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-brassBright">
                    Residential
                  </p>

                  <h3 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
                    Kitchens, robes, bathrooms
                    and whole-house cabinetry
                  </h3>
                </div>
              </div>
            </article>

            {/* COMMERCIAL */}
            <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#171717] shadow-soft">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={`${SUPABASE_PUBLIC_URL}/preview/hospitality/hospitality-panorama-image.png`}
                  alt="Commercial hospitality joinery and fitout visualisation"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-9">
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-brassBright">
                    Commercial
                  </p>

                  <h3 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
                    Hospitality, retail,
                    shop fitout and carpentry
                  </h3>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
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

      {/* CORE POSITION */}
      <section className="bg-[#f4f1eb] py-20 md:py-28">
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
                Whether it is a kitchen, restaurant,
                retail space or custom fitout, the
                visual presentation can make the
                finished concept much easier to
                understand.
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
      <section className="border-y border-black/10 bg-white py-20 md:py-28">
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
                Share the finished visualisation
                with your customer as part of your
                own professional service.
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
        className="bg-[#f4f1eb] py-20 md:py-28"
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
              customer a much clearer sense of a
              proposed residential or commercial
              space than a flat drawing alone.
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

            <article className="rounded-[1.75rem] border border-black/10 bg-white p-7">
              <TabletSmartphone
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Easy to present
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Open the customer&apos;s project
                during a meeting with no specialist
                software required.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-white p-7">
              <FileImage
                size={25}
                className="text-rust"
              />

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Detailed images
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                Customers can open large
                presentation images and inspect
                details clearly.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-black/10 bg-white p-7">
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

            <article className="rounded-[1.75rem] border border-black/10 bg-white p-7">
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

            <article className="rounded-[1.75rem] border border-black/10 bg-white p-7 lg:col-span-2">
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
                rendering software before you can
                offer your customers a modern
                presentation.
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
                Residential + commercial
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Wherever your work goes.
              </h2>

              <p className="mt-6 leading-8 text-black/50">
                Use us for a single cabinetry
                project, a full home, a hospitality
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
                client presentation and helping
                cabinetry, joinery and fitout
                businesses communicate designs more
                clearly.
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