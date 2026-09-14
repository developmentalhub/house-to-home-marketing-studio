import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  FileText,
  LockKeyhole,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Buy Property Animation Prompt Pack | Real Estate Media House",
  description:
    "Purchase the 10 Property Reel Animation Prompt Pack from Real Estate Media House.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${SITE_URL}/property-animation-prompt-pack/buy`,
  },
};

const STRIPE_PAYMENT_LINK =
  "https://buy.stripe.com/3cI14p2RE8RFdJg02I4Rq00";

const included = [
  "10 property animation prompt scenarios",
  "Residential, commercial, hotel, childcare and development examples",
  "Camera movement direction",
  "Architectural accuracy instructions",
  "Movement and atmosphere guidance",
  "Instant PDF access after purchase",
];

export default function PropertyAnimationPromptPackBuyPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HEADER */}
      <section className="bg-ink text-white">
        <div className="container-shell py-14 md:py-18">
          <Link
            href="/property-animation-prompt-pack"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to prompt pack
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Property Reel Prompt Pack
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              10 property animation prompts.
              <span className="block text-rust">
                $7 AUD.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              A practical set of prompts designed to give you a stronger
              starting point for creating animated property Reels.
            </p>
          </div>
        </div>
      </section>

      {/* PURCHASE AREA */}
      <section className="py-14 md:py-20">
        <div className="container-shell">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">

            {/* PRODUCT */}
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
              <div className="relative min-h-[320px] bg-[#ece8e1] md:min-h-[420px]">
                <img
                  src="/images/arch-viz-reel-animation.png"
                  alt="Architectural visualisation property reel animation prompt pack"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="p-8 md:p-10">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                  Digital Prompt Pack
                </p>

                <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">
                  10 Property Reel Animation Prompts
                </h2>

                <p className="mt-5 leading-7 text-black/50">
                  Ready-to-adapt prompts for a range of property scenes,
                  from residential interiors through to commercial,
                  hospitality and development animation.
                </p>

                <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
                  {included.map((item, index) => (
                    <div
                      key={item}
                      className="grid grid-cols-[38px_1fr] gap-4 py-4"
                    >
                      <p className="font-mono text-[9px] font-semibold tracking-[0.16em] text-rust">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <p className="leading-6 text-black/60">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CHECKOUT CARD */}
            <div className="h-fit rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft md:p-10 lg:sticky lg:top-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white">
                <FileText size={24} />
              </div>

              <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                Your Order
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold">
                Property Reel Prompt Pack
              </h2>

              <div className="mt-7 border-y border-black/10 py-6">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="text-sm text-black/45">
                      Digital PDF
                    </p>

                    <p className="mt-1 font-display text-xl font-semibold">
                      10 animation prompts
                    </p>
                  </div>

                  <p className="font-display text-4xl font-semibold">
                    $7
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-6 text-black/45">
                After payment, you will be taken to the private download
                page where you can access the full PDF immediately.
              </p>

              <a
                href={STRIPE_PAYMENT_LINK}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:bg-rust"
              >
                Continue to secure payment
                <ArrowRight size={18} />
              </a>

              <div className="mt-6 flex items-start gap-3 border-t border-black/10 pt-6">
                <LockKeyhole
                  size={17}
                  className="mt-1 shrink-0 text-rust"
                />

                <p className="text-sm leading-6 text-black/40">
                  Payment is processed securely through Stripe.
                  Your card details are not stored by Real Estate Media
                  House.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="border-y border-black/10 bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What Happens Next
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Pay once.
                <span className="block text-rust">
                  Download immediately.
                </span>
              </h2>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">
              <div className="grid gap-4 py-6 sm:grid-cols-[55px_1fr]">
                <p className="font-mono text-[9px] font-semibold tracking-[0.16em] text-rust">
                  01
                </p>

                <div>
                  <h3 className="font-display text-xl font-semibold">
                    Complete payment
                  </h3>

                  <p className="mt-2 leading-7 text-black/50">
                    Stripe securely processes your $7 AUD payment.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 py-6 sm:grid-cols-[55px_1fr]">
                <p className="font-mono text-[9px] font-semibold tracking-[0.16em] text-rust">
                  02
                </p>

                <div>
                  <h3 className="font-display text-xl font-semibold">
                    Go straight to the download
                  </h3>

                  <p className="mt-2 leading-7 text-black/50">
                    Your Stripe success link returns you to the prompt
                    pack download page.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 py-6 sm:grid-cols-[55px_1fr]">
                <p className="font-mono text-[9px] font-semibold tracking-[0.16em] text-rust">
                  03
                </p>

                <div>
                  <h3 className="font-display text-xl font-semibold">
                    Start adapting the prompts
                  </h3>

                  <p className="mt-2 leading-7 text-black/50">
                    Choose the prompt closest to your scene and adjust
                    the property details, camera direction and movement
                    before you generate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE OPTION */}
      <section className="bg-[#f7f5f1] py-16 md:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-white p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                  Want To Try It First?
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                  Start with the free prompt.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-black/50">
                  Download one example for free and see whether the
                  prompt structure is useful for the way you create
                  property animation.
                </p>
              </div>

              <Link
                href="/free-property-animation-prompt"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 font-semibold text-ink transition hover:border-rust hover:text-rust"
              >
                Get the free prompt
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}