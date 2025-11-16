import Link from "next/link";
import { Container } from "@/app/components/Container";
import { Button } from "@/app/components/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200" id="studio">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.08)_1px,_transparent_1px)] bg-[length:40px_40px]" />
      <Container className="relative grid gap-12 py-24 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-zinc-500">
            Independent Studio · 2025
          </p>
          <h1 className="text-5xl font-black uppercase leading-[1.05] tracking-tight text-black sm:text-6xl">
            Bold digital stories for ambitious founders.
          </h1>
          <p className="text-lg text-zinc-600 sm:max-w-xl">
            We craft minimal, high-converting brand moments that feel tactile, human, and unmistakably yours. Every layout is measured, every word intentional.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button>Start a project</Button>
            <Button variant="ghost" className="sm:min-w-[200px]">
              View Playbook
            </Button>
          </div>
          <div className="flex gap-10 text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
            <span>Brand</span>
            <span>Product</span>
            <span>Campaign</span>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-zinc-900 bg-black p-10 text-white">
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">Pulse</p>
            <p className="mt-4 text-4xl font-semibold leading-tight">
              Launch-ready experiences in <span className="underline">30 days</span>.
            </p>
            <p className="mt-6 text-sm text-zinc-400">
              A sprint framework combining research, narrative, and cinematic polish.
            </p>
          </div>
          <Link
            href="#features"
            className="group rounded-3xl border border-dashed border-zinc-300 p-8 text-left transition hover:border-black"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-zinc-400">Next</p>
            <p className="mt-4 text-2xl font-bold uppercase tracking-tight text-black">
              Explore recent builds
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.3em]">
              <span>Open case</span>
              <span className="h-px w-12 bg-black transition-all duration-200 group-hover:w-24" />
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
