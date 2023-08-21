import React from 'react';
import { Form } from 'antd';
import SimpleButton from '@/components/common/Buttons/SimpleButton';
import { hideModal } from '@/store/modal';
import { EModal_VisibleStore } from '@/types/modal';
import { useTranslations } from 'next-intl';
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
	const t = useTranslations('Index');

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
					{ type: 'string', message: t('yourName') || '' },
					{ required: true, message: t('yourName') || '' }
				] }
			>
				<TextAreaLikeInput
					className={ 'feedBackInput text300' }
					placeholder={ t('yourName') || '' }
				/>
			</Form.Item>

			<Form.Item
				name="phone"
				className={ 'feedBackInputWrapper' }
				rules={ [
					{ type: 'string', message: t('phoneNumber') || '' },
					{ required: true, message: t('phoneNumber') || '' }
				] }
			>
				<PhoneInputComp
					className={ 'feedBackInput text300' }
					placeholder={ t('phoneNumber') || '' }
				/>
			</Form.Item>

			<p className={ 'text300 mt-27 ls-012 fz-12' }>
				{ t('byClickingTheRequestACall') || '' }
			</p>

			<SimpleButton
				text={ t('requestASelection') || '' }
				variant={ 'simple' }
			/>

		</Form>
	);
};

export default FeedBackForm;