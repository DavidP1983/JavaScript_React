'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
