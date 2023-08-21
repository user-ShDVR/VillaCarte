import React, { FC } from 'react';
import Image from 'next/image';
import verifed from '@/public/kiara-reserve/verifed.webp';
import Map from '@/public/kiara-reserve/Group 1000004524.webp';

import HoveredButton from '@/components/common/Buttons/HoveredButton';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import GoodsCard from '@/components/common/Cards/GoodsCard/GoodsCard';

const VideoKiera: React.FC = () => {
    return (
        <div className='video-kiera' style={{marginTop: '-24.2vw', position: 'relative'}}>
            <div className='video-kiera__container'>
                <Image
                    src={verifed}
                    alt='photo'
                    fill={true}
                />
                <div className={' d-flex jc-center'} style={{ position: 'absolute'}}>
					<HoveredButton
						text={'Посмотрите видеообзор районов Пхукета'}
						to={'/'}
						variant={'arrowRevert'}
						className={'manrope600-14 z-7'}
					/>
				</div>
            </div>
        </div>
    );
};

const Verifed: FC = () => {

    const data = { apartments:
        [{'image':'store/th/sale/5554/uRhJoaPS-sq','logoImage':'store/th/sale/5554/3yKPkNBg','type':{'en':'Apartments','ru':'Апартаменты'},'locationName':{'en':'Bang Tao','ru':'Банг Тао'},'price':{'usd':100000,'thb':3507000,'rub':10000000},'url':'sale/thailand/kiara'},
        {'image':'store/th/sale/5561/8hfbvbDR-sq','logoImage':'store/th/sale/5553/v2aFgIPt','type':{'en':'Apartments','ru':'Апартаменты'},'locationName':{'en':'Bang Tao','ru':'Банг Тао'},'price':{'usd':100000,'thb':3507000,'rub':10000000},'url':'sale/thailand/banyan-tree-grand-residences'},
        {'image':'store/th/sale/5552/YONSyRDP-sq','logoImage':'store/th/sale/5552/ElQEgvCD','type':{'en':'Apartments','ru':'Апартаменты'},'locationName':{'en':'Bang Tao','ru':'Банг Тао'},'price':{'usd':100000,'thb':3507000,'rub':10000000},'url':'sale/thailand/andara'}
    ]}

    return (
        <div className='bgGradient verifed'>
           <VideoKiera/>

            <div className='verifed__container'>
                <h1>
                    Лично проверили и выбрали для вас лучшие заведения
                    и места рядом с комплексом
                </h1>
                <Image
                    src={Map}
                    alt='Map'
                    className='verifed__Image'
                />
            </div>
            <div className='Interested__container'>
                <h1>
                    Комплексы, которые могут вас заинтересовать
                </h1>
                <Tabs className={'Interested-tabs'} selectedTabPanelClassName={''}>
					<TabList className={'Interested-tabList text500 colorBlack'}>
						<Tab>Рядом</Tab>
						<Tab>По схожей цене</Tab>
						<Tab>С такими же программами доходности</Tab>
					</TabList>

					<TabPanel className={'Interested-tabs-container'}>
                    { data?.apartments.slice( 0, 3 ).map( ( item, index ) =>
                            
							<GoodsCard key={ index } url={ item.url } image={ item.image } logoImage={ item.logoImage }/>// #TODO подключить store и currency иначе не работает
						) }
					</TabPanel>
                    <TabPanel className={'Interested-tabs-container'}>
                    { data?.apartments.slice( 0, 3 ).map( ( item, index ) =>
                            
							<GoodsCard key={ index } url={ item.url } image={ item.image } logoImage={ item.logoImage }/>// #TODO подключить store и currency иначе не работает
						) }
					</TabPanel>
                    <TabPanel className={'Interested-tabs-container'}>
                    { data?.apartments.slice( 0, 3 ).map( ( item, index ) =>
                            <GoodsCard key={ index } url={ item.url } image={ item.image } logoImage={ item.logoImage }/>// #TODO подключить store и currency иначе не работает
						) }
					</TabPanel>
                    </Tabs>
                    <div className={' d-flex jc-center'}>
					<HoveredButton
						text={'Показать еще 115 предложений'}
						to={'/'}
						variant={'arrowRevert'}
						className={'manrope600-14 z-7'}
					/>
				</div>
            </div>
        </div>

    );
};

export default Verifed;
