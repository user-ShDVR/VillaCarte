import React from 'react';
import Image from 'next/image';
import Messengers from '@/components/modal/messengers';
import ButtonBorderBlack from '@/ui/button-border-black';
import styles from './styles.module.scss';
import IOrderPersonalProps from './interface';

const OrderPersonal: React.FC<IOrderPersonalProps> = ({
    ourManagerWillCallYou,
    orderAnIndividualSelection,
    yourName,
    phoneNumber,
    byClickingTheRequestACall,
    requestASelection
}) => {
    return (
        <div className={styles.orderPersonal}>
            <div className={styles.orderPersonalContainer}>
                <div className={styles.leftSide}>
                    <div className={styles.title}>
                        <h2 className='header2'>
                            {orderAnIndividualSelection}
                        </h2>
                        <p className='paragraph3'>{ourManagerWillCallYou}</p>
                    </div>
                    <div className={styles.form}>
                        <div
                            className={`${styles.form__group} ${styles.field}`}>
                            <input
                                type='text'
                                name='name'
                                className={styles.form__field}
                                placeholder='Ваше имя'
                            />
                            <label
                                htmlFor='name'
                                className={styles.form__label}>
                                {yourName}
                            </label>
                        </div>
                        <div
                            className={`${styles.form__group} ${styles.field} ${styles.form__phone}`}>
                            <input
                                type='text'
                                name='name'
                                className={styles.form__field}
                                placeholder='Ваше имя'
                            />
                            <label
                                htmlFor='name'
                                className={styles.form__label}>
                                {phoneNumber}
                            </label>
                        </div>
                    </div>
                    <div className={styles.order}>
                        <p className='paragraph4'>
                            {byClickingTheRequestACall}
                        </p>
                        <div>
                            <ButtonBorderBlack
                                type='button'>
                                {requestASelection}
                            </ButtonBorderBlack>
                        </div>
                    </div>
                </div>
                <div className='rightSide'>
                    <Messengers />
                </div>
            </div>
        </div>
    );
};

export default OrderPersonal;
