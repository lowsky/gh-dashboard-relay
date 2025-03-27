import { NextConfig } from 'next';
import pack from './package.json' with { type: 'json' };
import nextMDX from '@next/mdx';

const withMDX = nextMDX();

const nextConfig: NextConfig = {
    pageExtensions: ['ts', 'tsx', 'mdx'],
    experimental: {
        // https://chakra-ui.com/docs/get-started/frameworks/next-app#optimize-bundle
        // This also helps to resolve warnings like:
        //
        // [webpack.cache.PackFileCacheStrategy] Serializing big strings (xxxkiB)
        optimizePackageImports: ['@chakra-ui/react'],
        forceSwcTransforms: true,
        mdxRs: true,
    },

    // until yarn next lint does not know how to use eslint9
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,

    compiler: {
        relay: pack.relay as {
            // + "schema": "./schema/schema.graphql"
            src: string;
            //artifactDirectory?: string;
            language: 'typescript';
            //eagerEsModules?: boolean;
        },
    },
};

export default withMDX(nextConfig);
