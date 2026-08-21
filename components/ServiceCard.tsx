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

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f5f1] text-rust transition duration-300 group-hover:bg-rust group-hover:text-white">
            {icon}
          </div>
        </div>

        {label && (
          <span className="rounded-full border border-black/10 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-black/40">
            {label}
          </span>
        )}
      </div>

      <div className="mt-auto pt-14">
        <h3 className="font-display text-3xl font-semibold leading-tight">
          {title}
        </h3>

        <p className="mt-4 max-w-lg leading-7 text-black/50">
          {description}
        </p>
      </div>
    </article>
  );
}