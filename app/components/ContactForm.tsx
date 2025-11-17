"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/app/components/Container";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Button } from "@/app/components/Button";

const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;

type FormState = "idle" | "loading" | "success" | "error";

const contactMeta = [
  { label: "Response time", value: "Under 48 hours" },
  { label: "Engagement range", value: "$60k–$250k" },
  { label: "Ideal stage", value: "Seed to Series B" },
];

const timeline = [
  {
    title: "Fit call",
    detail: "30 minutes to understand the product, constraints, and decision drivers.",
  },
  {
    title: "Scope sprint",
    detail: "1 week to prototype narrative, design language, and success metrics.",
  },
  {
    title: "Launch build",
    detail: "6–10 weeks with demos every Friday and async Loom recaps nightly.",
  },
];

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

    if (!payload.name || !payload.email || !payload.message) {
      setError("Please complete every field.");
      return;
    }

    if (!emailPattern.test(payload.email)) {
      setError("Use a valid email address.");
      return;
    }

    try {
      setFormState("loading");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setFormState("success");
      form.reset();
    } catch {
      setFormState("error");
      setError("Something went wrong. Try again.");
    } finally {
      setTimeout(() => setFormState("idle"), 4000);
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate border-b border-zinc-200 bg-linear-to-b from-white via-zinc-50 to-white py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(244,244,255,0.9),transparent_65%)]"
        aria-hidden
      />
      <Container className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what you are building"
            description="Within two days you will receive a fit read, a suggested working model, and an investment window."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {contactMeta.map((meta) => (
              <div
                key={meta.label}
                className="rounded-3xl border border-white/60 bg-white/80 p-4 text-xs uppercase tracking-[0.32em] text-zinc-500 shadow-[0_10px_40px_rgba(15,23,42,0.07)] backdrop-blur"
              >
                <p>{meta.label}</p>
                <p className="mt-3 text-base font-semibold tracking-[0.08em] text-zinc-900">{meta.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-4xl border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">How it unfolds</p>
            <ol className="mt-6 space-y-5 text-sm text-zinc-600">
              {timeline.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="text-xs font-semibold text-zinc-400">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-base font-semibold text-zinc-900">{step.title}</p>
                    <p className="mt-1 text-sm text-zinc-500">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative rounded-[34px] border border-white/60 bg-white/95 p-10 shadow-[0_35px_80px_rgba(15,23,42,0.08)] backdrop-blur"
        >
          <div className="absolute inset-x-6 top-6 h-10 rounded-full bg-linear-to-r from-emerald-200/60 via-cyan-200/60 to-blue-200/60 blur-3xl" aria-hidden />
          <div className="relative space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-2xl border border-zinc-900/30 bg-white/80 px-5 py-3 text-sm uppercase tracking-[0.2em] text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/50"
                placeholder="YOUR NAME"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-2xl border border-zinc-900/30 bg-white/80 px-5 py-3 text-sm uppercase tracking-[0.2em] text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/50"
                placeholder="studio@domain.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-2xl border border-zinc-900/30 bg-white/80 px-5 py-3 text-sm uppercase tracking-[0.2em] text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/50"
                placeholder="We are launching..."
              />
            </div>

            {error ? (
              <p className="text-sm font-medium text-rose-500" role="status">
                {error}
              </p>
            ) : null}

            <Button type="submit" disabled={formState === "loading"} className="w-full">
              {formState === "loading" ? "Sending" : formState === "success" ? "Sent" : "Send message"}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
