import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Website em 7 Dias — Autoflow",
  description: "Website profissional para micro-negócios de serviços em Portugal. Pronto em 7 dias, otimizado para Google.",
};

const includes = [
  "Até 5 páginas (home, serviços, sobre, contacto, galeria)",
  "Mobile-first, carregamento rápido, SSL gratuito",
  "Google Business Profile configurado e otimizado",
  "Aparece em pesquisas locais e no Google Maps",
  "Formulário de contacto com notificação WhatsApp instantânea",
  "Domínio .pt e alojamento incluídos no 1.º ano",
  "Edição de textos e preços: 2× por mês",
  "Setup e migração do site atual incluídos",
];

export default function WebsiteServicePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        <section className="section-padding bg-[var(--bg-2)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-4xl mb-4" aria-hidden="true">🌐</div>
            <h1 className="font-heading text-4xl font-bold text-[var(--text)] sm:text-5xl mb-4">
              Website profissional em 7 dias.
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Feito para converter — os clientes encontram-te no Google e chegam já prontos
              a contratar. Sem técnicos, sem dores de cabeça.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-6">
                O que está incluído
              </h2>
              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-2">
                Disponível no plano
              </p>
              <p className="font-heading text-3xl font-bold text-[var(--text)] mb-1">Arrancar</p>
              <p className="font-mono text-2xl font-bold text-[var(--accent)] mb-2">€39/mês</p>
              <p className="text-sm text-[var(--muted)] mb-6">+ setup €199 (único)</p>
              <Button variant="whatsapp" className="w-full" asChild>
                <Link href="/auditoria">Começar agora →</Link>
              </Button>
              <p className="text-center text-xs text-[var(--muted)] mt-3">Garantia 30 dias</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
