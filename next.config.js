/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['villacartetest.com'],
    },
};

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.ts'
);
const withVideos = require( 'next-videos' );

module.exports = withNextIntl(nextConfig);
module.exports = withVideos();
