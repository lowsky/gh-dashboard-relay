// import path from 'path';
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV;

const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/restinpeace/restful.js',
        './src/relay/main.js'
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    devtool: 'inline-source-map',

    plugins: ( ENV == 'production'
            ? [new webpack.optimize.UglifyJsPlugin({minimize: true})]
            : [
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
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
        ],
    }
};
