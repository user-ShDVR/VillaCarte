import { FC } from 'react';
import Image from 'next/image';
import Phase1 from '@/public/kiara-reserve/Phase1.png';
import Phase2 from '@/public/kiara-reserve/Phase2.png';
import MapBay from '@/public/kiara-reserve/MapBay.png';
import Slider from 'react-slick';
import { offersSliderSetting } from '@/components/common/SliderSettings/offersSliderSetting';
import { OfferNextArrow } from '@/components/common/Buttons/SliderArrows/OfferNextArrow';
import { OfferPrevArrow } from '@/components/common/Buttons/SliderArrows/OfferPrevArrow';
interface IProps {
    constructionProgress: string;
    phase1: string;
    objectDelivery: string;
    foundationConstruction: string;
    phase2: string;
    completionOfConstruction: string;
    constructionStage: string;
    preparationForConstruction: string;
}
const BuildWay: FC<IProps> = ({
    constructionProgress,
    phase1,
    objectDelivery,
    foundationConstruction,
    phase2,
    completionOfConstruction,
    constructionStage,
    preparationForConstruction,
}) => {
    const SliderSetting = {
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: false,
        speed: 1000,
        nextArrow: <OfferNextArrow />,
        prevArrow: <OfferPrevArrow />,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='buildWay'>
            <div className='BeforeBuildWay__container' style={{ width: '94vw', margin: '-26.6vw auto 0' }}>
                <Slider {...SliderSetting} className='BeforeBuildWaySlider' >
                    <Image
                        className='custom-slide'
                        src={MapBay}
                        alt='photo'
                    />
                    <Image
                        className='custom-slide'
                        src={MapBay}
                        alt='photo'
                    />
                </Slider>
            </div>

            <div className='buildWay__container'>
                <h1>{constructionProgress}</h1>
                <div className='buildWay_text'>
                    <div className="Phase">

                        <div className="phase-content">
                            <h1>
                                {phase1}
                            </h1>
                            <div className="EndDate">
                            <p>{completionOfConstruction}</p>
                                <p className='bold'>05.2022</p>
                            </div>
                            <div className="Stage">
                                <p>{constructionStage}</p>
                                <p className='bold'>{objectDelivery}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="phase-content">
                            <h1>
                                {phase2}
                            </h1>
                            <div className="EndDate">
                                <p>{completionOfConstruction}</p>
                                <p className='bold'>07.2024</p>
                            </div>
                            <div className="Stage">
                                <p>{constructionStage}</p>
                                <p className='bold'>{foundationConstruction}</p>
                            </div>
                        </div>
                        <hr />

                        <div className="phase-content">
                            <h1>
                                {phase2}
                            </h1>
                            <div className="EndDate">
                            <p>{completionOfConstruction}</p>
                                <p className='bold'>10.2025</p>
                            </div>
                            <div className="Stage">
                                <p>{constructionStage}</p>
                                <p className='bold'>{preparationForConstruction}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="buildWay_innerContainer">
                        <Slider className='offersSlider' {...offersSliderSetting} >
                            <div className="slide-inner-container">
                                <Image
                                    className='custom-slide'
                                    src={Phase1}
                                    alt='photo'
                                />
                                <p>
                                    01.2023
                                </p>

                            </div>

                            <div className="slide-inner-container">
                                <Image
                                    className='custom-slide'
                                    src={Phase2}
                                    alt='photo'
                                />
                                <p>
                                    02.2023
                                </p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BuildWay;
