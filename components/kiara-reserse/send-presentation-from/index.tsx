import React from 'react';
import feedBackBg from '@/public/kiara-reserve/Image.png';
import cardImg from '@/public/kiara-reserve/Group1000004473.png';

import { Form } from 'antd';
import SimpleButton from '@/components/common/Buttons/SimpleButton';
import { hideModal } from '@/store/modal';
import { EModal_VisibleStore } from '@/types/modal';
import PhoneInputComp from '@/components/common/Forms/PhoneInputComp';
import TextAreaLikeInput from '@/components/common/Forms/TextAreaLikeInput';
import { postFeedback } from '@/store/feedback';
import { IFeedback } from '@/types/feedback';
import Image from 'next/image';

interface IProps {
	sourcePage: string;
	sourceForm: string;
	downloadText: string;
	downloadButton: string;
	yourName: string;
	phoneNumber: string;
}

const FeedBackForm = ({ 
	sourcePage, 
	sourceForm,
	downloadText,
	downloadButton,
	yourName,
	phoneNumber,
}: IProps) => {
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
					{ type: 'string', message: phoneNumber},
					{ required: true, message: phoneNumber }
				]}
			>
				<PhoneInputComp
					className={'feedBackInput text300'}
					placeholder={phoneNumber}
				/>
			</Form.Item>

			<p className={'text300 mt-27 ls-012 fz-12'}>
				{downloadText}
			</p>

			<SimpleButton
				text={downloadButton}
				variant={'simple'}
			/>

		</Form>
	);
};

interface IPropsPres {
	startEarning:string;
	fillForm: string;
	yourName: string;
	phoneNumber: string;
	downloadText: string;
	downloadButton: string;
}
const SendPresentationFrom: React.FC<IPropsPres> = ({
	startEarning,
	fillForm,
	phoneNumber,
	yourName,
	downloadText,
	downloadButton,
}) => {


	return (
		<div className={'presentationBlock '}>

			<Image src={feedBackBg} alt='bg' className={'presentationBlock-bg'} />

			<div className={'pos presentationBlock-content w-620px z-7'}>
				<div>
					<div>
						<h2 className={'h2Subtitle twoStringTitle m-0'}>{startEarning}</h2>
						<h6 className={'text300 colorText pt-8 mb-30'}>
							{fillForm}
						</h6>
					</div>

					<FeedBackForm
					phoneNumber={phoneNumber}
					yourName={yourName}
					downloadText={downloadText}
					downloadButton={downloadButton}
					 sourcePage={''} sourceForm={'kiaraPage_Presentation'} />
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