const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

module.exports = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    port: 3080,
    historyApiFallback: true,
  },
};