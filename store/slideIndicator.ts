import { createEvent, createStore } from 'effector';

export const showIndicator = createEvent<boolean>();

export const $indicator = createStore<boolean>( true )
	.on( showIndicator, ( state, payload ) => payload );

export const showIndicator2 = createEvent<boolean>();

export const $indicator2 = createStore<boolean>( false )
	.on( showIndicator2, ( state, payload ) => payload );

