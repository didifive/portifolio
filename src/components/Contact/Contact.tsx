"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FaRegEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarked,
} from "react-icons/fa";
import { LuSendHorizontal } from "react-icons/lu";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { urls } from "@/lib/urls";
import { useTranslations } from "next-intl";

function createContactSchema(t: (key: string) => string) {
  return z.object({
    name: z.string().min(2, t("validation.nameMin")).max(50, t("validation.nameMax")),
    email: z
      .string()
      .min(1, t("validation.emailRequired"))
      .refine((value) => value.includes("@") && value.includes("."), {
        message: t("validation.emailInvalid"),
      }),
    subject: z.string().min(5, t("validation.subjectMin")).max(100, t("validation.subjectMax")),
    message: z.string().min(10, t("validation.messageMin")).max(500, t("validation.messageMax")),
  });
}

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

export const Contact = () => {
  const { toast } = useToast();
  const t = useTranslations("contact");
  const contactSchema = createContactSchema(t);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Envia dados para a API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        // Log detalhado do erro para debug
        console.error("Erro da API:", {
          status: response.status,
          statusText: response.statusText,
          result,
        });

        throw new Error(
          result.message || `Erro ${response.status}: ${response.statusText}`
        );
      }

      toast({
        title: t("toast.successTitle"),
        description: t("toast.successDescription"),
        variant: "default",
      });

      reset(); // Limpa o formulário
    } catch (error) {
      console.error("Erro ao enviar email:", error);

      toast({
        title: t("toast.errorTitle"),
        description:
          error instanceof Error ? error.message : t("toast.errorDescription"),
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      id: "email",
      icon: <FaRegEnvelope className="h-5 w-5" />,
      label: t("contactInfo.email"),
      value: urls.email,
      action: "mailto:luis@zancanela.dev.br",
    },
    // {
    //   icon: <FaPhone className="h-5 w-5" />,
    //   label: "WhatsApp",
    //   value: "+55 (61) 99294-3297",
    //   action: "https://wa.me/5561992943297",
    // },
    {
      id: "location",
      icon: <FaMapMarked className="h-5 w-5" />,
      label: t("contactInfo.location"),
      value: t("contactInfo.locationValue"),
      action: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="h-5 w-5" />,
      label: "GitHub",
      url: urls.github,
      color: "hover:text-foreground",
    },
    {
      icon: <FaLinkedin className="h-5 w-5" />,
      label: "LinkedIn",
      url: urls.linkedin,
      color: "hover:text-blue-600",
    },
    // {
    //   icon: <FaInstagram className="h-5 w-5" />,
    //   label: "Instagram",
    //   url: "https://www.instagram.com/mykesousa",
    //   color: "hover:text-pink-600",
    // },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
              {t("title")}
            </h2>
            <p className="text-foreground/80 dark:text-white/90 text-lg max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-foreground dark:text-white">
                  {t("infoTitle")}
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.id} className="flex items-center space-x-4">
                      <div className="bg-gradient-primary p-2 rounded-lg text-white">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-foreground dark:text-white">
                          {info.label}
                        </p>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="text-foreground/70 dark:text-white/80 hover:text-primary dark:hover:text-blue-400 transition-smooth"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground/70 dark:text-white/80">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-medium mb-4 text-foreground dark:text-white">
                  {t("socialTitle")}
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      className={`p-3 bg-muted rounded-lg transition-smooth ${social.color}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card shadow="soft">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="font-medium text-foreground dark:text-white">
                        {t("availabilityTitle")}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70 dark:text-white/80">
                      {t("availabilityText")}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card shadow="medium">
                <CardHeader>
                  <CardTitle>{t("formTitle")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("labels.name")}</Label>
                        <Input
                          id="name"
                          placeholder={t("placeholders.name")}
                          error={!!errors.name}
                          {...register("name")}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("labels.email")}</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t("placeholders.email")}
                          error={!!errors.email}
                          {...register("email")}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{t("labels.subject")}</Label>
                      <Input
                        id="subject"
                        placeholder={t("placeholders.subject")}
                        error={!!errors.subject}
                        {...register("subject")}
                      />
                      {errors.subject && (
                        <p className="text-sm text-destructive">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("labels.message")}</Label>
                      <Textarea
                        id="message"
                        placeholder={t("placeholders.message")}
                        rows={6}
                        {...register("message")}
                        error={!!errors.message}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          ...
                        </>
                      ) : (
                        <>
                          <LuSendHorizontal className="h-4 w-4 mr-2" />
                          {t("buttons.submit")}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
