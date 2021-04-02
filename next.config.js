const withImages = require('next-images')

module.exports = {
  ...withImages(),
  future: {
    webpack5: true,
  },
  // Target must be serverless (for use with netlify)
  target: "serverless",
};
