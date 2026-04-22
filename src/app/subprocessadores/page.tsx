import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Subprocessadores — Autoflow",
  description: "Lista pública de subprocessadores da Autoflow (RGPD Art.º 28).",
};

const subprocessors = [
  { service: "CRM/automação", vendor: "GoHighLevel", location: "EU/US", purpose: "Gestão operacional e CRM" },
  { service: "IA conversacional", vendor: "Anthropic", location: "EU/US", purpose: "Processamento de linguagem natural" },
  { service: "Telefonia", vendor: "Twilio", location: "EU", purpose: "Voz e SMS" },
  { service: "Mensagens", vendor: "Meta Platforms", location: "EU/US", purpose: "WhatsApp Business" },
  { service: "Síntese de voz", vendor: "ElevenLabs", location: "US", purpose: "Text-to-speech (Rececionista IA)" },
  { service: "Email transacional", vendor: "Resend", location: "EU", purpose: "Notificações e formulários" },
  { service: "Faturação", vendor: "Moloni", location: "PT", purpose: "Emissão de faturas" },
  { service: "Pagamentos", vendor: "Stripe", location: "EU", purpose: "Processamento de pagamentos" },
];

export default function SubprocessadoresPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-heading text-3xl font-bold text-[var(--text)] mb-2">
            Lista de Subprocessadores
          </h1>
          <p className="text-sm text-[var(--muted)] mb-4">
            Em conformidade com o Art.º 28 do RGPD. Última atualização: 14 de abril de 2026.
          </p>
          <p className="text-[var(--muted)] mb-10 leading-relaxed">
            A Autoflow utiliza os seguintes subprocessadores para a prestação dos seus serviços.
            Todos os subprocessadores operam em conformidade com o RGPD através de cláusulas
            contratuais padrão (SCCs) aprovadas pela Comissão Europeia.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
            <table className="w-full text-sm" aria-label="Lista de subprocessadores">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--bg-2)]">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Serviço</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Fornecedor</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Localização Dados</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Finalidade</th>
                </tr>
              </thead>
              <tbody>
                {subprocessors.map((sp, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[var(--bg-3)]" : "bg-[var(--bg-2)]"}>
                    <td className="px-4 py-3 text-[var(--text)]">{sp.service}</td>
                    <td className="px-4 py-3 font-medium text-[var(--text)]">{sp.vendor}</td>
                    <td className="px-4 py-3 text-[var(--muted)]">{sp.location}</td>
                    <td className="px-4 py-3 text-[var(--muted)]">{sp.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
