import PhoneInputComp from '@/components/common/Forms/PhoneInputComp';
import TextAreaLikeInput from '@/components/common/Forms/TextAreaLikeInput';
import { Form } from 'antd';
import { FC } from 'react';
interface IProps {
    phoneNumber: string;
    yourName: string;
    byClickingTheRequestACall: string;
    requestACall: string;
}
const RequestCall: FC<IProps> = ({
    phoneNumber,
    yourName,
    byClickingTheRequestACall,
    requestACall
}) => {
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
                            { type: 'string', message: yourName },
                            { required: true, message: yourName }
                        ]}
                    >
                        <TextAreaLikeInput
                            className={'feedBackInput text300'}
                            placeholder={yourName}
                        />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        style={{color: 'white'}}
                        className={'feedBackInputWrapper'}
                        rules={[
                            { type: 'string', message: phoneNumber },
                            { required: true, message: phoneNumber }
                        ]}
                    >
                        <PhoneInputComp
                            className={'feedBackInput text300'}
                            placeholder={phoneNumber}
                        />
                    </Form.Item>
                    <p className='request-p'>
                    {byClickingTheRequestACall}
                </p>
                    <button>{requestACall}</button>
                </Form>
            </div>
        </>
    );
};

export default RequestCall;
