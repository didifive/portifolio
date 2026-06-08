type ContactFormEmailProps = {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeText(value: string) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

export default function ContactFormEmail({ name, email, subject, message }: ContactFormEmailProps) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeText(message);

  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Nova mensagem de contato</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f7f6;font-family:Arial,Helvetica,sans-serif;color:#333333;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">Nova mensagem de contato de ${safeName}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f7f6;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background-color:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:32px 32px 24px;background:linear-gradient(135deg,#059669 0%,#22c55e 100%);color:#ffffff;">
                <div style="font-size:24px;font-weight:700;line-height:1.2;">Nova Mensagem de Contato</div>
                <div style="margin-top:8px;font-size:14px;line-height:1.6;opacity:0.95;">Você recebeu uma nova mensagem através do formulário do portfólio.</div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <div style="font-size:14px;line-height:1.7;margin:0 0 20px;color:#374151;">Detalhes da mensagem recebida:</div>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0 4px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#059669;">Nome</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 14px;font-size:14px;line-height:1.7;color:#1f2937;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0 4px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#059669;">Email</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 14px;font-size:14px;line-height:1.7;color:#1f2937;">${safeEmail}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0 4px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#059669;">Assunto</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 14px;font-size:14px;line-height:1.7;color:#1f2937;">${safeSubject}</td>
                  </tr>
                </table>

                <div style="height:1px;background-color:#e5e7eb;margin:16px 0 18px;"></div>

                <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#059669;margin:0 0 8px;">Mensagem</div>
                <div style="font-size:14px;line-height:1.8;color:#1f2937;background-color:#f0fdf4;border:1px solid #dcfce7;border-radius:10px;padding:16px;white-space:normal;">${safeMessage}</div>

                <div style="height:1px;background-color:#e5e7eb;margin:24px 0 18px;"></div>

                <div style="font-size:12px;line-height:1.7;color:#6b7280;">Esta mensagem foi enviada através do formulário de contato do seu portfólio. Para responder, use o email: <a href="mailto:${safeEmail}" style="color:#059669;text-decoration:none;">${safeEmail}</a></div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
