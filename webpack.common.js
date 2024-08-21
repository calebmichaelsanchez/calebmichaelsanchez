var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/scripts"),
  output: {
    path: path.resolve(__dirname, "./dist/scripts"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}