import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="container-shell grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-xl font-semibold">House to Home</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
            Bringing warmth, people and everyday life into real estate marketing.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-white/75 md:justify-end">
          <Link href="/services">Services</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/enquire">Enquire</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
