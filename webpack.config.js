// 打包html的插件
const HtmlWebPackPlugin = require("html-webpack-plugin");
// 打包css的插件 (just for webpack4)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 // 打包vue的插件
const { VueLoaderPlugin } = require('vue-loader');

// const nodeSassMagicImporter = require('node-sass-magic-importer');

const path = require('path')
const root = path.resolve(__dirname) // 项目的根目录绝对路径

const env = process.env.NODE_ENV;
// __dirname : /Users/ryp/yrp_project/vue_project/service-hot

module.exports = {
    mode:env,
    entry: path.join(root, 'src' ,'main.js'),  // 入口文件路径
    output: {
      path: path.join(root, 'dist'),  // 出口目录
      filename: 'main.js'  // 出口文件名
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
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
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                // importer: nodeSassMagicImporter(),
              },
            },
            
          ],
        },
      ]
    },
    plugins: [
      // 打包vue的插件使用
      new VueLoaderPlugin(),
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