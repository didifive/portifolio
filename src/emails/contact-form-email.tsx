import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Container,
  Hr,
} from "@react-email/components";

interface ContactFormEmailProps {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}

export default function ContactFormEmail({
  name,
  email,
  subject,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Nova mensagem de contato de {name}</Preview>
      <Container style={containerStyle}>
        <Section style={mainStyle}>
          <Heading style={h1Style}>Nova Mensagem de Contato</Heading>

          <Text style={textStyle}>
            Você recebeu uma nova mensagem através do formulário de contato do
            seu portfólio:
          </Text>

          <Hr style={hrStyle} />

          <Row>
            <Text style={labelStyle}>Nome:</Text>
            <Text style={valueStyle}>{name}</Text>
          </Row>

          <Row>
            <Text style={labelStyle}>Email:</Text>
            <Text style={valueStyle}>{email}</Text>
          </Row>

          <Row>
            <Text style={labelStyle}>Assunto:</Text>
            <Text style={valueStyle}>{subject}</Text>
          </Row>

          <Hr style={hrStyle} />

          <Text style={labelStyle}>Mensagem:</Text>
          <Text style={messageStyle}>{message}</Text>

          <Hr style={hrStyle} />

          <Text style={footerStyle}>
            Esta mensagem foi enviada através do formulário de contato do seu
           ame portfólio. Para responder, use o email: {email}
          </Text>
        </Section>
      </Container>
    </Html>
  );
}

// Estilos
const containerStyle = {
  margin: "0 auto",
  padding: "20px 0 48px",
  fontFamily: "Roboto, sans-serif",
};

const mainStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  borderRadius: "8px",
  padding: "45px",
};

const h1Style = {
  color: "#059669",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0 20px",
  padding: "0",
};

const textStyle = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "16px 0",
};

const labelStyle = {
  color: "#059669",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "8px 0 4px",
};

const valueStyle = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0 0 16px",
  fontWeight: "500",
};

const messageStyle = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "8px 0 20px",
  padding: "16px",
  backgroundColor: "#f0fdf4",
  borderRadius: "6px",
  border: "1px solid #dcfce7",
  whiteSpace: "pre-wrap" as const,
};

const hrStyle = {
  borderColor: "#e6e6e6",
  margin: "20px 0",
};

const footerStyle = {
  color: "#666",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "20px 0 0",
  fontStyle: "italic" as const,
};
