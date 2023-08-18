import axios, { AxiosError } from 'axios';
import { API } from './global';
import { IApiRequest_Get, IApiRequest_Post } from '@/types/api';
import { logout } from '@/store/auth';

export const Api = axios.create( {
	baseURL: API.url,
	timeout: API.timeout,
} );

export const getHeaders = ( accessToken: string ) => {
	const headers = {};
// @ts-ignore
	headers[ 'Content-Type' ] = 'application/json';

	if ( accessToken ) {
		// @ts-ignore
		headers.Authorization = `Bearer ${ accessToken }`;
	}

	return headers;
};

const successHandler = ( response: any ) => {
	// updateApiLoading(false);

	if ( response.status === 401 ) {
		logout();
	}

	// if ( response.status === 400 ) {
	// 	updateAlert( {
	// 		type: 'danger',
	// 		message: response.data.message
	// 	} );
	// }

	return response.data;
};

const errorHandler = ( error: AxiosError ) => {
	//   updateApiLoading(false);

	if ( error.response?.status === 401 ) {
		logout();
	}

	// if ( error.response?.status === 400 ) {
	// 	updateAlert( {
	// 		type: 'danger',
	// 		// @ts-ignore
	// 		message: error.response?.data?.message
	// 	} );
	// }

	throw error;
};

export const apiGet = async ( { url }: IApiRequest_Get ) => {
	const response = await Api.get( url );
	return response?.data;
};

export const apiPost = async (
	{
		url,
		postData,
	}: IApiRequest_Post ) => {

	return await Api.post( url, postData )
		.then( res => successHandler( res ) )
		.catch( e => errorHandler( e ) );
};