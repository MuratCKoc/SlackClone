const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: 'js/bundle.js'
	},
	context: __dirname,
	resolve: {
		extensions: ['.js', '.jsx', 'json']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
           	presets: ['es2015', 'react']
        }
			},
			{
				test: /\.html$/,
				use: [
				{
					loader: 'html-loader'
				}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	]
};