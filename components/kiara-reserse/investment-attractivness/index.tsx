import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Image from 'next/image';
import VideoKiera from '../video-kiera';
import photo from '@/public/kiara-reserve/minorlogo.png';



const InvestmentAttractivness = () => {

	return (
		<div className={'Invest'}>
			<div style={{ position: 'relative', margin: 'auto' }}>
				<VideoKiera />
			</div>
			<div className={'container Invest-inner'}>
				<h1 className='Invest-inner-header' >Инвестиционная<br />привлекательность</h1>


				<Tabs className={'Invest-tabs'} selectedTabPanelClassName={''}>
					<TabList className={'Invest-tabList text500 colorBlack'}>
						<Tab>Программа дохода</Tab>
						<Tab>Рассрочка</Tab>
						<Tab>Окупаемость</Tab>
						<Tab>Управляющая компания</Tab>
					</TabList>

					<TabPanel className={'Invest-tabs-container'}>
						<div>
							<h1>Гарантированный доход</h1>
							<span className="invest-percent">7%</span>
							<h2>годовых в течение 5 лет</h2>
							<p>
								Управляющая компания застройщика сдаёт ваши апартаменты в аренду,
								а вы получаете % от их стоимости при любых обстоятельствах.
								У вас появится надёжный источник пассивного дохода на несколько лет
							</p>
						</div>
						<div className="investLine">
						</div>
						<div>
							<h1>Rental Pool</h1>
							<span className="invest-percent">60/40%</span>
							<p>
								Управляющая компания застройщика объединяет похожие апартаменты
								в группы — пулы. А затем сдаёт их в аренду и начисляет вам % от общей прибыли — при этом неважно,
								сдавались именно ваши апартаменты или нет
							</p>
						</div>
					</TabPanel>

					<TabPanel className={'Invest-tabs-container2'}>
						<div>
							<h1>Стоимость разбивается на несколько частей. Размер платежа зависит от этапа:</h1>
							<table>
								<tbody>
									<tr>
										<td className='table-percent' >2%</td>
										<td>бронирование</td>
									</tr>
									<tr>
										<td className='table-percent'>28%</td>
										<td>подписание договора купли-продажи в течение 30 дней после бронирования</td>
									</tr>
									<tr>
										<td className='table-percent'>28%</td>
										<td>готовность фундамента</td>
									</tr>
									<tr>
										<td className='table-percent'>15%</td>
										<td>готовность бетонной конструкции</td>
									</tr>
									<tr>
										<td className='table-percent'>15%</td>
										<td>готовность стен и крыши</td>
									</tr>
									<tr>
										<td className='table-percent'>10%</td>
										<td>чистовая отделка пола, встроенная мебель и покраска, оконная и дверная рама</td>
									</tr>
									<tr>
										<td className='table-percent'>10%</td>
										<td>регистрация участка в земельном департаменте</td>
									</tr>
								</tbody>
							</table>
						</div>
					</TabPanel>

					<TabPanel className={'Invest-tabs-container3'}>
						<div>
							<span className="invest-percent">10 лет</span>
							<p>
								Примерно за это время ваши вложения могут окупиться. Это наш прогноз:
								мы рассчитали срок, ориентируясь на программы доходности от застройщика
								и свой 10-летний опыт работы на рынке недвижимости Таиланда
							</p>
						</div>
					</TabPanel>

					<TabPanel className={'Invest-tabs-container4'}>
						<div>
							<h1>Комплекс находится под управлением международной управляющей компании Minor Hotels.</h1>
							<p>
								Её средняя оценка на букинге — 9,3. 
								Компания управляет 550+ отелями в 55 странах. 
								Среди них — знаменитые проекты Anantara и Avani на Пхукете и Самуи. 
								Благодаря такой надёжной управляющей компании вы повысите стоимость и рентабельность апартаментов, если захотите сдать их в аренду или продать.
							</p>
						</div>
						<div style={{justifyContent: 'center', alignItems: 'center'}}>
							<Image
								className='logo'
								src={photo}
								alt='photo'
							/>
						</div>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default InvestmentAttractivness;