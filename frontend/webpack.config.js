const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    javascript: path.resolve(__dirname, 'index.jsx'),
    html: path.resolve(__dirname, 'index.html'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader/webpack',
          'babel-loader',
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
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    publicPath: '/',
    hot: true,
  },
};
