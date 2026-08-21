import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PackageCardProps = {
  name: string;
  price: string;
  description: string;
  items: string[];
  href?: string;
  featured?: boolean;
};

export default function PackageCard({
  name,
  price,
  description,
  items,
  href = "/packages",
  featured = false,
}: PackageCardProps) {
  return (
    <article
      className={`group flex h-full flex-col rounded-[2rem] border p-7 transition duration-300 md:p-8 ${
        featured
          ? "border-rust bg-white shadow-soft"
          : "border-black/10 bg-white hover:border-rust hover:shadow-soft"
      }`}
    >
      <div>
        {featured && (
          <p className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
            Most Popular
          </p>
        )}

        <h3 className="font-display text-3xl font-semibold leading-tight">
          {name}
        </h3>

        <p className="mt-3 font-display text-4xl font-semibold text-rust">
          {price}
        </p>

        <p className="mt-5 leading-7 text-black/55">
          {description}
        </p>
      </div>

      <div className="mt-7 border-t border-black/10 pt-6">
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-black/30">
          Includes
        </p>

        <ul className="mt-4 space-y-3">
          {items.map((item, index) => (
            <li
              key={item}
              className="grid grid-cols-[30px_1fr] gap-2 text-sm leading-6 text-black/65"
            >
              <span className="font-mono text-[9px] font-semibold text-rust">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-8">
        <Link
          href={href}
          className={`flex items-center justify-between rounded-full px-5 py-3.5 text-sm font-semibold transition ${
            featured
              ? "bg-rust text-white hover:bg-ink"
              : "bg-ink text-white hover:bg-rust"
          }`}
        >
          View package

          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}