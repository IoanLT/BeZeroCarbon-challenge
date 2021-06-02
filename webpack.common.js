const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT = __dirname;

module.exports = {
	entry: {
		main: "./src/index.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(ROOT, "public/index.html"),
		}),
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/, // if jsx file is found use babel
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/, // if css files are found use below 
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(svg|phg|jpg|gif)$/,
				use: "file-loader",
			},
		],
	},
};
