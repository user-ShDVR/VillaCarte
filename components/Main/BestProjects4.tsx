import React from 'react';
import { $mainPageInfo } from '@/store/mainPage';
import { IMainPage } from '@/types/mainPage';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import GoodsCard from '@/components/common/Cards/GoodsCard/GoodsCard';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
import { useStore } from 'effector-react';
import { Slide } from 'react-awesome-reveal';

const BestProjects = () => {
	const offers = useStore<IMainPage>( $mainPageInfo );

	return (
		<div className={ 'bgGradient bestProjects mt_202' }>
			<Slide direction={ 'up' } triggerOnce={ true } delay={ 500 }>
				<div className={ 'container bestProjects-inner' }>
					<h2 className={ 'h1Title colorWhite' }>Лучшие проекты <br/> для жизни и инвестиций</h2>

					<Tabs className={ 'bestProjects-tabs' }>
						<TabList className={ 'bestProjects-tabList text700 colorWhite' }>
							<Tab>Апартаменты</Tab>
							<Tab>Виллы</Tab>
						</TabList>

						<TabPanel>
							{ offers.data?.apartments.slice( 0, 6 ).map( item =>
								<GoodsCard key={ item.url } url={ item.url } image={ item.image } logoImage={ item.logoImage }/>
							) }
						</TabPanel>

						<TabPanel>
							{ offers?.data?.villas.slice( 0, 6 ).map( item =>
								<GoodsCard key={ item.url } url={ item.url } image={ item.image } logoImage={ item.logoImage }/>
							) }
						</TabPanel>

					</Tabs>

					<div className={ 'mt-28 pb-40-60 d-flex jc-center' }>
						<HoveredButton text={ 'Показать еще 115 предложений' } to={ '/' } variant={ 'arrowRevert' }/>
					</div>
				</div>
			</Slide>
		</div>
	);
};

export default BestProjects;