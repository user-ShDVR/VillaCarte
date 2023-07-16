import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getMainPageInfo } from '@/store/mainPage';
import { IMainPage } from '@/types/mainPage';
import Image from 'next/image';
import scrollArrow from '@/public/icons/scrollArrow.svg';
// import 'animate.css';
import 'react-tabs/style/react-tabs.css';
import palmsTransparent from '@/public/palmsTransparent.png';
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

async function getStaticProps() {
	// @ts-ignore
	const res = await fetch( `${ process.env.REACT_APP_URL }api/pages/thailand/index?lang=RU` );
	const info = await res.json();

	return {
		props: { info },
		revalidate: 60,
	};
}

export default function Home( { info }: any ) {

	const [ style, setStyle ] = useState<any>( { overflow: 'hidden' } );
	// useWheelEvent();
	// useWindowSize();
	console.log( 'info', info );

	const handleClickScroll = () => {
		const element = document.getElementById( 'section-2' );
		if ( element ) {
			element.scrollIntoView( { behavior: 'smooth' } );
		}
	};

	const {
		isLoading,
		data: mainPageInfo
	} = useQuery<IMainPage>( [ 'mainPageInfo' ], getMainPageInfo );

	useEffect( () => {
		setStyle( {} );
	}, [] );

	return (
		<Layout>
			<Head>
				<title>VillaCarte</title>
			</Head>

			<section className='pt-100-60 pos' style={ style } id="hero-section">

				<div className={ 'pos' }>
					<TopBlock/>

					<button className="btn-scroll" onClick={ handleClickScroll }>
						<Image src={ scrollArrow } alt={ 'scroll' }/>
					</button>
				</div>

				<div id="section-2">
					<AllServices/>
				</div>

				<VideoBlock/>

				<BestProjects/>

				<FeedBackBlock/>

				<div className={ 'bgGradient pos' }>
					<WeBuildOurselves/>

					<div style={ { backgroundImage: `url(${ palmsTransparent.src })` } } className={ 'palmsTransparent-bg' }/>

					<JoinTheClub/>

					<WeAreTrusted/>
				</div>

				<WeCare/>

				<ShareContent/>

				<Footer/>
			</section>
		</Layout>
	);
}

