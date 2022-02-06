const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
  },
  plugins: [
    new ESLintPlugin({
      fix: true
    }),
    new HtmlWebpackPlugin({
      title: 'Mithril Boilerplate',
      favicon: './public/favicon.ico'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\/node_modules\//,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      }
    ]
  }
}
