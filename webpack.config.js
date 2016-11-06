var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: "'http://localhost:8080/'"
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', 'png', 'svg'],
    modulesDirectories: ['node_modules']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders: [
          'babel'
        ]
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?modules&localIdentName=[name]---[local]---[hash:base64:5]'
      },
    ]
  },
  devServer: {
    contentBase: "./src",
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = config;