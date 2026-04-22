import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { niches } from "@/data/niches";
import { formatEuro } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Soluções por Nicho — Autoflow",
  description: "Autoflow para barbearias, eletricistas, canalizadores, cabeleireiros e mais. Escolhe o teu nicho.",
};

export default function NichosHubPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h1 className="font-heading text-4xl font-bold text-[var(--text)] sm:text-5xl mb-4">
                Para o teu tipo de negócio.
              </h1>
              <p className="text-xl text-[var(--muted)]">
                Cada nicho tem os seus desafios. Escolhe o teu e vê como a Autoflow funciona especificamente para ti.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {niches.map((niche) => {
                const roi = Math.round(
                  niche.roiDefaults.callsLostPerWeek *
                    4 *
                    niche.roiDefaults.avgTicket *
                    (niche.roiDefaults.conversionRate / 100)
                );
                return (
                  <Link
                    key={niche.slug}
                    href={`/nichos/${niche.slug}`}
                    className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent-border)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl" aria-hidden="true">{niche.emoji}</div>
                      <div className="flex-1 min-w-0">
                        <h2 className="font-heading text-xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mb-1">
                          {niche.name}
                        </h2>
                        <p className="text-xs text-[var(--muted)] leading-relaxed mb-3">
                          {niche.anchorPhrase}
                        </p>
                        <p className="text-sm font-semibold text-[var(--success)]">
                          ROI estimado: +{formatEuro(roi)}/mês
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
