import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { Button } from "@/components/ui/button";
import { getCaseStudyBySlug, caseStudies } from "@/data/caseStudies";
import { formatEuro } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return { title: "Caso não encontrado" };
  return {
    title: `${cs.clientName} — Caso de Estudo`,
    description: cs.headline,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="section-padding bg-[var(--bg-2)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4 text-sm text-[var(--muted)]">
              <Link href="/casos" className="hover:text-[var(--accent)] transition-colors">
                ← Casos
              </Link>
              <span>/</span>
              <span>{cs.clientName}</span>
            </div>
            <span className="inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-dim)] px-3 py-1 text-xs font-medium text-[var(--accent)] mb-4">
              {cs.role} · {cs.location} · Plano {cs.plan}
            </span>
            <h1 className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-4">
              {cs.clientName}
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed">
              {cs.subheadline}
            </p>
          </div>
        </section>

        {/* Before/After metrics */}
        <section className="section-padding">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-6">
              Os números antes e depois
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
              <table className="w-full text-sm" aria-label="Métricas antes e depois">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--bg-2)]">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Métrica</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Antes</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-widest text-[var(--success)]">Depois (90 dias)</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">Delta</th>
                  </tr>
                </thead>
                <tbody>
                  {cs.metrics.map((m, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-[var(--bg-3)]" : "bg-[var(--bg-2)]"}>
                      <td className="px-4 py-3 text-[var(--text)]">{m.label}</td>
                      <td className="px-4 py-3 text-center text-[var(--muted)]">{m.before}</td>
                      <td className="px-4 py-3 text-center font-semibold text-[var(--success)]">{m.after}</td>
                      <td className="px-4 py-3 text-center font-bold text-[var(--accent)]">{m.delta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Narrative */}
        <section className="section-padding bg-[var(--bg-2)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-8">
              O que aconteceu, semana a semana
            </h2>
            <div className="space-y-8">
              {[
                { label: "Semana 1", text: cs.narrative.week1 },
                { label: "Semanas 2–3", text: cs.narrative.weeks2to3 },
                { label: "Mês 1", text: cs.narrative.month1 },
                { label: "Meses 2–3", text: cs.narrative.months2to3 },
              ].map((act) => (
                <div key={act.label} className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex h-8 items-center rounded-full bg-[var(--accent-dim)] px-3 text-xs font-bold text-[var(--accent)]">
                      {act.label}
                    </span>
                  </div>
                  <p className="text-[var(--muted)] leading-relaxed pt-1">{act.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <blockquote className="rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-dim)] p-8">
              <p className="text-xl font-medium text-[var(--text)] italic leading-relaxed mb-6">
                &ldquo;{cs.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-sm font-bold text-white">
                  {cs.clientName[0]}
                </div>
                <div>
                  <p className="font-semibold text-[var(--text)]">{cs.clientName}</p>
                  <p className="text-sm text-[var(--muted)]">{cs.role} · {cs.location}</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Financial breakdown */}
        <section className="section-padding bg-[var(--bg-2)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-6">
              O breakdown financeiro
            </h2>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-3)] p-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--muted)]">Receita extra/mês</span>
                <span className="font-bold text-[var(--success)]">+{formatEuro(cs.financialBreakdown.revenueExtra)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--muted)]">Custo plano {cs.plan}/mês</span>
                <span className="font-mono text-[var(--muted)]">−{formatEuro(cs.financialBreakdown.planCost)}</span>
              </div>
              <div className="border-t border-[var(--border)] pt-3 flex justify-between">
                <span className="font-semibold text-[var(--text)]">Lucro líquido/mês</span>
                <span className="font-mono font-bold text-2xl text-[var(--success)]">
                  +{formatEuro(cs.financialBreakdown.revenueExtra - cs.financialBreakdown.planCost)}
                </span>
              </div>
              <p className="text-xs text-[var(--muted)] pt-2">
                Setup de {formatEuro(cs.financialBreakdown.setupCost)} pago em{" "}
                <strong className="text-[var(--accent)]">{cs.financialBreakdown.paybackDays} dias</strong>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding text-center">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-4">
              Queres os teus próprios números daqui a 90 dias?
            </h2>
            <p className="text-[var(--muted)] mb-8">
              Auditoria gratuita de 7 minutos. Mostramos o que podes esperar para o teu negócio específico.
            </p>
            <Button variant="primary" size="xl" asChild>
              <Link href="/auditoria">Marcar auditoria →</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
