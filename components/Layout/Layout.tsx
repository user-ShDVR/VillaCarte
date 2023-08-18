import Head from 'next/head';
import Header from '../Header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

export default function Layout( { children }: IProps ) {
	return (
		<div className="layout">
			<div className="cover-noize"/>
			<Head>
				<link rel="icon" href="/favicon33.ico"/>
			</Head>

			<Header/>

			<main>{ children }</main>

		</div>
	);
}
