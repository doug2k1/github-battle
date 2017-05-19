const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:'./app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index-bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
}
