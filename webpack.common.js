const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Homepage',
            inject: 'body',
            template: './src/template.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[hash][ext]',
                },
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][hash][ext]',
                },
            },
        ],
    },
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};
