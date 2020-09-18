const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return({
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(jpg|png|woff|woff2|eot|ttf|gif|svg)$/,
                    loader: 'file-loader',
                    query: {
                        name: 'assets/imgs/[name].[ext]'
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/template.html'
            })
        ],
        devServer: {
            historyApiFallback: true,
            contentBase: './public',
            host: '0.0.0.0',
            port: 3000,
            compress: true,
            publicPath: '/'
        }
    })
}