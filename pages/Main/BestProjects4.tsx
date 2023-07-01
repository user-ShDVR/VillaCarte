import React from 'react';
import { getMainPageInfo } from '@/store/mainPage';
import { IMainPage } from '@/types/mainPage';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useQuery } from 'react-query';
import GoodsCard from '@/components/common/Cards/GoodsCard/GoodsCard';
import Spinner from '@/components/common/Spinner/Spinner';
import HoveredButton from '@/components/common/Buttons/HoveredButton';

const BestProjects = () => {

	const {
		isLoading,
		data: mainPageInfo
	} = useQuery<IMainPage>( [ 'mainPageInfo' ], getMainPageInfo );

	return (
		<div className={ 'bgGradient bestProjects' }>
			<div className={ 'container pt-60' }>
				<h2 className={ 'h2Subtitle colorWhite' }>Лучшие проекты для жизни и инвестиций</h2>
				{ isLoading
					? <div><Spinner/></div>
					: <Tabs className={ 'bestProjects-tabs' }>
						<TabList className={ 'bestProjects-tabList text700 colorWhite' }>
							<Tab>Апартаменты</Tab>
							<Tab>Виллы</Tab>
						</TabList>

						<TabPanel className={ 'mt-28' }>
							{ mainPageInfo?.data?.apartments.map( item =>
								<GoodsCard key={ item.url } url={ item.url } image={ item.image } logoImage={ item.logoImage }/>
							) }
						</TabPanel>

						<TabPanel>
							{ mainPageInfo?.data?.villas.map( item =>
								<GoodsCard key={ item.url } url={ item.url } image={ item.image } logoImage={ item.logoImage }/>
							) }
						</TabPanel>

					</Tabs>
				}

				<div className={'mt-28 pb-40 d-flex jc-center'}>
					<HoveredButton text={ 'Показать еще 115 предложений' } to={ '/' } variant={ 'arrowWhite' }/>
				</div>
			</div>
		</div>
	);
};

export default BestProjects;