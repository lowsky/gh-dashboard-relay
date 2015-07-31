module.exports = {
    entry: './main.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'jsx-loader'}
        ]
    }
};
