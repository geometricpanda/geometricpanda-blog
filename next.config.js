/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
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
        serverComponents: true,
        images: {
            allowFutureImage: true,
        }
    },
}

module.exports = nextConfig
