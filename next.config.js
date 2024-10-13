import { relay } from './package.json';
import nextMDX from '@next/mdx';
const withMDX = nextMDX();

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

export default withMDX(nextConfig);
