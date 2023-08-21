import { FC } from 'react';
import RequestCall from '../request-call';

const Masthead: FC = () => {
    return (
        <>
            <section className='kiara-reserve'>
                <div className='masthead'>
                    <div className='text'>
                        <p>Идеально для инвестиций</p>
                        <span>
                        <h1>Kiara Reverse</h1>
                        <h3>от $1 540 000</h3>
                        </span>
                        <p>
                            Пхукет, Банг Тао&nbsp;|&nbsp; <br className='masthead__mobileBreak' />Дата окончания
                            строительства&nbsp;—&nbsp;10.2025
                        </p>
                        <button className='masthead__mobileCall'>
                            Заказать звонок
                        </button>
                    </div>
                    <RequestCall />
                </div>
            </section>
        </>
    );
};

export default Masthead;
