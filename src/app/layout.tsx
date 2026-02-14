import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/Toaster";
import { defaultMetadata, generateViewport } from "@/lib/metadata";
import { HomeStructuredData } from "@/components/StructuredData";

export const metadata: Metadata = defaultMetadata;
export const viewport: Viewport = generateViewport();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <HomeStructuredData />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Main>{children}</Main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
