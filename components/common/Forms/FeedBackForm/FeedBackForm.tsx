import React from 'react';
import PhoneInput from '@/components/common/Forms/PhoneInput';
import { Form, Input } from 'antd';
import { updatePreloader } from '@/store/preloader';
import { postFeedback } from '@/store/feedback';
import SimpleButton from '@/components/common/Buttons/SimpleButton';
import { hideModal } from '@/store/modal';
import { EModal_VisibleStore } from '@/types/modal';

const FeedBackForm = () => {
	const [ form ] = Form.useForm();

	const onFinish = async ( values: any ) => {
		updatePreloader( true );
		hideModal(EModal_VisibleStore.CallRequest);
		// await postFeedback( values );
	};

	return (
		<Form
			className={ 'feedBackForm' }
			form={ form }
			name="feedback"
			onFinish={ onFinish }
		>
			<Form.Item
				name="username"
				className={ 'feedBackInputWrapper' }
				rules={ [
					{ type: 'string', message: 'Введите Ваше имя' },
					{ required: true, message: 'Введите Ваше имя' }
				] }
			>
				<Input className={ 'feedBackInput text300' } placeholder={ 'Ваше имя' }/>
			</Form.Item>

			<Form.Item
				name="phone"
				className={ 'feedBackInputWrapper' }
				rules={ [
					{ type: 'string', message: 'Введите номер телефона' },
					{ required: true, message: 'Введите номер телефона' }
				] }
			>
				<PhoneInput
					name="phone"
					textareaClass={ 'feedBackInput text300' }
					placeholder={ 'Номер телефона' }
				/>
			</Form.Item>

			<p className={ 'text300 mt-16' }>
				Нажимая кнопку «Заказать звонок», я соглашаюсь с политикой конфиденциальности и даю согласие на обработку
				персональных данных
			</p>

			<SimpleButton
				text={ 'Заказать подборку' }
				variant={ 'simple' }
				type={ 'submit' }
			/>

		</Form>
	);
};

export default FeedBackForm;