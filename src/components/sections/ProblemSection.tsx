"use client";

import { useNiche } from "@/providers/NicheProvider";
import { motion } from "framer-motion";

const problems = [
  {
    step: "01",
    title: "Estás a trabalhar — não atendes.",
    body: "Estás no telhado, debaixo do lavatório, com as mãos cheias. O telemóvel toca. Não podes atender. Acontece todos os dias.",
  },
  {
    step: "02",
    title: "O cliente não espera.",
    body: "Ligou para ti. Não atendeste. Ligou ao seguinte. Em menos de 2 minutos, o trabalho que era teu já não é.",
  },
  {
    step: "03",
    title: "Perdes o trabalho.",
    body: "E quando respondes de volta — às 20h, depois de um dia longo — o cliente já foi. Todos os dias. Todos os dias.",
  },
];

export function ProblemSection() {
  const { activeNiche } = useNiche();

  return (
    <section className="section-padding bg-[var(--bg-2)] border-y border-[var(--border)]" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
            O problema
          </p>
          <h2
            id="problem-heading"
            className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-5"
          >
            Sabes isto melhor do que ninguém.
          </h2>
          <p className="text-base text-[var(--muted)] leading-relaxed italic border-l-2 border-[var(--accent)] pl-4 text-left max-w-lg mx-auto">
            "{activeNiche.anchorPhrase}"
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-px sm:grid-cols-3 rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--border)]">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[var(--bg-2)] p-8 flex flex-col gap-5"
            >
              {/* Step number */}
              <span className="font-mono text-5xl font-bold text-[var(--border)] leading-none select-none">
                {p.step}
              </span>

              {/* Divider */}
              <div className="h-px w-10 bg-[var(--accent)]" />

              <div>
                <h3 className="font-heading text-lg font-bold text-[var(--text)] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat */}
        <p className="mt-8 text-center text-sm text-[var(--muted)]">
          Em média, um negócio perde{" "}
          <span className="font-semibold text-[var(--text)]">
            {activeNiche.roiDefaults.callsLostPerWeek * 4} contactos por mês
          </span>{" "}
          por não conseguir atender a tempo.
        </p>

      </div>
    </section>
  );
}
