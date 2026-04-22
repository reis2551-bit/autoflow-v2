"use client";

import { useNiche, niches } from "@/providers/NicheProvider";
import { cn } from "@/lib/utils";

export function NicheSelector() {
  const { activeNiche, setActiveNiche } = useNiche();

  return (
    <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0" role="navigation" aria-label="Selecionar tipo de negócio">
      <div className="flex gap-2 w-max sm:w-auto sm:flex-wrap">
        {niches.map((niche) => (
          <button
            key={niche.slug}
            onClick={() => setActiveNiche(niche)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap border",
              activeNiche.slug === niche.slug
                ? "bg-[var(--accent)] border-[var(--accent)] text-white shadow-[0_0_16px_rgba(255,106,0,0.4)]"
                : "bg-[var(--bg-3)] border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]"
            )}
            aria-pressed={activeNiche.slug === niche.slug}
            aria-label={`Ver para ${niche.name}`}
          >
            <span aria-hidden="true">{niche.emoji}</span>
            {niche.name}
          </button>
        ))}
      </div>
    </div>
  );
}
