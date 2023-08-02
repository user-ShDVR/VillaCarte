import Head from 'next/head';
import Header from '../Header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactNode } from 'react';
import Preloader from '@/components/common/Preloader/Preloader';

interface IProps {
	children: ReactNode;
}

export default function Layout( { children }: IProps ) {

	return (
		<div className='layout'>
			<Head>
				<link rel="icon" href="/favicon33.ico"/>
			</Head>

			<Header/>

			<main>{ children }</main>

			<Preloader/>

		</div>
	);
}
