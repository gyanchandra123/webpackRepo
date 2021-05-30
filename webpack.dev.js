const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
  mode: "development",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM using the <style> element , order is important
          "css-loader", //2. Turns css into common js code
          "sass-loader", //1. Turns sass into css
        ],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
});
