const path = require('path')
const miniCss = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
   context: path.resolve(__dirname, 'src'), 
   entry: './index.js',
   output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [
          {
         test:/\.(s*)css$/,
         use: [
             miniCss.loader,
             'css-loader',
             'sass-loader',
         ]
      },
    //   {
    //     test: /\.css$/,
    //     use: ['style-loader', 'css-loader']
    //   },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      }
    ]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
      new HTMLWebpackPlugin({
          template: './index.html'
      }),
      new CleanWebpackPlugin()
   ]
};