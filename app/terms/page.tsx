import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
  SITE_NAME,
} from "@/lib/site";

export default function TermsPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
            {SITE_NAME}
          </p>

          <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight md:text-7xl">
            Terms & Conditions
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            The terms that apply when you engage Real Estate Media House for
            property image enhancement, animation, Reels and other visual
            content.
          </p>
        </div>
      </section>

      {/* TERMS */}
      <section className="py-20 md:py-28">
        <div className="container-shell max-w-3xl">
          <div className="space-y-12">
            <section>
              <h2 className="font-display text-2xl font-semibold">
                Agreement to these terms
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                By accepting a quote, paying a deposit or otherwise instructing
                Real Estate Media House to begin work, you agree to these Terms
                & Conditions together with any project-specific scope, quote or
                written agreement provided to you.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Our services
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Real Estate Media House provides creative property marketing
                services including image enhancement, lifestyle enhancement,
                digital styling, animation, motion content, Property Reels,
                build transformations and other agreed visual content.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Unless specifically agreed otherwise, our services do not
                include social media management, caption writing, scheduling,
                posting or management of a client&apos;s social media accounts.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Client-supplied material
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Clients may provide photography, renders, video, logos,
                branding, plans, drawings, floor plans and other materials for
                use in a project.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                By supplying material to us, you confirm that you have the
                necessary rights, permissions or authority to provide that
                material and allow us to use and transform it for the agreed
                project.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Client-supplied intellectual property remains the property of
                the client or its relevant rights holder.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Payment terms
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                A 50% deposit is required before work begins on any project.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                The remaining 50% balance must be paid in full before the client
                may publish, post, distribute, advertise or otherwise use the
                completed Real Estate Media House content on social media,
                websites or any other marketing channel.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Drafts, previews, proofs and watermarked review versions are
                supplied for approval purposes only and may not be published,
                posted or distributed publicly before final payment has been
                received.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Unless otherwise agreed in writing, the deposit is applied to
                production time and project commencement and may become
                non-refundable once work has started.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Licence to use completed work
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                The client receives permission to use the final approved
                project deliverables once all amounts owing for the project have
                been paid in full.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Until full payment has been received, no licence is granted for
                public use, publication, advertising, posting or distribution
                of the completed creative work.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Any third-party assets, music, software, fonts, stock material,
                artificial intelligence services or other licensed elements
                incorporated into a project remain subject to their respective
                licence terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Intellectual property
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                We do not claim ownership of client-supplied photography,
                renders, architectural designs, branding, plans or other
                original client material.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Real Estate Media House retains ownership of its own creative
                processes, templates, working files, production techniques,
                internal systems and other proprietary materials used to create
                the final deliverables.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Unless expressly agreed otherwise, editable source files,
                project files, prompts, production files and internal working
                assets are not included in the final delivery.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Confidentiality and unreleased projects
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                We will take reasonable steps to treat client project material
                as confidential where it has not already been made public.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                This may include pre-launch listings, unreleased developments,
                architectural designs, construction material, renders and other
                commercially sensitive project information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Portfolio and social media permission
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Real Estate Media House will not automatically publish or share
                identifiable client work on our website, portfolio, social
                media accounts, advertising or other marketing channels.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                We will only publicly share identifiable client work where the
                client has given us permission to do so.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Permission to share one project does not give us ongoing
                permission to publish unrelated material or future projects.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                AI-assisted production
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Some services may use artificial intelligence and other digital
                creative technologies to modify images, introduce visual
                elements, create motion or assist with production.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Client-supplied files may be processed through third-party
                creative technology providers where reasonably required to
                complete the agreed work.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Creative interpretation
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Image enhancement and animation involve creative judgement.
                While we aim to create believable, high-quality visual content,
                certain elements such as people, furniture, landscaping,
                lighting, vehicles, weather, construction stages and movement
                may be artistic representations rather than exact depictions of
                existing physical conditions.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Clients are responsible for ensuring that completed marketing
                material is appropriate for their intended use and complies with
                any applicable property advertising, disclosure or industry
                requirements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Revisions
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                The number and scope of revisions included in a project will be
                determined by the selected package, quote or project agreement.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Requests outside the agreed project scope, significant changes
                after approval or additional versions may incur additional
                charges. We will advise you before undertaking additional paid
                work.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Turnaround times
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Any turnaround time provided is an estimate unless expressly
                agreed in writing as a fixed deadline.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Timelines may be affected by project complexity, client
                feedback, revision requests, incomplete source material,
                third-party services or circumstances outside our reasonable
                control.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Project delays
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Clients are responsible for providing required source material,
                approvals, information and feedback in a timely manner. Delays
                in receiving these items may result in corresponding delays to
                delivery.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Cancellation
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                If a client cancels a project after production has commenced,
                the deposit may be retained to cover work already completed,
                production time reserved and costs incurred.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Where completed work exceeds the value of the deposit, we may
                invoice for additional work performed up to the date of
                cancellation.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                File storage
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                We may retain project and production files for a reasonable
                period after delivery, but we do not guarantee indefinite file
                storage.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Clients should download and securely retain their final
                delivered files.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Limitation of liability
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                To the extent permitted by law, Real Estate Media House is not
                liable for indirect, consequential or special loss arising from
                the use of completed project content, delays, third-party
                platforms, social media performance, advertising results or
                decisions made based on visual marketing material.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Nothing in these terms excludes any rights or guarantees that
                cannot lawfully be excluded.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Changes to these terms
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                We may update these Terms & Conditions from time to time. The
                terms applicable to a project will generally be those in effect
                when the project is accepted unless otherwise agreed in
                writing.
              </p>
            </section>

            <section className="rounded-[2rem] bg-white p-8 md:p-10">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                Questions
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold">
                Questions about these terms?
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Contact {SITE_NAME} at:
              </p>

              <a
                href={CONTACT_EMAIL_LINK}
                className="mt-3 inline-block font-semibold text-rust transition hover:text-ink"
              >
                {CONTACT_EMAIL}
              </a>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}