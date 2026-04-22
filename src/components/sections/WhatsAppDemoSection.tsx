"use client";

import { WhatsAppDemo } from "@/components/WhatsAppDemo";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppDemoSection() {
  return (
    <section className="section-padding border-y border-[var(--border)]" aria-labelledby="demo-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              Demonstração ao vivo
            </p>
            <h2
              id="demo-heading"
              className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-5"
            >
              Vê como a IA responde{" "}
              <span className="text-[var(--accent)]">ao teu cliente.</span>
            </h2>
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">
              Escreve como se fosses um cliente — pede um preço, marca uma hora, pergunta sobre urgência. A IA responde em segundos, em português, com o tom certo.
            </p>

            {/* Proof points */}
            <ul className="space-y-3 mb-10">
              {[
                "Responde em menos de 60 segundos",
                "Agenda direto no teu Google Calendar",
                "Funciona de noite, fins de semana e feriados",
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[var(--text)]">
                  <span className="h-5 w-5 rounded-full bg-[var(--accent)] flex items-center justify-center shrink-0">
                    <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-3 rounded-2xl bg-[var(--text)] px-6 py-4 text-sm font-bold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Phone className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-xs font-normal text-white/60 leading-none mb-0.5">Preferes falar?</span>
                Ligar agora — é grátis
              </span>
            </a>
          </div>

          {/* Right — demo */}
          <div>
            <WhatsAppDemo />
          </div>

        </div>
      </div>
    </section>
  );
}
