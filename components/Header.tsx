import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/before-after", label: "Before & After" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/enquire", label: "Enquire" },
];

export default function Header() {
  return (
    <header className="border-b border-black/5 bg-cream/95 backdrop-blur">
      <div className="container-shell flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="max-w-[260px]">
          <p className="text-lg font-semibold leading-tight">
            House to Home
          </p>

          <p className="text-xs uppercase tracking-[0.18em] text-black/55">
            Real Estate Marketing Studio
          </p>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-clay"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}