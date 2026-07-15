import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  ArrowRight,
  Camera,
  HeartHandshake,
  Lamp,
  Layers3,
  Quote,
  Sparkles,
} from "lucide-react";
import HomeHero from "@/components/HomeHero";
import PackageCard from "@/components/PackageCard";

const transformations = [
  {
    title: "Lifestyle scenes",
    description:
      "Introduce families, couples, children, older adults and pets in ways that feel natural to the home and relevant to its likely buyer.",
    image:
      "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
    imageAlt:
      "Bedroom transformed with warm lifestyle-focused property marketing",
    icon: HeartHandshake,
  },
  {
    title: "Virtual staging",
    description:
      "Turn vacant or under-furnished rooms into warm, functional spaces that help buyers understand scale, purpose and possibility.",
    image: "/property-images/website/staging/living-room-after.jpeg",
    imageAlt:
      "Living room furnished through professional virtual staging",
    icon: Armchair,
  },
  {
    title: "Feature highlights",
    description:
      "Bring attention to lighting, cladding, stone, tapware, joinery and finishes that can be lost inside a wide property photograph.",
    image:
      "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
    imageAlt:
      "Warm bathroom marketing image highlighting lighting, tapware and finishes",
    icon: Lamp,
  },
  {
    title: "Social campaigns",
    description:
      "Turn completed property images into social posts, carousels, short videos and written captions ready for your campaign.",
    image:
      "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
    imageAlt:
      "Lifestyle kitchen image prepared for a real estate social media campaign",
    icon: Camera,
  },
];

export default function HomePage() {
  return (
    <main>
      <HomeHero />

      <section id="transformation" className="section-space bg-white">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
              From listing to lived experience
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              The room did not change. The way buyers experienced it did.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
              Real estate photography records the property. House to Home adds
              the warmth, detail and visual story that helps someone stop
              scrolling and begin imagining their own life there.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-black/10 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-cream p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                Typical listing
              </p>

              <p className="mt-5 text-2xl font-semibold">
                Empty rooms and standard wide-angle photographs
              </p>
            </div>

            <div className="bg-cream p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                Missed opportunity
              </p>

              <p className="mt-5 text-2xl font-semibold">
                Beautiful finishes that buyers barely notice
              </p>
            </div>

            <div className="bg-cream p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                House to Home
              </p>

              <p className="mt-5 text-2xl font-semibold">
                Warm, styled and emotionally engaging
              </p>
            </div>

            <div className="bg-ink p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
                The result
              </p>

              <p className="mt-5 text-2xl font-semibold">
                Marketing that gives buyers a reason to look closer
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-cream">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
              Our transformations
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              More than another set of property photographs
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/60">
              Choose one style of transformation or combine them into a
              complete visual property campaign.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {transformations.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-soft"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                      <Icon size={22} />
                    </div>
                  </div>

                  <div className="p-7 md:p-8">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>

                    <p className="mt-4 leading-7 text-black/60">
                      {item.description}
                    </p>

                    <Link
                      href="/services"
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-clay"
                    >
                      See this service
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space overflow-hidden bg-ink text-white">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                Professional visual experience
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Created with an understanding of how homes are designed,
                finished and lived in.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-white/70">
                House to Home combines professional experience in building
                design, 3D architectural illustration and interior design. We
                understand proportion, structure, lighting, spatial flow and
                the small material details that make a property feel
                considered.
              </p>

              <p className="mt-6 text-lg leading-8 text-white/70">
                We also understand how busy buyers experience a listing. They
                notice the dog beside the fireplace, hands preparing dinner, a
                coffee near the bath and the warmth around a dining table.
                Those moments help an image feel less like a building and more
                like a possible home.
              </p>

              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 p-6">
                  <Layers3 className="h-8 w-8 text-sand" />

                  <h3 className="mt-5 text-xl font-semibold">
                    Architectural visual expertise
                  </h3>

                  <p className="mt-3 leading-7 text-white/60">
                    Building design knowledge with specialist experience in
                    professional 3D architectural rendering.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 p-6">
                  <Sparkles className="h-8 w-8 text-sand" />

                  <h3 className="mt-5 text-xl font-semibold">
                    Interior and buyer-focused storytelling
                  </h3>

                  <p className="mt-3 leading-7 text-white/60">
                    Diploma-qualified interior design expertise shaped by a
                    practical, family-centred view of property marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
                Packages
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Start with the images you already have
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/60">
                Every quote is based on the number of images, complexity of the
                transformation and whether you need a complete social campaign.
              </p>
            </div>

            <Link
              href="/packages"
              className="inline-flex items-center gap-2 font-semibold text-clay"
            >
              View all packages
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <PackageCard
              name="Lifestyle Transformation"
              price="From $390 + GST"
              description="For listings that need warmth, people, pets and everyday moments."
              items={[
                "Lifestyle-enhanced property images",
                "Families, couples, pets or subtle signs of life",
                "Consistent creative direction",
                "Listing and social media sizes",
              ]}
            />

            <PackageCard
              featured
              name="Complete Property Story"
              price="From $690 + GST"
              description="A tailored combination of staging, lifestyle imagery and feature details."
              items={[
                "Virtual staging",
                "Lifestyle scenes",
                "Architectural feature close-ups",
                "A consistent visual story",
              ]}
            />

            <PackageCard
              name="Social Campaign"
              price="Custom quote"
              description="A complete folder of ready-to-use visual and written marketing content."
              items={[
                "10 or 20 social posts",
                "Short-form videos",
                "Written captions",
                "Organised campaign folder",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section-space bg-cream">
        <div className="container-shell">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-soft lg:grid-cols-2">
            <div className="relative min-h-[460px]">
              <Image
                src="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
                alt="Warm lifestyle-focused kitchen property marketing image"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex items-center p-8 md:p-12">
              <div>
                <Quote className="h-10 w-10 text-clay" />

                <h2 className="mt-6 text-4xl font-semibold leading-tight">
                  You already have the property photos. We help you do more
                  with them.
                </h2>

                <p className="mt-6 text-lg leading-8 text-black/60">
                  Send us the listing images, choose the transformation style
                  and tell us who the likely buyer is. We take care of the
                  visual direction and return a polished set of marketing
                  assets ready for your campaign.
                </p>

                <Link
                  href="/enquire"
                  className="mt-8 inline-flex rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-clay"
                >
                  Request a tailored quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}