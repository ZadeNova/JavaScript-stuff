const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
      bundle: path.resolve(__dirname, 'src/index.js')
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
  },
  module: {
      rules: [
          {
              test: /\.css$/i,
              use: [
                  'style-loader',
                  'css-loader',
                  {
                      loader: 'postcss-loader',
                      options: {
                          postcssOptions: {
                              plugins: [
                                  require('autoprefixer')
                              ]
                          }
                      }
                  },
                  'sass-loader'
              ]
          },
          {
              test: /\.(png|jpe?g|gif|jpeg)$/i,
              use: [
                  {
                      loader: 'file-loader',
                      options: {
                          name: '[name].[ext]',
                          outputPath: 'images/',
                      }
                  }
              ]
          }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'ToDo App',
          filename: 'index.html',
          template: 'src/template.html',
      }),
  ],
};