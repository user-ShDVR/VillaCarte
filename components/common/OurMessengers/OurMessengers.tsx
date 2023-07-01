import React from 'react';
import telegramIcon from '@/public/icons/socials/telegramIcon.svg';
import whatsappIcon from '@/public/icons/socials/whatsappIcon.svg';
import facebookIcon from '@/public/icons/socials/facebookIcon.svg';
import telegramWhiteIcon from '@/public/icons/socials/telegramWhiteIcon.svg';
import whatsappWhiteIcon from '@/public/icons/socials/whatsappWhiteIcon.svg';
import facebookWhiteIcon from '@/public/icons/socials/facebookWhiteIcon.svg';
import MessengerCard from '@/components/common/OurMessengers/MessengerCard';


const messengers = [
	{ url: '/', icon: telegramIcon, whiteIcon: telegramWhiteIcon, text: 'Telegram' },
	{ url: '/', icon: whatsappIcon, whiteIcon: whatsappWhiteIcon, text: 'WhatsApp' },
	{ url: '/', icon: facebookIcon, whiteIcon: facebookWhiteIcon, text: 'Facebook' },
];

const OurMessengers = () => {
	console.log(2);
	return (
		<div className={ 'ourMessengers' }>
			<h3 className={ 'h3TitleText fz-24' }>Наши месенджеры <br/> для связи</h3>

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

export default OurMessengers;