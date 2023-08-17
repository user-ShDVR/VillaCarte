import React from 'react';
import Image from 'next/image';
import IWeAreTrustedItemProps from './interface';
import styles from './styles.module.scss'

const WeAreTrustedItem: React.FC<IWeAreTrustedItemProps> = ({photo, name, jobTitle, review}) => {
    return (
        <div className={styles.weAreTrustedItem}>
            <div className={styles.container}>
                <div className={styles.person}>
                    <Image
                        src={photo}
                        alt='person'
                        width={176 / 2}
                        height={176 / 2}
                    />
                    <div className={styles.nameAndTitle}>
                        <h3 className='header3'>{name}</h3>
                        <p className='paragraph3'>{jobTitle}</p>
                    </div>
                </div>
                <hr />
                <div className={styles.reviewText}>
                    <p className='paragraph3'>{review}</p>
                </div>

            </div>
        </div>
    );
};

export default WeAreTrustedItem;
