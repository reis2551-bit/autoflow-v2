"use client";

import { useNiche } from "@/providers/NicheProvider";

const problems = [
  {
    icon: "🔨",
    title: "Estás a trabalhar — não atendes.",
    body: "Estás no telhado, debaixo do lavatório, com as mãos cheias. O telemóvel toca. Não podes atender. Acontece todos os dias.",
  },
  {
    icon: "⏱",
    title: "O cliente não espera.",
    body: "Ligou para ti. Não atendeste. Ligou ao seguinte. Em menos de 2 minutos, o trabalho que era teu já não é.",
  },
  {
    icon: "💸",
    title: "Perdes o trabalho.",
    body: "E quando respondes de volta — às 20h, depois de um dia longo — o cliente já foi. Todos os dias. Todos os dias.",
  },
];

export function ProblemSection() {
  const { activeNiche } = useNiche();

  return (
    <section className="section-padding bg-[var(--bg-2)]" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2
            id="problem-heading"
            className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-4"
          >
            Sabes isto melhor do que ninguém.
          </h2>
          <p className="text-[var(--accent)] font-medium text-lg leading-relaxed">
            {activeNiche.anchorPhrase}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {problems.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-3)] p-6 transition-all duration-200 hover:border-[var(--border)]/80 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-dim)] text-2xl" aria-hidden="true">
                {p.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-[var(--text)] mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
