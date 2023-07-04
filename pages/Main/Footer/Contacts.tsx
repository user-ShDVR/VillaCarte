import React from 'react';

const Contacts = () => {
	return (
		<div className={'contacts-wrapper'}>
			<a className={ 'text700 t-decor-none contact-mail' } href='mailto: sales@villacarte.com'>sales@villacarte.com</a>
			<div className={'d-flex jc-around mt-20 w-100-p'}>
				<div className={ 'contact' }>
					<p className={ 'text300 colorText m-0' }>Черногория</p>
					<a className={ 'text500 t-decor-none' } href='tel: +38268815019'>+382 (68) 815-019</a>
				</div>
				<div className={ 'contact' }>
					<p className={ 'text300 colorText m-0' }>Пхукет</p>
					<a className={ 'text500 t-decor-none' } href='tel: +66892900110'>+66 (89) 290-01-10</a>
				</div>
			</div>
		</div>
	);
};

export default Contacts;