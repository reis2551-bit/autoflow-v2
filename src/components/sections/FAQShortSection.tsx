import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqCategories } from "@/data/faqs";

const shortFAQs = faqCategories[0].faqs.slice(0, 6);

export function FAQShortSection() {
  return (
    <section className="section-padding" aria-labelledby="faq-short-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            id="faq-short-heading"
            className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-4"
          >
            Já ouvimos tudo. Aqui estão as respostas.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-0">
          {shortFAQs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <Button variant="ghost" asChild>
            <Link href="/faq">Ver todas as perguntas →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
