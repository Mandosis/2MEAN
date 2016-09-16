const webpack = require('webpack');
const helpers = require('./helpers');
const resolveNgRoute = require('@angularclass/resolve-angular-routes');

module.exports = {
  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },
  module: {
    preLoaders: [],
    loaders: [
      // TypeScript
      { test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'raw-loader' }
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      helpers.root('../src/client'),
      resolveNgRoute(helpers.root('../src/client'))
    )
  ]

};
