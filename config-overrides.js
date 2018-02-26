/* config-overrides.js */

const { injectBabelPlugin } = require('react-app-rewired');

/* config-overrides.js */
module.exports = function override(config /*env*/) {
    // add a plugin
    config = injectBabelPlugin('relay', config);

    return config;
};
