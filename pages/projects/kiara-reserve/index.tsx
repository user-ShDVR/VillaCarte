import React, { FC } from 'react';
import Header from '@/components/Header/Header';
import Masthead from '@/components/kiara-reserse/masthead';
import Uniqueness from '@/components/kiara-reserse/uniqueness';
import ExclusiveCollection from '@/components/kiara-reserse/exclusive-collection';
import InvestmentAttractivness from '@/components/kiara-reserse/investment-attractivness';
import PhotosOfTheComplex from '@/components/kiara-reserse/photo-complex';
import SendPresentationFrom from '@/components/kiara-reserse/send-presentation-from';
import BuildWay from '@/components/kiara-reserse/buildWay';
import Builder from '@/components/kiara-reserse/builder';
import Verifed from '@/components/kiara-reserse/verified';

const KiaraReserve: FC = () => {
    return (
        <>
            {/* <Header/> */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    background: '#EFEFF1',
                }}>
                <Masthead />
                <Uniqueness />
                <ExclusiveCollection />
                <InvestmentAttractivness />
                <PhotosOfTheComplex/>
                <SendPresentationFrom/>
                <BuildWay/>
                <Builder />
                <Verifed />
            </div>
        </>
    );
};

export default KiaraReserve;
