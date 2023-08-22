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
	yourName: string;
	phoneNumber: string;
	toggleButton: string;
	subscribe: string;
}

const OurMessengers = ({talk}: any) => {
	const messengers = [
		{ url: '/', icon: telegramIcon, whiteIcon: telegramWhiteIcon, text: 'Telegram' },
		{ url: '/', icon: whatsappIcon, whiteIcon: whatsappWhiteIcon, text: 'WhatsApp' },
		{ url: '/', icon: facebookIcon, whiteIcon: facebookWhiteIcon, text: 'Facebook' },
	];
	return (
		<div className={ 'ourMessengers' }>
			<h3 className={ 'h3TitleText fz-18-24 mb-28' }>{ talk }</h3>

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

const FeedBackForm = ({ sourcePage, sourceForm, yourName, phoneNumber, toggleButton, subscribe }: IProps) => {
	
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
					{ type: 'string', message: yourName },
					{ required: true, message: yourName }
				]}
			>
				<TextAreaLikeInput
					className={'feedBackInput text300'}
					placeholder={yourName}
				/>
			</Form.Item>

			<Form.Item
				name="phone"
				className={'feedBackInputWrapper'}
				rules={[
					{ type: 'string', message: phoneNumber },
					{ required: true, message: phoneNumber }
				]}
			>
				<PhoneInputComp
					className={'feedBackInput text300'}
					placeholder={phoneNumber}
				/>
			</Form.Item>

			<p className={'text300 mt-27 ls-012 fz-12'}>
			{toggleButton}
			</p>

			<SimpleButton
				text={subscribe}
				variant={'simple'}
			/>

		</Form>
	);
};

interface IPropsHelpYou {
	helpChoose: string;
	signUp: string;
	yourName: string;
phoneNumber: string;
toggleButton: string;
subscribe: string;
talk: string;
}
const HelpYou: React.FC<IPropsHelpYou> = ({
	helpChoose,
	signUp,
	yourName,
	phoneNumber,
	toggleButton,
subscribe,
talk
}) => {


	return (
		<div className={'HelpYouBlock '}>

			<Image src={feedBackBg} alt='bg' className={'HelpYouBlock-bg'} />
			<Image src={flowers} alt='bg' className={'HelpYouBlock-Flowers'} />
			<div className={'pos HelpYouBlock-content w-620px z-7'}>
				<div>
					<div>
						<h2 className={'h2Subtitle twoStringTitle m-0'}>
							{helpChoose}
						</h2>
						<h6 className={'text300 colorText pt-8 mb-30'}>
							{signUp}
						</h6>
					</div>

					<FeedBackForm
						toggleButton={toggleButton}
						subscribe={subscribe}
						yourName={yourName}
						phoneNumber={phoneNumber}
						sourcePage={''} sourceForm={'kiaraPage_HelpForm'} />
				</div>

				<div className={ 'ourMessengers-wrapper' }>
					<OurMessengers talk={talk}/>
				</div>

			</div>
		</div>
	);
};

export default HelpYou;