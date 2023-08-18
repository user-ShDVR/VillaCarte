import { createEvent, createStore } from 'effector';

// Sales
export const showMainDropMenuSales = createEvent<boolean>();
export const hideMainDropMenuSales = createEvent<boolean>();

export const $mainDropMenuVisibleSales = createStore<boolean>( false )
	.on( showMainDropMenuSales, ( state, payload ) => payload )
	.reset( hideMainDropMenuSales );

// Services
export const showMainDropMenuServices = createEvent<boolean>();
export const hideMainDropMenuServices = createEvent<boolean>();

export const $mainDropMenuVisibleServices = createStore<boolean>( false )
	.on( showMainDropMenuServices, ( state, payload ) => payload )
	.reset( hideMainDropMenuServices );

