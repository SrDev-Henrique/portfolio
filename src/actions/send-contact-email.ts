"use server";

import { Resend } from "resend";
import {
  buildContactEmailHtml,
  buildContactEmailText,
  contactSchema,
  getContactServiceLabel,
} from "@/lib/contact-form";
import { formatBrazilianPhoneForDisplay } from "@/lib/phone";
import { siteConfig } from "@/lib/seo";

export type SendContactEmailResult =
  | { success: true }
  | { success: false; error: string };

export async function sendContactEmail(
  data: unknown,
): Promise<SendContactEmailResult> {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      error: "Dados invalidos. Revise o formulario e tente novamente.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      error: "Servico de e-mail indisponivel no momento.",
    };
  }

  const { name, email, phone, service, message } = parsed.data;
  const serviceLabel = getContactServiceLabel(service);
  const resend = new Resend(apiKey);

  const emailPayload = {
    name,
    email,
    phone: formatBrazilianPhoneForDisplay(phone),
    message,
    service: serviceLabel,
  };

  try {
    const { error } = await resend.emails.send({
      from: `${siteConfig.name} <${siteConfig.email}>`,
      to: [siteConfig.email],
      replyTo: email,
      subject: `Novo contato pelo portfolio — ${name}`,
      html: buildContactEmailHtml(emailPayload),
      text: buildContactEmailText(emailPayload),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        error: "Nao foi possivel enviar a mensagem. Tente novamente em instantes.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Contact email error:", error);
    return {
      success: false,
      error: "Nao foi possivel enviar a mensagem. Tente novamente em instantes.",
    };
  }
}
