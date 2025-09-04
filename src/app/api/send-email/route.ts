import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import { Resend } from "resend";
import ContactFormEmail from "@/emails/contact-form-email";
import ConfirmationEmail from "@/emails/confirmation-email";
import { z } from "zod";
import { urls } from "@/lib/urls";

// Schema de validação para o request body
const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export async function POST(request: NextRequest) {
  try {
    // Verifica se a API key está configurada
    if (!process.env.RESEND_API_KEY) {
      throw new Error(
        'RESEND_API_KEY não configurada. Configure a variável de ambiente RESEND_API_KEY.'
      );
    }

    // Inicialização do Resend dentro da função
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Parse e validação do body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const { name, email, subject, message } = validatedData;

    // Render dos templates de email usando react-email
    const contactEmailHtml = await render(
      ContactFormEmail({
        name,
        email,
        subject,
        message,
      })
    );

    const confirmationEmailHtml = await render(
      ConfirmationEmail({
        userName: name,
      })
    );

    // Configurações de email
    const fromEmail = "Luis Zancanela <luis@zancanela.dev.br>";
    const toEmail = urls.email; // Email que receberá as mensagens

    console.log("Enviando emails via Resend SDK...");
    console.log("From:", fromEmail);
    console.log("To:", toEmail);
    console.log("Reply-to:", email);

    // Envio paralelo dos dois emails usando Resend SDK
    const [contactResult, confirmationResult] = await Promise.all([
      // 1. Email com a mensagem do formulário (para você)
      resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `Contato: ${subject}`,
        html: contactEmailHtml,
        replyTo: email, // reply-to para o email do usuário
      }),
      
      // 2. Email de confirmação (para o usuário)
      resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "Obrigado pelo contato! 👋",
        html: confirmationEmailHtml,
      }),
    ]);

    // Verificar se houve erro nos envios
    if (contactResult.error) {
      console.error("Erro detalhado do email de contato:", contactResult.error);
      const errorMsg = contactResult.error['error' as keyof typeof contactResult.error] || contactResult.error.message || 'Erro desconhecido';
      throw new Error(`Erro ao enviar email de contato: ${errorMsg}`);
    }

    if (confirmationResult.error) {
      console.error("Erro detalhado do email de confirmação:", confirmationResult.error);
      const errorMsg = confirmationResult.error['error' as keyof typeof confirmationResult.error] || confirmationResult.error.message || 'Erro desconhecido';
      throw new Error(`Erro ao enviar email de confirmação: ${errorMsg}`);
    }

    console.log("Emails enviados com sucesso:");
    console.log("- Mensagem de contato (Resend):", contactResult.data?.id);
    console.log("- Email de confirmação (Resend):", confirmationResult.data?.id);

    return NextResponse.json(
      {
        success: true,
        message: "Emails enviados com sucesso!",
        contactMessageId: contactResult.data?.id,
        confirmationMessageId: confirmationResult.data?.id,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Erro ao enviar email:", error);

    // Tratamento específico para erros de validação do Zod
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Dados inválidos",
          errors: error.issues.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Tratamento para erros de configuração
    if (error instanceof Error && error.message.includes("RESEND_API_KEY não configurada")) {
      return NextResponse.json(
        {
          success: false,
          message: "Erro de configuração do servidor - Resend não configurado",
          error: process.env.NODE_ENV === "development" ? error.message : undefined,
        },
        { status: 500 }
      );
    }

    // Erro genérico
    return NextResponse.json(
      {
        success: false,
        message: "Erro interno do servidor",
        error: process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      { status: 500 }
    );
  }
}

// Método OPTIONS para CORS (caso necessário)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function OPTIONS(_request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
