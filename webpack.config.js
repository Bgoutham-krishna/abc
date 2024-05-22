const path = require('path');

module.exports = {
  entry: './index.js', // Updated path to the entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
   resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "fs": false,
      "http": require.resolve("stream-http"),
      "stream": require.resolve("stream-browserify"),
      "net": false,
    },
  },
  mode: 'production', // Or 'development' if that's what you need
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
