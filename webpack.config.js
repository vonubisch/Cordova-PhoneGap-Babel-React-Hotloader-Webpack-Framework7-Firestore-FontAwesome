const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const ENV = require('./env');
const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'www'),
    framework7: path.join(__dirname, 'node_modules/framework7'),
    fa: path.join(__dirname, 'node_modules/font-awesome')
};

process.env.BABEL_ENV = ENV;

const common = {
    entry: PATHS.src,
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: [
                    'style-loader', 'css-loader?url=false'
                ],
                include: PATHS.src
            }, {
                test: /\.css$/,
                loaders: [
                    'style-loader', 'css-loader?url=false'
                ],
                include: PATHS.framework7
            }, {
                test: /\.jsx?$/,
                loader: 'babel-loader?cacheDirectory',
                include: PATHS.src
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff",
                include: PATHS.fa
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader",
                include: PATHS.fa
            }
        ]
    }
};

if (ENV === 'development') {
    module.exports = merge(common, {
        devServer: {
            contentBase: PATHS.build,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [new webpack.HotModuleReplacementPlugin()]
    });
} else {
    module.exports = merge(common, {});
}