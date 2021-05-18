const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

let plugins = [];

plugins.push(
	new HtmlWebpackPlugin({
		hash: true,
		minify: {
			html5: true,
			collapseWhitespace: true,
			removeComments: true,
		},
		filename: 'index.html',
		template: __dirname + '/main.html',
	})
);

let SERVICE_URL = JSON.stringify('http://localhost:3000');

if (process.env.NODE_ENV === 'production') {
	SERVICE_URL = JSON.stringify('http://minha-api');
	plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

	plugins.push(
		new CssMinimizerPlugin({
			minimizerOptions: {
				preset: [
					'default',
					{
						discardComments: { removeAll: true },
					},
				],
			},
		})
	);
}

plugins.push(new webpack.DefinePlugin({ SERVICE_URL }));

module.exports = {
	mode: 'none',
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
	},
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		],
	},
};
