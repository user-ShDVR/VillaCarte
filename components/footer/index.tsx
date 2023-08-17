import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import RequestCall from './request-call';
import IFooterProps from './interface';

const Footer: React.FC<IFooterProps> = ({
    montenegro,
    phuket,
    aboutTheCompany,
    news,
    propertyManagement,
    concierge,
    rent,
    sale,
    aboutPhuket,
    VillaCarteAllRights,
    websiteDevelopment,
    orderAnIndividualSelection,
    byClickingTheSendRequest,
    requestACall,
}) => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <Image
                    className={styles.leaf}
                    src={`/footer/leaf.webp`}
                    alt='leaf'
                    width={2412 / 2}
                    height={1668 / 2}
                />
                <div className={styles.left}>
                    <div className={styles.beforeHr}>
                        <Image
                            src={`/footer/logo.png`}
                            alt='logo'
                            width={414 / 2}
                            height={57.3 / 2}
                        />

                        <div className={styles.contactContainer}>
                            <div>
                                <h3 className='header3'>
                                    sales@villacarte.com
                                </h3>
                                <div className={styles.phones}>
                                    <div>
                                        <p className='paragraph3'>
                                            {montenegro}
                                        </p>
                                        <p className='paragraph2'>
                                            +382 (68) 815-019
                                        </p>
                                    </div>
                                    <div>
                                        <p className='paragraph3'>{phuket}</p>
                                        <p className='paragraph2'>
                                            +66 (89) 290-01-10
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <ul className='paragraph3'>
                                <li>{aboutTheCompany}</li>
                                <li>{news}</li>
                                <li>{propertyManagement}</li>
                                <li>{concierge}</li>
                            </ul>
                            <ul className='paragraph3'>
                                <li>{rent}</li>
                                <li>{sale}</li>
                                <li>{aboutPhuket}</li>
                            </ul>
                        </div>

                        <div className={styles.socials}>
                            <ul>
                                <li>
                                    <Image
                                        src={`/footer/facebook.svg`}
                                        alt='facebook'
                                        width={40 / 2}
                                        height={40 / 2}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src={`/footer/youtube.svg`}
                                        alt='youtube'
                                        width={40 / 2}
                                        height={40 / 2}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src={`/footer/vk.svg`}
                                        alt='vk'
                                        width={40 / 2}
                                        height={40 / 2}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src={`/footer/instagram.svg`}
                                        alt='instagram'
                                        width={40 / 2}
                                        height={40 / 2}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src={`/footer/telegram.svg`}
                                        alt='telegram'
                                        width={40 / 2}
                                        height={40 / 2}
                                    />
                                </li>
                            </ul>
                            <p className='paragraph3'>
                                Политика конфиденциальности
                            </p>
                        </div>
                    </div>
                    <div className={styles.afterHr}>
                        <hr />
                        <div className={styles.allRightsReserved}>
                            <p className='paragraph3'>{VillaCarteAllRights}</p>
                            <div className={styles.creativeTeam}>
                                <p className='paragraph3'>
                                    {websiteDevelopment}
                                </p>
                                <Image
                                    src={`/footer/creative-team.svg`}
                                    alt='creative team'
                                    width={350 / 2}
                                    height={33 / 2}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <RequestCall
                        orderAnIndividualSelection={orderAnIndividualSelection}
                        byClickingTheSendRequest={byClickingTheSendRequest}
                        requestACall={requestACall}
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
