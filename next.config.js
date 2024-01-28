const { relay } = require('./package.json');
const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'mdx'],
    experimental: {
        forceSwcTransforms: true,
        mdxRs: true,
    },

    reactStrictMode: true,

    compiler: {
        relay,
    },
};

module.exports = withMDX(nextConfig);
