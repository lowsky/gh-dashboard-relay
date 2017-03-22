// import path from 'path';
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV;

const webpack = require('webpack');

const pages = [
    new HtmlWebpackPlugin({
        filename: 'restful.html',
        template: 'restful.html'
    }),
    new HtmlWebpackPlugin({
        filename: 'relay.html',
        template: 'relay.html'
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html'
    }),
];

let entries = [
    './src/index/indexPage.js',
    './src/restinpeace/restful.js',
    './src/relay/main.js'
];

module.exports = {
    entry:  ( ENV === 'production'
            ? [
                ...entries
            ]
            : [
                'react-hot-loader/patch',
                'webpack-dev-server/client?http://localhost:8080',
                'webpack/hot/only-dev-server',
                ...entries
            ]
    ),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    devtool: 'inline-source-map',

    plugins: ( ENV === 'production'
            ? [
                ... pages,
                new webpack.optimize.UglifyJsPlugin({minimize: true})
            ]
            : [
                ...pages,
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NamedModulesPlugin()
            ]
    ),
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.adoc$/,
                use: [
                    'html-loader',
                    'asciidoctor-loader'
                ],
            },
            {
                test: /\.png$/,
                use: [
                    'url-loader'
                ],
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
        ],
    }
};
