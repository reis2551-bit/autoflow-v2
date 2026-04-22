import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { caseStudies } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Casos de Estudo — Resultados Reais",
  description: "Vê os resultados reais de negócios portugueses que automatizaram com a Autoflow.",
};

export default function CasosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h1 className="font-heading text-4xl font-bold text-[var(--text)] sm:text-5xl mb-4">
                Resultados reais. Números reais.
              </h1>
              <p className="text-xl text-[var(--muted)]">
                Negócios portugueses que pararam de perder clientes.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/casos/${cs.slug}`}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent-border)]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">
                        {cs.role} · {cs.location}
                      </p>
                      <h2 className="font-heading text-xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                        {cs.clientName}
                      </h2>
                    </div>
                    <span className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-dim)] px-2 py-0.5 text-xs font-medium text-[var(--accent)]">
                      Plano {cs.plan}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                    {cs.headline}
                  </p>

                  {/* Top 3 metrics */}
                  <div className="space-y-2">
                    {cs.metrics.slice(0, 3).map((m) => (
                      <div key={m.label} className="flex items-center justify-between text-xs">
                        <span className="text-[var(--muted)]">{m.label}</span>
                        <span className="font-bold text-[var(--success)]">{m.delta}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between text-sm">
                    <span className="text-[var(--accent)] font-medium group-hover:underline">
                      Ver caso completo →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-4">
                O próximo caso podes ser tu.
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-lg mx-auto">
                Marcamos uma chamada de 7 minutos e mostramos-te o que poderias ter daqui a 90 dias.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/auditoria">Marcar auditoria gratuita →</Link>
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
