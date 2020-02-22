const path = require('path');
const cssPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    quizlib: './src/quizlib.js'
  },
  plugins: [new cssPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [cssPlugin.loader, 'css-loader'],
      }
        ]
      }
  };
