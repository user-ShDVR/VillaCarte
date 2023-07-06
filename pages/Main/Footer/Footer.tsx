import React from 'react';
import logoImg from '@/public/logoImgDark.svg';
import Image from 'next/image';
import Contacts from '@/pages/Main/Footer/Contacts';
import facebookStock from '@/public/icons/socials/contacts/facebookStock.svg';
import youtubeStock from '@/public/icons/socials/contacts/youtubeStock.svg';
import vkStock from '@/public/icons/socials/contacts/vkStock.svg';
import instagramStock from '@/public/icons/socials/contacts/instagramStock.svg';
import telegramStock from '@/public/icons/socials/contacts/telegramStock.svg';
import fbHovered from '@/public/icons/socials/contacts/fbHovered.svg';
import youtubeHovered from '@/public/icons/socials/contacts/youtubeHovered.svg';
import vkHovered from '@/public/icons/socials/contacts/vkHovered.svg';
import instagramHovered from '@/public/icons/socials/contacts/instagramHovered.svg';
import telegramHovered from '@/public/icons/socials/contacts/telegramHovered.svg';
import Link from 'next/link';
import creativeTeam from '@/public/creativeTeam.svg';
import Socials from '@/components/common/Socials/Socials';

const socialsStock = [
	{ icon: facebookStock, hoveredIcon: fbHovered, link: '/' },
	{ icon: youtubeStock, hoveredIcon: youtubeHovered, link: '/' },
	{ icon: vkStock, hoveredIcon: vkHovered, link: '/' },
	{ icon: instagramStock, hoveredIcon: instagramHovered, link: '/' },
	{ icon: telegramStock, hoveredIcon: telegramHovered, link: '/' },
];

const ContactsBlock = () => {

	return (
		<footer>
			<div className={ 'container contactsBlock' }>
				<div className={ 'logotype' }>
					<Image src={ logoImg } alt={ 'VillaCarte' }/>
					<h2 className={ 'h2Subtitle' }>VillaCarte</h2>
				</div>

				<Contacts/>

				<div className={ 'socials' }>
					{ socialsStock.map( ( social, index ) =>
						<Socials key={ index } icon={ social.icon } hoveredIcon={ social.hoveredIcon } link={ social.link }/>
					) }
				</div>

				<div className={ 'privacyPolicy-wrapper' }>
					<Link href={ '/' } className={ 'text500 colorText privacyPolicy' }>
						Политика конфиденциальности
					</Link>
				</div>

				<div className={ 'divider' }/>

				<p className={ 'text300 copyRights' }>VillaCarte © 2012 - 2023 — Все права и материалы защищены</p>

				<div>
					<p className={ 'text300 copyRights' }>
						создание сайтов —
						<Link href={ '/' }>
							<Image src={ creativeTeam } alt={ 'creativeTeam' }/>
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default ContactsBlock;