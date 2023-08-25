const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "none",
    entry: path.resolve(__dirname, 'development/index.js'),
    devtool: "inline-source-map",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'development'),
        },
        compress: true,
        port: 3001,
        open: true,
        hot: true,
        historyApiFallback: {
            index: 'index.html'
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
    ]
};
