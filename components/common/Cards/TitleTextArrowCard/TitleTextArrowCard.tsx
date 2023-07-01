import React, { useState } from 'react';
import LinkButton from '@/components/common/Buttons/LinkButton';
import Link from 'next/link';

interface IProps {
	title: string;
	text: string;
}

const TitleTextArrowCard = ( { title, text }: IProps ) => {
	const [ mouseOver, setMouseOver ] = useState<boolean>( false );

	const onMouseOver = () => {
		setMouseOver( true );
	};
	const onMouseLeave = () => {
		setMouseOver( false );
	};

	return (
		<div className={ 'titleTextArrowCard' } onMouseOver={ onMouseOver } onMouseLeave={ onMouseLeave }>
			<Link href={'/'}>
				<h3 className={ 'h3TitleText' }>{ title }</h3>

				<div>
					<p className={ 'text300 colorText' }>{ text }</p>
					<LinkButton mouseOver={ mouseOver }/>
				</div>
			</Link>
		</div>
	);
};

export default TitleTextArrowCard;