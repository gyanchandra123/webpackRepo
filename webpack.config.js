var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],

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
};
