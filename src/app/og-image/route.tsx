import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/metadata";

const styles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f2e1a",
    backgroundImage: `url(${new URL("/hero-bg.png", siteConfig.url).toString()})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontSize: 32,
  } as const,
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // dark linear overlay + subtle green radial highlight for brand tint
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 100%), radial-gradient(circle at 50% 30%, rgba(34, 197, 94, 0.06) 0%, transparent 50%)",
    mixBlendMode: "normal",
  } as const,
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px",
    textAlign: "center",
    zIndex: 1,
  } as const,
  name: {
    fontSize: "72px",
    background: "linear-gradient(90deg, #9ef7c8 0%, #34d67a 100%)",
    backgroundClip: "text",
    color: "transparent",
    textShadow: "0 6px 18px rgba(0,0,0,0.6)",
    marginBottom: "24px",
  } as const,
  description: {
    fontSize: "36px",
    color: "#d1fae5",
    marginBottom: "40px",
    maxWidth: "800px",
    lineHeight: 1.3,
  } as const,
  technologiesContainer: {
    display: "flex",
    gap: "24px",
    fontSize: "24px",
    color: "#a7f3d0",
    flexWrap: "wrap",
    justifyContent: "center",
  } as const,
  techBadge: {
    background: "rgba(0,0,0,0.22)",
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.06)",
  } as const,
  siteUrl: {
    position: "absolute",
    bottom: "40px",
    right: "40px",
    fontSize: "20px",
    color: "#6ee7b7",
  } as const,
};

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div style={styles.container}>
          {/* Gradiente de fundo */}
          <div style={styles.gradientOverlay} />

          {/* Conteúdo principal */}
          <div style={styles.contentWrapper}>
            {/* Nome */}
            <div style={styles.name}>{siteConfig.author.name}</div>

            {/* Descrição */}
            <div style={styles.description}>Software Enginer | Desenvolvedor Back-End</div>

            {/* Tecnologias */}
            <div style={styles.technologiesContainer}>
              <span style={styles.techBadge}>Java</span>
              <span style={styles.techBadge}>Spring</span>
              <span style={styles.techBadge}>Apache Camel</span>
              <span style={styles.techBadge}>TypeScript</span>
              <span style={styles.techBadge}>Next.js</span>
              <span style={styles.techBadge}>Angular</span>
              <span style={styles.techBadge}>Cloud</span>
              <span style={styles.techBadge}>On-Premises</span>
              <span style={styles.techBadge}>SQL</span>
              <span style={styles.techBadge}>NoSQL</span>
            </div>
          </div>

          {/* URL do site */}
          <div style={styles.siteUrl}>{siteConfig.url}</div>
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
