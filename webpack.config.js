const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const DashboardPlugin = require('webpack-dashboard/plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  // devtool: 'source-map',
  entry: ['./src'],
  output: {
    path: path.resolve('./bin'),
    filename: 'oid',
    library: 'oid',
  },
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/],
        exclude: [/node_modules/, '/**/*.test.js'],
        loader: 'babel',
        query: {
          presets: ['env'],
        },
      },
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
    new DashboardPlugin(),
  ],
};
