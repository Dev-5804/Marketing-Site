import { Star } from "lucide-react";

import { Container } from "@/app/components/Container";
import { SectionHeading } from "@/app/components/SectionHeading";

const testimonials = [
  {
    quote:
      "Clean component architecture with proper separation of concerns. The TypeScript implementation is thorough and the Tailwind styling is efficient.",
    name: "Code Review",
    role: "Architecture Assessment",
    badge: "Component Design",
    result: "Modular & maintainable",
  },
  {
    quote:
      "Responsive design that works seamlessly across all breakpoints. Mobile navigation is smooth and the layout adapts beautifully from phone to desktop.",
    name: "UX Analysis",
    role: "Responsive Testing",
    badge: "Mobile-First",
    result: "All devices supported",
  },
  {
    quote:
      "Serverless API route implementation demonstrates backend integration patterns. Form validation on both client and server side shows attention to detail.",
    name: "Tech Review",
    role: "API Integration",
    badge: "Full Stack",
    result: "Production patterns used",
  },
];

const cardPalettes = [
  {
    glow: "from-fuchsia-400/50 via-purple-400/30 to-indigo-500/30",
    accent: "from-pink-500 via-purple-500 to-indigo-500",
  },
  {
    glow: "from-amber-300/45 via-orange-300/20 to-rose-300/30",
    accent: "from-amber-500 via-orange-500 to-rose-500",
  },
  {
    glow: "from-sky-300/40 via-cyan-300/20 to-emerald-300/25",
    accent: "from-sky-500 via-cyan-500 to-emerald-500",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden border-b border-zinc-200 bg-linear-to-b from-zinc-50 via-white to-zinc-100 py-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(244,244,255,0.8),transparent_60%)]"
        aria-hidden
      />
      <Container>
        <SectionHeading
          eyebrow="Highlights"
          title="Project features"
          description="A demonstration of modern web development practices and attention to detail in every aspect of the implementation."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const palette = cardPalettes[index % cardPalettes.length];

            return (
              <figure
                key={testimonial.name}
                className="group relative isolate overflow-hidden rounded-4xl border border-white/40 bg-white/80 p-[1.5px] shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur"
              >
                <div
                  className={`absolute inset-0 rounded-4xl bg-linear-to-br ${palette.glow} opacity-70 blur-3xl transition duration-700 group-hover:opacity-100`}
                  aria-hidden
                />
                <div className="relative flex h-full flex-col rounded-[30px] bg-white/95 p-8">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center justify-center rounded-full border border-zinc-200/70 bg-zinc-900/90 px-5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white">
                      {testimonial.badge}
                    </span>
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={`${testimonial.name}-star-${starIndex}`}
                          className="h-4 w-4 text-current"
                          strokeWidth={1.5}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex-1">
                    <blockquote className="text-2xl font-semibold leading-snug text-zinc-900">
                      “{testimonial.quote}”
                    </blockquote>

                    <p className="mt-6 text-sm font-medium uppercase tracking-[0.35em] text-zinc-500">
                      {testimonial.result}
                    </p>
                  </div>

                  <figcaption className="mt-6 flex flex-col border-t border-dashed border-zinc-200 pt-6 text-sm text-zinc-500">
                    <span className="text-base font-semibold text-zinc-900">{testimonial.name}</span>
                    <span className="mt-1 text-xs tracking-[0.2em] text-zinc-400">{testimonial.role}</span>
                  </figcaption>

                  <div
                    className={`mt-8 h-1 rounded-full bg-linear-to-r ${palette.accent} opacity-80 transition duration-500 group-hover:opacity-100`}
                  />
                </div>
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
