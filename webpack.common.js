const path = require("path")

module.exports = {
	entry: './src/index.js',

	output: {
		assetModuleFilename: '[name][hash][ext]',
		clean: true
	},

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
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(ico|jpeg|png|jpg|gif)$/,
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
