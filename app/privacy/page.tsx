import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
} from "@/lib/site";

export default function PrivacyPage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      <section className="bg-ink text-white">
        <div className="container-shell py-20 md:py-28">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
            Real Estate Media House
          </p>

          <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight md:text-7xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            How we handle your information, enquiries and client-supplied
            property media.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-shell max-w-3xl">
          <div className="space-y-12">
            <section>
              <h2 className="font-display text-2xl font-semibold">
                Information we collect
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                When you contact us, request a quote or engage Real Estate
                Media House for a project, we may collect information including
                your name, business name, email address, phone number, property
                details and information relating to your project.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Property images and project files
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Clients may provide property photography, renders, videos,
                logos, branding, floor plans and other project material for us
                to use in producing visual marketing content.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                These materials may be used to create image enhancements,
                lifestyle imagery, graphics, animations, Reels and other
                agreed project deliverables.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                AI-assisted creative services
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Some of our services may use artificial intelligence and other
                digital creative technologies to enhance images, introduce
                lifestyle elements, generate motion or create visual
                variations.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Project files may therefore be processed using third-party
                creative technology providers where required to provide the
                requested service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                How we use your information
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Information you provide may be used to respond to enquiries,
                prepare quotes, manage and produce projects, communicate with
                you, deliver completed work and maintain appropriate business
                records.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Sharing information
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                We do not sell your personal information or client-supplied
                property content.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                We may use third-party providers for website hosting, file
                storage, communication, analytics, image processing, video
                production and other services reasonably required to operate
                Real Estate Media House.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Storage and security
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                We take reasonable steps to protect personal information and
                project files against unauthorised access, misuse, loss or
                disclosure.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Project files may be retained for a reasonable period after a
                project is completed to support revisions, additional content
                requests or future work.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Portfolio and marketing
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Client-supplied property imagery is not automatically treated
                as approved for public portfolio use. Where appropriate, we
                may seek permission before displaying completed work on our
                website, social media or other marketing channels.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Cookies and analytics
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Our website may use cookies or analytics technologies to
                understand general website usage, maintain functionality and
                improve performance.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Access, correction or deletion
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                You may contact us to request access to personal information we
                hold about you, request a correction or ask us to delete
                information or project files where reasonably possible.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">
                Changes to this policy
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                We may update this privacy policy from time to time as our
                services, technologies or legal obligations change.
              </p>
            </section>

            <section className="rounded-[2rem] bg-white p-8 md:p-10">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                Privacy contact
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold">
                Questions about your information?
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Contact Real Estate Media House at:
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