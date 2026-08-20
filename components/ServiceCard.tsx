import { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  label?: string;
};

export default function ServiceCard({
  title,
  description,
  icon,
  label,
}: ServiceCardProps) {
  return (
    <article className="group rounded-[2rem] border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand transition duration-300 group-hover:scale-105">
          {icon}
        </div>

        {label && (
          <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-clay">
            {label}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-black/60">
        {description}
      </p>
    </article>
  );
}