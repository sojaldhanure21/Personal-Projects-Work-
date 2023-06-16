const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
    template: "index.html",
});

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.(ts||tsx)$/,
                use: {
                    loader: "ts-loader"
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
    },
    plugins: [htmlPlugin],
}