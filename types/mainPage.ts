export interface IMainPage {
	meta: IMeta;
	data: {
		villas: IGoods[];
		apartments: IGoods[];
		offersNumber: number;
		layanGreenParkPrice: ICurrencies;
		laVistaVillasPrice: ICurrencies;
		layanVerdePrice: ICurrencies;
		youTubeVideos: ISocialsMediaResources[];
		instagramPosts: ISocialsMediaResources[];
	} | null;
}

export interface IMeta {
	title: string;
	description: string;
	keywords: string;
}

export interface IGoods {
	image: string;
	logoImage: string;
	url: string;
}

export interface ICurrencies {
	// usd: number;
	// thb: number;
	// rub: number;
	value: string;
	label: string;
}

export interface ISocialsMediaResources {
	image: string
	publicationId: string
}