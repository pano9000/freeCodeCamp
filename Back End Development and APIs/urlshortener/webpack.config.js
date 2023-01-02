//const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/frontend/js/index.js',
  output: {
    path: `${process.cwd()}/public`,
    filename: 'dist.js',
  },
};