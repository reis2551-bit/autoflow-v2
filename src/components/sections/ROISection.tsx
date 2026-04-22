import { ROICalculator } from "@/components/ROICalculator";

export function ROISection() {
  return (
    <section className="section-padding" aria-labelledby="roi-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2
            id="roi-heading"
            className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-4"
          >
            Quanto te custa não responder?
          </h2>
          <p className="text-[var(--muted)] text-lg">
            Não é um problema pequeno. É uma sangria constante que acontece em silêncio.
          </p>
        </div>
        <ROICalculator />
      </div>
    </section>
  );
}
