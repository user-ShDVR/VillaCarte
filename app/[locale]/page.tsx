"use client"
import Layout from '@/components/Layout/Layout';
import AllServices from '@/components/Main/AllServices2';
import BestProjects from '@/components/Main/BestProjects4';
import FeedBackBlock from '@/components/Main/FeedBackBlock5';
import JoinTheClub from '@/components/Main/JoinTheClub7';
import ShareContent from '@/components/Main/ShareContent10/ShareContent10';
import TopBlock from '@/components/Main/TopBlock';
import VideoBlock from '@/components/Main/VideoBlock3/VideoBlock3';
import WeAreTrusted from '@/components/Main/WeAreTrusted8/WeAreTrusted8';
import WeBuildOurselves from '@/components/Main/WeBuildOurselves6/WeBuildOurselves6';
import WeCare from '@/components/Main/WeCare9';
import scrollArrow from '@/public/icons/scrollArrow.svg';
import weBuildBg from '@/public/weBuildBg.webp';
import { getMainPageInfo } from '@/store/mainPage';
import { IMainPage } from '@/types/mainPage';
import { Footer } from 'antd/es/layout/layout';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';


export default function Home() {
	const [style, setStyle] = useState<any>({ overflow: 'hidden' });
	const t = useTranslations('Index');

	const handleClickScroll = () => {
		const element = document.getElementById('section-2');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
	const [info, setInfo] = useState<any>(null);

	// useEffect(() => {
	//     const fetchData = async () => {
	//         try {
	//             const res = await fetch(`${process.env.REACT_APP_URL}/api/pages/thailand/index?lang=RU`);
	//             const data = await res.json();
	//             setInfo(data);
	//         } catch (error) {
	//             console.error('Error fetching data:', error);
	//         }
	//     };

	//     fetchData();
	// }, []);
	const { isLoading, data: mainPageInfo } = useQuery<IMainPage>(
		['mainPageInfo'],
		getMainPageInfo
	);

	useEffect(() => {
		setStyle({});
	}, []);
	return (
		<>
			{isLoading ? (
				<div style={{ opacity: 0 }}>Loading... </div>
			) : (
				<Layout headerColor={"#FFFFFF"}>
					<Head>
						<title>{mainPageInfo?.meta?.title}</title>
						<meta
							property="og:title"
							content={mainPageInfo?.meta?.title}
						/>
						<meta
							property="og:description"
							content={mainPageInfo?.meta?.description}
						/>
						<meta
							property="og:keywords"
							content={mainPageInfo?.meta?.keywords}
						/>
						<meta property="og:image" content={'https://villacartetest.com/'} />
					</Head>

					<section className="pt-100-60 pos" style={style} id="hero-section">
						<div className={'pos'}>
							<TopBlock resortReal={t('resortReal')} />

							<button
								className="btn-scroll"
								onClick={handleClickScroll}>
								<Image src={scrollArrow} alt={'scroll'} />
							</button>
						</div>

						<div id="section-2">
							<AllServices
								propertySale={t('propertySale')}
								villasAndApartmentsForLife={t('villasAndApartmentsForLife')}
								propertyForRent={t('propertyForRent')}
								premiumAndLuxuryVillas={t('premiumAndLuxuryVillas')}
								concierge={t('concierge')}
								anyIssuesAreSolvedForYou={t('anyIssuesAreSolvedForYou')}
								propertyManagement={t('propertyManagement')}
								passiveIncomeWithoutWorries={t('passiveIncomeWithoutWorries')}
								allServicesInOneCompany={t('allServicesInOneCompany')}
								allServicesInOneCompany2={t('allServicesInOneCompany2')}
								weHelpYouBuyProperty={t('weHelpYouBuyProperty')}
								learnMore={t('learnMore')}
							/>
						</div>

						<VideoBlock />

						<BestProjects
							theBestProjectsForLife={t('theBestProjectsForLife')}
							theBestProjectsForLife2={t('theBestProjectsForLife2')}
							apartments={t('apartments')}
							villas={t('villas')}
							showTheRest={t('showTheRest')}
							offers={t('offers')}
							data={mainPageInfo?.data}
						/>

						<FeedBackBlock
							orderAPersonalSelection={t('orderAPersonalSelection')}
							orderAPersonalSelection2={t('orderAPersonalSelection2')}
							ourManagerWillCallYou={t('ourManagerWillCallYou')}
							contactUsThroughOurMessengers={t('contactUsThroughOurMessengers')}
						/>

						<div className={'pos overflow-hidden'}>
							<div style={{ backgroundImage: `url(${weBuildBg.src})`, }} className={'palmsTransparent-bg'} />

							<WeBuildOurselves
								buyRealEstateOnlyFromTrustedContractors={t('buyRealEstateOnlyFromTrustedContractors')}
								getAProfitCalculation={t('getAProfitCalculation')}
								willBeTheFirstToKnow={t('willBeTheFirstToKnow')}
								remainConfidentAndCalm={t('remainConfidentAndCalm')}
								weAlsoBuildOurselves={t('weAlsoBuildOurselves')}
								weAlsoBuildOurselves2={t('weAlsoBuildOurselves2')}
								fiveSteps={t('fiveSteps')}
								fiveSteps2={t('fiveSteps2')}
								weSelectTheRealEstatePersonally={t('weSelectTheRealEstatePersonally')}
								weCalculateProfitability={t('weCalculateProfitability')}
								weNegotiateWithTheDeveloper={t('weNegotiateWithTheDeveloper')}
								weLegallyAccompanyTheTransaction={t('weLegallyAccompanyTheTransaction')}
								weTakeCareOfYourPropertyManagement={t('weTakeCareOfYourPropertyManagement')}
								data={mainPageInfo?.data}
							/>

							<JoinTheClub
								joinThePrivateVillaCarteClub={t('joinThePrivateVillaCarteClub')}
								youBecomeAClubMember={t('youBecomeAClubMember')}
								learnMoreSmall={t('learnMoreSmall')}
							/>

							<WeAreTrusted
								weAreTrustedBySuccessfulPeople={t('weAreTrustedBySuccessfulPeople')}
								yensBrakerbush={t('yensBrakerbush')}
								cEOofPPGIndustry={t('cEOofPPGIndustry')}
								review1={t('review1')}
								okishimaJunichi={t('okishimaJunichi')}
								cEOYOKOHAMARUS={t('cEOYOKOHAMARUS')}
								review2={t('review2')}
							/>

							<WeCare
								inVillaCarteEveryDayWeWork={t('inVillaCarteEveryDayWeWork')}
								weHaveBeenTakingCare={t('weHaveBeenTakingCare')}
							/>
						</div>

						<ShareContent
							sharingExclusiveContentFromTheIsland={t('sharingExclusiveContentFromTheIsland')}
							watchExpertReviews={t('watchExpertReviews')}
							learnAllAboutRealEstateInThailand={t('learnAllAboutRealEstateInThailand')}
						/>
					</section>
				</Layout>
			)}
		</>
	);
}
