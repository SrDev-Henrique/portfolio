import { z } from "zod";
import { getPhoneDigits } from "@/lib/phone";

export const contactServiceValues = [
  "website",
  "webapp",
  "ecommerce",
  "api",
  "unsure",
] as const;

export const contactServiceOptions = [
  { label: "Website", value: "website" },
  { label: "Webapp", value: "webapp" },
  { label: "E-commerce", value: "ecommerce" },
  { label: "API", value: "api" },
  { label: "Ainda não sei ao certo", value: "unsure" },
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  email: z.string().email("Informe um e-mail valido."),
  phone: z.string().refine(
    (value) => {
      const digits = getPhoneDigits(value);
      return digits.length === 10 || digits.length === 11;
    },
    { message: "Informe um telefone valido com DDD." },
  ),
  service: z.enum(contactServiceValues, {
    error: "Escolha um servico.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Descreva seu projeto com pelo menos 10 caracteres."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

const serviceLabels: Record<ContactFormValues["service"], string> = {
  api: "API",
  ecommerce: "E-commerce",
  unsure: "Ainda não sei ao certo",
  webapp: "Webapp",
  website: "Website",
};

export function getContactServiceLabel(service: ContactFormValues["service"]) {
  return serviceLabels[service];
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function buildContactEmailHtml({
  email,
  message,
  name,
  phone,
  service,
}: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
  <body style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#111;">
    <h1 style="font-size:20px;margin:0 0 16px;">Novo contato pelo portfolio</h1>
    <p style="margin:0 0 8px;"><strong>Nome:</strong> ${escapeHtml(name)}</p>
    <p style="margin:0 0 8px;"><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p style="margin:0 0 8px;"><strong>Telefone:</strong> ${escapeHtml(phone)}</p>
    <p style="margin:0 0 16px;"><strong>Servico:</strong> ${escapeHtml(service)}</p>
    <p style="margin:0 0 8px;font-weight:600;">Descricao do projeto</p>
    <p style="margin:0;white-space:pre-wrap;">${escapeHtml(message)}</p>
  </body>
</html>`;
}

export function buildContactEmailText({
  email,
  message,
  name,
  phone,
  service,
}: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  const lines = [
    "Novo contato pelo portfolio",
    "",
    `Nome: ${name}`,
    `E-mail: ${email}`,
    `Telefone: ${phone}`,
    `Servico: ${service}`,
    "",
    "Descricao do projeto:",
    message,
  ];

  return lines.join("\n");
}
