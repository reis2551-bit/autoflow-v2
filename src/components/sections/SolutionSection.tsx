const solutions = [
  {
    emoji: "🌐",
    title: "Website em 7 dias",
    description:
      "Profissional, rápido, feito para converter. Os clientes encontram-te no Google e chegam já prontos a contratar.",
  },
  {
    emoji: "💬",
    title: "WhatsApp responde imediato",
    description:
      "O WhatsApp responde em segundos, 24 horas, 7 dias. Em português, com o tom do teu negócio. O cliente sente que falou contigo.",
  },
  {
    emoji: "📋",
    title: "Orçamento na hora",
    description:
      "O sistema envia o orçamento automaticamente com base nos teus preços. Sem tu tocares no telemóvel.",
  },
  {
    emoji: "📅",
    title: "Marcação automática",
    description:
      "A marcação entra direto no teu calendário. O cliente recebe confirmação por SMS. Tu recebes notificação. Ninguém falha.",
  },
];

export function SolutionSection() {
  return (
    <section className="section-padding bg-[var(--bg-2)]" aria-labelledby="solution-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2
            id="solution-heading"
            className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-4"
          >
            A partir de agora, não perdes mais nada.
          </h2>
          <p className="text-[var(--muted)] text-lg">
            A Autoflow trata de tudo enquanto trabalhas. Tu só tens de aparecer
            para fazer o serviço.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-3)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent-border)] relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" aria-hidden="true" />
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-dim)] text-2xl"
                aria-hidden="true"
              >
                {s.emoji}
              </div>
              <h3 className="font-heading text-lg font-bold text-[var(--text)] mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
