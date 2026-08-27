import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

type PackageCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  href: string;
  featured?: boolean;
};

export default function PackageCard({
  name,
  price,
  description,
  features,
  href,
  featured = false,
}: PackageCardProps) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-[2rem] border ${
        featured
          ? "border-rust bg-ink text-white shadow-soft"
          : "border-black/10 bg-white text-ink"
      }`}
    >
      <div className="flex flex-1 flex-col p-7 md:p-8">
        <div>
          {featured && (
            <p className="mb-5 inline-flex rounded-full border border-rust bg-rust/20 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
              The Flagship Story
            </p>
          )}

          <h3 className="font-display text-3xl font-semibold leading-tight">
            {name}
          </h3>

          <p
            className={`mt-4 font-display text-4xl font-semibold ${
              featured ? "text-brassBright" : "text-rust"
            }`}
          >
            {price}
          </p>

          <p
            className={`mt-5 leading-7 ${
              featured ? "text-white/55" : "text-black/50"
            }`}
          >
            {description}
          </p>
        </div>

        <div
          className={`mt-7 border-t pt-6 ${
            featured ? "border-white/10" : "border-black/10"
          }`}
        >
          <p
            className={`font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${
              featured ? "text-brassBright" : "text-rust"
            }`}
          >
            Visual + Story
          </p>

          <div className="mt-5 space-y-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <Check
                  size={16}
                  className={`mt-1 shrink-0 ${
                    featured ? "text-brassBright" : "text-rust"
                  }`}
                />

                <p
                  className={`leading-6 ${
                    featured ? "text-white/60" : "text-black/60"
                  }`}
                >
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-7 border-t pt-6 ${
            featured ? "border-white/10" : "border-black/10"
          }`}
        >
          <p
            className={`font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${
              featured ? "text-brassBright" : "text-rust"
            }`}
          >
            Enhanced Property Images
          </p>

          <p
            className={`mt-4 text-sm leading-7 ${
              featured ? "text-white/50" : "text-black/50"
            }`}
          >
            Architecture, layout and defining property elements stay accurate.
            Depending on the scene, enhancement can include people, furniture,
            appliances, décor, cars, landscaping, lighting and atmosphere.
          </p>
        </div>

        <Link
          href={href}
          className={`mt-8 inline-flex items-center justify-between rounded-full px-6 py-4 font-semibold transition ${
            featured
              ? "bg-white text-ink hover:bg-brassBright"
              : "bg-ink text-white hover:bg-rust"
          }`}
        >
          Explore the story
          <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}