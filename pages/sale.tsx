import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import Head from 'next/head';

const Sale = () => {
	const [ style, setStyle ] = useState<any>( { overflow: 'hidden' } );

	useEffect( () => {
		setStyle( {} );
	}, [] );

	return (
		<Layout>
			<Head>
				<title>VillaCarte</title>
			</Head>

			<section className='pt-100-60 pos bgGradient' style={ style }>
				<div className={ 'container' }>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio eaque illum ipsa laboriosam
					maxime, nisi officiis quae quia quisquam recusandae saepe velit voluptate. Esse, necessitatibus, placeat? At,
					natus, possimus! Ad commodi doloremque ipsum, maiores maxime officiis recusandae repellat saepe totam
					veritatis
					voluptas voluptatum. Accusantium enim et expedita iure labore, natus neque nisi, numquam obcaecati perferendis
					praesentium, quae quam quibusdam recusandae rerum sed suscipit? Aperiam commodi cupiditate ducimus ea eum
					fugiat
					id ipsum magni maiores maxime, molestiae odio possimus qui tempore voluptatum. Aspernatur inventore nulla
					quasi
					qui quidem reprehenderit ullam voluptatum? Debitis deserunt dignissimos expedita iste pariatur quam! Quas
					repellat, repudiandae. Blanditiis earum eveniet fuga fugit minima possimus voluptates. Aspernatur, id.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio eaque illum ipsa laboriosam
					maxime, nisi officiis quae quia quisquam recusandae saepe velit voluptate. Esse, necessitatibus, placeat? At,
					natus, possimus! Ad commodi doloremque ipsum, maiores maxime officiis recusandae repellat saepe totam
					veritatis
					voluptas voluptatum. Accusantium enim et expedita iure labore, natus neque nisi, numquam obcaecati perferendis
					praesentium, quae quam quibusdam recusandae rerum sed suscipit? Aperiam commodi cupiditate ducimus ea eum
					fugiat
					id ipsum magni maiores maxime, molestiae odio possimus qui tempore voluptatum. Aspernatur inventore nulla
					quasi
					qui quidem reprehenderit ullam voluptatum? Debitis deserunt dignissimos expedita iste pariatur quam! Quas
					repellat, repudiandae. Blanditiis earum eveniet fuga fugit minima possimus voluptates. Aspernatur, id.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio eaque illum ipsa laboriosam
					maxime, nisi officiis quae quia quisquam recusandae saepe velit voluptate. Esse, necessitatibus, placeat? At,
					natus, possimus! Ad commodi doloremque ipsum, maiores maxime officiis recusandae repellat saepe totam
					veritatis
					voluptas voluptatum. Accusantium enim et expedita iure labore, natus neque nisi, numquam obcaecati perferendis
					praesentium, quae quam quibusdam recusandae rerum sed suscipit? Aperiam commodi cupiditate ducimus ea eum
					fugiat
					id ipsum magni maiores maxime, molestiae odio possimus qui tempore voluptatum. Aspernatur inventore nulla
					quasi
					qui quidem reprehenderit ullam voluptatum? Debitis deserunt dignissimos expedita iste pariatur quam! Quas
					repellat, repudiandae. Blanditiis earum eveniet fuga fugit minima possimus voluptates. Aspernatur, id.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio eaque illum ipsa laboriosam
					maxime, nisi officiis quae quia quisquam recusandae saepe velit voluptate. Esse, necessitatibus, placeat? At,
					natus, possimus! Ad commodi doloremque ipsum, maiores maxime officiis recusandae repellat saepe totam
					veritatis
					voluptas voluptatum. Accusantium enim et expedita iure labore, natus neque nisi, numquam obcaecati perferendis
					praesentium, quae quam quibusdam recusandae rerum sed suscipit? Aperiam commodi cupiditate ducimus ea eum
					fugiat
					id ipsum magni maiores maxime, molestiae odio possimus qui tempore voluptatum. Aspernatur inventore nulla
					quasi
					qui quidem reprehenderit ullam voluptatum? Debitis deserunt dignissimos expedita iste pariatur quam! Quas
					repellat, repudiandae. Blanditiis earum eveniet fuga fugit minima possimus voluptates. Aspernatur, id.
				</div>
			</section>
		</Layout>
	);
};

export default Sale;