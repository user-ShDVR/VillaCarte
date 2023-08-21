import React from 'react';
import feedBackBg from '@/public/kiara-reserve/formBg.png';
import flowers from '@/public/kiara-reserve/flowers.png';

import { Form } from 'antd';
import SimpleButton from '@/components/common/Buttons/SimpleButton';
import { hideModal } from '@/store/modal';
import { EModal_VisibleStore } from '@/types/modal';
import PhoneInputComp from '@/components/common/Forms/PhoneInputComp';
import TextAreaLikeInput from '@/components/common/Forms/TextAreaLikeInput';
import { postFeedback } from '@/store/feedback';
import { IFeedback } from '@/types/feedback';
import Image from 'next/image';
import telegramIcon from '@/public/icons/socials/telegramIcon.svg';
import whatsappIcon from '@/public/icons/socials/whatsappIcon.svg';
import facebookIcon from '@/public/icons/socials/facebookIcon.svg';
import telegramWhiteIcon from '@/public/icons/socials/telegramWhiteIcon.svg';
import whatsappWhiteIcon from '@/public/icons/socials/whatsappWhiteIcon.svg';
import facebookWhiteIcon from '@/public/icons/socials/facebookWhiteIcon.svg';
import MessengerCard from '@/components/common/OurMessengers/MessengerCard';
import { useTranslations } from 'next-intl';

interface IProps {
	sourcePage: string;
	sourceForm: string;
}

const OurMessengers = () => {
	const messengers = [
		{ url: '/', icon: telegramIcon, whiteIcon: telegramWhiteIcon, text: 'Telegram' },
		{ url: '/', icon: whatsappIcon, whiteIcon: whatsappWhiteIcon, text: 'WhatsApp' },
		{ url: '/', icon: facebookIcon, whiteIcon: facebookWhiteIcon, text: 'Facebook' },
	];
	return (
		<div className={ 'ourMessengers' }>
			<h3 className={ 'h3TitleText fz-18-24 mb-28' }>{ 'Общайтесь с нами,как вам удобнее' }</h3>

			{ messengers.map( item =>
				<MessengerCard
					key={ item.text }
					url={ item.url }
					icon={ item.icon }
					whiteIcon={ item.whiteIcon }
					text={ item.text }
				/>
			) }
		</div>
	);
};

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
					{ required: true, message: t('yourName') || '' }
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
					{ required: true, message: t('phoneNumber') }
				]}
			>
				<PhoneInputComp
					className={'feedBackInput text300'}
					placeholder={t('phoneNumber')}
				/>
			</Form.Item>

			<p className={'text300 mt-27 ls-012 fz-12'}>
				Нажимая кнопку «Записаться», я соглашаюсь с политикой конфиденциальности 
				и даю согласие на обработку персональных данных
			</p>

			<SimpleButton
				text='Записаться'
				variant={'simple'}
			/>

		</Form>
	);
};


const HelpYou =  () => {


	return (
		<div className={'HelpYouBlock '}>

			<Image src={feedBackBg} alt='bg' className={'HelpYouBlock-bg'} />
			<Image src={flowers} alt='bg' className={'HelpYouBlock-Flowers'} />
			<div className={'pos HelpYouBlock-content w-620px z-7'}>
				<div>
					<div>
						<h2 className={'h2Subtitle twoStringTitle m-0'}>
							Поможем выбрать виллу 
							или апартаменты
						</h2>
						<h6 className={'text300 colorText pt-8 mb-30'}>
							Запишитесь на консультацию — менеджер ответит на ваши вопросы
							и поможет сделать выбор
						</h6>
					</div>

					<FeedBackForm sourcePage={''} sourceForm={'kiaraPage_HelpForm'} />
				</div>

				<div className={ 'ourMessengers-wrapper' }>
					<OurMessengers/>
				</div>

			</div>
		</div>
	);
};

export default HelpYou;