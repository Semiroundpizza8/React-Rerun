'use strict';

module.exports = {
  entry: './browser/react/index.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query:
        {
          presets: ['react']
        }
      }
      // {
      //   test: /\.jsx?$/,         // Match both .js and .jsx files
      //   exclude: /node_modules/,
      //   loader: "babel-loader",
      //   query:
      //     {
      //       presets: ['react']
      //     }
      // }
    ]
  }
};
