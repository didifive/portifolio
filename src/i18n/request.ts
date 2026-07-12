import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import ptBR from "@/messages/pt-BR.json";
import enUS from "@/messages/en-US.json";

const messagesByLocale = {
  "pt-BR": ptBR,
  "en-US": enUS,
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const resolvedLocale = await requestLocale;
  const locale = routing.locales.includes(resolvedLocale as (typeof routing.locales)[number])
    ? (resolvedLocale as (typeof routing.locales)[number])
    : routing.defaultLocale;

  return {
    locale,
    messages: messagesByLocale[locale],
  };
});