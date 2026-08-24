import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { HomeStructuredData } from "@/components/StructuredData";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { defaultMetadata, generateViewport } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata;
export const viewport: Viewport = generateViewport();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html suppressHydrationWarning>
      <head>
        <HomeStructuredData />
        <link rel="preload" href="/flags/br.svg" as="image" />
        <link rel="preload" href="/flags/us.svg" as="image" />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

