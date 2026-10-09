"use client";

import { useState } from "react";

const projectTypes = [
  "Kitchen",
  "Bathroom",
  "Laundry",
  "Walk-in robe",
  "TV / entertainment cabinetry",
  "Home office",
  "Custom joinery",
  "Whole-house cabinetry",
];

export default function EnquirePage() {
  const [submitting, setSubmitting] =
    useState(false);

  const [message, setMessage] =
    useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setSubmitting(true);
    setMessage("");

    const form =
      event.currentTarget;

    const formData =
      new FormData(form);

    try {
      const response = await fetch(
        "/api/joinery-enquiry",
        {
          method: "POST",
          body: formData,
        },
      );

      const data =
        await response.json();

      if (!response.ok) {
        setMessage(
          data.error ||
            "Something went wrong. Please try again.",
        );

        return;
      }

      setMessage(
        "Thanks — your project has been sent. We’ll review the sketches and send you a quote.",
      );

      form.reset();
    } catch {
      setMessage(
        "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-[#f4f1eb] text-[#181818]">
      <section className="bg-[#171717] text-white">
        <div className="container-shell py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
              Request a quote
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.96] md:text-7xl">
              Send us the sketch.
              <span className="block text-rust">
                We&apos;ll price the presentation.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Upload your cabinetry sketch,
              dimensions and project information.
              We&apos;ll quote based on how much
              joinery needs to be visualised and
              presented.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <aside>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                What to send
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">
                Keep it simple.
              </h2>

              <p className="mt-5 leading-8 text-black/55">
                Hand-drawn sketches are fine.
                Include whatever you already use
                to explain the job.
              </p>

              <div className="mt-8 space-y-4 text-black/55">
                <p>• Sketches or drawings</p>
                <p>• Dimensions</p>
                <p>• Plans if available</p>
                <p>• Finish selections</p>
                <p>• Inspiration images</p>
                <p>
                  • Notes about what the client
                  wants
                </p>
              </div>
            </aside>

            <div className="rounded-[2rem] bg-white p-7 shadow-soft md:p-10">
              <form
                onSubmit={handleSubmit}
                className="space-y-10"
              >
                <fieldset>
                  <legend className="font-display text-3xl font-semibold">
                    Your details
                  </legend>

                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    <Field
                      label="Name"
                      name="name"
                      type="text"
                      required
                    />

                    <Field
                      label="Business name"
                      name="businessName"
                      type="text"
                    />

                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                    />

                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="font-display text-3xl font-semibold">
                    Project
                  </legend>

                  <div className="mt-7">
                    <label
                      htmlFor="projectType"
                      className="text-sm font-semibold"
                    >
                      Project type
                    </label>

                    <select
                      id="projectType"
                      name="projectType"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-xl border border-black/10 bg-[#f7f5f1] px-4 py-3.5 outline-none transition focus:border-rust"
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select project type
                      </option>

                      {projectTypes.map(
                        (item) => (
                          <option
                            key={item}
                            value={item}
                          >
                            {item}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="font-display text-3xl font-semibold">
                    How much joinery needs to be
                    shown?
                  </legend>

                  <p className="mt-3 leading-7 text-black/50">
                    This helps us understand the
                    size of the quote.
                  </p>

                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="imageCount"
                        className="text-sm font-semibold"
                      >
                        Approx. number of joinery
                        images / views
                      </label>

                      <select
                        id="imageCount"
                        name="imageCount"
                        required
                        defaultValue=""
                        className="mt-2 w-full rounded-xl border border-black/10 bg-[#f7f5f1] px-4 py-3.5 outline-none transition focus:border-rust"
                      >
                        <option
                          value=""
                          disabled
                        >
                          Select
                        </option>

                        <option value="1-2">
                          1–2
                        </option>

                        <option value="3-4">
                          3–4
                        </option>

                        <option value="5-6">
                          5–6
                        </option>

                        <option value="7-10">
                          7–10
                        </option>

                        <option value="10+">
                          10+
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="panoramaCount"
                        className="text-sm font-semibold"
                      >
                        360° panorama spaces
                      </label>

                      <select
                        id="panoramaCount"
                        name="panoramaCount"
                        defaultValue="1"
                        className="mt-2 w-full rounded-xl border border-black/10 bg-[#f7f5f1] px-4 py-3.5 outline-none transition focus:border-rust"
                      >
                        <option value="1">
                          1 space
                        </option>

                        <option value="2">
                          2 spaces
                        </option>

                        <option value="3">
                          3 spaces
                        </option>

                        <option value="4+">
                          4+ spaces
                        </option>
                      </select>
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="font-display text-3xl font-semibold">
                    Presentation options
                  </legend>

                  <div className="mt-7 grid gap-3">
                    {[
                      {
                        name: "privateProjectPage",
                        label:
                          "Private client project page",
                      },
                      {
                        name: "qrCode",
                        label:
                          "QR code for the client",
                      },
                      {
                        name: "printableSheets",
                        label:
                          "Printable presentation sheets",
                      },
                      {
                        name: "ipadPresentation",
                        label:
                          "iPad-friendly presentation",
                      },
                    ].map((item) => (
                      <label
                        key={item.name}
                        className="flex cursor-pointer items-center gap-4 rounded-2xl border border-black/10 bg-[#f7f5f1] p-5 transition hover:border-rust"
                      >
                        <input
                          type="checkbox"
                          name={item.name}
                          value="yes"
                          className="h-4 w-4 accent-[#9c4a2e]"
                        />

                        <span className="font-semibold">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="font-display text-3xl font-semibold">
                    Upload sketches and project
                    files
                  </legend>

                  <p className="mt-3 leading-7 text-black/50">
                    Upload hand sketches, plans,
                    measurements, finish selections
                    or inspiration images.
                  </p>

                  <div className="mt-7">
                    <input
                      type="file"
                      name="files"
                      multiple
                      accept=".jpg,.jpeg,.png,.pdf,.webp"
                      className="block w-full rounded-2xl border border-dashed border-black/20 bg-[#f7f5f1] p-6 text-sm"
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="font-display text-3xl font-semibold">
                    Tell us about the project
                  </legend>

                  <textarea
                    name="projectDetails"
                    rows={7}
                    placeholder="For example: new kitchen, client wants shaker-style cabinetry, island seating for four, timber-look overheads, stone benchtop, presentation meeting next Friday..."
                    className="mt-7 w-full resize-y rounded-2xl border border-black/10 bg-[#f7f5f1] px-4 py-4 leading-7 outline-none transition focus:border-rust"
                  />
                </fieldset>

                <fieldset>
                  <legend className="font-display text-3xl font-semibold">
                    When do you need it?
                  </legend>

                  <div className="mt-7">
                    <Field
                      label="Preferred presentation / quote deadline"
                      name="deadline"
                      type="date"
                    />
                  </div>
                </fieldset>

                <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f5f1] p-6">
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                    Quote process
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-semibold">
                    We quote after reviewing the
                    design.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/50">
                    Pricing depends on the number
                    of cabinetry views, complexity
                    of the joinery, number of spaces
                    requiring 360° panoramas and
                    the presentation material
                    required.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-8">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex rounded-full bg-ink px-8 py-4 font-semibold text-white transition hover:bg-rust disabled:opacity-50"
                  >
                    {submitting
                      ? "Sending..."
                      : "Send sketches for quote"}
                  </button>

                  {message && (
                    <p className="mt-4 leading-7 text-black/60">
                      {message}
                    </p>
                  )}
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
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-semibold"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-black/10 bg-[#f7f5f1] px-4 py-3.5 outline-none transition focus:border-rust"
      />
    </div>
  );
}