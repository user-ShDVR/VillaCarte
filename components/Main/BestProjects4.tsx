import React from 'react';
import { $mainPageInfo } from '@/store/mainPage';
import { IMainPage } from '@/types/mainPage';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import GoodsCard from '@/components/common/Cards/GoodsCard/GoodsCard';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
import { useStore } from 'effector-react';
import { Fade } from 'react-awesome-reveal';
import { lang } from '@/pages';
import noise from '@/public/noise.webp';

const BestProjects = () => {
	const offers = useStore<IMainPage>( $mainPageInfo );

	// const [ showApartments, setShowApartments ] = useState<boolean>( true );
	// const [ showVillas, setShowVillas ] = useState<boolean>( true );
	//
	// const toClickApartments = () => {
	// 	setShowApartments( true );
	// 	// setShowVillas( false );
	// };
	//
	// const toClickVillas = () => {
	// 	setShowVillas( true );
	// 	// setShowApartments( false );
	// };
	//
	// const showContent = {
	// 	transform: 'translateX(0)',
	// 	transition: 'opacity 1.5s',
	// };
	//
	// const displayNone = {
	// 	transform: 'translateX(100%)',
	// 	transition: 'opacity 1.5s',
	// };
	//
	// const styleAnimateApartments = showApartments ? showContent : displayNone;
	// const styleAnimateVillas = showVillas ? showContent : displayNone;

	return (
		<div className={ 'bgGradient bestProjects' }>
			<img src={ noise.src } alt="" className={ 'noise noisePadding h-100-p-mobile' }/>

			<div className={ 'container bestProjects-inner' }>
				<h2 className={ 'h1Title colorWhite ls--216' }>{ lang?.theBestProjectsForLife || '' }</h2>
				<h2 className={ 'h1Title colorWhite ls--216' }>{ lang?.theBestProjectsForLife2 || '' }</h2>

				<Tabs className={ 'bestProjects-tabs' } selectedTabPanelClassName={ '' }>
					<TabList className={ 'bestProjects-tabList text500 colorWhite' }>
						<Tab>{ lang?.apartments || '' }</Tab>
						<Tab>{ lang?.villas || '' }</Tab>
					</TabList>

					{/*<Fade duration={ 2000 }> */ }
					<TabPanel className={ '' }>
						{ offers.data?.villas.slice( 0, 6 ).map( item =>
							<GoodsCard key={ item.url } url={ item.url } image={ item.image } logoImage={ item.logoImage }/>
						) }
					</TabPanel>
					{/*</Fade> */ }

					{/*<Fade duration={ 2000 }> */ }
					<TabPanel className={ '' }>
						{ offers.data?.villas.slice( 0, 6 ).map( item =>
							<GoodsCard key={ item.url } url={ item.url } image={ item.image } logoImage={ item.logoImage }/>
						) }
					</TabPanel>
					{/*</Fade> */ }

				</Tabs>

				<div className={ 'mt-28 pb-40-100 d-flex jc-center' }>
					<HoveredButton
						text={ `${ lang?.showTheRest || '' } 115 ${ lang?.offers || '' }` }
						to={ '/' }
						variant={ 'arrowRevert' }
						className={ 'manrope600-14 z-7' }
					/>
				</div>
			</div>
		</div>
	);
};

export default BestProjects;