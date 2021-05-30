
module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },

  module: {
    rules: [
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
