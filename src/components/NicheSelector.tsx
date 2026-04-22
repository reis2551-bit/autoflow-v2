"use client";

import { useNiche, niches } from "@/providers/NicheProvider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function NicheSelector() {
  const { activeNiche, setActiveNiche } = useNiche();

  return (
    <div
      className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0"
      role="navigation"
      aria-label="Selecionar tipo de negócio"
    >
      <div className="flex gap-3 w-max sm:w-auto sm:flex-wrap sm:justify-center py-3">
        {niches.map((niche) => {
          const active = activeNiche.slug === niche.slug;

          return (
            <motion.button
              key={niche.slug}
              onClick={() => setActiveNiche(niche)}
              whileTap={{ scale: 0.94 }}
              className="group flex flex-col items-center gap-2.5 outline-none"
              aria-pressed={active}
              aria-label={`Ver para ${niche.name}`}
            >
              <div
                className={cn(
                  "relative h-[72px] w-[72px] rounded-2xl flex items-center justify-center transition-all duration-200 overflow-hidden",
                  active
                    ? "bg-[var(--text)] shadow-[0_6px_20px_rgba(26,20,16,0.22)]"
                    : "bg-white border border-[var(--border)] shadow-[0_2px_8px_rgba(26,20,16,0.07)] group-hover:-translate-y-1 group-hover:shadow-[0_8px_24px_rgba(26,20,16,0.13)]"
                )}
              >
                {active && (
                  <span className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--accent)] rounded-t-2xl" />
                )}
                <span className="text-3xl leading-none select-none" aria-hidden="true">
                  {niche.emoji}
                </span>
              </div>

              <span
                className={cn(
                  "text-[11px] font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap",
                  active ? "text-[var(--text)]" : "text-[var(--muted)] group-hover:text-[var(--text)]"
                )}
              >
                {niche.name}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
