import Link from "next/link";

type PackageCardProps = {
  name: string;
  price: string;
  description: string;
  items: string[];
  featured?: boolean;
};

export default function PackageCard({
  name,
  price,
  description,
  items,
  featured = false,
}: PackageCardProps) {
  return (
    <article className={`rounded-3xl border p-7 ${featured ? "border-rust bg-white shadow-soft" : "border-black/5 bg-white"}`}>
      {featured && (
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
          Most popular
        </p>
      )}
      <h3 className="font-display text-2xl font-semibold">{name}</h3>
      <p className="mt-2 font-mono text-3xl font-semibold text-rust">{price}</p>
      <p className="mt-3 leading-7 text-black/60">{description}</p>
      <ul className="mt-6 space-y-3 text-sm leading-6 text-black/75">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-rust">+</span>
            {item}
          </li>
        ))}
      </ul>
      <Link href="/enquire" className="mt-7 inline-flex rounded-full bg-ink px-5 py-3 font-mono text-xs uppercase tracking-wide text-white transition hover:bg-rust">
        Enquire about this package
      </Link>
    </article>
  );
}