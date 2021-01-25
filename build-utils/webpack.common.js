const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Uses src/index.js as source code to bundle.
  entry: path.resolve(__dirname, '..', './src/index.js'),
  // Load babel on js files, exclude /node_modules.
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(woff|woff2)$/,
        use: 'url-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  plugins: [
    // Clean dist folder on build
    new CleanWebpackPlugin(),
    // Serve src/index.html template on build
    new HtmlWebpackPlugin({
      title: 'Webpack bundled successfully',
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  // Outputs bundle.js in dist folder with bundled code
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    // Add contenthash to get new bundle.js on build.
    filename: 'bundle.[contenthash].js',
  },
  // Sets up development server in /dist
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
  },
};
