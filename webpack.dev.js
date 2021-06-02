const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

const ROOT = __dirname;

module.exports = merge(common, {
	mode: "development",
	devServer: {
		contentBase: "./build",
		hot: true,
		open: true,
		historyApiFallback: true,
		port: 3000,
	},
	output: {
		filename: "x.bundle.js",
		path: path.resolve(ROOT, "build"),
	},
});
