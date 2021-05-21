const path = require('path');
const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/template.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					'style-loader', //extract css into files
					'css-loader', //turn css into commonjs
					'sass-loader', // turn sass into css
					'postcss-loader' //prefix css for compabilities
				],
			},
		]
	},

	devServer: {
		contentBase: './dist',
	},
});
