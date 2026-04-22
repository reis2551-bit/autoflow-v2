"use client";

import { motion } from "framer-motion";
import { Globe, MessageCircle, FileText, CalendarCheck } from "lucide-react";

const solutions = [
  {
    Icon: Globe,
    label: "Website",
    title: "Website em 7 dias",
    description:
      "Profissional, rápido, feito para converter. Os clientes encontram-te no Google e chegam já prontos a contratar.",
    stat: "7 dias",
    statLabel: "para estar online",
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp IA",
    title: "Resposta em segundos",
    description:
      "O WhatsApp responde 24/7 em português, com o tom do teu negócio. O cliente sente que falou contigo.",
    stat: "24/7",
    statLabel: "sempre disponível",
  },
  {
    Icon: FileText,
    label: "Orçamentos",
    title: "Orçamento automático",
    description:
      "O sistema envia o orçamento com base nos teus preços. Sem tocares no telemóvel. Em segundos.",
    stat: "< 60s",
    statLabel: "tempo de resposta",
  },
  {
    Icon: CalendarCheck,
    label: "Agenda",
    title: "Marcação no calendário",
    description:
      "A marcação entra direto no teu Google Calendar. O cliente recebe SMS. Tu recebes notificação. Ninguém falha.",
    stat: "0 falhas",
    statLabel: "no agendamento",
  },
];

export function SolutionSection() {
  return (
    <section
      className="section-padding bg-[var(--bg-2)] border-y border-[var(--border)]"
      aria-labelledby="solution-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
            A solução
          </p>
          <h2
            id="solution-heading"
            className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-5"
          >
            A partir de agora,{" "}
            <span className="text-[var(--accent)]">não perdes mais nada.</span>
          </h2>
          <p className="text-[var(--muted)] text-lg leading-relaxed">
            A Autoflow trata de tudo enquanto trabalhas. Tu só tens de aparecer para fazer o serviço.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col rounded-2xl bg-white border border-[var(--border)] overflow-hidden shadow-[0_2px_12px_rgba(26,20,16,0.06)] hover:shadow-[0_8px_32px_rgba(26,20,16,0.11)] hover:-translate-y-1 transition-all duration-200"
            >
              {/* Top bar */}
              <div className="h-1 bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-300" />

              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Icon + label */}
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-[var(--bg-2)] border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all duration-300">
                    <s.Icon
                      className="h-5 w-5 text-[var(--muted)] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.75}
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-300">
                    {s.label}
                  </span>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-heading text-base font-bold text-[var(--text)] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Stat */}
                <div className="pt-4 border-t border-[var(--border)] flex items-baseline gap-2">
                  <span className="font-mono text-xl font-bold text-[var(--text)]">
                    {s.stat}
                  </span>
                  <span className="text-xs text-[var(--muted)]">{s.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
