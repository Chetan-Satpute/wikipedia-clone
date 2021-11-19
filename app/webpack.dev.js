const path = require('path');
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const config = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: '/wikipedia-clone',
    },
  },
};

module.exports = merge(common, config);
