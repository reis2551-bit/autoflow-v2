import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto — Autoflow",
  description: "Fala com a Autoflow pelo WhatsApp, telefone ou email.",
};

const contacts = [
  {
    icon: "💬",
    label: "WhatsApp",
    value: siteConfig.phone,
    description: "Respondemos em minutos",
    href: `https://wa.me/${siteConfig.whatsappNumber}?text=Olá! Gostava de saber mais sobre a Autoflow.`,
    external: true,
    cta: "Enviar mensagem",
    color: "var(--green)",
  },
  {
    icon: "📞",
    label: "Chamada",
    value: siteConfig.phone,
    description: "Dias úteis, 9h–18h",
    href: `tel:${siteConfig.phone}`,
    external: false,
    cta: "Ligar agora",
    color: "var(--accent)",
  },
  {
    icon: "✉️",
    label: "Email",
    value: siteConfig.email,
    description: "Respondemos em 24h úteis",
    href: `mailto:${siteConfig.email}`,
    external: false,
    cta: "Enviar email",
    color: "var(--accent)",
  },
];

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        <section className="section-padding">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl font-bold text-[var(--text)] sm:text-5xl mb-4">
                Preferes falar diretamente connosco?
              </h1>
              <p className="text-xl text-[var(--muted)]">
                Respondemos em minutos — escolhe como preferes contactar.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-16">
              {contacts.map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-8 text-center flex flex-col items-center gap-4"
                >
                  <div className="text-4xl" aria-hidden="true">{c.icon}</div>
                  <div>
                    <p className="font-semibold text-[var(--text)] mb-1">{c.label}</p>
                    <p className="font-mono text-sm text-[var(--muted)]">{c.value}</p>
                    <p className="text-xs text-[var(--muted)] mt-1">{c.description}</p>
                  </div>
                  <Link
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="mt-auto rounded-xl px-6 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: c.color }}
                  >
                    {c.cta}
                  </Link>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-8 text-center">
              <h2 className="font-heading text-xl font-bold text-[var(--text)] mb-2">
                Preferes que te contactemos?
              </h2>
              <p className="text-[var(--muted)] mb-4">
                Preenche a auditoria de 7 minutos e nós ligamos-te.
              </p>
              <Link
                href="/auditoria"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-h)] transition-colors hover:-translate-y-0.5"
              >
                Preencher auditoria gratuita →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
