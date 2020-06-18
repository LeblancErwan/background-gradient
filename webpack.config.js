var path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },

  plugins: [
    new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src', 'index.html'),
        to: path.resolve(__dirname, 'dist'),
        from: path.resolve(__dirname, 'src', 'css/style.css'),
        to: path.resolve(__dirname, 'dist/css'),
      }, ],
    }),
  ],
};