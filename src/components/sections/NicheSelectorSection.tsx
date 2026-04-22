import { NicheSelector } from "@/components/NicheSelector";

export function NicheSelectorSection() {
  return (
    <section className="relative bg-[var(--bg)] pt-[96px] pb-10">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[260px] overflow-hidden" aria-hidden="true">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[260px] opacity-[0.06]"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--accent) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            <span className="h-px w-6 bg-[var(--accent)] opacity-60" />
            Seleciona o teu tipo de negócio
            <span className="h-px w-6 bg-[var(--accent)] opacity-60" />
          </span>
          <p className="text-sm text-[var(--muted)]">
            Escolhe e vê como funciona para ti
          </p>
        </div>

        <NicheSelector />
      </div>
    </section>
  );
}
