const path = require('path')
import webpack from 'webpack'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
import mockMiddleware from './mockMiddleware';

module.exports = {
    entry: {
        main: ['./src/index.tsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx", ".json"],
        alias: {
            "@": path.resolve(__dirname, '../../src'),
        }

    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(jsx|js|tsx|ts)$/,
                exclude: /node_modules/, // 不解析node_modules
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    compilerOptions: {
                        module: 'es2015'
                    }
                },
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        // new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        onBeforeSetupMiddleware: function (devServer: any) {
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }
            devServer.app.use(mockMiddleware)
        }
    },
}