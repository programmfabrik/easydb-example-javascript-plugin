const path = require('path');
const pluginName = "javascript-example-plugin" // Same as manifest.yml

module.exports = {
	entry: './src/index.js',
	mode: "development",
	output: {
		path: path.resolve(__dirname, 'build/webfrontend'),
		filename: pluginName + '.js'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};