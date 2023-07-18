import React, { useState } from 'react';
import LinkButton from '@/components/common/Buttons/LinkButton';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import cn from 'classnames';

interface IProps {
	title: string;
	text: string;
	text2?: string;
	text3?: string;
}

const TitleTextArrowCard = ( { title, text, text2, text3 }: IProps ) => {
	const [ mouseOver, setMouseOver ] = useState<boolean>( false );

	const onMouseOver = () => {
		setMouseOver( true );
	};
	const onMouseLeave = () => {
		setMouseOver( false );
	};

	return (
		<div className={ 'titleTextArrowCard' } onMouseOver={ onMouseOver } onMouseLeave={ onMouseLeave }>
			<Link href={ '/' }>
				<h3 className={ cn( 'h3TitleText', mouseOver ? 'colorGradient' : '' ) }>{ title }</h3>

				<div>
					<p className={ 'text300 colorText' }>{ text } <br/> <span>{ text2 }</span><br/> <span>{ text3 }</span></p>
					<LinkButton mouseOver={ mouseOver }/>
				</div>
			</Link>
		</div>
	);
};

export default TitleTextArrowCard;