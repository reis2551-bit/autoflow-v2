import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "WhatsApp IA 24/7 — Autoflow",
  description: "Assistente WhatsApp automático que responde 24/7 em português europeu para o teu negócio.",
};

const features = [
  "Responde em <2 minutos, 24 horas, 7 dias por semana",
  "Treinado com o teu vocabulário e tom de voz",
  "Qualifica o cliente antes de enviar orçamento",
  "Envia orçamento automático baseado nos teus preços",
  "Agenda marcações no teu Google Calendar",
  "SMS de confirmação ao cliente + lembrete 24h antes",
  "Reativação automática de clientes antigos",
  "Painel com todas as conversas do dia",
];

export default function WhatsAppIAPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        <section className="section-padding bg-[var(--bg-2)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-4xl mb-4" aria-hidden="true">💬</div>
            <h1 className="font-heading text-4xl font-bold text-[var(--text)] sm:text-5xl mb-4">
              WhatsApp IA — responde por ti, 24/7.
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              O cliente manda mensagem às 22h. A IA responde em segundos, em português europeu,
              com o teu tom. O cliente sente que falou contigo.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-6">
                Como funciona
              </h2>
              <ul className="space-y-3">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-2">
                Incluído no plano
              </p>
              <p className="font-heading text-3xl font-bold text-[var(--text)] mb-1">Crescer</p>
              <p className="font-mono text-2xl font-bold text-[var(--accent)] mb-2">€149/mês</p>
              <p className="text-sm text-[var(--muted)] mb-6">+ setup €349 (único)</p>
              <Button variant="primary" className="w-full" asChild>
                <Link href="/auditoria">Quero este serviço →</Link>
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
