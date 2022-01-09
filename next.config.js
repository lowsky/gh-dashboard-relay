module.exports = {
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
};
