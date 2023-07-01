import { createEvent, createStore } from 'effector';

export const updatePreloader = createEvent<boolean>();
export const $preloader = createStore( false )
	.on( updatePreloader, ( state, newState ) => newState );


