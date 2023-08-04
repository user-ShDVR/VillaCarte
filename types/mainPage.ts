export interface IMainPage {
	meta: IMeta;
	data: IMainPageData;
}

export interface IMeta {
	title: string;
	description: string;
	keywords: string;
}

export interface IMainPageData {
	villas: IGoods[];
	apartments: IGoods[];
	offersNumber: number;
	layanGreenParkPrice: ICurrencies;
	laVistaVillasPrice: ICurrencies;
	layanVerdePrice: ICurrencies;
	youTubeVideos: ISocialsMediaResources[];
	instagramPosts: ISocialsMediaResources[];
}

export interface IGoods {
	image: string;
	logoImage: string;
	url: string;
}

export interface ICurrencies extends IValueLabel {
}

export interface ILanguages extends IValueLabel {
}

export interface IValueLabel {
	value: string;
	label: string;
}

export interface ISocialsMediaResources {
	image: string
	publicationId: string
}