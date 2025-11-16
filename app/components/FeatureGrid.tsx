import { Container } from "@/app/components/Container";
import { SectionHeading } from "@/app/components/SectionHeading";
import { cn } from "@/lib/cn";

const pulseReadings = [
  { label: "Drop cadence", value: "Biweekly" },
  { label: "Prototype latency", value: "< 72 hrs" },
  { label: "Stakeholder velocity", value: "6 teams" },
  { label: "Confidence score", value: "94%" },
];

const features = [
  {
    title: "Night Swim Briefings",
    description:
      "Weekly immersion where we surface the cultural signals shaping your category and draft the counter-move.",
    icon: "◎",
    badge: "Field Kit 01",
    tempo: "Slow burn clarity",
    note: "Narrative Lab",
    glow: "from-emerald-200/35 via-transparent to-sky-100/40",
  },
  {
    title: "Palette Physics",
    description:
      "We tune typography, color, and density like instruments so every deck, landing, and dashboard feels synched.",
    icon: "△",
    badge: "System Kit 02",
    tempo: "High fidelity",
    note: "Visual Engineering",
    glow: "from-amber-200/40 via-transparent to-rose-100/40",
  },
  {
    title: "Latency Choreography",
    description:
      "Micro-interactions stack in intentional beats—tension, release, resolve—guiding attention without fatigue.",
    icon: "✸",
    badge: "Motion Kit 03",
    tempo: "Zero drag",
    note: "Product Theater",
    glow: "from-indigo-200/40 via-transparent to-cyan-100/40",
  },
  {
    title: "Proof of Wonder",
    description:
      "Annotated components, token specs, and launch playbooks so shipping feels like continuing the performance.",
    icon: "∞",
    badge: "Delivery Kit 04",
    tempo: "Ship ready",
    note: "Delivery Lab",
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
          eyebrow="Offering"
          title="What we build"
          description="A multidisciplinary team translating brand ambition into tactile digital touchpoints."
          align="center"
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-8">
            <div className="rounded-4xl border border-zinc-200 bg-white/90 p-8 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.7)] backdrop-blur">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
                <span>Studio ops board</span>
                <span className="inline-flex items-center gap-2 text-emerald-600">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Live
                </span>
              </div>
              <p className="mt-6 text-3xl font-semibold uppercase tracking-tight text-black">
                Sprint telemetry desk
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                We treat every engagement like a broadcast—open channels, annotated drops, and artefacts that arrive ready to deploy.
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
              <p>Artifacts ship with notion docs, dev tokens, and a guided read-meeting. Nothing leaves half-baked.</p>
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
