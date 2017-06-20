'use strict';

var path = require('path');
var webpack = require('webpack')
module.exports = {
  devtool: 'source-map',
  entry: [
	'webpack-hot-middleware/client',
	'./src/main.js'
  ],
  output: {
	path: path.join(__dirname, 'build'),
	filename: 'bundle.js',
	publicPath: '/static/'
  },

  plugins: [
	new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
	alias: {
	},
	extensions: ['.js', '.jsx']
  },
  module: {
	loaders: [
		{
		  test: /\.jsx?$/,
		  loader: 'babel-loader',
		  exclude: /node_modules/,
		  include: __dirname,
		  query: {
		    presets: [ 'react-hmre', "es2015", "stage-0", "react" ],
		    plugins: [ "transform-decorators-legacy" ],
		  }
		},
        {
			test: /\.scss$/,
			exclude:/node_modules/,
			loader: 'style-loader!css-loader!sass-loader',
			include: path.join(__dirname, 'src')
		},
		{
		  test: /\.css$/,
		  loader: "style!css",
		},
	]
  }
};
