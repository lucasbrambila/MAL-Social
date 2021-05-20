const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',

	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebPackPlugin({
			template: "./src/template.html",
			title: 'Production',
		})
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					// whithout additional settings, this will reference .babelrc
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
					'postcss-loader'
				],
			},
		],
	},

	devtool: 'source-map',
};
