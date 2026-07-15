import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  HeartHandshake,
  Images,
  Layers3,
  Play,
  Sofa,
  Sparkles,
} from "lucide-react";

const packages = [
  {
    name: "Lifestyle Transformation",
    price: "From $390 + GST",
    eyebrow: "Add warmth and life",
    description:
      "For properties that already photograph well but still feel quiet, empty or emotionally flat.",
    image:
      "/property-images/website/lifestyle/bedroom-after.jpeg",
    imageAlt:
      "Bedroom transformed with warm lifestyle-focused real estate marketing",
    icon: HeartHandshake,
    inclusions: [
      "People, families or couples",
      "Pets where appropriate",
      "Natural everyday moments",
      "Consistent lighting and visual direction",
      "Website and social media image sizes",
    ],
    idealFor:
      "Family homes, prestige listings, lifestyle properties and agents wanting buyers to feel more connected.",
  },
  {
    name: "Virtual Staging",
    price: "From $490 + GST",
    eyebrow: "Show how the space could feel",
    description:
      "For vacant or under-furnished properties where buyers need help understanding scale, function and possibility.",
    image: "/property-images/website/staging/living-room-after.jpeg",
    imageAlt:
      "Contemporary living room transformed through virtual staging",
    icon: Sofa,
    inclusions: [
      "Furniture and room styling",
      "Living, dining and bedroom options",
      "Home office and flexible room ideas",
      "Outdoor entertaining spaces",
      "Consistent furniture and finish direction",
    ],
    idealFor:
      "Vacant homes, new builds, investment properties and rooms that are difficult for buyers to visualise.",
  },
  {
    name: "Feature Highlights",
    price: "Custom quote",
    eyebrow: "Let the details stand out",
    description:
      "For properties with beautiful finishes that deserve more attention than a standard wide-angle listing photograph gives them.",
    image:
      "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
    imageAlt:
      "Warm bathroom marketing image highlighting premium fixtures and finishes",
    icon: Sparkles,
    inclusions: [
      "Stone benchtops",
      "Tapware and fixtures",
      "Feature lighting",
      "Wall cladding and joinery",
      "Tiles, cabinetry and material details",
    ],
    idealFor:
      "Architectural homes, renovated properties, new developments and listings with premium inclusions.",
  },
  {
    name: "Complete Property Story",
    price: "From $690 + GST",
    eyebrow: "Bring the whole campaign together",
    description:
      "A tailored combination of lifestyle enhancement, virtual staging and feature imagery for a more complete property story.",
    image:
      "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
    imageAlt:
      "Kitchen transformed into warm lifestyle-focused real estate imagery",
    icon: Layers3,
    inclusions: [
      "Lifestyle-enhanced hero images",
      "Virtually staged spaces",
      "Architectural feature details",
      "One consistent visual campaign",
      "Website and social media image sizes",
    ],
    idealFor:
      "Agents wanting a stronger launch campaign without organising an additional photography or lifestyle shoot.",
    featured: true,
  },
];

const socialOptions = [
  {
    title: "10-post campaign",
    description:
      "A focused social launch using your completed property imagery.",
  },
  {
    title: "20-post campaign",
    description:
      "A longer campaign with more room to tell the property story.",
  },
  {
    title: "Instagram Stories",
    description:
      "Portrait 9:16 graphics designed for Stories and reel covers.",
  },
  {
    title: "Short-form videos",
    description:
      "Quick before-and-after movement, image sequences and campaign clips.",
  },
  {
    title: "Written captions",
    description:
      "Warm, property-focused copy ready to adapt for your agency voice.",
  },
  {
    title: "Organised content folder",
    description:
      "Clearly labelled files so your team knows exactly what to post.",
  },
];

export default function PackagesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        </div>

        <div className="container-shell relative z-10 grid min-h-[680px] items-end gap-10 py-20 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sand">
              House to Home packages
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] md:text-7xl">
              Choose how you want buyers to experience the property.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Begin with the listing photographs you already have. We can add
              warmth, stage empty rooms, highlight premium finishes or create
              the complete visual campaign.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink"
              >
                Request a tailored quote
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/before-after"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur"
              >
                See transformations
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Not sure what you need?
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              Send us the images and tell us what feels flat.
            </h2>

            <p className="mt-4 leading-7 text-white/65">
              We will recommend the most useful combination based on the
              property, likely buyer and number of images.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-cream">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-7 shadow-soft">
              <Images className="h-9 w-9 text-clay" />

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
                You provide
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                Your current listing images
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Share the high-resolution property photos that need more warmth,
                furniture, lifestyle or visual detail.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-7 shadow-soft">
              <Sparkles className="h-9 w-9 text-clay" />

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
                We create
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                A clear visual direction
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                We select the most useful mix of styling, people, pets,
                furnishings and architectural detail.
              </p>
            </div>

            <div className="rounded-[2rem] bg-ink p-7 text-white shadow-soft">
              <Play className="h-9 w-9 text-sand" />

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
                You receive
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                Campaign-ready property content
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                Approved website images and any selected social posts, Stories,
                captions and videos in an organised folder.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
              Visual packages
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Select one transformation or combine them.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Pricing starts from the amounts below and is confirmed after we
              review the number, quality and complexity of the images.
            </p>
          </div>

          <div className="mt-14 grid gap-8">
            {packages.map((item, index) => {
              const Icon = item.icon;
              const reverse = index % 2 === 1;

              return (
                <article
                  key={item.name}
                  className={`grid overflow-hidden rounded-[2.5rem] border shadow-soft lg:grid-cols-2 ${
                    item.featured
                      ? "border-clay bg-cream"
                      : "border-black/5 bg-white"
                  }`}
                >
                  <div
                    className={`relative min-h-[430px] ${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-ink shadow">
                      {item.price}
                    </div>
                  </div>

                  <div
                    className={`flex items-center p-8 md:p-12 ${
                      reverse ? "lg:order-1" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand">
                          <Icon size={23} />
                        </div>

                        {item.featured && (
                          <span className="rounded-full bg-clay px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                            Most flexible
                          </span>
                        )}
                      </div>

                      <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-clay">
                        {item.eyebrow}
                      </p>

                      <h3 className="mt-3 text-4xl font-semibold">
                        {item.name}
                      </h3>

                      <p className="mt-5 text-lg leading-8 text-black/60">
                        {item.description}
                      </p>

                      <ul className="mt-7 grid gap-3">
                        {item.inclusions.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-black/70"
                          >
                            <Check
                              size={18}
                              className="mt-1 shrink-0 text-clay"
                            />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 border-t border-black/10 pt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-black/40">
                          Ideal for
                        </p>

                        <p className="mt-3 leading-7 text-black/60">
                          {item.idealFor}
                        </p>
                      </div>

                      <Link
                        href="/enquire"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-clay"
                      >
                        Ask about this package
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-cream">
        <div className="container-shell">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-ink text-white shadow-soft lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[500px]">
              <Image
                src="/property-images/website/lifestyle/foyer-after.jpeg"
                alt="Warm foyer image created for lifestyle-focused real estate marketing"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            </div>

            <div className="p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand">
                Social campaign add-on
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Give the property more than one moment to be noticed.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Add a ready-to-use social campaign to any image package. We can
                create the posts, portrait Stories, videos and written content
                your agency does not have time to prepare.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {socialOptions.map((option) => (
                  <div
                    key={option.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <h3 className="font-semibold">{option.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/enquire"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink"
              >
                Include social media content
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
              A tailored quote
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              You do not need to know the perfect package before you enquire.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
              Tell us how many photographs you have, what feels missing and
              whether you need social content. We will recommend the most useful
              option.
            </p>

            <Link
              href="/enquire"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:bg-clay"
            >
              Request a tailored quote
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}