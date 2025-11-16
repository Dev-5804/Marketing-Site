import { Container } from "@/app/components/Container";
import { SectionHeading } from "@/app/components/SectionHeading";

const features = [
  {
    title: "Narrative Systems",
    description:
      "Brand stories mapped to every scroll, from marquee line to microcopy, so nothing feels accidental.",
    icon: "//",
  },
  {
    title: "Precision Layouts",
    description:
      "Grid-locked compositions with brutalist energy, tuned for retina screens and investor decks alike.",
    icon: "⟁",
  },
  {
    title: "Interactive Sketches",
    description:
      "Lightweight interactions and choreographed reveals that guide attention without overwhelming it.",
    icon: "✷",
  },
  {
    title: "Advanced Handoff",
    description:
      "Component documentation, token specs, and Notion delivery that lets your team ship in days.",
    icon: "∞",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="border-b border-zinc-200 bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Offering"
          title="What we build"
          description="A multidisciplinary team translating brand ambition into tactile digital touchpoints."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group flex h-full flex-col justify-between rounded-3xl border border-zinc-200 p-8 transition hover:-translate-y-1 hover:border-black"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 text-lg font-bold">
                    {feature.icon}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">0{index + 1}</p>
                </div>
                <h3 className="mt-6 text-2xl font-bold uppercase tracking-tight text-black">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-600">
                  {feature.description}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                <span>Details</span>
                <span className="h-px flex-1 bg-zinc-200 transition group-hover:bg-black" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
