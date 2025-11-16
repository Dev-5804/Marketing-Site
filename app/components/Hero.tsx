import Link from "next/link";
import { Container } from "@/app/components/Container";
import { Button } from "@/app/components/Button";

const channelChips = ["Narrative Lab", "Visual Systems", "Product Theater"];

const telemetryStats = [
  { label: "Launch window", value: "30 days" },
  { label: "Prototype latency", value: "< 72 hrs" },
  { label: "Stakeholder seats", value: "6 teams" },
];

const dropMoments = [
  { title: "Night Swim Briefings", detail: "Weekly immersion" },
  { title: "Palette Physics", detail: "System sync" },
  { title: "Latency Choreography", detail: "Motion lab" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50" id="studio">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{ backgroundImage: "radial-gradient(circle at top, rgba(255,238,213,0.55), transparent 60%)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 hidden w-px -translate-x-1/2 bg-linear-to-b from-transparent via-zinc-200/70 to-transparent lg:block"
        aria-hidden="true"
      />
      <Container className="relative grid gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-emerald-600">
              Studio transmission · 2025
            </p>
            <h1 className="text-5xl font-black uppercase leading-[1.05] tracking-tight text-black sm:text-6xl">
              Cult-classic digital launches engineered for ambitious founders.
            </h1>
            <p className="text-lg text-zinc-600 sm:max-w-2xl">
              We choreograph narrative, product, and visual systems so every drop feels inevitable. Less campaign, more ritual.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500 sm:flex-row">
            {channelChips.map((chip) => (
              <span key={chip} className="flex-1 rounded-full border border-zinc-200 bg-white px-4 py-3 text-center shadow-sm">
                {chip}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="bg-black text-white hover:bg-white hover:text-black">
              Start a project
            </Button>
            <Button variant="ghost" className="border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white sm:min-w-[200px]">
              View playbook
            </Button>
          </div>
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Calendar refresh · Mondays 08:00 GMT
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-4xl border border-zinc-200 bg-white/90 p-8 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.6)] backdrop-blur">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
              <span>Launch telemetry</span>
              <span className="inline-flex items-center gap-2 text-emerald-600">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Live
              </span>
            </div>
            <p className="mt-6 text-3xl font-semibold uppercase tracking-tight text-black">
              Launch-ready experiences in <span className="underline decoration-emerald-400/60">30 days</span>.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Research, writing, prototyping, and polish run as a single ritual so momentum never drops.
            </p>
            <ul className="mt-8 space-y-3">
              {telemetryStats.map((metric) => (
                <li
                  key={metric.label}
                  className="flex items-center justify-between rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-600"
                >
                  <span className="uppercase tracking-[0.3em] text-[0.65rem] text-zinc-500">{metric.label}</span>
                  <span className="text-base text-black">{metric.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-4xl border border-dashed border-zinc-200 bg-white/80 p-8">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
              <span>Drop roster</span>
              <span className="text-zinc-900">Week 47</span>
            </div>
            <ul className="mt-6 space-y-4">
              {dropMoments.map((moment) => (
                <li key={moment.title} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">{moment.detail}</p>
                    <p className="text-lg font-semibold text-black">{moment.title}</p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-base">↗</span>
                </li>
              ))}
            </ul>
            <Link
              href="#features"
              className="group mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-600"
            >
              Explore Feature Lab
              <span className="h-px w-10 bg-zinc-900 transition-all duration-200 group-hover:w-16" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
