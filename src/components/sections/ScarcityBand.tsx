import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function ScarcityBand() {
  return (
    <div className="border-y border-[var(--accent-border)] bg-[var(--accent-dim)] py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium text-[var(--text)] text-center sm:text-left">
          <span className="font-bold text-[var(--accent)]">
            Aceitamos {siteConfig.vagasTotal} clientes novos por mês
          </span>{" "}
          — para garantir setup em 7 dias. Restam{" "}
          <span className="font-bold text-[var(--accent)]">
            {siteConfig.vagasRestantes} vagas
          </span>{" "}
          para {siteConfig.vagasMes}.
        </p>
        <Button variant="primary" size="sm" asChild className="shrink-0">
          <Link href="/auditoria">Garantir vaga →</Link>
        </Button>
      </div>
    </div>
  );
}
