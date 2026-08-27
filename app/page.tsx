import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CampaignBuilder from "@/components/CampaignBuilder";
import YouTubeVideoCarousel from "@/components/YouTubeVideoCarousel";

const featuredVideos = [
  {
    id: "residential-kitchen",
    title: "Residential Kitchen Animation",
    url: "https://www.youtube.com/shorts/5NP5Ay_3SBY",
    category: "Residential",
    orientation: "portrait" as const,
  },
  {
    id: "commercial-warehouse",
    title: "Commercial Warehouse Animation",
    url: "https://www.youtube.com/shorts/7YJSGYg99q0",
    category: "Commercial",
    orientation: "portrait" as const,
  },
  {
    id: "childcare-build",
    title: "Childcare Development Transformation",
    url: "https://www.youtube.com/shorts/Jvr3HdGMBAo",
    category: "Childcare",
    orientation: "portrait" as const,
  },
];

const propertyTypes = [
  {
    number: "01",
    title: "Residential",
    description:
      "Take beautiful property photography beyond rooms and features. Create the moments that help someone picture mornings, dinners, weekends and everyday life there.",
    href: "/residential-property-animation",
  },
  {
    number: "02",
    title: "Commercial",
    description:
      "Turn an empty commercial property into something the right operator can immediately understand, whether that is a gym, workshop, logistics space or creative studio.",
    href: "/commercial-property-visualisation",
  },
  {
    number: "03",
    title: "Childcare",
    description:
      "Help families, operators and stakeholders see more than a future building. Show the rooms active, the outdoor spaces alive and the centre becoming part of a community.",
    href: "/childcare-development-visualisation",
  },
];

const solutions = [
  {
    problem: "The photography is beautiful but the campaign still feels flat",
    solution:
      "Find the human story inside the strongest images and give people something more meaningful to imagine.",
    href: "/blog/how-to-make-a-property-listing-stand-out-without-another-photo-shoot",
  },
  {
    problem: "The listing has already been seen",
    solution:
      "Create a fresh visual and emotional angle from the photography you already paid for.",
    href: "/blog/how-to-refresh-a-property-campaign-that-has-gone-stale",
  },
  {
    problem: "The property is empty",
    solution:
      "Add furniture, activity, lifestyle or a relevant future use so people can understand how the space could feel.",
    href: "/blog/how-to-market-a-vacant-commercial-property",
  },
  {
    problem: "The campaign needs movement",
    solution:
      "Turn selected images into animated moments with a reason for every scene to be there.",
    href: "/blog/how-to-turn-commercial-property-photos-into-video",
  },
];

const storyMoments = [
  {
    feature: "Breakfast bar",
    story:
      "Sunday morning coffee while the house is still quiet and nobody needs to be anywhere yet.",
  },
  {
    feature: "Outdoor entertaining area",
    story:
      "Lunch turns into dinner because everyone is comfortable and nobody is ready to leave.",
  },
  {
    feature: "Light filled living room",
    story:
      "That warm patch of afternoon sun that quietly becomes the favourite place in the house.",
  },
  {
    feature: "Spare bedroom",
    story:
      "A nursery now. A study later. A room that changes as life changes.",
  },
];

const enhancedImageExamples = [
  {
    number: "01",
    title: "People",
    text: "Add believable human moments that help someone understand how a room, garden or exterior could feel in everyday use.",
  },
  {
    number: "02",
    title: "Furniture",
    text: "Add or refine furniture while keeping the architecture, proportions and layout of the property accurate.",
  },
  {
    number: "03",
    title: "Appliances & Décor",
    text: "Introduce selected appliances, styling and decorative details without redesigning the property itself.",
  },
  {
    number: "04",
    title: "Cars & Activity",
    text: "Add appropriate vehicles, people and movement to exterior scenes when they support the property story.",
  },
  {
    number: "05",
    title: "Landscape",
    text: "Refine lawns, planting and surrounding atmosphere while keeping the built property true.",
  },
  {
    number: "06",
    title: "Lighting & Atmosphere",
    text: "Use warmth, daylight, evening light and atmosphere to give an existing property image a different emotional moment.",
  },
];

const packageSummary = [
  {
    name: "Story Starter",
    price: "$595 + GST",
    href: "/packages/story-starter",
    images: "5 enhanced images",
    animation: "1 animation up to 10 seconds",
    story: "5 individual story hooks",
  },
  {
    name: "Story Builder",
    price: "$995 + GST",
    href: "/packages/story-builder",
    images: "8 enhanced images",
    animation: "2 animations up to 10 seconds each · up to 20 seconds total",
    story: "3 post narrative sequence",
  },
  {
    name: "Story Deep Dive",
    price: "$1,595 + GST",
    href: "/packages/story-deep-dive",
    images: "12 enhanced images",
    animation: "3 animations up to 10 seconds each · up to 30 seconds total",
    story: "5 post narrative arc",
  },
  {
    name: "The Full Story",
    price: "$1,990 + GST",
    href: "/packages/the-full-story",
    images: "12 enhanced images",
    animation:
      "3 to 4 animations up to 10 seconds each · up to 40 seconds total",
    story: "Complete lifecycle story + 20 to 30 second Reel",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f7f5f1] text-ink">
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="container-shell py-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Real Estate Media House
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                The photo shows
                <span className="block text-rust">the property.</span>
                <span className="block">We show the life inside it.</span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
                Your photography may already be beautiful. But beautiful
                photographs alone do not always give someone a reason to stop,
                feel something and picture themselves there.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/45">
                We turn existing property photography, renders and footage into
                enhanced visual stories, animation, captions and campaign
                moments that make the property easier to imagine and harder to
                forget.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/explore"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-brassBright"
                >
                  See the stories
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/enquire"
                  className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Show us your property
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft">
                <BeforeAfterSlider
                  before="/images/childcare/before-after-childcare/childcare-centre-new-build-before.jpg"
                  after="/images/childcare/before-after-childcare/childcare-centre-new-build-after.png"
                  beforeAlt="Property before childcare development visualisation"
                  afterAlt="Property transformed into a completed childcare development visual"
                />
              </div>

              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                Drag to see the property story change
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE POSITIONING */}
      <section className="bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Beautiful Is Only The Beginning
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                A beautiful room can still feel emotionally empty.
              </h2>
            </div>

            <div className="max-w-4xl">
              <p className="text-xl leading-9 text-black/60">
                A photograph can show polished stone, beautiful light and a
                generous breakfast bar.
              </p>

              <p className="mt-5 text-xl leading-9 text-black/60">
                A story helps someone picture Sunday morning there. Coffee on
                the bench. Bare feet. The house still quiet. Nothing urgent
                waiting for them.
              </p>

              <p className="mt-6 font-display text-3xl leading-10">
                That is where a property stops being a list of features and
                starts becoming a life someone can imagine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY EXAMPLES */}
      <section className="border-y border-black/10 bg-ink py-18 text-white md:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brassBright">
                Features Versus Feelings
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The listing tells them what it has.
                <span className="block text-rust">
                  The story shows them why they might want it.
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {storyMoments.map((item, index) => (
                <article
                  key={item.feature}
                  className="grid gap-4 border-b border-white/10 py-6 sm:grid-cols-[55px_0.75fr_1.25fr]"
                >
                  <p className="font-mono text-[9px] text-brassBright">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div>
                    <p className="text-sm text-white/30">The property has</p>

                    <h3 className="mt-1 font-display text-xl font-semibold">
                      {item.feature}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm text-white/30">The story becomes</p>

                    <p className="mt-1 font-display text-2xl leading-8 text-white/75">
                      {item.story}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED PROPERTY IMAGES */}
      <section className="bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Enhanced Property Images
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Keep the architecture true.
                <span className="block text-rust">
                  Build the life around it.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                We keep the architecture, layout and defining property elements
                accurate to the supplied image.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-black/50">
                Depending on the property and story, we can then add or refine
                people, furniture, appliances, décor, cars, landscaping,
                lighting and atmosphere.
              </p>

              <p className="mt-6 max-w-3xl font-display text-2xl leading-9">
                The aim is not to redesign the property. It is to add the
                details, atmosphere and human moments that help someone imagine
                life around it.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {enhancedImageExamples.map((item) => (
              <article
                key={item.number}
                className="rounded-[1.75rem] border border-black/10 bg-[#f7f5f1] p-7"
              >
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                  {item.number}
                </p>

                <h3 className="mt-5 font-display text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-black/50">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ROB + ROBYN */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-18 md:py-24">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Two Parts Of The Same Story
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              One builds the world.
              <span className="block text-rust">
                One finds the feeling inside it.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-black/10 bg-white p-8 md:p-10">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rust">
                Rob
              </p>

              <h3 className="mt-4 font-display text-4xl font-semibold">
                Makes the visual believable.
              </h3>

              <p className="mt-5 leading-8 text-black/50">
                Twenty years of architectural illustration and animation go
                into the craft, lighting, movement, atmosphere and visual truth
                of each scene.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The architecture and defining property elements stay true. The
                enhancement builds the life, atmosphere and visual story around
                them.
              </p>
            </article>

            <article className="rounded-[2rem] border border-rust bg-ink p-8 text-white md:p-10">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brassBright">
                Robyn
              </p>

              <h3 className="mt-4 font-display text-4xl font-semibold">
                Finds the moment people remember.
              </h3>

              <p className="mt-5 leading-8 text-white/55">
                With an interior design background and an instinct for story,
                Robyn looks beyond what is in the photograph to what someone
                could experience there.
              </p>

              <p className="mt-5 leading-8 text-white/55">
                That emotional thread becomes the hook, caption, sequence or
                script that gives the campaign its shape.
              </p>
            </article>
          </div>

          <p className="mt-10 font-display text-3xl leading-10 md:text-4xl">
            First, we bring the image to life. Then, we make it move.
            <span className="text-rust">
              {" "}
              Then, we tell you why it matters.
            </span>
          </p>
        </div>
      </section>

      {/* COMMERCIAL PROOF */}
      <section className="bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/images/commercial/warehouse-multiple-afters/warehouse-before.jpg"
                after="/images/commercial/warehouse-multiple-afters/warehouse-after-logistics.png"
                beforeAlt="Original vacant commercial warehouse"
                afterAlt="Vacant warehouse transformed into a logistics business concept"
              />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Commercial Property
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Do not ask the right tenant to imagine an empty box.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Show the logistics operator stock moving through the warehouse.
                Show the mechanic cars on hoists. Show the gym owner what
                training zones could feel like when the doors are open and the
                place is busy.
              </p>

              <p className="mt-5 leading-8 text-black/50">
                The property becomes relevant because the audience can finally
                see their own business inside it.
              </p>

              <Link
                href="/commercial-property-visualisation"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore commercial stories
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-18 md:py-24">
        <div className="container-shell">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Property Types
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Different properties.
                <span className="block text-rust">
                  Different stories worth telling.
                </span>
              </h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {propertyTypes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-[340px] flex-col rounded-[2rem] border border-black/10 bg-white p-8 transition hover:border-rust hover:shadow-soft"
              >
                <p className="font-mono text-xs font-semibold text-rust">
                  {item.number}
                </p>

                <h3 className="mt-10 font-display text-4xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-5 flex-1 leading-8 text-black/50">
                  {item.description}
                </p>

                <div className="mt-7 inline-flex items-center gap-2 font-semibold text-rust">
                  Explore {item.title.toLowerCase()}
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM SOLVING */}
      <section className="bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Start With What Is Missing
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                The problem may not be your photography.
              </h2>

              <p className="mt-5 leading-8 text-black/50">
                Sometimes the images are excellent. They just have not been
                given enough to say.
              </p>
            </div>

            <div className="space-y-4">
              {solutions.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group grid gap-5 rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-7 transition hover:border-rust hover:bg-white hover:shadow-soft sm:grid-cols-[70px_0.85fr_1.15fr_auto] sm:items-start md:p-8"
                >
                  <p className="font-mono text-xs font-semibold text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display text-2xl font-semibold">
                    {item.problem}
                  </h3>

                  <p className="leading-7 text-black/50">{item.solution}</p>

                  <ArrowRight
                    size={19}
                    className="text-rust transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with the image.
                <br />
                Find the story.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Send The Property Media",
                  text: "Supply the photography, renders or footage already created for the property.",
                },
                {
                  number: "02",
                  title: "Find The Moment",
                  text: "We look for the images, spaces and details with the strongest visual and emotional potential.",
                },
                {
                  number: "03",
                  title: "Build The Visual Story",
                  text: "Rob keeps the architecture and defining property elements accurate while enhancing selected scenes with details such as people, furniture, appliances, décor, cars, landscaping, lighting and atmosphere.",
                },
                {
                  number: "04",
                  title: "Make Selected Moments Move",
                  text: "Selected images become animated scenes of up to 10 seconds each, with the number of scenes determined by the package.",
                },
                {
                  number: "05",
                  title: "Give The Campaign Something To Say",
                  text: "Robyn develops the hooks, captions, sequencing and emotional angle that connect the visual assets into a story.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 rounded-[2rem] border border-black/10 bg-white p-7 sm:grid-cols-[80px_1fr] md:p-8"
                >
                  <p className="font-mono text-sm font-semibold text-rust">
                    {step.number}
                  </p>

                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-black/50">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOTION */}
      <section className="bg-ink py-18 text-white md:py-24">
        <div className="container-shell">
          <YouTubeVideoCarousel
            items={featuredVideos}
            eyebrow="Property Stories In Motion"
            heading="First, we bring the image to life. Then, we make it move. Then, we tell you why it matters."
            description="Each package animation can run up to 10 seconds per scene. Movement earns attention. Story gives that attention somewhere to go."
          />

          <div className="mt-10">
            <Link
              href="/video-library"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Explore property video
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL PROOF */}
      <section className="bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Residential Storytelling
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Do not just show where the furniture goes.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/55">
                Show why someone might want to spend time there. A quiet
                morning. Friends around for dinner. A bath at the end of a long
                day. A room that becomes part of a routine they have not even
                started yet.
              </p>

              <Link
                href="/image-library"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-rust"
              >
                Explore image stories
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[#f7f5f1] shadow-soft">
              <BeforeAfterSlider
                before="/property-images/website/lifestyle/bathroom-before.jpeg"
                after="/property-images/website/lifestyle/bathroom-after-lifestyle.jpeg"
                beforeAlt="Original residential bathroom property photograph"
                afterAlt="Residential bathroom transformed into lifestyle marketing content"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN BUILDER */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-18 md:py-24">
        <div className="container-shell">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              Build Your Story
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Choose how far you want the property story to go.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55">
              Start with a few stronger campaign moments or build a complete
              listing story from the first teaser through to the final Reel.
            </p>
          </div>

          <CampaignBuilder />
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-white py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Story Packages
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Every package includes
                <span className="block text-rust">
                  the visual and the story.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-black/50">
                Every included animated scene can run for up to 10 seconds.
                Higher packages simply give the campaign more individual scenes
                and more narrative depth.
              </p>
            </div>

            <div className="space-y-3">
              {packageSummary.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group block rounded-[1.75rem] border border-black/10 bg-[#f7f5f1] p-7 transition hover:border-rust hover:bg-white hover:shadow-soft"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-3xl font-semibold">
                        {item.name}
                      </h3>

                      <p className="mt-2 font-semibold text-rust">
                        {item.price}
                      </p>
                    </div>

                    <ArrowRight
                      size={19}
                      className="text-rust transition group-hover:translate-x-1"
                    />
                  </div>

                  <div className="mt-6 grid gap-3 border-t border-black/10 pt-6 md:grid-cols-3">
                    {[item.images, item.animation, item.story].map((detail) => (
                      <div key={detail} className="flex items-start gap-3">
                        <Check
                          size={15}
                          className="mt-1 shrink-0 text-rust"
                        />
                        <p className="text-sm leading-6 text-black/50">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}

              <Link
                href="/packages/story-custom"
                className="group block rounded-[1.75rem] border border-black/10 bg-ink p-7 text-white transition hover:border-rust"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-3xl font-semibold">
                      Story Custom
                    </h3>

                    <p className="mt-2 font-semibold text-brassBright">
                      Custom scope
                    </p>

                    <p className="mt-5 max-w-2xl leading-7 text-white/50">
                      Custom enhanced images, animation with scenes typically
                      up to 10 seconds each and narrative built around the
                      property, project stage and audience.
                    </p>
                  </div>

                  <ArrowRight
                    size={19}
                    className="shrink-0 text-brassBright transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
            >
              Compare all story packages
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="border-y border-black/10 bg-[#f7f5f1] py-18 md:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Property Marketing Guides
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Start with what the campaign is missing.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/55">
                Explore practical guides around listings that have gone quiet,
                vacant property, development marketing, different commercial
                audiences and getting more value from property photography you
                already have.
              </p>

              <Link
                href="/blog"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-rust"
              >
                Explore property marketing guides
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SISTER BRAND */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-rust">
                Sister Brand
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
                Need the property photographed first?
              </h2>

              <p className="mt-5 leading-8 text-black/50">
                Real Estate Media House begins with property media that already
                exists. Photography is handled separately through our sister
                real estate photography brand, RP Images.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-rust px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Real Estate Media House
          </p>

          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Your listing is competing with everything.
            <br />
            Give people something to feel.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Show us the property media you already have. We’ll find the visual
            moments and human story that can make the campaign mean more.
          </p>

          <Link
            href="/enquire"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Show us your property
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}