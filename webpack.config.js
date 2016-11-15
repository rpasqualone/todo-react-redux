const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production';
const VERSION = require('./package.json').version;

module.exports = {
	entry: './src/index.jsx',
	devtool: PROD ? null : 'source-map',
	devServer: {
		port: process.env.NODE_DEV_WWW_PORT || 3000
	},
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: '',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.jsx', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: [
						'latest',
						'react'
					],
					plugins: [
						'transform-decorators-legacy',
						'transform-class-properties',
						'transform-object-rest-spread'
					]
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass')
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style', 'css!less')
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|gif|jpg|png|cur)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				query: {
					name: './assets/[name].[hash].[ext]'
				}
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
				query: {
					attrs: ['img:src', 'link:href']
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				API_URI: JSON.stringify(process.env.API_URI),
				VERSION: JSON.stringify(VERSION)
			}
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html'
		}),
		new ExtractTextPlugin('bundle.css')
	]
};

