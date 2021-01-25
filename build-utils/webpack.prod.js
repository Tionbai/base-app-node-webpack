const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.join(__dirname, '../.env.production'),
    }),
    new MiniCssExtractPlugin(),
  ],
  devtool: 'source-map',
};
