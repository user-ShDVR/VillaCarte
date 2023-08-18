import { FC } from 'react';
import Image from 'next/image';
import Map from '../../../public/kiara-reserve/map.png';

const Uniqueness: FC = () => {
    return (
        <>
            <div className='uniqueness'>
                <div className='uniqueness__container'>
                    <div className='map'>
                        <Image
                            src={Map}
                            alt='map'
                            width={442 / 2}
                            height={1304 / 2}
                        />
                    </div>
                    <div className='text'>
                        <h1>Уникальность<br/>комплекса</h1>
                        <ul>
                            <li>&#10022;&nbsp; &nbsp; &nbsp;  Вид на море и горы</li>
                            <li>&#10022;&nbsp; &nbsp; &nbsp;  Управляющая компания международного уровня</li>
                            <li>&#10022;&nbsp; &nbsp; &nbsp;  Крупный застройщик</li>
                            <li>&#10022;&nbsp; &nbsp; &nbsp;  Пляжный клуб и теннисный корт на территории комплекса</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Uniqueness;
