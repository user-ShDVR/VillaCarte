import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
	url: string;
	icon: string;
	whiteIcon: string;
	text: string;
}

const MessengerCard = ( { url, icon, whiteIcon, text }: IProps ) => {
	const [ mouseOver, setMouseOver ] = useState<boolean>( false );

	const onMouseOver = () => {
		setMouseOver( true );
	};
	const onMouseLeave = () => {
		setMouseOver( false );
	};

	return (
		<div
			onMouseOver={ onMouseOver }
			onMouseLeave={ onMouseLeave }
		>
			<Link href={ url }>
				{ mouseOver
					? <Image src={ whiteIcon } alt={ text }/>
					: <Image src={ icon } alt={ text }/>
				}
				<p className={ 'text500' }>{ text }</p>
			</Link>
		</div>

	);
};

export default MessengerCard;