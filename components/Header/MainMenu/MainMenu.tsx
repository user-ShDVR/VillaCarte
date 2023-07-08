import React from 'react';
import { useStore } from 'effector-react';
import {
	$mainDropMenuVisibleSales,
	$mainDropMenuVisibleServices,
	showMainDropMenuSales,
	showMainDropMenuServices
} from '@/store/mainMenu';
import NavService from '@/components/Header/MainMenu/NavService';
import NavSales from '@/components/Header/MainMenu/NavSales';
import CustomMenuItem from '@/components/Header/CustomMenuItem';
import Image from 'next/image';
import LanguageSelect from '@/components/common/Selects/LanguageSelect';
import CurrencySelect from '@/components/common/Selects/CurrencySelect';
import upSmall from '@/public/icons/upSmall.svg';
import downSmall from '@/public/icons/downSmall.svg';

interface IProps {
	dropBgStyle: any;
}

const MainMenu = ( { dropBgStyle }: IProps ) => {
	const mainDropMenuSales = useStore( $mainDropMenuVisibleSales );
	const mainDropMenuServices = useStore( $mainDropMenuVisibleServices );

	const onMouseOverSales = () => {
		showMainDropMenuSales( true );
		showMainDropMenuServices( false );
	};
	const onMouseLeaveSales = () => {
		showMainDropMenuSales( false );
	};

	const onMouseOverServices = () => {
		showMainDropMenuServices( true );
		showMainDropMenuSales( false );
	};
	const onMouseLeaveServices = () => {
		showMainDropMenuServices( false );
	};

	return (
		<div className={ 'meinMenu-wrapper' }>
			<nav>
				<div className={ 'nav-item pos' } onMouseOver={ onMouseOverSales }>
					<p>Продажа</p>
					{ mainDropMenuSales
						? <Image src={ upSmall } alt={ '' }/>
						: <Image src={ downSmall } alt={ '' }/>
					}
					{ mainDropMenuSales &&
						<NavSales
							dropBgStyle={ dropBgStyle }
							onMouseOverSales={ onMouseOverSales }
							onMouseLeaveSales={ onMouseLeaveSales }
						/>
					}
				</div>

				<CustomMenuItem
					text={ 'Аренда' }
					className={ 'nav-item' }
					path={ '/' }
				/>

				<div className={ 'nav-item pos' } onMouseOver={ onMouseOverServices }>
					<p>Консьерж и сервис</p>
					{ mainDropMenuServices
						? <Image src={ upSmall } alt={ '' }/>
						: <Image src={ downSmall } alt={ '' }/>
					}
					{ mainDropMenuServices &&
						<NavService
							dropBgStyle={ dropBgStyle }
							onMouseOverServices={ onMouseOverServices }
							onMouseLeaveServices={ onMouseLeaveServices }
						/>
					}
				</div>

				<CustomMenuItem
					text={ 'Управление недвижимостью' }
					className={ 'nav-item' }
					path={ '/' }
				/>
				<CustomMenuItem
					text={ 'О компании' }
					className={ 'nav-item' }
					path={ '/' }
				/>
				<CustomMenuItem
					text={ 'О Пхукете' }
					className={ 'nav-item' }
					path={ '/' }
				/>
				<CustomMenuItem
					text={ 'Новости' }
					className={ 'nav-item' }
					path={ '/' }
				/>
			</nav>

			<LanguageSelect className={ 'mr-10 ml-10 colorWhite fz-12-14' }/>
			<CurrencySelect className={ 'mr-20 ml-10 colorWhite fz-12-14' }/>
		</div>
	);
};

export default MainMenu;