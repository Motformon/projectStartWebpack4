const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist/'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
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
      }
		]
	},
	plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
	devtool: 'eval-sourcemap'
};

module.exports = (env, options) => {

	let production = options.mode === 'production';
	
	conf.devtool = production ? false : 'eval-sourcemap';

	return conf;
}