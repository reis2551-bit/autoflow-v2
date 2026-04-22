"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const services = [
  { href: "/servicos/website", label: "Website em 7 dias" },
  { href: "/servicos/whatsapp-ia", label: "WhatsApp IA 24/7" },
  { href: "/servicos/rececionista-ia", label: "Rececionista IA" },
  { href: "/servicos/crm", label: "CRM e Pipeline" },
];

const navLinks = [
  { href: "/como-funciona", label: "Como Funciona" },
  { href: "/casos", label: "Casos" },
  { href: "/precos", label: "Preços" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
        scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {/* Services dropdown */}
          <li className="relative">
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onClick={() => setServicesOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Serviços
              <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-52 rounded-xl border border-[var(--border)] bg-[var(--bg-2)] p-2 shadow-xl"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                role="menu"
              >
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-lg px-3 py-2 text-sm text-[var(--text)] hover:bg-[var(--bg-3)] hover:text-[var(--accent)] transition-colors"
                    role="menuitem"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="whatsapp" size="sm" asChild>
            <Link
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> WhatsApp
            </Link>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link href="/precos">Ver Preços</Link>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-1">
            <p className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
              Serviços
            </p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-3 py-2.5 text-sm text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </Link>
            ))}
            <div className="my-2 border-t border-[var(--border)]" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Button variant="whatsapp" className="w-full" asChild>
                <Link
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  <WhatsAppIcon /> Falar pelo WhatsApp
                </Link>
              </Button>
              <Button variant="primary" className="w-full" asChild>
                <Link href="/precos" onClick={() => setMobileOpen(false)}>
                  Ver Preços
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
