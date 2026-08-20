"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
      {/* AFTER IMAGE */}
      <Image
        src={after}
        alt={afterAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="select-none object-cover"
        draggable={false}
      />

      {/* BEFORE IMAGE */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="select-none object-cover"
          draggable={false}
        />
      </div>

      {/* DARK OVERLAYS FOR LABEL READABILITY */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/25 to-transparent" />

      {/* LABELS */}
      <div className="pointer-events-none absolute left-5 top-5 z-20 rounded-full bg-white/95 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink shadow-sm">
        Original
      </div>

      <div className="pointer-events-none absolute right-5 top-5 z-20 rounded-full bg-ink/90 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
        Brought to life
      </div>

      {/* DIVIDING LINE */}
      <div
        className="pointer-events-none absolute bottom-0 top-0 z-20 w-[2px] bg-white shadow"
        style={{
          left: `${position}%`,
        }}
      >
        {/* HANDLE */}
        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-xl">
          <ChevronsLeftRight size={20} />
        </div>
      </div>

      {/* INVISIBLE RANGE INPUT */}
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Drag to compare original and enhanced property image"
        className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
      />

      {/* BOTTOM INSTRUCTION */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
        Drag to compare
      </div>
    </div>
  );
}