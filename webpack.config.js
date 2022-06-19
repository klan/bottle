const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const paths = {
  dev: {
      components: path.resolve(__dirname, 'src/components')
  },
  public: {
      path: '/',
      dist: path.resolve(__dirname, 'dist')
  }
};

module.exports = {
  entry: path.resolve(__dirname, './src/components/index.tsx'),
  output: {
    path: paths.public.dist,
    publicPath: paths.public.path,
    filename: '[name].bundle.js'
  },
  mode: 'development',
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.m?(j|t)sx?$/,
        include: [paths.dev.components],
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['@babel/env', '@babel/preset-react', '@babel/preset-typescript']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      inject: 'body'
    })
  ]
};