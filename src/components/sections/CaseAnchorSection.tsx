import Link from "next/link";
import { Button } from "@/components/ui/button";

const metrics = [
  { label: "Chamadas perdidas/semana", before: "6–8", after: "1–2", delta: "−75%" },
  { label: "Clientes novos no mês", before: "2–3", after: "6–8", delta: "+120%" },
  { label: "Horas em WhatsApp/semana", before: "6–8h", after: "1h", delta: "−85%" },
];

export function CaseAnchorSection() {
  return (
    <section className="section-padding" aria-labelledby="case-anchor-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2
            id="case-anchor-heading"
            className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-4"
          >
            Resultados reais. Números reais.
          </h2>
          <p className="text-[var(--muted)] text-lg">
            Barbearia do António — Lisboa, Intendente
          </p>
        </div>

        {/* Before/after metrics */}
        <div className="mb-8 overflow-x-auto rounded-2xl border border-[var(--border)]">
          <table className="w-full text-sm" aria-label="Resultados antes e depois">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--bg-2)]">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  Métrica
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  Antes
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  Depois (90 dias)
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                  Delta
                </th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((m, i) => (
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

        {/* Quote */}
        <blockquote className="rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-8 mb-8">
          <p className="text-xl font-medium text-[var(--text)] italic leading-relaxed mb-4">
            &ldquo;Não percebo como vivi 11 anos sem isto. Tenho mais clientes, deixei de passar
            as noites ao telemóvel e o meu negócio aparece no Google quando antes não aparecia.
            Paguei o setup em 6 semanas.&rdquo;
          </p>
          <footer className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-sm font-bold text-white">
              A
            </div>
            <div>
              <p className="font-semibold text-[var(--text)]">António M.</p>
              <p className="text-sm text-[var(--muted)]">Barbeiro · Lisboa</p>
            </div>
          </footer>
        </blockquote>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/casos/barbearia-antonio">
              Ver caso completo →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
