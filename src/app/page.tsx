import { getLocale } from "next-intl/server";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const locale = await getLocale();
  redirect(`/${locale}`);
}