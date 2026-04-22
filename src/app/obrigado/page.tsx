import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Auditoria recebida — Autoflow",
  description: "A tua auditoria foi recebida. Entraremos em contacto em breve.",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 min-h-[60vh] flex items-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-6 text-5xl" aria-hidden="true">✅</div>
          <h1 className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-4">
            Auditoria recebida!
          </h1>
          <p className="text-xl text-[var(--muted)] mb-8 leading-relaxed">
            Entraremos em contacto via WhatsApp em poucas horas (normalmente no próprio dia)
            para marcar a chamada de 7 minutos.
          </p>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-6 mb-8 text-left">
            <p className="text-sm font-semibold text-[var(--text)] mb-3">
              O que esperar a seguir:
            </p>
            <ol className="space-y-2 text-sm text-[var(--muted)]">
              <li className="flex gap-2"><span className="text-[var(--accent)] font-bold">1.</span> Recebes mensagem de confirmação no WhatsApp</li>
              <li className="flex gap-2"><span className="text-[var(--accent)] font-bold">2.</span> Marcamos a chamada de 7 minutos à tua hora preferida</li>
              <li className="flex gap-2"><span className="text-[var(--accent)] font-bold">3.</span> Mostramos o teu site atual, os números estimados e um demo ao vivo</li>
              <li className="flex gap-2"><span className="text-[var(--accent)] font-bold">4.</span> Se quiseres avançar, o setup começa no dia a seguir</li>
            </ol>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="whatsapp" asChild>
              <Link
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Olá! Acabei de preencher a auditoria.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar agora pelo WhatsApp
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/">Voltar ao início</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
