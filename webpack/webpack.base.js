// COMMON WEBPACK CONFIGURATION
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../app/index.tsx"),
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  plugins: [
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../app/index.html"),
      filename: "index.html",
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transpile all .js / .jsx and .ts / .tsx files with Babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        include: [path.resolve(__dirname, "../app")],
      },
    ],
  },
  resolve: {
    modules: ["node_modules", "app"],
    extensions: [".js", ".jsx", ".tsx", ".ts", ".react.js"],
    mainFields: ["browser", "jsnext:main", "main"],
  },
  target: "web", // Make web variables accessible to webpack, e.g. window
  performance: {
    hints: false,
  },
};
