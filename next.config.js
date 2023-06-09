const { relay } = require('./package.json');
const withMDX = require('@next/mdx')({
    experimental: {
        mdxRs: true,
    },
    extension: /\.mdx?$/,
    options: {
        providerImportSource: '@mdx-js/react',
    },
});

module.exports = {
    reactStrictMode: true,

    compiler: {
        relay,
    },
    ...withMDX({
        pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    }),
};
