import PhoneInputComp from '@/components/common/Forms/PhoneInputComp';
import TextAreaLikeInput from '@/components/common/Forms/TextAreaLikeInput';
import { Form } from 'antd';
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
                <Form
                    className={'feedBackForm'}
                >
                    <Form.Item
                        name="name"
                        className={'feedBackInputWrapper'}
                        rules={[
                            { type: 'string', message: 'Ваше имя' },
                            { required: true, message: 'Ваше имя' }
                        ]}
                    >
                        <TextAreaLikeInput
                            className={'feedBackInput text300'}
                            placeholder={'Ваше имя'}
                        />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        style={{color: 'white'}}
                        className={'feedBackInputWrapper'}
                        rules={[
                            { type: 'string', message: 'Номер телефона' },
                            { required: true, message: 'Номер телефона' }
                        ]}
                    >
                        <PhoneInputComp
                            className={'feedBackInput text300'}
                            placeholder={'Номер телефона'}
                        />
                    </Form.Item>
                    <p className='request-p'>
                    Нажимая кнопку “Заказать звонок” я даю согласие на обработку
                    моих персональных данных
                </p>
                    <button>Заказать звонок</button>
                </Form>
            </div>
        </>
    );
};

export default RequestCall;
