import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Images,
  Mail,
  MessageSquareText,
} from "lucide-react";

export default function EnquirePage() {
  return (
    <main>
      <section className="section-space bg-cream">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
              Request a quote
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-7xl">
              Tell us what your current property images are missing.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/60">
              Send us a few details about the property, the number of images and
              the type of transformation you need. We will review your request
              and prepare a tailored quote.
            </p>

            <div className="mt-10 grid gap-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand">
                  <Images size={20} />
                </div>

                <div>
                  <h2 className="font-semibold">Use the images you already have</h2>
                  <p className="mt-2 leading-7 text-black/60">
                    Share your current listing photos through a Google Drive,
                    Dropbox or other image folder link.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand">
                  <MessageSquareText size={20} />
                </div>

                <div>
                  <h2 className="font-semibold">Choose the transformation</h2>
                  <p className="mt-2 leading-7 text-black/60">
                    Select lifestyle enhancement, virtual staging, feature
                    highlights, social media content or a combination.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand">
                  <Mail size={20} />
                </div>

                <div>
                  <h2 className="font-semibold">Receive a tailored response</h2>
                  <p className="mt-2 leading-7 text-black/60">
                    We will review the request and contact you with suitable
                    options, timing and pricing.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">
                Prefer email?
              </p>

              <p className="mt-3 leading-7 text-black/60">
                You can also contact us directly at:
              </p>

              <a
                href="mailto:housetohomerealestatestudio@gmail.com"
                className="mt-3 block break-all font-semibold text-ink hover:text-clay"
              >
                housetohomerealestatestudio@gmail.com
              </a>
            </div>
          </div>

          <form
            action="mailto:housetohomerealestatestudio@gmail.com"
            method="post"
            encType="text/plain"
            className="grid gap-5 rounded-[2.5rem] bg-white p-7 shadow-soft md:p-10"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">
                Property enquiry
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Request a tailored quote
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Complete the details below and your email application will open
                with the information ready to send.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold">Your name</span>
                <input
                  required
                  name="Name"
                  type="text"
                  className="rounded-2xl border border-black/10 bg-cream/40 px-4 py-3.5 outline-none transition focus:border-clay"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold">Agency or business</span>
                <input
                  name="Agency"
                  type="text"
                  className="rounded-2xl border border-black/10 bg-cream/40 px-4 py-3.5 outline-none transition focus:border-clay"
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold">Email</span>
                <input
                  required
                  name="Email"
                  type="email"
                  className="rounded-2xl border border-black/10 bg-cream/40 px-4 py-3.5 outline-none transition focus:border-clay"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold">Phone</span>
                <input
                  name="Phone"
                  type="tel"
                  className="rounded-2xl border border-black/10 bg-cream/40 px-4 py-3.5 outline-none transition focus:border-clay"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">
                Property address or campaign name
              </span>
              <input
                name="Property"
                type="text"
                className="rounded-2xl border border-black/10 bg-cream/40 px-4 py-3.5 outline-none transition focus:border-clay"
              />
            </label>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold">
                  Approximate number of images
                </span>
                <select
                  name="Number of images"
                  className="rounded-2xl border border-black/10 bg-cream/40 px-4 py-3.5 outline-none transition focus:border-clay"
                >
                  <option value="">Select an option</option>
                  <option>1 to 5 images</option>
                  <option>6 images</option>
                  <option>7 to 10 images</option>
                  <option>11 to 20 images</option>
                  <option>More than 20 images</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold">Preferred timing</span>
                <select
                  name="Timing"
                  className="rounded-2xl border border-black/10 bg-cream/40 px-4 py-3.5 outline-none transition focus:border-clay"
                >
                  <option value="">Select an option</option>
                  <option>As soon as possible</option>
                  <option>Within one week</option>
                  <option>Within two weeks</option>
                  <option>Flexible timing</option>
                </select>
              </label>
            </div>

            <fieldset className="grid gap-3">
              <legend className="text-sm font-semibold">
                What type of transformation do you need?
              </legend>

              {[
                "Lifestyle enhancement with people, families or pets",
                "Virtual staging for empty or under-furnished rooms",
                "Architectural feature and finish highlights",
                "All of the above",
              ].map((option) => (
                <label
                  key={option}
                  className="flex items-start gap-3 rounded-2xl border border-black/10 p-4"
                >
                  <input
                    type="checkbox"
                    name="Transformation"
                    value={option}
                    className="mt-1 h-4 w-4 accent-[#b9785e]"
                  />
                  <span className="leading-6 text-black/70">{option}</span>
                </label>
              ))}
            </fieldset>

            <fieldset className="grid gap-3">
              <legend className="text-sm font-semibold">
                Would you like social media content included?
              </legend>

              {[
                "No, images only",
                "Yes, 10 social media posts",
                "Yes, 20 social media posts",
                "Yes, include short videos",
                "Please recommend the best option",
              ].map((option) => (
                <label
                  key={option}
                  className="flex items-start gap-3 rounded-2xl border border-black/10 p-4"
                >
                  <input
                    type="radio"
                    name="Social media"
                    value={option}
                    className="mt-1 h-4 w-4 accent-[#b9785e]"
                  />
                  <span className="leading-6 text-black/70">{option}</span>
                </label>
              ))}
            </fieldset>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">
                Link to your current property images
              </span>
              <input
                name="Image folder link"
                type="url"
                placeholder="Google Drive, Dropbox or listing link"
                className="rounded-2xl border border-black/10 bg-cream/40 px-4 py-3.5 outline-none transition focus:border-clay"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">
                Tell us about the property and likely buyer
              </span>
              <textarea
                name="Property details"
                rows={6}
                placeholder="For example: family home, downsizer property, prestige listing, pet-friendly home or off-the-plan development."
                className="resize-y rounded-2xl border border-black/10 bg-cream/40 px-4 py-3.5 outline-none transition focus:border-clay"
              />
            </label>

            <label className="flex items-start gap-3 rounded-2xl bg-cream p-4">
              <input
                required
                type="checkbox"
                name="Image permission"
                value="Confirmed"
                className="mt-1 h-4 w-4 accent-[#b9785e]"
              />

              <span className="text-sm leading-6 text-black/65">
                I confirm that I am authorised to share these property images
                for the purpose of preparing a quote and creating marketing
                concepts.
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-white transition hover:bg-clay"
            >
              Prepare email enquiry
              <ArrowRight size={18} />
            </button>

            <div className="flex items-start gap-3 border-t border-black/10 pt-5 text-sm leading-6 text-black/55">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-clay" />
              <p>
                We will review the image requirements before confirming the
                final quote, scope and timing.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="section-space bg-ink text-white">
        <div className="container-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
              Not ready to choose a package?
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Send us the images and tell us what feels flat.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              We can recommend the most useful mix of staging, lifestyle
              enhancement, feature imagery and social content.
            </p>
          </div>

          <Link
            href="mailto:housetohomerealestatestudio@gmail.com"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink"
          >
            Email House to Home
            <Mail size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}