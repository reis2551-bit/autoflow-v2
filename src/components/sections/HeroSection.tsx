"use client";

import Link from "next/link";
import { useNiche } from "@/providers/NicheProvider";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const { activeNiche } = useNiche();

  return (
    <section
      className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28"
      aria-label="Hero"
    >
      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
        aria-hidden="true"
      />
      {/* Decorative accent line top-left */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-1 w-32 bg-[var(--accent)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — text */}
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              {activeNiche.heroKicker}
            </p>

            <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl mb-6">
              Não atendes?{" "}
              <em className="not-italic text-[var(--accent)]">
                O cliente liga ao próximo.
              </em>
            </h1>

            <p className="text-lg text-[var(--muted)] leading-relaxed mb-8 max-w-xl">
              A Autoflow responde por ti, agenda e fecha clientes — enquanto
              estás a trabalhar.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button variant="whatsapp" size="lg" asChild>
                <Link
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Olá! Quero saber mais sobre a Autoflow.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> Falar pelo WhatsApp
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/precos">Ver Preços →</Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2" aria-hidden="true">
                {["J", "S", "R", "M", "P"].map((initial, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-[var(--bg)] bg-gradient-to-br from-[var(--accent)] to-orange-700 flex items-center justify-center text-xs font-bold text-white"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--muted)]">
                <span className="text-[var(--text)] font-semibold">25 negócios</span>{" "}
                em Lisboa já automatizados
              </p>
            </div>
          </div>

          {/* Right — phone */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup className="w-64" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
