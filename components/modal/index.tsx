import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Messengers from './messengers';
import ButtonBorderBlack from '@/ui/button-border-black';
import IModalProps from './interface';

const Modal: React.FC<IModalProps> = ({
    children,
    isOpen,
    toggle,
    allowScroll,
}) => {
    return (
        <>
            {isOpen && (
                <div className={styles.modalOverlay}>
                    <div
                        className={styles.modalBox}
                        onClick={(e) => e.stopPropagation()}>
                        <div className={styles.leftSide}>
                            <div className={styles.title}>
                                <h2 className='header2'>
                                    Закажите <br /> персональную подборку
                                </h2>
                                <p className='paragraph3'>
                                    Вам позвонит менеджер и подберёт
                                    недвижимость под ваши индивидуальные запросы
                                </p>
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
                                        Ваше имя
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
                                        Номер телефона
                                    </label>
                                </div>
                            </div>
                            <div className={styles.order}>
                                <p className='paragraph4'>
                                    Нажимая кнопку «Заказать звонок», я
                                    соглашаюсь с политикой конфиденциальности и
                                    даю согласие на обработку персональных
                                    данных
                                </p>
                                <div>
                                    <ButtonBorderBlack type='button'>
                                        <span>Заказать подборку</span>
                                    </ButtonBorderBlack>
                                </div>
                            </div>
                        </div>
                        <div className={styles.rightSide}>
                            <Messengers />
                            <button onClick={allowScroll}>
                                <Image
                                    onClick={toggle}
                                    src={`/modal/close.png`}
                                    width={84 / 2}
                                    height={84 / 2}
                                    alt='close'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
