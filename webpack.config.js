// import path from 'path';
const path = require('path');

const ENV = process.env.NODE_ENV;

const webpack = require('webpack');

module.exports = {
    entry: {
        relay: './src/relay/main.js',
        restful: './src/restinpeace/main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        modules: [
            path.join(__dirname, "."),
            "node_modules"
        ],
        extensions: ['.html', '.js', '.json', '.scss', '.css']
    },
    plugins: ( ENV == 'production'
            ? [new webpack.optimize.UglifyJsPlugin({minimize: true})]
            : [new webpack.HotModuleReplacementPlugin()]
    ),
    devServer: {
        contentBase: './',
        hot: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
