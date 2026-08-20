import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SisterSiteBanner() {
  return (
    <section className="border-y border-black/10 bg-white">
      <div className="container-shell py-6 md:py-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-4xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
              From the team behind RP Images
            </p>

            <p className="mt-2 text-base leading-7 text-black/65 md:text-lg">
              <span className="font-semibold text-ink">
                Real Estate Media House
              </span>{" "}
              is the sister brand of{" "}
              <span className="font-semibold text-ink">RP Images</span> —
              created because great property visuals deserve the same power on
              social media as they do in print, websites and brochures.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-semibold text-rust transition hover:text-ink"
            >
              Explore our services
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}