let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let webpack = require("webpack");

module.exports = {
  devServer: {
    port: 3000,
    progress: true,
    contentBase: "./dist",
    compress: true,
    hot: true // 启用热更新
  },
  mode: "production", // 生产模式
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/newtab.html",
      filename: __dirname + "/dist/newtab.html"
    }),
    new webpack.BannerPlugin("Make 2020 by Kuari.")
  ],
  module: {
    //loader
    rules: [
      {
        test: /\.ttf$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.html$/,
        use: "html-withimg-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1,
            outputPath: "img/"
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insertAt: "top"
            }
          },
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    // 解析 第三方包 common
    modules: [path.resolve("node_modules")],
    mainFields: ["style", "main"],
    extensions: [".js", ".css"]
  }
};
