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
	ownProjects: IOwnProjects[],
	youTubeVideos: ISocialsMediaResources[];
	instagramPosts: ISocialsMediaResources[];
}

export interface IGoods {
	image: string;
	logoImage: string;
	url: string;
}

export interface IOwnProjects {
	name: string;
	type: IEnRu;
	location: IEnRu;
	description: IEnRu;
	url: string,
	image: string,
	price: {
		usd: number;
		thb: number;
		rub: number;
	}
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

export interface IEnRu {
	en: string;
	ru: string;
}
