// const path = require('path')
// const HTMLPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'build')
//   },
//   optimization: {
//     minimizer: [
//       new OptimizeCssAssetsPlugin({}),
//       new UglifyJsPlugin({})
//     ]
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname, 'build'),
//     port: 4200
//   },
//   plugins: [
//     new HTMLPlugin({
//       filename: 'index.html',
//       template: './src/index.html'
//     }),
//     new MiniCssExtractPlugin({
//       filename: 'style.css'
//     })
//   ],
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx']
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader']
//       },
//        
//       { 
//         test: /\.(js|jsx|ts|tsx)$/, 
//         exclude: /node_modules/, 
//         loader: "babel-loader" 
//       }
//     ]
//   }
// }


const clientConfig = require('./webpack/client.config');
const serverConfig = require('./webpack/server.config');

module.exports = [clientConfig, serverConfig];
