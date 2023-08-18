import React, { useEffect, useState } from 'react';
import listPoint from '@/public/icons/listPoint1.svg';
import Image from 'next/image';
import { useWindowSize } from '@/hooks/useWindowSize';
import { lang } from '@/pages';
import { Fade } from 'react-awesome-reveal';

const FiveSteps = () => {
	const size = useWindowSize();
	// @ts-ignore
	const isMobile = size.width <= 1439;

	const [ step, setStep ] = useState<number>( 0 );
	const [ scrolled, setScrolled ] = useState<boolean>( false );

	const toShow = () => {
		// @ts-ignore
		setStep( count => count + 1 );
	};

	useEffect( () => {
		const onScroll = () => {
			// @ts-ignore
			if ( document.documentElement.scrollTop > 4850 ) {
				setScrolled( true );
			} else {
				setScrolled( false );
			}
		};

		window.addEventListener( 'scroll', onScroll );

		return () => {
			window.removeEventListener( 'scroll', onScroll );
		};
	}, [] );

	if ( scrolled ) {
		setInterval( toShow, 1000 );
	}

	return (
		<div className={ 'stepsWrapper container' }>

			{ isMobile
				?
				<>
					<div className={ 'step' }>
						<h6 className={ 'text300 fz-80 pl-16' }>01</h6>
						<Image src={ listPoint } alt={ '' }/>
						<div className={ 'stepLine' }/>
						<p className={ 'text300 colorWhite pl-16' }>
							{ lang?.weSelectTheRealEstatePersonally || '' }
						</p>
					</div>

					<div className={ 'step' }>
						<h6 className={ 'text300 fz-80 pl-16' }>02</h6>
						<Image src={ listPoint } alt={ '' }/>
						<div className={ 'stepLine' }/>
						<p className={ 'text300 colorWhite pl-16' }>
							{ lang?.weCalculateProfitability || '' }
						</p>
					</div>

					<div className={ 'step' }>
						<h6 className={ 'text300 fz-80 pl-16' }>03</h6>
						<Image src={ listPoint } alt={ '' }/>
						<div className={ 'stepLine' }/>
						<p className={ 'text300 colorWhite pl-16' }>
							{ lang?.weNegotiateWithTheDeveloper || '' }
						</p>
					</div>

					<div className={ 'step' }>
						<h6 className={ 'text300 fz-80 pl-16' }>04</h6>
						<Image src={ listPoint } alt={ '' }/>
						<div className={ 'stepLine' }/>
						<p className={ 'text300 colorWhite pl-16' }>
							{ lang?.weLegallyAccompanyTheTransaction || '' }
						</p>
					</div>

					<div className={ 'step' }>
						<h6 className={ 'text300 fz-80 pl-16' }>05</h6>
						<Image src={ listPoint } alt={ '' }/>
						<div className={ 'stepLine' }/>
						<p className={ 'text300 colorWhite pl-16' }>
							{ lang?.weTakeCareOfYourPropertyManagement || '' }
						</p>
						<Image className={ 'lastImage' } src={ listPoint } alt={ '' }/>
					</div>
				</>
				:
				<div className={ 'container' }>
					<div className={ 'numbers' }>
						<Fade delay={ 0 } triggerOnce>
							<h6 className={ 'text300 fz-80 pl-20' }>
								01
							</h6>
						</Fade>
						<Fade delay={ 500 } triggerOnce>
							<h6 className={ 'text300 fz-80 pl-16' }>
								02
							</h6>
						</Fade>
						<Fade delay={ 1000 } triggerOnce>
							<h6 className={ 'text300 fz-80 pl-10' }>
								03
							</h6>
						</Fade>
						<Fade delay={ 1500 } triggerOnce>
							<h6 className={ 'text300 fz-80 pl-4' }>
								04
							</h6>
						</Fade>
						<Fade delay={ 2000 } triggerOnce>
							<h6 className={ 'text300 fz-80' }>
								05
							</h6>
						</Fade>
					</div>

					<div className={ 'steps' }>
						<div className={ 'step' }>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								{ lang?.weSelectTheRealEstatePersonally || '' }
							</p>
						</div>

						<div className={ 'step' }>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								{ lang?.weCalculateProfitability || '' }
							</p>
						</div>

						<div className={ 'step' }>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								{ lang?.weNegotiateWithTheDeveloper || '' }
							</p>
						</div>

						<div className={ 'step' }>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								{ lang?.weLegallyAccompanyTheTransaction || '' }
							</p>
						</div>

						<div className={ 'step' }>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								{ lang?.weTakeCareOfYourPropertyManagement || '' }
							</p>
							<Image className={ 'lastImage' } src={ listPoint } alt={ '' }/>
						</div>
					</div>

				</div>
			}
		</div>
	);
};

export default FiveSteps;