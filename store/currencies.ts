import { createEvent, createStore } from 'effector';
import { ICurrencies } from '@/types/mainPage';

export const updateCurrencies = createEvent<ICurrencies>();

export const $currencies = createStore<ICurrencies>( { value: 'usd', label: 'usd' } )
	.on( updateCurrencies, ( _, newState ) => newState );
