const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/.netlify/functions/', {
            target: 'http://localhost:9000/',
            pathRewrite: {
                '^/\\.netlify/functions': '',
            },
        })
    );
    app.use(
        createProxyMiddleware('/story-book/', {
            target: 'http://localhost:9009/',
            pathRewrite: {
                '^/story-book/': '',
            },
        })
    );
};
