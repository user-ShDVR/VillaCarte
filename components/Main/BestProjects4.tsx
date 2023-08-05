import React from 'react';
import { IMainPageData } from '@/types/mainPage';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import GoodsCard from '@/components/common/Cards/GoodsCard/GoodsCard';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
import { lang } from '@/pages';
import noise from '@/public/noise.webp';

interface IProps {
	data: IMainPageData;
}

const BestProjects = ( { data }: IProps ) => {

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

					<TabPanel className={ '' }>
						{ data?.apartments.slice( 0, 6 ).map( ( item, index ) =>
							<GoodsCard key={ index } url={ item.url } image={ item.image } logoImage={ item.logoImage }/>
						) }
					</TabPanel>

					<TabPanel className={ '' }>
						{ data?.villas.slice( 0, 6 ).map( ( item, index ) =>
							<GoodsCard key={ index } url={ item.url } image={ item.image } logoImage={ item.logoImage }/>
						) }
					</TabPanel>

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