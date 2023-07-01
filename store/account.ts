import { createEvent, createStore } from 'effector';
import { login, logout } from './auth';
import { apiGet, apiPost } from '@/api';
import { IUserInfo } from '@/types/account';

export const updateUserInfo = createEvent<IUserInfo>();
export const clearUserInfo = createEvent();

export const $userInfo = createStore<IUserInfo | null>( null )
	.on( updateUserInfo, ( state, newState ) => {
		return newState;
	} )
	.reset( clearUserInfo );

login.watch( ( state: any ) => {
	if ( state ) getUserInfo().then();
} );

logout.watch( ( state: any ) => {
	clearUserInfo();
} );

export const getUserInfo = async () => {
	const response = await apiGet( {
		url: '/account',
	} );

	updateUserInfo( response );

	return response;
};

export const saveUserInfo = async ( postData: IUserInfo | FormData ) => {
	const response = await apiPost( {
		url: '/account',
		postData
	} );

	updateUserInfo( response );

	return response;
};