"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useNiche } from "@/providers/NicheProvider";
import { Button } from "@/components/ui/button";
import { formatEuro } from "@/lib/utils";

function useCountUp(target: number, duration = 800) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    const start = Date.now();
    const from = 0;

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration]);

  return value;
}

export function ROICalculator() {
  const { activeNiche } = useNiche();
  const { roiDefaults } = activeNiche;

  const [callsPerWeek, setCallsPerWeek] = useState(roiDefaults.callsLostPerWeek);
  const [avgTicket, setAvgTicket] = useState(roiDefaults.avgTicket);
  const [conversion, setConversion] = useState(roiDefaults.conversionRate);

  useEffect(() => {
    setCallsPerWeek(roiDefaults.callsLostPerWeek);
    setAvgTicket(roiDefaults.avgTicket);
    setConversion(roiDefaults.conversionRate);
  }, [roiDefaults]);

  const lossPerMonth = Math.round(callsPerWeek * 4 * avgTicket * (conversion / 100));
  const lossPerYear = lossPerMonth * 12;
  const roiCrescer = lossPerMonth - 149;
  const paybackDays =
    lossPerMonth > 0
      ? Math.round(((349 + 149) / lossPerMonth) * 30)
      : 999;

  const lossDisplay = useCountUp(lossPerMonth);
  const yearDisplay = useCountUp(lossPerYear);
  const roiDisplay = useCountUp(Math.max(0, roiCrescer));

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          <SliderInput
            label="Chamadas/pedidos perdidos por semana"
            value={callsPerWeek}
            min={1}
            max={20}
            onChange={setCallsPerWeek}
            unit="por semana"
          />
          <SliderInput
            label="Valor médio de um cliente novo"
            value={avgTicket}
            min={20}
            max={500}
            step={5}
            onChange={setAvgTicket}
            format={(v) => formatEuro(v)}
          />
          <SliderInput
            label="% que vira cliente se atenderes a tempo"
            value={conversion}
            min={10}
            max={50}
            onChange={setConversion}
            unit="%"
          />
        </div>

        {/* Output */}
        <div className="flex flex-col justify-center space-y-4 rounded-xl border border-[var(--border)] bg-[var(--bg-3)] p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">
              Perdes por mês
            </p>
            <p className="font-mono text-4xl font-bold text-[var(--red)]">
              −{formatEuro(lossDisplay)}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">
              Em 1 ano perdes
            </p>
            <p className="font-mono text-2xl font-bold text-[var(--red)]/80">
              −{formatEuro(yearDisplay)}
            </p>
          </div>
          <div className="my-2 border-t border-[var(--border)]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">
              Com o Crescer (€149/mês) recuperas
            </p>
            <p className="font-mono text-2xl font-bold text-[var(--success)]">
              +{formatEuro(roiDisplay)}/mês líquido
            </p>
          </div>
          {paybackDays < 365 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">
                Pagas o investimento em
              </p>
              <p className="font-mono text-xl font-bold text-[var(--accent)]">
                {paybackDays} dias
              </p>
            </div>
          )}
          <p className="text-xs text-[var(--muted)] italic">
            O Crescer paga-se sozinho. O resto é lucro.
          </p>
          <Button variant="primary" asChild className="w-full mt-2">
            <Link href="/precos#crescer">Quero este plano →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  unit?: string;
  format?: (v: number) => string;
}

function SliderInput({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  unit,
  format,
}: SliderInputProps) {
  const display = format ? format(value) : `${value}${unit ? ` ${unit}` : ""}`;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm text-[var(--muted)]">{label}</label>
        <span className="font-mono text-sm font-bold text-[var(--text)] tabular-nums">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 appearance-none rounded-full cursor-pointer"
        style={{
          background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${
            ((value - min) / (max - min)) * 100
          }%, var(--border) ${
            ((value - min) / (max - min)) * 100
          }%, var(--border) 100%)`,
        }}
        aria-label={label}
      />
      <div className="flex justify-between mt-1 text-xs text-[var(--muted)]">
        <span>{format ? format(min) : `${min}${unit ? ` ${unit}` : ""}`}</span>
        <span>{format ? format(max) : `${max}${unit ? ` ${unit}` : ""}`}</span>
      </div>
    </div>
  );
}
