import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  ArrowRight,
  Camera,
  HeartHandshake,
  Lamp,
} from "lucide-react";

const services = [
  {
    title: "Lifestyle image enhancement",
    description:
      "We add carefully selected people, pets and everyday moments to help buyers picture themselves living in the property.",
    details: [
      "Families and couples",
      "Children and older adults",
      "Dogs and other household pets",
      "Dining, cooking and entertaining moments",
      "Subtle signs of everyday life",
    ],
    image: "/property-images/website/lifestyle/foyer-after.jpeg",
    imageAlt:
      "Warm foyer transformed through lifestyle-focused real estate marketing",
    icon: HeartHandshake,
  },
  {
    title: "Virtual staging",
    description:
      "We turn empty or under-furnished rooms into warm, functional spaces while respecting the original room dimensions and architecture.",
    details: [
      "Living and dining rooms",
      "Bedrooms",
      "Home offices",
      "Outdoor entertaining areas",
      "Consistent furniture and styling direction",
    ],
    image: "/property-images/website/staging/living-room-after.jpeg",
    imageAlt:
      "Contemporary living room transformed through professional virtual staging",
    icon: Armchair,
  },
  {
    title: "Architectural feature highlights",
    description:
      "We create polished close-up visuals that draw attention to premium materials and details that may be overlooked in wide listing photos.",
    details: [
      "Stone benchtops",
      "Tapware and fixtures",
      "Feature lighting",
      "Timber and wall cladding",
      "Tiles, cabinetry and joinery",
    ],
    image:
      "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
    imageAlt:
      "Warm bathroom marketing image highlighting lighting, tapware, tiles and cabinetry",
    icon: Lamp,
  },
  {
    title: "Social media campaigns",
    description:
      "We turn completed property images into ready-to-use content for Instagram, Facebook and property launch campaigns.",
    details: [
      "Instagram posts",
      "Portrait Story graphics",
      "Carousels",
      "Short-form videos",
      "Written captions and calls to action",
    ],
    image:
      "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
    imageAlt:
      "Warm bedroom property image suitable for a real estate social media campaign",
    icon: Camera,
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="section-space bg-cream">
        <div className="container-shell">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
            Our services
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Real estate images that feel lived in, considered and worth
            remembering.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/60">
            Choose one type of transformation or combine lifestyle enhancement,
            staging, feature imagery and social content into a complete property
            campaign.
          </p>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell grid gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 === 1;

            return (
              <article
                key={service.title}
                className="grid overflow-hidden rounded-[2.5rem] bg-cream shadow-soft lg:grid-cols-2"
              >
                <div
                  className={`relative min-h-[420px] ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className={`flex items-center p-8 md:p-12 ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand">
                      <Icon size={23} />
                    </div>

                    <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
                      {service.title}
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-black/60">
                      {service.description}
                    </p>

                    <ul className="mt-6 grid gap-3 text-black/70">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/enquire"
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-clay"
                    >
                      Request a quote
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}