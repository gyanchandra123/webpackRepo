var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
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
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        dependency: { not: ["url"] },
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[hash].[ext]",
              outputPath: "imgs",
            },
          },
        ],
        type: "javascript/auto",
      },
    ],
  },
};
