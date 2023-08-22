import Head from 'next/head';
import Header from '../Header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { useStore } from 'effector-react';
import { $languages } from '@/store/languages';
import ContactsBlock from '../Main/Footer/Footer';

interface IProps {
    children: ReactNode;
    headerColor: string;
}

export default function Layout({ children, headerColor }: IProps) {
    const t = useTranslations('Index');
    return (
        <div className='layout'>
            <div className='cover-noize' />
            <Head>
                <link
                    rel='icon'
                    href='/favicon33.ico'
                />
            </Head>

            <Header
                headerColor={headerColor}
                sale={t('sale')}
                rent={t('rent')}
                concierge={t('concierge')}
                propertyManagement={t('propertyManagement')}
                aboutTheCompany={t('aboutTheCompany')}
                aboutPhuket={t('aboutPhuket')}
                news={t('news')}
                requestACall={t('requestACall')}
                orderAPersonalSelection={t('orderAPersonalSelection')} 
                orderAPersonalSelection2={t('orderAPersonalSelection2')}
                ourManagerWillCallYou={t('ourManagerWillCallYou')}
                contactUsThroughOurMessengers={t('contactUsThroughOurMessengers')}
            />

            <main>{children}</main>
            <ContactsBlock
             sale={t('sale')}
             rent={t('rent')}
             concierge={t('concierge')}
             propertyManagement={t('propertyManagement')}
             aboutTheCompany={t('aboutTheCompany')}
             aboutPhuket={t('aboutPhuket')}
             news={t('news')}
             privacyPolicy={t('privacyPolicy')}
             VillaCarteAllRights={t('VillaCarteAllRights')}
             websiteDevelopment={t('websiteDevelopment')}
            />
        </div>
    );
}
