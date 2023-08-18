import { FC } from 'react';

const RequestCall: FC = () => {
    return (
        <>
            <div className='request-call'>
                <p>
                    Посмотрите комплекс
                    <br />
                    своими глазами
                </p>
                <div className='form__group field'>
                    <input
                        type='text'
                        name='name'
                        className='form__field'
                        placeholder='Ваше имя'
                    />
                    <label
                        htmlFor='name'
                        className='form__label'>
                        Ваше имя
                    </label>
                </div>
                <div className='form__group field form__phone'>
                    <input
                        type='text'
                        name='name'
                        className='form__field'
                        placeholder='Ваше имя'
                    />
                    <label
                        htmlFor='name'
                        className='form__label'>
                        Номер телефона
                    </label>
                </div>
                <p>
                    Нажимая кнопку “Заказать звонок” я даю согласие на обработку
                    моих персональных данных
                </p>
                <button>Заказать звонок</button>
            </div>
        </>
    );
};

export default RequestCall;
