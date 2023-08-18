/** @type {import('next').NextConfig} */
// const nextConfig = {};
const withVideos = require( 'next-videos' );

module.exports = {
	i18n: {
		defaultLocale: 'en',
		locales: [ 'en', 'ru' ],
		domains: [
			{
				domain: process.env.NEXT_PUBLIC_APP_URL,
				defaultLocale: 'en',
			},
			{
				domain: `${ process.env.NEXT_PUBLIC_APP_URL }/ru`,
				defaultLocale: 'ru',
			},
		],
	},
};

module.exports = withVideos();
// module.exports = nextConfig;

// const withImages = require( 'next-images' );
// module.exports = withImages( {
// 	images: {
// 		formats: [ 'webp, png, jpg, jpeg, svg' ],
// 	},
// } );
// const withVideos = require( 'next-videos' );
//
//
// module.exports = withImages( withVideos() );
