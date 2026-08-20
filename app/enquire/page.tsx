import {
  ArrowRight,
  Check,
  Film,
  Images,
  Mail,
  Sparkles,
  Wand2,
} from "lucide-react";

import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
} from "@/lib/site";

const projectTypes = [
  {
    value: "Property Reels",
    title: "Property Reels",
    description: "Vertical video created from your existing property media.",
    icon: Film,
  },
  {
    value: "Property Animations",
    title: "Property Animations",
    description: "Cinematic movement created from still photography or renders.",
    icon: Sparkles,
  },
  {
    value: "Lifestyle Image Enhancement",
    title: "Lifestyle Enhancement",
    description: "Add people, activity and atmosphere to existing photography.",
    icon: Images,
  },
  {
    value: "Property Graphics",
    title: "Property Graphics",
    description: "Launch, campaign and feature graphics for your property.",
    icon: Wand2,
  },
];

const inputClass =
  "mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-ink outline-none transition placeholder:text-black/30 focus:border-rust";

export default function EnquirePage() {
  const formAction =
    `${CONTACT_EMAIL_LINK}?subject=` +
    encodeURIComponent("New Real Estate Media House project enquiry");

  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Start a project
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Send us the property.
                <span className="block text-white/35">
                  We&apos;ll bring it to life.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-lg leading-8 text-white/60">
                Tell us what you&apos;re working with and what you&apos;d like
                us to create. You can send the actual property files after we
                receive your enquiry.
              </p>

              <a
                href={CONTACT_EMAIL_LINK}
                className="mt-7 inline-flex items-center gap-3 text-white transition hover:text-brassBright"
              >
                <Mail size={18} />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-black/10 bg-white">
        <div className="container-shell py-7">
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-black/45">
            <span>Property photography</span>
            <span>Architectural renders</span>
            <span>Existing video footage</span>
            <span>Brand assets</span>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            {/* LEFT */}
            <aside>
              <div className="sticky top-28">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                  What happens next
                </p>

                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">
                  You already have the assets.
                </h2>

                <p className="mt-5 leading-7 text-black/55">
                  You don&apos;t need to organise another property shoot before
                  contacting us. Start with the photography, renders or footage
                  you already have.
                </p>

                <div className="mt-9 space-y-5">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                      <span className="font-mono text-[10px]">01</span>
                    </div>

                    <div>
                      <p className="font-semibold">Tell us about the property</p>
                      <p className="mt-1 text-sm leading-6 text-black/50">
                        Give us a quick overview of the project and what media
                        you already have.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                      <span className="font-mono text-[10px]">02</span>
                    </div>

                    <div>
                      <p className="font-semibold">Choose what you need</p>
                      <p className="mt-1 text-sm leading-6 text-black/50">
                        Reels, animation, lifestyle imagery, graphics or a
                        combination.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rust text-white">
                      <span className="font-mono text-[10px]">03</span>
                    </div>

                    <div>
                      <p className="font-semibold">We&apos;ll reply</p>
                      <p className="mt-1 text-sm leading-6 text-black/50">
                        We&apos;ll review your requirements and let you know the
                        best way to proceed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-black/10 pt-7">
                  <p className="text-sm text-black/45">
                    Prefer email?
                  </p>

                  <a
                    href={CONTACT_EMAIL_LINK}
                    className="mt-2 inline-flex items-center gap-2 font-semibold text-rust transition hover:text-ink"
                  >
                    <Mail size={17} />
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </aside>

            {/* RIGHT / FORM */}
            <div>
              <form
                action={formAction}
                method="post"
                encType="text/plain"
                className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8 md:p-10"
              >
                {/* CONTACT DETAILS */}
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                    01 / Your details
                  </p>

                  <h2 className="mt-3 font-display text-3xl font-semibold">
                    Who are we speaking with?
                  </h2>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <label className="text-sm font-semibold">
                      Name *
                      <input
                        type="text"
                        name="Name"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </label>

                    <label className="text-sm font-semibold">
                      Email *
                      <input
                        type="email"
                        name="Email"
                        required
                        autoComplete="email"
                        placeholder="you@agency.com.au"
                        className={inputClass}
                      />
                    </label>

                    <label className="text-sm font-semibold">
                      Phone
                      <input
                        type="tel"
                        name="Phone"
                        autoComplete="tel"
                        placeholder="0400 000 000"
                        className={inputClass}
                      />
                    </label>

                    <label className="text-sm font-semibold">
                      Agency / Company
                      <input
                        type="text"
                        name="Agency or Company"
                        autoComplete="organization"
                        placeholder="Agency or development company"
                        className={inputClass}
                      />
                    </label>
                  </div>
                </div>

                {/* PROPERTY */}
                <div className="mt-12 border-t border-black/10 pt-10">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                    02 / The property
                  </p>

                  <h2 className="mt-3 font-display text-3xl font-semibold">
                    Tell us what you&apos;re working on.
                  </h2>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <label className="text-sm font-semibold sm:col-span-2">
                      Property / Project
                      <input
                        type="text"
                        name="Property or Project"
                        placeholder="Property address, development name or project name"
                        className={inputClass}
                      />
                    </label>

                    <label className="text-sm font-semibold">
                      Property type
                      <select
                        name="Property Type"
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Select property type
                        </option>
                        <option value="Residential Listing">
                          Residential listing
                        </option>
                        <option value="Luxury Residential">
                          Luxury residential
                        </option>
                        <option value="Apartment">
                          Apartment
                        </option>
                        <option value="New Development">
                          New development
                        </option>
                        <option value="Commercial">
                          Commercial
                        </option>
                        <option value="Land">Land</option>
                        <option value="Other">Other</option>
                      </select>
                    </label>

                    <label className="text-sm font-semibold">
                      Current stage
                      <select
                        name="Current Stage"
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Select stage
                        </option>
                        <option value="Coming Soon">Coming soon</option>
                        <option value="Just Listed">Just listed</option>
                        <option value="On Market">Currently on market</option>
                        <option value="Development Launch">
                          Development launch
                        </option>
                        <option value="Pre-Sale">Pre-sale</option>
                        <option value="Other">Other</option>
                      </select>
                    </label>
                  </div>
                </div>

                {/* SERVICES */}
                <div className="mt-12 border-t border-black/10 pt-10">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                    03 / What should we create?
                  </p>

                  <h2 className="mt-3 font-display text-3xl font-semibold">
                    Select anything you&apos;re interested in.
                  </h2>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {projectTypes.map((project) => {
                      const Icon = project.icon;

                      return (
                        <label
                          key={project.value}
                          className="group cursor-pointer rounded-2xl border border-black/10 p-5 transition hover:border-rust/50 hover:bg-[#f7f5f1]"
                        >
                          <div className="flex items-start gap-4">
                            <input
                              type="checkbox"
                              name="Interested In"
                              value={project.value}
                              className="mt-1 h-4 w-4 accent-black"
                            />

                            <div>
                              <Icon
                                size={20}
                                strokeWidth={1.7}
                                className="text-rust"
                              />

                              <p className="mt-3 font-semibold">
                                {project.title}
                              </p>

                              <p className="mt-1 text-sm leading-6 text-black/45">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* EXISTING MEDIA */}
                <div className="mt-12 border-t border-black/10 pt-10">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                    04 / Your existing media
                  </p>

                  <h2 className="mt-3 font-display text-3xl font-semibold">
                    What do you already have?
                  </h2>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {[
                      "Professional property photography",
                      "Architectural renders",
                      "Video / drone footage",
                      "Floor plans",
                      "Agency branding / logo",
                      "Nothing ready yet",
                    ].map((item) => (
                      <label
                        key={item}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-black/10 px-4 py-3.5 text-sm"
                      >
                        <input
                          type="checkbox"
                          name="Existing Media"
                          value={item}
                          className="h-4 w-4 accent-black"
                        />

                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                {/* TIMING / BUDGET */}
                <div className="mt-12 border-t border-black/10 pt-10">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                    05 / Timing
                  </p>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <label className="text-sm font-semibold">
                      When do you need it?
                      <select
                        name="Timing"
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Select timing
                        </option>
                        <option value="As soon as possible">
                          As soon as possible
                        </option>
                        <option value="Within 3 days">Within 3 days</option>
                        <option value="Within 1 week">Within 1 week</option>
                        <option value="Within 2 weeks">Within 2 weeks</option>
                        <option value="Planning ahead">Planning ahead</option>
                      </select>
                    </label>

                    <label className="text-sm font-semibold">
                      Package / budget
                      <select
                        name="Package or Budget"
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="Starter - $495 + GST">
                          Starter — $495 + GST
                        </option>
                        <option value="Property Content - $795 + GST">
                          Property Content — $795 + GST
                        </option>
                        <option value="Premium Launch - $1,295 + GST">
                          Premium Launch — $1,295 + GST
                        </option>
                        <option value="Custom">Custom project</option>
                        <option value="Not sure">Not sure yet</option>
                      </select>
                    </label>
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="mt-12 border-t border-black/10 pt-10">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                    06 / Anything else?
                  </p>

                  <label className="mt-6 block text-sm font-semibold">
                    Tell us about the project
                    <textarea
                      name="Project Details"
                      rows={7}
                      placeholder="Tell us what you're marketing, what content you'd like created, any ideas you already have, and anything else we should know."
                      className={`${inputClass} resize-y`}
                    />
                  </label>
                </div>

                {/* SUBMIT */}
                <div className="mt-10 rounded-2xl bg-[#f7f5f1] p-5">
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                      <Check size={13} />
                    </div>

                    <p className="text-sm leading-6 text-black/50">
                      You don&apos;t need to upload your large property files
                      here. We&apos;ll arrange the best way to send them once
                      we&apos;ve reviewed your enquiry.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rust px-7 py-4 font-semibold text-white transition hover:bg-ink sm:w-auto"
                >
                  Send project enquiry
                  <ArrowRight size={18} />
                </button>

                <p className="mt-5 max-w-xl text-xs leading-5 text-black/40">
                  Submitting this form opens your default email application with
                  the project information addressed to Real Estate Media House.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="bg-ink px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
            Prefer to keep it simple?
          </p>

          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Send us an email.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/55">
            Tell us what property you&apos;re marketing and what media you
            already have.
          </p>

          <a
            href={CONTACT_EMAIL_LINK}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
          >
            <Mail size={18} />
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>
    </main>
  );
}