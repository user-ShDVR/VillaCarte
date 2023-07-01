import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import TopBlock from '@/pages/Main/TopBlock';
import { useQuery } from 'react-query';
import { getMainPageInfo } from '@/store/mainPage';
import { IMainPage } from '@/types/mainPage';
import AllServices from '@/pages/Main/AllServices2';
import VideoBlock from '@/pages/Main/VideoBlock3/VideoBlock3';
import BestProjects from '@/pages/Main/BestProjects4';
import Image from 'next/image';
import scrollArrow from '@/public/icons/scrollArrow.svg';
// import 'animate.css';
import 'react-tabs/style/react-tabs.css';
import FeedBackBlock from '@/pages/Main/FeedBackBlock5';

export default function Home() {
	const [ style, setStyle ] = useState<any>( { overflow: 'hidden' } );
	// useWheelEvent();
	// useWindowSize();

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
			</section>
		</Layout>
	);
}

