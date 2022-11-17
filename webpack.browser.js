const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: { v1: "./src/bundles/spa-v1.js", v2: "./src/bundles/spa-v2.js" },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    library: ['QiwiCheckout']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname)
  },
  devtool: 'source-map',
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new Dotenv()
  ]
};
