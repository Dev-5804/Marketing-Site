"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/app/components/Container";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Button } from "@/app/components/Button";

const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;

type FormState = "idle" | "loading" | "success" | "error";

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
    <section id="contact" className="border-b border-zinc-200 bg-white py-24">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what you are building"
          description="We respond within two business days with a fit assessment, draft timeline, and investment range."
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-2xl border border-black bg-transparent px-4 py-3 text-sm uppercase tracking-[0.2em] text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="YOUR NAME"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-2xl border border-black bg-transparent px-4 py-3 text-sm uppercase tracking-[0.2em] text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="studio@domain.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-2xl border border-black bg-transparent px-4 py-3 text-sm uppercase tracking-[0.2em] text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="We are launching..."
            />
          </div>

          {error ? <p className="text-sm text-red-500">{error}</p> : null}

          <Button type="submit" disabled={formState === "loading"} className="w-full">
            {formState === "loading" ? "Sending" : formState === "success" ? "Sent" : "Send message"}
          </Button>
        </form>
      </Container>
    </section>
  );
}
