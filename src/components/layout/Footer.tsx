import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";

const servicesLinks = [
  { href: "/servicos/website", label: "Website em 7 dias" },
  { href: "/servicos/whatsapp-ia", label: "WhatsApp IA 24/7" },
  { href: "/servicos/rececionista-ia", label: "Rececionista IA" },
  { href: "/servicos/crm", label: "CRM e Pipeline" },
];

const nichesLinks = [
  { href: "/nichos/barbearia", label: "Barbearia" },
  { href: "/nichos/cabeleireiro", label: "Cabeleireiro" },
  { href: "/nichos/eletricista", label: "Eletricista" },
  { href: "/nichos/canalizador", label: "Canalizador" },
  { href: "/nichos/climatizacao", label: "Climatização" },
  { href: "/nichos", label: "Ver todos →" },
];

const companyLinks = [
  { href: "/sobre", label: "Sobre a Autoflow" },
  { href: "/como-funciona", label: "Como Funciona" },
  { href: "/casos", label: "Casos de Estudo" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
  { href: "/auditoria", label: "Auditoria Gratuita" },
];

const legalLinks = [
  { href: "/rgpd", label: "Privacidade (RGPD)" },
  { href: "/termos", label: "Termos e Condições" },
  { href: "/subprocessadores", label: "Subprocessadores" },
  { href: "/cookies", label: "Política de Cookies" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-2)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Col 1 */}
          <div className="col-span-2 lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
              Responde por ti, agenda e fecha clientes — enquanto estás a
              trabalhar.
            </p>
            <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-[var(--accent)] transition-colors"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:text-[var(--accent)] transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Col 2 — Serviços */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
              Serviços
            </h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Nichos */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
              Nichos
            </h3>
            <ul className="space-y-2">
              {nichesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Empresa + Legal */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
                Empresa
              </h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
                Legal
              </h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RGPD badges */}
        <div className="mt-12 flex flex-wrap gap-3 border-t border-[var(--border)] pt-8">
          {["RGPD", "AI Act UE", "Servidores UE", "Suporte pt-PT"].map(
            (badge) => (
              <span
                key={badge}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
              >
                ✓ {badge}
              </span>
            )
          )}
        </div>

        {/* Bottom line */}
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-[var(--muted)]">
          <p>
            Autoflow é operada por {siteConfig.operatedBy}, em Lisboa. Um
            humano atende se precisares. NIF {siteConfig.nif}
          </p>
          <div className="flex gap-4">
            <span>© {new Date().getFullYear()} Autoflow</span>
            <Link
              href="https://www.livroreclamacoes.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              Livro de Reclamações
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
