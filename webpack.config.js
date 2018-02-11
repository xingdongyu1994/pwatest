const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const OfflinePlugin = require('offline-plugin')

module.exports = {
  context: path.resolve('src'),
  entry: './main.js',
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test:/\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new OfflinePlugin({
      safeToUseOptionalCaches: true,

      caches: {
        main: [
          'main.js',
          'index.html'
        ],
        additional: [
          '*.woff',
          '*.woff2'
        ],
        optional: [
          ':rest:'
        ]
      },

      ServiceWorker: {
        events: true
      },
      AppCache: {
        events: true
      }
    })
  ]
}