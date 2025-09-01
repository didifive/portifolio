import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/Toaster";
import { defaultMetadata } from "@/lib/metadata";
import { HomeStructuredData } from "@/components/StructuredData";
import { AccessibilityLandmarks } from "@/components/SkipLink";
import { FontOptimization, CriticalCSS } from "@/components/FontOptimization";
import { PerformanceOptimizations } from "@/components/Performance";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <CriticalCSS />
        <FontOptimization />
        <HomeStructuredData />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AccessibilityLandmarks>
            <Header />
            <Main>{children}</Main>
            <Toaster />
            <PerformanceOptimizations />
          </AccessibilityLandmarks>
        </ThemeProvider>
      </body>
    </html>
  );
}
