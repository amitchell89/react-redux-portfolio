var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/dist');
var APP_DIR = path.resolve(__dirname, 'src/client');

var config = {
    entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080'
  },
    module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
         loaders: ["babel-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "./src/client",
    hot: true
  }
};


module.exports = config;