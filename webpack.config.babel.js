const webpack = require('webpack');
const path = require('path');

const {LOG_ONCE_PLUGIN} = require('./src/babel/log-once-plugin');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                configFile: false,
                presets: ['@babel/preset-env'],
                plugins: [LOG_ONCE_PLUGIN],
              }
            }
        }]
    }
};
