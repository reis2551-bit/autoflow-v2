"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useNiche } from "@/providers/NicheProvider";
import { Button } from "@/components/ui/button";
import { formatEuro } from "@/lib/utils";
import { TrendingDown, TrendingUp, Clock, ArrowRight } from "lucide-react";

function useCountUp(target: number, duration = 700) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);
  const prevTarget = useRef(target);

  useEffect(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    const start = Date.now();
    const from = prevTarget.current === target ? 0 : value;

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
      else prevTarget.current = target;
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [target, duration]);

  return value;
}

export function ROICalculator() {
  const { activeNiche } = useNiche();
  const { roiDefaults } = activeNiche;

  // convert stored weekly value to daily for display
  const [callsPerDay, setCallsPerDay] = useState(Math.round(roiDefaults.callsLostPerWeek / 5 * 10) / 10);
  const [avgTicket, setAvgTicket]     = useState(roiDefaults.avgTicket);
  const [conversion, setConversion]   = useState(roiDefaults.conversionRate);

  useEffect(() => {
    setCallsPerDay(Math.max(1, Math.round(roiDefaults.callsLostPerWeek / 5)));
    setAvgTicket(roiDefaults.avgTicket);
    setConversion(roiDefaults.conversionRate);
  }, [roiDefaults]);

  // callsPerDay × 22 working days × ticket × conversion
  const lossPerMonth  = Math.round(callsPerDay * 22 * avgTicket * (conversion / 100));
  const lossPerDay    = Math.round(callsPerDay * avgTicket * (conversion / 100));
  const lossPerYear   = lossPerMonth * 12;
  const roiCrescer    = Math.max(0, lossPerMonth - 149);
  const paybackDays   = lossPerMonth > 0 ? Math.round(((349 + 149) / lossPerMonth) * 30) : 999;

  const lossMonthAnim = useCountUp(lossPerMonth);
  const lossDayAnim   = useCountUp(lossPerDay);
  const lossYearAnim  = useCountUp(lossPerYear);
  const roiAnim       = useCountUp(roiCrescer);

  return (
    <div className="rounded-3xl border border-[var(--border)] bg-white shadow-[0_4px_32px_rgba(26,20,16,0.07)] overflow-hidden">
      <div className="grid md:grid-cols-[1fr_1px_1fr]">

        {/* ── Left: sliders ── */}
        <div className="p-8 space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)] mb-1">
              Ajusta ao teu negócio
            </p>
            <h3 className="font-heading text-xl font-bold text-[var(--text)]">
              Quantos clientes perdes por dia?
            </h3>
          </div>

          <SliderInput
            label="Contactos perdidos por dia"
            value={callsPerDay}
            min={1}
            max={15}
            onChange={setCallsPerDay}
            display={(v) => `${v} por dia`}
          />
          <SliderInput
            label="Valor médio de um cliente"
            value={avgTicket}
            min={20}
            max={500}
            step={5}
            onChange={setAvgTicket}
            display={(v) => formatEuro(v)}
          />
          <SliderInput
            label="Taxa de conversão se atenderes"
            value={conversion}
            min={10}
            max={60}
            onChange={setConversion}
            display={(v) => `${v} %`}
          />

          <p className="text-xs text-[var(--muted)] leading-relaxed">
            Baseado em {callsPerDay} contacto{callsPerDay > 1 ? "s" : ""}/dia × 22 dias úteis/mês × {conversion}% conversão × {formatEuro(avgTicket)}/cliente.
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="hidden md:block bg-[var(--border)]" />

        {/* ── Right: results ── */}
        <div className="p-8 flex flex-col justify-between gap-6 bg-[var(--bg)]">

          {/* Top: losses */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[var(--border)]">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <TrendingDown className="h-4 w-4 text-[var(--red)]" strokeWidth={2} />
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Perdes por dia</p>
                </div>
                <p className="font-mono text-3xl font-bold text-[var(--red)]">
                  −{formatEuro(lossDayAnim)}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-1.5 mb-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Por mês</p>
                </div>
                <p className="font-mono text-3xl font-bold text-[var(--red)]">
                  −{formatEuro(lossMonthAnim)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[var(--muted)]" strokeWidth={1.75} />
              <p className="text-sm text-[var(--muted)]">
                Em 1 ano perdes{" "}
                <span className="font-bold text-[var(--text)] font-mono">
                  {formatEuro(lossYearAnim)}
                </span>
              </p>
            </div>
          </div>

          {/* Middle: ROI */}
          <div className="rounded-2xl bg-[var(--bg-2)] border border-[var(--border)] p-5 space-y-3">
            <div className="flex items-center gap-1.5 mb-2">
              <TrendingUp className="h-4 w-4 text-[var(--success)]" strokeWidth={2} />
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                Com Autoflow Crescer (€149/mês)
              </p>
            </div>
            <p className="font-mono text-3xl font-bold text-[var(--success)]">
              +{formatEuro(roiAnim)}<span className="text-base font-normal text-[var(--muted)]">/mês líquido</span>
            </p>
            {paybackDays < 365 && (
              <p className="text-sm text-[var(--muted)]">
                Pagas o investimento em{" "}
                <span className="font-bold text-[var(--text)]">{paybackDays} dias</span>
              </p>
            )}
          </div>

          {/* CTA */}
          <Button variant="primary" size="lg" asChild className="w-full group">
            <Link href="/precos#crescer">
              Quero recuperar este dinheiro
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─── SliderInput ─────────────────────────────────────────────────── */

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  display: (v: number) => string;
}

function SliderInput({ label, value, min, max, step = 1, onChange, display }: SliderInputProps) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm text-[var(--muted)] font-medium">{label}</label>
        <span className="font-mono text-sm font-bold text-[var(--accent)] tabular-nums bg-[var(--accent-dim)] px-2 py-0.5 rounded-md">
          {display(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 appearance-none rounded-full cursor-pointer"
        style={{
          background: `linear-gradient(to right, var(--accent) ${pct}%, var(--border) ${pct}%)`,
        }}
        aria-label={label}
      />
      <div className="flex justify-between text-xs text-[var(--muted)]">
        <span>{display(min)}</span>
        <span>{display(max)}</span>
      </div>
    </div>
  );
}
