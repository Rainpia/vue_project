// 打包html的插件
const HtmlWebPackPlugin = require("html-webpack-plugin");
// 打包css的插件 (just for webpack4)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path')
const root = path.resolve(__dirname, '..') // 项目的根目录绝对路径

module.exports = {
    // mode:'production' || 'development',
    entry: path.join(root, 'src/main.js'),  // 入口文件路径
    output: {
      path: path.join(root, 'dist'),  // 出口目录
      filename: 'main.js'  // 出口文件名
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        // 打包html的插件使用
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        // 打包css的插件使用
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    plugins: [
       // 打包html的插件使用
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      }),
      // 打包css的插件使用
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  };