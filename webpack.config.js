const path = require('path');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

const PATHS = {
  app: path.join(__dirname, 'app/components/'),
  build: path.join(__dirname, 'build/')
}

const options = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  // devtool: 'eval-source-map',
  entry: {
    app: PATHS.app + 'index.jsx'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ],
    loaders: [
      {
        // Test expects a RegExp! Note the slashes!
        test: /\.css$/,
        loaders: ['style', 'css'],
        // Include accepts either a path or an array of paths.
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true
        },
        include: PATHS.app
      }
    ]
  }
}

options.target = webpackTargetElectronRenderer(options);

module.exports = options;
