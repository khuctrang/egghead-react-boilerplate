const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const path = require('path');

console.log('-------' + path.resolve(__dirname, 'public'));

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 9000,
  },
  devtool: 'source-map',
});
