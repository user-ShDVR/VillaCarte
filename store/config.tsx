import MobileNavService from '@/components/Header/MobileNav/MobileNavService';

export const leftMenu = [
	// { text: 'Продажа', component: <MobileNavSales/> },
	{ path: '/', text: 'Аренда' },
	{ text: 'Консьерж и сервис', component: <MobileNavService/> },
	{ path: '/', text: 'Управление недвижимостью' },
	{ path: '/', text: 'О компании' },
	{ path: '/', text: 'О Пхукете' },
	{ path: '/', text: 'Новости' },
];
