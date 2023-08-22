import '@/styles/index.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { QueryClientProviderWrapper } from '@/components/query';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'VillaCarte',
    description: 'VillaCarte',
};

export function generateStaticParams() {
    return [{ locale: 'ru' }, { locale: 'en' }];
}

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
    return (
        <html lang={locale}>
            <QueryClientProviderWrapper>
                <NextIntlClientProvider
                    locale={locale}
                    messages={messages}>
                    <body>{children}</body>
                </NextIntlClientProvider>
            </QueryClientProviderWrapper>
        </html>
    );
}
