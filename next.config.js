const { relay } = require('./package.json');
const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'mdx'],
    experimental: {
        forceSwcTransforms: true,
        mdxRs: true,
    },

    // until yarn next lint does not know
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,

    compiler: {
        relay,
    },
};

module.exports = withMDX(nextConfig);
