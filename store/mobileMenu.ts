import { createEvent, createStore } from 'effector';

export const showMobileMenu = createEvent<boolean>();
export const hideMobileMenu = createEvent<boolean>();

export const $mobileMenuVisible = createStore<boolean>( false )
  .on( showMobileMenu, ( state, payload ) => payload )
  .reset( hideMobileMenu );

// Sales
export const showMobileDropMenuSales = createEvent<boolean>();
export const hideMobileDropMenuSales = createEvent<boolean>();

export const $mobileDropMenuVisibleSales = createStore<boolean>( false )
	.on( showMobileDropMenuSales, ( state, payload ) => payload )
	.reset( hideMobileDropMenuSales );

// Services
export const showMobileDropMenuServices = createEvent<boolean>();
export const hideMobileDropMenuServices = createEvent<boolean>();

export const $mobileDropMenuVisibleServices = createStore<boolean>( false )
  .on( showMobileDropMenuServices, ( state, payload ) => payload )
  .reset( hideMobileDropMenuServices );

