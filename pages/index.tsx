import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getMainPageInfo } from '@/store/mainPage';
import { IMainPage } from '@/types/mainPage';
import Image from 'next/image';
import metaImage from '@/public/metaImageTest.png';
import scrollArrow from '@/public/icons/scrollArrow.svg';
import 'react-tabs/style/react-tabs.css';
import weBuildBg from '@/public/weBuildBg.webp';
import TopBlock from '@/components/Main/TopBlock';
import AllServices from '@/components/Main/AllServices2';
import BestProjects from '@/components/Main/BestProjects4';
import JoinTheClub from '@/components/Main/JoinTheClub7';
import VideoBlock from '@/components/Main/VideoBlock3/VideoBlock3';
import FeedBackBlock from '@/components/Main/FeedBackBlock5';
import WeAreTrusted from '@/components/Main/WeAreTrusted8/WeAreTrusted8';
import WeCare from '@/components/Main/WeCare9';
import WeBuildOurselves from '@/components/Main/WeBuildOurselves6/WeBuildOurselves6';
import ShareContent from '@/components/Main/ShareContent10/ShareContent10';
import Footer from '@/components/Main/Footer/Footer';
import { enLocalization, ruLocalization } from '@/static/localization';
import { useStore } from 'effector-react';
import { $languages } from '@/store/languages';
import Spinner from '@/components/common/Spinner/Spinner';

async function getStaticProps() {
	// @ts-ignore
	const res = await fetch(
		`${ process.env.REACT_APP_URL }api/pages/thailand/index?lang=RU`
	);
	const info = await res.json();

	return {
		props: { info },
		revalidate: 60,
	};
}

export let lang: any;

export default function Home( { info }: any ) {
	const languages = useStore( $languages );
	switch ( languages.value ) {
		case 'en':
			lang = enLocalization;
			break;
		case 'ru':
			lang = ruLocalization;
			break;
	}

	const [ style, setStyle ] = useState<any>( { overflow: 'hidden' } );
	// useWheelEvent();
	// useWindowSize();

	const handleClickScroll = () => {
		const element = document.getElementById( 'section-2' );
		if ( element ) {
			element.scrollIntoView( { behavior: 'smooth' } );
		}
	};

	const { isLoading, data: mainPageInfo } = useQuery<IMainPage>(
		[ 'mainPageInfo' ],
		getMainPageInfo
	);

	useEffect( () => {
		setStyle( {} );
	}, [] );

	return (
		<>
			{ isLoading ? (
				<>
					<Spinner/>
				</>
			) : (
				<Layout>
					<Head>
						<meta
							property="og:title"
							content={ mainPageInfo?.meta.title }
						/>
						<meta
							property="og:description"
							content={ mainPageInfo?.meta.description }
						/>
						<meta
							property="og:keywords"
							content={ mainPageInfo?.meta.keywords }
						/>
						<meta property="og:image" content={ metaImage.src }/>
					</Head>

					<section
						className="pt-100-60 pos"
						style={ style }
						id="hero-section">
						<div className={ 'pos' }>
							<TopBlock/>

							<button
								className="btn-scroll"
								onClick={ handleClickScroll }>
								<Image src={ scrollArrow } alt={ 'scroll' }/>
							</button>
						</div>

						<div id="section-2">
							<AllServices/>
						</div>

						<VideoBlock/>

						<BestProjects/>

						<FeedBackBlock/>

						<div className={ 'pos overflow-hidden' }>
							<div style={ { backgroundImage: `url(${ weBuildBg.src })`, } } className={ 'palmsTransparent-bg' }/>

							<WeBuildOurselves/>

							<JoinTheClub/>

							<WeAreTrusted/>

							<WeCare/>
						</div>

						<ShareContent/>

						<Footer/>
					</section>
				</Layout>
			) }
		</>
	);
}
