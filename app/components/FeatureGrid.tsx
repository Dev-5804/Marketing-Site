import { Container } from "@/app/components/Container";
import { SectionHeading } from "@/app/components/SectionHeading";
import { cn } from "@/lib/cn";

const pulseReadings = [
  { label: "Response time", value: "Fast" },
  { label: "Type safety", value: "100%" },
  { label: "Components", value: "9 total" },
  { label: "Test coverage", value: "Full" },
];

const features = [
  {
    title: "Responsive Design",
    description:
      "Mobile-first approach with carefully crafted breakpoints ensuring perfect display across all devices and screen sizes.",
    icon: "◎",
    badge: "UI Kit 01",
    tempo: "Mobile-first",
    note: "Design System",
    glow: "from-emerald-200/35 via-transparent to-sky-100/40",
  },
  {
    title: "TypeScript",
    description:
      "Full type safety throughout the codebase with TypeScript, ensuring code quality and catching errors during development.",
    icon: "△",
    badge: "Dev Kit 02",
    tempo: "Type-safe",
    note: "Development",
    glow: "from-amber-200/40 via-transparent to-rose-100/40",
  },
  {
    title: "Component Library",
    description:
      "Reusable, modular components built with React best practices. Clean, maintainable code that's easy to extend and customize.",
    icon: "✸",
    badge: "Component Kit 03",
    tempo: "Modular",
    note: "Architecture",
    glow: "from-indigo-200/40 via-transparent to-cyan-100/40",
  },
  {
    title: "API Integration",
    description:
      "Serverless API routes with Next.js demonstrating form handling, validation, and backend integration patterns.",
    icon: "∞",
    badge: "API Kit 04",
    tempo: "Serverless",
    note: "Backend Ready",
    glow: "from-fuchsia-200/40 via-transparent to-violet-100/40",
  },
];

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50 py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{ backgroundImage: "radial-gradient(circle at top, rgba(255,237,213,0.65), transparent 55%)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 hidden w-px -translate-x-1/2 bg-linear-to-b from-transparent via-zinc-200 to-transparent lg:block"
        aria-hidden="true"
      />
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="What's included"
          description="A showcase of modern frontend development practices and production-ready code patterns."
          align="center"
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-8">
            <div className="rounded-4xl border border-zinc-200 bg-white/90 p-8 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.7)] backdrop-blur">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
                <span>Tech Stack</span>
                <span className="inline-flex items-center gap-2 text-emerald-600">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Live
                </span>
              </div>
              <p className="mt-6 text-3xl font-semibold uppercase tracking-tight text-black">
                Development Overview
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                Built with modern tools and best practices. Clean code, performant, and ready to customize for your needs.
              </p>
              <ul className="mt-8 space-y-4">
                {pulseReadings.map((reading) => (
                  <li
                    key={reading.label}
                    className="flex items-center justify-between rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-600"
                  >
                    <span className="uppercase tracking-[0.25em] text-[0.65rem] text-zinc-500">
                      {reading.label}
                    </span>
                    <span className="text-base text-black">{reading.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-4xl border border-dashed border-zinc-200 bg-white/70 p-6 text-sm uppercase tracking-[0.35em] text-zinc-500">
              <p>Built with Next.js 15, TypeScript, and Tailwind CSS. Fully responsive and production-ready.</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => {
              const cardIndex = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={feature.title}
                  className="group relative overflow-hidden rounded-4xl border border-zinc-200 bg-white/90 p-7 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.6)] transition hover:-translate-y-1 hover:border-black"
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100",
                      "bg-linear-to-br",
                      feature.glow,
                    )}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-lg font-bold">
                        {feature.icon}
                      </span>
                      <div className="space-y-1">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-zinc-500">
                          {feature.badge}
                        </p>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-400">
                          {feature.note}
                        </p>
                      </div>
                    </div>
                    <p className="text-4xl font-black text-zinc-200">{cardIndex}</p>
                  </div>
                  <h3 className="relative mt-6 text-2xl font-bold uppercase tracking-tight text-black">
                    {feature.title}
                  </h3>
                  <p className="relative mt-4 text-base leading-relaxed text-zinc-600">
                    {feature.description}
                  </p>
                  <div className="relative mt-6 flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-zinc-500">
                    <span>{feature.tempo}</span>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200">
                        ↗
                      </span>
                      <span className="tracking-[0.25em]">Open log</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
