import type { Metadata } from "next";
import Link from "next/link";

import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a Property Media Project",
  description:
    "Enquire with Real Estate Media House about enhanced property images, animation, storytelling and finished property campaign content using your existing photography, renders or footage.",
};

const packages = [
  {
    name: "Story Starter",
    price: "$595 + GST",
    href: "/packages/story-starter",
  },
  {
    name: "Story Builder",
    price: "$995 + GST",
    href: "/packages/story-builder",
  },
  {
    name: "Story Deep Dive",
    price: "$1,595 + GST",
    href: "/packages/story-deep-dive",
  },
  {
    name: "The Full Story",
    price: "$1,990 + GST",
    href: "/packages/the-full-story",
  },
  {
    name: "Story Custom",
    price: "Custom scope",
    href: "/packages/story-custom",
  },
];

const interests = [
  "Enhanced property images",
  "People & activity",
  "Furniture & styling",
  "Appliances & décor",
  "Lighting & atmosphere",
  "Landscape & planting",
  "Cars & vehicles",
  "Lifestyle storytelling",
  "Property animation",
  "Development transformation",
  "Finished vertical Reel",
  "Hooks, captions & sequencing",
];

export default function EnquirePage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Start A Project
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Have the property media?
              <span className="block text-white/35">
                Tell us what the campaign needs next.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              Send us the property details, the photography, renders or footage
              you already have, and what you want people to notice, understand
              or feel.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            {/* LEFT */}
            <aside>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Before You Enquire
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">
                You don&apos;t need to upload anything here.
              </h2>

              <p className="mt-5 leading-8 text-black/55">
                Tell us what you&apos;re working with first. Once we&apos;ve
                reviewed the enquiry, we&apos;ll arrange the best way for you
                to send through the photography, renders or footage.
              </p>

              <div className="mt-9 border-t border-black/10">
                <div className="border-b border-black/10 py-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-rust">
                    Email
                  </p>

                  <a
                    href={CONTACT_EMAIL_LINK}
                    className="mt-2 inline-block font-display text-2xl font-semibold"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div className="border-b border-black/10 py-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-rust">
                    Payment
                  </p>

                  <p className="mt-2 leading-7 text-black/55">
                    50% deposit to begin. The remaining 50% is due before
                    finished content may be published, posted, distributed,
                    advertised or otherwise used.
                  </p>
                </div>

                <div className="border-b border-black/10 py-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-rust">
                    Not Sure Which Package?
                  </p>

                  <Link
                    href="/packages"
                    className="mt-2 inline-block font-semibold text-rust"
                  >
                    Compare all packages
                  </Link>
                </div>
              </div>

              <div className="mt-10">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
                  Package Pages
                </p>

                <div className="mt-4 space-y-3">
                  {packages.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-between gap-5 border-b border-black/10 py-3 transition hover:text-rust"
                    >
                      <span>{item.name}</span>

                      <span className="text-sm text-black/40">
                        {item.price}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* FORM */}
            <div className="rounded-[2rem] bg-white p-7 shadow-soft md:p-10">
              <form
                action={`mailto:${CONTACT_EMAIL}`}
                method="post"
                encType="text/plain"
                className="space-y-10"
              >
                {/* CONTACT */}
                <fieldset>
                  <legend className="font-display text-3xl font-semibold">
                    Your details
                  </legend>

                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    <Field
                      label="Name"
                      name="Name"
                      type="text"
                      required
                    />

                    <Field
                      label="Agency / company"
                      name="Agency"
                      type="text"
                    />

                    <Field
                      label="Email"
                      name="Email"
                      type="email"
                      required
                    />

                    <Field
                      label="Phone"
                      name="Phone"
                      type="tel"
                    />
                  </div>
                </fieldset>

                {/* PROJECT */}
                <fieldset>
                  <legend className="font-display text-3xl font-semibold">
                    Property / project
                  </legend>

                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="property-type"
                        className="text-sm font-semibold"
                      >
                        Property type
                      </label>

                      <select
                        id="property-type"
                        name="Property type"
                        required
                        defaultValue=""
                        className="mt-2 w-full rounded-xl border border-black/10 bg-[#f7f5f1] px-4 py-3.5 outline-none transition focus:border-rust"
                      >
                        <option value="" disabled>
                          Select property type
                        </option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Childcare</option>
                        <option>Development</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <Field
                      label="Property suburb / location"
                      name="Property location"
                      type="text"
                    />
                  </div>
                </fieldset>

                {/* PACKAGE */}
                <fieldset>
                  <legend className="font-display text-3xl font-semibold">
                    Which package are you considering?
                  </legend>

                  <p className="mt-3 leading-7 text-black/50">
                    Choose one, or select Not sure if you&apos;d like us to
                    recommend the best fit.
                  </p>

                  <div className="mt-7 grid gap-3">
                    {packages.map((item) => (
                      <label
                        key={item.name}
                        className="flex cursor-pointer items-center justify-between gap-5 rounded-2xl border border-black/10 bg-[#f7f5f1] p-5 transition hover:border-rust"
                      >
                        <span className="flex items-center gap-4">
                          <input
                            type="radio"
                            name="Package"
                            value={item.name}
                            className="h-4 w-4 accent-[#9c4a2e]"
                          />

                          <span className="font-semibold">
                            {item.name}
                          </span>
                        </span>

                        <span className="text-sm text-black/40">
                          {item.price}
                        </span>
                      </label>
                    ))}

                    <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-black/10 bg-[#f7f5f1] p-5 transition hover:border-rust">
                      <input
                        type="radio"
                        name="Package"
                        value="Not sure"
                        className="h-4 w-4 accent-[#9c4a2e]"
                      />

                      <span className="font-semibold">
                        Not sure, recommend one
                      </span>
                    </label>
                  </div>
                </fieldset>

                {/* INTERESTS */}
                <fieldset>
                  <legend className="font-display text-3xl font-semibold">
                    What would you like to explore?
                  </legend>

                  <p className="mt-3 leading-7 text-black/50">
                    Select as many as you like.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {interests.map((item) => (
                      <label
                        key={item}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-black/10 px-4 py-4 transition hover:border-rust"
                      >
                        <input
                          type="checkbox"
                          name="Interested in"
                          value={item}
                          className="h-4 w-4 accent-[#9c4a2e]"
                        />

                        <span className="text-sm">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* MEDIA */}
                <fieldset>
                  <legend className="font-display text-3xl font-semibold">
                    What media do you already have?
                  </legend>

                  <div className="mt-7">
                    <textarea
                      name="Existing media"
                      rows={4}
                      placeholder="For example: professional listing photos, exterior photography, architectural renders, drone images or existing video footage..."
                      className="w-full resize-y rounded-2xl border border-black/10 bg-[#f7f5f1] px-4 py-4 leading-7 outline-none transition focus:border-rust"
                    />
                  </div>
                </fieldset>

                {/* STORY */}
                <fieldset>
                  <legend className="font-display text-3xl font-semibold">
                    What should people see or feel?
                  </legend>

                  <p className="mt-3 leading-7 text-black/50">
                    This can be practical or emotional. Tell us what the next
                    piece of campaign content needs to communicate.
                  </p>

                  <div className="mt-7">
                    <textarea
                      name="Story direction"
                      rows={5}
                      placeholder="For example: make the empty living room feel warm and lived in, help buyers imagine entertaining outside, show a gym operator how the warehouse could work, or communicate the future childcare centre before completion..."
                      className="w-full resize-y rounded-2xl border border-black/10 bg-[#f7f5f1] px-4 py-4 leading-7 outline-none transition focus:border-rust"
                    />
                  </div>
                </fieldset>

                {/* DETAILS */}
                <fieldset>
                  <legend className="font-display text-3xl font-semibold">
                    Tell us about the project
                  </legend>

                  <div className="mt-7">
                    <textarea
                      name="Project details"
                      rows={7}
                      placeholder="Tell us what the campaign needs to achieve, which scenes are most important, any launch timing, and anything else we should know."
                      className="w-full resize-y rounded-2xl border border-black/10 bg-[#f7f5f1] px-4 py-4 leading-7 outline-none transition focus:border-rust"
                    />
                  </div>
                </fieldset>

                {/* SCOPE */}
                <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-6">
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                    Clear Scope
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-semibold">
                    We create the story. You decide where it lives.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/50">
                    Our packages can include enhanced visuals, animation,
                    narrative, captions and sequencing. We do not manage your
                    accounts, schedule posts or run your day to day social
                    presence.
                  </p>
                </div>

                {/* SUBMIT */}
                <div className="border-t border-black/10 pt-8">
                  <button
                    type="submit"
                    className="inline-flex rounded-full bg-ink px-8 py-4 font-semibold text-white transition hover:bg-rust"
                  >
                    Send project enquiry
                  </button>

                  <p className="mt-4 max-w-2xl text-xs leading-6 text-black/40">
                    After we review your enquiry, we&apos;ll contact you about
                    the scope and the best way to send through your property
                    media.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  const id = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-semibold"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-black/10 bg-[#f7f5f1] px-4 py-3.5 outline-none transition focus:border-rust"
      />
    </div>
  );
}