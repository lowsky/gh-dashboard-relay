module.exports = {
  // Error: Cannot find module 'ts-tiny-invariant'
  // netlify is working on it...
  webpack: (config, { isServer } ) => {
    if (isServer) {
      // When working on webpack5 there was this runtime-error:
      // Module "ts-tiny-invariant" was not found. PR...
      config.externals.push('ts-tiny-invariant')
    }
    return config
  },
  typescript: {
    /* workaround for non-matching type definitions when
       mixing apollo 2/3 ...
     */
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // Target must be serverless (for use with netlify)
  target: "serverless",
};
