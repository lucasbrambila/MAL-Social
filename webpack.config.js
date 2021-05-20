const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin')

const mode =
	process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
	mode: mode,

	entry: './src/index.js',
	output: {
		filename: 'bundle.[contentHash].js',
		path: path.resolve(__dirname, 'dist'),
	},

	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebPackPlugin({
			template: "./src/template.html"
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

	devServer: {
		contentBase: './dist',
	},
};
