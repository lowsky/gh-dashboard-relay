const withImages = require('next-images')

module.exports = {
  ...withImages(),
  // Target must be serverless (for use with netlify)
  target: "serverless",
};
