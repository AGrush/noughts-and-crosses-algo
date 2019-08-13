var path = require('path');

module.exports = {
  entry: {
  	bundle: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  }
}