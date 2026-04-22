import { WhatsAppDemo } from "@/components/WhatsAppDemo";

export function WhatsAppDemoSection() {
  return (
    <section className="section-padding" aria-labelledby="demo-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2
            id="demo-heading"
            className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-4"
          >
            Experimenta. Manda-lhe uma mensagem.
          </h2>
          <p className="text-[var(--muted)] text-lg">
            Escreve como se fosses um cliente do teu nicho — preço, urgência,
            marcação. Vê como a IA responde.
          </p>
        </div>
        <WhatsAppDemo />
      </div>
    </section>
  );
}
