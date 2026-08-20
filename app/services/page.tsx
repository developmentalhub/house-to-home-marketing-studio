import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Clapperboard,
  MonitorPlay,
  Send,
  Sparkles,
  Wand2,
} from "lucide-react";

const services = [
  {
    title: "Digital Lifestyle Staging",
    description:
      "We transform empty or flat property photography into aspirational lifestyle imagery by adding realistic people, activity and atmosphere.",
    details: [
      "A family enjoying an outdoor entertaining area",
      "People around a pool",
      "Diners in an empty restaurant or hospitality space",
      "People walking through a development",
      "Lifestyle activity on balconies, courtyards, kitchens or living spaces",
    ],
    image: "/property-images/website/lifestyle/foyer-after.jpeg",
    imageAlt:
      "Foyer transformed through digital lifestyle staging for real estate marketing",
    icon: Sparkles,
  },
  {
    title: "Property Photo Enhancement",
    description:
      "Transform ordinary listing photography into more polished, premium marketing visuals through creative editing and visual enhancement.",
    details: [
      "Colour, tone and lighting correction",
      "Sky and outlook replacement where needed",
      "Clean up of distracting elements",
      "Consistent, premium visual finish across a listing",
      "Delivered in the formats you need",
    ],
    image: "/property-images/website/staging/living-room-after.jpeg",
    imageAlt:
      "Living room after premium property photo enhancement",
    icon: Wand2,
  },
  {
    title: "Property Animations",
    description:
      "Short, cinematic animations created from supplied still property photographs, suitable for Instagram Reels, Stories, property launches and digital advertising.",
    details: [
      "Subtle camera movement across a still image",
      "Day to night transitions",
      "Before and after reveal animations",
      "Construction or build reveal sequences",
      "Delivered as ready to use video files",
    ],
    image: "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
    imageAlt:
      "Bathroom marketing image prepared for a property animation",
    icon: Clapperboard,
  },
  {
    title: "Motion Graphics",
    description:
      "We add subtle movement, text, graphic elements and visual effects to existing property photography.",
    details: [
      "Animated text and property details",
      "Logo and branding overlays",
      "Subtle particle and light effects",
      "Price, feature or auction date call outs",
      "Consistent motion style across a campaign",
    ],
    image: "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
    imageAlt:
      "Bedroom marketing image prepared for motion graphics treatment",
    icon: MonitorPlay,
  },
  {
    title: "Property Reels",
    description:
      "Vertical short-form videos created using supplied property photos and footage. We provide the completed visual asset only, no caption writing or social media posting.",
    details: [
      "9 by 16 vertical format",
      "Built from your existing photos and footage",
      "Paced for Reels, TikTok and Stories",
      "Delivered as a finished, ready to post file",
      "No captions, hashtags or scheduling included",
    ],
    image: "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
    imageAlt:
      "Kitchen marketing image prepared for a vertical property Reel",
    icon: Camera,
  },
  {
    title: "Launch Graphics",
    description:
      "Professionally designed property marketing graphics created from your supplied imagery, for every stage of a campaign.",
    details: [
      "Coming Soon and Just Listed",
      "Now Selling and New Development",
      "Open Home and Auction",
      "Sold and Under Offer",
      "Feature Property and Key Property Features",
    ],
    image: "/property-images/website/staging/kitchen-after.jpeg",
    imageAlt: "Kitchen image prepared as a property launch graphic",
    icon: Send,
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="section-space bg-cream">
        <div className="container-shell">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-rust">
            Our services
          </p>

          <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-tight md:text-7xl">
            Send us your photos. We turn them into content worth stopping for.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/60">
            Choose one service or combine several into a complete visual
            campaign, all created from the photography you already have.
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
                <div className={`relative min-h-[420px] ${reverse ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className={`flex items-center p-8 md:p-12 ${reverse ? "lg:order-1" : ""}`}>
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand">
                      <Icon size={23} />
                    </div>

                    <h2 className="mt-6 font-display text-3xl font-semibold md:text-4xl">
                      {service.title}
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-black/60">
                      {service.description}
                    </p>

                    <ul className="mt-6 grid gap-3 text-black/70">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/enquire"
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
                    >
                      Transform My Property
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