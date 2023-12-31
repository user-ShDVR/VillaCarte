import { FC, useEffect, useState } from 'react';
import ExclusiveItem from '../exclusive-item';
import Image from 'next/image';
import icon1 from '../../../public/kiara-reserve/1.svg';
import icon2 from '../../../public/kiara-reserve/2.svg';
import icon3 from '../../../public/kiara-reserve/3.svg';
import icon4 from '../../../public/kiara-reserve/4.svg';
import icon5 from '../../../public/kiara-reserve/5.svg';
import icon6 from '../../../public/kiara-reserve/6.svg';
import icon7 from '../../../public/kiara-reserve/7.svg';
import icon8 from '../../../public/kiara-reserve/8.svg';
import icon9 from '../../../public/kiara-reserve/9.svg';
import icon10 from '../../../public/kiara-reserve/10.svg';
import line from '../../../public/kiara-reserve/line.svg';
import palms from '../../../public/kiara-reserve/palms.png';
interface IProps{
    exclusiveCollection: string;
    residence: string;
    ComplexWhere: string;
}
const ExclusiveCollection: FC<IProps> = ({
    exclusiveCollection,
    residence,
    ComplexWhere,
}) => {
    return (
        <>
            <div className='exclusive-collection'>
                <div className='exclusive-collection__container'>
                    <Image
                        className='palms'
                        src={palms}
                        alt='palms'
                        height={1200 / 2}
                        width={1200 / 2}
                    />
                    <div className='text'>
                        <h2>
                            {exclusiveCollection}
                        </h2>
                        <div className='paragraphs'>
                            <p>
                                {residence}
                            </p>
                            <p>
                                {ComplexWhere}
                            </p>
                        </div>
                    </div>
                        <div className='items'> 
                            <ExclusiveItem
                                firstName={'Ландшафт'}
                                secondName={'холм'}
                                icon={icon1}
                            />
                            <ExclusiveItem
                                firstName={'Тип владения'}
                                secondName={'freehold/leasehold'}
                                icon={icon2}
                            />
                            <ExclusiveItem
                                firstName={'Этажность'}
                                secondName={'2-4 этажа'}
                                icon={icon3}
                            />
                            <ExclusiveItem
                                firstName={'Вид'}
                                secondName={'на море, на город, на горы, на сад'}
                                icon={icon4}
                            />
                            <ExclusiveItem
                                firstName={'Пляж '}
                                secondName={'13 км до Банг Тао'}
                                icon={icon5}
                            />
                            <ExclusiveItem
                                firstName={null}
                                secondName={'Бассейн'}
                                icon={icon6}
                            />
                            <ExclusiveItem
                                firstName={null}
                                secondName={'Спортзал'}
                                icon={icon7}
                            />
                            <ExclusiveItem
                                firstName={null}
                                secondName={'Парковка '}
                                icon={icon8}
                            />
                            <ExclusiveItem
                                firstName={null}
                                secondName={'Охрана 24/7'}
                                icon={icon9}
                            />
                            <ExclusiveItem
                                firstName={null}
                                secondName={'Видеонаблюдение'}
                                icon={icon10}
                            />
                        </div>


                    <Image
                        className='line'
                        src={line}
                        alt='line'
                        width={10000 / 2}
                        height={2 / 1}
                    />
                </div>
            </div>
        </>
    );
};

export default ExclusiveCollection;
