"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  X,
} from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export type MediaLightboxItem = {
  id: string;
  title: string;
  category?: string;
  description?: string;
  image?: string;
  before?: string;
  after?: string;
};

type MediaLightboxProps = {
  items: MediaLightboxItem[];
  openIndex: number | null;
  onClose: () => void;
  onChange?: (index: number) => void;
};

const SWIPE_DISTANCE = 45;

export default function MediaLightbox({
  items,
  openIndex,
  onClose,
  onChange,
}: MediaLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(
    openIndex ?? 0,
  );

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (openIndex !== null) {
      setCurrentIndex(openIndex);
    }
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  });

  if (
    openIndex === null ||
    items.length === 0 ||
    !items[currentIndex]
  ) {
    return null;
  }

  const currentItem = items[currentIndex];

  function changeIndex(nextIndex: number) {
    setCurrentIndex(nextIndex);
    onChange?.(nextIndex);
  }

  function showPrevious() {
    const nextIndex =
      currentIndex === 0
        ? items.length - 1
        : currentIndex - 1;

    changeIndex(nextIndex);
  }

  function showNext() {
    const nextIndex =
      currentIndex === items.length - 1
        ? 0
        : currentIndex + 1;

    changeIndex(nextIndex);
  }

  function handleTouchStart(
    event: React.TouchEvent<HTMLDivElement>,
  ) {
    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  }

  function handleTouchEnd(
    event: React.TouchEvent<HTMLDivElement>,
  ) {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const touch = event.changedTouches[0];

    const differenceX =
      touch.clientX - touchStartX.current;

    const differenceY =
      touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (
      Math.abs(differenceX) <
      Math.abs(differenceY)
    ) {
      return;
    }

    if (differenceX > SWIPE_DISTANCE) {
      showPrevious();
    }

    if (differenceX < -SWIPE_DISTANCE) {
      showNext();
    }
  }

  const hasBeforeAfter =
    Boolean(currentItem.before) &&
    Boolean(currentItem.after);

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/92 p-2 backdrop-blur-md sm:p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[96vh] w-full max-w-7xl flex-col overflow-hidden rounded-[1.5rem] bg-[#f7f5f1] shadow-2xl md:rounded-[2rem]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between gap-4 border-b border-black/10 bg-white px-4 py-3 sm:px-6">
          <div className="min-w-0">
            {currentItem.category && (
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-rust">
                {currentItem.category}
              </p>
            )}

            <p className="mt-1 truncate font-display text-xl font-semibold sm:text-2xl">
              {currentItem.title}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <p className="hidden font-mono text-[9px] uppercase tracking-[0.15em] text-black/35 sm:block">
              {currentIndex + 1} of {items.length}
            </p>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close viewer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition hover:bg-rust"
            >
              <X size={19} />
            </button>
          </div>
        </div>

        {/* MEDIA */}
        <div
          className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {hasBeforeAfter ? (
            <div className="w-full">
              <BeforeAfterSlider
                before={currentItem.before!}
                after={currentItem.after!}
                beforeAlt={`Original ${currentItem.title}`}
                afterAlt={`Enhanced ${currentItem.title}`}
              />
            </div>
          ) : currentItem.image ? (
            <div className="relative h-[65vh] w-full">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          ) : (
            <div className="flex min-h-[420px] items-center justify-center p-8 text-center text-white">
              <p>Preview unavailable.</p>
            </div>
          )}

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous item"
                className="absolute left-3 top-1/2 z-40 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur transition hover:bg-rust sm:flex md:left-5"
              >
                <ArrowLeft size={19} />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next item"
                className="absolute right-3 top-1/2 z-40 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur transition hover:bg-rust sm:flex md:right-5"
              >
                <ArrowRight size={19} />
              </button>
            </>
          )}

          {items.length > 1 && (
            <div className="pointer-events-none absolute bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full bg-black/65 px-4 py-2 font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur sm:hidden">
              Swipe for next
            </div>
          )}
        </div>

        {/* DETAILS */}
        <div className="border-t border-black/10 bg-[#f7f5f1] p-5 sm:p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              {currentItem.category && (
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-rust">
                  {currentItem.category}
                </p>
              )}

              <h2 className="mt-2 font-display text-3xl font-semibold">
                {currentItem.title}
              </h2>

              {currentItem.description && (
                <p className="mt-3 max-w-2xl leading-7 text-black/50">
                  {currentItem.description}
                </p>
              )}
            </div>

            {items.length > 1 && (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="flex h-11 items-center gap-2 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold transition hover:border-rust hover:text-rust"
                >
                  <ArrowLeft size={15} />
                  Previous
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  className="flex h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-white transition hover:bg-rust"
                >
                  Next
                  <ArrowRight size={15} />
                </button>
              </div>
            )}
          </div>

          {/* DOT NAVIGATION */}
          {items.length > 1 && (
            <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => changeIndex(index)}
                  aria-label={`Open ${item.title}`}
                  className={`h-2.5 shrink-0 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-9 bg-rust"
                      : "w-2.5 bg-black/15 hover:bg-black/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}