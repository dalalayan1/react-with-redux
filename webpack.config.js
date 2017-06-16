var path = require('path');

console.log('running webpack-dev');

var config = {
	entry:[
		'./src/main.js'
		],
	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js',
        publicPath: '/'
	},
	devServer: {
		inline: true,
		contentBase:'./',
		port:3001
	},
	module: {
		loaders: [
		{
			test:/\.jsx?$/,
			exclude:/node_modules/,
			loader:'babel-loader',
			query:{
				presets: ["es2015", "react", "stage-0"]
			},
			include: path.join(__dirname, 'src')
		},
		{
			test: /\.scss$/,
			exclude:/node_modules/,
			loader: 'style-loader!css-loader!sass-loader',
			include: path.join(__dirname, 'src')
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