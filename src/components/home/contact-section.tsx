"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { WhatsappFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactEmail } from "@/actions/send-contact-email";
import { ProfileVisual } from "@/components/home/profile-visual";
import { PortfolioButton } from "@/components/portfolio-button";
import { Reveal } from "@/components/reveal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import {
  type ContactFormValues,
  contactSchema,
  contactServiceOptions,
} from "@/lib/contact-form";
import { formatBrazilianPhone } from "@/lib/phone";

const whatsappHref = "https://wa.me/5519994012785";

export function ContactSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);

    const result = await sendContactEmail(values);

    if (!result.success) {
      setSubmitError(result.error);
      return;
    }

    setIsSuccess(true);
  }

  function handleReset() {
    form.reset();
    setIsSuccess(false);
    setSubmitError(null);
  }

  return (
    <section
      id="contato"
      className="relative scroll-mt-24 overflow-hidden bg-background px-5 py-20 text-foreground sm:scroll-mt-28 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 border-border border-t pt-14 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:gap-20 lg:pt-20">
        <Reveal direction="right" distance={34}>
          <ProfileVisual
            variant="code"
            text="OLÁ"
            className="max-w-100 px-6 py-5 sm:px-8 md:mx-0 md:max-w-120"
            contato={true}
          />
        </Reveal>

        <div className="min-w-0 p-5 sm:p-7 lg:p-8">
          <AnimatePresence mode="wait" initial={false}>
            {isSuccess ? (
              <motion.div
                key="contact-success"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
              >
                <Reveal>
                  <SuccessMessage onReset={handleReset} />
                </Reveal>
              </motion.div>
            ) : (
              <motion.div
                key="contact-form"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="space-y-10"
              >
                <Reveal as="header">
                  <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
                    Contato
                  </p>
                  <h2 className="max-w-3xl font-semibold text-4xl leading-none tracking-normal sm:text-6xl lg:text-7xl">
                    Vamos transformar sua ideia em projeto
                  </h2>
                  <p className="mt-6 max-w-xl font-inter text-lg text-muted-foreground leading-8">
                    Conte um pouco sobre o que você precisa. Eu retorno com os
                    próximos passos para tirar a ideia do papel com clareza.
                  </p>
                </Reveal>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Reveal delay={0.08} distance={16} staggerIndex={0}>
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-inter text-accent">
                                Nome
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Seu nome"
                                  className="h-12 border-border bg-surface-elevated text-foreground placeholder:text-foreground-placeholder focus-visible:border-accent/60 focus-visible:ring-accent/20"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </Reveal>

                      <Reveal delay={0.08} distance={16} staggerIndex={1}>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-inter text-accent">
                                E-mail
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="voce@email.com"
                                  className="h-12 border-border bg-surface-elevated text-foreground placeholder:text-foreground-placeholder focus-visible:border-accent/60 focus-visible:ring-accent/20"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </Reveal>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Reveal delay={0.08} distance={16} staggerIndex={2}>
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-inter text-accent">
                                Servico
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-12 w-full border-border bg-surface-elevated text-foreground focus-visible:border-accent/60 focus-visible:ring-accent/20">
                                    <SelectValue placeholder="Escolha o tipo de projeto" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="border-border bg-background text-foreground">
                                  {contactServiceOptions.map((option) => (
                                    <SelectItem
                                      key={option.value}
                                      value={option.value}
                                      className="focus:bg-accent focus:text-accent-foreground"
                                    >
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </Reveal>

                      <Reveal delay={0.08} distance={16} staggerIndex={3}>
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-inter text-accent">
                                Telefone
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  inputMode="numeric"
                                  autoComplete="tel"
                                  placeholder="(19) 99999-9999"
                                  className="h-12 border-border bg-surface-elevated text-foreground placeholder:text-foreground-placeholder focus-visible:border-accent/60 focus-visible:ring-accent/20"
                                  value={field.value}
                                  onChange={(event) =>
                                    field.onChange(
                                      formatBrazilianPhone(event.target.value),
                                    )
                                  }
                                  onBlur={field.onBlur}
                                  name={field.name}
                                  ref={field.ref}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </Reveal>
                    </div>

                    <Reveal delay={0.08} distance={16} staggerIndex={4}>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-inter text-accent">
                              Descricao do projeto
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Conte sobre seu objetivo, prazo, referências ou qualquer detalhe importante."
                                className="min-h-36 resize-none border-border bg-surface-elevated text-foreground placeholder:text-foreground-placeholder focus-visible:border-accent/60 focus-visible:ring-accent/20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </Reveal>

                    {submitError ? (
                      <p
                        role="alert"
                        className="font-inter text-destructive text-sm"
                      >
                        {submitError}
                      </p>
                    ) : null}

                    <Reveal
                      delay={0.08}
                      staggerIndex={5}
                      className="flex flex-col items-center gap-4 pt-2 xl:flex-row xl:justify-between"
                    >
                      <PortfolioButton
                        type="submit"
                        variant="primary"
                        size="sm"
                        disabled={form.formState.isSubmitting}
                        icon={
                          form.formState.isSubmitting ? (
                            <Spinner className="size-5" />
                          ) : undefined
                        }
                        className="w-full xl:w-auto"
                      >
                        {form.formState.isSubmitting
                          ? "Enviando..."
                          : "Enviar mensagem"}
                      </PortfolioButton>

                      <WhatsappGhostLink />
                    </Reveal>
                  </form>
                </Form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex min-h-136 flex-col justify-center">
      <div className="mb-8 grid size-16 place-items-center rounded-full border border-accent/40 bg-accent/10 text-accent shadow-[0_0_34px_rgb(var(--accent-rgb)/0.18)]">
        <CheckCircle2 className="size-8" />
      </div>

      <p className="mb-4 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
        Mensagem enviada
      </p>
      <h3 className="font-semibold text-4xl text-foreground leading-none tracking-normal sm:text-5xl">
        Recebi suas informações.
      </h3>
      <p className="mt-5 max-w-xl font-inter text-foreground-muted text-lg leading-8">
        Em breve entro em contato para entender melhor o projeto e te orientar
        nos próximos passos.
      </p>
      <p className="mt-4 max-w-xl font-inter text-base text-foreground-subtle leading-7">
        Se preferir acelerar a conversa, você também pode me chamar pelo
        WhatsApp.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <PortfolioButton
          type="button"
          variant="outline"
          size="sm"
          onClick={onReset}
        >
          Enviar outra mensagem
        </PortfolioButton>
        <WhatsappGhostLink />
      </div>
    </div>
  );
}

function WhatsappGhostLink() {
  return (
    <Link
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center justify-center gap-2 font-inter font-semibold text-foreground-muted text-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <HugeiconsIcon icon={WhatsappFreeIcons} strokeWidth={1.5} />
      <span>Prefere conversar pelo WhatsApp?</span>
    </Link>
  );
}
