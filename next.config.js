/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/car_store',
    output: 'export',
    images: {
        domains: ['cdn.imagin.studio']
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig