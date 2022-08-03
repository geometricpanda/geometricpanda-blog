const dotenv = require('dotenv');
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: ['a.storyblok.com'],
    },
    experimental: {
        runtime: 'experimental-edge',
        images: {
            allowFutureImage: true
        }
    }
}

module.exports = nextConfig
