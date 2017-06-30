var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {path: __dirname, filename: './src/bundle.js'},
	module: {
		loaders: [
			{
				// "enforce": "pre",
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query:{
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}

		]
	},
	devServer: {
		host: '0.0.0.0',
		port: 8080
	}
};
