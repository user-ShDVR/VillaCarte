"use client"
import React, { FC } from 'react';
import Masthead from '@/components/kiara-reserse/masthead';
import Uniqueness from '@/components/kiara-reserse/uniqueness';
import ExclusiveCollection from '@/components/kiara-reserse/exclusive-collection';
import InvestmentAttractivness from '@/components/kiara-reserse/investment-attractivness';
import PhotosOfTheComplex from '@/components/kiara-reserse/photo-complex';
import SendPresentationFrom from '@/components/kiara-reserse/send-presentation-from';
import BuildWay from '@/components/kiara-reserse/buildWay';
import Builder from '@/components/kiara-reserse/builder';
import Verifed from '@/components/kiara-reserse/verified';
import HelpYou from '@/components/kiara-reserse/help-you';
import Planer from '@/components/kiara-reserse/planer';
import Layout from '@/components/Layout/Layout';
import { useTranslations } from 'next-intl';

const KiaraReserve: FC = () => {
    const t = useTranslations('Page');

    return (
        <Layout headerColor={"#22364A"}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    background: '#EFEFF1',
                }}>
                <Masthead
                    IdealForInvest={t('idealForInvest')}
                    KiaraReverse={t('kiaraReverse')}
                    KRprice={t('kRprice')}
                    Place={t('place')}
                    EndDateBuild={t('endDateBuild')}
                    requestACall={t('requestACall')}
                    phoneNumber={t('phoneNumber')}
                    yourName={t('yourName')}
                    byClickingTheRequestACall={t('byClickingTheRequestACall')}
                />
                <Uniqueness
                    Uniq={t('uniq')}
                    Complex={t('complex')}
                    SeeOnTheSea={t('seeOnTheSea')}
                    ControlCompany={t('controlCompany')}
                    BigBuilder={t('bigBuilder')}
                    beachClub={t('beachClub')}
                />
                <ExclusiveCollection
                    exclusiveCollection={t('exclusiveCollection')}
                    residence={t('residence')}
                    ComplexWhere={t('complexWhere')}
                />
                <InvestmentAttractivness
                    Program={t('program')}
                    Rassrochka={t('rassrochka')}
                    Okupaemost={t('okupaemost')}
                    ControledCompany={t('controledCompany')}
                    garanted={t('garanted')}
                    year5={t('year5')}
                    managmentCompany={t('managmentCompany')}
                    rentalPool={t('rentalPool')}
                    managmentCompanyBuilder={t('managmentCompanyBuilder')}
                    Summary={t('summary')}
                    booking={t('booking')}
                    signing={t('signing')}
                    foundationReadiness={t('foundationReadiness')}
                    concreteStructure={t('concreteStructure')}
                    readlinesWall={t('readlinesWall')}
                    clearFloor={t('clearFloor')}
                    registration={t('registration')}
                    year10={t('year10')}
                    approximately={t('approximately')}
                    underManagement={t('underManagement')}
                    averageRating={t('averageRating')}
                />
                <PhotosOfTheComplex
                    complexPhoto={t('complexPhoto')}
                    interior={t('interior')}
                    exterior={t('exterior')}
                    infrastructure={t('infrastructure')}
                />
                <SendPresentationFrom
                    startEarning={t('startEarning')}
                    fillForm={t('fillForm')}
                    phoneNumber={t('phoneNumber')}
                    yourName={t('yourName')}
                    downloadText={t('downloadText')}
                    downloadButton={t('downloadButton')}
                />
                <Planer
                    studio={t('studio')}
                    one={t('one')}
                    two={t('two')}
                    threePlus={t('threePlus')}
                    penthouse={t('penthouse')}
                    duplex={t('duplex')}
                    areaTextHeader={t('areaTextHeader')}
                    square={t('square')}
                    bedrooms={t('bedrooms')}
                    bathroom={t('bathroom')}
                    view={t('view')}
                    price={t('price')}
                />
                <BuildWay
                    constructionProgress={t('constructionProgress')}
                    phase1={t('phase1')}
                    objectDelivery={t('objectDelivery')}
                    foundationConstruction={t('foundationConstruction')}
                    phase2={t('phase2')}
                    completionOfConstruction={t('completionOfConstruction')}
                    constructionStage={t('constructionStage')}
                    preparationForConstruction={t('preparationForConstruction')}
                />
                <Builder 
                    minorInternational={t('minorInternational')}
                    builder={t('builder')}
                    seeAllProjects={t('seeAllProjects')}
                    district={t('district')}
                    district1={t('district1')}
                    district2={t('district2')}
                    knowMore={t('knowMore')}
                />
                <Verifed 
                verifed={t('verifed')}
                interested={t('interested')}
                nearby={t('nearby')}
                similarPrice={t('similarPrice')}
                sameProfitability={t('sameProfitability')}
                showTheRest={t('showTheRest')}
                offers={t('offers')}
                seeVideoReview={t('seeVideoReview')}
                />
                <HelpYou 
                helpChoose={t('helpChoose')}
                signUp={t('signUp')}
                yourName={t('yourName')}
                phoneNumber={t('phoneNumber')}
                toggleButton={t('toggleButton')}
                subscribe={t('subscribe')}
                talk={t('talk')}
                />
            </div>
        </Layout>
    );
};

export default KiaraReserve;
