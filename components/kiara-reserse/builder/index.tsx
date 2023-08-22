import { FC } from 'react';
import Image from 'next/image';
import logo from '../../../public/kiara-reserve/minorlogo.png';
import BuilderBg from '../../../public/kiara-reserve/palmBgBuilder.png';

import HoveredButton from '@/components/common/Buttons/HoveredButton';
import GoodsCard from '@/components/common/Cards/GoodsCard/GoodsCard';
interface IProps {
    minorInternational: string;
    builder: string;
    seeAllProjects: string;
    district: string;
    district1: string;
district2: string;
knowMore: string;
}
const Builder: FC<IProps> = ({
    minorInternational,
    builder,
    seeAllProjects,
    district,
    district1,
    district2,
    knowMore,
}) => {
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
                        <h1>{builder}</h1>
                        <p>
                           {minorInternational} 
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
						text={seeAllProjects}
						to={'/'}
						variant={'arrow'}
						className={'manrope600-14 z-7'}
					/>
				</div>
                </div>
                <div className='District__container'>
                    <div className='District-content'>
                        <h1>{district}</h1>
                        <div className="District-text">
                        <p>{district1}</p>
                        <p>{district2}</p>
                        </div>
                    </div>
                    <div className={'mr-170 d-flex jc-right'}>
					<HoveredButton
						text={knowMore}
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
