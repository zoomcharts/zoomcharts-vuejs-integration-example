const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './build/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: "css-loader"
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            {
                from: './node_modules/@dvsl/zoomcharts/lib/assets',
                to: 'assets'
            }
        ]),
        new ExtractTextWebpackPlugin("main.css")
    ],

    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 9001
    }
}