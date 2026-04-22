import { z } from "zod";

export const auditFormSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome demasiado longo"),
  whatsapp: z
    .string()
    .min(9, "Número inválido")
    .max(20, "Número inválido")
    .regex(/^[\d\s+()-]+$/, "Número inválido"),
  niche: z.string().min(1, "Seleciona o tipo de negócio"),
  city: z
    .string()
    .min(2, "Cidade inválida")
    .max(100, "Cidade demasiado longa"),
  motivation: z.string().max(1000, "Demasiado longo").optional(),
  bestTime: z.enum(["manha", "tarde", "noite"], {
    required_error: "Seleciona a melhor hora",
  }),
  rgpd: z.literal(true, {
    errorMap: () => ({ message: "Tens de aceitar a política de privacidade" }),
  }),
});

export type AuditFormData = z.infer<typeof auditFormSchema>;
