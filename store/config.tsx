import NavSales from '@/components/Header/NavSales';
import NavService from '@/components/Header/NavService';

export const leftMenu = [
	// { text: 'Продажа', component: <NavSales/> },
	{ path: '/', text: 'Аренда' },
	{ text: 'Консьерж и сервис', component: <NavService/> },
	{ path: '/', text: 'Управление недвижимостью' },
	{ path: '/', text: 'О компании' },
	{ path: '/', text: 'О Пхукете' },
	{ path: '/', text: 'Новости' },
];
