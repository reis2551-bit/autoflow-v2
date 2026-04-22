import { ComparisonTable } from "@/components/ComparisonTable";

export function ComparisonSection() {
  return (
    <section className="section-padding bg-[var(--bg-2)] border-y border-[var(--border)]" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2
            id="comparison-heading"
            className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-4"
          >
            Porque não uma rececionista? Ou um freelancer?
          </h2>
          <p className="text-[var(--muted)] text-lg">
            Compara as opções. Os números falam por si.
          </p>
        </div>
        <ComparisonTable />
      </div>
    </section>
  );
}
