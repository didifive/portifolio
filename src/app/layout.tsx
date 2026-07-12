import type { Metadata, Viewport } from "next";
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
  return (
    <html suppressHydrationWarning>
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
