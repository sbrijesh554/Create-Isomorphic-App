const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    entry: './index.js',
    output: {
       path:path.resolve(__dirname, '../build'),
       filename: 'main.bundle.js',
       publicPath: '/'
    },
    devServer: {
       historyApiFallback: true
    },
    plugins: [
       
      new HtmlWebpackPlugin({
         title: 'Isomorphic JS App',
         template: './index.html',
         inject: true,
         minify: {
             removeComments: true,
             collapseWhitespace: false
         }
     }),
      new MiniCssExtractPlugin({
         filename: 'style.css'
      }),
      new CopyWebpackPlugin([{
         from:'./src/assets/images',
         to:'assets/images'
     }]),
     new CleanWebpackPlugin()
    ],
   //  devtool: "#eval-source-map",
    module: {
       rules: [
          {
             test: [/.jsx$|.js$/],
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react', 'stage-2']
             }
          },
          { 
             test: [/.css$|.scss$/],
             exclude: /node_modules/,
             use: [
               MiniCssExtractPlugin.loader,        
                "css-loader",
                "sass-loader"
               ],
            },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/images'
                }
              }
            ]
          }
       ]
    }
 }
 module.exports = config;