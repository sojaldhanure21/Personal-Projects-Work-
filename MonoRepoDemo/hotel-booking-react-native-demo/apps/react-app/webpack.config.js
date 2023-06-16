const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
    template:"./src/index.html",
});

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: "/node_modules",
            use: {
                loader: "babel-loader",
            }
            },
            {
            test: /\.(tsx?||ts)$/,
            use: "ts-loader",
            exclude: /node_modules/,
              },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js",".jsx"],
      },
    plugins: [htmlPlugin],
}