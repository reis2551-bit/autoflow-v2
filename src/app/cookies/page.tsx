import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Cookies — Autoflow",
  description: "Política de cookies da Autoflow.",
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-heading text-3xl font-bold text-[var(--text)] mb-2">
            Política de Cookies
          </h1>
          <p className="text-sm text-[var(--muted)] mb-12">
            Última atualização: 14 de abril de 2026
          </p>

          <div className="space-y-8 text-[var(--muted)] leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">O que são cookies?</h2>
              <p>
                Cookies são pequenos ficheiros de texto armazenados no teu browser quando visitas
                um website. Permitem que o site recorde as tuas preferências e melhore a tua experiência.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">Cookies que utilizamos</h2>

              <div className="overflow-x-auto rounded-xl border border-[var(--border)] mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)] bg-[var(--bg-2)]">
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Cookie</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Tipo</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Finalidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "_plausible", type: "Análise (1.ª parte)", purpose: "Contagem de visitas anónima, sem dados pessoais" },
                      { name: "cookie_consent", type: "Preferência", purpose: "Registo da tua escolha de consentimento" },
                    ].map((c, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-[var(--bg-3)]" : "bg-[var(--bg-2)]"}>
                        <td className="px-4 py-3 font-mono text-xs">{c.name}</td>
                        <td className="px-4 py-3">{c.type}</td>
                        <td className="px-4 py-3">{c.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">Consentimento</h2>
              <p>
                Utilizamos Plausible Analytics, que não usa cookies de rastreamento e não recolhe
                dados pessoais. Não utilizamos cookies de publicidade ou rastreamento de terceiros.
                O teu consentimento explícito é pedido antes de qualquer cookie não essencial ser ativado.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">Como desativar cookies</h2>
              <p>
                Podes configurar o teu browser para rejeitar cookies. Nota que isso pode afetar
                algumas funcionalidades do site. Para mais informações sobre como gerir cookies no
                teu browser, consulta a ajuda do browser.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-3">Contacto</h2>
              <p>
                Para questões sobre cookies:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-[var(--accent)] hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
