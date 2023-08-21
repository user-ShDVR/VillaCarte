import React from 'react';
import { useTranslations } from 'next-intl';

const Contacts = () => {
	const t = useTranslations('Index');
	return (
		<div className={ 'contacts-wrapper' }>
			<a className={ 'text500 t-decor-none contact-mail' } href='mailto: sales@villacarte.com'>
				<p>sales@villacarte.com</p>
			</a>
			<div className={ 'd-flex jc-around jc-xl-start mt-20 w-100-p' }>
				<div className={ 'contact' }>
					<p className={ 'text300 colorText m-0' }>{ t('montenegro') || '' }</p>
					<a className={ 'text500 t-decor-none' } href='tel: +38268815019'>
						<p>+382 (68) 815-019</p>
					</a>
				</div>
				<div className={ 'contact' }>
					<p className={ 'text300 colorText m-0' }>{ t('phuket') || '' }</p>
					<a className={ 'text500 t-decor-none' } href='tel: +66892900110'>
						<p>+66 (89) 290-01-10</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contacts;