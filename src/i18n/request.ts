import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import type { AbstractIntlMessages } from "next-intl";
import { defaultLocale, locales, LOCALE_COOKIE_NAME, Locale, defaultTimeZone } from "./config";

type Messages = AbstractIntlMessages;

function withFallback(fallback: Messages, primary: Messages): Messages {
  const result: Messages = { ...fallback };
  for (const [key, value] of Object.entries(primary)) {
    const base = result[key];
    result[key] =
      value && typeof value === "object" && base && typeof base === "object"
        ? withFallback(base as Messages, value as Messages)
        : value;
  }
  return result;
}

const loadMessages = async (locale: Locale): Promise<Messages> =>
  (await import(`../../messages/${locale}.json`)).default;

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get(LOCALE_COOKIE_NAME)?.value as Locale | undefined;

  const locale = localeCookie && locales.includes(localeCookie) ? localeCookie : defaultLocale;

  // Untranslated keys fall back to the default locale on the server, so the
  // client receives one complete message tree instead of bundling every locale.
  const messages =
    locale === defaultLocale
      ? await loadMessages(locale)
      : withFallback(await loadMessages(defaultLocale), await loadMessages(locale));

  return {
    locale,
    messages,
    timeZone: defaultTimeZone,
  };
});
