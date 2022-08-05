/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: '/blog',
                destination: '/blog/page/1',
            },
        ]
    },
    async redirects() {
        return [
            {
                source: '/blog/page/1',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/blog/page',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/blog/page/0',
                destination: '/blog',
                permanent: true,
            },
        ]
    },
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: ['a.storyblok.com'],
    },
    experimental: {
        runtime: 'nodejs',
        // serverComponents: true,
        images: {
            allowFutureImage: true,
        }
    },
}

module.exports = nextConfig
