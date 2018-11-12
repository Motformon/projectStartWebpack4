const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let conf = {
	entry: './src/js/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist/'
	},
	devServer: {
		overlay: true,
	},
	module: {
		rules: [
			// {
			// 	test: /\.html$/,
			// 	use: 'html-loader'
			// },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				//exclude: '/node_modules/'
			},
			{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					publicPath:"./",
					fallback: 'style-loader',
					use: 
						[
							{loader:'css-loader'},
							{loader:'sass-loader'},
		
							{
								loader:'postcss-loader',
								options: {
									plugins: [
										autoprefixer({
												browsers:['ie >= 8', 'last 4 version']
										})
									],
								}
							},
						]
				})
			},
			{
				test: /\.(png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							fallback: 'responsive-loader'
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/,
				loader: 'url-loader',
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
		new ExtractTextPlugin("style.css"),
  ],
	devtool: 'eval-sourcemap'
};

module.exports = (env, options) => {



	let production = options.mode === 'production';
	
	conf.devtool = production ? false : 'eval-sourcemap';

	return conf;
}