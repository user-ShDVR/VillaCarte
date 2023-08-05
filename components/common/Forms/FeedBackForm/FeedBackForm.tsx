import React from 'react';
import { Form } from 'antd';
import SimpleButton from '@/components/common/Buttons/SimpleButton';
import { hideModal } from '@/store/modal';
import { EModal_VisibleStore } from '@/types/modal';
import { lang } from '@/pages';
import PhoneInputComp from '@/components/common/Forms/PhoneInputComp';
import TextAreaLikeInput from '@/components/common/Forms/TextAreaLikeInput';
import { postFeedback } from '@/store/feedback';
import { IFeedback } from '@/types/feedback';

interface IProps {
	sourcePage: string;
	sourceForm: string;
}

const FeedBackForm = ( { sourcePage, sourceForm }: IProps ) => {
	const [ form ] = Form.useForm();

	const onFinish = async ( values: IFeedback ) => {
		hideModal( EModal_VisibleStore.CallRequest );
		await postFeedback( { ...values, sourcePage, sourceForm } );
	};

	return (
		<Form
			className={ 'feedBackForm' }
			form={ form }
			name={ sourceForm }
			onFinish={ onFinish }
		>
			<Form.Item
				name="name"
				className={ 'feedBackInputWrapper' }
				rules={ [
					{ type: 'string', message: lang?.yourName || '' },
					{ required: true, message: lang?.yourName || '' }
				] }
			>
				<TextAreaLikeInput
					className={ 'feedBackInput text300' }
					placeholder={ lang?.yourName || '' }
				/>
			</Form.Item>

			<Form.Item
				name="phone"
				className={ 'feedBackInputWrapper' }
				rules={ [
					{ type: 'string', message: lang?.phoneNumber || '' },
					{ required: true, message: lang?.phoneNumber || '' }
				] }
			>
				<PhoneInputComp
					className={ 'feedBackInput text300' }
					placeholder={ lang?.phoneNumber || '' }
				/>
			</Form.Item>

			<p className={ 'text300 mt-16' }>
				{ lang?.byClickingTheRequestACall || '' }
			</p>

			<SimpleButton
				text={ lang?.requestASelection || '' }
				variant={ 'simple' }
			/>

		</Form>
	);
};

export default FeedBackForm;