/* global process */
/**
 * NOTE: Babel 7 requires @babel/... presets
 */
/**
 * Usually, it's recommended to extract the style sheets into a dedicated file in production
 * using the mini-css-extract-plugin. This way your styles are not dependent on JavaScript.
 */
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const miniCSSExtractPlugin = new MiniCSSExtractPlugin();
/**
 * This plugin generates an HTML file with <script> injected,
 * writes this to dist/index.html, and minifies the file.
 */
const HTMLWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
// Webpack plugin configs

//HTMLWebpackPlugin configs: https://github.com/jantimon/html-webpack-plugin#options
const htmlPlugin = new HTMLWebpackPlugin({
    template: './website/entry.html',
    filename: './index.html',
});

module.exports = {
    // Entry points to the application
    entry: {
        main: './website/homepage.jsx',
    },
    // Where to output the build
    output: {
        path: path.resolve('dist'),
        filename: 'main.js',
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/,
                // ORDER MATTERS (starting from back of array)
                // sass-loader compiles sass into css
                // css-loader resolves the css files
                // style-loader adds the <style> tag to the DOM
                use: [
                    {
                        // fallback to style-loader in development
                        loader:
                            process.env.NODE_ENV !== 'production'
                                ? 'style-loader'
                                : MiniCSSExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]_[hash:base64]',
                            sourceMap: true,
                            minimize: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    plugins: [htmlPlugin, miniCSSExtractPlugin],
};
