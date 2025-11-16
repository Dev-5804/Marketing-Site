import Link from "next/link";
import { Container } from "@/app/components/Container";

const links = [
  { label: "Privacy", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <Container className="flex flex-col gap-6 text-sm uppercase tracking-[0.3em] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold">© {new Date().getFullYear()} Aura Studio</p>
        <div className="flex flex-wrap gap-6 text-xs">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-zinc-300">
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
