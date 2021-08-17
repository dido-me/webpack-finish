const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const DotenvWebpack = require('dotenv-webpack')

module.exports={
    entry: "./src/index.jsx",
    output:{
        path: path.resolve(__dirname,"../dist"),
        assetModuleFilename: "assets/[hash][ext][query]"
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/i,
                exclude:/node_mudules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.css$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|gif|jpe?g)$/i,
                type: "asset"
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new CleanWebpackPlugin(),
        new DotenvWebpack({
            path:"./.env",
            safe:false
        })

    ],
    resolve:{
        extensions:[".js",".jsx","json"]
    }
}