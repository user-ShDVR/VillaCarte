import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
	icon: string;
	hoveredIcon: string;
	link: string;
}

const Socials = ( { icon, hoveredIcon, link }: IProps ) => {
	const [ mouseOver, setMouseOver ] = useState<boolean>( false );

	const onMouseOver = () => {
		setMouseOver( true );
	};
	const onMouseLeave = () => {
		setMouseOver( false );
	};

	return (
		<Link href={ link } onMouseOver={ onMouseOver } onMouseLeave={ onMouseLeave }>
			{ mouseOver
				? <Image src={ hoveredIcon } alt={ link } />
				: <Image src={ icon } alt={ link } />
			}
		</Link>
	);
};

export default Socials;