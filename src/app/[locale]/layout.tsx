import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import { Toaster } from "@/components/ui/Toaster";
import { routing, type AppLocale } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;

  if (!routing.locales.includes(rawLocale as AppLocale)) {
    notFound();
  }

  const locale = rawLocale as AppLocale;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SetHtmlLang locale={locale} />
      <Header />
      <Main>{children}</Main>
      <Toaster />
    </NextIntlClientProvider>
  );
}
