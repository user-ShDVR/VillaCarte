import React from 'react';

interface IProps {
	onClick?: () => void;
}

const ModalCloseButton = ( { onClick }: IProps ) => {
	return (
		<button onClick={ onClick } className={ 'modalCloseButton' }/>
	);
};

export default ModalCloseButton;