import type { Metadata } from "next";
import Link from "next/link";

import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a Property Media Project",
  description:
    "Enquire with Real Estate Media House about property image enhancement, animation, Property Reels and development campaign content using your existing photography or renders.",
};

const packages = [
  {
    name: "Property Refresh",
    price: "$495 + GST",
    href: "/packages/property-refresh",
  },
  {
    name: "Property Campaign",
    price: "$895 + GST",
    href: "/packages/property-campaign",
  },
  {
    name: "Premium Campaign",
    price: "$1,295 + GST",
    href: "/packages/premium-campaign",
  },
  {
    name: "Property Reel Campaign",
    price: "$1,590 + GST",
    href: "/packages/property-reel-campaign",
  },
  {
    name: "Development Campaign",
    price: "Custom quote",
    href: "/packages/development-campaign",
  },
];

const interests = [
  "Lifestyle enhancement",
  "People & pets",
  "Food & entertaining",
  "Furniture & styling",
  "Lighting / day-to-night",
  "Landscape",
  "Pool",
  "Cars & activity",
  "Short animations",
  "Build / demolition transformation",
  "Finished Property Reel",
];

export default function EnquirePage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Start a project
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Have the property media?
              <span className="block text-white/35">
                Tell us what you want to do with it.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              Send us the details of the property, the media you already have
              and the transformations you&apos;re interested in. We&apos;ll
              review the project and help shape the right campaign.
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
                Before you enquire
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">
                You don&apos;t need to upload anything here.
              </h2>

              <p className="mt-5 leading-8 text-black/55">
                Tell us what you&apos;re working with first. Once we&apos;ve
                reviewed the enquiry, we&apos;ll arrange the best way for you to
                send through the photography, renders or footage.
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
                    50% deposit to begin. Remaining 50% before finished content
                    can be published or distributed.
                  </p>
                </div>

                <div className="border-b border-black/10 py-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-rust">
                    Not sure which package?
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
                  Package pages
                </p>

                <div className="mt-4 space-y-3">
                  {packages.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-between border-b border-black/10 py-3 transition hover:text-rust"
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
                        <option>Luxury Residential</option>
                        <option>Commercial</option>
                        <option>Development</option>
                        <option>Childcare / Education</option>
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
                        Not sure — recommend one
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
                      placeholder="For example: 20 professional listing photos, exterior drone photography, architectural renders, existing video footage..."
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
                      placeholder="Tell us what you want the property campaign to achieve, which scenes are most important, any launch timing, and anything else we should know."
                      className="w-full resize-y rounded-2xl border border-black/10 bg-[#f7f5f1] px-4 py-4 leading-7 outline-none transition focus:border-rust"
                    />
                  </div>
                </fieldset>

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