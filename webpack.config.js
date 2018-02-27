const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
    mode: "development",
    devtool: 'eval-source-map',
    entry:  __dirname + "/src/react/application.js",
    output: {
        path: __dirname + "/build",
        filename: "app@bundle.js"
    },
    devServer: {
        contentBase: "./build",
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}
