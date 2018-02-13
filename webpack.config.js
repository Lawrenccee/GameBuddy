const path = require('path');
// const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './public/javascripts/main.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  // plugins: [
  //   new webpack.ProgressPlugin()
  // ],
  devtool: 'source-map',
};