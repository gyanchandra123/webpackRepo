const path = require("path");

module.exports = {
  mode: "development",  
  entry: "./src/index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", //3. Inject styles into DOM using the <style> element , order is important
          "css-loader", //2. Turns css into common js code
         /*  "sass-loader" //1. Turns sass into css */
        ]   
      }
    ]
  }
};
