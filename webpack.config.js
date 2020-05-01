const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    style: "./index.js",
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Soccer/Football Field - CSS only using one single div",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
};
