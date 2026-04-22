"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { PricingCard, pricingPlans } from "@/components/PricingCard";
import { cn } from "@/lib/utils";

const included = [
  "Migração grátis do site atual",
  "Onboarding em pt-PT",
  "Sem fidelização",
  "Exportação de dados a qualquer momento",
  "Conformidade RGPD + AI Act",
];

export function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      className="section-padding bg-[var(--bg-2)] border-y border-[var(--border)]"
      id="precos"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2
            id="pricing-heading"
            className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-4"
          >
            Custa menos do que perder 1 cliente.
          </h2>
          <p className="text-[var(--muted)] text-lg mb-8">
            Três planos. Tudo incluído. Sem surpresas.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--bg-3)] p-1">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                !annual
                  ? "bg-[var(--accent)] text-white shadow"
                  : "text-[var(--muted)] hover:text-[var(--text)]"
              )}
              aria-pressed={!annual}
            >
              Mensal
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                annual
                  ? "bg-[var(--accent)] text-white shadow"
                  : "text-[var(--muted)] hover:text-[var(--text)]"
              )}
              aria-pressed={annual}
            >
              Anual{" "}
              <span className="ml-1 rounded-full bg-[var(--success)]/20 px-1.5 py-0.5 text-xs text-[var(--success)]">
                setup grátis
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.key} plan={plan} annual={annual} />
          ))}
        </div>

        {/* All plans include */}
        <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg-3)] p-6">
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
      </div>
    </section>
  );
}
