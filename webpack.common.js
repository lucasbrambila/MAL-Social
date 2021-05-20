const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',

	output: {
		assetModuleFilename: '[name][ext]'
	},
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
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(png|jpg|gif)$/,
				type: 'asset/resource'
			},
			{
				test: /\.svg$/,
				type: 'asset/inline'
			}
		],
	},

	devtool: 'source-map',
};
