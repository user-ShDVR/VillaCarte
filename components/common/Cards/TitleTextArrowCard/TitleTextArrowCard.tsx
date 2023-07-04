import React, { useState } from 'react';
import LinkButton from '@/components/common/Buttons/LinkButton';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import cn from 'classnames';

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
		<Fade delay={1e2} cascade damping={1e-1}>
			<div className={ 'titleTextArrowCard' } onMouseOver={ onMouseOver } onMouseLeave={ onMouseLeave }>
				<Link href={ '/' }>
					<h3 className={ cn( 'h3TitleText', mouseOver ? 'colorGradient' : '' ) }>{ title }</h3>

					<div>
						<p className={ 'text300 colorText' }>{ text }</p>
						<LinkButton mouseOver={ mouseOver }/>
					</div>
				</Link>
			</div>
		</Fade>
	);
};

export default TitleTextArrowCard;