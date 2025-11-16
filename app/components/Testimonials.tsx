import { Container } from "@/app/components/Container";
import { SectionHeading } from "@/app/components/SectionHeading";

const testimonials = [
  {
    quote:
      "Aura treated our seed-stage launch like a museum installation. Every microinteraction told the story better than any pitch deck could.",
    name: "Maya Figueroa",
    role: "Founder, Lumen Bio",
  },
  {
    quote:
      "We handed them chaos and they returned a unified system—design, language, and motion in perfect sync.",
    name: "Theo Patterson",
    role: "COO, Relay Robotics",
  },
  {
    quote:
      "Investors mentioned the site in diligence calls. It captured our seriousness without feeling corporate.",
    name: "Dina Solano",
    role: "CEO, Parallel",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-zinc-200 bg-zinc-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Proof"
          title="Voices from the build"
          description="We partner with technical founders, venture studios, and cultural operators who expect craft at every layer."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 shadow-[inset_0_0_0_1px_#f4f4f5]"
            >
              <blockquote className="text-lg font-medium text-black">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
                <p className="font-semibold text-black">{testimonial.name}</p>
                <p className="mt-2 text-xs tracking-[0.2em] text-zinc-400">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
