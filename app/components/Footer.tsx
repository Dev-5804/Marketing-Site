import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/app/components/Container";

const nav = [
  { label: "Studio", href: "#studio" },
  { label: "Work", href: "#work" },
  { label: "Voices", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const resources = [
  { label: "Capabilities", href: "#" },
  { label: "Process", href: "#" },
  { label: "Privacy", href: "#" },
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative isolate border-t border-white/10 bg-black text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_70%)]"
        aria-hidden
      />
      <Container className="relative flex flex-col gap-16 py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-lg space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">Aura Studio</p>
            <p className="text-3xl font-semibold leading-snug text-white">
              Launch partners for founders who want their product story to feel inevitable.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-zinc-400">
              <span>San Francisco</span>
              <span>•</span>
              <span>Remote-first</span>
              <span>•</span>
              <span>Since 2016</span>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] transition hover:border-white hover:bg-white hover:text-black"
            >
              Book intro
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid flex-1 gap-10 text-sm uppercase tracking-[0.25em] text-zinc-400 sm:grid-cols-2 lg:grid-cols-3">
            <FooterColumn title="Navigate" items={nav} />
            <FooterColumn title="Resources" items={resources} />
            <FooterColumn title="Social" items={socials} />
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.3em] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aura Studio. All rights reserved.</p>
          <p>Inquiries → studio@auragroup.com</p>
        </div>
      </Container>
    </footer>
  );
}

type Column = {
  title: string;
  items: { label: string; href: string }[];
};

function FooterColumn({ title, items }: Column) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">{title}</p>
      <ul className="space-y-3 text-sm uppercase tracking-[0.25em] text-zinc-400">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
