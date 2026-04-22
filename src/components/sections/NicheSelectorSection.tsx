import { NicheSelector } from "@/components/NicheSelector";

export function NicheSelectorSection() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-2)] py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          Seleciona o teu tipo de negócio
        </p>
        <NicheSelector />
      </div>
    </section>
  );
}
