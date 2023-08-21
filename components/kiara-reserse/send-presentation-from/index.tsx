import React from 'react';
import feedBackBg from '@/public/kiara-reserve/Image.webp';
import cardImg from '@/public/kiara-reserve/Group1000004473.webp';

import { Form } from 'antd';
import SimpleButton from '@/components/common/Buttons/SimpleButton';
import { hideModal } from '@/store/modal';
import { EModal_VisibleStore } from '@/types/modal';
import PhoneInputComp from '@/components/common/Forms/PhoneInputComp';
import TextAreaLikeInput from '@/components/common/Forms/TextAreaLikeInput';
import { postFeedback } from '@/store/feedback';
import { IFeedback } from '@/types/feedback';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface IProps {
	sourcePage: string;
	sourceForm: string;
}

const FeedBackForm = ({ sourcePage, sourceForm }: IProps) => {
	const t = useTranslations('Index');
	const [form] = Form.useForm();

	const onFinish = async (values: IFeedback) => {
		hideModal(EModal_VisibleStore.CallRequest);
		await postFeedback({ ...values, sourcePage, sourceForm });
	};

	return (
		<Form
			className={'feedBackForm'}
			form={form}
			name={sourceForm}
			onFinish={onFinish}
		>
			<Form.Item
				name="name"
				className={'feedBackInputWrapper'}
				rules={[
					{ type: 'string', message: t('yourName') },
					{ required: true, message: t('yourName') }
				]}
			>
				<TextAreaLikeInput
					className={'feedBackInput text300'}
					placeholder={t('yourName')}
				/>
			</Form.Item>

			<Form.Item
				name="phone"
				className={'feedBackInputWrapper'}
				rules={[
					{ type: 'string', message: t('phoneNumber') },
					{ required: true, message:t('phoneNumber') }
				]}
			>
				<PhoneInputComp
					className={'feedBackInput text300'}
					placeholder={t('phoneNumber')}
				/>
			</Form.Item>

			<p className={'text300 mt-27 ls-012 fz-12'}>
				Нажимая на кнопку «Скачать», я даю согласие на обработку персональных данных
			</p>

			<SimpleButton
				text='Скачать презентацию'
				variant={'simple'}
			/>

		</Form>
	);
};


const SendPresentationFrom = () => {


	return (
		<div className={'presentationBlock '}>

			<Image src={feedBackBg} alt='bg' className={'presentationBlock-bg'} />

			<div className={'pos presentationBlock-content w-620px z-7'}>
				<div>
					<div>
						<h2 className={'h2Subtitle twoStringTitle m-0'}>Начните зарабатывать
							с Kiara Reserve</h2>
						<h6 className={'text300 colorText pt-8 mb-30'}>
							Заполните форму — пришлём презентацию, которая поможет
							вам выбрать виллу или апартаменты в этом комплексе
						</h6>
					</div>

					<FeedBackForm sourcePage={''} sourceForm={'kiaraPage_Presentation'} />
				</div>

					<Image
						src={cardImg}
						alt='cardImg'
					/>

			</div>
		</div>
	);
};

export default SendPresentationFrom;