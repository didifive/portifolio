import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/metadata";

export const runtime = "edge";

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0a0a0a",
            backgroundImage: "linear-gradient(45deg, #0a0a0a 0%, #1a1a1a 100%)",
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          {/* Gradiente de fundo */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            }}
          />

          {/* Conteúdo principal */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "80px",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            {/* Nome */}
            <div
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
                backgroundClip: "text",
                color: "transparent",
                marginBottom: "24px",
              }}
            >
              {siteConfig.author.name}
            </div>

            {/* Descrição */}
            <div
              style={{
                fontSize: "36px",
                color: "#e5e7eb",
                marginBottom: "40px",
                maxWidth: "800px",
                lineHeight: 1.3,
              }}
            >
              Desenvolvedor Full Stack
            </div>

            {/* Tecnologias */}
            <div
              style={{
                display: "flex",
                gap: "24px",
                fontSize: "24px",
                color: "#9ca3af",
              }}
            >
              <span
                style={{
                  background: "rgba(59, 130, 246, 0.1)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                }}
              >
                React
              </span>
              <span
                style={{
                  background: "rgba(59, 130, 246, 0.1)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                }}
              >
                Next.js
              </span>
              <span
                style={{
                  background: "rgba(59, 130, 246, 0.1)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                }}
              >
                TypeScript
              </span>
              <span
                style={{
                  background: "rgba(59, 130, 246, 0.1)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                }}
              >
                Node.js
              </span>
            </div>
          </div>

          {/* URL do site */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              right: "40px",
              fontSize: "20px",
              color: "#6b7280",
            }}
          >
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    console.log(`${message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
