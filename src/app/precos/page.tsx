"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { PricingCard, pricingPlans } from "@/components/PricingCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const included = [
  "Migração grátis do site atual",
  "Onboarding em pt-PT",
  "Sem fidelização — cancela quando quiseres",
  "Exportação de dados a qualquer momento",
  "Conformidade RGPD + AI Act",
];

const pricingFAQs = [
  { q: "Posso cancelar quando quiser?", a: "Sim, quando quiseres, com 30 dias de aviso. Sem contratos anuais, sem penalizações, sem letras pequenas." },
  { q: "Posso mudar de plano depois de começar?", a: "Sim. Subir de plano é imediato, pagas só a diferença pro-rata. Descer de plano ativa no ciclo seguinte." },
  { q: "O IVA está incluído nos preços?", a: "Os preços apresentados não incluem IVA. Faturamos com IVA à taxa legal em vigor (23%). Emitimos fatura mensal." },
  { q: "Como funciona a garantia de 30 dias?", a: "Se em 30 dias não receberes pelo menos 1 lead novo atribuído ao nosso sistema, devolvemos o valor do setup na totalidade. Sem perguntas." },
  { q: "Que métodos de pagamento aceitam?", a: "MB Way, transferência bancária e cartão. Faturação mensal automatizada." },
  { q: "O que acontece ao meu site se cancelar?", a: "Podes exportar tudo. O domínio é teu. Damos 30 dias após cancelamento para migração para outro alojamento." },
];

export default function PrecosPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="section-padding text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl font-bold text-[var(--text)] sm:text-5xl mb-4">
              Preços simples. Sem surpresas.
            </h1>
            <p className="text-xl text-[var(--muted)] mb-8">
              Custa menos do que perder 1 cliente. Garantia de 30 dias em todos os planos.
            </p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--bg-3)] p-1">
              <button
                onClick={() => setAnnual(false)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                  !annual ? "bg-[var(--accent)] text-white shadow" : "text-[var(--muted)] hover:text-[var(--text)]"
                )}
                aria-pressed={!annual}
              >
                Mensal
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                  annual ? "bg-[var(--accent)] text-white shadow" : "text-[var(--muted)] hover:text-[var(--text)]"
                )}
                aria-pressed={annual}
              >
                Anual{" "}
                <span className="ml-1 rounded-full bg-[var(--success)]/20 px-1.5 py-0.5 text-xs text-[var(--success)]">
                  −17%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.key} plan={plan} annual={annual} />
            ))}
          </div>

          {/* All plans include */}
          <div className="mx-auto max-w-7xl mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg-3)] p-6">
            <p className="mb-4 text-center text-sm font-semibold text-[var(--text)]">
              Todos os planos incluem:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-[var(--muted)]">
                  <Check className="h-4 w-4 text-[var(--success)]" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="section-padding bg-[var(--bg-2)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-8 text-center">
              Dúvidas sobre preços
            </h2>
            <Accordion type="single" collapsible>
              {pricingFAQs.map((faq, i) => (
                <AccordionItem key={i} value={`p-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
