import React from 'react';
import { Form } from 'antd';
import { postFeedback } from '@/store/feedback';
import PhoneInputComp from '@/components/common/Forms/PhoneInputComp';
import SimpleButton from '@/components/common/Buttons/SimpleButton';
import { useTranslations } from 'next-intl';
import TextAreaLikeInput from '@/components/common/Forms/TextAreaLikeInput';
import { IFeedback } from '@/types/feedback';
import { hideModal } from '@/store/modal';
import { EModal_VisibleStore } from '@/types/modal';

interface IProps {
	sourcePage: string;
	sourceForm: string;
}

const RequestCallForm = ( { sourcePage, sourceForm }: IProps ) => {
	const t = useTranslations('Index');

	const [ form ] = Form.useForm();

	const onFinish = async ( values: IFeedback ) => {
		hideModal( EModal_VisibleStore.CallRequest );
		await postFeedback( { ...values, sourcePage, sourceForm } );
	};

	return (
		<div className={ 'requestCall-wrapper' }>

			<div className={ 'requestCall bgGradient' }>
				<h5 className={ 'text500 fz-20 colorWhite' }>{ t('orderAnIndividualSelection') || '' }</h5>

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
							{ type: 'string', message: t('yourName') || '' },
							{ required: true, message: t('yourName') || '' }
						] }
					>
						<TextAreaLikeInput
							className={ 'requestCallInput text300' }
							placeholder={ t('yourName') || '' }
						/>
					</Form.Item>

					<Form.Item
						name="phone"
						className={ 'requestCallInputWrapper' }
						rules={ [
							{ type: 'string', message: t('phoneNumber') || '' },
							{ required: true, message: t('phoneNumber') || '' }
						] }
					>
						<PhoneInputComp
							className={ 'requestCallInput text300' }
							placeholder={ t('phoneNumber') || '' }
						/>
					</Form.Item>

					<p className={ 'text300-min mt-16 colorWhite60' }>
						{ t('byClickingTheSendRequest') || '' }
					</p>

					<SimpleButton text={ t('requestACall') || '' } variant={ 'light' } type={ 'submit' }/>

				</Form>
			</div>
		</div>
	);
};

export default RequestCallForm;