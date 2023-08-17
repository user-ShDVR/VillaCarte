import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss'

const Messengers: React.FC = () => {
    return (
        <div className={styles.messengers}>
            <div className={styles.messengersContainer}>
                <h3 className='header3'>
                    Наши месенджеры
                    <br />
                    для связи
                </h3>
                <ul className='nav'>
                    <li>
                        <Image
                            src={`/modal/messengers/telegram.svg`}
                            alt='telegram'
                            width={30 / 2}
                            height={30 / 2}
                        />
                        <span>Telegram</span>
                    </li>
                    <li>
                        <Image
                            src={`/modal/messengers/whatsapp.svg`}
                            alt='telegram'
                            width={28 / 2}
                            height={24 / 2}
                        />
                        <span>WhatsApp</span>
                    </li>
                    <li>
                        <Image
                            src={`/modal/messengers/facebook.svg`}
                            alt='telegram'
                            width={30 / 2}
                            height={30 / 2}
                        />
                        <span>Facebook</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Messengers;
