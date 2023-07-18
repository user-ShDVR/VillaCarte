import cn from 'classnames';
import { useStoreMap } from 'effector-react';
import { ReactNode } from 'react';
import { $modalVisible, hideModal } from '@/store/modal';

export interface IModalProps {
	id?: string;
	wrapperClass?: string;
	modalClass?: string;
	storeKey: string;
	children: ReactNode;
	onCloseCallback?: () => void;
	resetForm?: () => void;
	setValue?: () => void;
	cantClose?: boolean;
}

export const Modal = ( props: IModalProps ) => {
	// @ts-ignore
	const visible = useStoreMap( $modalVisible, s => s[ props.storeKey ] );

	const closeModal = () => {
		if ( !props.cantClose ) hideModal( props.storeKey );
	};

	return (
		<>
			{ visible &&
				<div
					id={ props.id }
					className={ cn( 'modal d-flex ai-start jc-center overflowNoHidden', props.modalClass, {
						'd-none': !visible,
					} ) }
				>
					<div className="shadow" onClick={ closeModal }/>

					<div className={ props.wrapperClass }>
						{ props.children }
					</div>
				</div>
			}
		</>
	);
};
