import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { 
          success: false, 
          message: "RESEND_API_KEY não configurada" 
        },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Teste simples de conectividade
    const testResult = await resend.emails.send({
      from: "Maykon Sousa <contato@devpool.com.br>",
      to: "maykon.sousa@hotmail.com",
      subject: "Teste de Conectividade - Resend",
      html: "<h1>Teste</h1><p>Se você recebeu este email, o Resend está funcionando!</p>",
    });

    if (testResult.error) {
      console.error("Erro no teste Resend:", testResult.error);
      return NextResponse.json(
        {
          success: false,
          message: "Erro ao testar Resend",
          error: testResult.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Resend funcionando corretamente!",
      messageId: testResult.data?.id,
    });

  } catch (error) {
    console.error("Erro no teste:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Erro interno no teste",
        error: String(error),
      },
      { status: 500 }
    );
  }
}
