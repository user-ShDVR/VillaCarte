import { createEvent, createStore } from 'effector';
import { ILanguages } from '@/types/mainPage';

export const updateLanguages = createEvent<ILanguages>();

export const $languages = createStore<ILanguages>( { value: 'en', label: 'en' } )
	.on( updateLanguages, ( _, newState ) => newState );

