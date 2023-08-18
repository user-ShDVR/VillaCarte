import React from 'react';
import logoImg from '@/public/logoImgDark.svg';
import Image from 'next/image';
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
import RequestCallForm from '@/components/common/Forms/RequestСall/RequestCallForm';
import Contacts from '@/components/Main/Footer/Contacts';
import { lang } from '@/pages';
import feedBackBg from '@/public/feedBackBg.webp';

const ContactsBlock = () => {
	const socialsStock = [
		{ icon: facebookStock, hoveredIcon: fbHovered, link: '/' },
		{ icon: youtubeStock, hoveredIcon: youtubeHovered, link: '/' },
		{ icon: vkStock, hoveredIcon: vkHovered, link: '/' },
		{ icon: instagramStock, hoveredIcon: instagramHovered, link: '/' },
		{ icon: telegramStock, hoveredIcon: telegramHovered, link: '/' },
	];

	const linkPages = [
		{ title: lang?.sale || '', link: '/' },
		{ title: lang?.aboutTheCompany || '', link: '/' },
		{ title: lang?.rent || '', link: '/' },
		{ title: lang?.aboutPhuket || '', link: '/' },
		{ title: lang?.concierge || '', link: '/' },
		{ title: lang?.news || '', link: '/' },
		{ title: lang?.propertyManagement || '', link: '/' },
	];

	return (
		<footer>
			<div className={ 'footer-bg' } style={ { backgroundImage: `url(${ feedBackBg.src })` } }/>

			<div className={ 'container footer' }>
				<div className={ 'container contactsBlock' }>
					<div>
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
							<Link href={ '/' } className={ 'text300 colorText privacyPolicy' }>
								{ lang?.privacyPolicy || '' }
							</Link>
						</div>
					</div>

					<div className={ 'linkPages' }>
						{ linkPages.map( ( item, index ) =>
							<Link href={ item.link } key={ index }>
								<p className={ 'text300 colorText' }>{ item.title }</p>
							</Link>
						) }
					</div>

					<div className={ 'divider' }/>

					<div className={ 'd-xl-flex jc-between' }>
						<p className={ 'text300-min copyRights' }>{ lang?.VillaCarteAllRights || '' }</p>

						<p className={ 'text300-min copyRights' }>
							{ lang?.websiteDevelopment || '' }
							<Link href={ '/' }>
								<Image src={ creativeTeam } alt={ 'creativeTeam' }/>
							</Link>
						</p>
					</div>

				</div>

				<RequestCallForm sourcePage={ '' } sourceForm={ 'footer_form' }/>
			</div>
		</footer>
	);
};

export default ContactsBlock;