const dotenv = require('dotenv');
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['a.storyblok.com'],
    },
    experimental: {
        images: {
            allowFutureImage: true
        }
    }
}

module.exports = nextConfig
