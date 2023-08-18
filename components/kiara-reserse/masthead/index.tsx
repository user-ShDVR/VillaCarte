import { FC } from 'react';
import RequestCall from '../request-call';

const Masthead: FC = () => {
    return (
        <>
            <section className='kiara-reserve'>
                <div className='masthead'>
                    <div className='text'>
                        <p>Идеально для инвестиций</p>
                        <h1>Kiara Reverse</h1>
                        <h3>от $1 540 000</h3>
                        <p>
                            Пхукет, Банг Тао&nbsp;|&nbsp;Дата окончания
                            строительства&nbsp;—&nbsp;10.2025
                        </p>
                    </div>
                    <RequestCall />
                </div>
            </section>
        </>
    );
};

export default Masthead;
