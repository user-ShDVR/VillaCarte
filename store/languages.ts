import { createEvent, createStore } from 'effector';
import { ILanguages } from '@/types/languages';
import { apiGet } from '@/api';
// import { updateLocalizations } from '../data/localization';

export const getLanguages = async () => {
	const response = await apiGet( { url: '/' } );
	// updateLocalizations( response.labels );
	updateLanguages( response );

	return response;
};

export const updateLanguages = createEvent<ILanguages>();

export const $languages = createStore<ILanguages>( { languages: [ { language: 'ru', code: 'ru' } ] } )
	.on( updateLanguages, ( _, newState ) => newState );
