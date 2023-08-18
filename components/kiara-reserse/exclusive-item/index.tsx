import { FC } from 'react';
import Image from 'next/image';
import Svg from '../../../public/kiara-reserve/item.svg';
import { IExclusiveItem } from '@/types/exclusive-item';

const ExclusiveItem: FC<IExclusiveItem> = ({firstName, secondName, icon}) => {
    return (
        <>
            <div className='exclusive-item'>
                <div className='exclusive-item__container'>
                    <div className='text'>
                        <span>{firstName}</span>
                        <span>{secondName}</span>
                    </div>
                    <Image
                        src={icon}
                        alt='svg'
                        width={96 / 2}
                        height={96 / 2}
                    />
                </div>
            </div>
        </>
    );
};

export default ExclusiveItem;
