import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "CRM e Pipeline — Autoflow",
  description: "CRM completo com histórico de clientes, pipeline visual e automações para micro-negócios.",
};

const features = [
  "Histórico completo de cada cliente — notas, última visita, valor total",
  "Pipeline visual — orçamento, agendado, realizado, por cobrar",
  "Pedido automático de avaliação Google 1h após serviço",
  "Follow-up automático de clientes inativos",
  "Dashboard com métricas do negócio em tempo real",
  "Relatório mensal de performance (chamadas, leads, conversão)",
  "Exportação de dados a qualquer momento",
];

export default function CRMPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        <section className="section-padding bg-[var(--bg-2)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-4xl mb-4" aria-hidden="true">📊</div>
            <h1 className="font-heading text-4xl font-bold text-[var(--text)] sm:text-5xl mb-4">
              CRM que te diz o que fazer a seguir.
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Sabe o que cada cliente gastou, quando foi a última vez e quem está por confirmar.
              Tudo num painel simples.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-6">
                O que inclui
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
              <p className="font-heading text-3xl font-bold text-[var(--text)] mb-1">Total</p>
              <p className="font-mono text-2xl font-bold text-[var(--accent)] mb-2">€379/mês</p>
              <p className="text-sm text-[var(--muted)] mb-6">+ setup €590 (único)</p>
              <Button variant="whatsapp" className="w-full" asChild>
                <Link href="/auditoria">Quero este serviço →</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
