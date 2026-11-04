import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import AuthProvider from "@/components/auth-provider";
import QueryProvider from "@/state/react-query/query-provider";
import AuthBootstrap from "./AuthBootstrap";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/theme_context";
import { ClientIntlProvider } from "./client-intl-provider";
import { getMessages, getLocale, getTimeZone } from "next-intl/server";

export default async function ServerProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const messages = await getMessages();
  const locale = await getLocale();
  const timeZone = await getTimeZone();

  return (
    <ClientIntlProvider messages={messages} locale={locale} timeZone={timeZone}>
      <AuthProvider session={session}>
        <QueryProvider>
          <LanguageProvider>
            <ThemeProvider>
              <AuthBootstrap>{children}</AuthBootstrap>
            </ThemeProvider>
          </LanguageProvider>
        </QueryProvider>
      </AuthProvider>
    </ClientIntlProvider>
  );
}