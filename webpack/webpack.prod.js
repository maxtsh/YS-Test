//  PRODUCTION WEBPACK CONFIGURATION
const path = require("path");
const webpackCommon = require("./webpack.base");

module.exports = {
  ...webpackCommon,
  mode: "production",
  output: {
    clean: true,
    path: path.resolve(__dirname, "build"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].chunk.js",
  },
  optimization: {
    minimize: true,
    nodeEnv: "production",
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [...webpackCommon.plugins],
  devtool: false,
};
