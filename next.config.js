const { relay } = require('./package.json');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        providerImportSource: '@mdx-js/react',
    },
});

module.exports = {
    reactStrictMode: true,

    swcMinify: true,
    compiler: {
        relay,
    },
    ...withMDX({
        // Error: Cannot find module 'ts-tiny-invariant'
        // netlify is working on it...
        webpack: (config, { isServer }) => {
            if (isServer) {
                // When working on webpack5 there was this runtime-error:
                // Module "ts-tiny-invariant" was not found. PR...
                config.externals.push('ts-tiny-invariant');
            }
            return config;
        },
        // Append the default value with md extensions
        pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    }),
};
