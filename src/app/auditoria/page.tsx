"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { auditFormSchema, type AuditFormData } from "@/lib/validations";
import { niches } from "@/data/niches";

const testimonials = [
  {
    quote: "Fiz a auditoria às 22h. No dia seguinte tinha o onboarding marcado. Em 7 dias estava online.",
    name: "João M.",
    role: "Canalizador · Lisboa",
  },
  {
    quote: "Pensava que era complicado. A auditoria mostrou-me que em 30 minutos de chamada ficava tudo tratado.",
    name: "Sara F.",
    role: "Cabeleireira · Porto",
  },
  {
    quote: "Sem compromisso, mesmo. Fiz a auditoria, vi os números e decidi na hora.",
    name: "Rui C.",
    role: "Handyman · Coimbra",
  },
];

export default function AuditoriaPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditFormSchema),
  });

  const onSubmit = async (data: AuditFormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        setServerError(json.error || "Erro ao enviar. Tenta novamente.");
        return;
      }

      router.push("/obrigado");
    } catch {
      setServerError("Erro de rede. Verifica a tua ligação e tenta novamente.");
    }
  };

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            {/* Left — form */}
            <div>
              <h1 className="font-heading text-3xl font-bold text-[var(--text)] sm:text-4xl mb-3">
                Auditoria de 7 minutos.
              </h1>
              <p className="text-lg text-[var(--muted)] mb-2">
                Sem compromisso.
              </p>
              <p className="text-sm text-[var(--muted)] mb-8 leading-relaxed">
                Mostramos-te em chamada: (1) o teu site atual visto de fora, (2) quantas
                chamadas estás a perder, (3) um exemplo do nosso sistema a funcionar para o teu
                nicho. 7 minutos. Sem PowerPoint.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <FormField label="Nome" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    placeholder="O teu nome"
                    className={inputClass(!!errors.name)}
                    autoComplete="name"
                  />
                </FormField>

                <FormField label="WhatsApp" error={errors.whatsapp?.message}>
                  <input
                    {...register("whatsapp")}
                    placeholder="+351 9XX XXX XXX"
                    type="tel"
                    className={inputClass(!!errors.whatsapp)}
                    autoComplete="tel"
                  />
                </FormField>

                <FormField label="Tipo de negócio" error={errors.niche?.message}>
                  <select
                    {...register("niche")}
                    className={inputClass(!!errors.niche)}
                    defaultValue=""
                  >
                    <option value="" disabled>Seleciona o teu tipo de negócio</option>
                    {niches.map((n) => (
                      <option key={n.slug} value={n.slug}>
                        {n.emoji} {n.name}
                      </option>
                    ))}
                    <option value="outro">Outro</option>
                  </select>
                </FormField>

                <FormField label="Cidade" error={errors.city?.message}>
                  <input
                    {...register("city")}
                    placeholder="Ex: Lisboa, Porto, Coimbra"
                    className={inputClass(!!errors.city)}
                  />
                </FormField>

                <FormField
                  label="O que te faz pensar em automatizar? (opcional)"
                  error={errors.motivation?.message}
                >
                  <textarea
                    {...register("motivation")}
                    placeholder="Ex: Estou a perder chamadas quando estou em obra..."
                    rows={3}
                    className={inputClass(!!errors.motivation)}
                  />
                </FormField>

                <FormField label="Melhor hora para falar" error={errors.bestTime?.message}>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { value: "manha", label: "Manhã (9h–13h)" },
                      { value: "tarde", label: "Tarde (13h–18h)" },
                      { value: "noite", label: "Noite (18h–21h)" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-2 cursor-pointer text-sm text-[var(--text)]"
                      >
                        <input
                          {...register("bestTime")}
                          type="radio"
                          value={opt.value}
                          className="accent-[var(--accent)]"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </FormField>

                <FormField label="" error={errors.rgpd?.message}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      {...register("rgpd")}
                      type="checkbox"
                      className="mt-0.5 accent-[var(--accent)]"
                    />
                    <span className="text-xs text-[var(--muted)] leading-relaxed">
                      Aceito a{" "}
                      <a href="/rgpd" className="text-[var(--accent)] hover:underline" target="_blank">
                        Política de Privacidade
                      </a>{" "}
                      e o tratamento dos meus dados para contacto comercial.
                    </span>
                  </label>
                </FormField>

                {serverError && (
                  <p className="rounded-xl border border-[var(--red)]/30 bg-[rgba(239,68,68,0.08)] px-4 py-3 text-sm text-[var(--red)]">
                    {serverError}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "A enviar..." : "Marcar auditoria gratuita →"}
                </Button>
              </form>
            </div>

            {/* Right — testimonials */}
            <div className="space-y-6 lg:pt-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
                O que dizem quem já fez a auditoria
              </p>
              {testimonials.map((t, i) => (
                <blockquote
                  key={i}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] p-6"
                >
                  <p className="text-[var(--text)] italic leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-xs font-bold text-white">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text)]">{t.name}</p>
                      <p className="text-xs text-[var(--muted)]">{t.role}</p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border px-4 py-3 text-sm text-[var(--text)] bg-[var(--bg-3)] placeholder-[var(--muted)] outline-none transition-colors ${
    hasError
      ? "border-[var(--red)] focus:border-[var(--red)]"
      : "border-[var(--border)] focus:border-[var(--accent)]"
  }`;
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-[var(--text)]">
          {label}
        </label>
      )}
      {children}
      {error && <p className="mt-1 text-xs text-[var(--red)]">{error}</p>}
    </div>
  );
}
