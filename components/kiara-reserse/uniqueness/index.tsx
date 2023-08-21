import { FC } from 'react';
import Image from 'next/image';
import Map from '../../../public/kiara-reserve/map.webp';
interface IProps {
    Complex: string;
    Uniq: string;
    SeeOnTheSea: string;
    ControlCompany: string;
    BigBuilder: string;
    beachClub: string;
}
const Uniqueness: FC<IProps> = ({
    Uniq,
    Complex,
    SeeOnTheSea,
    ControlCompany,
    BigBuilder,
    beachClub,
}) => {
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
                        <h1>{Uniq}<br />{Complex}</h1>
                        <ul>
                            <li>&#10022;&nbsp; &nbsp; &nbsp; {SeeOnTheSea}</li>
                            <li>&#10022;&nbsp; &nbsp; &nbsp;  {ControlCompany}</li>
                            <li>&#10022;&nbsp; &nbsp; &nbsp;  {BigBuilder}</li>
                            <li>&#10022;&nbsp; &nbsp; &nbsp; {beachClub} </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Uniqueness;
