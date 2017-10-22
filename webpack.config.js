// import path from 'path';
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV;

const webpack = require('webpack');

const pages = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
    }),
];

let entries = ['babel-polyfill', './src/index.js'];

module.exports = {
    // prettier-ignore
    entry:  ( ENV === 'production'
        ? [
            ...entries
        ]
        : [
            'react-hot-loader/patch',
      //      'webpack-dev-server/client?http://localhost:8080',
    //        'webpack/hot/only-dev-server',
            ...entries
        ]
    ),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    devtool: 'inline-source-map',
    // fix of https://reactjs.org/docs/cross-origin-errors.html
    //devtool: 'cheap-module-source-map',

    // prettier-ignore
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
        historyApiFallback: {
            disableDotRule: true,
        },
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: /node_modules/,
                // prettier-ignore
                loader: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.svg$/,
                // prettier-ignore
                use: [
                    'url-loader'
                ],
            },
            {
                test: /\.png$/,
                // prettier-ignore
                use: [
                    'url-loader'
                ],
            },
            {
                test: /\.jpg/,
                // prettier-ignore
                use: [
                    'url-loader'
                ],
            },
            {
                test: /\.js$/,
                // prettier-ignore
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
        ],
    },
};
