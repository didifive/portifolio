"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FaRegEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarked,
  FaInstagram,
} from "react-icons/fa";
import { LuSendHorizontal } from "react-icons/lu";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { urls } from "@/lib/urls";

// Schema de validação com Zod
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(50, "Nome deve ter no máximo 50 caracteres"),
  email: z
    .string()
    .email("Por favor, insira um email válido")
    .min(1, "Email é obrigatório"),
  subject: z
    .string()
    .min(5, "Assunto deve ter pelo menos 5 caracteres")
    .max(100, "Assunto deve ter no máximo 100 caracteres"),
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(500, "Mensagem deve ter no máximo 500 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const { toast } = useToast();
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
        title: "Mensagens enviadas!",
        description:
          "Obrigado pelo contato! Você receberá um email de confirmação e responderei em breve.",
        variant: "default",
      });

      reset(); // Limpa o formulário
    } catch (error) {
      console.error("Erro ao enviar email:", error);

      toast({
        title: "Erro ao enviar mensagem",
        description:
          error instanceof Error
            ? error.message
            : "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaRegEnvelope className="h-5 w-5" />,
      label: "Email",
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
      icon: <FaMapMarked className="h-5 w-5" />,
      label: "Localização",
      value: "Orlândia, SP - Brasil",
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
              Vamos Conversar?
            </h2>
            <p className="text-foreground/80 dark:text-white/90 text-lg max-w-2xl mx-auto">
              Estou sempre aberto para trocar uma ideia sobre tecnologia,
              discutir novos projetos ou oportunidades criativas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-foreground dark:text-white">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
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
                  Redes Sociais
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
                      Open to Help and Learning
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70 dark:text-white/80">
                    Sempre disponível para colaborar em projetos, 
                    tirar dúvidas ou explorar novas ideias. 
                    Em constante aprendizado em tecnologias. 
                    Sinta-se à vontade para entrar em contato.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card shadow="medium">
                <CardHeader>
                  <CardTitle>Envie uma Mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome *</Label>
                        <Input
                          id="name"
                          placeholder="Seu nome completo"
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
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu.email@exemplo.com"
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
                      <Label htmlFor="subject">Assunto *</Label>
                      <Input
                        id="subject"
                        placeholder="Sobre o que gostaria de conversar?"
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
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        placeholder="Descreva seu projeto ou ideia em detalhes..."
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
                          Enviando...
                        </>
                      ) : (
                        <>
                          <LuSendHorizontal className="h-4 w-4 mr-2" />
                          Enviar Mensagem
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
