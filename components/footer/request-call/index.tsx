// import ButtonBorder from "@/ui/button-border";
import React from 'react';
import styles from './styles.module.scss';
import IRequestCallProps from './interface';
import ButtonBorderWhite from '@/ui/button-border-white';

const RequestCall: React.FC<IRequestCallProps> = ({
    orderAnIndividualSelection,
    byClickingTheSendRequest,
    requestACall
}) => {
    return (
        <>
            <div className={styles.requestCall}>
                <p>{orderAnIndividualSelection}</p>
                <div className={`${styles.form__group} ${styles.field}`}>
                    <input
                        type='text'
                        name='name'
                        className={styles.form__field}
                        placeholder='Ваше имя'
                    />
                    <label
                        htmlFor='name'
                        className={styles.form__label}>
                        Ваше имя
                    </label>
                </div>
                <div
                    className={`${styles.form__group} ${styles.field} ${styles.form__phone}`}>
                    <input
                        type='tel'
                        name='name'
                        className={styles.form__field}
                        placeholder='Ваше имя'
                    />
                    <label
                        htmlFor='name'
                        className={styles.form__label}>
                        Номер телефона
                    </label>
                </div>
                <p>{byClickingTheSendRequest}</p>
                {/* <ButtonBorder type="button">Заказать звонок</ButtonBorder> */}
                <ButtonBorderWhite type='button'>
                    {requestACall}
                </ButtonBorderWhite>
            </div>
        </>
    );
};

export default RequestCall;
