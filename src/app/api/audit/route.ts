import { NextRequest, NextResponse } from "next/server";
import { auditFormSchema } from "@/lib/validations";
import { siteConfig } from "@/config/site";

const bestTimeLabels: Record<string, string> = {
  manha: "Manhã (9h–13h)",
  tarde: "Tarde (13h–18h)",
  noite: "Noite (18h–21h)",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = auditFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Send email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const emailBody = `
Nova auditoria submetida:

Nome: ${data.name}
WhatsApp: ${data.whatsapp}
Tipo de negócio: ${data.niche}
Cidade: ${data.city}
Melhor hora: ${bestTimeLabels[data.bestTime]}
Motivação: ${data.motivation || "—"}

Submetido: ${new Date().toLocaleString("pt-PT")}
      `.trim();

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Autoflow <noreply@autoflow.pt>",
          to: [siteConfig.email],
          subject: `Nova auditoria — ${data.name} (${data.niche}, ${data.city})`,
          text: emailBody,
        }),
      });
    } else {
      // Dev fallback
      console.log("[AUDIT FORM] Submission (no RESEND_API_KEY):", data);
    }

    // Optional: POST to GHL webhook
    const ghlWebhook = process.env.GHL_WEBHOOK_URL;
    if (ghlWebhook) {
      fetch(ghlWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.whatsapp,
          niche: data.niche,
          city: data.city,
          bestTime: bestTimeLabels[data.bestTime],
          motivation: data.motivation,
          source: "autoflow-website-audit",
        }),
      }).catch(() => {}); // fire-and-forget
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[AUDIT] Error:", error);
    return NextResponse.json(
      { error: "Erro interno. Tenta novamente ou contacta-nos pelo WhatsApp." },
      { status: 500 }
    );
  }
}
