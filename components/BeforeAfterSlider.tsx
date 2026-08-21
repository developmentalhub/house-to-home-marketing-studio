"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const [dragging, setDragging] = useState(false);
  const [interacted, setInteracted] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  function updatePosition(clientX: number) {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const nextPosition =
      ((clientX - rect.left) / rect.width) * 100;

    setPosition(
      Math.max(0, Math.min(100, nextPosition)),
    );

    setInteracted(true);
  }

  function handlePointerDown(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    updatePosition(event.clientX);
  }

  function handlePointerMove(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    if (!dragging) {
      return;
    }

    updatePosition(event.clientX);
  }

  function handlePointerUp(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    if (
      event.currentTarget.hasPointerCapture(event.pointerId)
    ) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setDragging(false);
  }

  useEffect(() => {
    function stopDragging() {
      setDragging(false);
    }

    window.addEventListener("pointerup", stopDragging);

    return () => {
      window.removeEventListener("pointerup", stopDragging);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[4/3] w-full touch-none select-none overflow-hidden bg-neutral-200"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => setDragging(false)}
    >
      {/* AFTER IMAGE */}
      <Image
        src={after}
        alt={afterAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="pointer-events-none select-none object-cover"
        draggable={false}
        priority={false}
      />

      {/* BEFORE IMAGE */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
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
          priority={false}
        />
      </div>

      {/* TOP GRADIENT */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />

      {/* LABELS */}
      <div className="pointer-events-none absolute left-3 top-3 z-20 rounded-full bg-white/95 px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-ink shadow-sm sm:left-5 sm:top-5 sm:px-4 sm:text-[10px]">
        Original
      </div>

      <div className="pointer-events-none absolute right-3 top-3 z-20 rounded-full bg-ink/90 px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm sm:right-5 sm:top-5 sm:px-4 sm:text-[10px]">
        Brought to life
      </div>

      {/* DIVIDER */}
      <div
        className="pointer-events-none absolute bottom-0 top-0 z-20 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.25)]"
        style={{
          left: `${position}%`,
        }}
      >
        {/* HANDLE */}
        <div
          className={`absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-xl transition-transform duration-150 sm:h-14 sm:w-14 ${
            dragging ? "scale-110" : "group-hover:scale-105"
          }`}
        >
          <ChevronsLeftRight size={20} />
        </div>
      </div>

      {/* ACCESSIBLE RANGE */}
      <input
        type="range"
        min="0"
        max="100"
        value={Math.round(position)}
        onChange={(event) => {
          setPosition(Number(event.target.value));
          setInteracted(true);
        }}
        aria-label="Drag to compare original and enhanced property image"
        className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
      />

      {/* MOBILE / DESKTOP PROMPT */}
      <div
        className={`pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/65 px-4 py-2 font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all duration-500 sm:bottom-5 sm:text-[9px] ${
          interacted
            ? "translate-y-2 opacity-0"
            : "opacity-100 group-hover:opacity-0"
        }`}
      >
        Slide to compare
      </div>

      {/* EDGE HINTS */}
      {!interacted && (
        <>
          <div className="pointer-events-none absolute left-2 top-1/2 z-10 h-16 w-8 -translate-y-1/2 rounded-full bg-gradient-to-r from-white/15 to-transparent blur-sm" />

          <div className="pointer-events-none absolute right-2 top-1/2 z-10 h-16 w-8 -translate-y-1/2 rounded-full bg-gradient-to-l from-black/15 to-transparent blur-sm" />
        </>
      )}
    </div>
  );
}