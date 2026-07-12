import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { routing } from "@/i18n/routing";
import { generatePageMetadata, getLocaleSiteConfig, isSupportedLocale } from "@/lib/metadata";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  const locale = isSupportedLocale(rawLocale) ? rawLocale : "pt-BR";
  const localeSiteConfig = getLocaleSiteConfig(locale);

  return generatePageMetadata({
    locale,
    title: localeSiteConfig.title,
    description: localeSiteConfig.description,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleHome({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  const locale = isSupportedLocale(rawLocale) ? rawLocale : "pt-BR";

  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}