import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getNicheBySlug, niches } from "@/data/niches";
import { ROICalculator } from "@/components/ROICalculator";
import { NicheInitializer } from "@/components/NicheInitializer";
import { siteConfig } from "@/config/site";
import { Check } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return niches.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const niche = getNicheBySlug(params.slug);
  if (!niche) return { title: "Nicho não encontrado" };
  return {
    title: `Autoflow para ${niche.name} — ${niche.anchorPhrase.slice(0, 60)}`,
    description: niche.anchorPhrase,
  };
}

export default function NichoPage({ params }: Props) {
  const niche = getNicheBySlug(params.slug);
  if (!niche) notFound();

  const waText = encodeURIComponent(
    `Olá! Sou ${niche.name.toLowerCase()} e gostava de saber mais sobre a Autoflow.`
  );

  return (
    <>
      <Navbar />
      {/* Sync active niche to context */}
      <NicheInitializer slug={params.slug} />
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="section-padding bg-[var(--bg-2)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link href="/nichos" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-4 inline-block">
              ← Todos os nichos
            </Link>
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl" aria-hidden="true">{niche.emoji}</div>
              <div>
                <h1 className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-2">
                  {niche.heroH1}
                </h1>
                <p className="text-lg text-[var(--accent)] font-medium">
                  {niche.anchorPhrase}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="whatsapp" asChild>
                <Link
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar pelo WhatsApp
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/auditoria">Auditoria gratuita →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pains */}
        <section className="section-padding">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-6">
              A dor real de {niche.name.toLowerCase()}
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {niche.pains.map((pain, i) => (
                <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--bg-2)] p-5">
                  <div className="mb-3 text-2xl" aria-hidden="true">
                    {["😤", "⏱", "💸"][i]}
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-[var(--bg-2)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-6">
              O que a Autoflow faz por {niche.name.toLowerCase()}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {niche.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="section-padding">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-6 text-center">
              Calcula o teu ROI como {niche.name.toLowerCase()}
            </h2>
            <ROICalculator />
          </div>
        </section>

        {/* Testimonial if exists */}
        {niche.testimonial && (
          <section className="section-padding bg-[var(--bg-2)]">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <blockquote className="rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-dim)] p-8">
                <p className="text-xl font-medium text-[var(--text)] italic leading-relaxed mb-6">
                  &ldquo;{niche.testimonial.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-sm font-bold text-white">
                    {niche.testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text)]">{niche.testimonial.name}</p>
                    <p className="text-sm text-[var(--muted)]">{niche.testimonial.role}</p>
                    <p className="text-xs text-[var(--success)] font-semibold mt-1">{niche.testimonial.result}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </section>
        )}

        {/* Niche FAQs */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-6">
              Perguntas sobre {niche.name.toLowerCase()}
            </h2>
            <Accordion type="single" collapsible>
              {niche.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[var(--bg-2)] text-center">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-[var(--text)] mb-4">
              Pronto para deixar de perder clientes?
            </h2>
            <p className="text-[var(--muted)] mb-8">
              Auditoria gratuita de 7 minutos. Sem compromisso.
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <Link
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar pelo WhatsApp →
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
