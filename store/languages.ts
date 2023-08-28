import { createEvent, createStore } from 'effector';
import { ILanguages } from '@/types/mainPage';

export const updateLanguages = createEvent<ILanguages>();

export const $languages = createStore<ILanguages>( { value: 'ru', label: 'ru' } )
	.on( updateLanguages, ( _, newState ) => newState );

