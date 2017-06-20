var path = require('path');
var webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
console.log('running webpack-dev');

var config = {
	entry:[
		//'webpack-hot-middleware/client',
		'./src/main.js'
		],
	output: {
        path: path.join(__dirname,'dist'),
        filename: 'SSR-bundle.js',
        libraryTarget: 'commonjs2'
    },
	externals: nodeExternals(),
	devServer: {
		inline: true,
		contentBase:'./',
		port:3001
	},
	plugins: [
		//new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
		{
			test:/\.jsx?$/,
			exclude:/node_modules/,
			loader:'babel-loader',
			query: {
				presets: [ "es2015", "stage-0", "react" ],
				plugins: [ "transform-decorators-legacy" ]
			},
			include: path.join(__dirname, 'src')
		},
		{
			test: /\.scss$/,
			exclude:/node_modules/,
			loader: 'style-loader!css-loader!sass-loader'
		},
		{
			test: /\.(eot|ttf|woff|woff2)$/,
			exclude:/node_modules/,
			loader: 'url-loader?limit=10000'
		},
		{
			test: /\.(jpe?g|png|gif|svg)$/i, 
			exclude:/node_modules/,
			loader: "file-loader"}
		]
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx']
	}
}
module.exports = config;