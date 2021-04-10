const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }), // Generates default index.html
    new HtmlWebpackPlugin({
      filename: 'place.html',
      template: './place.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'dress-code.html',
      template: './dress-code.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'presents.html',
      template: './presents.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        loader: "css-loader"
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    // contentBase: __dirname, // path.join(__dirname, 'dist'),
    // compress: true,
    port: 9000,
    hot: true
  },
};