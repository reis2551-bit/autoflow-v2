import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidade (RGPD) — Autoflow",
  description: "Política de privacidade da Autoflow em conformidade com o RGPD.",
};

export default function RGPDPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-heading text-3xl font-bold text-[var(--text)] mb-2">
            Política de Privacidade
          </h1>
          <p className="text-sm text-[var(--muted)] mb-12">
            Última atualização: 14 de abril de 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-[var(--muted)] leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">1. Responsável pelo Tratamento</h2>
              <p>
                {siteConfig.operatedBy}, NIF {siteConfig.nif}, {siteConfig.address}.
                Email: {siteConfig.email}
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">2. Dados Recolhidos</h2>
              <p>Recolhemos os seguintes dados quando preenches formulários no nosso site:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Nome e contacto (WhatsApp/telemóvel)</li>
                <li>Tipo de negócio e cidade</li>
                <li>Informações sobre o teu negócio que partilhas voluntariamente</li>
                <li>Dados de navegação (cookies técnicos e de análise — ver Política de Cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">3. Finalidade e Base Legal</h2>
              <p>
                Os teus dados são tratados para contacto comercial e prestação dos nossos serviços,
                com base no teu consentimento explícito (Art.º 6(1)(a) RGPD) e, após contrato,
                na execução contratual (Art.º 6(1)(b) RGPD).
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">4. Conservação dos Dados</h2>
              <p>
                Conservamos os dados enquanto a relação comercial estiver ativa e por 3 anos
                após a sua conclusão, salvo obrigação legal.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">5. Subprocessadores</h2>
              <p>
                Utilizamos subprocessadores para operar o nosso serviço.
                Consulta a lista completa em <a href="/subprocessadores" className="text-[var(--accent)] hover:underline">/subprocessadores</a>.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">6. Os Teus Direitos</h2>
              <p>Tens o direito de:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Aceder aos teus dados pessoais</li>
                <li>Retificar dados incorretos</li>
                <li>Solicitar a eliminação (&ldquo;direito ao esquecimento&rdquo;)</li>
                <li>Portabilidade dos dados</li>
                <li>Retirar o consentimento a qualquer momento</li>
                <li>Apresentar reclamação à CNPD (www.cnpd.pt)</li>
              </ul>
              <p className="mt-3">
                Para exercer os teus direitos: {siteConfig.email}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
