const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.ts',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './public',
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/, },
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"], },
      { test: /\.html$/i, loader: "html-loader", },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource', },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.bundle.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Frontend Mentor | Intro section with dropdown navigation',
      template: './src/template.html',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true
  }
}