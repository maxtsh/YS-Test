//  DEVELOPMENT WEBPACK CONFIGURATION
const path = require("path");
const webpackCommon = require("./webpack.base");

module.exports = {
  ...webpackCommon,
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/",
  },
  // We Don't use hashes in dev mode for better performance
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "inline-source-map",
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
    port: 3030,
  },
  performance: {
    hints: false,
  },
};
