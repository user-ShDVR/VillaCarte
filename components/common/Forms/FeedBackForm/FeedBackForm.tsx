import React from 'react';
import PhoneInput from '@/components/common/Forms/PhoneInput';
import { Form, Input } from 'antd';
import { updatePreloader } from '@/store/preloader';
import { postFeedback } from '@/store/feedback';
import SimpleButton from '@/components/common/Buttons/SimpleButton';
import { hideModal } from '@/store/modal';
import { EModal_VisibleStore } from '@/types/modal';
import { lang } from '@/pages';

const FeedBackForm = () => {
	const [ form ] = Form.useForm();

	const onFinish = async ( values: any ) => {
		updatePreloader( true );
		hideModal( EModal_VisibleStore.CallRequest );
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
					{ type: 'string', message: lang?.yourName || '' },
					{ required: true, message: lang?.yourName || '' }
				] }
			>
				<Input className={ 'feedBackInput text300' } placeholder={ lang?.yourName || '' }/>
			</Form.Item>

			<Form.Item
				name="phone"
				className={ 'feedBackInputWrapper' }
				rules={ [
					{ type: 'string', message: lang?.phoneNumber || '' },
					{ required: true, message: lang?.phoneNumber || '' }
				] }
			>
				<PhoneInput
					name="phone"
					textareaClass={ 'feedBackInput text300' }
					placeholder={ lang?.phoneNumber || '' }
				/>
			</Form.Item>

			<p className={ 'text300 mt-16' }>
				{ lang?.byClickingTheRequestACall || '' }
			</p>

			<SimpleButton
				text={ lang?.requestASelection || '' }
				variant={ 'simple' }
				type={ 'submit' }
			/>

		</Form>
	);
};

export default FeedBackForm;