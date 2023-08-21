import { FC } from 'react';
import Image from 'next/image';
import logo from '../../../public/kiara-reserve/minorlogo.png';
import BuilderBg from '../../../public/kiara-reserve/palmBgBuilder.png';

import HoveredButton from '@/components/common/Buttons/HoveredButton';
import GoodsCard from '@/components/common/Cards/GoodsCard/GoodsCard';

const Builder: FC = () => {
    const data = { apartments:
        [{'image':'store/th/sale/5554/uRhJoaPS-sq','logoImage':'store/th/sale/5554/3yKPkNBg','type':{'en':'Apartments','ru':'Апартаменты'},'locationName':{'en':'Bang Tao','ru':'Банг Тао'},'price':{'usd':100000,'thb':3507000,'rub':10000000},'url':'sale/thailand/kiara'},
        {'image':'store/th/sale/5561/8hfbvbDR-sq','logoImage':'store/th/sale/5553/v2aFgIPt','type':{'en':'Apartments','ru':'Апартаменты'},'locationName':{'en':'Bang Tao','ru':'Банг Тао'},'price':{'usd':100000,'thb':3507000,'rub':10000000},'url':'sale/thailand/banyan-tree-grand-residences'},
        {'image':'store/th/sale/5552/YONSyRDP-sq','logoImage':'store/th/sale/5552/ElQEgvCD','type':{'en':'Apartments','ru':'Апартаменты'},'locationName':{'en':'Bang Tao','ru':'Банг Тао'},'price':{'usd':100000,'thb':3507000,'rub':10000000},'url':'sale/thailand/andara'}
    ]}

    return (
        <>
            <div className='Builder'>
                <Image src={BuilderBg} alt='bg' className={'Builder-bg'} />
                <div className='Builder__container'>
                    <div className='text'>
                        <h1>Застройщик</h1>
                        <p>
                            Minor International — одна из крупнейших строительных компаний в Азиатско-Тихоокеанском регионе. 
                            С 1978 застройщик создал более 530 отелей и курортов, 2540 ресторанов и 282 точки розничной торговли в 63 странах и регионах. 
                            Самые знаменитые проекты на Пхукете и Самуи — Anantara и Avani.
                        </p>
                        <Image 
                            src={logo}
                            alt='logo'
                            className='Builder-logo'
                        />
                    </div>
                    <div className="items__Builder">
                    { data?.apartments.slice( 0, 3 ).map( ( item, index ) =>
                            <GoodsCard key={ index } url={ item.url } image={ item.image } logoImage={ item.logoImage }/>// #TODO подключить store и currency иначе не работает
						) }
                    </div>

                    <div className={'d-flex jc-center'}>
					<HoveredButton
						text={'Показать все проекты застройщика'}
						to={'/'}
						variant={'arrow'}
						className={'manrope600-14 z-7'}
					/>
				</div>
                </div>
                <div className='District__container'>
                    <div className='District-content'>
                        <h1>Район Банг Тао</h1>
                        <div className="District-text">
                        <p>
                            Банг Тао — самый развивающийся и популярный район Пхукета. 
                            К нему относят престижный район Лагуна с собственной инфраструктурой, гольф-поля и озёрами. А на северо-западе 
                            к Банг Тао примыкает пляж Лаян, практически нетронутый туристами. Здесь вы сможете расслабиться в тени казуариновых деревьев под звук морского прибоя.
                        </p>
                        <p>
                            Район постоянно развивается: курортные зоны застраиваются новыми элитными комплексами. Поэтому в Банг Тао не только выгодно сдавать апартаменты и резиденции в аренду, 
                            но и комфортно жить в них — рядом с национальными парками, пляжами, развлекательными центрами, ресторанами и другими зонами отдыха.
                        </p>
                        </div>
                    </div>
                    <div className={'mr-170 d-flex jc-right'}>
					<HoveredButton
						text={'Узнать больше о районах'}
						to={'/'}
						variant={'arrow'}
						className={'manrope600-14 z-7'}
					/>
				</div>
                </div>
            </div>
        </>
    );
};

export default Builder;
