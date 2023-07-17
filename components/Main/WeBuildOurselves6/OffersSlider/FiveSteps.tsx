import React, { useEffect, useState } from 'react';
import listPoint from '@/public/icons/listPoint1.svg';
import Image from 'next/image';
import { useWindowSize } from '@/hooks/useWindowSize';

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
		setInterval( toShow, 1500 );
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
							Персонально подбираем недвижимость под ваши цели и бюджет
						</p>
					</div>

					<div className={ 'step' }>
						<h6 className={ 'text300 fz-80 pl-16' }>02</h6>
						<Image src={ listPoint } alt={ '' }/>
						<div className={ 'stepLine' }/>
						<p className={ 'text300 colorWhite pl-16' }>
							Рассчитываем доходность, знакомим с объектами и инфраструктурой
						</p>
					</div>

					<div className={ 'step' }>
						<h6 className={ 'text300 fz-80 pl-16' }>03</h6>
						<Image src={ listPoint } alt={ '' }/>
						<div className={ 'stepLine' }/>
						<p className={ 'text300 colorWhite pl-16' }>
							Договариваемся с застройщиком о выгодных для вас условиях и помогаем заключить сделку
						</p>
					</div>

					<div className={ 'step' }>
						<h6 className={ 'text300 fz-80 pl-16' }>04</h6>
						<Image src={ listPoint } alt={ '' }/>
						<div className={ 'stepLine' }/>
						<p className={ 'text300 colorWhite pl-16' }>
							Юридически сопровождаем сделку: проверяем объект и помогаем с документами
						</p>
					</div>

					<div className={ 'step' }>
						<h6 className={ 'text300 fz-80 pl-16' }>05</h6>
						<Image src={ listPoint } alt={ '' }/>
						<div className={ 'stepLine' }/>
						<p className={ 'text300 colorWhite pl-16' }>
							Берём на себя управление недвижимостью на Пхукете и предоставляем услуги консьерж-сервиса
						</p>
						<Image className={ 'lastImage' } src={ listPoint } alt={ '' }/>
					</div>
				</>
				:
				<div className={ 'container' }>
					<div className={ 'steps' }>

						<div className={ 'step' } style={ step >= 1 ? { display: 'block' } : { display: 'none' } }>
							<h6 className={ 'text300 fz-80 pl-16' }>01</h6>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								Персонально подбираем недвижимость под ваши цели и бюджет
							</p>
						</div>

						<div className={ 'step' } style={ step >= 5 ? { display: 'block' } : { display: 'none' } }>
							<h6 className={ 'text300 fz-80 pl-16' }>02</h6>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								Рассчитываем доходность, знакомим с объектами и инфраструктурой
							</p>
						</div>

						<div className={ 'step' } style={ step >= 12 ? { display: 'block' } : { display: 'none' } }>
							<h6 className={ 'text300 fz-80 pl-16' }>03</h6>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								Договариваемся с застройщиком о выгодных для вас условиях и помогаем заключить сделку
							</p>
						</div>

						<div className={ 'step' } style={ step >= 20 ? { display: 'block' } : { display: 'none' } }>
							<h6 className={ 'text300 fz-80 pl-16' }>04</h6>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								Юридически сопровождаем сделку: проверяем объект и помогаем с документами
							</p>
						</div>

						<div className={ 'step' } style={ step >= 33 ? { display: 'block' } : { display: 'none' } }>
							<h6 className={ 'text300 fz-80 pl-16' }>05</h6>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								Берём на себя управление недвижимостью на Пхукете и предоставляем услуги консьерж-сервиса
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