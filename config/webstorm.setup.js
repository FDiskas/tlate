const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.sass'],
    alias: {
      '/src': path.resolve(__dirname, '../src'),
    },
  },
};
