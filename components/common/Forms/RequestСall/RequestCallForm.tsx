import React from 'react';
import { Form } from 'antd';
import { updatePreloader } from '@/store/preloader';
import { postFeedback } from '@/store/feedback';
import PhoneInputComp from '@/components/common/Forms/PhoneInputComp';
import SimpleButton from '@/components/common/Buttons/SimpleButton';
import { lang } from '@/pages';
import TextAreaLikeInput from '@/components/common/Forms/TextAreaLikeInput';
import noise from '@/public/noise.webp';

const RequestCallForm = () => {

	const [ form ] = Form.useForm();

	const onFinish = async ( values: any ) => {
		updatePreloader( true );
		await postFeedback( values );
	};

	return (
		<div className={ 'requestCall-wrapper' }>
			<img src={ noise.src } alt="" className={ 'noise' }/>

			<div className={ 'requestCall bgGradient' }>
				<h5 className={ 'text500 fz-20 colorWhite' }>{ lang?.orderAnIndividualSelection || '' }</h5>

				<Form
					className={ 'requestCallForm' }
					form={ form }
					name="requestCallForm"
					// onFinish={ onFinish }
				>
					<Form.Item
						name="username"
						className={ 'requestCallInputWrapper' }
						rules={ [
							{ type: 'string', message: lang?.yourName || '' },
							{ required: true, message: lang?.yourName || '' }
						] }
					>
						<TextAreaLikeInput
							name='name'
							className={ 'requestCallInput text300' }
							placeholder={ lang?.yourName || '' }
						/>
					</Form.Item>

					<Form.Item
						name="phone"
						className={ 'requestCallInputWrapper' }
						rules={ [
							{ type: 'string', message: lang?.phoneNumber || '' },
							{ required: true, message: lang?.phoneNumber || '' }
						] }
					>
						<PhoneInputComp
							name="phone"
							className={ 'requestCallInput text300' }
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