import React from 'react';
import { Form, Input } from 'antd';
import { updatePreloader } from '@/store/preloader';
import { postFeedback } from '@/store/feedback';
import PhoneInput from '@/components/common/Forms/PhoneInput';
import SimpleButton from '@/components/common/Buttons/SimpleButton';
import { lang } from '@/pages';

const RequestCallForm = () => {

	const [ form ] = Form.useForm();

	const onFinish = async ( values: any ) => {
		updatePreloader( true );
		await postFeedback( values );
	};

	return (
		<div className={ 'requestCall-wrapper' }>
			<div className={ 'requestCall bgGradient' }>
				<h5 className={ 'text500 fz-20 colorWhite' }>{ lang?.orderAnIndividualSelection || '' }</h5>

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
							{ type: 'string', message: '' },
							{ required: true, message: '' }
						] }
					>
						<Input className={ 'requestCallInput text300' } placeholder={ lang?.yourName || '' }/>
					</Form.Item>

					<Form.Item
						name="phone"
						className={ 'requestCallInputWrapper' }
						rules={ [
							{ type: 'string', message: '' },
							{ required: true, message: '' }
						] }
					>
						<PhoneInput
							name="phone"
							textareaClass={ 'requestCallInput text300' }
							placeholder={ lang?.phoneNumber || '' }
						/>
					</Form.Item>

					<p className={ 'text300-min mt-16 colorWhite60' }>
						{ lang?.byClickingTheSendRequest || '' }
					</p>

					<SimpleButton text={ lang?.requestACall || '' } variant={ 'light' } type={ 'submit' }/>

				</Form>
			</div>
		</div>
	);
};

export default RequestCallForm;