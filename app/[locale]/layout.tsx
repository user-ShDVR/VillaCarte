import '@/styles/index.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ScrollBlockProvider } from '@/hooks/useScrollBlock';
import { useTranslations } from 'next-intl';
import NavbarMobile from '@/components/navbar/navbar-mobile';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const locale = useLocale();

    // Show a 404 error if the user requests an unknown locale
    if (params.locale !== locale) {
        notFound();
    }
    const t = useTranslations('Index');
    return (
        <html lang={locale}>
            <ScrollBlockProvider>
                <Navbar
                    sale={t('sale')}
                    rent={t('rent')}
                    concierge={t('concierge')}
                    propertyManagement={t('propertyManagement')}
                    aboutTheCompany={t('aboutTheCompany')}
                    aboutPhuket={t('aboutPhuket')}
                    news={t('news')}
                    requestACall={t('requestACall')}
                />
                <body className={inter.className}>{children}</body>
                <Footer
                    montenegro={t('montenegro')}
                    phuket={t('phuket')}
                    aboutTheCompany={t('aboutTheCompany')}
                    news={t('news')}
                    propertyManagement={t('propertyManagement')}
                    concierge={t('concierge')}
                    rent={t('rent')}
                    sale={t('sale')}
                    aboutPhuket={t('aboutPhuket')}
                    VillaCarteAllRights={t('VillaCarteAllRights')}
                    websiteDevelopment={t('websiteDevelopment')}
                    orderAnIndividualSelection={t('orderAnIndividualSelection')}
                    byClickingTheSendRequest={t('byClickingTheSendRequest')}
                    requestACall={t('requestACall')}
                />
            </ScrollBlockProvider>
        </html>
    );
}