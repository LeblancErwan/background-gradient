var path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  watch: true,
  devServer: {
    compress: true,
    port: 9000,
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'index.html'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, 'src/css'),
          to: path.resolve(__dirname, 'dist/css'),
        },
        {
          from: path.resolve(__dirname, 'src/images'),
          to: path.resolve(__dirname, 'dist/images'),
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
};
