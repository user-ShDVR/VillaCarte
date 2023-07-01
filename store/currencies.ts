import { createEvent, createStore } from 'effector';
import { apiGet } from '@/api';
import { ICurrencies } from '@/types/mainPage';

export const getCurrencies = async () => {
	// const response = await apiGet( { url: '/' } );
	// updateCurrencies( response );
	// return response;
	return { usd: 'usd', thb: 'thb', rub: 'rub' };
};

export const updateCurrencies = createEvent<ICurrencies>();

export const $currencies = createStore<ICurrencies>( { rub: 0, thb: 0, usd: 0 } )
	.on( updateCurrencies, ( _, newState ) => newState );
