// import path from 'path';
const path = require('path');
const {resolve} = require('path');

const ENV = process.env.NODE_ENV;

const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/restinpeace/main.js'
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    devtool: 'inline-source-map',

    plugins: ( ENV == 'production'
            ? [new webpack.optimize.UglifyJsPlugin({minimize: true})]
            : [new webpack.HotModuleReplacementPlugin()]
    ),
    devServer: {
        contentBase: './',
        hot: true
    },
    module: {
        rules: [
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
