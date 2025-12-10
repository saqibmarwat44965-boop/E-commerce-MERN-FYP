const path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // Add loaders for JavaScript/JSX files, CSS, etc.
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      "stream": require.resolve('stream-browserify'),
      "path": require.resolve('path-browserify'),
      "crypto": require.resolve('crypto-browserify'),
      "url": require.resolve('url/'),
      "util": require.resolve('util/'),
      "child_process": false,
      "net": false,
      "fs": false
    }
  },
  // Other configuration options
};