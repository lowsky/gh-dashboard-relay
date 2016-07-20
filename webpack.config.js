const ENV = process.env.NODE_ENV;

const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'dist/bundle.js'
    },
    resolve: {
        extensions: ['', '.html', '.js', '.json', '.scss', '.css']
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
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
