import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Como Funciona — Setup em 7 Dias",
  description: "O processo de onboarding da Autoflow em 7 dias. Briefing, configuração, testes e handover.",
};

const timeline = [
  {
    day: "Dia 1",
    title: "Briefing de 30 minutos",
    body: "Chamada por Meet ou WhatsApp. Levantamos os teus serviços, preços, horários e 3 exemplos de concorrentes. É tudo o que precisamos de ti no início.",
  },
  {
    day: "Dias 2–3",
    title: "Desenho e configuração",
    body: "Desenhamos o teu site e treinamos a IA com o teu vocabulário, preços e respostas. Tudo em português europeu com o teu tom.",
  },
  {
    day: "Dias 4–5",
    title: "Construção e integração",
    body: "Construímos o site, ligamos o WhatsApp Business, configuramos o calendário Google e testamos todos os fluxos de conversa.",
  },
  {
    day: "Dia 6",
    title: "QA e testes",
    body: "Testamos em 3 browsers diferentes e 3 telemóveis. Simulamos pedidos de marcação, urgências e orçamentos. Zero surpresas no go-live.",
  },
  {
    day: "Dia 7",
    title: "Handover e treino",
    body: "Chamada de 30 minutos onde te mostramos o painel, como ver conversas, como ajustar respostas e como interpretar o relatório mensal.",
  },
];

const whatWeNeed = [
  "60 minutos no total (repartidos pelas 3 chamadas)",
  "Logo em formato PNG ou SVG",
  "6 fotografias do teu espaço ou trabalho",
  "3 concorrentes de referência (para o site)",
  "Lista de serviços e preços",
  "Número de WhatsApp Business",
];

const stackItems = [
  "IA treinada em português europeu",
  "WhatsApp Business oficial",
  "Voz humana natural (plano Total)",
  "Servidores na União Europeia",
  "Backup diário de dados",
  "Conformidade RGPD e AI Act",
];

export default function ComoFuncionaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="section-padding text-center bg-[var(--bg-2)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl font-bold text-[var(--text)] sm:text-5xl mb-4">
              De zero a funcionar em 7 dias.
            </h1>
            <p className="text-xl text-[var(--muted)]">
              O processo é simples. Tu apareces 60 minutos no total. Nós tratamos do resto.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border)] hidden sm:block" aria-hidden="true" />

              <div className="space-y-8">
                {timeline.map((step, i) => (
                  <div key={i} className="relative flex gap-6">
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] z-10">
                      <span className="font-mono text-xs font-bold text-[var(--accent)] text-center leading-tight">
                        {step.day.split(" ")[0]}
                        <br />
                        {step.day.split(" ")[1]}
                      </span>
                    </div>
                    <div className="flex-1 pt-3">
                      <h3 className="font-heading text-lg font-bold text-[var(--text)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[var(--muted)] leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What we need */}
        <section className="section-padding bg-[var(--bg-2)]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-6">
                  O que precisamos de ti
                </h2>
                <ul className="space-y-3">
                  {whatWeNeed.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-[var(--accent-dim)] text-[var(--accent)] flex items-center justify-center text-xs font-bold shrink-0" aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-6">
                  A nossa stack técnica
                </h2>
                <ul className="space-y-3">
                  {stackItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-[var(--accent-dim)] text-[var(--accent)] flex items-center justify-center text-xs font-bold shrink-0" aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* After day 7 */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-6">
              Depois do Dia 7
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8">
              Não desaparecemos após o setup. Monitoramos o sistema, fazemos ajustes à IA quando precisas,
              atualizamos os teus preços e horários, e enviamos um relatório mensal com os teus números.
              O suporte está incluído em todos os planos.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/auditoria">Começar o processo →</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
