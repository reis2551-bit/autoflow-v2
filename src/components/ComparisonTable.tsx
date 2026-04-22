import { Check, X, Minus } from "lucide-react";

const rows = [
  {
    label: "Custo mensal",
    rececionista: "€1.200–€1.800",
    agencia: "€300–€800",
    freelancer: "€100–€250",
    autoflow: "€39–€379",
  },
  {
    label: "Horas cobertas",
    rececionista: "8h/dia úteis",
    agencia: "Horário comercial",
    freelancer: "Horário variável",
    autoflow: "24/7",
  },
  {
    label: "Responde em <1 min",
    rececionista: false,
    agencia: false,
    freelancer: false,
    autoflow: true,
  },
  {
    label: "Agenda sozinho",
    rececionista: null,
    agencia: false,
    freelancer: false,
    autoflow: true,
  },
  {
    label: "Funciona de noite",
    rececionista: false,
    agencia: false,
    freelancer: false,
    autoflow: true,
  },
  {
    label: "Tempo até funcionar",
    rececionista: "1–3 meses",
    agencia: "3–8 semanas",
    freelancer: "2–4 semanas",
    autoflow: "7 dias",
  },
  {
    label: "Setup inicial",
    rececionista: "Processo RH",
    agencia: "€500–€2.000",
    freelancer: "€200–€500",
    autoflow: "€199–€590",
  },
  {
    label: "Escala sem contratar",
    rececionista: false,
    agencia: null,
    freelancer: false,
    autoflow: true,
  },
];

type CellValue = boolean | null | string;

function Cell({ value, highlight = false }: { value: CellValue; highlight?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <td className={`px-4 py-3 text-center ${highlight ? "bg-[var(--accent-dim)]" : ""}`}>
        <Check className="mx-auto h-5 w-5 text-[var(--success)]" aria-label="Sim" />
      </td>
    ) : (
      <td className={`px-4 py-3 text-center ${highlight ? "bg-[var(--accent-dim)]" : ""}`}>
        <X className="mx-auto h-5 w-5 text-[var(--red)]/60" aria-label="Não" />
      </td>
    );
  }
  if (value === null) {
    return (
      <td className={`px-4 py-3 text-center ${highlight ? "bg-[var(--accent-dim)]" : ""}`}>
        <Minus className="mx-auto h-4 w-4 text-[var(--muted)]" aria-label="Parcial" />
      </td>
    );
  }
  return (
    <td
      className={`px-4 py-3 text-center text-sm ${
        highlight
          ? "bg-[var(--accent-dim)] font-semibold text-[var(--accent)]"
          : "text-[var(--muted)]"
      }`}
    >
      {value}
    </td>
  );
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
      <table className="w-full text-sm" role="table" aria-label="Comparação de opções">
        <thead>
          <tr className="border-b border-[var(--border)]">
            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
              Critério
            </th>
            <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
              Rececionista
            </th>
            <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
              Agência
            </th>
            <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
              Freelancer
            </th>
            <th className="bg-[var(--accent-dim)] px-4 py-4 text-center text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
              Autoflow
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={i % 2 === 0 ? "bg-[var(--bg-2)]" : "bg-[var(--bg-3)]"}
            >
              <td className="px-4 py-3 font-medium text-[var(--text)]">
                {row.label}
              </td>
              <Cell value={row.rececionista} />
              <Cell value={row.agencia} />
              <Cell value={row.freelancer} />
              <Cell value={row.autoflow} highlight />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
