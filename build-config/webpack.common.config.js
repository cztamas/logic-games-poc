'use strict';

const path = require('path');

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, '../src/index.jsx')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  }
};
