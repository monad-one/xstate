const webpack = require('webpack');

module.exports = {
  output: {
    library: 'xstateUtils',
    libraryTarget: 'umd'
  },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
};
