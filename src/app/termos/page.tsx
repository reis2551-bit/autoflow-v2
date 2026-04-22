import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Termos e Condições — Autoflow",
  description: "Termos e condições da Autoflow.",
};

export default function TermosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-heading text-3xl font-bold text-[var(--text)] mb-2">
            Termos e Condições
          </h1>
          <p className="text-sm text-[var(--muted)] mb-12">
            Última atualização: 14 de abril de 2026
          </p>

          <div className="space-y-8 text-[var(--muted)] leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">1. Objeto</h2>
              <p>
                A Autoflow, operada por {siteConfig.operatedBy} (NIF {siteConfig.nif}),
                presta serviços de automação digital (website, WhatsApp IA, rececionista IA, CRM)
                a micro-negócios de serviços em Portugal.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">2. Planos e Preços</h2>
              <p>
                Os preços são os publicados em <a href="/precos" className="text-[var(--accent)] hover:underline">/precos</a> no momento da contratação,
                acrescidos de IVA à taxa legal. A Autoflow reserva-se o direito de alterar preços
                com 30 dias de aviso prévio.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">3. Garantia de 30 Dias</h2>
              <p>
                Se nos primeiros 30 dias após o go-live não receberes pelo menos 1 lead novo
                atribuível ao nosso sistema, devolvemos o valor do setup na totalidade.
                A garantia não cobre cancelamentos por motivos alheios ao serviço.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">4. Duração e Cancelamento</h2>
              <p>
                Contratos mensais, sem fidelização mínima. O cancelamento é feito com 30 dias
                de aviso por escrito para {siteConfig.email}. Não há penalizações por cancelamento.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">5. SLA e Uptime</h2>
              <p>
                Comprometemo-nos com 99,5% de uptime mensal para os sistemas de IA.
                Em caso de indisponibilidade superior a 4h contínuas, acreditamos um dia
                de serviço na fatura seguinte.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">6. Propriedade do Conteúdo</h2>
              <p>
                Todo o conteúdo fornecido pelo cliente (textos, imagens, preços) permanece
                propriedade do cliente. A Autoflow não reclama qualquer direito sobre este conteúdo.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">7. Faturação</h2>
              <p>
                Faturação mensal por débito automático ou transferência bancária. O valor do
                setup é faturado no momento do início do projeto. Faturas emitidas via Moloni
                em conformidade com a legislação fiscal portuguesa.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">8. Lei Aplicável</h2>
              <p>
                Estes termos são regidos pela lei portuguesa. Para resolução de litígios,
                é competente o Tribunal da Comarca de Lisboa, sem prejuízo de meios
                alternativos de resolução de conflitos.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
