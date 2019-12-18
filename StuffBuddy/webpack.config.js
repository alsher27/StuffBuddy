const HtmlWebPackPlugin = require('html-webpack-plugin');
require('@babel/polyfill');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const bundleFolder = "./wwwroot/assets/";

module.exports = {
  entry: {main:['@babel/polyfill', './src']},
  mode: 'development',
  resolve: { extensions: ['.js', '.jsx'] },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './js/dist',
    hot: true,
    historyApiFallback: true,
    port: 3000,
  },
  output: {
    filename: "bundle.js",
    publicPath: 'assets/',
    path: path.resolve(__dirname, bundleFolder)
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
          },
        },
      },
    ],
  },
};
