import { apiGet } from '@/api';
import { createEvent, createStore } from 'effector';
import { IMainPage } from '@/types/mainPage';

export const updateMainPageInfo = createEvent<IMainPage>();
export const $mainPageInfo = createStore<IMainPage>( {
	meta: { title: '', description: '', keywords: '' },
	data: {
		villas: [],
		apartments: [],
		offersNumber: 0,
		ownProjects: [],
		youTubeVideos: [],
		instagramPosts: []
	} || null,
} ).on( updateMainPageInfo, ( state, newState ) => newState );

export const getMainPageInfo = async () => {
	const response = await apiGet( {
		url: '/pages/thailand/index?lang=RU'
	} );

	updateMainPageInfo( response );

	return response;
};
