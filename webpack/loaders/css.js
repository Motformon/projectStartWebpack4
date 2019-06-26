const path = require('path');
const postcssNested = require('postcss-nested');
const postcssCustomMedia = require('postcss-custom-media');
const postcssImport = require('postcss-import');
const postcssImportAliasResolver = require('postcss-import-alias-resolver');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssnano = require('cssnano');

const { IS_DEV } = require('../env');

const resolverOptions = {
    alias: { styles: path.resolve('src/styles') },
    mergeExtensions: 'extend'
};

module.exports = {
    client: [
		// 	{
		// 		test: /\.css$/,
		// 		use: [
		// 			IS_DEV && 'css-hot-loader',
		// 			MiniCssExtractPlugin.loader,
		// 			'css-loader',
		// 		]
		// 	},
			{
        test: /\.(css)$/,
        use: [
            IS_DEV && 'css-hot-loader',
						MiniCssExtractPlugin.loader, 
						// 'css-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true,
								localIdentName: '[local]___[hash:base64:5]',
							},
						},
						// 'postcss-loader'
            // {
            //     loader: 'postcss-loader',
            //     options: {
						// 				plugins: [
						// 						postcssImport({ resolve: postcssImportAliasResolver(resolverOptions) }),
						// 						postcssCustomMedia(),
						// 						postcssNested(),
						// 						!IS_DEV && cssnano({ preset: 'default' })
						// 				]
            //     }
						// }
				]
			},
			// {
			// 	test: /\.(css)$/,
			// 	loader: 'postcss-loader',
			// 	options: {
			// 		config: {
			// 			path: './webpack/loaders/postcss.config.js',
			// 		},
			// 	},
			// }
			{
				test: /\.(scss|sass)$/,
				use: [
					MiniCssExtractPlugin.loader, 
					'css-loader', 
					'sass-loader'
				]
			}
    ],
    server: [
			{
				test: /\.css$/,
        loader: 'null-loader'
			},
			{
				test: /\.(scss|sass)$/,
				loader: 'null-loader'
			}
		]
};




         // Convert CSS into JS module
				//  {
				// 	issuer: { not: [reStyle] },
				// 	use: 'isomorphic-style-loader',
				// },

				// Process external/third-party styles
				// {
				// 	exclude: SRC_DIR,
				// 	loader: 'css-loader',
				// 	options: {
				// 		sourceMap: isDebug,
				// 		minimize: isDebug ? false : minimizeCssOptions,
				// 	},
				// },

				// Process internal/project styles (from src folder)
				// {
				// 	include: SRC_DIR,
				// 	loader: 'css-loader',
				// 	options: {
				// 		// CSS Loader https://github.com/webpack/css-loader
				// 		importLoaders: 1,
				// 		sourceMap: isDebug,
				// 		// CSS Modules https://github.com/css-modules/css-modules
				// 		modules: true,
				// 		localIdentName: isDebug
				// 			? '[name]-[local]-[hash:base64:5]'
				// 			: '[hash:base64:5]',
				// 		// CSS Nano http://cssnano.co/
				// 		minimize: isDebug ? false : minimizeCssOptions,
				// 	},
				// },

				// Apply PostCSS plugins including autoprefixer
				// {
				// 	loader: 'postcss-loader',
				// 	options: {
				// 		config: {
				// 			path: './tools/postcss.config.js',
				// 		},
				// 	},
				// },

	