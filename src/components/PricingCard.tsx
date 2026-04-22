import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { formatEuro } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface PricingPlan {
  key: string;
  name: string;
  monthly: number;
  annualMonthly: number;
  setup: number;
  featured?: boolean;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaVariant: "primary" | "whatsapp";
  ctaHref: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  annual: boolean;
}

export function PricingCard({ plan, annual }: PricingCardProps) {
  const price = annual ? plan.annualMonthly : plan.monthly;
  const setupPct = Math.round((plan.setup / (plan.monthly * 12)) * 100);

  return (
    <div
      id={`pricing-${plan.key}`}
      className={cn(
        "relative flex flex-col rounded-2xl border p-6 transition-all duration-200",
        plan.featured
          ? "border-[var(--accent)] bg-[var(--bg-3)] shadow-[0_0_40px_rgba(255,106,0,0.15)]"
          : "border-[var(--border)] bg-[var(--bg-2)] hover:border-[var(--border)]/80 hover:-translate-y-1"
      )}
    >
      {plan.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)] px-3 py-1 text-xs font-bold animate-[badge-pulse_2s_ease-in-out_infinite]">
            ⭐ Mais Escolhido
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-heading text-xl font-bold text-[var(--text)] mb-1">
          {plan.name}
        </h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed">
          {plan.description}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-end gap-1">
          <span className="font-mono text-4xl font-bold text-[var(--text)]">
            {formatEuro(price)}
          </span>
          <span className="text-sm text-[var(--muted)] pb-1">/mês</span>
        </div>
        {annual ? (
          <div className="mt-1 space-y-0.5">
            {plan.key === "arrancar" && (
              <p className="text-xs text-[var(--muted)]">
                Pago 3× por ano — {formatEuro(plan.monthly * 4)} de 4 em 4 meses
              </p>
            )}
            <p className="text-xs font-semibold text-[var(--success)]">
              🎁 Setup incluído — poupa {formatEuro(plan.setup)} ({setupPct}% do valor anual)
            </p>
          </div>
        ) : (
          <p className="text-xs text-[var(--muted)] mt-1">
            + setup {formatEuro(plan.setup)} (único)
          </p>
        )}
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" aria-hidden="true" />
            <span className="text-[var(--muted)]">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-3">
        <Button variant={plan.ctaVariant} className="w-full" asChild>
          <Link href={plan.ctaHref}>{plan.ctaLabel}</Link>
        </Button>
        <p className="text-center text-xs text-[var(--muted)]">
          Garantia 30 dias · Cancela quando quiseres
        </p>
      </div>
    </div>
  );
}

export const pricingPlans: PricingPlan[] = [
  {
    key: "arrancar",
    name: "Arrancar",
    monthly: siteConfig.pricing.arrancar.monthly,
    annualMonthly: siteConfig.pricing.arrancar.annualMonthly,
    setup: siteConfig.pricing.arrancar.setup,
    description:
      "Para quem quer começar a ser encontrado e parar de perder clientes no básico.",
    features: [
      "Website profissional pronto em 7 dias (até 5 páginas)",
      "Domínio incluído*",
      "Google Business Profile configurado + otimizado",
      "Aparece no Google Maps e pesquisas locais",
      "Formulário de contacto com notificação WhatsApp",
      "Mobile-first, SSL, carregamento rápido",
      "Edição de textos e preços: 2× por mês",
      "Suporte via WhatsApp em dias úteis",
    ],
    ctaLabel: "Começar pelo WhatsApp",
    ctaVariant: "whatsapp",
    ctaHref: `https://wa.me/${siteConfig.whatsappNumber}?text=Olá! Quero o plano Arrancar.`,
  },
  {
    key: "crescer",
    name: "Crescer",
    monthly: siteConfig.pricing.crescer.monthly,
    annualMonthly: siteConfig.pricing.crescer.annualMonthly,
    setup: siteConfig.pricing.crescer.setup,
    featured: true,
    description:
      "Para quem já perde clientes todos os dias e precisa que algo responda 24/7.",
    features: [
      "Tudo do Arrancar, mais:",
      "Assistente WhatsApp 24/7 em pt-PT",
      "Qualificação de cliente e orçamento automático",
      "Agendamento automático no teu Google Calendar",
      "SMS de confirmação e lembrete 24h antes",
      "Reativação automática de clientes antigos",
      "Painel único com todas as conversas",
      "Suporte prioritário — respondemos em 4h úteis",
    ],
    ctaLabel: "Quero este plano →",
    ctaVariant: "primary",
    ctaHref: `https://wa.me/${siteConfig.whatsappNumber}?text=Olá! Quero o plano Crescer.`,
  },
  {
    key: "total",
    name: "Total",
    monthly: siteConfig.pricing.total.monthly,
    annualMonthly: siteConfig.pricing.total.annualMonthly,
    setup: siteConfig.pricing.total.setup,
    description:
      "Para quem quer crescer sem contratar. Rececionista virtual + CRM completo.",
    features: [
      "Tudo do Crescer, mais:",
      "Rececionista de voz 24/7 em pt-PT natural",
      "CRM completo — histórico, notas, valor total",
      "Pipeline visual — orçamento, agendado, cobrar",
      "Avaliação Google automática 1h após serviço",
      "Relatório mensal de performance",
      "Dashboard com métricas em tempo real",
      "Suporte VIP — linha direta, resposta em 1h útil",
    ],
    ctaLabel: "Começar pelo WhatsApp",
    ctaVariant: "whatsapp",
    ctaHref: `https://wa.me/${siteConfig.whatsappNumber}?text=Olá! Quero o plano Total.`,
  },
];
