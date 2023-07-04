import React from 'react';
import logoImg from '@/public/logoImgDark.svg';
import Image from 'next/image';
import Contacts from '@/pages/Main/Footer/Contacts';
import facebookStock from '@/public/icons/socials/contacts/facebookStock.svg';
import youtubeStock from '@/public/icons/socials/contacts/youtubeStock.svg';
import vkStock from '@/public/icons/socials/contacts/vkStock.svg';
import instagramStock from '@/public/icons/socials/contacts/instagramStock.svg';
import telegramStock from '@/public/icons/socials/contacts/telegramStock.svg';
import telegramHovered from '@/public/icons/socials/contacts/tgHovered.svg';
import Link from 'next/link';
import creativeTeam from '@/public/creativeTeam.svg';

const socialsStock = [
	{ icon: facebookStock, hoveredIcon: telegramHovered, link: '/' },
	{ icon: youtubeStock, hoveredIcon: telegramHovered, link: '/' },
	{ icon: vkStock, hoveredIcon: telegramHovered, link: '/' },
	{ icon: instagramStock, hoveredIcon: telegramHovered, link: '/' },
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
						<Link key={ index } href={ social.link }>
							<Image src={ social.icon } alt={ social.link }/>
						</Link>
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