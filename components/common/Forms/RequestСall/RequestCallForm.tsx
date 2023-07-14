import React from 'react';
import { Form, Input } from 'antd';
import { updatePreloader } from '@/store/preloader';
import { postFeedback } from '@/store/feedback';
import PhoneInput from '@/components/common/Forms/PhoneInput';
import SimpleButton from '@/components/common/Buttons/SimpleButton';

const RequestCallForm = () => {

	const [ form ] = Form.useForm();

	const onFinish = async ( values: any ) => {
		updatePreloader( true );
		await postFeedback( values );
	};

	return (
		<div className={ 'requestCall-wrapper' }>
			<div className={ 'requestCall bgGradient' }>
				<h5 className={ 'text500 fz-20 colorWhite' }>Закажите индивидуальную <br/> подборку недвижимости</h5>

				<Form
					className={ 'requestCallForm' }
					form={ form }
					name="requestCallForm"
					onFinish={ onFinish }
				>
					<Form.Item
						name="username"
						className={ 'requestCallInputWrapper' }
						rules={ [
							{ type: 'string', message: 'Введите Ваше имя' },
							{ required: true, message: 'Ваше имя' }
						] }
					>
						<Input className={ 'requestCallInput text300' } placeholder={ 'Ваше имя' }/>
					</Form.Item>

					<Form.Item
						name="phone"
						className={ 'requestCallInputWrapper' }
						rules={ [
							{ type: 'string', message: 'Введите номер телефона' },
							{ required: true, message: 'Номер телефона' }
						] }
					>
						<PhoneInput
							name="phone"
							textareaClass={ 'requestCallInput text300' }
							placeholder={ 'Номер телефона' }
						/>
					</Form.Item>

					<p className={ 'text300-min mt-16 colorWhite70' }>
						Нажимая кнопку “Отправить запрос” я даю согласие на обработку моих персональных данных
					</p>

					<SimpleButton text={ 'Заказать звонок' } variant={ 'light' } type={ 'submit' }/>

				</Form>
			</div>
		</div>
	);
};

export default RequestCallForm;