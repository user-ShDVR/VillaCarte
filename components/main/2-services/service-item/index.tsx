import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss'
import ButtonCircle from '@/ui/button-circle';
import IServiceItemProps from './interface';

const ServiceItem: React.FC<IServiceItemProps> = ({ title, paragraph }) => {
    return (
        <div className={styles.serviceItem}>
            <div className={styles.serviceItemContainer}>
                <h3 className='header3'>{title}</h3>
                <p className='paragraph3'>{paragraph}</p>
                <ButtonCircle
                    type='button'
                    bgColor='none'
                    borderColor='black'
                    color='black'>
                    <Image
                        src={`/ui/button-circle/arrow-blue.svg`}
                        alt='arrow'
                        width={28 / 2}
                        height={20 / 2}
                    />
                </ButtonCircle>
            </div>
        </div>
    );
};

export default ServiceItem;
