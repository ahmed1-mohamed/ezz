"use client";

import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";

export function ClientIntlProvider({
  messages,
  locale,
  timeZone = "UTC",
  children,
}: {
  messages: AbstractIntlMessages;
  locale: string;
  timeZone?: string;
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      timeZone={timeZone}
      getMessageFallback={({ key }) => key}
      onError={(error) => {
        if (error.code === "MISSING_MESSAGE") return;
        console.error(error);
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
}

