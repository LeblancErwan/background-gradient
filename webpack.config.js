var path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  watch: true,
  devServer: {
    compress: true,
    port: 9000,
  },
  output: { path: path.resolve(__dirname, 'docs') },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'index.html'),
          to: path.resolve(__dirname, 'docs'),
        },
        {
          from: path.resolve(__dirname, 'src/css'),
          to: path.resolve(__dirname, 'docs/css'),
        },
        {
          from: path.resolve(__dirname, 'src/images'),
          to: path.resolve(__dirname, 'docs/images'),
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
};
