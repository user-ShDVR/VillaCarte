import React from 'react';
import listPoint from '@/public/icons/listPoint.svg';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { useWindowSize } from '@/hooks/useWindowSize';

const FiveSteps = () => {
	const size = useWindowSize();
	// @ts-ignore
	const isMobile = size.width <= 1439;

	return (
		<div className={ 'stepsWrapper' }>

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
				<div className={ 'container d-flex' }>
					<Fade delay={ 1e3 } cascade damping={ 1e-1 }>
						<div className={ 'step' }>
							<h6 className={ 'text300 fz-80 pl-16' }>01</h6>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								Персонально подбираем недвижимость под ваши цели и бюджет
							</p>
						</div>
					</Fade>

					<Fade delay={ 2e3 } cascade damping={ 1e-1 }>
						<div className={ 'step' }>
							<h6 className={ 'text300 fz-80 pl-16' }>02</h6>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								Рассчитываем доходность, знакомим с объектами и инфраструктурой
							</p>
						</div>
					</Fade>

					<Fade delay={ 3e3 } cascade damping={ 1e-1 }>
						<div className={ 'step' }>
							<h6 className={ 'text300 fz-80 pl-16' }>03</h6>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								Договариваемся с застройщиком о выгодных для вас условиях и помогаем заключить сделку
							</p>
						</div>
					</Fade>

					<Fade delay={ 4e3 } cascade damping={ 1e-1 }>
						<div className={ 'step' }>
							<h6 className={ 'text300 fz-80 pl-16' }>04</h6>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								Юридически сопровождаем сделку: проверяем объект и помогаем с документами
							</p>
						</div>
					</Fade>

					<Fade delay={ 5e3 } cascade damping={ 1e-1 }>
						<div className={ 'step' }>
							<h6 className={ 'text300 fz-80 pl-16' }>05</h6>
							<Image src={ listPoint } alt={ '' }/>
							<div className={ 'stepLine' }/>
							<p className={ 'text300 colorWhite pl-16' }>
								Берём на себя управление недвижимостью на Пхукете и предоставляем услуги консьерж-сервиса
							</p>
							<Image className={ 'lastImage' } src={ listPoint } alt={ '' }/>
						</div>
					</Fade>
				</div>
			}
		</div>
	);
};

export default FiveSteps;