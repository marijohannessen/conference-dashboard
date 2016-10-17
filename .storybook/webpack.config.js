const path = require('path');
const validate = require('webpack-validator')

module.exports = validate({
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(__dirname, '../app/scss/')
      }
    ]
  }
})