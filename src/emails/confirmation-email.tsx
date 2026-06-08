import { urls } from "@/lib/urls";

type ConfirmationEmailProps = {
  readonly userName: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

export default function ConfirmationEmail({ userName }: ConfirmationEmailProps) {
  const safeUserName = escapeHtml(userName);

  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Obrigado pelo contato</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f7f6;font-family:Arial,Helvetica,sans-serif;color:#333333;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">Obrigado pelo contato, ${safeUserName}!</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f7f6;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background-color:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:40px 32px 28px;background:linear-gradient(135deg,#059669 0%,#22c55e 100%);text-align:center;color:#ffffff;">
                <div style="font-size:28px;font-weight:700;line-height:1.2;margin:0;">Obrigado pelo contato! 👋</div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <div style="font-size:16px;font-weight:700;line-height:1.6;color:#1f2937;margin:0 0 18px;">Olá ${safeUserName},</div>

                <div style="font-size:14px;line-height:1.8;color:#374151;margin:0 0 16px;">Recebi sua mensagem e agradeço pelo interesse em entrar em contato comigo!</div>

                <div style="font-size:14px;line-height:1.8;color:#374151;margin:0 0 24px;">Responderei por email em breve, geralmente em até 24 horas. <strong>Mas se precisar de um contato mais rápido, pode me chamar diretamente pelo LinkedIn</strong> - use os botões abaixo!</div>

                <div style="height:1px;background-color:#e5e7eb;margin:24px 0;"></div>

                <div style="padding:18px;background-color:#f8f9fa;border:1px solid #e5e7eb;border-radius:10px;text-align:center;">
                  <a href="${urls.linkedin}" style="display:inline-block;background-color:#0077b5;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:12px 24px;border-radius:8px;">LinkedIn</a>
                </div>

                <div style="height:1px;background-color:#e5e7eb;margin:24px 0;"></div>

                <div style="padding:18px;background-color:#f0fdf4;border:1px solid #dcfce7;border-radius:10px;">
                  <div style="font-size:20px;font-weight:700;line-height:1.3;color:#1f2937;margin:0 0 14px;">👨‍💻 Um pouco sobre mim</div>
                  <div style="font-size:14px;line-height:1.8;color:#374151;margin:0 0 14px;">Sou desenvolvedor Back-End apaixonado por criar soluções com APIs ou integrações com mensageria. Especializado em tecnologias modernas como Java, Spring Boot e Apache Camel.</div>
                  <div style="font-size:14px;line-height:1.8;color:#374151;margin:0 0 10px;"><strong>Principais tecnologias:</strong></div>
                  <ul style="margin:0;padding-left:20px;color:#374151;font-size:14px;line-height:1.8;">
                    <li style="margin:0 0 8px;"><strong>Backend:</strong> Java, Spring Boot, Apache Camel, Node.js, APIs REST, Microserviços</li>
                    <li style="margin:0 0 8px;"><strong>Frontend:</strong> React, Next.js, TypeScript, Angular, Tailwind CSS</li>
                    <li style="margin:0;"><strong>DevOps & Cloud:</strong> Azure, Azure DevOps, Docker, Kubernetes</li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px;background-color:#f8f9fa;border-top:1px solid #e5e7eb;text-align:center;">
                <div style="font-size:13px;line-height:1.7;color:#6b7280;margin:0 0 8px;"><strong>Luis Zancanela</strong><br />Desenvolvedor Full Stack<br />Orlândia, SP - Brasil</div>
                <div style="font-size:13px;line-height:1.7;color:#6b7280;margin:0 0 8px;">
                  <a href="${urls.mailto}" style="color:#059669;text-decoration:none;">${urls.email}</a><br />
                  <a href="${urls.linkedin}" style="color:#059669;text-decoration:none;">LinkedIn</a>
                </div>
                <div style="font-size:11px;line-height:1.6;color:#9ca3af;font-style:italic;">Este é um email automático de confirmação. Não é necessário responder a esta mensagem. Em breve entrarei em contato através do email que você forneceu.</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
