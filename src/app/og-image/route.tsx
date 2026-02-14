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
            backgroundColor: "#0f2e1a",
            backgroundImage: "linear-gradient(45deg, #0f2e1a 0%, #1a3a24 100%)",
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
                "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
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
                background: "linear-gradient(90deg, #22c55e 0%, #10b981 100%)",
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
                color: "#d1fae5",
                marginBottom: "40px",
                maxWidth: "800px",
                lineHeight: 1.3,
              }}
            >
              Desenvolvedor Back-End
            </div>

            {/* Tecnologias */}
            <div
              style={{
                display: "flex",
                gap: "24px",
                fontSize: "24px",
                color: "#a7f3d0",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  background: "rgba(34, 197, 94, 0.15)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                }}
              >
                Java
              </span>
              <span
                style={{
                  background: "rgba(34, 197, 94, 0.15)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                }}
              >
                Spring
              </span>
              <span
                style={{
                  background: "rgba(34, 197, 94, 0.15)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                }}
              >
                TypeScript
              </span>
              <span
                style={{
                  background: "rgba(34, 197, 94, 0.15)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                }}
              >
                Azure
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
              color: "#6ee7b7",
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
