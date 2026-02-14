import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Section,
  Text,
  Container,
  Hr,
  Button,
  Link,
} from "@react-email/components";
import { urls } from "@/lib/urls";
import { FaLinkedin, FaRegEnvelope } from "react-icons/fa";

interface ConfirmationEmailProps {
  readonly userName: string;
}

export default function ConfirmationEmail({
  userName,
}: ConfirmationEmailProps) {
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
      <Preview>Obrigado pelo contato, {userName}!</Preview>
      <Container style={containerStyle}>
        <Section style={mainStyle}>
          <div style={headerStyle}>
            <Heading style={h1Style}>Obrigado pelo contato! 👋</Heading>
          </div>

          <Text style={greetingStyle}>Olá {userName},</Text>

          <Text style={textStyle}>
            Recebi sua mensagem e agradeço pelo interesse em entrar em contato
            comigo!
          </Text>

          <Text style={textStyle}>
            Responderei por email em breve, geralmente em até 24 horas.
            <strong>
              Mas se precisar de um contato mais rápido, pode me chamar
              diretamente pelo LinkedIn
            </strong>{" "}
            - use os botões abaixo!
          </Text>

          <Hr style={hrStyle} />

          <div style={contactSectionStyle}>
            <div style={buttonContainerStyle}>
              {/* <Button
                href="https://wa.me/5561992943297?text=Olá! Acabei de enviar uma mensagem pelo seu portfólio e gostaria de conversar."
                style={whatsappButtonStyle}
              >
                <FaWhatsapp /> WhatsApp
              </Button> */}

              <Button
                href={urls.linkedin}
                style={linkedinButtonStyle}
              >
                <FaLinkedin /> LinkedIn
              </Button>
            </div>
          </div>

          <Hr style={hrStyle} />

          <div style={aboutSectionStyle}>
            <Heading style={h2Style}>👨‍💻 Um pouco sobre mim</Heading>

            <Text style={textStyle}>
              Sou desenvolvedor Back-End apaixonado por criar soluções
              com APIs ou integrações com mensageria. Especializado em
              tecnologias modernas como Java, Spring Boot e Apache Camel.
            </Text>

            <Text style={textStyle}>
              <strong>Principais tecnologias:</strong>
            </Text>

            <ul style={listStyle}>
              <li style={listItemStyle}>
                <strong>Backend:</strong> Java, Spring Boot, Apache Camel, Node.js, APIs REST, Microserviços
              </li>
              <li style={listItemStyle}>
                <strong>Frontend:</strong> React, Next.js, TypeScript, Angular, Tailwind CSS
              </li>
              <li style={listItemStyle}>
                <strong>DevOps & Cloud:</strong> Azure, Azure DevOps, Docker, Kubernetes
              </li>
            </ul>
          </div>

          <Hr style={hrStyle} />

          <div style={footerStyle}>
            <Text style={footerTextStyle}>
              <strong>Luis Zancanela</strong>
              <br />
              Desenvolvedor Full Stack
              <br />
              Orlândia, SP - Brasil
            </Text>

            <Text style={footerTextStyle}>
              <FaRegEnvelope />{" "}
              <Link href={urls.mailto} style={linkStyle}>
                {urls.email}
              </Link>
              <br />
              <FaLinkedin />{" "}
              <Link
                href={urls.linkedin}
                style={linkStyle}
              >
                LinkedIn
              </Link>
              {/* <br />
              <FaWhatsapp />{" "}
              <Link href="https://wa.me/5561992943297" style={linkStyle}>
                WhatsApp: +55 (61) 99294-3297
              </Link> */}
            </Text>

            <Text style={disclaimerStyle}>
              Este é um email automático de confirmação. Não é necessário
              responder a esta mensagem. Em breve entrarei em contato através do
              email que você forneceu.
            </Text>
          </div>
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
  border: "1px solid #e6e6e6",
  borderRadius: "8px",
  overflow: "hidden",
};

const headerStyle = {
  background: "linear-gradient(135deg, #059669 0%, #22C55E 100%)",
  padding: "40px 45px 30px",
  textAlign: "center" as const,
};

const h1Style = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0",
  textAlign: "center" as const,
};

const h2Style = {
  color: "#333",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "20px 0 15px",
};

const greetingStyle = {
  color: "#333",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "30px 45px 20px",
};

const textStyle = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "16px 45px",
};

const contactSectionStyle = {
  margin: "30px 45px",
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "6px",
  border: "1px solid #e9ecef",
};

const aboutSectionStyle = {
  margin: "30px 45px",
  padding: "20px",
  backgroundColor: "#f0fdf4",
  borderRadius: "6px",
  border: "1px solid #dcfce7",
};

const buttonContainerStyle = {
  display: "flex",
  gap: "12px",
  margin: "20px 0",
  justifyContent: "center",
};

const whatsappButtonStyle = {
  backgroundColor: "#25D366",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
  margin: "0 6px",
};

const linkedinButtonStyle = {
  backgroundColor: "#0077B5",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
  margin: "0 6px",
};

const listStyle = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "10px 45px",
  paddingLeft: "20px",
};

const listItemStyle = {
  margin: "8px 0",
};

const hrStyle = {
  borderColor: "#e6e6e6",
  margin: "30px 0",
};

const footerStyle = {
  backgroundColor: "#f8f9fa",
  padding: "30px 45px",
  textAlign: "center" as const,
  borderTop: "1px solid #e6e6e6",
};

const footerTextStyle = {
  color: "#666",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "10px 0",
  textAlign: "center" as const,
};

const linkStyle = {
  color: "#059669",
  textDecoration: "none",
};

const disclaimerStyle = {
  color: "#999",
  fontSize: "11px",
  lineHeight: "16px",
  margin: "20px 0 0",
  fontStyle: "italic" as const,
  textAlign: "center" as const,
};
