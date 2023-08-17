import Masthead from '@/components/main/1-masthead';
import MoreThan10Years from '@/components/main/10-more-than-ten-years';
import ShareExclusiveContent from '@/components/main/11-share-exclusive-content';
import Services from '@/components/main/2-services';
import VideoSlider from '@/components/main/3-video-slider';
import BestProjects from '@/components/main/4-best-projects';
import OrderPersonal from '@/components/main/5-order-personal';
import BuildOurSelves from '@/components/main/6-build-ourselves';
import FiveSteps from '@/components/main/7-five-steps';
import JoinClub from '@/components/main/8-join-club';
import WeAreTrusted from '@/components/main/9-we-are-trusted';
import { useTranslations } from 'next-intl';
import NavbarMobile from '@/components/navbar/navbar-mobile';

export default function Home() {
    const t = useTranslations('Index');
    return (
        <>
            <div className='relative'>
                {/* <NavbarMobile
                    sale={t('sale')}
                    rent={t('rent')}
                    concierge={t('concierge')}
                    propertyManagement={t('propertyManagement')}
                    aboutTheCompany={t('aboutTheCompany')}
                    aboutPhuket={t('aboutPhuket')}
                    news={t('news')}
                    requestACall={t('requestACall')}
                /> */}
                <Masthead resortReal={t('resortReal')} />
                <Services
                    allServicesInOneCompany={t('allServicesInOneCompany')}
                    allServicesInOneCompany2={t('allServicesInOneCompany2')}
                    weHelpYouBuyProperty={t('weHelpYouBuyProperty')}
                    learnMore={t('learnMore')}
                    propertySale={t('propertySale')}
                    propertyForRent={t('propertyForRent')}
                    concierge={t('concierge')}
                    propertyManagement={t('propertyManagement')}
                    villasAndApartmentsForLife={t('villasAndApartmentsForLife')}
                    premiumAndLuxuryVillas={t('premiumAndLuxuryVillas')}
                    anyIssuesAreSolvedForYou={t('anyIssuesAreSolvedForYou')}
                    passiveIncomeWithoutWorries={t(
                        'passiveIncomeWithoutWorries'
                    )}
                />
                <div className='absolute left-0 right-0 ml-auto mr-auto'>
                    <VideoSlider />
                </div>
                <BestProjects
                    theBestProjectsForLife={t('theBestProjectsForLife')}
                    theBestProjectsForLife2={t('theBestProjectsForLife2')}
                    apartments={t('apartments')}
                    villas={t('villas')}
                />
                <OrderPersonal
                    ourManagerWillCallYou={t('ourManagerWillCallYou')}
                    orderAnIndividualSelection={t('orderAnIndividualSelection')}
                    yourName={t('yourName')}
                    phoneNumber={t('phoneNumber')}
                    byClickingTheRequestACall={t('byClickingTheRequestACall')}
                    requestASelection={t('requestASelection')}
                />
                <BuildOurSelves
                    weAlsoBuildOurselves={t('weAlsoBuildOurselves')}
                    weAlsoBuildOurselves2={t('weAlsoBuildOurselves2')}
                    buyRealEstateOnlyFromTrustedContractors={t(
                        'buyRealEstateOnlyFromTrustedContractors'
                    )}
                    getAProfitCalculation={t('getAProfitCalculation')}
                    willBeTheFirstToKnow={t('willBeTheFirstToKnow')}
                    remainConfidentAndCalm={t('remainConfidentAndCalm')}
                />
                <FiveSteps
                    fiveSteps={t('fiveSteps')}
                    fiveSteps2={t('fiveSteps2')}
                    weSelectTheRealEstatePersonally={t(
                        'weSelectTheRealEstatePersonally'
                    )}
                    weCalculateProfitability={t('weCalculateProfitability')}
                    weNegotiateWithTheDeveloper={t(
                        'weNegotiateWithTheDeveloper'
                    )}
                    weLegallyAccompanyTheTransaction={t(
                        'weLegallyAccompanyTheTransaction'
                    )}
                    weTakeCareOfYourPropertyManagement={t(
                        'weTakeCareOfYourPropertyManagement'
                    )}
                />
                <JoinClub
                    joinThePrivateVillaCarteClub={t(
                        'joinThePrivateVillaCarteClub'
                    )}
                    youBecomeAClubMember={t('youBecomeAClubMember')}
                    learnMoreSmall={t('learnMoreSmall')}
                />
                <WeAreTrusted
                    weAreTrustedBySuccessfulPeople={t(
                        'weAreTrustedBySuccessfulPeople'
                    )}
                    yensBrakerbush={t('yensBrakerbush')}
                    cEOofPPGIndustry={t('cEOofPPGIndustry')}
                    review1={t('review1')}
                    okishimaJunichi={t('okishimaJunichi')}
                    cEOYOKOHAMARUS={t('cEOYOKOHAMARUS')}
                    review2={t('review2')}
                />
                <div className='absolute left-0 right-0 bottom-[58vw] ml-auto mr-auto'>
                    <MoreThan10Years
                        weHaveBeenTakingCare={t('weHaveBeenTakingCare')}
                        inVillaCarteEveryDayWeWork={t(
                            'inVillaCarteEveryDayWeWork'
                        )}
                    />
                </div>
                <ShareExclusiveContent
                    sharingExclusiveContentFromTheIsland={t(
                        'sharingExclusiveContentFromTheIsland'
                    )}
                />
            </div>
        </>
    );
}
