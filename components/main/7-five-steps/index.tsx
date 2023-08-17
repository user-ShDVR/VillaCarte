import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import IFiveStepsProps from './interface';

const FiveSteps: React.FC<IFiveStepsProps> = ({
    fiveSteps,
    fiveSteps2,
    weSelectTheRealEstatePersonally,
    weCalculateProfitability,
    weNegotiateWithTheDeveloper,
    weLegallyAccompanyTheTransaction,
    weTakeCareOfYourPropertyManagement,
}) => {
    return (
        <div className={styles.fiveSteps}>
            <div className={styles.fiveStepsContainer}>
                <h1 className='header1'>
                    <span>{fiveSteps}</span>
                    <br />
                    <span>{fiveSteps2}</span>
                </h1>
                <div>
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                    <span>05</span>
                </div>
                <Image
                    src={`/main/7-five-steps/line.png`}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: '100%', height: 'auto' }}
                />
                <div className='paragraph2'>
                    <p>{weSelectTheRealEstatePersonally}</p>
                    <p>{weCalculateProfitability}</p>
                    <p>{weNegotiateWithTheDeveloper}</p>
                    <p>{weLegallyAccompanyTheTransaction}</p>
                    <p>{weTakeCareOfYourPropertyManagement}</p>
                </div>
            </div>
        </div>
    );
};

export default FiveSteps;
