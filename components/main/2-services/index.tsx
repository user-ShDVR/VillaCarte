import React from 'react';
import Image from 'next/image';
import ButtonBorderBlack from '@/ui/button-border-black';
import styles from './styles.module.scss';
import ServiceItem from './service-item';
import IServiceProps from './interface';

const Services: React.FC<IServiceProps> = ({
    allServicesInOneCompany,
    allServicesInOneCompany2,
    weHelpYouBuyProperty,
    learnMore,
    propertySale,
    propertyForRent,
    concierge,
    propertyManagement,
    villasAndApartmentsForLife,
    premiumAndLuxuryVillas,
    anyIssuesAreSolvedForYou,
    passiveIncomeWithoutWorries,
}) => {
    return (
        <div className={styles.services}>
            <div className={styles.servicesContainer}>
                <div className={styles.text}>
                    <h2 className='header2'>
                        {allServicesInOneCompany} {allServicesInOneCompany2}
                    </h2>
                    <p className='paragraph3'>{weHelpYouBuyProperty}</p>
                    <div className={styles.button}>
                        <ButtonBorderBlack type='button'>
                            <span>{learnMore}</span>
                            <Image
                                src={`/ui/button-border/arrow-blue.svg`}
                                alt='arrow'
                                width={28 / 2}
                                height={20 / 2}
                            />
                        </ButtonBorderBlack>
                    </div>
                </div>
                <div className={styles.items}>
                    <ServiceItem
                        title={propertySale}
                        paragraph={villasAndApartmentsForLife}
                    />
                    <ServiceItem
                        title={propertyForRent}
                        paragraph={premiumAndLuxuryVillas}
                    />
                    <ServiceItem
                        title={concierge}
                        paragraph={anyIssuesAreSolvedForYou}
                    />
                    <ServiceItem
                        title={propertyManagement}
                        paragraph={passiveIncomeWithoutWorries}
                    />
                </div>
                <Image
                    className={styles.leaf}
                    src={`/main/2-services/leaf.webp`}
                    alt='leaf'
                    width={1213 / 2}
                    height={1824 / 2}
                />

                <Image
                    className={styles.shadow}
                    src={`/main/2-services/shadow.webp`}
                    alt='leaf'
                    width={1213 / 2}
                    height={1824 / 2}
                />
            </div>
            {/* <ServiceVideo /> */}
        </div>
    );
};

export default Services;
