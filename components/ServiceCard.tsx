import { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  label?: string;
  number?: string;
};

export default function ServiceCard({
  title,
  description,
  icon,
  label,
  number,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-black/10 bg-white p-7 transition duration-300 hover:border-rust hover:shadow-soft md:p-8">
      <div className="flex items-start justify-between gap-5">
        <div className="flex items-center gap-4">
          {number && (
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
              {number}
            </span>
          )}

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-rust transition duration-300 group-hover:border-rust">
            {icon}
          </div>
        </div>

        {label && (
          <span className="rounded-full border border-black/10 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-black/40">
            {label}
          </span>
        )}
      </div>

      <div className="mt-auto pt-12">
        <h3 className="font-display text-3xl font-semibold leading-tight">
          {title}
        </h3>

        <p className="mt-4 max-w-lg leading-7 text-black/50">
          {description}
        </p>

        <p className="mt-6 border-t border-black/10 pt-5 font-display text-xl leading-7 text-rust">
          Show more than the space. Show what could happen there.
        </p>
      </div>
    </article>
  );
}