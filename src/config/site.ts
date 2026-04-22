export const siteConfig = {
  name: "Autoflow",
  tagline: "Não atendes? O cliente liga ao próximo.",
  description:
    "A Autoflow responde por ti, agenda e fecha clientes — enquanto estás a trabalhar.",
  url: "https://autoflow.pt",
  email: process.env.NEXT_PUBLIC_EMAIL || "hello@autoflow.pt",
  phone: process.env.NEXT_PUBLIC_PHONE || "+351 910 000 000",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "351910000000",
  whatsappUrl: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "351910000000"}`,
  nif: "XXXXXXXXX",
  address: "Lisboa, Portugal",
  operatedBy: "Autoflow",

  // Scarcity — edit monthly
  vagasTotal: 5,
  vagasRestantes: 2,
  vagasMes: "maio",

  pricing: {
    arrancar: {
      name: "Arrancar",
      monthly: 39,
      setup: 199,
      annualMonthly: 32, // 39 * 10 / 12
    },
    crescer: {
      name: "Crescer",
      monthly: 149,
      setup: 349,
      annualMonthly: 124,
      featured: true,
    },
    total: {
      name: "Total",
      monthly: 379,
      setup: 590,
      annualMonthly: 315,
    },
  },
} as const;

export type PricingTier = keyof typeof siteConfig.pricing;
