"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/app/components/Container";
import { Button } from "@/app/components/Button";
import { cn } from "@/lib/cn";

const links = [
  { label: "Studio", href: "#studio" },
  { label: "Work", href: "#features" },
  { label: "Voices", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="#" className="text-lg font-black uppercase tracking-[0.3em]">
          Marketing Site Template
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-semibold uppercase tracking-[0.25em] md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-zinc-400">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="ghost" className="text-xs">
            Book Intro
          </Button>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((state) => !state)}
        >
          <div className="grid gap-1.5">
            {[0, 1, 2].map((line) => (
              <span
                key={line}
                className={cn(
                  "block h-0.5 w-6 bg-black transition-all",
                  open && line === 1 ? "opacity-0" : "opacity-100",
                  open && line === 0 ? "translate-y-[5px] rotate-45" : "",
                  open && line === 2 ? "-translate-y-[5px] -rotate-45" : "",
                )}
              />
            ))}
          </div>
        </button>
      </Container>

      <div
        className={cn(
          "border-t border-zinc-200 bg-white transition-[max-height] duration-300 md:hidden",
          open ? "max-h-64" : "max-h-0 overflow-hidden",
        )}
      >
        <Container className="flex flex-col gap-6 py-8 text-sm font-semibold uppercase tracking-[0.25em]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-zinc-500"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="ghost" className="text-xs">
            Book Intro
          </Button>
        </Container>
      </div>
    </header>
  );
}
