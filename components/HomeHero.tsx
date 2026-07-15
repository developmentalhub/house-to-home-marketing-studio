"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  BedDouble,
  Car,
  ChevronDown,
  Home,
} from "lucide-react";
import { useEffect, useState } from "react";

const heroImages = [
  {
    before: "/property-images/website/staging/kitchen-before.jpeg",
    after:
      "/property-images/website/lifestyle/kitchen-after-lifestyle.jpeg",
    alt: "Modern kitchen transformed into warm lifestyle real estate imagery",
    room: "Kitchen",
  },
  {
    before: "/property-images/website/lifestyle/bedroom-before.jpeg",
    after:
      "/property-images/website/lifestyle/bedroom-after-lifestyle.jpeg",
    alt: "Bedroom transformed into warm lifestyle real estate imagery",
    room: "Bedroom",
  },
  {
    before: "/property-images/website/lifestyle/bathroom-before.jpeg",
    after:
      "/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg",
    alt: "Bathroom transformed into warm lifestyle real estate imagery",
    room: "Bathroom",
  },
  {
    before: "/property-images/website/lifestyle/foyer-before.jpeg",
    after: "/property-images/website/lifestyle/foyer-after.jpeg",
    alt: "Foyer transformed into warm lifestyle real estate imagery",
    room: "Foyer",
  },
];

const INITIAL_TRANSFORM_DELAY = 1600;
const SLIDE_DISPLAY_TIME = 4400;
const RESET_TIME = 350;

export default function HomeHero() {
  const [transformed, setTransformed] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const firstTransform = window.setTimeout(() => {
      setTransformed(true);
    }, INITIAL_TRANSFORM_DELAY);

    return () => window.clearTimeout(firstTransform);
  }, []);

  useEffect(() => {
    if (!transformed) {
      return;
    }

    const changeSlide = window.setTimeout(() => {
      setTransformed(false);

      window.setTimeout(() => {
        setActiveImage((current) => {
          return (current + 1) % heroImages.length;
        });

        setTransformed(true);
      }, RESET_TIME);
    }, SLIDE_DISPLAY_TIME);

    return () => window.clearTimeout(changeSlide);
  }, [activeImage, transformed]);

  function selectImage(index: number) {
    if (index === activeImage) {
      setTransformed(false);

      window.setTimeout(() => {
        setTransformed(true);
      }, RESET_TIME);

      return;
    }

    setTransformed(false);

    window.setTimeout(() => {
      setActiveImage(index);
      setTransformed(true);
    }, RESET_TIME);
  }

  const image = heroImages[activeImage];

  return (
    <section
      className={`home-hero ${transformed ? "home-hero-warm" : ""}`}
    >
      <div className="home-hero-listing-bar">
        <div className="container-shell flex items-center justify-between gap-5 py-3">
          <p className="text-sm font-semibold">
            Premium Property Listing
          </p>

          <div className="hidden items-center gap-6 text-sm text-black/55 md:flex">
            <span>Buy</span>
            <span>Rent</span>
            <span>Sold</span>
            <span>Property Value</span>
          </div>

          <Link
            href="/enquire"
            className="rounded-md border border-black/15 bg-white px-4 py-2 text-sm font-semibold"
          >
            Enquire
          </Link>
        </div>
      </div>

      <div className="container-shell home-hero-layout">
        <div className="home-hero-image-column">
          <div className="home-hero-image-frame">
            {heroImages.map((item, index) => (
              <div
                key={item.before}
                className={`home-hero-property-pair ${
                  activeImage === index ? "is-active" : ""
                }`}
                aria-hidden={activeImage !== index}
              >
                <Image
                  src={item.before}
                  alt={`${item.alt}, original property photograph`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="home-hero-before-image"
                />

                <div className="home-hero-after-image-wrap">
                  <Image
                    src={item.after}
                    alt={`${item.alt}, transformed property photograph`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="home-hero-after-image"
                  />
                </div>
              </div>
            ))}

            <div className="home-hero-cold-overlay" />
            <div className="home-hero-warm-overlay" />

            <div className="home-hero-wipe-line">
              <span />
            </div>

            <div className="home-hero-room-label">
              {transformed
                ? `${image.room}, brought to life`
                : `Original ${image.room}`}
            </div>

            <div className="home-hero-life-elements">
              <div className="life-card life-card-one">
                <span className="life-card-dot" />
                <p>Warm family moments</p>
              </div>

              <div className="life-card life-card-two">
                <span className="life-card-dot" />
                <p>Thoughtful styling</p>
              </div>

              <div className="life-card life-card-three">
                <span className="life-card-dot" />
                <p>Details buyers remember</p>
              </div>
            </div>

            <div className="home-hero-image-count">
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(heroImages.length).padStart(2, "0")}
            </div>
          </div>

          <div className="home-hero-thumbnail-row">
            {heroImages.map((item, index) => (
              <button
                key={item.after}
                type="button"
                onClick={() => selectImage(index)}
                className={`home-hero-thumbnail ${
                  activeImage === index ? "is-active" : ""
                }`}
                aria-label={`Show the ${item.room} transformation`}
                aria-pressed={activeImage === index}
              >
                <Image
                  src={item.after}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="home-hero-copy-column">
          <div className="home-hero-cold-copy">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              Contemporary family residence
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Quality finishes and spacious living
            </h1>

            <div className="mt-6 flex flex-wrap gap-5 text-sm text-black/65">
              <span className="flex items-center gap-2">
                <BedDouble size={18} />
                4 beds
              </span>

              <span className="flex items-center gap-2">
                <Bath size={18} />
                2 baths
              </span>

              <span className="flex items-center gap-2">
                <Car size={18} />
                2 cars
              </span>
            </div>

            <p className="mt-7 leading-7 text-black/55">
              Modern kitchen, generous living areas and quality fixtures
              throughout.
            </p>
          </div>

          <div className="home-hero-warm-copy">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
              House to Home Real Estate Marketing Studio
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-[1.05] md:text-6xl">
              Bringing human connection and everyday life into real estate
              listings.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/65">
              We transform the property images you already have through
              lifestyle storytelling, virtual staging, architectural feature
              highlights and social media content that helps buyers imagine
              coming home.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/packages"
                className="rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-clay"
              >
                Explore packages
              </Link>

              <Link
                href="/enquire"
                className="rounded-full border border-black/15 bg-white px-6 py-3.5 font-semibold transition hover:border-clay hover:text-clay"
              >
                Request a quote
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-3 text-sm font-medium text-black/55">
              <Home size={18} />
              Staging, families, pets, features and social content
            </div>
          </div>
        </div>
      </div>

      <a href="#transformation" className="home-hero-scroll">
        <span>See what changes</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}