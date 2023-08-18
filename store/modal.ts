import { createEvent, createStore } from 'effector';
import { IModal_VisibleStore } from '@/types/modal';

export const showModal = createEvent<string>();
export const hideModal = createEvent<string>();
export const hideAllModal = createEvent();

export const $modalVisible = createStore<IModal_VisibleStore>( {
	callRequest: false,
} )
	.on( showModal, ( state, payload ) => ( {
		...state,
		[ payload ]: true,
	} ) )
	.on( hideModal, ( state, payload ) => ( {
		...state,
		[ payload ]: false,
	} ) )
	.reset( hideAllModal );
