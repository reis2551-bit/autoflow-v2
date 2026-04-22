"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqCategories } from "@/data/faqs";

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const query = search.toLowerCase();

  const filtered = faqCategories
    .map((cat) => ({
      ...cat,
      faqs: cat.faqs.filter(
        (f) =>
          f.q.toLowerCase().includes(query) ||
          f.a.toLowerCase().includes(query)
      ),
    }))
    .filter((cat) => cat.faqs.length > 0);

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        <section className="section-padding">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h1 className="font-heading text-4xl font-bold text-[var(--text)] sm:text-5xl mb-4">
                Perguntas frequentes
              </h1>
              <p className="text-xl text-[var(--muted)] mb-8">
                Já ouvimos tudo. Aqui estão as respostas.
              </p>

              {/* Search */}
              <div className="relative max-w-xl mx-auto">
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Pesquisar perguntas..."
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-3)] px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--muted)] outline-none focus:border-[var(--accent)] transition-colors"
                  aria-label="Pesquisar perguntas frequentes"
                />
              </div>
            </div>

            {filtered.length === 0 ? (
              <p className="text-center text-[var(--muted)] py-12">
                Nenhuma pergunta encontrada. Fala connosco pelo WhatsApp.
              </p>
            ) : (
              <div className="space-y-10">
                {filtered.map((cat) => (
                  <div key={cat.id}>
                    <h2 className="font-heading text-lg font-bold text-[var(--text)] mb-4 pb-2 border-b border-[var(--border)]">
                      {cat.title}
                    </h2>
                    <Accordion type="single" collapsible>
                      {cat.faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`${cat.id}-${i}`}>
                          <AccordionTrigger>{faq.q}</AccordionTrigger>
                          <AccordionContent>{faq.a}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
