import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Sobre a Autoflow — Um humano em Lisboa",
  description: "A Autoflow é uma pessoa em Lisboa. Trabalhamos com micro-negócios de serviços em Portugal.",
};

const values = [
  {
    emoji: "🙋",
    title: "Um humano atende",
    body: "Somos uma pessoa, não uma corporação. Se precisares de falar com alguém, falarei eu.",
  },
  {
    emoji: "💶",
    title: "Preço honesto",
    body: "Sem surpresas na fatura. Sem contratos anuais forçados. Os preços estão na página, sem letras pequenas.",
  },
  {
    emoji: "🇵🇹",
    title: "Português europeu de verdade",
    body: "A IA fala como tu falas — pt-PT, não pt-BR. Treinamos localmente para soar natural aos teus clientes.",
  },
];

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        <section className="section-padding">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Photo + intro */}
            <div className="flex flex-col sm:flex-row items-start gap-8 mb-16">
              <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-orange-700 flex items-center justify-center text-4xl font-bold text-white shrink-0" aria-hidden="true">
                A
              </div>
              <div>
                <h1 className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-4">
                  Sou o Autoflow.
                </h1>
                <p className="text-[var(--muted)] leading-relaxed text-lg">
                  A Autoflow é uma pessoa em Lisboa — eu. Aprendi que os canalizadores, eletricistas
                  e cabeleireiros de Portugal perdem milhões em chamadas não atendidas todos os anos.
                  Vendi a solução que eu próprio queria ter quando ajudava o meu pai com o negócio dele.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid gap-6 sm:grid-cols-3 mb-16">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-6"
                >
                  <div className="text-3xl mb-4" aria-hidden="true">{v.emoji}</div>
                  <h2 className="font-heading text-lg font-bold text-[var(--text)] mb-2">
                    {v.title}
                  </h2>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-4">
                Falar diretamente comigo
              </h2>
              <p className="text-[var(--muted)] mb-6">
                Não há equipa de vendas. Não há bots de chat de suporte. Sou eu que atendo.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="whatsapp" asChild>
                  <Link
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
