var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

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
