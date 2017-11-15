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
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: [
                    'style', 'css?url=false'
                ],
                include: PATHS.src
            }, {
                test: /\.css$/,
                loaders: [
                    'style', 'css?url=false'
                ],
                include: PATHS.framework7
            }, {
                test: /\.jsx?$/,
                loader: 'babel?cacheDirectory',
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

            // Enable history API fallback so HTML5 History API based
            // routing works. This is a good default that will come
            // in handy in more complicated setups.
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            // Display only errors to reduce the amount of output.
            stats: 'errors-only',

            // Parse host and port from env so this is easy to customize.
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [new webpack.HotModuleReplacementPlugin()]
    });
} else {
    // config can be added here for minifying / etc
    module.exports = merge(common, {});
}
